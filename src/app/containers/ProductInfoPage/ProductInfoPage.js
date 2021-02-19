import React, { PureComponent } from 'react';
import Lamp from '../../icons/Lamp';
import BackButton from '../../components/BackButton/BackButton';
import './ProductInfoPage.css';
import ProductItem from 'csssr-school-product-card';
import ProductPrice from '../../components/ProductPriсe/ProductPriсe';
import RatingComponent from '../../components/RatingComponent/RatingComponent';

class ProductInfoPage extends PureComponent {
    render() {
        const { isProductExist = false, product = {} } = this.props;

        return  <div className="product-page__container">
                    <BackButton />
                    {isProductExist 
                        ? <ProductItem
                            isInStock={product.isInStock}
                            img={product.imgProduct}
                            title={product.name}
                            price={<ProductPrice price={product.price} curr={'₽'} size={'m'} />}
                            subPriceContent={<ProductPrice price={product.subPriceContent} curr={'₽'} size={'s'} />}
                            maxRating={5}
                            rating={product.rating}
                            ratingComponent={RatingComponent}
                            key={product.id}
                          />
                        : <div className="icon__404"><Lamp /></div>}
                    
                </div>
    }
};

export default ProductInfoPage;