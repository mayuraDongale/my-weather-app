import React, { useEffect , useState} from 'react'
import Box from '@mui/material/Box';
import Styles from "./searchBanner.module.css"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CloudIcon from '@mui/icons-material/Cloud';
import axios from 'axios';


function Home() {
     
      const [alignment, setAlignment] = React.useState('web');
      const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
      }


     const [city, setCity] = useState("");
     const [search, setSearch] = useState("mumbai");
    const[wind,setWind] = useState("null")
    const[coord,setCoord]= useState("null")
  
    
      
      useEffect(()=>{
        const fetchApi = async ()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=558ad25d34d1eb9fff4c4b6068d2ef13`
        const response = await fetch(url);
        console.log(response);
        const resJson = await response.json()
        console.log(resJson)
        setCity(resJson.main);
        setWind(resJson.wind);
        setCoord(resJson.coord);

    }
    fetchApi();
    }, [search])
  

  return (
    <div className={Styles.main}>
      <TextField
                            id="filled-search"
                            label="Search "
                            type="search"
                            sx={{ ml:40 ,width:300, height:50, backgroundColor:"white"}}
                            onChange={(event)=>{ setSearch(event.target.value)}}
                           /> 
           <div className={Styles.subDiv}>
            
            
                 
               {!city?(<>data not found</>):( <Box className={Styles.LeftMain}
                    sx={{
                    width:400,
                    height:500,
                    backgroundColor: 'black',
                        }}>
                      <Typography  component="h2"  mt={5} ml={10} color="blue" fontSize={30} > Sunday</Typography>
                      <Typography  component="h2"  mt={1} ml={10} color="blue" fontSize={25} > 12/2/6753</Typography>
                      <Typography  component="h2"  mt={1} ml={10} color="pink" fontSize={35} > {search}</Typography>
                       <Typography  component="h2"  mt={1} ml={10} color="blue" fontSize={30} > < CloudIcon /></Typography> 
                      <Typography  component="h2"  mt={1} ml={5} color="pink" fontSize={75}  > {city.temp}°cel  </Typography>
                      <Typography  component="h2"  mt={5} ml={3} color="blue" fontSize={25} > {coord.lon}</Typography>
                 </Box>)}
                      


                 {!city?(<>data not found</>):( <Box className={Styles.RightMain}
                        sx={{
                        width:600,
                        height:500,
                        backgroundColor:'primary.dark',
                           }}>
                           {/* <TextField
                            id="filled-search"
                            label="Search "
                            type="search"
                            sx={{ ml:10 ,width:300,mt:3, backgroundColor:"white"}}
                            onChange={(event)=>{ setSearch(event.target.value)}}
                           />  */}
                           <ToggleButtonGroup className={Styles.tbg}
                            color="warning"
                            sx={{  width:560  ,ml:3,  mt:9, height:100, backgroundColor:"pink", }}
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            startIcon={<CloudIcon/>}
                             >
                              <ToggleButton value="first"  sx={{color:"blue"}} ><CloudIcon/>Sun 15°C</ToggleButton>
                              <ToggleButton value="second" sx={{color:"blue"}} ><CloudIcon/>Mon 15°C</ToggleButton>
                              <ToggleButton value="third" sx={{color:"blue"}}><CloudIcon/>Tue 15°C</ToggleButton>
                              <ToggleButton value="fourth" sx={{color:"blue"}} ><CloudIcon/>Wed 15°C</ToggleButton>
                              <ToggleButton value="fifth" sx={{color:"blue"}}><CloudIcon/>Thu 15°C</ToggleButton>
                              <ToggleButton value="six" sx={{color:"blue"}}><CloudIcon/>Fri 15°C</ToggleButton>
                              <ToggleButton value="seven" sx={{color:"blue"}}><CloudIcon/>Sat 15°C</ToggleButton>
                          </ToggleButtonGroup>

                              <Box className={Styles.ab} 
                              width={560} height={200} backgroundColor="pink" mt={2} ml={3} color="blue" >
                                <Box className={Styles.A}
                                width={290}height={200} mt={2} ml={4}>
                                     <Typography fontSize={20}> Min(Temp)</Typography>
                                      <Typography fontSize={20} mt={1}> Max(Temp)</Typography>
                                       <Typography fontSize={20} mt={1}> UI Index</Typography>
                                       <Typography fontSize={20} mt={1}>HUMIDITY</Typography>
                                       <Typography fontSize={20} mt={1}>WIND</Typography>
                                       {/* <Typography fontSize={20} mt={1}>Mumbai</Typography>  */}
                                </Box>
                                <Box className={Styles.B}
                                width={290} height={200} mt={2} ml={20}>
                                      <Typography fontSize={20}> {city.temp_min}° cel  </Typography>
                                      <Typography fontSize={20} mt={1}> {city.temp_max}° cel</Typography>
                                      <Typography fontSize={20} mt={1}> 9(very High)</Typography>
                                       <Typography fontSize={20} mt={1}>{city.humidity}</Typography>
                                       <Typography fontSize={20} mt={1}>{wind.speed}kg</Typography>
                                      {/* <Typography fontSize={20} mt={1}>2065771</Typography>   */}
                                </Box>
                   
                              
                              </Box>

                            </Box>)}
                    </div>
                    </div>
         
  )
}


export default Home