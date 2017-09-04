import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';
import moment from 'moment';

const Chart = ({hourly,type}) =>{
  const configData = ()=>{
     const data= hourly.data.filter((v,i)=>i%2===0&&i<=8).map(val => {
      let time = moment.unix(val.time).format("HH");
      time = time<=12? time+"am" : time-12+"pm";
      return {time:time,[type]:val[type]};
      })
    return data;
  }

  const strokeColor = () => {
    if(type=="precipProbability") return '#8884d8';
    const data = configData();
    const total = data.reduce((acc,data) => {
      acc+=data.temperature;
      return acc;
    },0);
    const hours = data.length;
    return tempertatureColor(total/hours,"chart");
  };

  const tempertatureColor = (input,type) => {
      let color;
        if(input<30) color = '#00495A';
        else if(input<50) color ='#037172';
        else if(input<60) color ='#F3C87A';
        else if(input<70) color ='#F19969';
        else if(input<80) color ='#FF6700';
        else if(input<90) color ='#CC2200';
        else color = '#860102';
      return color;
  }

  	return (
    	<LineChart width={310} height={300} data={configData()}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey={type} stroke={strokeColor()} activeDot={{r: 8}}/>
      </LineChart>
    );
}

export default Chart;
