"use client"
import React from "react"
import { Stack, Typography } from "@mui/material"
import Header from "../_components/header/page"
import { useSearchParams } from "next/navigation"

const Search = () => {
  const searchQuery = useSearchParams().get("q") as string

  return (
    <>
      <Header />
      <Stack mt={15}>
        {searchQuery && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Showing results for: {searchQuery}
          </Typography>
        )}
      </Stack>
    </>
  )
}

export default Search
