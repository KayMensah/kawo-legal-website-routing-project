// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Router from "./Router";
import FooterComponent from "./component/Footer";

const App = () => {
  return (
    <div>
      <Router/>
      <FooterComponent/>
    </div>
  );
}

export default App;



