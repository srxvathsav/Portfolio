import 'bootstrap/dist/css/bootstrap.css';
import ReactFullpage from "@fullpage/react-fullpage";
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import "./App.css"
import Contact from './Components/Contact';

function App() {
  const anchors = ["Home", "About", "Projects", "Contact", ""];
  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      navigate
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi);
        return (
          <div>
            <div id='home' className="section">
              <Home fullpageApi={fullpageApi} />
            </div>
            <div id='about' className="section">
              <About />
            </div>
            <div className="section">
              <Projects />
            </div>
            <div className="section">
              <Contact />
            </div>
            <div className="section">
              <Footer />
            </div>
          </div>
        );
      }}
    />
  );
}

export default App;
