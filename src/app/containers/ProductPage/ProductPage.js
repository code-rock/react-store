import React, { PureComponent } from 'react';
import FilterFormButton from '../../components/FilterFormButton/FilterFormButton';
import CategoryButtonConnect from '../CategoryButtonConnect';
import FilterField from '../../components/FilterField/FilterField';
import ProductListConnect from '../ProductListConnect';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import ContentColumn from '../../components/ContentColumn/ContentColumn';
import DiscountFilter from '../../components/DiscountFilter/DiscountFilter';
import PaginationConnect from '../PaginationConnect';

import UsePageNumber from '../../hocs/UsePageNumber';

class ProductPageWrapper extends PureComponent {
    render() {
        const { onSubmit, category, activeCategory, search, pathname, hash} = this.props;
        console.log(activeCategory, 'activeCategory 33');
        return  <ContentColumn>
                    <form onSubmit={onSubmit}>
                        <FilterField title="Цена"><RangeFilter /></FilterField>                       
                        <FilterField title="Скидка"><DiscountFilter /></FilterField>
                        <FilterField title="Категории">
                            {category.map(type => ( 
                                <CategoryButtonConnect isActive={activeCategory.includes(type)}  
                                                       value={type}
                                                       url={'/'} />
                            ))}
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