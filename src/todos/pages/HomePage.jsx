import { Outlet } from "react-router-dom"
import { AboutUS } from "../components/homeComponents/AboutUS"
import { Features } from "../components/homeComponents/Features"
import { Footer } from "../components/homeComponents/Footer"
import { NavBar } from "../components/homeComponents/NavBar"
import { Testimonials } from "../components/homeComponents/Testimonials"
import { useSignStore } from "../../hooks/useSignStore"


export const HomePage = () => {

  const { signPage } = useSignStore();

  return (
    <div>
        <header className="header">
          <NavBar />
          <AboutUS />
        </header>
        <Features />
        <Testimonials />
        <Footer />
        {
          (signPage === 'Sign Up')
          ? <Outlet />
          : null
        }
        {
          (signPage === 'Sign In')
          ? <Outlet />
          : null
        }
    </div>
  )
}
