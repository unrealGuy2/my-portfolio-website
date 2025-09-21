import styles from './Portfolio.module.css';

const projects = [
  {
    title: 'PromptVault',
    description: 'A repository platform for Al prompts, featuring authentication and a prompt-sharing system.',
    imageUrls: ['/promptvault1.png', '/promptvault1ss.png'],
  },
  {
    title: 'Automation Workflows',
    description: 'Built n8n-based automations for data handling, notifications, and API-driven processes.',
    imageUrls: ['/workflow.png', '/workflow2.png'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imagesContainer}>
              {project.imageUrls.map((url, imgIndex) => (
                <img key={imgIndex} src={url} alt={`${project.title} screenshot ${imgIndex + 1}`} className={styles.image} />
              ))}
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;