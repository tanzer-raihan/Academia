import React from 'react';
import './About.css'
import img1 from '../../data/u2.jpg';
import img2 from '../../data/u6.jpg';
import img3 from '../../data/u4.jpg';
import img4 from '../../data/u5.png';
import img5 from '../../data/u8.jpeg';


const About = () => {
    return (
        <div className='container'>
            <div>
                <div>
                    <div className='courses'>
                        <h2><i class="fas fa-book-reader"></i> Our Character Members:</h2>
                    </div>
                    <div>
                        <section class="row row-cols-1 row-cols-md-5 g-4">
                            <div class="col">
                                <div class="card h ">
                                    <img src={img1} class="card-img-top uni-img" alt="..."/>
                                    <div class ="card-body body">
                                        <h4>University Of Texas</h4>
                                        <h6 className='text-secondary'>contributor</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h">
                                    <img src={img2} class="card-img-top uni-img " alt="..."/>
                                    <div class ="card-body body">
                                    <h4>Boston University</h4>
                                    <h6 className='text-secondary'>contributor</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h">
                                    <img src={img3} class="card-img-top uni-img" alt="..."/>
                                    <div class ="card-body body">
                                    <h4>Brown University</h4>
                                    <h6 className='text-secondary'>contributor</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h">
                                    <img src={img4} class="card-img-top uni-img" alt="..."/>
                                    <div class ="card-body body">
                                  <h4>University of Berkly</h4>
                                  <h6 className='text-secondary'>contributor</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h">
                                    <img src={img5} class="card-img-top uni-img" alt="..."/>
                                    <div class ="card-body body">
                                  <h4>Princeton University</h4>
                                  <h6 className='text-secondary'>contributor</h6>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
                <div>

                </div>

            </div>
            <div className='motivs-container '>
                <div className='courses'>
                    <h1><i class="fas fa-book-reader"></i> Academia Motives:</h1>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4 our-motivs">
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
                        <h2>4032+ Taken</h2>
                    </div>
                    <div class="follower">
                        <h2>6200+ Students</h2>
                    </div>
                    <div class="follower">
                        <h2><i class="fas fa-star"></i>4.6</h2>
                    </div>
                </section>
            </div>
        </div >
    );
};

export default About;