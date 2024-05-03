import { links } from '../../assets/content/links.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>©{currentYear} developed by Michał Wierzgoń</p>
      <ul className="social-list">
        {links.map((link) => {
          return (
            <li className="social-list__item" key={link.id}>
              <a className="social-list__link" href={link.href} target="_blank">
                <i className={`${link.iconClass} + fa-sm`}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
