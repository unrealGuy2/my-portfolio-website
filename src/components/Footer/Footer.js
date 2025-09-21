import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Abdulsalam Sulaiman. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;