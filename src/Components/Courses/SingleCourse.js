import React from 'react';
import './SingleCourse.css'

const SingleCourse = (props) => {
    const { title, image, totalContent, test, Duration, rating, price } = props.everyCourse;
    return (
        <div>
             <div class="col ">
            <div class="card h-100 single-card ">
                <img className='images ' src={image}/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <h6>Total Contents: {totalContent}</h6>
                    <h6>Duration: {Duration} Months</h6>
                    <h6>Test: {test} Exams</h6>
                    <h6>Price: ${price}</h6>
                    <button className="Book-now">Enroll Now</button>
                </div>
            </div>

        </div>
        </div>
    );
};

export default SingleCourse;