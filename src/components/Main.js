import Project from './Project';

const Main = () => {
  const projects = [
    {
      img: '/img/window1.png',
      title: 'On rearchitecting Onboard : From wallet to a global digital money app',
      tags: ['v3', 'growth', 'expansion'],
    },
    {
      img: '/img/window2.png',
      title: 'From broken funnel to crystal clear: Unlocking Onboard\'s first 10k customers',
      tags: ['activation','onboard wallet','acquisition'],
    },
    {
      img: '/img/window3.png',
      title: 'Onboard cards: The virtual card that actually works',
      tags: ['monetization', 'spend'],
    },
  ];

  return (
    <main>
      <div className="hero-container">
        <img src="/img/lota.png" alt="" />
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
