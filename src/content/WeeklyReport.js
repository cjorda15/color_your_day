import React from 'react'
import moment from 'moment'

const WeeklyReport = ({summary,icon,temperatureMin,temperatureMax,time,tempertatureHourly}) => {
  const date = new Date(time*1000);
  let hours = date.getHours();
  const currentTime = () => {
  return  tempertatureHourly?
          moment.unix(time).format("HH:mm")
            :
          moment.unix(time).format("MM/DD/YYYY");
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

  const temperatureReading = () => {
    if(tempertatureHourly){
      return (<span className="daily-temperature-reading"
              style={backgroundColor(tempertatureHourly)}>
              {tempertatureHourly}°
            </span>
          )
    }else{
      return(
        <div className="daily-temperature-reading">
          <span style={backgroundColor(temperatureMax)}>{temperatureMax}°</span>/
          <span style={backgroundColor(temperatureMin)}>{temperatureMin}°</span>
        </div>
      )
    }
  }

  return (
    <section className={`weekly-report weather ${icon}`}>
      <div className="weekly-report-time">{currentTime()}</div>
      <div className="weekly-report-temp">
        {temperatureReading()}
      </div>
    </section>
  )
}

export default WeeklyReport
