import React, { PureComponent } from 'react';
import FilterFormButton from '../../components/FilterFormButton/FilterFormButton';
import CategoryButtonConnect from '../../components/CategoryButton';
import FilterField from '../../components/FilterField/FilterField';
import ProductListConnect from '../../components/ProductList';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import ContentColumn from '../../components/ContentColumn/ContentColumn';
import DiscountFilter from '../../components/DiscountFilter/DiscountFilter';
import PaginationConnect from '../../components/Pagination';

class ProductPage extends PureComponent {
    render() {
        const { onSubmit, category, activeCategory } = this.props;
        return  <React.Fragment>
                    <ContentColumn>
                        <form onSubmit={onSubmit}>
                            <FilterField title="Цена"><RangeFilter /></FilterField>                       
                            <FilterField title="Скидка"><DiscountFilter /></FilterField>
                            <FilterField title="Категории">
                                {category.map(type => (
                                    <CategoryButtonConnect isActive={activeCategory.includes(type)}  
                                                           value={type} />
                                ))}
                            </FilterField>     
                            <FilterFormButton value="Сбросить фильтры" />       
                        </form>
                        <div>
                            <ProductListConnect />
                            <PaginationConnect />
                        </div> 
                    </ContentColumn>     
                    
                </React.Fragment>   
    }
};

export default ProductPage;