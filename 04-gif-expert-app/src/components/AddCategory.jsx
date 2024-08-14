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
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Agregar categoria"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategories: PropTypes.func,
}