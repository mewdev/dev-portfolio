export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact_content">
        <h2 className="section__title section__title--contact">Contact</h2>
        <p className="section__subtitle section__subtitle--contact">
          Get in touch with me
        </p>
        <form className="form" id="form" name="form">
          <div className="input-group">
            <input type="text" id="name" placeholder="Name" required />
            <input type="email" id="email" placeholder="E-mail" required />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
