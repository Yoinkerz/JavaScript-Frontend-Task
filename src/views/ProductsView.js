import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContext } from '../contexts/contexts'

const ProductsView = () => {
  const productContext = useContext(ProductContext)

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" items={productContext.All} />
      <FooterSection />
    </>
  )
}

export default ProductsView