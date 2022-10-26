import { Box, Heading, Image, chakra, Text } from "@chakra-ui/react";
import Logo from "../components/Logo";

export default function Done() {

    if(window.location.href.includes("status=cancelled")){
      window.close()
    }
  
    setTimeout(()=> window.close(), 5000)
  
    return (
      <Box width={{ sm: "500px", base: "90%" }} margin="0 auto" py={5}>
        <Box textAlign={"center"}>
          <Image src="done.png" />
          <Heading as="h2" fontFamily={""}>
            Transaction Confirmed
          </Heading>
          <Text my={6}>
            {" "}
            Thank you {<Logo size="16px" />} again for using our checkout portal
          </Text>
          <Text>
            Created with 🧡 by{" "}
            <chakra.span color="black" fontWeight={"extrabold"}>
              Owoade
            </chakra.span>{" "}
          </Text>
        </Box>
      </Box>
    );
  }