import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import { ProductContext } from '../contexts/contexts'
import FlashsaleSection from '../sections/FlashsaleSection'
import FlashsaleSectionFlipped from '../sections/FlashsaleSectionFlipped'
import PolicySection from '../sections/PolicySection'
import BannerSection from '../sections/BannerSection'



const HomeView = () => {
  const productContext = useContext(ProductContext)

  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <BannerSection />
      <FlashsaleSection items={productContext.flashsaleProducts} />
      <FlashsaleSectionFlipped items={productContext.flashsaleProducts} />
      <PolicySection />
      
      <FooterSection />
    </>
  )
}

export default HomeView