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
          src="https://scontent.fprg1-1.fna.fbcdn.net/v/t1.6435-9/47032336_2196129470419246_5666510577367777280_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1yW9CYcbEK8Ab4mynKS&_nc_ht=scontent.fprg1-1.fna&oh=00_AfCSyTQkd6hJK5YeTU99rUHnlKbj8WkGCEOkVzxTlPT2zg&oe=663F17DD"
          alt="a picture of Michał Wierzgoń smiling"
          className="intro__img"
        />
      </div>
    </section>
  );
}
