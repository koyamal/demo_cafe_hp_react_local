import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";


export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        Hello World
      </BrowserRouter>
    </ChakraProvider>
  );
}