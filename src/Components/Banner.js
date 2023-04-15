import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Styles from "./searchBanner.module.css"
//import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';



// import StreetviewIcon from '@mui/icons-material/Streetview';


// const MyStyle = {
//     // Backgroungcolor: "white",
//     // Color:"red"
    
//   };


function Banner() {
    const [city, setCity] = useState("")
    const [search, setSearch] = useState("Mumbai")
    const[daily, setDaily] = useState("null")
  
    useEffect(()=>{
        const fetchApi = async ()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=558ad25d34d1eb9fff4c4b6068d2ef13`
        const response = await fetch(url);
        // console.log(response);
        const resJson = await response.json()
        //console.log(resJson)
        setCity(resJson.main);
        setDaily(resJson.coord);
       };
        fetchApi();
    }, [search])
  

  return (
    <div className={Styles.main}>
    <Box
    sx={{
      width: 700,
      height: 500,
       backgroundColor: 'primary.dark',
      ml:60
      }}>
              
        <Typography variant="h5" component="h2" color="red"  ml={20} pt={5} fontSize={50} fontWeight={800} >Todays weather</Typography>
        {/* <startIcon>{<FavoriteIcon/>}</startIcon> */}
        <TextField
          id="filled-search"
          label="Search "
          type="search"
        
          sx={{ml:30, mt:5, backgroundColor:"white"}}
          onChange={(event)=>{ setSearch(event.target.value)}}
          />

         {!city?(<p>no data found</p>):(<Box><Typography variant="h5" color="pink" component="h2" ml={30} mt={5} fontSize={50} fontWeight={800}>
             {search}
            </Typography>
            <Typography variant="h5" component="h2"  color="pink" ml={35} mt={2} >
             {city.temp}° cel 
            </Typography>
            <Typography variant="h5" component="h2"  color="pink" ml={25} mt={7}>
             Min : {city.temp_min}° cel | Max : {city.temp_max}° cel
            </Typography>
            <Typography variant="h5" component="h2"  color="pink" ml={25} mt={7}>
             lon: {daily.lon}  | lat : {daily.lat} 
            </Typography>
            
            {/* <Button color="secondary" startIcon={<FavoriteIcon/>}>Secondary</Button>
      <Button variant="contained" color="success"></Button>             */}
            </Box>
            )}
        
        </Box>
        </div>

  )
}

export default Banner