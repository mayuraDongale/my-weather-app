import React from 'react'
import ChooseState from './ChooaseState/ChooseState'
import WeekinfoCard from './WeekinfoCard/Weekinfo'
import HUMIDITY from './HUMIDITY/index'
import Left from './Left/index'
import Box from '@mui/material/Box';
import Styles from "./searchBanner.module.css"



function Home1() {
  return (
    <Box className={Styles.main}>
      <Box className={Styles.subDiv}>
        <Left />
        <Box className={Styles.rightMain}
                    sx={{
                    width:600,
                    height:500,
                    backgroundColor: 'blue',
                        }}>
            <ChooseState /> <br/>
           <WeekinfoCard /><br />
            <HUMIDITY /> 
        </Box>
        </Box>
    </Box>

  )
}

export default Home1