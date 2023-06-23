import './App.css'
import Card from './Components/Card'
import { card1, card2 } from './Data/data'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Card {...card1}>{<img src={card1.src} className="card-img-top" alt="..." />}</Card>
      <Card {...card2} />
    </>
  )
}

export default App
