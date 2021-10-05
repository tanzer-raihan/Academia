import React from 'react';
import './SignUp.css'
import p1 from '../../data/p1.jpg'
import p2 from '../../data/p2.jpg'
import p3 from '../../data/p3.jpg'
import p4 from '../../data/p4.jpg'
const SignUP = () => {
    return (
        <div className='container '>
            <h1 className='motivs-container recomend mb-5 p-1'>Recomended By:</h1>

            <div className="row row-cols-2 row-cols-md-2 g-4">

                <div class="card mb-3 recomendation ">
                    <div class="row g-0">
                    <div class=" d-flex flex-row align-items-center mt-3 ms-3">
                            <img c src={p1} class="img-fluid photo " alt="..." />
                            <div className='ms-2'>
                                <h5 >Mitchel Rachel</h5>
                                <h6 className='text-secondary'>Linguist</h6>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                               

                                <p class="card-text">Your Academia learning experience is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 recomendation">
                    <div class="row g-0">
                        <div class=" d-flex flex-row align-items-center mt-3 ms-3">
                            <img c src={p2} class="img-fluid photo " alt="..." />
                            <div className='ms-2'>
                                <h5 >Ross Willium</h5>
                                <h6 className='text-secondary'>Executive Officer</h6>
                            </div>
                        </div>
                        <div >
                            <div class="card-body">

                                <p class="card-text">Your Academia learning experience is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key principles.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 recomendation ">
                    <div class="row g-0">
                        <div class=" d-flex flex-row align-items-center mt-3 ms-3">
                            <img c src={p3} class="img-fluid photo " alt="..." />
                            <div className='ms-2'>
                                <h5 >Chandler Bing</h5>
                                <h6 className='text-secondary'>Marketing Professionals</h6>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">

                                <p class="card-text">Learning on Academia transforms how you think and what you can do, and translates directly into the real world—immediately apply your new capabilities in the context of your job.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 recomendation">
                    <div class="row g-0">
                        <div class=" d-flex flex-row align-items-center mt-3 ms-3">
                            <img c src={p4} class="img-fluid photo " alt="..." />
                            <div className='ms-2'>
                                <h5 >Monica Gets</h5>
                                <h6 className='text-secondary'>University Teacher</h6>
                            </div>
                        </div>
                        <div >
                            <div class="card-body">


                                <p class="card-text">Demonstrating your knowledge is a critical part of learning. Academia courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SignUP;