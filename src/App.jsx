import { useState } from 'react'

import DataDisplay from './Component/DataDisplay';



const App=()=>{
  
  const [data,setData]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const[error, setError]=useState(null)


  const fetchData=async()=>{
    setIsLoading(true)

    try{
      const resp=await fetch('https://jsonplaceholder.typicode.com/posts');

      console.log(resp);
      if(!resp.ok){
        throw new Error('Network requset failed')
      }
      const result= await resp.json()
      console.log(result);
      setData(result)
    
    }catch(result){
      setError('Error fetching data')
    }finally{
      setIsLoading(false)
    }
  }

  return(
    <>
    <DataDisplay data={data}/>
    <div>
      <h1>React Data Fetching App</h1>
      <button onClick={fetchData} disabled={isLoading}>
      {isLoading ? 'Loading..':"Fetch Data"}
      </button>
      {error && <p>Error:{error}</p>}
    </div>
    </>
  )

}
export default App;