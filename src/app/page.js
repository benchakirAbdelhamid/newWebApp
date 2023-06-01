"use client";
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/Home"
import CardPage1 from "./pages/CardPage1"
import CardPage2 from "./pages/CardPage2"
import Section3 from "./pages/Section3"
import Footer from "./components/footer/Footer"
import CardPage3 from "./pages/CardPage3"
import CardPage4 from "./pages/CardPage4"
import Section1 from "./pages/Section1"
import Section2 from "./pages/Section2"

export default function Home() {
  return (
 <div>

  <Navbar/>
  <HomePage/>
  <CardPage1/>
  <CardPage2/>
  <Section1/>
  <CardPage3/>
  <Section2/>
  <CardPage4/>
  <Section3/>
  <Footer/>
    
 </div>
  )
}
