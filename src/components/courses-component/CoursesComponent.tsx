
import './coursesComponent.css'
import {coursesAndDurationArray} from "../../assets/arrays.ts";
import type {CourseModel} from "../../models/CourseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {

    return(
        <ul>{
            coursesAndDurationArray.map((course: CourseModel, index: number) => {
                return <CourseComponent key={index} course={course} />;
            })
        }
        </ul>
    );
};