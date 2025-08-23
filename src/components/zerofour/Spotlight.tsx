import React from 'react';
import Image from 'next/image';

export default function Spotlight() {
  return (
    <section className="box spotlight">
      <h2 className="icon fa-file-alt">Spotlight</h2>
      <article>
        <a href="#" className="image featured">
          <Image
            src="/zerofour/images/pic07.jpg"
            alt="Neural Implants"
            width={560}
            height={315}
          />
        </a>
        <header>
          <h3>
            <a href="#">Neural Implants</a>
          </h3>
          <p>The pros and cons. Mostly cons.</p>
        </header>
        <p>
          Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus
          semper mod quisturpis nisi consequat ornare in, hendrerit in lectus
          semper mod quis eget mi quat etiam lorem.
        </p>
        <p>
          Lorem ipsum dolor quam turpis, feugiat sit amet ornare in, hendrerit
          in lectus semper mod quisturpis nisi consequat etiam lorem sed amet
          quam turpis.
        </p>
        <footer>
          <a href="#" className="button alt icon solid fa-file-alt">
            Continue Reading
          </a>
        </footer>
      </article>
    </section>
  );
}
