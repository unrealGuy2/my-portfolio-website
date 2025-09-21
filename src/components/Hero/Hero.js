import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Abdulsalam Sulaiman</h1>
        <h2 className={styles.subtitle}>Backend & Automation Engineer</h2>
        <p className={styles.tagline}>
          I build backend systems and automate workflows that save time and scale businesses.
        </p>
        <a href="/Abdulsalam_Sulaiman_Resume.pdf" download className={styles.button}>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;