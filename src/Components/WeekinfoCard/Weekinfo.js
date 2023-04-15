import React from 'react'
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CloudIcon from '@mui/icons-material/Cloud';
import { UseWeatherAPPContext } from '../../Context/Context';


function Weekinfo() {
  const {state:{daily},dispatch}= UseWeatherAPPContext();
  //console.log('daily',daily);

    const [alignment, setAlignment] = React.useState('web');
      const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
      }

  return (
    <div>
        <Box className="RightMain"
                        sx={{
                        width:600,
                        height:100,
                      
                           }}>
                        
                           <ToggleButtonGroup className="tbg"
                            color="warning"
                            sx={{  width:560  ,ml:3,  mt:2, height:100, backgroundColor:"pink", }}
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
                          </Box>
    </div>
  )
}

export default Weekinfo