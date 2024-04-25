import { links } from '../../assets/content/links.json';

export default function Hero() {
  return (
    <section className="intro" id="home">
      <div className="circle__background"></div>
      <div className="intro__content">
        <div className="icons-wrapper">
          {links.map((link) => {
            return (
              <a href={link.href} target="_blank" key={link.id}>
                <i className={`${link.iconClass} + fa-lg`}></i>
              </a>
            );
          })}
        </div>
        <h1 className="section__title section__title--intro">
          Hi, I am Michał
        </h1>
        <p>Frontend developer based in Czech Republic</p>
        <div className="buttons-wrapper">
          <a className="btn" href="#work">
            Work
          </a>

          <a className="btn-outlined" href="#about">
            About me
          </a>
        </div>
      </div>

      <div className="intro__image">
        <img
          src="/hero_photo.jpeg"
          className="intro__img"
        />
      </div>
    </section>
  );
}
