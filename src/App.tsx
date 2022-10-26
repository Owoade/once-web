import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {RiSearch2Line} from "react-icons/ri"
import {
  Box,
  Text,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Heading,
  InputGroup,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";
import Logo from "./components/Logo";
import useCheckoutPayload from "./hooks/useCheckoutPayload";
import axios from "axios";

function App() {
  return (
    <div className="App" style={{ borderTop: "9px solid #7391C8"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Info() {
  const navigate = useNavigate();
  const [ id, ref, host ] = useCheckoutPayload( window.location.href );
  console.log( id, ref, host );
  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
 
  async function handleSubmit( e: React.FormEvent<HTMLFormElement> ){
    e.preventDefault();
    if( id === "" ) return alert("Invalid URL")
    const data = {
      id,
      update:{
        name,
        email
      }
    }

    console.log( data )


    const res = await axios.patch("https://once-api.herokuapp.com/update-transaction", data)
    const serverRes = res.data;

    if( serverRes.message === "successfull" ){
      navigate(`/checkout?${id}==${ref}`)
    }
  }

  return (
    <Box width={{ sm: "500px", base: "90%" }} margin="0 auto" py={5}>
      <Box textAlign={"center"}>
        <Logo />
        <Text textAlign={"center"} my={3}>
          {" "}
          Checkout from{" "}
          <chakra.span color="blue" fontWeight={"extrabold"}>
            { host }
          </chakra.span>
        </Text>
        <Text fontSize={"14px"} color={"#5C5C5C"}>
          {" "}
          Please provide your details to proceed{" "}
        </Text>
        <Box my={10}>
          <form onSubmit={ handleSubmit }>
            <FormControl my={3}>
              <FormLabel fontSize={"13px"} fontWeight="extrabold">
                Email address
              </FormLabel>
              <Input onChange={ (e)=> setEmail( e.target.value )} value={email} required type="email" placeholder="owoade@once.checkout" />
            </FormControl>
            <FormControl my={3}>
              <FormLabel fontSize={"13px"} fontWeight="extrabold">
                Full Name
              </FormLabel>
              <Input required type="text" value={name} onChange={ (e)=> setName(e.target.value)} placeholder="Owoade Anuoluwapo" />
            </FormControl>
            <Button type="submit" width="100%" my={6} bgColor={"#52688F"} color="white">
              Proceed
            </Button>
          </form>
        </Box>
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



function Checkout() {
  return (

    <Box width={{ sm: "500px", base: "90%" }} margin="0 auto" py={5}>
      <Box textAlign={"center"}>
        <Logo />
        <Text textAlign={"center"} my={3}>
          {" "}
          Checkout from{" "}
          <chakra.span color="blue" fontWeight={"extrabold"}>
            localhost
          </chakra.span>
        </Text>
        <Text fontSize={"14px"} color={"#5C5C5C"}>
          {" "}
          Please your preffered payment gateway to complete your transaction{" "}
        </Text>
        <Box my={10}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<RiSearch2Line color="#7391C8" />}
            />
            <Input bgColor={"whitesmoke"} type="text" placeholder="e.g stripe" />
          </InputGroup>
          <Box my={7}>
           <PaymentGateway name="Paystack" providerKey="PST" img="pst.jpg" />
           <PaymentGateway name="Flutterwave" providerKey="FLW" img="flw.png" />
           
          </Box>
        </Box>
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
function Done() {
  return (
    <Box width={{ sm: "500px", base: "90%" }} margin="0 auto" py={5}>
      <Box textAlign={"center"}>
       <Image src="done.png" />
       <Heading as="h2" fontFamily={""}>Transaction Confirmed</Heading>
       <Text  my={6}> Thank you { <Logo size="16px" /> } again for using our checkout portal</Text>
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
interface IPG{
  name: string;
  providerKey: string;
  img: string;
}
function PaymentGateway( { name, providerKey, img }: IPG ){
  const [ id, ref, host ] = useCheckoutPayload( window.location.href );
  async function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    const res = await axios.get(`https://once-api.herokuapp.com/checkout?provider=${providerKey}&id=${id}`);

    const checkoutDetails = res.data

    window.location.replace( checkoutDetails.provider_url )
  }
  return(
    <HStack my={5} onClick={ handleClick }>
    <Image src={img} borderRadius={"10px"}  width="40px"/>
    <Text>{ name }</Text>
  </HStack>
  )
}

export default App;
