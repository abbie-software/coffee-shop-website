import { useState } from 'react'
import './MenuPage.css'

const menuItems = [
  { id: 1,  category: 'Hot Drinks',  name: 'Signature Latte',     description: 'Smooth espresso with velvety steamed milk.',          price: 'KSh 350' },
  { id: 2,  category: 'Hot Drinks',  name: 'Cappuccino',           description: 'Rich espresso topped with thick foam.',               price: 'KSh 300' },
  { id: 3,  category: 'Hot Drinks',  name: 'Caramel Macchiato',    description: 'Espresso, vanilla, milk and caramel drizzle.',        price: 'KSh 400' },
  { id: 4,  category: 'Hot Drinks',  name: 'Americano',            description: 'Bold espresso shots with hot water.',                 price: 'KSh 250' },
  { id: 5,  category: 'Cold Drinks', name: 'Iced Latte',           description: 'Chilled espresso poured over ice and cold milk.',     price: 'KSh 370' },
  { id: 6,  category: 'Cold Drinks', name: 'Frappuccino',          description: 'Blended coffee, milk and ice topped with cream.',     price: 'KSh 450' },
  { id: 7,  category: 'Cold Drinks', name: 'Cold Brew',            description: 'Slow-steeped coffee served over ice.',                price: 'KSh 380' },
  { id: 8,  category: 'Cold Drinks', name: 'Iced Matcha Latte',    description: 'Ceremonial matcha blended with cold oat milk.',       price: 'KSh 420' },
  { id: 9,  category: 'Food',        name: 'Avocado Toast',        description: 'Sourdough topped with smashed avo and chilli flakes.',price: 'KSh 500' },
  { id: 10, category: 'Food',        name: 'Chicken Sandwich',     description: 'Grilled chicken, lettuce and garlic mayo on ciabatta.',price: 'KSh 650' },
  { id: 11, category: 'Food',        name: 'Cheese Croissant',     description: 'Buttery croissant filled with melted cheddar.',       price: 'KSh 300' },
  { id: 12, category: 'Desserts',    name: 'Chocolate Lava Cake',  description: 'Warm chocolate cake with a gooey molten centre.',    price: 'KSh 420' },
  { id: 13, category: 'Desserts',    name: 'Cheesecake Slice',     description: 'Creamy New York cheesecake on a biscuit base.',      price: 'KSh 380' },
  { id: 14, category: 'Desserts',    name: 'Cinnamon Roll',        description: 'Freshly baked roll drizzled with vanilla icing.',    price: 'KSh 280' },
]

const categories = ['All', 'Hot Drinks', 'Cold Drinks', 'Food', 'Desserts']

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <main className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Something for every mood, every time of day.</p>
      </div>

      <div className="category-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filtered.map(item => (
          <div key={item.id} className="menu-card">
            <div className="menu-card-img">
              <span>{item.name[0]}</span>
            </div>
            <div className="menu-card-body">
              <div className="menu-card-top">
                <h3>{item.name}</h3>
                <span className="menu-category-tag">{item.category}</span>
              </div>
              <p>{item.description}</p>
              <span className="menu-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default MenuPage