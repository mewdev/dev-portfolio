export default function About() {
  return (
    <section className="about-me" id="about">
      <div className="about-me__content_left">
        <h2 className="section__title section__title--about">About me</h2>
        <div className="bio">
          <p className="bio__main-text">
            Turning ideas into functional applications. I specialize in the modern stack (Next.js, TypeScript, Tailwind), but my path to it has led through a variety of roles. I don't know everything, but I'm a quick learner and problem solver - whether it's code or finding the right tool for the job. If you're looking for a developer for your team with a broad outlook and an appetite for problem solving, don't hesitate to reach out to me.
          </p>
          <a href="/Michal-Wierzgon_CV.pdf" target="_blank" className="btn">
            Download CV
          </a>
        </div>
      </div>

      <div className="about-me__content_right">
        <div className="about-me__timeline-wrapper">
          <ol className="timeline">
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h5>Česko.Digital</h5>
              <h4>Frontend developer</h4>
              <h5>July 2024 - Present</h5>
              <p>
Development of the "voting advice" application which is used by millions of voters in 7 countries using modern development tools (key contributions to its design system, technology stack, and architecture).
              </p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h5>ZUŠ Frenštát p. Radhoštěm</h5>
              <h4>Part-time music school teacher & IT consultant</h4>
              <h5>2021 - Present</h5>
              <p>
   Beyond my teaching activities, I have initiated and led projects focused on digital transformation. Key achievements include the launch of a booking system that streamlined internal processes related to the management and sale of concert tickets.
              </p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Freelance no-code development</h4>
              <h5>2021 - 2023</h5>
              <p>
             I have freelanced on the full implementation of websites for clients, from initial consultation and design to final launch on Webflow or WordPress platforms. This experience provided me with valuable insight into real end-user needs and product thinking. Selected projects:{" "}
                <a href="https://www.chiradamcik.cz/" target="_blank">
                  chiradamcik.cz
                </a>
                ,{" "}
                <a href="https://vladimirjavorsky.cz/" target="_blank">
                  vladimirjavorsky.cz
                </a>
                ,{" "}
                <a href="https://www.marabell.cz/" target="_blank">
                  marabell.cz
                </a>
                .
              </p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Digital marketing & freelance musician</h4>
              <h5>2020 - Present</h5>
              <p>
                Part-time digital marketer focusing on technical aspects such as
                email automation and HTML/CSS modifications in e-commerce, while
                simultaneously achieving international recognition as a
                successful and award-winning jazz musician (Anděl Awards winner
                and many others).
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
