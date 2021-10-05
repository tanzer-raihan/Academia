import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container d-flex justify-content-between align-items-center'>
            <div className='page-name'>

                <h5><i class="fas fa-book-reader"></i> Academia</h5>
            </div>
            <div>
                <div className='d-flex web-section' >
                    <NavLink   activeClassName='activeClass' className='h5 nav' to='/home'>Home</NavLink>
                    <NavLink  activeClassName='activeClass' className='h5 nav' to='/courses'>Courses</NavLink>
                    <NavLink activeClassName='activeClass' className='h5 nav' to='/recomendation'>Recomendation</NavLink>
                    <NavLink  activeClassName='activeClass' className='h5 nav' to='/about'>About</NavLink>
                </div>
            </div>
            <div>
                <div class="input-group  w-15 ">
                    <input type="text" class="form-control" placeholder="Search Course" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-success " type="button" id="button-addon2">Find</button>
                </div>

            </div>
        </div>
    );
};

export default Header;