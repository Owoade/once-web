import { useNavigate } from "react-router-dom";
import useCheckoutPayload from "../hooks/useCheckoutPayload";
import { useState } from "react"
import axios from "axios";
import { Box, Text, chakra, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
export default function Info() {
    const navigate = useNavigate();
    const [id, ref, host] = useCheckoutPayload(window.location.href);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const [ clicked, setClicked ] = useState( false );
  
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setClicked( true );

      if (id === "") return alert("Invalid URL");
      const data = {
        id,
        update: {
          name,
          email,
        },
      };
  
  
      const res = await axios.patch(
        "https://once-checkout.onrender.com/update-transaction",
        data
      );
      const serverRes = res.data;
  
      if (serverRes.message === "successfull") {
       return navigate(`/checkout?${id}==${ref}==${host}`);
      }
    
      return navigate("/")
    }
  
    return (
      <Box width={{ sm: "500px", base: "90%" }} margin="0 auto" py={5}>
        <Box textAlign={"center"}>
          <Logo />
          <Text fontSize={{xs:"16px", base:"14px"}} textAlign={"center"} my={3}>
            {" "}
            Checkout from{" "}
            <chakra.span color="blue" fontWeight={"extrabold"}>
              {host}
            </chakra.span>
          </Text>
          <Text fontSize={"14px"} color={"#5C5C5C"}>
            {" "}
            Please provide your details to proceed{" "}
          </Text>
          <Box my={10}>
            <form onSubmit={handleSubmit}>
              <FormControl my={3}>
                <FormLabel fontSize={"13px"} fontWeight="extrabold">
                  Email address
                </FormLabel>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  type="email"
                  placeholder="owoade@once.checkout"
                />
              </FormControl>
              <FormControl my={3}>
                <FormLabel fontSize={"13px"} fontWeight="extrabold">
                  Full Name
                </FormLabel>
                <Input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Owoade Anuoluwapo"
                />
              </FormControl>
              <Button
                type="submit"
                width="100%"
                my={6}
                bgColor={"#52688F"}
                color="white"
                isDisabled={ clicked }
                _hover={{ backgroundColor: "#7391C8" }}
              >
                Proceed
              </Button>
            </form>
          </Box>
         <Footer />
        </Box>
      </Box>
    );
  }