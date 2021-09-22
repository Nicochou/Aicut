import React, { Component } from "react";

export default class Launch extends Component {


  componentDidMount() {
    
    
  }

  render() {
    return (

      <div className="container">
        <section class="parallax fullscreen">

            <div class="container container-fullscreen text-center">
                <div class="text-middle">
                    <h1 class="text-uppercase text-lg text">TOTO APPLICATION</h1>
                    <p class="lead text">La solution adapté au monde du streaming pour créer du contenue facilement.</p>
                </div>
            </div>
        </section>
        <hr />
        <section className="logoGroup">
            <div className="row">
                <img className="col-sm-6" src={'./AfficheGPE.png'} alt="image"/>
            </div>
        </section>
        <hr />
        <div class="row">
          <div class="col-lg-10">
            <h3>
              Lorem officia sit in proident eu eiusmod incididunt.
            </h3>
            <p>
              Ea dolore aliquip anim qui nostrud commodo magna exercitation 
              Lorem. Veniam mollit duis excepteur in et quis in laborum veniam 
              aliqua laborum. Aliqua excepteur cillum eu reprehenderit id velit 
              Lorem reprehenderit ex enim labore eiusmod esse voluptate. Incididunt 
              labore voluptate cupidatat 
            </p>
          </div>
          <div class="col-lg-2">
            <button className="btn btn-primary btn-block">Rejoins-nous</button>
          </div>
        </div>
        <hr />
        <section class="box-fancy section-fullwidth no-padding">
            <div class="row">
                <h3>En tant que streamer</h3>
                <div class="col-lg-4">
                    <h1 class="text-lg text-uppercase">01.</h1>
                    <h3>CUT</h3>
                    <span>The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. </span>
                </div>

                <div class="col-lg-4">
                    <h1 class="text-lg text-uppercase">02.</h1>
                    <h3>EDIT</h3>
                    <span>The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. </span>
                </div>

                <div class="col-lg-4">
                    <h1 class="text-lg text-uppercase">03.</h1>
                    <h3>MOUNT</h3>
                    <span>The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. </span>
                </div>
            </div>
        </section>
        <hr />
        <section id="sectionAnnonce" class="background-grey">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div>
                            <h4>Gère ton contenue facilement</h4>
                            <p>Lorem ipsum dolor sit amet, blandit 
                                vel sapien vitae, condimentum ultricies magna 
                                et. Quisque euismod orci ut et lobortis aliquam.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Créer des clips automatiquement</h4>
                            <p>Lorem ipsum dolor sit amet, blandit 
                                vel sapien vitae, condimentum ultricies 
                                magna et. Quisque euismod orci ut et lobortis aliquam.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Monte tes vidéos rapidement</h4>
                            <p>Lorem ipsum dolor sit amet, blandit 
                                vel sapien vitae, condimentum ultricies 
                                magna et. Quisque euismod orci ut et lobortis aliquam.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Ajoute tes présets de vidéos</h4>
                            <p>Lorem ipsum dolor sit amet, blandit vel 
                                sapien vitae, condimentum ultricies magna et. 
                                Quisque euismod orci ut et lobortis aliquam.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Partage tes clips</h4>
                            <p>Lorem ipsum dolor sit amet, blandit vel 
                                sapien vitae, condimentum ultricies magna et. 
                                Quisque euismod orci ut et lobortis aliquam.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Toujours plus d'intelligence artificielle</h4>
                            <p>Lorem ipsum dolor sit amet, blandit vel 
                                sapien vitae, condimentum ultricies magna et. 
                                Quisque euismod orci ut et lobortis aliquam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
      
    );
  }
}
