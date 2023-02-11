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
export function Home() {

    return (
        <div style={{ width: "100%", height: "100%", marginTop: "-68px" }}>
            <Box style={{backgroundColor:"white"}}>
                <Box className='banner'/>
                <Card
                    sx={{
                        p: 2,
                        mx: { xs: 2, lg: 3 },
                        mt: -8,
                        mb: 4,
                        backgroundColor: "#fff",
                        backdropFilter: "saturate(200%) blur(30px)",
                        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                    }}
                    className="theme-bg"
                >
                    <Service />

                    <Contact />
                     {/* <Profile />
                    <Posts />  */}

                    <PhotoGallery />

                    <Review />
                    
                </Card>
                
                
                {/* <Contact />
                <Footer /> */}
            </Box>
        </div>

    )
}