import { PropTypes } from 'prop-types'
import { getGifs } from '../helpers/serviceGetGifs'
import { useEffect, useState } from 'react'


export function GifGrid({ category }) {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const gifs = await getGifs(category)
    setImages(gifs)
  }

  useEffect(() => {
    getImages()
  }, [category])

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {
          images.map(({ id, title, url }) => (
            <div key={id}>
              <li>{title}</li>
              <img src={url} alt={title} aria-description={title} />
            </div>
          ))
        }
      </ol>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}