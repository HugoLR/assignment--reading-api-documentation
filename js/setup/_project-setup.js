function QuestionSet(obj){
  this.fullTitle = obj.fullTitle || ''
  this.shortTitle = obj.shortTitle || ''
  this.questions = obj.questions || []
}

QuestionSet.prototype.generateQuestionTemplate = function(){
  return `
  <section>
    <h2 class="title ${this.shortTitle}-theme">${this.fullTitle}</h2>
    ${this.questions.map((q, i)=>{ return `
        <div class="question-set">
          <div class="q-number ${this.shortTitle}-theme">${i+1}</div>
          <p>${q}</p>
          <span class="q-answer" id="${this.shortTitle}-${i+1}"></span>
        </div>
    `}).join('')}
  </section>
  `
}



const nhtsaObj = {
  fullTitle: 'National Highway Transit Safety Administration API',
  shortTitle: 'nhtsa',
  questions: [
    'How many total car makes are registered with the NHTSA?',
    'How many types of Chevrolet models are registered with the NHTSA?',
    'What are the vehicle types that Nissan has?',
    'What are the types of models that exist for Toyota trucks in 2017?'
  ]
}

const tvMazeObj = {
  fullTitle: 'TVMaze API',
  shortTitle: 'tvmaze',
  questions: [
    'What is the score for the show Narcos?',
    'How many episodes have been made for The Simpsons',
    'When was the premiere date for the 9th season of Friends?',
    'How many shows has actor Andrew Lincoln (of the Walking Dead) appeared in?',

  ]
}


const nthsaSet = new QuestionSet(nhtsaObj)
const tvMazeSet  = new QuestionSet(tvMazeObj)


document.querySelector('main')
  .innerHTML = `
    ${nthsaSet.generateQuestionTemplate()}
    ${tvMazeSet.generateQuestionTemplate()}
  `
/*

  ##### National Highway Transit Safety Administration
  https://vpic.nhtsa.dot.gov/api/

  1. How many types of Chevrolet models are registered with the NHTSA?

  2. What are the vehicle types that Nissan has?

  3. What are the types of models that exist for Toyota trucks in 2017?


  ##### TV Maze
  https://www.tvmaze.com/ap

  1. What is the average rating for the show Better Call Saul?

  2. When was the premiere date for the 9th season of Friends?

  3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?


  ##### Geocoding
  1. What are latitude longitude coordinates of Montreal?
    - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

  2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
    - https://sunrise-sunset.org/api

  3. What is the weekly weather forecast in Montreal?
    - https://darksky.net/dev
    - Note: You will have to create an account.



*/
