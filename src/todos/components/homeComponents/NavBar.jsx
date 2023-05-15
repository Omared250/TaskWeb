// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSignStore } from "../../../hooks/useSignStore";


export const NavBar = () => {

  const { openModal } = useSignStore()

  return (
    <nav className="nav fixed-top text-bg-light">
        <img
          src="/src/assets/logo.png"
          alt="Bankist logo"
          className="nav__logo"
          id="logo"
        />
        <ul className="nav__links">
            <li className="nav__item">
                <a className="nav__link" href="#section--1">Features</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="#section--3">Testimonials</a>
            </li>
            <li className="nav__item">
                <Link className="nav__link nav__link--btn btn--show-modal" to="/register" onClick={ (ev) => openModal( ev.target.innerHTML) }>Sign Up</Link>
            </li>
            <li className="nav__item">
                <Link className="nav__link nav__link--btn btn--show-modal" to="/login" onClick={ (ev) => openModal( ev.target.innerHTML) }>Sign In</Link>
            </li>
        </ul>
  </nav>
  )
}
