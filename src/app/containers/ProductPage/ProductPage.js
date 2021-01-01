import React, { PureComponent } from 'react';
import FilterFormButton from '../../components/FilterFormButton/FilterFormButton';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import FilterField from '../../components/FilterField/FilterField';
import ProductList from '../../components/ProductList/ProductList';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import ContentColumn from '../../components/ContentColumn/ContentColumn';
import DiscountFilter from '../../components/DiscountFilter/DiscountFilter';

class ProductPage extends PureComponent {
    render() {
        const { onSubmit, onChange, category, activeCategory, products } = this.props;
        return <ContentColumn>
                    <form onSubmit={onSubmit}>
                        <FilterField title="Цена"><RangeFilter /></FilterField>                       
                        <FilterField title="Скидка"><DiscountFilter /></FilterField>
                        <FilterField title="Категории">
                            {category.map(type => (
                                <CategoryButton onChange={onChange} 
                                                isActive={activeCategory.includes(type)}  
                                                value={type} />
                            ))}
                        </FilterField>     
                        <FilterFormButton value="Сбросить фильтры" />       
                    </form>
                    <ProductList products={products} />
                </ContentColumn>          
    }
};

export default ProductPage;