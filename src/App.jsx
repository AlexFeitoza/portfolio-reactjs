/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */



import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
    <>
        <Header />
        <main>
            <Hero />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </main>
    </>
    )  
}

export default App