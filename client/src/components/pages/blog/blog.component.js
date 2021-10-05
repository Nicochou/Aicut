import React, { Component } from "react";

export default class Blog extends Component {
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
    <section id="page-content">
      <div class="container">
        <div id="blog" class="grid-layout post-2-columns m-b-30" data-item="post-item">
          <div class="post-item border">
            <div class="post-item-wrap">
              <div class="post-audio"> <a href="#"> <img alt="" src="images/blog/audio-bg.jpg"/> </a> <span class="post-meta-category"><a href="">Audio</a></span>
                <audio class="video-js vjs-default-skin" controls preload="false" data-setup="{}">
                  <source src="audio/beautiful-optimist.mp3" type="audio/mp3" />
                </audio>
              </div>
              <div class="post-item-description"> <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span> <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
                <h2><a href="#">Self Hosted HTML5 Audio (mp3) with image cover</a></h2>
                <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                <a href="#" class="item-link">Read More <i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="post-item border">
            <div class="post-item-wrap">
              <div class="post-video">
                <iframe src="https://player.vimeo.com/video/198559065?title=0&byline=0&portrait=0" width="560" height="376" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                <span class="post-meta-category"><a href="">Video</a></span> </div>
              <div class="post-item-description"> <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span> <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
                <h2><a href="#">This is a example post with Vimeo video</a></h2>
                <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                <a href="#" class="item-link">Read More <i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="post-item border">
            <div class="post-item-wrap">
              <div class="post-image"> <a href="#"> <img alt="" src="images/blog/18.jpg"/> </a> <span class="post-meta-category"><a href="">Science</a></span> </div>
              <div class="post-item-description"> <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span> <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
                <h2><a href="#">Standard post with a single image </a></h2>
                <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                <a href="#" class="item-link">Read More <i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="post-item border">
            <div class="post-item-wrap">
              <div class="post-video">
                <iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ" frameborder="0" allowfullscreen></iframe>
                <span class="post-meta-category"><a href="">Video</a></span> </div>
              <div class="post-item-description"> <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span> <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
                <h2><a href="#">This is a example post with YouTube</a></h2>
                <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                <a href="#" class="item-link">Read More </a>
              </div>
            </div>
          </div>
        </div>
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item active"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>
        </ul>
      </div>
        </section>
      </div>
    );
  }
}
