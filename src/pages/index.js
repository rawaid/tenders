import React from 'react'
import Link from 'gatsby-link'
import facebook from '../facebook.svg';
import instagram from '../instagram.svg';
import soundcloud from '../soundcloud.svg';
import twitter from '../twitter.svg';
import styles from './index.module.css';


const IndexPage = () => (
  <div className={styles.wrap}>
    <a href="https://facebook.com/thetendersband" alt="Facebook"> <img src={facebook} /> </a>
    <a href="https://www.instagram.com/thetenders" alt="Instagram"><img src={instagram} /></a>
    <a href="https://twitter.com/thetendersband   " alt="Twitter"><img src={twitter} /></a>
    <a href="https://soundcloud.com/thetendersband" alt="Soundcloud"><img src={soundcloud} /></a>
  </div>
  
)

export default IndexPage
