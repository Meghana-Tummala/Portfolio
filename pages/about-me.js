import { Box, Heading, Image, useColorModeValue, Button } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"

import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"

const Page = () => {
    return (
        <Layout>
        <>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I am a full-stack developer based in Virginia!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Meghana Tummala
                    </Heading>
                    <p>Recent Grad/Developer/Engineer</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/meghana.jpg" alt="Profile Image"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                  Hello, I&apos;m Meghana, a recent Master&apos;s graduate in Computer Science from George Mason University. I&apos;m passionate about AI and full-stack development, and I enjoy building practical solutions that have a real impact. Feel free to explore my projects, and if anything sparks your interest, I&apos;d love to connect.
                </Paragraph>

                <Box align="center" my={4}>
                    
                        <Button as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer" rightIcon={<ChevronRightIcon></ChevronRightIcon>} colorScheme="teal">
                        My Resume</Button>
                    
                </Box>
            </Section>

            <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Vijayawada, India.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed my Bachelors in Computer Science and Engineering
          at SRM University
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Graduated with a master&apos;s degree in Computer Science at 
          George Mason University, Virginia
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        Film and Video Studies,{' '}
          
          Event Technical Production
          
          , Audio/Video Production,{' '}
    
            Photography
        
          , Reading
        </Paragraph>
      </Section>

        </>
        </Layout>
    )
}
export default Page