'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  images: string[];
  interval?: number;
  title?: React.ReactNode;
};

export default function Hero({ images, interval = 6000, title }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    // avoid running on server rehydration
    if (!mounted.current) {
      mounted.current = true;
    }
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(t);
  }, [images.length, interval, paused]);

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={src + i}
          className={`carousel-image ${i === index ? 'active' : ''}`}
          aria-hidden={i === index ? 'false' : 'true'}
        >
          <Image
            src={src}
            alt={`Hero ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      <div className="carousel-overlay">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white text-center px-4 hero-outline">
          {title}
        </h1>
      </div>

      <div
        className="carousel-indicators"
        role="tablist"
        aria-label="Hero slides"
      >
        {images.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === index ? 'active' : ''}`}
            aria-label={`Show slide ${i + 1}`}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
