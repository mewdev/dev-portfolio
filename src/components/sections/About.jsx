export default function About() {
  return (
    <section className="about-me" id="about">
      <div className="about-me__content_left">
        <h2 className="section__title section__title--about">About me</h2>
        <div className="bio">
          <p className="bio__main-text">
            Thriving on translating imaginative concepts into practical and
            captivating applications. I specialize in React, Next.js,
            TypeScript, Tailwind CSS, Astro, and SASS, ensuring adherence to
            best practices in UX/UI design. I take pride in delivering clean,
            contemporary, and easily comprehensible code.
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
              <h5>Česko.Digital & Unreleased.art</h5>
              <h4>Frontend developer</h4>
              <h5>July 2024 - Present</h5>
              <p>
                I specialize in developing user-friendly, interactive web
                interfaces based on Figma designs. My work spans various
                projects, such as the{" "}
                <a href="https://www.volebnikalkulacka.cz/" target="_blank">
                  Volební kalkulačka
                </a>{" "}
                for{" "}
                <a href="https://www.cesko.digital/" target="_blank">
                  Česko.Digital
                </a>{" "}
                and the social platform for musicians,{" "}
                <a href="https://unreleased.art/" target="_blank">
                  unreleased.art
                </a>
                . These projects involve building dynamic, responsive interfaces
                using modern technologies like Next.js, TypeScript, Tailwind
                CSS, Prisma and other modern web development tools.
              </p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h5>ZUŠ Frenštát p. Radhoštěm</h5>
              <h4>Part-time music school teacher & IT consultant</h4>
              <h5>2021 - Present</h5>
              <p>
                In addition to my music teaching responsibilities, I've
                developed a ticket reservation system (WordPress) and initiated
                various digital enhancements within the organization. I also
                engaged in occasional sound engineering tasks.
              </p>
              <hr />
            </li>
            <li className="timeline__item">
              <span className="timeline__circle"></span>
              <h4>Freelance no-code development</h4>
              <h5>2021 - 2023</h5>
              <p>
                Developing a keen interest in web development in my free time,
                I’ve designed and launched websites using no-code tools like
                Webflow and WordPress, which sparked my interest in frontend
                development. This experience has sparked my curiosity in
                frontend development, driving me to explore and deepen my
                knowledge in this field. Selected projects:{" "}
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
