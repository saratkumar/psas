import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IconButton, ImageListItemBar, Grid, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import StarBorderIcon from '@mui/icons-material/StarBorder';


import image1 from './../../images/gallery/image1.jpg';
import image2 from './../../images/gallery/image2.jpg';
import image3 from './../../images/gallery/image3.jpg';
import image4 from './../../images/gallery/image4.jpg';
import image5 from './../../images/gallery/image5.jpg';
import image6 from './../../images/gallery/image6.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette?.background.paper,
    marginTop: "20px"
  },
  imageList: {
    flexWrap: 'nowrap',
    display: 'flex !important',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    // color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  w100: {
    width: "100% !important"
  },

  parent: {
    paddingTop: "50px",
    margin: "-15px"
  }
}));

export default function PhotoGallery() {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
       <Grid item xs={12} md={12} mx={{ xs: "auto", sm: 6, md: 1 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography variant="h4" m={"auto"} className="heading">Photo Book</Typography>
                        </Box>

                    </Grid>
                    <hr width="10%" style={{marginBottom: "4rem"}}></hr>

      <div className={classes.root}>


        <ImageList className={classes.imageList} >
          {itemData.map((item) => (
            <ImageListItem key={item.img} className={classes.w100}>
              <img src={item.img} alt={item.title} style={{ width: "100%", height: "300px" }} />
              <ImageListItemBar
                title={item.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                  w100: classes.w100
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: image1,
    title: '',
    rows: 3,
    cols: 2,
  },
  {
    img: image2,
    title: '',
  },
  {
    img: image3,
    title: '',
  },
  {
    img: image4,
    title: '',
    cols: 2,
  },
  {
    img: image5,
    title: '',
    cols: 2,
  },
  {
    img: image6,
    title: '',
    author: '',
    rows: 3,
    cols: 2,
  }
];