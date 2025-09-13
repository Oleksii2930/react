import {coursesArray} from "../../data/data.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CourseList = () => {
    return (
        <div>
            {
                coursesArray.map((value, index ) => (<CourseComponent item={value} key={index} />
                ))
            }
        </div>
    );
};