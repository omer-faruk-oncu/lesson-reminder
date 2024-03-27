import React, { useState } from "react";
import LessonStyle from "./lesson.module.css";
const LessonCard = ({ data }) => {
  const [lessons, setLessons] = useState(data);
  const clearLessons = () => setLessons([]);
  return (
    <div className={LessonStyle.anaContainer}>
      <h1>{lessons.length} Lessons Today</h1>
      <div className={LessonStyle.container}>
        {lessons.map((lesson, index) => (
          <div key={index} className={LessonStyle.card}>
            <img src={lesson.image} alt={lesson.name} width="100px" />
            <div className={LessonStyle.info}>
              <h2>
                <span className={LessonStyle.lessonNameLabel}>
                  Lesson Name:
                </span>
                <span className={LessonStyle.lessonName}>{lesson.name}</span>
              </h2>
              <h2>
                <span className={LessonStyle.lessonHourLabel}>
                  Lesson Hour:
                </span>
                <span className={LessonStyle.lessonHour}>{lesson.hour}</span>
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={clearLessons}>Clear List</button>
      </div>
    </div>
  );
};
export default LessonCard;
