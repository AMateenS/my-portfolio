import './App.css'
import './index.css'
import Home from './pages/Home.jsx';
import Header from './component/Header.jsx';
import Page1 from './pages/Page2.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Project from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';




function App() {
  return (
    
    <>
    <Header/>
      <Home/>
      <Page1/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
