import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main';
import { useRouter } from 'next/router';
//import { system } from "@chakra-ui/react/preset";
import theme from "../libs/theme.js";
import Fonts from "../components/fonts.js";



const Website = ({ Component, pageProps }) => {
  const router = useRouter(); // Get router here
  //value={system}
  return (
    <ChakraProvider theme={theme}>
        <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
      
    </ChakraProvider>
  );
};

export default Website;
