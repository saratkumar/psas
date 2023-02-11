import * as React from 'react';
import { IconButton, ImageListItemBar, Grid, Box, Typography, Avatar, Container } from '@mui/material';
import './Review.css';

import HorizontalTeamCard from '../HorizontalTeamCard/index';

import reviewer1 from '../../images/reviews/reviewer1.jpg';
import reviewer2 from '../../images/reviews/reviewer2.jpg';
// import reviewer3 from '../../images/reviews/reviewer3.jpg';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { REVIEWER_LIST } from '../../constants/reviewer';
export default function Review() {

    const [index, setIndex] = React.useState(0);

    return (

        <div className='review'>
            <Box style={{ margin: "0px 15px" }}>
                <Grid item xs={12} md={12} mx={{ xs: "auto", sm: 6, md: 1 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
                        <Typography variant="h4" m={"auto"} className="heading-reverse">Hear! What others say</Typography>
                    </Box>
                    <hr width="10%" style={{marginBottom: "5rem"}}></hr>
                </Grid>
            </Box>
            <Box mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={1} className="m-auto">{index !=0 && <a className="prev" onClick={() => { setIndex(index - 1) }}>&#10094;</a>}</Grid>
                    <Grid item xs={12} lg={6} >
                        <Box mb={1}>
                            {REVIEWER_LIST.map((el, i) => {
                                return (
                                    <Grid container className={index == i ? 'photo-container mySlides fade active' : 'photo-container mySlides fade'}>
                                        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
                                            <Box width="100%" pt={2} pb={1} px={2}>
                                                <Box component="img" src={el.image} alt={"TEST"} width="100%" borderRadius="md" shadow="lg" className='img'/>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                                            <Box pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                                                <Typography variant="h6" color={"Blue"} mb={1}> {el.title} </Typography>
                                                <Typography variant="body2" color="text"> {el.description}</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={1} className="m-auto">{index != REVIEWER_LIST.length -1 && <a className="next" onClick={() => { setIndex(index + 1) }}>&#10095;</a>}</Grid>
                </Grid>
            </Box>
        </div>
    )
}