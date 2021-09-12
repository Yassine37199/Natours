import React from 'react'
import './styles/main.scss'
import logo from './img/logo-white.png';
import nat1 from './img/nat-1-large.jpg';
import nat2 from './img/nat-2-large.jpg';
import nat3 from './img/nat-3-large.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'




 
const MainPage = () => (
    <div>
        <header className="header">
            <div className="logo-box">
                <img src={logo} alt="Logo" className="logo" />
            </div>

            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>
                <a href="/" className="btn btn-white btn-animated">Discover our tours</a>
            </div>
        </header>
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-large">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nobis illum ratione sequi quisquam id ipsum nesciunt error ipsa dolorum ex recusandae tenetur explicabo obcaecati doloribus earum assumenda, qui vero!
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed, voluptate tempore, dignissimos optio nobis eligendi 
                        </p>
                        <a href="#" className="btn-text">Learn More &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={nat1} alt="nat1" className="composition__photo composition__photo--p1" />
                            <img src={nat2} alt="nat2" className="composition__photo composition__photo--p2" />
                            <img src={nat3} alt="nat3" className="composition__photo composition__photo--p3" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-section">
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box u-center-text ">
                            <FontAwesomeIcon icon={faGlobeEurope} className="feature-box__icon" />
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p className="feature-box__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum voluptates pariatur accusamus veniam maxime porro natus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
)

export default MainPage;