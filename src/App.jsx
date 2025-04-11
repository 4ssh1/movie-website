import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./routes/HomePage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
