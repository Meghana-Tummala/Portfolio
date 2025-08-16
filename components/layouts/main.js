import Head from "next/head";
import Navbar from '../navbar.js'
//import NoSsr from '../no-ssr.js'
import { Box, Container } from "@chakra-ui/react";
//import VoxelScene from '../voxel-scene.js'

const Main = ({ children, router }) => {
    return (
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Meghana Tummala's Portfolio</title>
        </Head>
  
        <Navbar path={router.asPath} />
        <Container maxW="container.lg" pt={{ base: 24, md: 28 }}>
          {children}
        </Container>
      </Box>
    )
  }

export default Main