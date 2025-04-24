'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { BackgroundGradient } from '#components/gradients/background-gradient'
import NextVideo from 'next-video'
import sample from "#videos/sample.mp4"
import TivcastPlayer from 'app/mux/player/tivcast-player'
import Player from 'app/mux/player/mux-player'

interface StreamProps{
    source?: string,
    streamId?: string
}
interface PageProps{
  slug: string
}

const LiveStream = ({
  params,
}:{
  params: PageProps
}) => {
  const { slug } = params
  const [streamUrl, setStreamUrl] = useState<any>(null)
  useEffect(() => {
 
    if(slug){
      //XDqEvmxnLeY
      const url=`https://tivcast.iesc.com.ng:5443/streams/${slug}.m3u8` 

       // const url = `https://www.youtube.com/watch?v=${slug}` 
        setStreamUrl(url)
    }

  }, [streamUrl]);
  return (
    <Box>
      <LiveSection source={streamUrl}/>
    </Box>
  )
}
const LiveSection: React.FC<StreamProps> = ({source}) => {
  return (
    <Box>
    <BackgroundGradient height="100%" zIndex="-1" />
    <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
      <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
        <VStack align="stretch" justifyContent="stretch"  flex="1">
              <NextVideo as={TivcastPlayer} src={source} /> 
              {/* <NextVideo as={Player} src={source} /> */}
         </VStack>
      </Stack>
      </Container>
    </Box>
  )
}

export default LiveStream