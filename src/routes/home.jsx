import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import jeep from '../assets/svgs/jeep.svg';
import time from '../assets/svgs/time.svg';
import solution from '../assets/svgs/solution.svg';
import './css/home.css';
import { tabTitle } from "../functions";

function Home() {

  tabTitle('Flight Mitra')

  return (
    <>
    {/* -------------------------------------------------------------------------- */
    /*                                HERO SECTION                                */
    /* -------------------------------------------------------------------------- */}
      <div className="worldmap-bg" style={{padding: '5%'}}>
        <Container maxWidth="sm" sx={{textAlign: 'center', mt: '5%'}}>

            <Typography variant="h3" sx={{display: {xs:'none', md:'block'}}}>Flying in India made</Typography>
            <Typography sx={{display: {xs:'block', md:'none'}, fontSize: '2.1rem'}}>Flying in India made</Typography>
            
            <Typography variant="h3" sx={{color: 'var(--indigo)', display: {xs:'none', md:'block'}}}>Cheaper. Faster. Reliable.</Typography>
            <Typography sx={{color: 'var(--indigo)', display: {xs:'block', md:'none'}, fontSize: '2.1rem'}}>Cheaper. Faster. Reliable.</Typography>

            <Typography variant="h5" sx={{fontWeight:'none', mt:4, display: {xs:'none', md:'block'}}}>Flight Mitra is an open source project aimed at improving the Aviation Experience of India.</Typography>
            <Typography  sx={{fontWeight:'none', mt:2, display: {xs:'block', md:'none'}}}>Flight Mitra is an open source project aimed at improving the Aviation Experience of India.</Typography>

            <div style={{marginTop:'8%'}}>
              <Button onClick={() => {window.location.href="/flights"}} className="indigo-btn" sx={{px: '5%'}}>Search Flights</Button>
              <Button onClick={() => {window.location.href="hhttps://github.com/poojasoftiatric/FlightMitra"}} className="gray-btn" sx={{ml:2, px: '7%'}}>Github &nbsp; <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}} /></Button>
            </div>

        </Container>
      </div>

      <Container maxWidth='lg' sx={{mt:8}}>


        <Grid container>
          <Grid item md={6} xs={12} sx={{textAlign:'left'}}>
            <Typography variant="h4" className="fw-900" sx={{display:{xs:'none', md:'block'}}}><i style={{fontSize:'3rem'}} className="indigo">#</i> Search Cheap Flight Tickets</Typography>
            <Typography variant="h5" className="fw-900" sx={{display:{xs:'block', md:'none'}}}><i style={{fontSize:'2.4rem'}} className="indigo">#</i> Search Cheap Flight Tickets</Typography>
            <Typography>
            One of the key advantages of using Flight Mitra is its ability to find affordable flight tickets. The website is designed to prioritize cost-effective options, ensuring that you get the best value for your money. By comparing prices from various airlines, Flight Mitra helps you identify the most budget-friendly flights available. Whether you&apos;re a budget traveler or simply looking to save some extra cash, Flight Mitra is the perfect platform to find cheap flight tickets.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}><img src={jeep} alt="family travelling on jeep" width="100%" /></Grid>
        </Grid>

        <Grid container sx={{mt:10}}>
          <Grid item md={6} xs={12} sx={{display:{xs:'none', md:'block'}}}><img src={time} alt="time management" width="100%" /></Grid>
          <Grid item md={6} xs={12} sx={{textAlign:'left'}}>
            <Typography variant="h4" className="fw-900" sx={{display:{xs:'none', md:'block'}}}><i style={{fontSize:'3rem'}} className="indigo">#</i> Last-Minute Deals</Typography>
            <Typography variant="h5" className="fw-900" sx={{display:{xs:'block', md:'none'}}}><i style={{fontSize:'2.4rem'}} className="indigo">#</i> Last-Minute Deals</Typography>
            <Typography>
            Sometimes, plans change at the last minute, and you find yourself in need of a flight ticket urgently. Flight Mitra understands this and offers a feature that allows you to search for last-minute flight deals. Whether you need to attend a business meeting or want to surprise your loved ones with a spontaneous trip, Flight Mitra can help you find the best last-minute flight options. With its extensive network of airlines and travel partners, you can trust Flight Mitra to find the most convenient and affordable flights, even on short notice.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} sx={{display:{xs:'block', md:'none'}, mt:5}}><img src={time} alt="time management" width="100%" /></Grid>
        </Grid>

        <Grid container sx={{mt:10}}>
          <Grid item md={6} xs={12} sx={{textAlign:'left'}}>
            <Typography variant="h4" className="fw-900" sx={{display:{xs:'none', md:'block'}}}><i style={{fontSize:'3rem'}} className="indigo">#</i> Open-Source Project</Typography>
            <Typography variant="h5" className="fw-900" sx={{display:{xs:'block', md:'none'}}}><i style={{fontSize:'2.4rem'}} className="indigo">#</i> Open-Source Project</Typography>
            <Typography>
            Flight Mitra fosters a sense of community among developers, allowing them to collaborate and contribute to the platform&apos;s development. This collaborative approach ensures that the platform continues to evolve and improve, benefiting all users.
            </Typography>
            <Typography variant="h5" className='fw-700' sx={{mt:4, textAlign: 'center'}}>Join the Developer Community</Typography>
            <Typography sx={{mt:1, textAlign: 'center'}}>By Contributing to the Flight Mitra Github Repository.</Typography>
            <div style={{textAlign:'center'}}>
              <Button className="indigo-btn" onClick={() => {window.location.href="https://github.com/poojasoftiatric/FlightMitra"}} sx={{mt:2, px:4}}>Join Community</Button>
            </div>
          </Grid>
          <Grid item md={6} xs={12} sx={{mt:5}}><img src={solution} alt="people working on a solution" width="100%" /></Grid>
        </Grid>


      </Container>

      <Container maxWidth="sm" sx={{mt:10, textAlign:'center'}}>
        <Typography variant="h3" className='fw-900'>Ready to Join the Club?</Typography>
        <Button onClick={() => {window.location.href="/flights"}} className="indigo-btn" size="large" sx={{mt:5, px:4, mb:5}}>Search Flight Deals</Button>
      </Container>

    </>
  )
}

export default Home;