import React from "react";
import "./AboutUs.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-header-h1">About the Conference</h1>
      </header>

      <section className="about-content">
        <div className="about-text">
          <p className="about-text-p">
            The 2nd IEEE International Conference on Information, Implementation and Innovation in Technology (IEEE I2ITCON2026) is a prestigious global event that unites top researchers, engineers, and scientists. The conference serves as a key platform for sharing groundbreaking findings, discussing future trends, and exploring innovative solutions in information technology, control systems, communication, computing, and automation.
          </p>
          <p className="about-text-p">
            The central mission of IEEE I2ITCON2026 is to encourage collaboration and the exchange of knowledge to navigate the challenges and opportunities presented by rapid technological change. The event's theme, 'Information, Implementation and Innovation in Technology', focuses on all aspects of technological advancements and their applications in science, engineering, technology, and management. By bringing together experts from academia and industry, the conference seeks to identify and solve societal, environmental, and industrial problems using cutting-edge science and technology.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQGCWG8aTrIoGw/feedshare-shrink_2048_1536/B4DZW_LhXvG8Ao-/0/1742669227121?e=1759363200&v=beta&t=phAfnYCfRGr3lt6zHEhkI9YCcGDIJdCLIyaLFtThiI8"
            alt="Conference Venue"
          />
        </div>
      </section>

      <section className="chair-section">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQEW30z4HJEynQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715238003999?e=1759363200&v=beta&t=M0CUGnwUMm2GrM_YlU5aeOaBRchF3VFfyXCQdmBr-YY"
          alt="Conference General Chair"
        />
        <div className="chair-details">
          <h3 className="chair-details-h3">Dr. Deptii Chaudhari</h3>
          <p className="chair-details-p">
            Dr. Chaudhari is a distinguished expert in the field and the General
            Chair for the IEEE I2ITCON2026. Her research focuses on the
            intersection of communication, control, and computing automation,
            with a strong emphasis on their societal impact. She is a strong
            advocate for developing technologies that lead to a more sustainable
            and connected future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
