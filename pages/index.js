// pages/index.js
import { Box, Heading, Text, Button, VStack, Center } from '@chakra-ui/react'
//import VoxelScene from '../components/voxel-scene'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// SSR-safe lazy loading of voxel scene
const NoSsrVoxel = dynamic(() => import('../components/voxel-scene'), { ssr: false })

export default function HeroPage() {
  const router = useRouter()

  return (
    <Box position="relative" w="100%" h="100vh" overflow="hidden"
    >
      {/* Fullscreen 3D model as background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex={0}
      >
        <NoSsrVoxel />
      </Box>

      {/* Overlay Content */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex={10}
        
        pointerEvents="none"
      >
        <Center h="100%">
          <VStack spacing={6} pointerEvents="auto">
            <Heading fontSize={['3xl', '4xl', '6xl']} textAlign="center" color="white">
              Meghana Tummala
            </Heading>
            <Text fontSize={['md', 'lg']} textAlign="center" color="gray.200">
            Software Engineer • AI Engineer • Full-Stack Developer
            </Text>
            <Button colorScheme="teal" size="lg" onClick={() => router.push('/about-me')}>
              Enter Portfolio
            </Button>
          </VStack>
        </Center>
      </Box>
    </Box>
  )
}
