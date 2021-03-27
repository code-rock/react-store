import React, { memo } from 'react';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingStar';
import ProductPrice from '../ProductPriсe/ProductPriсe';
import { Link } from 'react-router-dom';
import './styles.css';

function ProductsListPage({ products }) {
    return <div className="list"> 
                    { products.map((el) => ( 
                        <Link className='product__link' to={{ pathname: `/product/${el.id}`, state: { productID: el.id}}}>
                            <ProductItem
                                isInStock={el.isInStock === 'IN_STOCK'}
                                img={el.img}
                                title={el.name}
                                price={<ProductPrice price={el.price} curr={'₽'} size={'m'} />}
                                // subPriceContent={<ProductPrice price={el.price - (el.price / 10 * el.subPriceContent)} curr={'₽'} size={'s'} />}
                                maxRating={5}
                                rating={el.stars}
                                ratingComponent={RatingComponent}
                                key={el.id}
                            />
                        </Link>))
                    }
                </div>    
}

export default memo(ProductsListPage);