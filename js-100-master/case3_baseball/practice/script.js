;(() => {
  'use strict'
  const get = (target) => document.querySelector(target)

  const init = () => {
    get('form').addEventListener('submit',(event)=>{
      playGame(event)
    })
    setPassword()
  }

  const baseball = {
    limit :10,
    digit : 4,
    trial : 0 ,
    end : false,
    $question : get('.ball_question'),
    $answer : get('.ball_answer'),
    $input : get('.ball_input'),
  } 
})()
