import './App.scss';
import TitleHeader from './components/TitleHeader/TitleHeader';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="sample-app" id="sample-app">
      <Header />
      <TitleHeader backButton="true" title="Sample App" />
    
    </div>
  );
}

export default App;
