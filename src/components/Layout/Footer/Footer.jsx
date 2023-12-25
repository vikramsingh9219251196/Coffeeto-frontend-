import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import { AiFillFacebook } from 'react-icons/ai';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const location = useLocation(); // Get the current location

  // Function to check if the user is on the homepage
  const isHomePage = location.pathname === '/';

  return (
    <>
      <section className='footer'>
        <div className='share'>
          <a href='https://www.facebook.com/messages/t'>
            <AiFillFacebook size={25} />
          </a>
          <a href='https://www.instagram.com/direct/inbox/'>
            <BiLogoInstagramAlt size={25} />
          </a>
          <a href='https://twitter.com/messages'>
            <FaTwitterSquare size={25} />
          </a>
          <a href='https://www.linkedin.com/in/vikram-singh-508b08250/'>
            <FaLinkedin size={25} />
          </a>
        </div>
        <div className='links'>
          {isHomePage ? (
            <>
              <a href="#home">home</a>
              <a href="/about">about</a>
              <a href="#products">products</a>
              <a href="#review">review</a>
              <a href="#contact">contact</a>
              <a href="/blog">blogs</a>
            </>
          ) : (
            <>
              <a href="/">home</a>
              <a href="/about">about</a>
              <a href="/blog">blogs</a>
            </>
          )}
          
          
        </div>
        <div className='created' style={{fontWeight:"1000"}}>
          Created by <span>Vikram singh | all right reserved</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
