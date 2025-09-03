import React from "react";
import "../assets/styles/About.css";

interface DateItemProps {
  month: string;
  day: string;
  date: string;
  event: string;
}

const DateItem: React.FC<DateItemProps> = ({ month, day, date, event }) => (
  <div className="date-item">
    <div className="date-box">
      <span>{month}</span>
      <span>{day}</span>
    </div>
    <div className="date-details">
      <div>{date}</div>
      <div>{event}</div>
    </div>
  </div>
);

const ImportantDatesGrid: React.FC = () => {
  return (
    <>
      <div className="grid-container">
        <div className="left-panel">
          <div className="section">
            <h2>About I2IT</h2>
            <p>
              The International Conference on Information, Implementation and
              Innovation in Technology (I2IT) is a premier event bringing
              together researchers, engineers, and practitioners to share their
              latest findings and discuss future trends in the field of
              technology.
            </p>
            <a href="#">Read More</a>
          </div>

          <div className="section">
            <h2>IEEE I2IT</h2>
            <p>
              2nd International Conference on Control Communication, Computing &
              Automation 2025
            </p>
            <a href="#">Read More</a>
          </div>

          <div className="section">
            <h2>Conference General Chair</h2>
            <div className="chair-section">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEW30z4HJEynQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715238003999?e=1759363200&v=beta&t=M0CUGnwUMm2GrM_YlU5aeOaBRchF3VFfyXCQdmBr-YY"
                alt="Conference General Chair"
              />
              <div>
                <p>
                  {" "}
                  <strong>Dr. Deptii Chaudhari</strong> Dr. Deepti Chaudhari is
                  a distinguished expert and the General Chair for the IEEE
                  I2ITCON2026. Her research is at the nexus of communication,
                  control, and computing automation, with a specific focus on
                  their societal impact. You have also mentioned that she is a
                  DBMS (Database Management Systems) expert. As a strong
                  advocate for sustainable and connected futures, she is
                  dedicated to developing technologies that contribute to a more
                  advanced and connected world.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <h2>IMPORTANT DATES</h2>
          <DateItem
            month="Jan"
            day="15"
            date="January 15, 2026"
            event="Paper Submission Opening"
          />
          <DateItem
            month="May"
            day="15"
            date="May 15, 2026"
            event="Submission Deadline"
          />
          <DateItem
            month="July"
            day="5"
            date="July 5, 2026"
            event="Acceptance Notification"
          />
          <DateItem
            month="July"
            day="10"
            date="July 10, 2026"
            event="Early Bird Registration Deadline"
          />
          <DateItem
            month="July"
            day="20"
            date="July 20, 2026"
            event="Camera-ready paper submission"
          />
          <DateItem
            month="July"
            day="31"
            date="July 31, 2026"
            event="Registration Deadline"
          />
          <DateItem
            month="July"
            day="10-11"
            date="July 10-11, 2026"
            event="Conference Dates"
          />
        </div>
      </div>
    </>
  );
};

export default ImportantDatesGrid;
