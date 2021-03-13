import React from 'react';
import './ProductCard.css';
import RatingComponent from '../../components/RatingComponent/RatingComponent';
import range from '../../utils/range';

// type: 'horizontal', 'vertical'
export default function ProductCardWrapper({ isInStock, img, title, price, subPriceContent, maxRating, rating, type = 'vertical' }) {
    return <div className={`goods ${type}`}>
                <div>
                    <div className={isInStock ? 'goodsType' : 'goodsTypeNone'}>{isInStock ? 'В наличии' : 'Недоступен'}</div>
                    <img src={img} alt='placeholder' width='224' height='200' />
                </div>
                <div class={type === 'horizontal' ? 'info' : ''}>
                    <div className='goodsName'>{title}</div>
                    <div>
                        {range(1, maxRating).map(i => <RatingComponent key={i} isFilled={i <= rating} />)}
                    </div>
                    <div className='goodsPrise'>
                        {price}{subPriceContent}
                   </div>
                </div>
            </div>
}
