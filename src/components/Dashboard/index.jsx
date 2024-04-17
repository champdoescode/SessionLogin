import React, { useEffect, useState } from 'react'
import './dashboard.css'

const Dashboard = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const items = JSON.parse(sessionStorage.getItem('userInfo'));
      if (items) {
       setItems(items);
      }
    }, []);
    const removeItem = (id) => {
        const oldItems = [...items];
        oldItems.splice(id, 1);
        setItems(oldItems);
    };
    
    
  return (
    <div>
        <div className='text-center text-5xl mb-16'>Dashboard</div>
            <>
            <div className="data flex justify-center" >
                <table className='w-9/12 border  rounded border-black shadow-xl'>
                    <thead className=' bg-zinc-300'>

                        <tr>
                            <th className=''>Sr. No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Address</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
            
                {
                    items.map((item,i) => 
                        {
                            return(
                                    <tbody>

                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{item.Name}</td>
                                            <td>{item.Email}</td>
                                            <td>{item.Number}</td>
                                            <td>{item.Address}</td>
                                            <td>
                                                <button className='bg-red-500 px-4 py-1 rounded text-white hover:bg-red-700 mr-4'>Update</button>
                                                <button className='bg-red-500 px-4 py-1 rounded text-white hover:bg-red-700' onClick={() => removeItem(i)}>remove</button></td>
                                        </tr>
                                    </tbody>
                            );
                        }
                    )
                }
            </table>
            </div>
                
            </>
    </div>
  )
}

export default Dashboard