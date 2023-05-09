import React from 'react'
import { BiTrash } from 'react-icons/bi'
// import 'boxicons'

const transactions = [
    {
        name: "Savings",
        color: '#f9c74f',
    },
    {
        name: "Investments",
        color: '#f9c74f',
    },
    {
        name: "Expenses",
        color: '#f9c74f',
    }
]

const List = () => {
  return (
    <div className="flex flex-col py-6 gap-3">
        <h1 className="py-4 font-bold text-xl">History</h1>
        { transactions.map((val, index) => <Transction key={index} category={val}></Transction>) }
    </div>
  )
}

function Transction({ category }) {
    if(!category) return null
    return(
        <div 
            className="item flex justify-center bg-gray-50 py-2 rounded-r" 
            style={{borderRight: `8px solid ${category.color ?? '#e5e5e5'}`}}
        >
            {/* <button className='px-3'><box-icon nam="trash" size="15px" color={category.color ?? '#e5e5e5'}></box-icon></button> */}
            <button className="px-3"><BiTrash color={category.color ?? '#e5e5e5'} /></button>
            <span className='block w-full'>{category.name ?? ''}</span>
        </div>
    )
}

export default List