import Cards from "./components/cards/Cards"
import Navbar from "./components/NavBar/Navbar"
import cards from "./components/cards/CardData"
import Charts1 from "./components/Charts/Charts1";
import Phone from "./components/phones/Phone";


function App() {
   const cardData = cards;
   
  return (
    <>
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Cards cardData={cardData}></Cards>
      <Charts1></Charts1>
      <div className="p-4 border-b-2 mb-4">
              <h1 className="text-3xl font-semibold text-center">Price Compare</h1>
      </div>
      <Phone></Phone>
    </div>  
    </>
  )
}

export default App
