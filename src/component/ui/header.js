import React from 'react';
import './header.css';
function header(){
    return(
        <div id="header">
            <img src="headerlogo.png" id="img"></img>
            <nav className="headnavbar">
                <div className="navlinks">
                    <div className="navcontent">
                        <div className="anavlink">
                            <a href="#" id="navelement">Men</a>
                        </div>
                        <div className="anavlink">
                            <a href="#" id="navelement">Women</a>
                        </div>
                        <div className="anavlink">
                            <a href="#" id="navelement">Kids</a>
                        </div>
                        <div className="anavlink">
                            <a href="#" id="navelement">Home & Living</a>
                        </div>
                        <div className="anavlink">
                            <a href="#" id="navelement">Discover</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="actions">
                <div className="user">
                    <div className="iconcontainer">
                        <img src="bag.jpg" className="profileicon"></img>
                        <img src="wishlist.png" className="profileicon"></img>
                        <img src="propiclogo.png" className="profileicon"></img>                        
                    </div>
                </div>
            </div>
            <div className="query">
                <a className="submit"><img src="searchlogo.png"></img></a>
                <input placeholder="Search for products,brands and more" className="search"></input>
            </div>
            <div className="banner">
                <div className="bannertext">- Prices are inclusive of all taxes - </div>
            </div>
        </div>
    )
}

export default header;