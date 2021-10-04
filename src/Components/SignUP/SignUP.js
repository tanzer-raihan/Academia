import React from 'react';
import './SignUp.css'
import p1 from '../../data/p1.jpg'
import p2 from '../../data/p2.jpg'
import p3 from '../../data/p3.jpg'
import p4 from '../../data/p4.jpg'
const SignUP = () => {
    return (
        <div className='container'>
            <h1 className='motivs-container recomend'>Recomended By:</h1>
            
            <div className="row row-cols-2 row-cols-md-2 g-4">

                <div class="card mb-3 recomendation ">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={p1} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Sara Willium</h5>

                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, perferendis molestias? Et assumenda commodi sint recusandae exercitationem accusantium facere quisquam?</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 recomendation">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={p2} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Brandy Jay</h5>
                                <p class="card-text">Your Academia learning experience is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key principles</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 recomendation ">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={p3} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Chandler Cooper</h5>
                                <p class="card-text">Learning on Academia transforms how you think and what you can do, and translates directly into the real world—immediately apply your new capabilities in the context of your job.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 recomendation">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={p4} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Monika Gets</h5>
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