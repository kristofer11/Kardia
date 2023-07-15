import bridge from '../assets/posters/peter-gargiulo-cGNCepznaV8-unsplash.jpg';
import {
    Card,
    CardImg,
    CardImgOverlay
} from 'reactstrap';
import auction from '../assets/auction/building-bridges-logo-1024x1024.png';
import whitfields from '../assets/auction/Whitfields-Compact-Logo-Final-2-x-2-4-22.jpg';
import Hero from '../components/Hero';
import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed } from 'react-twitter-embed';



const Auction = () => {
    return (
        <div>
            <Hero
                img={bridge}
                alt='Blackboard with smudges of chalk.'
                strength={333}
                title={
                    <>
                        <h1 className='homeOverlayText'> Kardia's Blog</h1>
                    </>
                }
            />
            <div className='page-content'>
                <h3 className='text-center m-2 blog-subtitle'>Welcome to Kardia's blog where you will find articles written by various members of our community!</h3>
                <ul className='blog-link-list'>
                    <li className='blog-link'>📄<a href='/july2023'>Unveiling the Complex Realities of AI Integration in Education</a></li>
                    <li className='blog-link'>📄<a href='/july2022'>Can Martial Arts Integrate Well into a Classical Education?</a></li>
                    <li className='blog-link'>📄<a href='/june2022'>Five Best Practices for Retaining School Learning Over a Long Break (aka, Summer!)</a></li>
                    <li className='blog-link'>📄<a href='/june2022siblings'>25 Ways To Keep Younger Siblings Busy During Homeschooling</a></li>
                    <li className='blog-link'>📄<a href='/july2021'>Why a Well-Rounded Education Includes Music</a>
                    </li>
                    <li className='blog-link'>📄<a href='/june2021'>What Does “Parent Partnership” Mean?</a></li>
                    <li className='blog-link'>📄<a href='/may2021'>What Does it Mean to be a “Classical School?”</a></li>
                </ul>
            </div>
            <div className='twitter-div'>

{/* TWITTER SEEMS TO HAVE DISABLED ABILITY TO EMBED TIMELINE */}

                {/* <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="KardiaClassical"
                    options={{
                        height: 400,
                        width: '100%',
                    }}
                /> */}
            </div>
        </div>
    )
}

export default Auction;