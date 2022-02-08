/* eslint-disable @next/next/no-img-element */
import path from "../../lib/path"



export default function Hero(){
  
  return (
    <section className="hero-section">
      <div className="background-details">
        <div className="details details-1"></div>
        <div className="details oval-2"></div>
        <div className="details oval-3"></div>
      </div>      
      <img src={path('/assets/logo.svg')} alt="equalizer logo" className="logo" />
      <img src={path('/')} alt="" className="detail-1" />

    </section>
  )
}