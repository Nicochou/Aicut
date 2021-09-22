import React, {useState, useEffect} from 'react';
import api from '../../../api/api';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function Games(){


    const [games,setGames] = useState([])
    let justChating = "509658";

    useEffect(() => {

        const fetchData = async () => {

            const resultJustChat = await api.get('https://api.twitch.tv/helix/clips?game_id=' + justChating + '&first=5')
            
            let dataArrayJustChat = resultJustChat.data.data;
            
            setGames(dataArrayJustChat);
        }

        fetchData();

    }, [])
        return (
            <div>

            <h1 className="titreGames">Clips les plus populaires</h1>

                <div className="container">
                  
                  <h2 className="">Les plus vues</h2>
                  <h3 className="">Filtres</h3>
                  <form class="form-inline" role="form">
                        <div class="form-group">
                            <label class="filter-col" >Jeux:</label>
                            <select id="pref-perpage" class="form-control">
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option selected="selected" value="10">10</option>
                            </select> 
                            <input type="text" class="form-control input-sm" id="pref-search"></input>         
                            <select id="pref-orderby" class="form-control">
                                <option>Descendent</option>
                            </select>       
                        </div> 
                    </form>
                    <Carousel responsive={responsive}>
                    {games.map((game,index) => (

                        <div key={index} className="card">

                            <iframe
                                src={"https://clips.twitch.tv/embed?clip=" + game.id + "&parent=localhost"}
                                height="300"
                                width="350"
                                allowfullscreen="true">
                            </iframe>

                            <div className="card-body">
                                <h5 className="card-title">Titre : {game.title}</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Streamer : {game.broadcaster_name}</li>
                                    <li class="list-group-item">Vues : {game.view_count}</li>
                                    <li class="list-group-item">Creator : {game.creator_name}</li>
                                    <li class="list-group-item">Created at : {game.created_at}</li>
                                </ul>
                                <div className="btnCarte"><a target="_blank" href={game.url} >Sur Twitch</a></div>
                            </div>
                            
                        </div>

                    ))}
                </Carousel>;
                
                </div>
                      
            </div>
        ) 
}

export default Games;