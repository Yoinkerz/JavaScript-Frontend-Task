import React from 'react'
import showcaseLeft from '../assets/images/showcase-img-1.svg'
import showcaseRight from '../assets/images/showcase-img-2.svg'

const ShowcaseSection = () => {
  return (
    <section className="showcase container">
            <img src={ showcaseLeft } className="img-left" alt="showcase-img-1" />
            <div className="showcase-body">
                <h1>Sale Up</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <a className="btn-theme" href="#">
                    <span className="corner-left"></span>
                    SHOP NOW
                    <span className="corner-right"></span>
                </a>
            </div>
            <img src={ showcaseRight } className="img-right" alt="showcase-img-2" />
        </section>
  )
}

export default ShowcaseSection