import { Box, chakra, HStack, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import axios from "axios";
import { RiSearch2Line } from "react-icons/ri";
import Logo from "../components/Logo";
import useCheckoutPayload from "../hooks/useCheckoutPayload";
import { useState } from "react"
import Footer from "../components/Footer";

export default function Checkout() {
    const [ clicked, setClicked ] = useState( false )
    const payload = useCheckoutPayload( window.location.href );
    return (
      <Box width={{ sm: "500px", base: "90%" }} margin="0 auto" py={5}>
        <Box textAlign={"center"}>
          <Logo />
          <Text fontSize={{xs:"16px", base:"14px"}} textAlign={"center"} my={3}>
            {" "}
            Checkout from{" "}
            <chakra.span color="blue" fontWeight={"extrabold"}>
              { payload[2] }
            </chakra.span>
          </Text>
          <Text fontSize={"14px"} color={"#5C5C5C"}>
            {" "}
            Please select your preffered payment gateway to complete your transaction{" "}
          </Text>
          <Box my={10}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<RiSearch2Line color="#7391C8" />}
              />
              <Input
                bgColor={"whitesmoke"}
                type="text"
                placeholder="e.g stripe"
              />
            </InputGroup>
            <Box my={7} opacity={ clicked ? 0.3 : 1 } pointerEvents={ clicked ? "none" : "all"}>
              <PaymentGateway
                name="Paystack"
                providerKey="PST"
                img="pst.jpg"
                clickHandler={setClicked}
              />
              <PaymentGateway
                name="Flutterwave"
                providerKey="FLW"
                img="flw.png"
                clickHandler={setClicked}
              />
              <PaymentGateway
                name="Flutterwave"
                providerKey="KRP"
                img="KRP.webp"
                clickHandler={setClicked}
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    );
  }

  interface IPG {
    name: string;
    providerKey: string;
    img: string;
    clickHandler: Function
  }
  
  function PaymentGateway({ name, providerKey, img, clickHandler }: IPG) {

    const [id, ref, host] = useCheckoutPayload(window.location.href);
  
    async function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      clickHandler( true )
      const res = await axios.get(
        `https://api.checkoutonce.com/checkout?provider=${providerKey}&id=${id}`
      );
  
      const checkoutDetails = res.data;
  
      window.location.replace(checkoutDetails.provider_url);
    }

    return (
      <HStack my={5} onClick={handleClick} cursor="pointer">
        <Image src={img} borderRadius={"10px"} width="40px" />
        <Text>{name}</Text>
      </HStack>
    );
  }