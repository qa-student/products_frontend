import logo from './logo.svg';
import horse from './Horse-Shoe.png';
import './App.css';
import ProductsApp from './Products';
import ProductVersion from './ProductVersion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={horse} alt="horse" />
        <h1>
          Sample Frontend Application
        </h1>
      </header>
      <ProductVersion />
      <ProductsApp />
    </div>
  );
}

export default App;
