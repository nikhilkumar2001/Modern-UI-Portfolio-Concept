import React, { useEffect } from 'react'
import PortraitImg from './img/Technology.png'
import ReactLogo from './img/react_logo.png'
import GraduationImg from './img/profile.png'
import SpotifyEmbed from './Spotify'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Home = () => {

  useEffect(()=>{
      Aos.init({duration:"2000"})
  },[])
  return (
    <div className='home' aos-data="fade-up">
      <div className="homeDetail">
      
        <div className="details">
          <div className="nameDetails">
   
            <h3>
             'The Tigthrope' by Zayn🎻 </h3>
          </div>
          <div className="photoDetails">
            <img src={PortraitImg} alt="" />
          </div>
        </div>
        <div className="paraDetail">
        <div className="paraInner">
          <h5>Biography 🌹</h5>
          <p>Zain Javadd Malik (/ˈmælɪk/ MAL-ik; born 12 January 1993), known professionally as Zayn Malik or simply Zayn, is an English singer. He auditioned as a solo contestant for the British music competition television series The X Factor in 2010. After being eliminated, he was brought back to the competition to form the five-piece boy band One Direction, which went on to become one of the best-selling boy bands of all time. He left the group in March 2015 and signed a solo recording contract with RCA Records.</p>
        </div>
          </div>
        </div>
          <aside className="asideDetails">
            <div className="educationDetails">
            <h4>Playlist 🎼</h4>
            </div>
            <img src={GraduationImg} className='graduationImg' alt="" />
            <div className="schoolDetails">
           <SpotifyEmbed />
            </div>

          </aside>
    </div>

  )
}

export default Home