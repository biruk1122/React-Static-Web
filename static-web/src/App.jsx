import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayOut from "./pages/layouts/MainLayOut"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<HomePage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
