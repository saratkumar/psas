import * as React from 'react';
import { Fragment } from 'react';

import logo from "../../images/banner.webp";
import "./about.css";
import newHome from "../../images/gallery/newHome.webp";
import mission from "../../images/gallery/mission.webp";
const About = () => {

    return (

        <Fragment>
            <div className='about-img-container'>
                <div className="about-img">

                </div>


            </div>


            <div className='w-100 about'>
                <h4> Andrei Dueck </h4>
                <sub> founder of Pegasus</sub>
                <div className='content'>
                    {/* <h4>Experienced Coaches with Counselling Background</h4> */}
                    <div className='fs-20'>
                        <p>We aspire to develop opportunities in sport and psychology by providing a professional environment where all can reach their full potential!</p>
                        <p>Our classes are conducted by dedicated and experienced coaches. Using proven strategies for mind and body, they make sure that every student finds a path to success at their own pace while building mental strength.</p>
                        <p><b>In addition, stress, anxiety, depression, anger management, emotional therapy, trauma treatment and counselling is available after the time of crisis. Some times, it may just be that season for you to self-develop & grow - Life Coaching is what you need right now!</b></p>
                    </div>

                    <div className='d-flex '>
                        <div className='box'>
                            <img src={newHome} />
                            <h4>A New Home - Mission in Progress</h4>
                            <p>
                                We embrace a learning environment that will prepare you for the path ahead. Our classes incorporate traditional learning styles as well as hands-on experiences.
                            </p>
                        </div>
                        <div className='box'>
                            <img src={mission} />
                            <h4>Our Mission</h4>
                            <ul>
                                <li>To support our inclusive community, we provide a personal approach, tailoring teaching methods to each person's needs </li>
                                <li> We provide the quality of services and pathways enabling juniors to reach elite performance levels in their chosen sport </li>
                                <li> Create a professional environment for physical and mental optimisation for participants of any age/standard/aspiration </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </Fragment>
    )

};

export default About;