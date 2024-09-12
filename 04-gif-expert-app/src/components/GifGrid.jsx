import { PropTypes } from 'prop-types'

import { GridItem } from './GridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import '../style.css'

export function GifGrid({ category }) {

  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h4>Cargando...</h4>}
      <div className='card-grid'>
        {
          images.map((image) => (
            <GridItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}