import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Anurag Dwivedi </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            I am a final-year B.Tech student in the Computer Science and Engineering (CSE) branch.
            <br />
            I am studying at MMMUT, Gorakhpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create with purpose, impact the world!"{" "}
          </p>
          <footer className="blockquote-footer">Anurag</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
