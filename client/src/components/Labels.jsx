import React from 'react'

const labels = [
    {
        type: "Savings",
        color: '#f9c74f',
        percent: 45
    },
    {
        type: "Investments",
        color: '#f9c74f',
        percent: 20
    },
    {
        type: "Expenses",
        color: '#f9c74f',
        percent: 10
    }
]

function LabelComponent({data}) {
    if(!data) return <></>
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{background: data.color ?? '#f9c74f'}}></div>
                <h3>{data.type ?? ''}</h3>
            </div>
            <h3 className='font-bold'>{data.percent ?? 0}%</h3>
        </div>
    )
} 

const Labels = () => {
  return (
    <>
        {labels.map((val, index) => <LabelComponent key={index} data={val}></LabelComponent>)}
    </>
  )
}

export default Labels