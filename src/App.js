import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useLocation } from 'react-router-dom';
import { Inicio } from './components/inicio';

function App() {

const Home = () => {
  return (
    
    <div className="App">
      <NavBar />
      <Inicio />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
const render = <Home/>;

  return (
    // {render}
    <Home/>
  );
}

export default App;
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, useLocation, Routes } from 'react-router-dom';
// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

// function App() {
//   const Home = () => {
//     return (
//       <div className="App">
//         <NavBar />
//         <Banner />
//         <Skills />
//         <Projects />
//         <Contact />
//         <Footer />
//       </div>
//     );
//   }

//   const RenderComponent = () => {
//     const location = useLocation();
//     const { pathname } = location;

//     // if (pathname === "/") {
//       // return <Home />;
//       console.log(pathname);
//     // } else {
//       // return <Home />;
//       console.log("pathname");

//     }
  
//     // const location = useLocation();
//     // const { pathname } = location;

//     //   console.log(location);
//     //   console.log("pathname");

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home/>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
