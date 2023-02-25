import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import Trustedby from '../../components/trustedBy/Trustedby'
import CatCard from '../../components/catCard/CatCard'
import {cards, projects} from '../../data';
import './home.scss'
import ProjectsCard from '../../components/projectsCard/ProjectsCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <Trustedby/>
      <Slide slidesToShow={5} arrowsScroll={4}>
        {cards.map(card => (
            <CatCard item={card} key={card.id}/>
            ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src='./images/check.png' alt=''/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src='./images/check.png' alt=''/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src='./images/check.png' alt=''/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src='./images/check.png' alt=''/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./images/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Apaar Business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to business.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancers with proven business experience 
            </div>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancers with proven business experience 
            </div>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancers with proven business experience 
            </div>
            <button>Explore Apaar business</button>
          </div>
          <div className="item">
          <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(card => (
            <ProjectsCard item={card} key={card.id}/>
            ))}
      </Slide>
    </div>
  )
}

export default Home