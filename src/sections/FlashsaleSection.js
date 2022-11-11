import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const FlashSaleSection = ({items = []}) => {
  return (
    <section className='flashsale container'>
        <div className="flashsales-box">
            <div className="flashsales-body">
                <h1 className="flashsales-title">2 FOR USD $29</h1>
                <NavLink className="btn-theme">
                <span className="corner-left"></span>
                FLASH SALE
                <span className="corner-right"></span>
                </NavLink>
            </div>
        </div>
            <div className="row row-cols-1 row-cols-md-2">
                {
                  items.map( product => <ProductCard key={product.articleNumber} item={product} />)
                }
            </div>
    </section>
  )
}

export default FlashSaleSection