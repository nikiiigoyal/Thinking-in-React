// App.jsx
import './App.css';
import FilterProductsTable from './components/FilterProductsTable'; // Change to named import
import Products from './components/Products';

function App() {
  return (
    <>
      <div>
        <FilterProductsTable products={Products} />
      </div>
    </>
  );
}

export default App;
