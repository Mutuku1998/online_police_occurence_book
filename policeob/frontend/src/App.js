
import './App.css';
import Header from './conponents/Header';
import Footer from './conponents/UI/Footer';
import Home from './conponents/pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Home/>

      </main>
      <Footer/>
     
    </div>
  );
}

export default App;
