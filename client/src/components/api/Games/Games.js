import React, {useState, useEffect} from 'react';
import api from '../../../api/api';
import {Link} from 'react-router-dom';

function Games(){

    const [games,setGames] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const result = await api.get('https://api.twitch.tv/helix/games/top')
             console.log(result);
            
            let dataArray = result.data.data;
            let finalArray = dataArray.map(game => {
                let newUrl = game.box_art_url
                .replace("{width}", "250")
                .replace("{height}", "300");
            game.box_art_url = newUrl;
            return game;
            });

            setGames(finalArray);
        }

        fetchData();

    }, [])
 console.log(games);

        return (
            <div>

            <h1 className="titreGames">Jeux les plus populaires</h1>

                <div className="container container-game">
                    <div class="row">
                    {games.map((game,index) => (

                        <div key={index} className="card " >

                            <img src={game.box_art_url} alt="jeu profile pic" className="card-img-top"/>

                            <div className="card-body">
                                <h5 className="card-title">{game.name}</h5>

                                <Link
                                className="lien"
                                to={{
                                    pathname: "game/" + game.name,
                                    state: {
                                        gameID: game.id
                                    }
                                }}
                                >
                                <div className="btnCarte">Regarder {game.name}</div>
                                </Link>
                            </div>
                        </div>

                    ))}
                    </div>
                </div>

            </div>
        ) 
}

export default Games;