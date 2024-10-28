
import PropTypes from "prop-types";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Cards = ({cardData}) => {
  

    return (
        <div className="grid mb-12 grid-cols-1 md:grid-cols-3 gap-12">
            {
                cardData.map(carditem=>{
                    const {id, status,price,features} = carditem;
                    return(
                        <div key={id} className="border-2 flex flex-col p-4 rounded-xl bg-green-100">
                         <h2 className="text-center text-3xl font-semibold mb-6">{status}</h2>
                         <p className="mb-6">
                            <span className="text-6xl font-bold text-gray-600">{price}$</span>
                            <span className="text-3xl font-medium">/month</span>
                         </p>
                         <div className="p-4 mb-12 flex-grow">
                           {
                              features.map((item, idx)=>(
                                  <p key={idx} className="text-xl mb-3 flex items-center gap-4">
                                      <span className="text-blue-600"><IoCheckmarkDoneSharp /></span> 
                                      {item}</p>
                              ))
                           }
                         </div>

                         <button className="bg-green-600 text-white font-semibold p-3 w-full rounded-xl">Buy Now</button>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

Cards.propTypes={
    cardData:PropTypes.array, 
}

export default Cards;