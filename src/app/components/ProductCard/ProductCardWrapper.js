import React from 'react';
import './ProductCard.css';
import RatingComponent from '../../components/RatingComponent/RatingComponent';

function range(to) {
    let range = []
    for (let i = 1; i <= to; i++) {
        range.push(i);
    }
    return range ;
};

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
                        {range(maxRating).map(i => <RatingComponent key={i} isFilled={i <= rating} />)}
                    </div>
                    <div className='goodsPrise'>
                        {price}{subPriceContent}
                   </div>
                </div>
            </div>
}
