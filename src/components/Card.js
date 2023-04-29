import React from "react";
import { FcLike, FcLikePlaceholder  } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, likedCourse, setLikedCourses }) {
  // const likedCourse = course.likedCourse;
  // const setLikedCourses = course.setLikedCourses;
  const descriptionData = `${course.description.substring(0, 100)}....`
  function clickHandler(){
    if(likedCourse.includes(course.id)){
      setLikedCourses((prev)=>prev.filter((id) => id !== course.id))
      toast.warning("Liked Removed");
    }else{
      if(likedCourse.length === 0){
        setLikedCourses([course.id])
      }else{
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] rounded-md bg-bgDark overflow-hidden">
      <div className="relative">
        <img src={course.image.url}></img>
        <div className="w-[30px] h-[30px] absolute top-0 right-0">
          <button onClick={clickHandler}>
            {
              likedCourse.includes(course.id) ? (
                <FcLike fontSize="1.75rem" />
                ) : (
                <FcLikePlaceholder fontSize="1.75rem" />
              )
            }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-bold text-lg">{course.title}</p>
        <p className="text-white mt-2">{descriptionData}</p>
      </div>
    </div>
  );
}

export default Card;
