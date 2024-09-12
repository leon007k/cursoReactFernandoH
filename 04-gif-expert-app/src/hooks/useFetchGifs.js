import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/serviceGetGifs'


// ! With this customhook we can work the logic apart and maintain our cleaner component
export function useFetchGifs(category) {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const gifs = await getGifs(category)
    setImages(gifs)
    setIsLoading(false)
  }

  // * useEffect --> Regresa una función que se ejecutará cuando el componente se desmonte
  useEffect(() => {
    getImages()
  }, [category])

  return {
    images,
    isLoading
  }
}