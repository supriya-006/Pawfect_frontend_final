import { useState } from "react";
import MyRoutes from "./component/MyRoutes";
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyRoutes/>
    </>
  )
}
export default App