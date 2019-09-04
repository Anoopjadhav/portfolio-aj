import React from 'react'
import BarGraph from '../BarGraph/BarGraph'
import './Skills.css'


class Skills extends React.Component {
    render() {
        return <div class="col-md-7 page-1 text-left section">
            <div class="section-title grey4 h2 bold">Skills</div>
            <div class="subsection">
                <div class="subsection-title uppercase body-text grey3 letterspacing-1">Development</div>
                <div class="subsection-data">
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">HTML</div><BarGraph class="col-md-10" value="75" />
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">CSS</div><BarGraph class="col-md-10" value="80" />
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">JS</div><BarGraph class="col-md-10" value="50" />
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">Angular</div><BarGraph class="col-md-10" value="25" />
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">Vue</div><BarGraph class="col-md-10" value="50" />
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">Lightning</div><BarGraph class="col-md-10" value="80" />
                    </div>
                    
                </div>
                
            </div>
            <div class="subsection">
                <div class="subsection-title uppercase body-text grey3 letterspacing-1">DESIGN</div>
                <div class="subsection-data">
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">Adobe Illustrator</div><BarGraph class="col-md-10" value="75" />
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">Sketch</div><BarGraph class="col-md-10" value="80" />
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">Figma</div><BarGraph class="col-md-10" value="50" />
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div class="skill-label grey-1 body-text bold col-md-2">Invision</div><BarGraph class="col-md-10" value="25" />
                    </div>
                    
                </div>
                
            </div>
        </div>
    }
}

export default Skills