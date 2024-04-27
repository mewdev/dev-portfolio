export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact_content">
        <h2 className="section__title section__title--contact">Contact</h2>
        <p className="section__subtitle section__subtitle--contact">
          Get in touch with me
        </p>
        <form 
          className="form" 
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          id="form" 
          name="devPortfolioContactForm"
          onSubmit="submit"
          >
          <div className="input-group">
            <input type="hidden" name="contact-form" value="devPortfolioContactForm"/>
            <input type="text" name="full-name" id="name" placeholder="Full name" required />
            <input type="email" name="email" id="email" placeholder="E-mail" required />
          </div>

          <div hidden>
            <input name="bot-field" />
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
