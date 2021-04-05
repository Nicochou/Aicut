import React, {useState, useEffect} from 'react';
import api from '../../../api/api';
import {Link} from 'react-router-dom';

function Games(){


    const [games,setGames] = useState([])
    let justChating = "509658";
    let LeagueofLegend = "21779";

    useEffect(() => {

        const fetchData = async () => {

            const resultJustChat = await api.get('https://api.twitch.tv/helix/clips?game_id=' + justChating)
            const resultLoL = await api.get('https://api.twitch.tv/helix/clips?game_id=' + LeagueofLegend)
            
            let dataArrayJustChat = resultJustChat.data.data;
            let dataArrayresultLoL = resultLoL.data.data;

            let finalArray = dataArrayJustChat.concat(dataArrayresultLoL);
            
            setGames(finalArray);
        }

        fetchData();

    }, [])
// console.log(games);

        return (
            <div>

            <h1 className="titreGames">Clips les plus populaires</h1>

                <div className="container">

                    {games.map((game,index) => (

                        <div key={index} className="card">

                            <img src={game.thumbnail_url} alt="clip image" className="card-img-top"/>

                            <div className="card-body">
                                <h5 className="card-title">Titre : {game.title}</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Streamer : {game.broadcaster_name}</li>
                                    <li class="list-group-item">Vues : {game.view_count}</li>
                                    <li class="list-group-item">Creator : {game.creator_name}</li>
                                    <li class="list-group-item">Created at : {game.created_at}</li>
                                </ul>
                                <div className="btnCarte"><a target="_blank" href={game.url} >Voir le clip</a></div>
                            </div>
                        </div>

                    ))}

                </div>

            </div>
        ) 
}

export default Games;