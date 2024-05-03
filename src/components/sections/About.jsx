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
          <a href="/Michal-Wierzgon_CV.pdf" target="_blank" className="btn">Download CV</a>
        </div>
      </div>

      <div className="about-me__content_right">
        <div className="about-me__timeline-wrapper">
          <ol className="timeline">
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h5>ZUŠ Frenštát p. Radhoštěm</h5>
              <h4>Part-time music school teacher & IT consultant</h4>
              <h5>2021 - Present</h5>
              <p>n addition to my music teaching responsibilities, I've developed a ticket reservation system (WordPress) and initiated various digital enhancements within the organization. I also engaged in occasional sound engineering tasks.</p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Freelance no-code development</h4>
              <h5>2021 - 2023</h5>
              <p>Developing a keen interest in web development in my free time, I've delved into designing and launching websites utilizing no-code tools, primarily Webflow and Wordpress. This experience has sparked my curiosity in frontend development, driving me to explore and learn more in this field.</p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Digital marketing & freelance musician</h4>
              <h5>3/2020 - Present</h5>
              <p>Working part-time as a digital marketer with a hands-on approach to technical aspects (e-mail automation, HTML/CSS modifications) in e-commerce, while simultaneously achieving international recognition as a successful and award- winning jazz musician (Anděl Awards winner and many others).</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
