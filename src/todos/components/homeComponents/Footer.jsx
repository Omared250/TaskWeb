import { Link } from "react-router-dom";
import { useSignStore } from "../../../hooks/useSignStore";


export const Footer = () => {

  const { openModal } = useSignStore();


  return (
    <>
        <section className="section section--sign-up">
            <div className="section__title">
              <h3 className="section__header">
                The best day to join TaskWeb was one year ago. The second best is
                today!
              </h3>
            </div>
            <Link to="/register" >
              <button className="btn btn--show-modal" value='Sign Up' onClick={ (ev) => openModal( ev.target.value ) }>Open your free account today!</button>
            </Link>
        </section>
        <footer className="footer">
          <ul className="footer__nav">
            <li className="footer__item">
              <a className="footer__link" href="#">About</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Pricing</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Terms of Use</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Privacy Policy</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Careers</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Blog</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Contact Us</a>
            </li>
          </ul>
          <img src="/src/assets/logo.png" alt="Logo" className="footer__logo" />
          <p className="footer__copyright">
            &copy; Copyright by
            <a
              className="footer__link twitter-link"
              target="_blank"
              href="#"
              > Omar Ascanio Arias</a
            >
          </p>
        </footer>
    </>
  )
}
