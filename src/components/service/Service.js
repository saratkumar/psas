

import * as React from 'react';

import './Service.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Avatar, Typography, Button, Icon, Paper } from '@mui/material';

import service1 from './../../images/services/corporate.jpg';
import service2 from './../../images/services/boxing.jpg';
import service3 from './../../images/services/running.jpg';
import more from './../../images/services/more.jpg';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { makeStyles } from '@mui/styles';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: '15px',
      fontWeight: 'normal',
    },
  }));
export default function Service() {
    const [spacing, setSpacing] = React.useState(2);
    const [isDetailPage, setIsDetailPage] = React.useState(false);
    const [expanded, setExpanded] = React.useState({ 0: false, 1: false, 2: false });
    const classes = useStyles();
    const handleExpandClick = (index) => {
        expanded[index] = !expanded[index];
        setExpanded({ ...expanded });
    };
    React.useEffect(() => {
        if (window.location.href.indexOf('services') > -1) {
            setIsDetailPage(true);
        }
    })

    return (
        <Box component="section" py={{ xs: 6, sm: 12 }} p={{ xs: 0, md: 0 }}>
            {/* <Box p={{ xs: 0, md: 0 }} textAlign="center">
                <Avatar src={logo} alt="PSAS" size="xxl" shadow="xl" style={{ margin: "auto" }} />
            </Box> */}
            {!isDetailPage &&
                <Grid container item xs={12} justifyContent="center" mx="auto">

                    <Grid justifyContent="center" py={6} width="100%">
                        <Grid item xs={12} md={12} mx={{ xs: "auto", sm: 6, md: 1 }}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
                                <Typography variant="h4" m={"auto"} className="heading">Our Services</Typography>
                            </Box>

                        </Grid>
                        {/* <hr width="10%" style={{marginBottom: "4rem"}}></hr> */}
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia component="img" height="194" image={service1} alt="Paella dish" />

                                        <CardActions disableSpacing>
                                            <Typography variant="body2" color="text.secondary" className='package-name'> Corporate Packages  </Typography>
                                            <ExpandMore expand={expanded[0]} onClick={() => handleExpandClick(0)} aria-expanded={expanded[0]} aria-label="show more">
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
                                            <CardContent style={{ textAlign: "left" }}>
                                                {/* <Typography paragraph>Information:</Typography> */}
                                                <Typography paragraph>
                                                    1. Boxing and cardio exercises.
                                                </Typography>
                                                <Typography paragraph>
                                                    2. Running workshop with progression plan from Beginner to Advanced
                                                </Typography>
                                                <Typography paragraph>
                                                    3. Mental Health Awareness Course
                                                </Typography>
                                                <Typography paragraph>
                                                    4. Counselling and Hypnotherapy (individual & group sessions)
                                                </Typography>
                                                <Typography paragraph>
                                                    5. Performance Coaching
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia component="img" height="194" image={service2} alt="Paella dish" />

                                        <CardActions disableSpacing>
                                            <Typography variant="body2" color="text.secondary" className='package-name'> Boxing and cardio </Typography>
                                            <ExpandMore expand={expanded['1']} onClick={() => handleExpandClick(1)} aria-expanded={expanded['1']} aria-label="show more">
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded['1']} timeout="auto" unmountOnExit>
                                            <CardContent style={{ textAlign: "left" }}>
                                                {/* <Typography paragraph>Information:</Typography> */}
                                                <Typography paragraph>
                                                    1.Boxing and cardio exercises.
                                                </Typography>
                                                <Typography paragraph>
                                                    2.Running workshop with progression plan from Beginner to Advanced
                                                </Typography>
                                                <Typography paragraph>
                                                    3.Mental Health Awareness Course
                                                </Typography>
                                                <Typography paragraph>
                                                    4.Counselling and Hypnotherapy (individual & group sessions)
                                                </Typography>
                                                <Typography paragraph>
                                                    5.Performance Coaching
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia component="img" height="194" image={service3} alt="Paella dish" />

                                        <CardActions disableSpacing>
                                            <Typography variant="body2" color="text.secondary" className='package-name'> Running workshop</Typography>
                                            <ExpandMore expand={expanded['2']} onClick={() => handleExpandClick(2)} aria-expanded={expanded['2']} aria-label="show more">
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded['2']} timeout="auto" unmountOnExit>
                                            <CardContent style={{ textAlign: "left" }}>
                                                {/* <Typography paragraph>Information:</Typography> */}
                                                <Typography paragraph>
                                                    1.Boxing and cardio exercises.
                                                </Typography>
                                                <Typography paragraph>
                                                    2.Running workshop with progression plan from Beginner to Advanced
                                                </Typography>
                                                <Typography paragraph>
                                                    3.Mental Health Awareness Course
                                                </Typography>
                                                <Typography paragraph>
                                                    4.Counselling and Hypnotherapy (individual & group sessions)
                                                </Typography>
                                                <Typography paragraph>
                                                    5.Performance Coaching
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <Card sx={{ maxWidth: 345 }}>                                    <CardMedia component="img" height="194" image={more} alt="Add More" />

                                        <CardActions disableSpacing>
                                            <Typography variant="body2" color="text.secondary" className='package-name'> View More</Typography>
                                            <ExpandMore expand={expanded} aria-expanded={expanded} aria-label="show more">
                                                <Link to="/services"><AddCircleOutlineIcon /></Link>
                                            </ExpandMore>
                                        </CardActions>

                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            }

            {isDetailPage &&

                <Box pt={5}>
                    <h2 className="heading">What we offer</h2>
                    <p>For your Well being</p>
                    <p>SPORTS | BOXING | HYPNOTHERAPY | PSYCHOTHERAPY | COUNSELLING | LIFE COACHING</p>
                    <p>Anger management, emotional therapy, trauma treatment and counselling is available on demand. </p>
                    <p>Some times, it may just be that season for you to start healing, self-develop & grow -> Life Coaching is what you need right now!</p>

                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion disabled>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography className={classes.heading}>Disabled Accordion</Typography>
                            </AccordionSummary>
                        </Accordion>
                    </div>
                </Box>
            }


        </Box>
    )
}