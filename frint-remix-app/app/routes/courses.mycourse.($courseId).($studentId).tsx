import { useParams } from "@remix-run/react";
import { sculpturelist } from "./data";

export default function GetCourse() {
    const myParams = useParams();

    console.log("Course ID: ", myParams.courseId);
    console.log("Student ID: ", myParams.studentId);

    const course = sculpturelist.filter(
        item => item.id === Number(myParams.courseId)
    );

    if (course.length !== 0)
        console.log(course);
    else
        console.log('Wrong Course, please try again!');

    return (
        <div className="bg-red-100 p-4">
            <h1 className="text-purple-800 ">ศิลปะที่ดัง ๆ</h1>
            <hr />
            {course.length !== 0 ? (
                <table className="border-collapse border border-purple-300 w-full mt-4">
                    <thead>
                        <tr>
                            <th className="border border-purple-300 p-2 text-purple-600">Field</th>
                            <th className="border border-purple-300 p-2 text-purple-600">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-purple-300 p-2">Name</td>
                            <td className="border border-purple-300 p-2">{course[0].name}</td>
                        </tr>
                        <tr>
                            <td className="border border-purple-300 p-2">Artist</td>
                            <td className="border border-purple-300 p-2">{course[0].artist}</td>
                        </tr>
                        <tr>
                            <td className="border border-purple-300 p-2">Description</td>
                            <td className="border border-purple-300 p-2">{course[0].description}</td>
                        </tr>
                        <tr>
                            <td className="border border-purple-300 p-2">Image</td>
                            <td className="border border-purple-300 p-2">
                                <img className="w-full" src={course[0].url} alt={course[0].alt} />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-purple-300 p-2">Alt</td>
                            <td className="border border-purple-300 p-2">{course[0].alt}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p className="text-red-600">Wrong Course, please try again!</p>
            )}
        </div>
    );
}