import React from 'react'
import "./work.css"
import Works from './Works'
const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <spam className="section__subtitle">Most recent works</spam>
      <Works />
    </section>
  )
}

export default Work