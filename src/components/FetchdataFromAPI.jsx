import React, { useEffect, useState } from 'react'

const FetchdataFromAPI = () => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await api.json()
      setApiData(data)
      console.log('Data is coming = ', data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Fetch Data From API</h2>
      {apiData.map((data) => (
        <div key={data.id} style={{textAlign:'center', backgroundColor:'blueviolet', padding:"10px", margin:"20px"}}>
          <h3>{data.name}</h3>
          <p>Email: {data.email}</p>
          <p>userName: {data.username}</p>
        </div>
      ))}
    </div>
  )
}

export default FetchdataFromAPI
