import Project from './Project';

import lota from '../img/lota.png';
import project1 from '../img/window1.png';
import project2 from '../img/window2.png';
import project3 from '../img/window3.png';

const Main = () => {
  const projects = [
    {
      img: project1,
      title: 'On rearchitecting Onboard : From wallet to a global digital money app',
      tags: ['v3', 'growth', 'expansion'],
    },
    {
      img: project2,
      title: "From broken funnel to crystal clear: Unlocking Onboard's first 10k customers",
      tags: ['activation', 'onboard wallet', 'acquisition'],
    },
    {
      img: project3,
      title: 'Onboard cards: The virtual card that actually works',
      tags: ['monetization', 'spend'],
    },
  ];

  return (
    <main>
      <div className="hero-container">
        <img src={lota} alt="Lota" />
        <h1>Lota Anidi is a designer building really good digital experiences from scratch</h1>
        <h2>
          Currently a lead product designer at Nestcoin - Onboard Wallet Team. Experimenting with Behind the Ship and
          other hobbies.
          <br />
          <a href="/">More about my work</a>
        </h2>
      </div>

      <section className="projects-container">
        <div className="title-container">
          <h2>Projects</h2>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <Project img={p.img} title={p.title} tags={p.tags} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
