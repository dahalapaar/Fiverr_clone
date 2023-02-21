import React from 'react'
import './featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className="search">
                    <div className="searchInputs">
                        <img src='./images/search.png' alt=''/>
                        <input type="text" placeholder='Try Building Mobile App'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>Mobile Application</button>
                    <button>AI Search</button>
                </div>
            </div>
            <div className="right">
                <img src='./images/ad-removebg-preview.png' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Featured