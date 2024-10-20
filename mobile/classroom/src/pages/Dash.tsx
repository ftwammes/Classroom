"use client";

import React, { useState } from "react";
import styles from "./Dash.module.css";
import ClassCard from "../components/ClassCard";
import course_interface from "../interfaces/course";

import Navbar from "../components/Navbar";
import Requester from "../utils/requester";

export default function Dash() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {

    Requester.get<any>("/courses").then(res => {
      return res.data;
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
      <Navbar/>
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
                activities={course.activities}
              />
            );
            
          })
        }
      </main>
    </div>
  );
}
