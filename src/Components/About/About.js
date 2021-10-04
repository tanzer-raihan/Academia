import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className='motivs-container '>
                <h1>Our Motivs:</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100 motivs">

                            <div class="card-body">
                                <h5 class="card-title">To Provide Best Course</h5>
                                <p class="card-text">In this module we'll be exploring conserved regions within protein families. Such regions can help us understand the biology of a sequence, in that they are likely important for biological function.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 motivs">

                            <div class="card-body">
                                <h5 class="card-title">To Make Your Journey Easier</h5>
                                <p class="card-text">Bioinformatic Methods II, will cover motif searching, protein-protein interactions, structural bioinformatics, gene expression data analysis, and cis-element predictions.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 motivs">

                            <div class="card-body">
                                <h5 class="card-title">Help You To Get Your dream</h5>
                                <p class="card-text"> students considering molecular medicine. These courses are based on one taught at the University of Toronto to upper-level undergraduates who have some understanding of basic molecular biology.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div >
            </div >
            <div>   



            </div>
            <div className="our-follower">
                <section class="fan">
                    <div class="follower">
                        <h2>4032</h2><small>Course Taken</small>
                    </div>
                    <div class="follower">
                        <h2>6200+</h2><small>Total Student</small>
                    </div>
                    <div class="follower">
                        <h2>4.6</h2><small>Rating</small>
                    </div>
                </section>
            </div>
        </div >
    );
};

export default About;