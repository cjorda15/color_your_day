import $ from 'jquery'

const animation1 = () => {
  const $intro = $('#intro-announcement')
  $intro.addClass('rain')
  $intro.removeClass('snow')
  $intro.text("2")
  setTimeout(()=>{animation2()},1000)
}

const animation2 = () => {
  const $intro = $('#intro-announcement')
  $intro.removeClass('rain')
  $intro.text("1")
  setTimeout(()=>{animation3()},1000)
 }

const animation3 = () => {
  $('#intro-announcement').fadeOut(500)
 }

const runAnimation = () => {
  setTimeout(()=>{animation1()},1000)
}

$(document).ready(runAnimation())
