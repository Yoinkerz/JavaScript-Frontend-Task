import './assets/scss/style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import { ProductContext } from './contexts/contexts'

function App() {
  const [products, setProducts] = useState({
    All: [],
    featuredProducts: [],
    flashsaleProducts: []
  })


  
  useEffect(() => {

      const fetchAll = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
        let data = await result.json()
        setProducts((oldProducts) => { return {...oldProducts, All: data}})
      }
      fetchAll()

      const fetchfeaturedproducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
        let data = await result.json()
        setProducts((oldProducts) => { return {...oldProducts, featuredProducts: data}})
      }
      fetchfeaturedproducts()

      const fetchflashsaleproducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
        let data = await result.json()
        setProducts((oldProducts) => { return {...oldProducts, flashsaleProducts: data}})
      }
      fetchflashsaleproducts()


    }, [setProducts])

  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:name" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishListView />} />
          <Route path="/shoppingcart" element={<ShoppingCartView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
