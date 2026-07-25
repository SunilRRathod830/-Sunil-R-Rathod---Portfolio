import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Engineering</h4>
                <h5>Undergraduate Student</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science Engineering with a focus on
              software development, web technologies, and AI-driven applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Indian Cattle Breed Identification</h4>
                <h5>Mini Project</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built a full-stack AI web application with React, FastAPI, and
              Google Gemini AI to identify cattle breeds and detect visible
              diseases from images with multilingual recommendations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Summarization System</h4>
                <h5>Final Year Project</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed an AI-driven system using computer vision, NLP,
              multimodal learning, and reinforcement learning to generate
              concise, semantically meaningful video summaries without labeled data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
