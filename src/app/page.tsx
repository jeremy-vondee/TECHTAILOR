"use client"
import React, { useEffect } from "react"
import Header from "./_components/header/page"
import { useProductStore } from "@/store/productStore"
import FeaturedProducts from "./_components/featuredProducts/page"
import Footer from "./_components/footer/page"
import LoadingSkeleton from "./loading"
import { useCartStore } from "@/store/cartStore"
import { useUser } from "@auth0/nextjs-auth0/client"

const Home = () => {
  const { isLoading, error, fetchData } = useProductStore()
  const { setLoggedIn } = useCartStore()
  const { user } = useUser()

  useEffect(() => {
    fetchData()
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [fetchData, setLoggedIn])

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
