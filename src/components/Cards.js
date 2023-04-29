import React, { useState } from "react";
import Card from "./Card";

function Cards({ courses, category }) {
  const allCourses = [];
  const [likedCourse, setLikedCourses] = useState([]);
  const getCourses = () => {
    if(category === "All"){
      Object.values(courses).forEach((array) => {
        array.forEach((course) => {
          allCourses.push(course);
        });
      }); 
    }else{
      return courses[category];
    }
    return allCourses;
  };
  return (
    <div className="flex flex-wrap mb-4 justify-center gap-4">
        {getCourses().map((course) => {
          return <Card course={course} key={course.id} likedCourse={likedCourse} setLikedCourses={setLikedCourses}/>
        })}
    </div>
  );
}

export default Cards;
