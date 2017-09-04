import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';
import moment from 'moment'

const SimpleLineChart = ({hourly,type}) =>{
  const configData = ()=>{
     const data= hourly.data.filter((v,i)=>i%2===0&&i<=8).map(val => {
      let time = moment.unix(val.time).format("HH")
      time = time<=12? time+"am" : time-12+"pm"
      return {time:time,[type]:val[type]}
      })
    console.log(data);
    return data
  }
  	return (
    	<LineChart width={310} height={300} data={configData()}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey={type} stroke={type=="temperature"?'#ff1100':'#8884d8'} activeDot={{r: 8}}/>
      </LineChart>
    );
}

export default SimpleLineChart
