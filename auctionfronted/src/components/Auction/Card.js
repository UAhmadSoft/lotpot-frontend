import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Box, Chip, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    borderRadius: 8,
    marginBottom: theme.spacing(2),
  },
  cardDetails: {
    flex: 1,
    position: 'relative',
  },
  cardMedia: {
    width: 160,
  },
  shareBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const {
    id,
    title,
    location,
    img,
    price,
    startedBy,
    timeLeft,
    description,
    showImg,
  } = props;

  const handleBookMark = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };
  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

  return (
    <>
      <Card className={classes.card}>
        {showImg && (
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={img}
              title={title}
            />
          </Hidden>
        )}
        <div className={classes.cardDetails}>
          <CardContent>
            {!showImg && (
              <div className={classes.shareBtn}>
                <IconButton
                  aria-label='Share'
                  aria-haspopup='true'
                  data-item={id}
                  onClick={handleShare}
                  style={{
                    marginLeft: 'auto',
                    color: '#000',
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </div>
            )}
            <Typography component='h2' variant='h5'>
              {title}
            </Typography>
            <Typography variant='h3' color='textSecondary'>
              {price}
            </Typography>
            <Typography variant='subtitle1' paragraph>
              {description}
            </Typography>
            <Typography variant='subtitle1' paragraph>
              {location}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Chip
                size='small'
                label={`Time Left : ${timeLeft}`}
                color='primary'
              />
              <IconButton
                aria-label='bookmark'
                aria-haspopup='true'
                data-item={id}
                onClick={handleBookMark}
                style={{
                  marginLeft: 'auto',
                  color: '#000',
                }}
              >
                <VisibilityIcon color='primary' />
              </IconButton>
            </Box>
            {/* //! Apply time remaining algo logic   */}
            {/* <Typography variant='subtitle1' paragraph>
              {timeLeft}
            </Typography> */}
          </CardContent>
        </div>
      </Card>
    </>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
