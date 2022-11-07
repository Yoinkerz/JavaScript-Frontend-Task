import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'

const HomeView = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, img: "https://images.pexels.com/photos/3752118/pexels-photo-3752118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, img: "https://images.pexels.com/photos/1582836/pexels-photo-1582836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, img: "https://images.pexels.com/photos/4390579/pexels-photo-4390579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, img: "https://images.pexels.com/photos/2116478/pexels-photo-2116478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }
  ])
  const [topProducts, setTopProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, img: "https://images.pexels.com/photos/3752118/pexels-photo-3752118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, img: "https://images.pexels.com/photos/1582836/pexels-photo-1582836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, img: "https://images.pexels.com/photos/4390579/pexels-photo-4390579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }
  ])

  window.top.document.title = 'Fixxo.'

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <ProductGridSection title="Top Products" products={topProducts} />
      <FooterSection />
    </>
  )
}

export default HomeView