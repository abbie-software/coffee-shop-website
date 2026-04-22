import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import AnimatedTitle from '../components/AnimatedTitle'
import './HomePage.css'

const featuredItems = [
  { id: 1, name: 'Signature Latte', description: 'Smooth espresso with velvety steamed milk.', price: 'KSh 350' },
  { id: 2, name: 'Cappuccino', description: 'Rich espresso topped with thick foam.', price: 'KSh 300' },
  { id: 3, name: 'Caramel Macchiato', description: 'Espresso, vanilla, milk and caramel drizzle.', price: 'KSh 400' },
]

function HomePage() {
  return (
    <main>
      <AnimatedTitle />

      <section className="hero">
        <img src={heroImg} alt="Abbie's Coffee House" className="hero-img" />
        <div className="hero-overlay">
          <h1>Welcome to Abbie's Coffee House</h1>
          <p>Nairobi's cosiest spot for great coffee and good vibes.</p>
          <Link to="/menu" className="hero-btn">View Our Menu</Link>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Drinks</h2>
        <p className="section-subtitle">A few of our customer favourites.</p>
        <div className="featured-grid">
          {featuredItems.map(item => (
            <div key={item.id} className="menu-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          ))}
        </div>
        <Link to="/menu" className="see-more">See full menu →</Link>
      </section>

      <section className="find-us">
        <h2>Find Us</h2>
        <div className="find-us-grid">
          <div className="find-us-info">
            <p><strong>Address</strong><br />123 Brew Street, Nairobi, Kenya</p>
            <p><strong>Phone</strong><br />+254 700 000 000</p>
            <p><strong>Hours</strong><br />
              Mon – Fri: 7am – 8pm<br />
              Saturday: 8am – 9pm<br />
              Sunday: 9am – 6pm
            </p>
          </div>
          <div className="iframe">
            <p>Map coming soon</p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default HomePage