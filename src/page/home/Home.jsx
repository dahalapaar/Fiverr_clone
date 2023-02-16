import React from 'react'
import Featured from '../../components/featured/Featured'
import Trustedby from '../../components/trustedBy/Trustedby'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <Trustedby/>
    </div>
  )
}

export default Home