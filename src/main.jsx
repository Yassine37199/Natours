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
                <a href="#" className="btn btn-white btn-animated">Discover our tours</a>
            </div>
        </header>

        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-8">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            text
                        </div>
                        <div className="col-1-of-2">
                            images
                        </div>
                    </div>
            </section>
        </main>
    </div>
)

export default MainPage;