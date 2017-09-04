import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';

const SimpleLineChart = ({hourly,type}) =>{
  const configData = ()=>{
    const initialSetUp = [{name:'12am'},{name:'8am'},{name:'4pm'},{name:'12 pm'}]
    return hourly.data.filter((v,i)=>i%8===0&&i<=24).reduce((acc,val,i) => {
      acc[i][type]=val[type]
      return acc
    },initialSetUp)
  }
  	return (
    	<LineChart width={305} height={300} data={configData()}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey={type} stroke={type=="temperature"?'#ff1100':'#8884d8'} activeDot={{r: 8}}/>
      </LineChart>
    );
}

export default SimpleLineChart
