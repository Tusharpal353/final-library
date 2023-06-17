import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
              <div className='anim'>
                <h2 style={{fontFamily: 'Inter'}} className='header-title text-capitalize'>Enter the name of book</h2><br />
                </div>
                <p className='header-text fs-18 fw-3'></p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header