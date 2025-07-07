import {useState, useEffect} from 'react'

export const SimpleForm = () => {
  const [dataUser, setDataUser] = useState({
    username: 'LeonAndrade',
    email: 'leon00@gmail.com'
  })

  const {username, email} = dataUser

  const onInputChange = ({target}) => {
    const {name, value} = target
    setDataUser({
      ...dataUser,
      [name]: value
    })  
  }

  // * [] -> Se ejecuta una vez al montar el componente
  // * React recomienda crear un efecto por cada efecto secundario que se quiera hacer
  // * Es una buena practica separar los efectos secundarios en diferentes useEffect
  useEffect(() => {
    console.log('useEffect called!')
  }, [])

  useEffect(() => {
    console.log('dataUser changed!')
  }, [dataUser])
  
  useEffect(() => {
    console.log('email changed!')
  }, [email])

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="leon@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}
