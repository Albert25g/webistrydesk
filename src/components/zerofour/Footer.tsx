import React from 'react';
import Link from 'next/link';

export default function Footer(){
  return (
    <div id="footer-wrapper">
      <footer id="footer" className="container">
        <div className="row">
          <div className="col-3 col-6-medium col-12-small">
            <section>
              <h2>Filler Links</h2>
              <ul className="divided">
                <li><a href="#">Quam turpis feugiat dolor</a></li>
                <li><a href="#">Amet ornare in hendrerit</a></li>
                <li><a href="#">Semper mod quisturpis nisi</a></li>
              </ul>
            </section>
          </div>
          <div className="col-3 col-6-medium col-12-small">
            <section>
              <h2>More Filler</h2>
              <ul className="divided">
                <li><a href="#">Quam turpis feugiat dolor</a></li>
                <li><a href="#">Amet ornare in in lectus</a></li>
                <li><a href="#">Semper mod sed tempus nisi</a></li>
              </ul>
            </section>
          </div>
          <div className="col-6 col-12-medium imp-medium">
            <section>
              <h2><strong>ZeroFour</strong> by HTML5 UP</h2>
              <p>Hi! This is <strong>ZeroFour</strong>, a free, fully responsive HTML5 site template by HTML5 UP.</p>
              <a href="#" className="button alt">Learn More</a>
            </section>
          </div>
          <div className="col-12">
            <div id="copyright">
              <ul className="menu">
                <li>© Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
