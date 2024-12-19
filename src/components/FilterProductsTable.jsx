// In FilterProductsTable.jsx

import { useState } from 'react';
import ProductTable from './ProductTable.jsx'; // Explicitly add .jsx if needed
import SearchBar from './SearchBar.jsx';

function FilterProductsTable({ products }) {
  const [filteredText, setFilteredText] = useState('');
  const [inStock, setInStock] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filteredText}
        inStock={inStock}
        onFilterTextChange={setFilteredText}
        onInStockOnlyChange={setInStock}
      />
      <ProductTable
        products={products}
        filterText={filteredText}
        inStock={inStock}
      />
    </div>
  );
}

export default FilterProductsTable;
