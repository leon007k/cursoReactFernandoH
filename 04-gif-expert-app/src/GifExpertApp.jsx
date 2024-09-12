import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch Man'])

  const onAddCategory = (category) => {
    // * We can use this validation to avoid duplicates
    console.log(category)
    const newCatToLowerCase = category.toLowerCase()
    const listOfCatToLowerCase = categories.map(cat => cat.toLowerCase())
    if (listOfCatToLowerCase.includes(newCatToLowerCase)) return
    setCategories([category, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategories={onAddCategory} />
      {
        categories.map((category, index) => {
          return <GifGrid key={category + '-' + index} category={category} />
        })
      }
    </>
  )
}