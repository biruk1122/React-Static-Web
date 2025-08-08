import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"

function MainLayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayOut
