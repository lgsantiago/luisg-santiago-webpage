import React from "react";
import "./Videos.scss";

const Videos: React.FC = () => (
  <>
    <section className="section-videos">
      <h2 className="heading-channel">YouTube Channel</h2>
      <div className="videos-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-goKGvmlqBw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nqQJLwiOTIY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gsr8uDATCQA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  </>
);

export default Videos;
