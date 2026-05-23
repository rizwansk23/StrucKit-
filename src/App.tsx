import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./Layout/Main/AppLayout";
import DSLayout from "./Layout/DataStructure-layout/DSLayout";
import { sidebar } from "./Data/sidebar";
import Queue from "./Pages/Queue";
import Notfound from "./Pages/Notfound";
import { recursivefunc } from "./hook/Datafetch";


const App = () => {

  const url = recursivefunc(sidebar);

  const route = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: url.map((url) => {
        return {
          path: `${url}`,
          element: <DSLayout name={url} />,
        }

      })
    },
    {
      path: '/',
      element: <AppLayout />,
      children: [{
        path: '/:topic/visual',
        element: <Queue />
      }]
    },
    {
      path: '*',
      element: <Notfound />
    }
  ]);
  return <RouterProvider router={route} />
}

export default App

