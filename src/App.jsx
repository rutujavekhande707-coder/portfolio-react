import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
         <About/>

         <Skills/>
         <Projects/>
         <Contact/>
      </div>
    },
    {
      path: "/about",
      element: <div>
        <Navbar />
        <About />
        
      </div>
    },
    {
      path: "/skills",
      element: <div>
        <Navbar />
        <Skills />
      </div>
    },
    {
      path: "/projects",
      element: <div>
        <Navbar />
        <Projects />
      </div>
    },
    {
      path: "/contact",
      element: <div>
        <Navbar />
        <Contact />
      </div>
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App