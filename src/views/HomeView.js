import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import { ProductContext } from '../contexts/contexts'
import FlashsaleSection from '../sections/FlashsaleSection'



const HomeView = () => {
  const productContext = useContext(ProductContext)

  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <FlashsaleSection items={productContext.flashsaleProducts} />
      
      <FooterSection />
    </>
  )
}

export default HomeView