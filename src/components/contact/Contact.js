

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Contact.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material';
export default function Contact() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className="contact" style={{ margin: "-15px" }}>
            
            <Box style={{margin: "0px 15px"}}>
            <Grid item xs={12} md={12} mx={{ xs: "auto", sm: 6, md: 1 }} >
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography variant="h4" m={"auto"} pt={2} className="heading-reverse">Tell us, What's on your mind!</Typography>
                        </Box>

                    </Grid>
                    <hr width="10%" style={{marginBottom: "4rem"}}></hr>


            <Box sx={{ flexGrow: 1 }} className="mt-10">
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6} style={{ textAlign: "left" }} className="left-contact">
                        <h4 className="color-w">Better yet, see us in person!</h4>

                        <p >We love our members and clients, so feel free to visit during normal business hours or simply make an appointment.</p>
                        <p>Contact us via Whatsapp at +65 811 711 00</p>



                        <p>Pegasus Sports & Mental Wellbeing Academy SG </p>
                        <p>67 Ubi Crescent, Singapore 408560, Singapore</p>

                        <p>Opening Hours</p>
                        <hr width="100%"></hr>
                        <p>Mondays & Thursdays:              6.15 pm - 9 pm</p>
                        <p>Tuesdays & Wednesdays:              7:45 pm - 10 pm</p>
                        <p>Friday - Sunday & holidays:  Closed</p>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ textAlign: "left" }}>

                        <h4 className="color-w"> Drop us a mail</h4>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}> <TextField id="standard-basic" label="Name" variant="filled" style={{ width: "80%", marginRight: "2px" }} margin="dense" /></Grid>
                                <Grid item xs={12} md={6}> <TextField id="standard-basic" label="Email" variant="filled" style={{ width: "80%" }} margin="dense" /></Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Thoughts"
                                        multiline
                                        rows={4}
                                        variant="filled"
                                        margin="dense"
                                        style={{ width: "90.5%" }}
                                    />


                                </Grid>
                                <Grid item xs={12} md={6} mt={1} mb={1}>   <Button variant="contained" endIcon={<SendIcon />} style={{ width: "80%" }} className="btn-theme"> Send </Button> </Grid>
                                <Grid item xs={12} md={6} mt={1} mb={1}>  <Button variant="contained" startIcon={<WhatsAppIcon />} style={{ width: "80%" }} className="btn-theme"> Whastsapp </Button> </Grid>
                            </Grid>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
            </Box>


        </div>
    )
}