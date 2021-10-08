import React from 'react'
import './styles/main.scss'
import logo from './img/logo-white.png';
import nat1 from './img/nat-1-large.jpg';
import nat2 from './img/nat-2-large.jpg';
import nat3 from './img/nat-3-large.jpg';
import nat8 from './img/nat-8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope , faCompass, faMap , faHeart } from '@fortawesome/free-solid-svg-icons'




 
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

                    <div className="col-1-of-4">
                        <div className="feature-box u-center-text ">
                            <FontAwesomeIcon icon={faCompass} className="feature-box__icon" />
                            <h3 className="heading-tertiary u-margin-bottom-small">meet nature</h3>
                            <p className="feature-box__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum voluptates pariatur accusamus veniam maxime porro natus.
                            </p>
                        </div>
                    </div>
 
                    <div className="col-1-of-4">
                        <div className="feature-box u-center-text ">
                            <FontAwesomeIcon icon={faMap} className="feature-box__icon" />
                            <h3 className="heading-tertiary u-margin-bottom-small">find your way</h3>
                            <p className="feature-box__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum voluptates pariatur accusamus veniam maxime porro natus.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box u-center-text ">
                            <FontAwesomeIcon icon={faHeart} className="feature-box__icon" />
                            <h3 className="heading-tertiary u-margin-bottom-small">live a healthier life</h3>
                            <p className="feature-box__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum voluptates pariatur accusamus veniam maxime porro natus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-tours">
                <div className="u-center-text u-margin-bottom-large">
                        <h2 className="heading-secondary">
                            most popular tours
                        </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span--1">
                                        The sea explorer    
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul className="u-center-text">
                                        <li>3 day tours</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy</li>
                                        <li>Difficulty : easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta u-center-text">
                                    <div className="card__price-box u-margin-bottom-large">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#" className="btn btn-white">Book Now !!</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-1-of-3">

                        <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span--2">
                                            The Forest Hiker   
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul className="u-center-text">
                                            <li>7 day tours</li>
                                            <li>Up to 40 people</li>
                                            <li>6 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty : medium</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta u-center-text">
                                        <div className="card__price-box u-margin-bottom-large">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$485</p>
                                        </div>
                                        <a href="#" className="btn btn-white">Book Now !!</a>
                                    </div>
                                </div>

                            </div>

                    </div>
                    <div className="col-1-of-3">

                    <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--3">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span--3">
                                            The Snow Adventurer  
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul className="u-center-text">
                                            <li>5 day tours</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty : hard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta u-center-text">
                                        <div className="card__price-box u-margin-bottom-large">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$897</p>
                                        </div>
                                        <a href="#" className="btn btn-white">Book Now !!</a>
                                    </div>
                                </div>

                            </div>
                    </div>
                </div>
                <div className="u-center-text">
                    <a href="#" className="btn btn--green">Discover All Tours</a>       
                </div>
            </section>
            <section className="section-stories">
                <div className="u-center-text u-margin-bottom-large">
                    <h2 className="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>
                <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img src={nat8} alt="Person on a Tour" className="story__image" />
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio corporis voluptatibus labore repellendus quidem aliquam quo in! Excepturi voluptates, repellendus nam praesentium aperiam delectus voluptas ad veritatis natus, dolorem consequatur!</p>
                            </div>
                        </div>
                </div>            
            </section>
        </main>
    </div>
)

export default MainPage;