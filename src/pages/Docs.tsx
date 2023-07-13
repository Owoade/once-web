import {
  Box,
  Button,
  Heading,
  HStack,
  chakra,
  Text,
  Image,
  Code,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Wrapper from "../components/Wrapper";

type Props = {};

const char = {
  openBra: `{`,
  closeBra: `}`,
  arrow: `=>`,
  lt: "<",
  gt: ">",
};

function Docs({}: Props) {
  const codeSnippet = {
    const: "#9e69b9",
    bracket: "#fbbc11",
    variableName: "whitesmoke",
    property: "#d9655c",
    function: "#5292ca",
    string: "#92be76",
  };

  const navigate = useNavigate();

  return (
    <Box overflowX={"hidden"}>
      <Wrapper>
        <HStack my={3} justifyContent="space-between" width="100%">
          <Logo />
          <Button
            as={"a"}
            target="_blank"
            href="https://demo.checkoutonce.com/"
            bgColor={"#52688F"}
            color="white"
            border={"1px solid #7391C8"}
            _hover={{ backgroundColor: "#7391C8", color: "white" }}
            margin="0 auto"
            display={"block"}
          >
            <span style={{ transform: "translateY(.5em)", display: "block" }}>
              Live Demo 🔗
            </span>
          </Button>
        </HStack>
        <Heading
          width={{ sm: "600px", base: "100%" }}
          margin="1.5em auto 0 auto"
          textAlign="center"
          as="h2"
          fontFamily={""}
          size="2xl"
        >
          Transaction <chakra.span color="#7391C8"> checkout </chakra.span> made
          easier
        </Heading>
        <Text
          textAlign={"center"}
          my={5}
          width={{ sm: "700px", base: "100%" }}
          mx="auto"
        >
          A powerful tool that allows developers to simulate a
          transaction checkout experience with multiple payment gateways, all
          without the need to <strong> create a REST API</strong> or <strong>integrate with actual payment </strong>
           gateways. It provides a convenient way to test and debug payment flows
          during the development process.
        </Text>
        <a href="#vjs-sdk">
          <Button
            bgColor={"#52688F"}
            color="white"
            _hover={{ backgroundColor: "#7391C8" }}
            margin="0 auto"
            display={{ xs: "block", base: "none" }}
          >
            Get Started 🚀
          </Button>
        </a>
        <HStack my={8} width="fit-content" mx="auto">
          <Text>Currently Integrated with </Text>
          <Image borderRadius={"8px"} src="flw.png" width="30px" />
          <Image borderRadius={"8px"} src="pst.jpg" width="30px" />
          <Image borderRadius={"8px"} src="KRP.webp" width="30px" />
        </HStack>
        <Text id="vjs-sdk" my={3}>
          Integration with <strong>Vanilla Js</strong> websites
        </Text>
        <Box
          fontSize={{ sm: "16px", xs: "14px", base: "10px" }}
          width="100%"
          padding="1em"
          borderRadius={"10px"}
          bgColor={"#171c2a"}
          color="white"
        >
          <Text>
            {" "}
            {char.lt}
            <chakra.span color={codeSnippet.property}>script</chakra.span>{" "}
            <chakra.span color={codeSnippet.bracket}>src</chakra.span>=
            <chakra.span color={codeSnippet.string}>
              "https://cdn.socket.io/4.5.3/socket.io.min.js"
            </chakra.span>{" "}
            /{char.gt}{" "}
          </Text>
          <Text>
            {" "}
            {char.lt}
            <chakra.span color={codeSnippet.property}>script</chakra.span>{" "}
            <chakra.span color={codeSnippet.bracket}>src</chakra.span>=
            <chakra.span color={codeSnippet.string}>
              "https://cdn.checkoutonce.com/build/sdk.js"
            </chakra.span>{" "}
            /{char.gt}{" "}
          </Text>
          <Text>
            {" "}
            {char.lt}
            <chakra.span color={codeSnippet.property}>script</chakra.span>
            {char.gt}
          </Text>
          <pre>
            <Text>
              {" "}
              <chakra.span color={codeSnippet.const}> const </chakra.span>{" "}
              <chakra.span color={codeSnippet.variableName}>once</chakra.span> ={" "}
              <chakra.span color={codeSnippet.const}>new</chakra.span>{" "}
              <chakra.span color={codeSnippet.bracket}>Once</chakra.span>(
              <chakra.span>
                {char.openBra} <br />
              </chakra.span>
              <pre>
                {" "}
                <chakra.span color={codeSnippet.property}>
                  amount
                </chakra.span>:{" "}
                <chakra.span color={codeSnippet.bracket}>3000</chakra.span>,{" "}
              </pre>
              <pre>
                {" "}
                <chakra.span
                  fontWeight={"extrabold"}
                  color={codeSnippet.function}
                >
                  successCallback
                </chakra.span>
                : <chakra.span color={codeSnippet.const}>()</chakra.span>{" "}
                {char.arrow} console.
                <chakra.span color={codeSnippet.function}>log</chakra.span>
                <chakra.span color={codeSnippet.const}>(</chakra.span>
                <chakra.span color={codeSnippet.string}>
                  "Transaction succesfull"
                </chakra.span>
                <chakra.span color={codeSnippet.const}>)</chakra.span>{" "}
              </pre>
              <pre> {char.closeBra}) </pre>
            </Text>
          </pre>
          <Text transform="translateX(.8em)">
            once.
            <chakra.span color={codeSnippet.function}>checkout</chakra.span>
            <chakra.span color={codeSnippet.const}>()</chakra.span>
          </Text>
          <Text>
            {char.lt}/
            <chakra.span color={codeSnippet.property}>script</chakra.span>
            {char.gt}
          </Text>
        </Box>
        <Text m={"3em 0 1em 0"}>
          Integration with <strong>React</strong>, first you need to install the
          npm package by running <Code>npm i checkout-once</Code>
        </Text>
        <Box
          fontSize={{ sm: "16px", xs: "14px", base: "10px" }}
          mb="2em"
          width="100%"
          padding="1em"
          borderRadius={"10px"}
          bgColor={"#171c2a"}
          color="white"
        >
          <Box>
            <Text>
              {" "}
              <chakra.span color={codeSnippet.const}>import</chakra.span>{" "}
              <chakra.span color={codeSnippet.property}>Once</chakra.span>{" "}
              <chakra.span color={codeSnippet.const}>from</chakra.span>{" "}
              <chakra.span color={codeSnippet.string}>
                "checkout-once"
              </chakra.span>
              ;{" "}
            </Text>{" "}
            <br />
            <pre>
              <Text>
                <chakra.span color={codeSnippet.const}>const </chakra.span>{" "}
                <chakra.span color={codeSnippet.variableName}>once</chakra.span>{" "}
                = <chakra.span color={codeSnippet.const}>new</chakra.span>{" "}
                <chakra.span color={codeSnippet.bracket}>Once</chakra.span>(
                <chakra.span>
                  {char.openBra} <br />
                </chakra.span>
                <pre>
                  {" "}
                  <chakra.span color={codeSnippet.property}>amount</chakra.span>
                  : <chakra.span color={codeSnippet.bracket}>3000</chakra.span>,{" "}
                </pre>
                <pre>
                  {" "}
                  <chakra.span
                    fontWeight={"extrabold"}
                    color={codeSnippet.function}
                  >
                    successCallback
                  </chakra.span>
                  : <chakra.span color={codeSnippet.const}>()</chakra.span>{" "}
                  {char.arrow} console.
                  <chakra.span color={codeSnippet.function}>log</chakra.span>
                  <chakra.span color={codeSnippet.const}>(</chakra.span>
                  <chakra.span color={codeSnippet.string}>
                    "Transaction succesfull"
                  </chakra.span>
                  <chakra.span color={codeSnippet.const}>)</chakra.span>{" "}
                </pre>
                <pre>{char.closeBra}) </pre>
              </Text>
            </pre>{" "}
            <br />
            <Text>
              once.
              <chakra.span color={codeSnippet.function}>checkout</chakra.span>
              <chakra.span color={codeSnippet.const}>()</chakra.span>;
            </Text>
          </Box>
        </Box>

        <Text mb={2}>
          {" "}
          <strong>amount:</strong> This is the amount you intend to charge for
          the transaction and must be passed as an integer in kobo.
        </Text>
        <Text>
          {" "}
          <strong>successCallback:</strong> This method will be called(in
          real-time) when the initiated transaction is successfull.
        </Text>

        <Footer />
      </Wrapper>
    </Box>
  );
}

export default Docs;
