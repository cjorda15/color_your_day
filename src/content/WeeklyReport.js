import React from 'react'
import moment from 'moment'

const WeeklyReport = ({summary,icon,temperatureMin,temperatureMax,time}) => {
  const date = new Date(time*100);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();

  const currentTime = () => {
    return moment.unix(time).format("MM/DD/YYYY");
  }

  const backgroundClass = () => {
    if((hours>20||hours<5) && (!(icon=='clear-night'||icon=='partly-cloudy-night'))){
      return "clear-night"
    }else{
      return icon
    }
  }

  const backgroundColor = (input) => {
    let color;
      if(input<30) color = '#00495A';
      else if(input<50) color ='#037172';
      else if(input<60) color ='#F3C87A';
      else if(input<70) color ='#F19969';
      else if(input<80) color ='#FF6700';
      else if(input<90) color ='#CC2200';
      else color = '#860102'
    return {color:color}
  }

  return (
    <section className={`weekly-report weather ${icon}`}>
      <p className="weekly-report-time">{currentTime()}</p>
      <p className="weekly-report-temp">
        <span style={backgroundColor(temperatureMax)}>{temperatureMax}°</span>/
        <span style={backgroundColor(temperatureMin)}>{temperatureMin}°</span>
      </p>
    </section>
  )
}

export default WeeklyReport
