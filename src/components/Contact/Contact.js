import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <h3>Email</h3>
            <a href="mailto:darksoftwareguy84@gmail.com">darksoftwareguy84@gmail.com</a>
          </div>
          <div className={styles.detailItem}>
            <h3>Phone</h3>
            <p>09133230794</p>
          </div>
        </div>
        <form className={styles.form}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
        <p className={styles.note}>
          Fill in the form for me to get to know you better.
        </p>
      </div>
    </section>
  );
};

export default Contact;