import React from 'react';
import Image from 'next/image';

export default function ArticleList() {
  const posts = [
    {
      date: 'July 24',
      title: 'Repairing a hyperspace window',
      img: '/zerofour/images/pic04.jpg',
    },
    {
      date: 'July 18',
      title: 'Adventuring with a knee injury',
      img: '/zerofour/images/pic05.jpg',
    },
    {
      date: 'July 14',
      title: 'Preparing for Y2K38',
      img: '/zerofour/images/pic06.jpg',
    },
  ];

  return (
    <section className="box article-list">
      <h2 className="icon fa-file-alt">Recent Posts</h2>

      {posts.map((p, i) => (
        <article className="box excerpt" key={i}>
          <a href="#" className="image left">
            <Image src={p.img} alt={p.title} width={140} height={90} />
          </a>
          <div>
            <header>
              <span className="date">{p.date}</span>
              <h3>
                <a href="#">{p.title}</a>
              </h3>
            </header>
            <p>
              Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
              lectus semper mod quisturpis nisi consequat etiam lorem.
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
