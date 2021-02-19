import React, { PureComponent } from 'react';
import FilterFormButton from '../../components/FilterFormButton/FilterFormButton';
import CategoryButtonConnect from '../CategoryButtonConnect';
import FilterField from '../../components/FilterField/FilterField';
import ProductListConnect from '../ProductListConnect';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import ContentColumn from '../../components/ContentColumn/ContentColumn';
import DiscountFilter from '../../components/DiscountFilter/DiscountFilter';
import PaginationConnect from '../PaginationConnect';

class ProductPageWrapper extends PureComponent {
    render() {
        const { onSubmit, category, activeCategory } = this.props;
        return  <ContentColumn>
                    <form onSubmit={onSubmit}>
                        <FilterField title="Цена"><RangeFilter /></FilterField>                       
                        <FilterField title="Скидка"><DiscountFilter /></FilterField>
                        <FilterField title="Категории">
                            {/* {category.map(type => ( 
                            //     <CategoryButtonConnect isActive={activeCategory.includes(type)}  
                            //                            value={type} />
                            // ))}*/}
                        </FilterField>     
                        <FilterFormButton value="Сбросить фильтры" />       
                    </form>
                    <div>
                        <ProductListConnect />
                        <PaginationConnect />
                    </div> 
                </ContentColumn> 
    }
};

export default ProductPageWrapper;