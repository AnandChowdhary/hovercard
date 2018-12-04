import './css/App.css';
import Lib from './../lib';

class App {
  constructor(){
    new Lib({
      lang: "en",
      link: "wikipedia"
    });
  }
}

export default App;
