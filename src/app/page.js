import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import Resume from '@/components/Resume/Resume';
import Events from '@/components/Events/Events';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Resume />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}