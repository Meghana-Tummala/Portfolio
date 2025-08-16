import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { title } from 'framer-motion/client'
import { Children } from 'react'

export const GridItem = ({children, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
        <Image src={thumbnail}
        alt={title}
        className='grid-item-thumbnail'
        placeholder='blur'
        loading='lazy'/>
        <LinkOverlay href={href} target='_blank'>
        <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="center" my={10}>
      <LinkBox as="article">
        <NextLink href={`/works/${id}`} passHref legacyBehavior>
          <LinkOverlay>
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              
              loading="lazy"
              width={800}
              height={400}
              style={{ borderRadius: '12px' }}
            />
            <Text mt={4} fontSize="xl" fontWeight="bold">
              {title}
            </Text>
          </LinkOverlay>
        </NextLink>
        <Text mt={2} fontSize="md" color="gray.400">
          {children}
        </Text>
      </LinkBox>
    </Box>
  )

export const GridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail {
            border-radius: 12px;}`}
    />
)