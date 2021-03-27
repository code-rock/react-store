import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'; 
import FilterFormButton from '../components/FilterFormButton/FilterFormButton';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import ProductsList from '../components/ProductsList';
import Pagination from '../components/Pagination';
import FilterField from '../components/FilterField/FilterField';
import RangeFilter from '../components/FilterRange';
import ContentColumn from '../components/ContentColumn/ContentColumn';
import DiscountFilter from '../components/DiscountFilter/DiscountFilter';
import productsFiltersClear from '../store/actions/productsFiltersClear';
import productsChunks from '../store/selectors/productsChunks';
import productsStatusChanged from '../store/actions/productsStatusChanged';
import  addProducts from '../store/actions/productsAdd';

class ProductsPage extends React.Component {
    componentDidMount() {
        this.props.setProducts('https://course-api.school.csssr.com/products');
    }

    getSnapshotBeforeUpdate() {
        if (this.props.status !== 'loading') {
            if (this.props.productsChunks.length) {
                if (this.props.status !== 'ok') {
                    this.props.changeProductsStatus('ok');
                }                
            } else {
                if (this.props.status !== 'nothing') {
                    this.props.changeProductsStatus('nothing');
                }
            }
        } 
    }

    togglePropsInArr(lastActive, value) {
        if (lastActive.length) {
            if (lastActive.includes(value)) {
                return lastActive.filter(item => item !== value);
            } else {
                return [...lastActive, value];
            }
        } else {
            return [ value ];
        }
    }

    setCategoriesUrl(location, value) {
        const searchParams = new URLSearchParams(location.search);
        const lastActive = searchParams.get('activeCategory');
        const lastActiveArr = lastActive ? lastActive.split(',') : [];
        
        const goTo = {
            path: '/',
            search: '',
            state: {
                activeCategory: this.togglePropsInArr(lastActiveArr, value),
                page: 1
            }
        }

        if (goTo.state.activeCategory.length) {
            searchParams.set('activeCategory', goTo.state.activeCategory.join(','));
        } else {
            searchParams.delete('activeCategory');
        }        

        searchParams.set('page', 1);
        goTo.search = searchParams.toString();
        return goTo;
    }

    render() {
        const { location, status, productsChunks, page, clearFilters, categories, onSubmit, activeCategory } = this.props;

        return <ContentColumn>
                    <form onSubmit={onSubmit}>
                        <FilterField title="Цена"><RangeFilter /></FilterField>                       
                        <FilterField title="Скидка"><DiscountFilter /></FilterField>
                        <FilterField title="Категории">
                            {categories.map(type => ( 
                                <CategoryButton isActive={activeCategory.includes(type)}  
                                                value={type}
                                                goTo={() => this.setCategoriesUrl(location, type)} />
                            ))}
                        </FilterField>     
                        <FilterFormButton value="Сбросить фильтры" handleClick={clearFilters} url='/' />       
                    </form>
                    <div>
                        <ProductsList page={page} products={productsChunks} status={status} />
                        {status === 'ok' && <Pagination max={productsChunks.length} page={page} />} 
                    </div> 
                </ContentColumn> 
        }
};

const mapStateToProps = (state) => ({
    location: state.router.location,
    search: state.router.location.search,
    categories: state.products.categories,
    productsChunks: productsChunks(state),
    activeCategory: state.filter.activeCategory,
    page: state.filter.page,
    status: state.products.status
});

const mapDispatchToProps = (dispatch) => ({
    setProducts: (url) => dispatch(addProducts(url)),
    changeProductsStatus: (status) => dispatch(productsStatusChanged(status)),
    clearFilters: () => dispatch(productsFiltersClear())

});

const ProductPageConnect = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsPage))

export default ProductPageConnect;