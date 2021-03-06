import React from 'react';
import './Courses.css';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCourse from './SingleCourse';

const Courses = () => {
    const [totalCourse, setTotalCourse] = useState([])
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setTotalCourse(data))
    }, [])





    return (
        <div className='container'>
            <div className='courses'>
                <h1><i class="fas fa-book-reader"></i> Academia Courses:</h1>
            </div>
            <div className="mt-5 row row-cols-3 row-cols-md-3 g-4">
                {
                    totalCourse.map(everyCourse => <SingleCourse
                        key={everyCourse.title}
                        everyCourse={everyCourse}



                    ></SingleCourse>)
                }
            </div>


        </div>
    );
};

export default Courses;