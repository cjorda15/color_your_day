import $ from 'jquery'

const animation1 = () => {
  const $intro = $('#intro-announcement')
  $intro.addClass('rain')
  $intro.removeClass('snow')
  $intro.text("set")
}

const animation2 = () => {
  const $intro = $('#intro-announcement')
  $intro.addClass('cloudy-day')
  $intro.removeClass('rain')
  $intro.text("color")
 }

const animation3 = () => {
  $('#intro-announcement').fadeOut(500)
 }

const runAnimation = () => {

  setTimeout(()=>{animation1()},750)
  setTimeout(()=>{animation2()},1500)
  setTimeout(()=>{animation3()},2250)
}

$(document).ready(runAnimation())
