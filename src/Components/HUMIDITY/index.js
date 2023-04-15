import React from 'react'
import { Typography,Box } from '@mui/material'
import Styles from '../searchBanner.module.css'
import ChooseState from '../ChooaseState/ChooseState'

function index() {
  return (
    <Box className={Styles.ab} 
                              width={560} height={200} backgroundColor="pink" mt={5}  ml={3} color="blue" >
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
                                      <Typography fontSize={20}> ° cel  </Typography>
                                      <Typography fontSize={20} mt={1}> cel</Typography>
                                      <Typography fontSize={20} mt={1}> 9(very High)</Typography>
                                       <Typography fontSize={20} mt={1}>humidity</Typography>
                                       <Typography fontSize={20} mt={1}>wind.speed kg</Typography>
                                      {/* <Typography fontSize={20} mt={1}>2065771</Typography>   */}
                                </Box>
                                </Box>
  )
}

export default index