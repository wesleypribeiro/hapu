import './App.css';
import Main from './components/Main';
import FirstBlock from './components/FirstBlock';
import SecondBlock from './components/SecondBlock';
import ThirdBlock from './components/ThirdBlock'
import FourthBlock from './components/FourthBlock';
import FifthBlock from './components/FifthBlock';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Main />
        <FirstBlock />
        <hr />
        <SecondBlock />
        <hr />
        <ThirdBlock />
        <hr />
        <FourthBlock />
        <hr />
        <FifthBlock />
        <Footer />
    </div>
  );
}

export default App;
