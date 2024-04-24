import { portfolioItems } from '../../assets/content/portfolio.json';

export default function Work() {
  return (
    <section className="work" id="work">
      <h2 className="section__title section__title--work">Work</h2>
      <p className="section__subtitle section__subtitle--work">
        Take a look at my current projects
      </p>

      <div className="portfolio">
        {portfolioItems.map((item) => {
          return (
            <div className="portfolio__item" key={item.id}>
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
                className="portfolio__img"
              />
              <h3 className="portfolio__item-title">{item.title}</h3>
              <h4 className="portfolio_item-info">{item.info}</h4>
              <span className="portfolio_item-date">{item.date}</span>
              <div className="portfolio_item-techstack">
                {item.techstack &&
                  Array.isArray(item.techstack) &&
                  item.techstack.map((tech, techIndex) => (
                    <i key={techIndex} className={tech.stackIcon} />
                  ))}
              </div>
              <p className="portfolio_item-description">{item.description}</p>
              <div className="buttons-wrapper">
                <a
                  href={item.buttons[0].href}
                  className="btn--portfolio"
                  target="_blank"
                >
                  <i className="fa-solid fa-code"></i>
                  {item.buttons[0].text}
                </a>
                <a
                  href={item.buttons[1].href}
                  className="btn--portfolio"
                  target="_blank"
                >
                  <i className="fa-solid fa-globe"></i>
                  {item.buttons[1].text}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
