import React from 'react';
import './SingleCourse.css'

const SingleCourse = (props) => {
    const { title, image, totalContent, test, duration, rating, price } = props.everyCourse;
    return (
        <div>
             <div class="col ">
            <div class="card h-100 single-card ">
                <img className='images ' src={image}/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <h6>Total Content: {totalContent}</h6>
                    <h6>Duration: {duration}</h6>
                    <h6>Test: {test} exams</h6>
                    <h6>Price: {price}</h6>
                </div>
            </div>

        </div>
        </div>
    );
};

export default SingleCourse;