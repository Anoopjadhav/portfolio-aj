import React from 'react';
import MainLogo from '../../assets/main-logo.svg'
import './Summary.css';

function Summary(props) {
  return (
    <div className={'show-on-scroll col-md-7 page-1 text-center ' + props.class}>
      <img src={MainLogo} alt="main logo" />
      <div className="h1 bold main-title grey-1">
        Anoop Jadhav
          </div>
      <div className="h4 uppercase letterspacing-1 red bold">
        UI Developer | Designer
          </div>
      <div className="body-text summary-text">
        5 years of experience in UI Development and Design using tools and technologies like HTML, CSS, JavaScript, Vue Js, Salesforce Lightning, Adobe Illustrator, Figma, Sketch and Invision.
          </div>
      <div className="default-text red scroll-text thin">
        Scroll to Know more
          </div>
    </div>
  );
}

export default Summary;
