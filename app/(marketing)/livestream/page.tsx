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
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { BackgroundGradient } from '#components/gradients/background-gradient'
import NextVideo from 'next-video'
import sample from "#videos/sample.mp4"
import TivcastPlayer from 'app/mux/player/tivcast-player'
import Player from 'app/mux/player/mux-player'

/* export const meta: Metadata = {
  title: 'Tivcast | Live',
  description: 'Streaming App',
} */
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

const LiveStream: NextPage = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  )
}
const HeroSection: React.FC = () => {
  return (
    <Box>
    <BackgroundGradient height="100%" zIndex="-1" />
    <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
      <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
        <VStack align="stretch" justifyContent="stretch"  flex="1">
              {/* <NextVideo as={TivcastPlayer} src={sample} /> */}
              <NextVideo as={Player} src={sample} />
         </VStack>
      </Stack>
      </Container>
    </Box>
  )
}

export default LiveStream