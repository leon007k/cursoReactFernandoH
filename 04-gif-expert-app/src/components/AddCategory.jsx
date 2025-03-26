import { useState } from 'react'
import { PropTypes } from 'prop-types'

export function AddCategory({ onNewCategories }) {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleOnSubmit = (evt) => {
    evt.preventDefault()
    const cleanCategory = inputValue.trim()
    if (cleanCategory.length <= 1) return

    onNewCategories(cleanCategory)
    setInputValue('')
  }

  return (
    <form onSubmit={handleOnSubmit} aria-label='form'>
      <input
        type="text"
        placeholder="Agregar categoria"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='btn' onClick={handleOnSubmit}>Agregar</button>
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategories: PropTypes.func.isRequired,
}