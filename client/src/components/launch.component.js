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
                    <h1 class="text-uppercase text-lg text">A.I CUT</h1>
                    <p class="lead text">La solution adapté au monde du streaming pour créer du contenue facilement.</p>
                </div>
            </div>
        </section>
        <hr />
        <section className="logoGroup">
            <div className="row">
                <img className="col-sm-6" class="center" src={'./AfficheGPE.png'} alt="image" height={1000} />
            </div>
        </section>
        <hr />
        <div class="row">
          <div class="col-lg-10">
            <h3>
              Contribuer
            </h3>
            <p>
              Si tu souhaite contribuer au projet de dévellopement tu peux nous rejoindre sur github pour et essaye de crée une feature pour que la platforme grandisse et permettent plus de choses
            </p>
          </div>
          <div class="col-lg-2">
            <button onClick="https://github.com/Nicochou/Aicut" className="btn btn-primary btn-block">Rejoins-nous</button>
          </div>
        </div>
        <hr />
        <section class="box-fancy section-fullwidth no-padding">
            <div class="row">
                <h3>En tant que streamer</h3>
                <div class="col-lg-4">
                    <h1 class="text-lg text-uppercase">01.</h1>
                    <h3>CUT</h3>
                    <span>Vous avez la possibilité de faire des cut de façon automatique ou manuelle de votre live. </span>
                </div>

                <div class="col-lg-4">
                    <h1 class="text-lg text-uppercase">02.</h1>
                    <h3>EDIT</h3>
                    <span>Il seront alors automatiquement stocké dans un dossier afin que vous puissier les editer(raccoucir la taille par exemple). </span>
                </div>

                <div class="col-lg-4">
                    <h1 class="text-lg text-uppercase">03.</h1>
                    <h3>MOUNT</h3>
                    <span>Et enfin vous pourrez assembler tout vos clip que vous aurez éditer dans une seul et même vidéo qu'il ne vous resteras plus qu'a uploader sur votre chaîne youtube. </span>
                </div>
            </div>
        </section>
        <hr />
        <section id="sectionAnnonce" class="background-grey">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div>
                            <h4>Créer des clips automatiquement</h4>
                            <p>Un algorithme de machine learning vas analyser certain données de votre live et ensuite feras des calculs qui jugerons si un clip dois être enregitré.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Ajoute tes présets de vidéos</h4>
                            <p>Vous pouvez ajouter un intro, une transition et une outro, cela vous permettras en un click de confectionner votre best-of, il vous resteras plus qu'a selectionné vos clip dans l'ordre et ensuite notre programme se chargeras d'assembler le tous.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Partage tes clips</h4>
                            <p>Vous pouvez a tous moment selectionné un clip et le partager à votre communité.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Toujours plus d'intelligence artificielle</h4>
                            <p>Plus vous utiliseré la platforme et le system de clip automatique plus la machine deviendras précises car elle apprend de ces erreurs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
      
    );
  }
}
