import React from 'react'
import { NavLink } from 'react-router-dom'
import bannerLeft from '../assets/images/Pamela-Reifs.svg'
import bannerRight from '../assets/images/Lets-Be.svg'

const BannerSection = () => {
  return (
    <section className='banners container'>
        <div className='banner-left'>
            <img src={bannerLeft} className='img-left' alt='' />
            <h1 className='text-left'>Pamela Reif's <br/> Top Picks</h1>
            <NavLink to={`/products`} className="btn-theme button-left">
                <span className="corner-left"></span>
                SHOP NOW
                <span className="corner-right"></span>
            </NavLink>
        </div>
        <div className='banner-right'>
            <img src={bannerRight} className='img-right' alt='' />
            <h1 className='text-right'>Let's Be <br/> Conscious</h1>
            <NavLink to={`/products`} className="btn-theme button-right">
                <span className="corner-left"></span>
                FLASH SALE
                <span className="corner-right"></span>
            </NavLink>
        </div>
    </section>
  )
}

export default BannerSection