import React, { useEffect, useState } from 'react';
import './Home.css'
import BackgroundImage from '../../data/EducationLaptop01.jpg'
import Course from './Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div>
            <section>
                <div>
                    <div
                        className="bg_image"
                        style={{
                            backgroundImage: 'url(' + BackgroundImage + ')',
                            backgroundSize: "cover",
                            height: "90vh",
                            color: "#f5f5f5"
                        }}
                    >
                    </div>

                    <div className='text-center title'>
                        <h1>The New Way To Learn Properly With Us</h1>
                    </div>
                    <div className='text-center my-5 '>
                        <h6 className='online'>Popular Online Course</h6>
                        <h1>Let's Browse All Category</h1>
                    </div>

                </div>
            </section>
            <section className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className="row row-cols-2 row-cols-md-2 g-4">
                            {
                                courses.map(course => <Course
                                    key={course.id}
                                    course={course}></Course>)
                            }
                        </div>

                    </div>
                    <div className='col-4'>
                        <div className='list'>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><h4>Fascilities we provide :</h4></li>
                                <li class="list-group-item"><h6>-Live Session Everyday</h6></li>
                                <li class="list-group-item"><h6>-5 classes in a week</h6></li>
                                <li class="list-group-item"><h6>-Opportunity to contact with every teacher</h6> </li>
                                <li class="list-group-item"><h6>-Provide Course materials</h6></li>

                                <li class="list-group-item"><h6>-Extra Class for lacking students</h6></li>
                                <li class="list-group-item"><h6>-Individual and group counseling</h6></li>
                                
                            </ul>
                        </div>
                        <button className='course-btn'>See All Courses</button>
                    </div>
                </div>

            </section>
        </div>


    );
};

export default Home;