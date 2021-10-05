import React, { Component } from "react";

export default class Aboutus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      message: ""
    };
   
  }

  componentDidMount() {

    
  }

  render() {

    return (
      <div className="">
        <section id="page-title" data-bg-parallax="images/parallax/5.jpg">
            <div class="container">
                <div class="page-title">
                    <h1>Nous concernant</h1>
                    <span>The most happiest time of the day!.</span>
                </div>
            </div>
        </section>
        <section class="p-b-10">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="heading-text heading-section">
                            <h2>THE COMPANY</h2>
                            <span class="lead">The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. </span>
                        </div>
                    </div>
                    <div class="col-lg-6 m-t-60">
                        <div class="p-progress-bar-container title-up small extra-small color">
                            <div class="p-progress-bar" data-percent="100" data-delay="100" data-type="%">
                                <div class="progress-title">HTML5</div>
                            </div>
                        </div>
                        <div class="p-progress-bar-container title-up small extra-small color">
                            <div class="p-progress-bar" data-percent="94" data-delay="200" data-type="%">
                                <div class="progress-title">CSS3</div>
                            </div>
                        </div>
                        <div class="p-progress-bar-container title-up small extra-small color">
                            <div class="p-progress-bar" data-percent="78" data-delay="300" data-type="%">
                                <div class="progress-title">JQUERY</div>
                            </div>
                        </div>
                        <div class="p-progress-bar-container title-up small extra-small color">
                            <div class="p-progress-bar" data-percent="65" data-delay="400" data-type="%">
                                <div class="progress-title">MYSQL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="background-grey">
            <div class="container">
                <div class="heading-text heading-section text-center">
                    <h2>OUR TEAM</h2>
                    <span class="lead">Create amaThe most happiest time of the day!.</span>
                </div>
                <div class="row team-members team-members-shadow m-b-40">
                    <div class="col-lg-3">
                        <div class="team-member">
                            <div class="team-image">
                                <img src="images/team/6.jpg" />
                            </div>
                            <div class="team-desc">
                                <h3>Alea Smith</h3>
                                <span>Software Developer</span>
                                <p>The most happiest time of the day!. Praesent tristique hendrerit ex ut laoreet. </p>
                                <div class="align-center">
                                    <a class="btn btn-xs btn-slide btn-light" href="#">
                                        <i class="fab fa-facebook-f"></i>
                                        <span>Facebook</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="#" data-width="100">
                                        <i class="fab fa-twitter"></i>
                                        <span>Twitter</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="#" data-width="118">
                                        <i class="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="mailto:#" data-width="80">
                                        <i class="icon-mail"></i>
                                        <span>Mail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="team-member">
                            <div class="team-image">
                                <img src="images/team/7.jpg" />
                            </div>
                            <div class="team-desc">
                                <h3>Ariol Doe</h3>
                                <span>Software Developer</span>
                                <p>The most happiest time of the day!. Praesent tristique hendrerit ex ut laoreet. </p>
                                <div class="align-center">
                                    <a class="btn btn-xs btn-slide btn-light" href="#">
                                        <i class="fab fa-facebook-f"></i>
                                        <span>Facebook</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="#" data-width="100">
                                        <i class="fab fa-twitter"></i>
                                        <span>Twitter</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="#" data-width="118">
                                        <i class="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="mailto:#" data-width="80">
                                        <i class="icon-mail"></i>
                                        <span>Mail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="team-member">
                            <div class="team-image">
                                <img src="images/team/8.jpg" />
                            </div>
                            <div class="team-desc">
                                <h3>Emma Ross</h3>
                                <span>Software Developer</span>
                                <p>The most happiest time of the day!. Praesent tristique hendrerit ex ut laoreet. </p>
                                <div class="align-center">
                                    <a class="btn btn-xs btn-slide btn-light" href="#">
                                        <i class="fab fa-facebook-f"></i>
                                        <span>Facebook</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="#" data-width="100">
                                        <i class="fab fa-twitter"></i>
                                        <span>Twitter</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="#" data-width="118">
                                        <i class="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="mailto:#" data-width="80">
                                        <i class="icon-mail"></i>
                                        <span>Mail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="team-member">
                            <div class="team-image">
                                <img src="images/team/9.jpg" />
                            </div>
                            <div class="team-desc">
                                <h3>Victor Loda</h3>
                                <span>Software Developer</span>
                                <p>The most happiest time of the day!. Praesent tristique hendrerit ex ut laoreet. </p>
                                <div class="align-center">
                                    <a class="btn btn-xs btn-slide btn-light" href="#">
                                        <i class="fab fa-facebook-f"></i>
                                        <span>Facebook</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="#" data-width="100">
                                        <i class="fab fa-twitter"></i>
                                        <span>Twitter</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="#" data-width="118">
                                        <i class="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" href="mailto:#" data-width="80">
                                        <i class="icon-mail"></i>
                                        <span>Mail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="heading-text heading-section text-center">
                    <h2>WHAT WE DO</h2>
                    <span class="lead">Create amaThe most happiest time of the day!.</span>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div>
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Social Marketing</h4>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Graphic Design</h4>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>App Development</h4>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <h4>Hosting services</h4>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
