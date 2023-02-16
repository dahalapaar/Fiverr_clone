import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import Trustedby from '../../components/trustedBy/Trustedby'
import CatCard from '../../components/catCard/CatCard'
import {cards} from '../../data';
import './home.scss'

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
    </div>
  )
}

export default Home