import styles from './Services.module.css';

const servicesData = [
  {
    title: 'Backend Development',
    description: 'Building scalable and efficient server-side applications using Python and FastAPI, with a focus on creating robust REST APIs and third-party service integrations.',
  },
  {
    title: 'Workflow Automation',
    description: 'Designing and implementing complex automation pipelines with tools like n8n and Zapier to enhance productivity and connect different API-driven processes seamlessly.',
  },
  {
    title: 'Database Management',
    description: 'Structuring and managing data effectively using Firebase (Firestore) for NoSQL solutions, along with foundational skills in SQL for relational databases.',
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.title}>What I Do</h2>
      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;