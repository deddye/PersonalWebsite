import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023 (Expected)"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Virginia Polytechnic Institute and State University
          </h3>

          <p> B.S. Computer Science </p>
          <p>
            Relevant Coursework: <br></br>
            CS 3114: Data Structure and Algorithms <br></br>
            CS 2506: Computer Organization I & II <br></br>
            CS 3714: Mobile Software Development (Android) <br></br>
            CS 3214: Computer Systems
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2020 - Dec 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Naval Research Enterprise Internship Program
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dahlgren, VA
          </h4>
          <p>Canceled due to Covid.</p>
          <p> Because of the cancelation, 
            they held a 'Fall Engagement' for 3 months through the fall.
            During the 'Fall Engagement', I worked with a team to research different modeling Tools
            that could be use to automate models based on user data input.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - July 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Summer Intern - SimVentions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fredericksburg, VA
          </h4>
          
          <p>
            <ul>
              <li> Performed research and developed prototypes for kiosk display applications, 
                   3D models and VR tours </li>
              <li> Participated in daily stand-ups with mentors and bi-weekly sprint reviews
                   with company CTO, HR, other interns and their mentors. </li>
            </ul>
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2022 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Part-Time On-Call (PTOC) Intern - SimVentions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fredericksburg, VA
          </h4>
          <p>
            <ul>
              <li> Participated in daily SCRUMS and code reviews. </li>
              <li> Updated NPM packages </li>
              <li> Changed gql queries from .tsx file type to plain text .gql file type</li>
            </ul>

          </p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;