import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const FlashsaleSectionFlipped = ({items = []}) => {
  return (
    <section className='flashsale-flipped container'>
        <div className="row row-cols-1 row-cols-md-2">
            {
            items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
        <div className="flashsales-box">
            <div className="flashsales-body">
                <h1 className="flashsales-title">2 FOR USD $49</h1>
                <NavLink to={`/products`} className="btn-theme">
                <span className="corner-left"></span>
                FLASH SALE
                <span className="corner-right"></span>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default FlashsaleSectionFlipped