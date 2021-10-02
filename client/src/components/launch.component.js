import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { FcClapperboard, FcFilmReel, FcFilm } from "react-icons/fc";
import { FcWebcam, FcOnlineSupport, FcStackOfPhotos, FcSms} from "react-icons/fc";
import { FcCollect, FcComboChart, FcCustomerSupport, FcLike, FcManager, FcLock, FcSettings, FcTreeStructure, FcAbout} from "react-icons/fc";
import {Link} from 'react-router-dom';

export default class Launch extends Component {


  componentDidMount() {
    
    
  }

  render() {
    return (
      <div className="">
        {/* Carousel - Launch page */}
        <Carousel 
            autoPlay 
            emulateTouch 
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
        >
                <div>
                    <img src={'./img/carouselLaunch/921277.jpg'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/966319.jpg'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/1164609.png'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/1027689.png'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/1114362.png'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/995128.jpg'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/1027366.png'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/996741.png'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/885542.png'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/705837.png'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/598236.png'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/939716.png'} />
                </div>
                <div>
                    <img src={'./img/carouselLaunch/966314.jpg'} />
                </div>
            </Carousel>
            {/* :End Carousel - Launch page */}
        <section>
            {/* Introduce - Launch page */}
            <div className="heading-text heading-section text-center">
                <h2 className="text-lg text-uppercase">AICUT</h2>
                <span className="lead">Gère toi même ta bibliothèque de clips</span>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <h3 className="text-lg text-uppercase"><FcClapperboard /> CUT</h3>
                    <span>Vous avez la possibilité de faire des cut de façon automatique ou manuelle de votre live. </span>
                </div>

                <div className="col-lg-4">
                    <h3 className="text-lg text-uppercase"><FcFilmReel /> EDIT</h3>
                    <span>Il seront alors automatiquement stocké dans un dossier afin que vous puissier les editer(raccoucir la taille par exemple). </span>
                </div>

                <div className="col-lg-4">
                    <h3 className="text-lg text-uppercase"><FcFilm /> MOUNT</h3>
                    <span>Et enfin vous pourrez assembler tout vos clip que vous aurez éditer dans une seul et même vidéo qu'il ne vous resteras plus qu'a uploader sur votre chaîne youtube. </span>
                </div>
            </div>
            {/* :End Introduce - Launch page */}
        </section>
        <section className="background-grey">
            {/* Call to action - Launch page */}
            <div className="row">
            <div className="call-to-action background-image p-t-80 p-b-80">
                <div className="container">
                    <div className="col-lg-10">
                        <h3 className="text-dark">Commences à créer tes clips dès maintenant!</h3>
                        <p className="text-dark">Connect-toi avec ton compte Twitch et utilise l'intelligence artificielle afin de créer ta bibliothèque de clips</p>
                    </div>
                    <div className="col-lg-2">
                        <Link to="/login" className="btn btn-primary btn-block">Rejoins-nous</Link>
                    </div>
                </div>
            </div>
            </div>
            {/* :End Call to action - Launch page */}
        </section>
		<section class="text-dark">
            {/* Information - Launch page */}
            <div className="row">
                <div className="col-lg-3">
                    <div className="text-center">
                        <div className="icon text-md"><FcStackOfPhotos /></div>
                        <div className="counter text-md"> <span data-speed="3000" data-refresh-interval="50" data-to="12416" data-from="600" data-seperator="true"></span>489</div>
                        <div className="seperator seperator-small"></div>
                        <p className="text-sm text-uppercase">Clips produits</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="text-center">
                        <div className="icon text-md"><FcOnlineSupport /> </div>
                        <div className="counter text-md"> <span data-speed="4500" data-refresh-interval="23" data-to="365" data-from="100" data-seperator="true"></span>12</div>
                        <div className="seperator seperator-small"></div>
                        <p className="text-sm text-uppercase">Streamers bénéficiants</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="text-center">
                        <div className="icon text-md"><FcWebcam /></div>
                        <div className="counter text-md"> <span data-speed="3000" data-refresh-interval="12" data-to="114" data-from="50" data-seperator="true"></span>121</div>
                        <div className="seperator seperator-small"></div>
                        <p className="text-sm text-uppercase">Streams analysés</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="text-center">
                        <div className="icon text-md"><FcSms /></div>
                        <div className="counter text-md"> <span data-speed="4550" data-refresh-interval="50" data-to="14825" data-from="48" data-seperator="true"></span>5680</div>
                        <div className="seperator seperator-small "></div>
                        <p className="text-sm text-uppercase">Messages considérés</p>
                    </div>
                </div>
            </div>
            {/* :End Information - Launch page */}
		</section>
        <section id="sectionAnnonce" className="background-grey">
            <div className="heading-text heading-section text-center">
                <h2>NOS SERVICES</h2>
                <span className="lead">Les services que propose not</span>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-4">
                        <div className="icon-box effect">
                                <div className="icon">
                                    <Link href="#"><FcCollect /></Link>
                                </div>
                                <h3>Free Updates & Support</h3>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box effect">
                                <div className="icon">
                                    <Link href="#"><FcComboChart /></Link>
                                </div>
                                <h3>Free Updates & Support</h3>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box effect">
                                <div className="icon">
                                    <Link href="#"><FcCustomerSupport /></Link>
                                </div>
                                <h3>Free Updates & Support</h3>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box effect">
                                <div className="icon">
                                    <Link href="#"><FcLike /></Link>
                                </div>
                                <h3>Free Updates & Support</h3>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box effect">
                                <div className="icon">
                                    <Link href="#"><FcManager /></Link>
                                </div>
                                <h3>Free Updates & Support</h3>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box effect">
                                <div className="icon">
                                    <Link href="#"><FcLock /></Link>
                                </div>
                                <h3>Free Updates & Support</h3>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box effect">
                                <div className="icon">
                                    <Link href="#"><FcSettings /></Link>
                                </div>
                                <h3>Free Updates & Support</h3>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box effect">
                                <div className="icon">
                                    <Link href="#"><FcTreeStructure /></Link>
                                </div>
                                <h3>Free Updates & Support</h3>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box effect">
                                <div className="icon">
                                    <Link href="#"><FcAbout /></Link>
                                </div>
                                <h3>Free Updates & Support</h3>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="sectionAnnonce">
                <div className="row">
                <div className="heading-text heading-section text-center">
					<h2>NOS PARTENAIRES</h2>
					<span className="lead">Les streamers qui utilisent AICUT et travaillent avec nous.</span>
				</div>
                <ul className="grid grid-5-columns">
                    <li>
                        <img src={'./img/streamers/kameto.jpg'} />      
					</li>
                    <li>
                        <img src={'./img/streamers/ponce.png'} />      
					</li>
                    <li>
                        <img src={'./img/streamers/maglha.png'} />      
					</li>
                    <li>
						<img src={'./img/streamers/locklear.jpg'} />
					</li>
                    <li>
                        <img src={'./img/streamers/squeezie.jpg'} />      
					</li>
                    <li>
                        <img src={'./img/streamers/domingo.jpg'} />      
					</li>
                    <li>
                        <img src={'./img/streamers/zerator.jpg'} />      
					</li>
                    <li>
						<img src={'./img/streamers/sardoche.jpg'} />
					</li>
                    <li>
                        <img src={'./img/streamers/julia.jpg'} />      
					</li>
                    <li>
						<img src={'./img/streamers/deujna.jpg'} />
					</li>
				</ul>
                </div>
        </section>
        <section class="p-b-40 background-grey">
			<div class="container">

				<div class="heading-text heading-section text-center">
					<h2>NOTRE BLOG </h2>
					<span class="lead">The most happiest time of the day!. </span>
				</div>
			</div>

			<div id="blog">
				<div class="container">
					<div id="blog" class="grid-layout post-3-columns m-b-30" data-item="post-item">
						<div class="post-item border">
							<div class="post-item-wrap">
								<div class="post-image">
									<a href="#">
										<img alt="" src="images/blog/12.jpg" />
									</a>
									<span class="post-meta-category"><a href="">Lifestyle</a></span>
								</div>
								<div class="post-item-description">
									<span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
									<span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
									<h2><a href="#">Standard post with a single image
										</a></h2>
									<p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>

									<a href="#" class="item-link">Read More <i class="fa fa-arrow-right"></i></a>

								</div>
							</div>
						</div>
						<div class="post-item border">
							<div class="post-item-wrap">
								<div class="post-image">
									<a href="#">
										<img alt="" src="images/blog/17.jpg" />
									</a>
									<span class="post-meta-category"><a href="">Science</a></span>
								</div>
								<div class="post-item-description">
									<span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
									<span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>

									<h2><a href="#">Standard post with a single image
										</a></h2>
									<p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>

									<a href="#" class="item-link">Read More <i class="fa fa-arrow-right"></i></a>

								</div>
							</div>
						</div>
						<div class="post-item border">
							<div class="post-item-wrap">
								<div class="post-image">
									<a href="#">
										<img alt="" src="images/blog/18.jpg" />
									</a>
									<span class="post-meta-category"><a href="">Science</a></span>
								</div>
								<div class="post-item-description">
									<span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
									<span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>

									<h2><a href="#">Standard post with a single image
										</a></h2>
									<p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>

									<a href="#" class="item-link">Read More <i class="fa fa-arrow-right"></i></a>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </div>
      
    );
  }
}
