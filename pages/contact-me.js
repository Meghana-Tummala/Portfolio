import {
    Box,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast,
    VStack
  } from '@chakra-ui/react'
  import { useState } from 'react'
  
  export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
      
        try {
          const res = await fetch('https://formspree.io/f/xnnvddnd', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
          })
      
          const data = await res.json()
      
          if (data.ok || res.status === 200) {
            toast({
              title: 'Message sent!',
              description: 'Thanks! I’ll get back to you shortly.',
              status: 'success',
              duration: 3000,
              isClosable: true
            })
            setForm({ name: '', email: '', message: '' })
          } else {
            throw new Error(data.error || 'Something went wrong')
          }
        } catch (error) {
          toast({
            title: 'Failed to send',
            description: error.message,
            status: 'error',
            duration: 3000,
            isClosable: true
          })
        }
      
        setIsLoading(false)
      }
      
  
    return (
      <Box maxW="600px" mx="auto" py={10} px={6}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          Contact Me
        </Heading>
        <Text fontSize="lg" mb={8} textAlign="center">
          Have a question, project, or just want to say hi? Fill out the form below.
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
            </FormControl>
  
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
              />
            </FormControl>
  
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                placeholder="Write your message here..."
                rows={6}
                value={form.message}
                onChange={handleChange}
              />
            </FormControl>
  
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              isLoading={isLoading}
              loadingText="Sending..."
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    )
  }
  