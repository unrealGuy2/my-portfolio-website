import styles from './Events.module.css';

const eventsData = [
  {
    title: '234 Al Hackathons Games, Ibadan',
    description: 'Collaborated with teams to develop Al-driven solutions in competitive hackathon settings.'
  },
  {
    title: 'GDG Ibadan Tech Event',
    description: 'Participated in developer community sessions, exploring automation, backend engineering, and Al applications.'
  }
];

const Events = () => {
  return (
    <section id="events" className={styles.events}>
      <h2 className={styles.title}>Events & Hackathons</h2>
      <div className={styles.container}>
        {eventsData.map((event, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{event.title}</h3>
            <p className={styles.cardDescription}>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;