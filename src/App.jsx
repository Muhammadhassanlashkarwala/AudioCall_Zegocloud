import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import { AudioCallPage } from "./components/AudioCallPage";
import { HomePage } from "./components/HomePage";

function App() {
  
  const router = createBrowserRouter([
{
  path: "/",
  element: <HomePage />
},
{
  path: "/room/:id",
  element: <AudioCallPage />
}

  ])
  return (
    <div className="App">
   <RouterProvider router={router} />
    </div>
  )
}

export default App;
