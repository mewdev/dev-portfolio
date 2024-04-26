export default function About() {
  return (
    <section className="about-me" id="about">
      <div className="about-me__content_left">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Junior Frontend Developer
        </p>

        <div className="bio">
          <p className="bio__main-text">
            I have been teaching myself frontend development since December 2021 and enjoy turning creative ideas into functional and engaging applications. My skills include proficiency in React, Tailwind CSS, Astro, SASS, and more, while prioritizing best practices in UX/UI and striving for clean, modern, and easily understandable code.
          </p>
          <h4>Additional information:</h4>
          <a href="#home" className="btn">Download CV</a>
        </div>
      </div>

      <div className="about-me__content_right">
        <div className="about-me__timeline-wrapper">
          <ol className="timeline">
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Learning frontend development</h4>
              <h5>December 2023 - present</h5>
              <p>Some silly timeline text</p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Item title</h4>
              <h5>2020 - 2022</h5>
              <p>Some silly timeline text</p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Digital marketing & freelance musician</h4>
              <h5>March 2020 - present</h5>
              <p>Some silly timeline text</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
