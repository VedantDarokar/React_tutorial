import React from 'react'

const Filter = () => {
    const users = [
        {id :1,name : 'Vedant',active:true},
        {id :2,name : 'Superman',active:false},
        {id :3,name : 'Spiderman',active:true},
        {id :4,name : 'Batman',active:true},
        {id :5,name : 'Thor',active:false},
    ]

    const activeUser = users.filter((user)=>user.active)
    console.log(activeUser)

    
  return (
    <div>
      <ul>
        {activeUser.map((data)=><h1><li key={data.id}>{data.name}</li></h1>)}
      </ul>
    </div>  
  )
}

export default Filter
