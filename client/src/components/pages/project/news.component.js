import React, { Component } from "react";

export default class News extends Component {
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
                    <h1>News</h1>
                    <span>The most happiest time of the day!.</span>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h3 class="text-uppercase">Get In Touch</h3>
                        <p>The most happiest time of the day!. Suspendisse condimentum porttitor cursus. Duis nec nulla turpis. Nulla lacinia laoreet odio, non lacinia nisl malesuada vel. Aenean malesuada fermentum bibendum.</p>
                        <div class="m-t-30">
                            <form class="widget-contact-form" action="include/contact-form-attachment.php" role="form" method="post" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="name">Name</label>
                                        <input type="text" aria-required="true" name="widget-contact-form-name" class="form-control name" placeholder="Enter your Name"></input>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="email">Email</label>
                                        <input type="email" aria-required="true" required name="widget-contact-form-email" class="form-control email" placeholder="Enter your Email"></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <label for="subject">Your Subject</label>
                                        <input type="text" name="widget-contact-form-subject" class="form-control" placeholder="Subject..."></input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea type="text" name="widget-contact-form-message" rows="5" class="form-control " placeholder="Enter your Message"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="message">Attachment file<small>*</small></label>
                                    <input type="hidden" name="MAX_FILE_SIZE" value="1000000"></input>
                                    <input type="file" aria-required="true" name="widget-contact-form-attachment"  class="form-control required" />             
                                </div> 
                                <div class="form-group">
                                    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                                    <div class="g-recaptcha" data-sitekey="6LddCxAUAAAAAKOg0-U6IprqOZ7vTfiMNSyQT2-M"></div>
                                </div>
                                <button class="btn" type="submit" id="form-submit"><i class="fa fa-paper-plane"></i>&nbsp;Send message</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="text-uppercase">Address & Map</h3>
                        <div class="row">
                            <div class="col-lg-6">
                                <p>
                                    Polo, Inc.
                                    795 Folsom Ave, Suite 600
                                    San Francisco, CA 94107
                                    P: (123) 456-7890
                                </p>
                            </div>
                            <div class="col-lg-6">
                                <p>
                                    Polo, Inc.
                                    795 Folsom Ave, Suite 600
                                    San Francisco, CA 94107
                                    P: (123) 456-7890
                                </p>
                            </div>
                        </div>
                        <div class="map" data-latitude="-37.817240" data-longitude="144.955826" data-style="light" data-info="Hello from &lt;br&gt; Inspiro Themes"></div>
                    </div>
                </div>
            </div>
        </section> 
      </div>
    );
  }
}
