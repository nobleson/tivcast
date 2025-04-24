'use client'
// import node module libraries
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    Flex,
    Spacer,
    Box,
    Container,
    Stack
 } from '@chakra-ui/react'
 import { BackgroundGradient } from '#components/gradients/background-gradient'

const loadData = async () => {

  const products = await fetch("/api/order", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include'
  });
  return await products.json()
}

const LiveStream = () => {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const  handleCallback =  (newRecord) => {
     // setData([...data,newRecord.data])
     loadData()
     .then((result) => {
      //console.log("Product View", result.data)
       setData(result.data)
       handleClose()

     })
  };

  //const productList = data?.map((cat) => cat.name)


  useEffect(() => {

/*     loadData()
    .then((result) => {
        console.log("ORDER DATA", result.data)
      setData(result.data)
    }) */

  }, []);
  return (
        <Box bg='tomato' position="relative" overflow="hidden">
          <BackgroundGradient height="100%" zIndex="-1" />
          <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
            <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              Fast Refresh had to perform a full reload due to a runtime error.
            </Box>
            </Stack>
            </Container>
       </Box>

  )
}

export default LiveStream