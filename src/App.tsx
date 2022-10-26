import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
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
import Info from "./pages/Info";
import Checkout from "./pages/Checkout";
import Done from "./pages/Done";
import BadRequest from "./pages/BadRequest";

function App() {
  
  const payload = useCheckoutPayload(window.location.href);

  if (payload.some((each) => !Boolean(each) )) {
    return (
      <div className="App" style={{ borderTop: "9px solid #7391C8" }}>
        <BadRequest />
      </div>
    );
  }

  return (
    <div className="App" style={{ borderTop: "9px solid #7391C8" }}>
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





export default App;
