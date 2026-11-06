import { useState } from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { ProductData } from './components/ProductData';
import './App.css';
type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
};

function App() {
//   const [search, setSearch] = useState("")
//       function filterSearch() {
//           products.filter(filterProduct => filterProduct.title.includes(search))
//           console.log(search)
//       }

  return (
    <>
     <Header 
    //  products={products}
    //  setSearch={setSearch}
    //  filterSearch={filterSearch}
     />
     <Main/>
    </>
  )
}

export default App
