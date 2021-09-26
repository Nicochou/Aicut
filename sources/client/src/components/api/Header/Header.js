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
            <nav className="navbar navbar-expand navbar-primary bg-primary">
                {(menu || !smallScreen) && (

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="listeMenu">
                    <div className="navbar-nav">
                        <li onClick={hideMenu} className="nav-item">
                            <Link className="lien" to="/game">
                            Games
                            </Link>
                        </li>
                        <li onClick={hideMenu} className="nav-item">
                            <Link className="lien" to="/top-streams">
                            Streams
                            </Link>
                        </li>
                        {/* set up middlewar and rooting */}
                        <li onClick={hideMenu} className="nav-item">
                            <Link className="lien" to="/clip">
                            Clips
                            </Link>
                        </li>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
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
                    </div>
                    

                </ul>
            </div>
            )}

            </nav>

        <div className="menuResBtn">
            <img onClick={toggleNavRes} src={!menu ? menuIco : croix} alt="icone menu responsive" className="menuIco"/>
        </div>

        </div>
    )
}

export default Header