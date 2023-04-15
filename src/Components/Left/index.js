import React from 'react'
import { Typography, Box } from '@mui/material'
import Styles from "../searchBanner.module.css"

function index() {
  return (
    <Box className={Styles.LeftMain}
                    sx={{
                    width:400,
                    height:500,
                    backgroundColor: 'black',
                        }}>
                      <Typography  component="h2"  mt={5} ml={3} color="blue" fontSize={30} > Sunday</Typography>
                      <Typography  component="h2"  mt={1} ml={3} color="blue" fontSize={25} > 12/2/6753</Typography>
                      <Typography  component="h2"  mt={1} ml={5} color="pink" fontSize={35} > search </Typography>
                       <Typography  component="h2"  mt={1} ml={5} color="blue" fontSize={30} >  CloudIcon </Typography> 
                      <Typography  component="h2"  mt={1} ml={5} color="pink" fontSize={75}  > temp°cel  </Typography>
                      <Typography  component="h2"  mt={5} ml={3} color="blue" fontSize={25} > </Typography>
                 </Box>)}
  

export default index