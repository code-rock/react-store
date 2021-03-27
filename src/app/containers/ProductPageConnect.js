import React from 'react';
import { connect } from 'react-redux';
import products from '../../products';
import getCategory from '../utils/getCategory';
import { getMultiplePropertyFromSearch } from '../utils/searchParamsUrl';
//import ProductsPage from '../components/ProductsPage';
import productsReceived from '../store/actions/productsReceived';
// import productsReceived from '../../store/actions/productsReceived';
import productsFilterChanged from '../store/actions/productsFilterChanged';
import {setSearchPropertyToHistory} from '../utils/searchParamsUrl';
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
import { withRouter } from 'react-router'; 
import productsStatusChanged from '../store/actions/productsStatusChanged';
import  addProducts from '../store/actions/productsAdd';
class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setProducts('https://course-api.school.csssr.com/products');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
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

    render() {
        const { status, productsChunks, page, clearFilters, categories, onSubmit, activeCategory } = this.props;

        return <ContentColumn>
                    <form onSubmit={onSubmit}>
                        <FilterField title="Цена"><RangeFilter /></FilterField>                       
                        <FilterField title="Скидка"><DiscountFilter /></FilterField>
                        <FilterField title="Категории">
                            {categories.map(type => ( 
                                <CategoryButton isActive={activeCategory.includes(type)}  
                                                value={type}
                                                url={'/'} />
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