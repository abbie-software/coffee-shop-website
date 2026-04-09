function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#2b1b17', color: 'white' }}>
      <h2>Espresso Express</h2>
      <ul>
        <li style={{ display: 'inline', margin: '0 10px' }}>Menu</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;