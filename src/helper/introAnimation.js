import $ from 'jquery'

const animation1 = () => {
  const $intro = $('#intro-announcement')
  $intro.addClass('rain')
  $intro.removeClass('snow')
  $intro.text("2")
}

const animation2 = () => {
  const $intro = $('#intro-announcement')
  $intro.addClass('cloudy-day')
  $intro.removeClass('rain')
  $intro.text("1")
 }

const animation3 = () => {
  $('#intro-announcement').fadeOut(500)
 }

const runAnimation = () => {

  setTimeout(()=>{animation1()},1000)
  setTimeout(()=>{animation2()},2000)
  setTimeout(()=>{animation3()},3000)
}

$(document).ready(runAnimation())
