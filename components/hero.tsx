/* eslint-disable @next/next/no-img-element */
import path from '../lib/path';

export default function Hero() {
  return (
    <section className="hero-section-root">
      <div className="background-images">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="details"></div>
      </div>
      <img
        src={path('/assets/logo.svg')}
        alt="equalizer logo"
        className="logo"
      />
      <header className='header'>
        <h1 className="title">We make your music sound extraordinary.</h1>
        <p className="description">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain control,
          reverb, and more!
        </p>
      </header>      
    </section>
  );
}
