import React from 'react';
import Image from 'next/image';

export default function Feature1() {
  return (
    <section className="container box feature1 my-8">
      <div className="row">
        <div className="col-12">
          <header className="first major">
            <h2>This is an important heading</h2>
            <p>
              And this is where we talk about why we&apos;re{' '}
              <strong>pretty awesome</strong>...
            </p>
          </header>
        </div>

        <div className="col-4 col-12-medium">
          <section>
            <a href="#" className="image featured">
              <Image
                src="/zerofour/images/pic01.jpg"
                alt=""
                width={320}
                height={180}
              />
            </a>
            <header className="second icon solid fa-user">
              <h3>Heading</h3>
              <p>And a subtitle</p>
            </header>
          </section>
        </div>

        <div className="col-4 col-12-medium">
          <section>
            <a href="#" className="image featured">
              <Image
                src="/zerofour/images/pic02.jpg"
                alt=""
                width={320}
                height={180}
              />
            </a>
            <header className="second icon solid fa-cog">
              <h3>Also a Heading</h3>
              <p>And another subtitle</p>
            </header>
          </section>
        </div>

        <div className="col-4 col-12-medium">
          <section>
            <a href="#" className="image featured">
              <Image
                src="/zerofour/images/pic03.jpg"
                alt=""
                width={320}
                height={180}
              />
            </a>
            <header className="second icon solid fa-chart-bar">
              <h3>Another Heading</h3>
              <p>And yes, a subtitle</p>
            </header>
          </section>
        </div>

        <div className="col-12">
          <p>
            Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
            lectus. Praesent semper bibendum ipsum, et tristique augue fringilla
            eu. Vivamus id risus vel dolor auctor euismod quis eget mi.
          </p>
        </div>
      </div>
    </section>
  );
}
