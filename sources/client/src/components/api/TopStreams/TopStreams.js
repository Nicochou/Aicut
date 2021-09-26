import React, {useEffect, useState} from 'react';
import api from '../../../api/api';
import {Link} from 'react-router-dom';

function TopStreams(){

    const [channels, setChannels] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const result = await api.get("https://api.twitch.tv/helix/streams");

            let dataArray = result.data.data;
            console.log(dataArray);
            
            let gameIDs = dataArray.map(stream => {
                return stream.game_id;
            })
            let userIDs = dataArray.map(stream => {
                return stream.user_id;
            })
            // console.log(gameIDs, userIDs);
            
            // Création des URLs personnalisés

            let baseUrlGames = "https://api.twitch.tv/helix/games?";
            let baseUrlUsers = "https://api.twitch.tv/helix/users?";

            let queryParamsGame = "";
            let queryParamsUsers = "";

            gameIDs.map(id => {
                return (queryParamsGame = queryParamsGame + `id=${id}&`)
            })
            userIDs.map(id => {
                return (queryParamsUsers = queryParamsUsers + `id=${id}&`)
            })

            // url final
            let urlFinalGames = baseUrlGames + queryParamsGame;
            let urlFinalUsers = baseUrlUsers + queryParamsUsers;
            // console.log(urlFinalGames);

            // appel
            let gamesNames = await api.get(urlFinalGames);
            let getUsers = await api.get(urlFinalUsers);

            let gamesNameArray = gamesNames.data.data;
            let arrayUsers = getUsers.data.data;
            // console.log(arrayUsers, gamesNameArray);


            // création du tableau final
            let finalArray = dataArray.map(stream => {

                stream.gameName = "";
                stream.login = "";

                gamesNameArray.forEach(name => {
                    arrayUsers.forEach(user => {
                        if(stream.user_id === user.id && stream.game_id === name.id) {
                            
                            stream.truePic = user.profile_image_url;
                            stream.gameName = name.name;
                            stream.login = user.login;
                        }
                    })
                })

                let newUrl = stream.thumbnail_url 
                .replace('{width}', "320")
                .replace('{height}', "180");
                stream.thumbnail_url = newUrl;

                return stream;
            })
            
            setChannels(finalArray);
        }

        fetchData();

    }, [])

    return (
        <div>
            <h1 className="titreGames">Stream les plus populaires</h1>
           
            <div className="container">
                <div className="row">
                {channels.map((channel, index) => (

                    <div key={index} className="card">

                        <img src={channel.thumbnail_url} className="card-img-top" alt="jeu"/>

                        <div className="card-body">
                            <h5 className="card-title">Streamer : {channel.user_name}</h5>
                            <h5 className="card-title">Title : {channel.title}</h5>
                            <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Jeu : {channel.gameName}</li>
                                    <li class="list-group-item">Viewers : {channel.viewer_count}</li>
                                    <li class="list-group-item">Language : {channel.language}</li>
                                </ul>

                        <Link
                        className="lien"
                        to={{
                            pathname: `/live/${channel.login}`
                        }}
                        >
                            <div className="btnCarte">Regarder {channel.user_name}</div>
                        </Link>

                        </div>


                    </div>

                ))}
                </div>
            </div>
        </div>
    )

}


export default TopStreams;