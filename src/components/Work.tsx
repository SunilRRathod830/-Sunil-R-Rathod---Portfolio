import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const projects = [
    {
      title: "Indian Cattle Breed Identification & Disease Detection",
      category: "AI / Full-stack",
      tools: "React, FastAPI, Google Gemini AI",
      link: "https://github.com/SunilRRathod830/Indian-Cattle-Breed-Identification-And-Disease-Detection-Using-ML-Techniques.git",
      description:
        "Developed a full-stack AI-powered web application to identify Indian cattle breeds and detect visible diseases from images with multilingual recommendations.",
    },
    {
      title: "Language-Guided Reinforcement Learning for Unsupervised Video Summarization",
      category: "Final Year Project",
      tools:
        "Computer Vision, NLP, Multimodal Representation Learning, Reinforcement Learning",
      link: "#",
      description:
        "Built an AI-based video summarization system that generates concise, semantically meaningful summaries without labeled data.",
    },
    {
      title: "Student Attendance Management System",
      category: "Web Application",
      tools: "HTML, CSS, JavaScript",
      link: "https://github.com/SunilRRathod830/Student-Attendance-Management-System.git",
      description:
        "Developed a smart attendance system with role-based authentication, live tracking, CSV import/export, CIE eligibility monitoring, and WhatsApp/Email alerts for low attendance.",
    },
  ];

  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>
                      {project.link !== "#" ? (
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p>{project.description}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
