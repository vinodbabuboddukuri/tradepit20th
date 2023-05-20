import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Leftbar from "../Elements/leftbar"
import Topbar from "../Elements/topbar"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
    
      <React.Fragment>
        <Grid item xs={4}>
          {/* <Paper className={classes.paper}>item</Paper> */}
          <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1384646810/photo/golden-bull-and-bear-on-stock-data-chart-background-investing-stock-exchange-financial.jpg?b=1&s=170667a&w=0&k=20&c=8QhNSLCT2yTW5oVGtVoswFOyjsunTU_L3nsdXkXWeMg="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bull & Bulls eye
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn about corporate earnings and economic growth and their low interest rates and the investors sentiment
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://youtu.be/qYKc-yyJbtk'>Share</Button>
        <Button size="small"  href='https://youtu.be/qYKc-yyJbtk'   >Learn More</Button>
      </CardActions>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.fisdom.com/wp-content/uploads/2021/11/shutterstock_191449442.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Being Bullied in Stock Market
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn about corporate earnings and economic growth and their low interest rates and the investors sentiment
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={4}>
          {/* <Paper className={classes.paper}>item</Paper> */}

          <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://static4.depositphotos.com/1008939/320/i/450/depositphotos_3208371-stock-photo-exchange.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stock Market Overloaded
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn about corporate earnings and economic growth and their low interest rates and the investors sentiment
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <br>
    </br>






    
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://static01.nyt.com/images/2020/08/19/business/19db-newsletter-markets/merlin_175853073_163c3881-c182-4c0c-9e27-ffc0abb37aae-superJumbo.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bearing things in mind
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn about corporate earnings and economic growth and their low interest rates and the investors sentiment
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        </Grid>


        <Grid item xs={4}>
          {/* <Paper className={classes.paper}>item</Paper> */}

          <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.livelaw.in/h-upload/2022/08/24/431933-social-stock-exchange.jpg"
        title="green iguana"
      />
      <CardContent> 
        <Typography gutterBottom variant="h5" component="div">
          Basics of Stock Market
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn about corporate earnings and economic growth and their low interest rates and the investors sentiment
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    <br>
    </br>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://static.businessworld.in/article/article_extra_large_image/1672369937_ncs9Md_stock_market.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stocks and their antics
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn about corporate earnings and economic growth and their low interest rates and the investors sentiment
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>




        </Grid>
      </React.Fragment>
    
    );
  }

  return (
    <div className="portfolio">
    <Leftbar/>
    <div className="portfolio__container">
        <Topbar/>
    <center><h1>Learn Stocks</h1></center>
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>

    </div>
    </div>
      </div>
  );
}
