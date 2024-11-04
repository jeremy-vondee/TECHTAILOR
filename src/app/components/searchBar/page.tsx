"use client"
import React, { FC, useState } from "react"
import { useTheme } from "@mui/material/styles"
import { TextField, InputAdornment, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useRouter } from "next/navigation"

const SearchBar: FC = () => {
  const theme = useTheme()

  const [searchInput, setSearchInput] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`)
    }
  }

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch(event as unknown as React.FormEvent)
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <TextField
        placeholder="Search for products"
        color="primary"
        size="small"
        value={searchInput}
        onChange={onSearch}
        onKeyDown={handleKeyPress}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="search" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        }}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: theme.palette.secondary.main,
            border: "hidden",
            borderRadius: "50px",
            width: {
              xs: "91vw",
              sm: "300px",
              md: "320px",
              lg: "560px"
            }
          }
        }}
      />
    </form>
  )
}

export default SearchBar
