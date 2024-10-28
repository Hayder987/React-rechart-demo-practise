import { LineChart, Line, CartesianGrid,ComposedChart, XAxis, YAxis, Tooltip,Legend,Bar } from 'recharts';

const Charts1 = () => {

    const students = [
        { id: 1, name: "Alice", math: 85, physics: 90, biology: 88 },
        { id: 2, name: "Bob", math: 78, physics: 44, biology: 80 },
        { id: 3, name: "Charlie", math: 92, physics: 95, biology: 91 },
        { id: 4, name: "David", math: 70, physics: 75, biology: 72 },
        { id: 5, name: "Eva", math: 88, physics: 84, biology: 25 },
        { id: 6, name: "Frank", math: 76, physics: 70, biology: 75 },
        { id: 7, name: "Grace", math: 56, physics: 92, biology: 89 },
        { id: 8, name: "Hannah", math: 82, physics: 80, biology: 85 },
        { id: 9, name: "Ian", math: 89, physics: 91, biology: 87 },
        { id: 10, name: "Jack", math: 74, physics: 78, biology: 76 },
      ];

    return (
        <div className='mb-12'>
            <div className="p-4 flex flex-col">
                <div className="flex items-center gap-4 ">
                    <p className="">Math: </p>
                    <div className="w-4 h-4 bg-red-600 rounded-full "></div>
                </div>
                <div className="flex items-center gap-4">
                    <p className="">Physics: </p>
                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                </div>
                <div className="flex items-center gap-4">
                    <p className="">Biology: </p>
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
            </div>
            <div className="flex">
               <div className="">
               <LineChart width={800} height={400} data={students}>
                  <Line dataKey="math" stroke='red'></Line>
                  <Line dataKey="physics" stroke='green'></Line>
                  <Line dataKey="biology" stroke='blue'></Line>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip></Tooltip>
               </LineChart>
               </div>
               <div className="">
                   <ComposedChart
                     width={800}
                     height={400}
                     data={students}
                     margin={{
                       top: 20,
                       right: 20,
                       bottom: 20,
                       left: 20,
                     }}
                   >
                     <CartesianGrid stroke="#f5f5f5" />
                     <XAxis dataKey="name"  />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Bar dataKey="math" barSize={10} fill="red" />
                     <Line  dataKey="math" stroke="#ff7300" />
                     <Bar dataKey="physics" barSize={10} fill="green" />
                     <Line  dataKey="physics" stroke="green" />
                     <Bar dataKey="biology" barSize={10} fill="blue" />
                     <Line  dataKey="biology" stroke="blue" />
                   </ComposedChart>
               </div>
            </div>
            
        </div>
    );
};

export default Charts1;