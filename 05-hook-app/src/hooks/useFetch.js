import { useState, useEffect } from 'react';

const localCache = {}

export function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    error: null,
  })

  useEffect(() => {
    fetchData()
  }, [url])

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    })
  }

  const fetchData = async() => {
    // Si el URL ya está en caché, lo usamos directamente
    if(localCache[url]){
      console.log("Usando datos del caché para:", url);
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      return
    }


    setLoadingState()
    const resp = await fetch(url)

    // sleep
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    if (!resp.ok) {
      setState({
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },  
      });
      return;
    }

    const data = await resp.json()
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    })

    // Manejo del caché 
    // Guardamos los datos en el caché local
    localCache[url] = data  
  }



  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  }
}
