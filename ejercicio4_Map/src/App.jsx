import './App.css'
import Card from './components/Card'

const products = [
  { id: 1, name: "Laptop", price: "$1200" },
  { id: 2, name: "Mouse", price: "$25" },
  { id: 3, name: "Teclado", price: "$50" }
];

function App() {
  return (
    <div className='container'>
      <div className="row">
        {products.map((product) => (
          <Card
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default App
