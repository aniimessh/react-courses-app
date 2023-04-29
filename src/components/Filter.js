import React from 'react'

function Filter({filterData, category, setCategory}) {
  function filterhandler(title){
    setCategory(title);
  }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {filterData.map((data)=>{
            return <button onClick={() => filterhandler(data.title)} key={data.id} className={`text-lg border-2 px-2 py-1 rounded-md font-semibold text-white bg-black hover:opacity-50 transition-all duration-300
            ${category === data.title ? ("bg-opacity-60 border-white") : ("bg-opacity-40  border-transparent")}`} >{data.title}</button>
        })}
    </div>
  )
}

export default Filter