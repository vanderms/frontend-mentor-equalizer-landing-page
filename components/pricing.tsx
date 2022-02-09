/* eslint-disable @next/next/no-img-element */
import path from '../lib/path';
import Card from './card';

export default function Pricing() {
  return (
    <div className="pricing-section-root">
      <img
        src={path('/assets/illustration-app.png')}
        alt="mobile illustration"
        className="illustration"
      />
      <div className="background">
        <img
          src={path('/assets/bg-pattern-2.svg')}
          alt=""
          className="pattern"
        />
      </div>
      <Card/>
      <div className="bg-detail"></div>      
    </div>
  );
}
