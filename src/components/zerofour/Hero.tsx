import React from 'react';

export default function Hero(){
  return (
    <div id="banner" className="mb-8">
      <div className="max-w-6xl mx-auto px-4 text-center py-16">
        <h2 className="text-2xl font-extrabold text-white"> 
          <strong>ZeroFour:</strong> A free responsive site template
        </h2>
        <p className="mt-4 text-lg text-white/80">Does this statement make you want to click the big shiny button?</p>
        <div className="mt-6">
          <a href="/zerofour/index.html" className="btn btn-primary">Yes it does</a>
        </div>
      </div>
    </div>
  );
}
