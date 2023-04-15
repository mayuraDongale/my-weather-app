import React from 'react'
import TextField from '@mui/material/TextField';
import Cities from '../../Data/in.json';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import { UseWeatherAPPContext } from '../../Context/Context';
import axios from 'axios';
import { useEffect } from 'react';

function ChooseState() {

  const {state:{city},dispatch} = UseWeatherAPPContext();
  //console.log('UseWeatherAPPContext', UseWeatherAPPContext());

  const handleChange = (e)=>{
    const selectedCity = Cities.filter((city)=>{
      return city.city === e.target.value
    })[0]
    //console.log(selectedCity);
    dispatch({
      type:'SET_CITY',
      payload:selectedCity
    })
  };

        //ApiKey
      const APIKEY = '558ad25d34d1eb9fff4c4b6068d2ef13';
      let lat = city && city.lat ? city.lat:'';
      let long = city && city.long ? city.long:'';
      let exclude = 'hourly.minutely';
      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&long=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`;

      const fetchData=()=>{
        axios(URL).then((data)=>{
          //console.log(data)
        })
      }

      useEffect(()=>{
           fetchData();
      },[city])

      
 return (
    <Box>
<TextField
  id="outlined-select-search"
  select="city"
  label="Please select the city"
 // helperText="Please select your city"
  onChange={handleChange} 
  defaultValue={city}
  sx={{ ml:17,width:300, height:50,mt:4, backgroundColor:"white" }}
>
  { Cities && Cities.length > 0 && Cities.map((city) => {
    return  (
    <MenuItem key={`${city.population}${city.lng}`} value={city.city} >
    {city.city}{city. admin_name}
    </MenuItem>)  
})}
</TextField>
</Box>
  )
  }
export default ChooseState