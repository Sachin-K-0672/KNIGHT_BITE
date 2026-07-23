import React from 'react'
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="section1">
          <div className="sub-sec1">
            <h2>
              Knight Bite is a <br />cloud kitchen which delivers food to the nocturnals giving <br />equal emphasis on <br />food, technology and logistics.
            </h2>
          </div>
        </div>


      <div className="section2">
            <div className='box'>
              <img src="https://www.knight-bite.com/res/about/food-strip.webp" alt="" className='bb'/>
            </div>
            <div className="box">
              Knight Bite started with the idea to serve all
              the hungry nocturnals who find it really difficult to order late night muchies. KB brought together late night eaters and helped them order delicious meals at their convenience via Knight Bite App and call.
            </div>
            <div className="box">
              <p>Knight Bite is one such concept which was highly successful in adapting to the emerging market.</p>
              <br /><br /><br />
              <p>Biters (customers), accepted and loved the KB app that made the ordering process much more easier. In two weeks of the release of the app, it was trending on top food apps and was downloaded by more than 5000 users across Mangalore and Manipal.</p>
            </div>
            <div className="box">
              <img src="https://www.knight-bite.com/res/about/app-menu.webp" alt="" />
            </div>
            <div className="box">
              <img src="	https://www.knight-bite.com/res/about/burger.webp" alt="" />
            </div>
            <div className="box">
              Going forward, our aim is to help and bring smiles in many more faces and cover many more cities across India and around the world.
            </div>
            <div className="box">
              <h2>Location</h2>
              <br />
              <div className="location-row">
                <h3>Bengaluru</h3>
                <p><span>Hours:</span> 7:00 pm - 4:00 am</p>
              </div>

              <div className="location-row">
                <h3>Mangalore</h3>
                <p><span>Hours:</span> 7:00 pm - 4:00 am</p>
              </div>

              <div className="location-row">
                <h3>Manipal</h3>
                <p><span>Hours:</span> 7:00 pm - 4:00 am</p>
              </div>
            </div>
  
            <div className="box">
              <h2>Follow us</h2>
              <div className="netapp">
                <div><NavLink to= ""><img src="https://www.knight-bite.com/res/instagram.svg" alt="" /></NavLink></div>
                <div><NavLink to= ""><img src="https://www.knight-bite.com/res/facebook.svg" alt="" /></NavLink></div>
                <div><NavLink to= ""><img src="https://www.knight-bite.com/res/twitter.svg" alt="" /></NavLink></div>
                <div><NavLink to= ""><img src="https://www.knight-bite.com/res/linkedin.svg" alt="" /></NavLink></div>
                <div><NavLink to= ""><img src="https://www.knight-bite.com/res/youtube.svg" alt="" /></NavLink></div>
              </div>

            </div>
          </div>
      </div>
    </>
  )
}

export default About
