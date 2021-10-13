import React, {useState, useEffect} from 'react';
import search from './Search.svg'
import menuIco from './MenuIco.svg'
import croix from './Croix.svg'
import {Link} from 'react-router-dom';

function Header(){

    const [menu, showMenu] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [searchInput, setSearch] = useState('');

    useEffect(() => {


        const mediaQuery = window.matchMedia("(max-width: 900px)");
        // addlistener c'est comme addeventlisterner pour les medias queries en JS
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }

    })

    const handleMediaQueryChange = mediaQuery => {
        if(mediaQuery.matches) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }

    const toggleNavRes = () => {
        showMenu(!menu);
    }

    const hideMenu = () => {

        if(menu === true) {
            showMenu(!menu);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleKeyPress = (e) => {
        setSearch(e.target.value);
    }


    return (
        <div>
            
                {(menu || !smallScreen) && (

                <ul className="nav nav-pills flex-column" id="box-trend">
                        <h3>Tendances</h3>
                        <li className="navigation">
                            <form className="formSubmit" onSubmit={handleSubmit}>

                                <input required value={searchInput} onChange={(e) => handleKeyPress(e)} type="text" className="inputRecherche"/>

                            <Link
                            className="lien"
                            to={{
                                pathname: `/resultats/${searchInput}`
                            }}
                            >
                                <button type="submit">
                                    <img src={search} alt="icone loupe" className="logoLoupe"/>
                                </button>
                            </Link>
                            </form>
                        </li>
                        <li onClick={hideMenu} className="nav-item">
                            <Link to="/game">
                            Games
                            </Link>
                        </li>
                        <li onClick={hideMenu} className="nav-item dropdown">
                            <Link class="dropdown-toggle" data-bs-toggle="dropdown" to="/top-streams" role="button" aria-haspopup="true" aria-expanded="false">Streamer</Link>
                            <div class="dropdown-menu" data-popper-placement="bottom-start">
                                <Link class="dropdown-item" href="#">Action</Link>
                                <Link class="dropdown-item" href="#">Another action</Link>
                                <Link class="dropdown-item" href="#">Something else here</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" href="#">Separated link</Link>
                            </div>
                        </li>
                        {/* set up middlewar and rooting */}
                        <li onClick={hideMenu} className="nav-item">
                            <Link to="/clip">
                            Clips
                            </Link>
                        </li>

                    

                </ul>
            )}


        <div className="menuResBtn">
            <img onClick={toggleNavRes} src={!menu ? menuIco : croix} alt="icone menu responsive" className="menuIco"/>
        </div>

        </div>
    )
}

export default Header