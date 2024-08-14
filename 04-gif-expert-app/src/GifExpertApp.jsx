import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (category) => {
    // * We can use this validation to avoid duplicates
    const newCatToLowerCase = category.toLowerCase()
    const listOfCatToLowerCase = categories.map(cat => cat.toLowerCase())
    if (listOfCatToLowerCase.includes(newCatToLowerCase)) return
    setCategories([category, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategories={onAddCategory} />
      <button onClick={onAddCategory}>Agregar</button>
      {
        categories.map((category, index) => {
          return <GifGrid key={category + '-' + index} category={category} />
        })
      }
    </>
  )
}