"use client"
import React, { useEffect } from "react"
import Header from "./_components/header/page"
import { useProductStore } from "@/store/productStore"
import FeaturedProducts from "./_components/featuredProducts/page"
import Footer from "./_components/footer/page"
import LoadingSkeleton from "./loading"

const Home = () => {
  const { isLoading, error, fetchData } = useProductStore()

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading) return <LoadingSkeleton />

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
