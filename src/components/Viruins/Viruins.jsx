import React from 'react'


const Viruins = () => {
    return (
        <div>
        <div className="container full-height-grow">
        <header className="main-header">
          <a href="/" className="brand-logo">
            <h3 className="brand-logo-name">Viruins</h3>
          </a>
          <nav className="main-nav">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Try for free</a></li>
            </ul>
          </nav>
        </header>
        <section className="home-main-section">
          <div className="img-wrapper">
            <div className="lady-image"></div>
          </div>
          <div className="call-to-action">
            <b className="title">COVID TRACKER</b>
            <span className="subtitle"
              >The COVID-19 health tracker platform provides you with multichannel information
              and update on the Coronavirus</span>
            <a href="#!" className="btn">Try</a>
          </div>
        </section>
        <div className="home-page-circle-1"></div>
        <div className="home-page-circle-2"></div>
        <div className="home-page-circle-3"></div>
        <div className="home-page-circle-4"></div>
        </div>
        </div>
    )
}

export default Viruins
