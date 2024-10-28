import axios from "axios";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CirclesWithBar} from 'react-loader-spinner'



const Phone = () => {

    const [allPhones, setAllPhones] = useState([]);
    const [time, setTime] = useState(true);

    useEffect(()=>{
        axios.get("./phones.json")
        .then (data=> {
            setTimeout(()=>{
                setAllPhones(data.data)
                setTime(false)

            },2000)
        })
    }, [])


    return (
        <div className="mb-20">
            
            {
                time?<div className=" flex justify-center">
                <CirclesWithBar
                  height="100"
                  width="100"
                  color="#4fa94d"
                  outerCircleColor="#4fa94d"
                  innerCircleColor="#4fa94d"
                  barColor="#4fa94d"
                  ariaLabel="circles-with-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  />
            </div>:
             <div className="">
                        <LineChart
                   width={1600}
                   height={400}
                   data={allPhones}
                   margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                   }}
                 >
                   <CartesianGrid strokeDasharray="1 1" />
                   <XAxis dataKey="name" />
                   <YAxis />
                   <Tooltip />
                   <Legend />
                   <Line type="monotone" dataKey="bdprice" stroke="red"  />
                   <Line type="monotone" dataKey="indian_price" stroke="green" />
                 </LineChart> 
             </div> 
            }
            
               
        </div>
    );
};

export default Phone;