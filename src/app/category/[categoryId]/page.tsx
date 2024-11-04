import React from "react"

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

const Category = async ({ params }: CategoryPageProps) => {
  const { categoryId } = await params
  return <div>{categoryId}</div>
}

export default Category
