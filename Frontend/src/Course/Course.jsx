import React from 'react';
import Navbar from '../components/Navbar';
import Coursepage from '../components/Coursepage';
import Footer from '../components/Footer';

function Course() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>    
        <Coursepage/>
    </div>
    <Footer/>
    </>
    )
}

export default Course
