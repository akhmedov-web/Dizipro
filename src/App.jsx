import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Main from "./components/Main"
import About from './components/About'
import Statistic from './components/Statistic'
import Works from './components/Works';
import Course from './components/Course';
import Support from './components/Support';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    <Main/>
    <About/>
    <Statistic/>
    <Works/>
    <Course/>
    <Support/>
    <Blogs/>
    <Footer/>
    </>
  )
}
