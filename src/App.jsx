import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects";
import {Helmet} from 'react-helmet';


function App() {

  return (
  <div>   
  
  <Helmet>
    <meta charSet="utf-8" />
    <title>Hizbullah - Portfolio</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default App
