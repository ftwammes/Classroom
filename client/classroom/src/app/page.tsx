"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import ClassCard from "../components/ClassCard";
import course_interface from "../interfaces/course";


export default function Home() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    fetch("http://localhost:3000/courses").then(res => {
      return res.json();
    }).then(data => {
      setCourses(data.courses);
    }).catch(error => {
      console.error(error.message);
    });
  };

  useState(() => {
    fetchCourses();
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {
        courses.map((course:course_interface) => {
            return (
              <ClassCard
                id={course.id}
                name={course.name}
                image={course.image}
                color={course.color}
                descriptionHeading={course.descriptionHeading}
                teacher={course.teacher}
              />
            );
            
          })
        }
      </main>
    </div>
  );
}
