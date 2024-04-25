import techStack from '../../assets/content/techstack.json';

export default function Techstack() {
  return (
    <section className="tech-stack">
      <div className="tech-stack__icons-wrapper">
        <ul className="tech-stack__list_marquee-first">
{techStack.map(item => {
  return(
    <li key={item.id}>
    <i className={item.iconClass}></i>{item.techName}
  </li>
  )
})}
        </ul>
        <ul className="tech-stack__list_marquee-second">
        {techStack.map(item => {
  return(
    <li key={item.id}>
    <i className={item.iconClass}></i>{item.techName}
  </li>
  )
})}

        </ul>
      </div>
    </section>
  );
}
