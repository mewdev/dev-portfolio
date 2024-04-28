export default function About() {
  return (
    <section className="about-me" id="about">
      <div className="about-me__content_left">
        <h2 className="section__title section__title--about">About me</h2>
        <p className="section__subtitle section__subtitle--about">
          Junior Frontend Developer
        </p>

        <div className="bio">
          <p className="bio__main-text">
            Self-learning front-end development since December 2023 and enjoy turning creative ideas into functional and engaging applications. My skills include proficiency in React, Tailwind CSS, Astro, SASS, and more, while prioritizing best practices in UX/UI and striving for clean, modern, and easily understandable code.
          </p>
          <a href="#home" className="btn">Download CV</a>
        </div>
      </div>

      <div className="about-me__content_right">
        <div className="about-me__timeline-wrapper">
          <ol className="timeline">
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Frontend Development Education</h4>
              <h5>December 2023 - present</h5>
              <p>Acquiring knowledge in frontend development using Scrimba's educational resources and practicing newfound skills through personal projects.</p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Freelance no-code developer</h4>
              <h5>2020 - 2022</h5>
              <p>Designing and launching websites using no-code tools (mainly Webflow and Wordpress), fostering curiosity in frontend development techniques.</p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Digital marketing & freelance musician</h4>
              <h5>March 2020 - present</h5>
              <p>Working part-time as digital marketer (e-commerce) and regularly performing as an successful <a href="https://michalwierzgon.com/" target="_blank">jazz musician</a>.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
