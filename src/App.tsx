import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Layout/Main/Home";
import Stack from "./Layout/DataStructure-layout/DataStructure";
import { sidebar } from "./Data/sidebar";
import Queue from "./Pages/Queue";
import Notfound from "./Pages/Notfound";
import { recursivefunc } from "./hook/Datafetch";


const App = () => {

  const url = recursivefunc(sidebar);

  const route = createBrowserRouter([{
    path: '/',
    element: <Home />,
    children: url.map((url) => {
      return {
        path: `${url}`,
        element: <Stack name={url} />,
      }

    })
  },
  {
    path: '/',
    element: <Home />,
    children: [{
      path: '/:topic/visval',
      element: <Queue  />
    }]
  },
  {
    path:'*',
    element:<Notfound/>
  }
  ]);
  return <RouterProvider router={route} />
}

export default App

