/* eslint-disable @next/next/no-img-element */
import path from "../lib/path";

export default function Card(){
  return (
    <article className="card">
        <h2 className="title">Premium EQ</h2>
        <p className="description">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <div className="price">
          <strong>$4</strong> <span>/month</span>
        </div>
        <button className="cta apple">
          <img src={path('/assets/icon-apple.svg')} alt="apple icon" />
          <span>iOS Download</span>          
        </button>
        <button className="cta android">
          <img src={path('/assets/icon-android.svg')} alt="apple icon" />
          <span>Android Download</span>         
        </button>
      </article>
  )
}