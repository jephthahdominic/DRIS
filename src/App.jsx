import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Admission, Contact, Gallery, Home, News } from "./features"
import Error from "./Error"
import AppLayout from "./AppLayout"
import { SidebarProvider } from "./context/SidebarContext"
import Aos from "aos"
import "aos/dist/aos.css"

Aos.init();

function App() {
  const router = createBrowserRouter([
    {
      errorElement: <Error />,
      element: <SidebarProvider><AppLayout /></SidebarProvider>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path:"/about_us",
          element: <About />
        },
        {
          path: "/admission", 
          element:<Admission />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/gallery",
          element: <Gallery />
        },
        {
          path:"/news",
          element: <News />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
