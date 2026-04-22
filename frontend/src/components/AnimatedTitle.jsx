import './AnimatedTitle.css'

function AnimatedTitle() {
  return (
    <div className="animated-title-container">
      <h1 className="animated-title">
        <span className="letter" style={{ animationDelay: '0.1s' }}>A</span>
        <span className="letter" style={{ animationDelay: '0.2s' }}>b</span>
        <span className="letter" style={{ animationDelay: '0.3s' }}>b</span>
        <span className="letter" style={{ animationDelay: '0.4s' }}>i</span>
        <span className="letter" style={{ animationDelay: '0.5s' }}>e</span>
        <span className="letter" style={{ animationDelay: '0.6s' }}>'</span>
        <span className="letter" style={{ animationDelay: '0.7s' }}>s</span>
        <span className="letter space" style={{ animationDelay: '0.8s' }}> </span>
        <span className="letter" style={{ animationDelay: '0.9s' }}>C</span>
        <span className="letter" style={{ animationDelay: '1s' }}>o</span>
        <span className="letter" style={{ animationDelay: '1.1s' }}>f</span>
        <span className="letter" style={{ animationDelay: '1.2s' }}>f</span>
        <span className="letter" style={{ animationDelay: '1.3s' }}>e</span>
        <span className="letter" style={{ animationDelay: '1.4s' }}>e</span>
        <span className="letter" style={{ animationDelay: '1.5s' }}>S</span>
        <span className="letter" style={{ animationDelay: '1.6s' }}>h</span>
        <span className="letter" style={{ animationDelay: '1.7s' }}>o</span>
        <span className="letter" style={{ animationDelay: '1.8s' }}>p</span>
      </h1>
    </div>
  )
}

export default AnimatedTitle
