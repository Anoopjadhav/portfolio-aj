import React from "react";
import KnowMoreButton from "../../assets/arrow-icon.svg";
import BarGraph from "../BarGraph/BarGraph";
import "./Education.css";

function Education(props) {
  return (
    <div
      className={
        "show-on-scroll col-md-7 page-1 text-left section education " +
        props.class
      }
    >
      <div className="section-title grey4 h2 bold">Education</div>

      <div className="subsection">
        {props.dbData.education.map(ele => {
          return (
            <div class="subsection-wrappers">
              <div className="subsection-title uppercase body-text grey3 letterspacing-1 mt-2">
                {ele.type}
              </div>
              <div className="subsection-data">
                <span className="h3 grey1 bold">{ele.institute}</span>
                <span className="h3 grey3 light">, {ele.place}</span>
                <div className="education-bars">
                  <BarGraph
                    value={ele.percentage}
                    currentStep={props.currentStep}
                    sectionStep={2}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
