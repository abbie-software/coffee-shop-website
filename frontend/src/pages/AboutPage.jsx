import './AboutPage.css'

const values = [
  { id: 1, title: 'Quality First',     description: 'Every cup is crafted with care using freshly sourced, premium beans.' },
  { id: 2, title: 'Community',         description: 'We are more than a coffee shop — we are a gathering place for Nairobi.' },
  { id: 3, title: 'Warm Hospitality',  description: 'Every guest leaves feeling welcomed, seen and well caffeinated.' },
]

const team = [
  { id: 1, name: 'Abbie',   role: 'Founder & Head Barista' },
  { id: 2, name: 'Member',  role: 'Barista'                },
  { id: 3, name: 'Member',  role: 'Kitchen & Food'         },
]

function AboutPage() {
  return (
    <main className="about-page">

      <div className="about-header">
        <h1>Our Story</h1>
        <p>How Abbie's Coffee House came to life.</p>
      </div>

      <section className="about-story">
        <div className="story-text">
          <h2>A dream brewed into reality</h2>
          <p>
            Abbie's Coffee House was born from a simple idea — that everyone deserves
            a great cup of coffee and a place to feel at home. What started as a passion
            for the perfect brew has grown into Nairobi's newest cosy corner for coffee
            lovers, remote workers, and friends catching up over something warm.
          </p>
          <p>
            We are just getting started, but our commitment to quality, community and
            genuine hospitality is already at the heart of everything we do. Pull up a
            chair — we are glad you're here.
          </p>
        </div>
        <div className="story-img-placeholder">
          <span>A</span>
        </div>
      </section>

      <section className="about-values">
        <h2>What we stand for</h2>
        <div className="values-grid">
          {values.map(v => (
            <div key={v.id} className="value-card">
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-team">
        <h2>Meet the team</h2>
        <p className="team-subtitle">The people behind every great cup.</p>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">
                <span>{member.name[0]}</span>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default AboutPage