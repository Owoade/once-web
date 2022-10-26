import { Box, Heading, Image, Text, chakra, Button } from "@chakra-ui/react";
import Logo from "../components/Logo";

export default function BadRequest() {
    return (
      <Box width={{ sm: "500px", base: "90%" }} margin="0 auto" py={5}>
        <Box textAlign={"center"}>
          <Image src="400.png" />
          <Heading as="h2" fontFamily={""}>
            Oops...
          </Heading>
          <Text my={4}>
            {" "}
            Hi there, it seems the URL is invalid
          </Text>
          <Button
                width="100%"
                bgColor={"#52688F"}
                color="white"
                _hover={{ backgroundColor: "#7391C8" }}
                onClick={ ()=> window.close() }
            >
             Go back
            </Button>
          <Text my={8}>
            Created with 🧡 by{" "}
            <chakra.span color="black" fontWeight={"extrabold"}>
              Owoade
            </chakra.span>{" "}
          </Text>
        </Box>
      </Box>
    );
  }