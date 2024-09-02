import React, {useState} from 'react'
import "./qualification.css"
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journy</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={() => toggleTab(2)}>
          <i className="uil uil-briefcase-alt qualification__icon"></i>
          Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech I.T</h3>
                <span className="qualification__subtitle">IMS Engineering College</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> 
              <div>
                <h3 className="qualification__title">XII Science</h3>
                <span className="qualification__subtitle">Priyanka Modern School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017-2018
                </div>
              </div>
            </div>
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">X</h3>
                <span className="qualification__subtitle">Priyanka Modern School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2015-2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Associate Full-stack Developer</h3>
                <span className="qualification__subtitle">Physics Wallah - Bangalore</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>April, 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> 
              <div>
                <h3 className="qualification__title">Teaching Assistant</h3>
                <span className="qualification__subtitle">iNeuron.ai - Bangalore</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>July - Dec, 2022
                </div>
              </div>
            </div>
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ERPM.in</h3>
                <span className="qualification__subtitle">Web Developer Intern - Ghaziabad</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>May - July, 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Qualification