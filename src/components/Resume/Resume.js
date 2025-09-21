import styles from './Resume.module.css';

const skills = [
  'Python', 'FastAPI', 'REST APIS', 'n8n', 'Zapier', 'API Integrations',
  'Firebase (Firestore)', 'SQL (beginner)', 'Git/GitHub', 'Postman', 'Paystack/Stripe Integration'
];

const Resume = () => {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        <h2 className={styles.title}>Resume</h2>
        
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <p className={styles.itemTitle}>B.Eng. Computer Engineering (In Progress)</p>
          <p className={styles.itemSubtitle}>University of Ilorin</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Technical Skills</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Achievements / Highlights</h3>
          <ul className={styles.achievementsList}>
            <li>Designed and deployed backend services for real-world projects.</li>
            <li>Practical experience building automation pipelines and integrating APIs.</li>
            <li>Active involvement in developer communities and tech hackathons.</li>
          </ul>
        </div>
        
        <div className={styles.buttonWrapper}>
          <a href="/Abdulsalam_Sulaiman_Resume.pdf" download className={styles.button}>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;