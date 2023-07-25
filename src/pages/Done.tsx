import { Box, Heading, Image, chakra, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useState } from "react";

export default function Done() {

  const [ countdown, setCountDown ] = useState(5)

    if(window.location.href.includes("status=cancelled")){
      window.close()
    }
  
    if( countdown === 0 ) setTimeout(()=> window.close(), 500)
    
    setTimeout(()=> setCountDown(Math.max( countdown - 1, 0 )), 1000)
  
    return (
      <Box width={{ sm: "500px", base: "90%" }} margin="0 auto" py={5}>
        <Box textAlign={"center"}>
          <Image width={"300px"} mx={"auto"} src="done.svg" pointerEvents={"none"} />
          <Heading fontSize={{ xs: "30px", base: "20px" }} as="h2" fontFamily={""}>
            Transaction Confirmed
          </Heading>
          <Text my={6}>
            {" "}
            Closing in <chakra.span color={"blue"}>00:0{countdown}</chakra.span>
          </Text>
         <Footer />
        </Box>
      </Box>
    );
  }