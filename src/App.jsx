import React, { useEffect, useState } from 'react';

import About from './Components/About/About';
import Background from './Components/Background/Background';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Thoughts from './Components/Thought/Thought';
import Programs from './Components/Programs/Programs';
import BlogPage from './Components/BlogPage/Blogpage';


const App = () => {
  let heroData=[
    {text1:"Compassion in Action",text2:"Caring for mute animals and creating a better world for them"},
    {text1:"Every Life Matters",text2:"Join us in providing a safe haven for animals in need"},
    {text1:"Together for Animals",text2:"Support us to rescue, rehabilitate, and nurture vulnerable lives."}, 
  ]
  const [heroCount,setHeroCount]=useState(0);
  useEffect(()=>{
    setInterval(()=>{
        setHeroCount((count)=>{ return count===2?0:count+1 })   
    },3000);
  },[]);
  return (
    <div className="app">
      {/* <Navbar/>
      <Hero heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount}/>
      <About/>
      <Programs/>
      <Thoughts/>
      <Contact/>
      <Footer/> */}
      <BlogPage/>

      
    </div>
  );
};

export default App;
