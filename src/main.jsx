import React from 'react'
import './styles/main.scss'
import logo from './img/logo-white.png';



 
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
                        Image Composition
                    </div>
                </div>
            </section>
        </main>
    </div>
)

export default MainPage;