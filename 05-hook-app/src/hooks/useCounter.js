import { useState } from "react";

export function useCounter( initialValue = 10){
  const [counter, setCounter] = useState(initialValue)

  return{counter,}
}