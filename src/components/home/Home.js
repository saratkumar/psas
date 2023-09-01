import * as React from 'react';
import Button from '@mui/material/Button';
import './Home.css';
import {
    Link,
} from "react-router-dom";
import Service from '../service/Service';
import Contact from '../contact/Contact';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PhotoGallery from '../gallery/PhotoGallery';
import Review from '../reviews/Review';
import bgVideo from '../../images/gallery/bg.mp4';
import Schedule from '../schedule/Schedule';
export function Home() {

    return (
        <div style={{ width: "100%", height: "100%", marginTop: "-68px" }}>
            <Box style={{backgroundColor:"white"}}>
                <Box className='banner'>
                    <h3>Boxing, Counselling, and more..</h3>
                    <h2 style={{color:"white"}}>The place where Champion Mindsets are made</h2>
                </Box>
                
                <Service />

                <Schedule />
                
                
            </Box>
        </div>

    )
}