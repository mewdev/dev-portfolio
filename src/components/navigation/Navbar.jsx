export default function Navbar(props) {
  return (
    <nav className={props.navToggled}>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#work" className="nav__link">
            Work
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About me
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
