import React, { useState } from "react"
import Card from "./Card";

const Cards=(props)=>{

    let courses=props.courses;
    let category=props.category;

    const [likedCourses,setLikedCourses]=useState([]);

    let allCourses=[];

    //returns you a list of all courses received from the api response
    //didn't worked because no loader was added
    // const getCourses=()=>{
    //     Object.values(courses).forEach((courseCategory)=>{
    //         courseCategory.forEach((course)=>{
    //             allCourses.push(course);
    //         })
    //     })
    //     return allCourses;
        
    // }

    function getCourses(){
        if(category==="All"){
            let allCourses=[];
        Object.values(courses).forEach(array=>{
            array.forEach((courseData)=>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else{
            //main sirf specific category ka data array pass kruga
            return courses[category];
        }
    }

    
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
            getCourses().map((course)=>{
                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            })
        
            }
        </div>
    )
}

export default Cards