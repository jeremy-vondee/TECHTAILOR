"use client"
import React, { useEffect } from "react"
import Header from "./_components/header/page"
import { useProductStore } from "@/store/productSotre"
import FeaturedProducts from "./_components/featuredProducts/page"
import Footer from "./_components/footer/page"

const Home = () => {
  const { isLoading, error, fetchData } = useProductStore()
  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <Header />
      <FeaturedProducts featuredCategory="laptops" />
      <FeaturedProducts featuredCategory="phones" />
      <FeaturedProducts featuredCategory="consoles" />
      <Footer />
    </>
  )
}

export default Home
