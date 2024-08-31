// import './App.css';
// import AboutAndContact from './Pages/AboutUs';

// function App() {

//   return (
//     <>
//       <AboutAndContact/>
//     </>
//   )
// }

// export default App


// import { ChakraProvider } from '@chakra-ui/react';
// import AboutAndContact from './AboutAndContact';

// function App() {
//   return (
//     <ChakraProvider>
//       <AboutAndContact />
//     </ChakraProvider>
//   );
// }

// export default App;


// src/App.jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AboutAndContact from './Pages/AboutUs';
function App() {
  return (
    <ChakraProvider>
      <AboutAndContact />
    </ChakraProvider>
  );
}

export default App;