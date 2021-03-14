import './App.css';
import Board from './components/BoardComponent';
import Footer from './components/layout/FooterComponent';
import NavBar from './components/layout/NavComponent';

function App() {
  return (
   <div className = "app">
     <NavBar></NavBar>
     <Board></Board>
     <Footer></Footer>
   </div>
  );
}
export default App;
