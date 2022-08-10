import "./App.scss";
import React from "react";

// Import pages and components
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Features from "./components/Features/Features";
import Story from "./components/Story/Story";
import Projects from "./components/projects/Projects";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <body class="container">
          <Sidebar />
          <Header />
          <Skills />
          <Features />
          <Story />
          <Projects />
          <Gallery />
          <Footer />
        </body>
      </div>
    );
  }
}

export default App;
