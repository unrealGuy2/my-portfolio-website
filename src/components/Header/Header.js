import styles from './Header.module.css';

const Header = () => {
  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'Services', path: '#services' },
    { title: 'Portfolio', path: '#portfolio' },
    { title: 'Resume', path: '#resume' },
    { title: 'Contact', path: '#contact' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo}>Abdulsalam S.</a>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <a href={link.path} className={styles.navLink}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;