import React from 'react';
import './Course.css'

const Course = (props) => {
    const { img, category } = props.course;
    return (

        <div class="col ">
            <div class="card h-100 single-card">
                <img className='images' src={img} />
                <div class="card-body">
                    <h5 class="card-title">{category}</h5>
                    <h6 class="card-text">Bunch of perfect course for your   {category}</h6>
                    <button className='details-btn '>See Details</button>
                </div>
            </div>

        </div>

    );
};

export default Course;