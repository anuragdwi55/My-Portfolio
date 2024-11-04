import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import bitebliss from "../../Assets/Projects/bitebliss.png";
import sorting from "../../Assets/Projects/sorting.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitebliss}
              isBlog={false}
              title="Bite-Bliss"
              description="Bite Bliss is a frontend-only food delivery web app built with React.js, Redux, and Tailwind CSS, featuring an intuitive user interface that allows customers to easily browse, select, and order their favorite meals for delivery and I'm still working on this project."
              ghLink="https://github.com/anuragdwi55/Bite-Bliss"
              demoLink="https://bite-bliss-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visualizer"
              description="A sorting visualizer created with HTML, CSS, and JavaScript visually demonstrates various sorting algorithms by animating the rearrangement of bars or blocks representing numbers, allowing users to observe the sorting process in real-time."
              ghLink="https://github.com/anuragdwi55/SORTING_Visualization"
              demoLink="https://anuragdwi55.github.io/SORTING_Visualization/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="The Todo App is a simple application built with HTML, CSS, and JavaScript that utilizes DOM manipulation concepts to enable users to add, edit, and delete tasks, providing an interactive way to manage their to-do lists directly in the browser."
              ghLink="https://github.com/anuragdwi55/TODO_LIST"
              demoLink="https://anuragdwi55.github.io/TODO_LIST/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
