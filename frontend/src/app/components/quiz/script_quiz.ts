const questions = [
  {
    question: 'Unde locuiesti?',
    answers: [
      {text: 'Intr-un apartament in oras'},
      {text: 'Intr-o casa cu o curte mare'},
      {text: 'Intr-o casa cu o curte mica'}
    ]
  },
  {
    question: 'Cat de des esti plecat de acasa pentru perioade lungi de timp?',
    answers: [
      {text: 'Cel putin o data pe saptamana'},
      {text: '1-2 ori pe luna'},
      {text: 'De cateva ori pe an'},
      {text: 'Niciodata sau foarte rar'}
    ]
  },
  {
    question: 'Cum iti place sa iti petreci timpul liber?',
    answers: [
      {text: 'Plimbari in natura'},
      {text: 'Iesiri in oras cu prietenii'},
      {text: 'Jocuri video'}
    ]
  },
  {
    question: 'Unde iti petreci cel mai mult timpul?',
    answers: [
      {text: 'Afara'},
      {text: 'Inauntru'}
    ]
  },
  {
    question: 'Ce animal ai deja?',
    answers: [
      {text: 'Caine'},
      {text: 'Pisica'},
      {text: 'Pasare'},
      {text: 'Reptila'},
      {text: 'Niciunul'}
    ]
  },
  {
    question: 'Cat de importanta este ordinea si curatenia in casa pentru tine?',
    answers: [
      {text: 'Foarte importanta'},
      {text: 'Indiferenta'},
      {text: 'Deloc importanta'}
    ]
  },
  {
    question: 'Ce te deranjeaza cel mai mult?',
    answers: [
      {text: 'Rosul incaltamintei'},
      {text: 'Zgariatul mobilei'},
      {text: 'Parul pe canapea sau pe haine'},
      {text: 'Galagia in timpul noptii'}
    ]
  },
  {
    question: 'Pentru ce iti doresti un animalut?',
    answers: [
      {text: 'Companie'},
      {text: 'Protectie'},
      {text: 'Pentru ca sunt dragute'}
    ]
  },
  {
    question: 'Cat timp petreci zilnic acasa?',
    answers: [
      {text: 'Mai mult de 14 ore'},
      {text: 'Intre 8 si 14 ore'},
      {text: 'Mai putin de 8 ore'}
    ]
  },
  {
    question: 'Esti alergic la par de animale?',
    answers: [
      {text: 'Da'},
      {text: 'Nu'}
    ]
  }
]
//caine_mare, pasare, testoasa, pisica_par, pisica_fara_par, hamster, peste, soparla, caine_mic
const animal_score = [0, 0, 0, 0, 0, 0, 0, 0, 0]

const startButton=document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions: string | any[], currindex: number
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-button')
const progressText=document.getElementById('progressText')
const progressBarFull= document.getElementById('progressBarFull')
const progressBar= document.getElementById('progressBar')
const hideall=document.getElementById('quiz')
const results=document.getElementById('results')
const animals=document.getElementById('animal-id')
// @ts-ignore
progressText.classList.add('hide')
// @ts-ignore
progressBarFull.classList.add('hide')
// @ts-ignore
progressBar.classList.add('hide')
// @ts-ignore
results.classList.add('hide')
// @ts-ignore
animals.classList.add('hide')
// @ts-ignore
startButton.addEventListener('click', startGame)

function startGame()
{
  // @ts-ignore
  startButton.classList.add('hide')
  shuffledQuestions=questions.sort()
  currindex=0;
  // @ts-ignore
  questionContainerElement.classList.remove('hide')
  // @ts-ignore
  progressText.classList.remove('hide')
  // @ts-ignore
  progressBarFull.classList.remove('hide')
  // @ts-ignore
  progressBar.classList.remove('hide')
  setNextQuestion()
}

function selectAnswer(e: { target: any }) {
  const selectedButton = e.target
  const buttonText=selectedButton.firstChild.nodeValue
  if (buttonText=='Intr-un apartament in oras')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[3]+=1
    animal_score[4]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Intr-o casa cu o curte mare')
  {
    animal_score[0]+=1
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[3]+=1
    animal_score[4]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Intr-o casa cu o curte mica')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[3]+=1
    animal_score[4]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Cel putin o data pe saptamana')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='1-2 ori pe luna')
  {
    animal_score[8]+=1
  }
  if (buttonText=='De cateva ori pe an')
  {
    animal_score[0]+=1
  }
  if (buttonText=='Niciodata sau foarte rar')
  {
    animal_score[3]+=1
    animal_score[4]+=1
  }
  if (buttonText=='Plimbari in natura')
  {
    animal_score[0]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Iesiri in oras cu prietenii')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Jocuri video')
  {
    animal_score[3]+=1
    animal_score[4]+=1
  }
  if (buttonText=='Afara')
  {
    animal_score[0]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Inauntru')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[3]+=1
    animal_score[4]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Caine')
  {
    animal_score[0]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
    animal_score[8]+=1

  }
  if (buttonText=='Pisica')
  {
    animal_score[3]+=1
    animal_score[4]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Pasare')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Reptila')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[3]+=1
    animal_score[4]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Niciunul')
  {
    animal_score[0]+=1
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[3]+=1
    animal_score[4]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Foarte importanta')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Indiferenta')
  {
    animal_score[0]+=1
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[3]+=1
    animal_score[4]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Deloc importanta')
  {
    animal_score[8]+=1
    animal_score[0]+=1
    animal_score[3]+=1
    animal_score[4]+=1
  }
  if (buttonText=='Rosul incaltamintei')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Zgariatul mobilei')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
    animal_score[0]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Parul pe canapea sau pe haine')
  {
    animal_score[3]+=1
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Galagia in timpul noptii')
  {
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Companie')
  {
    animal_score[8]+=1
    animal_score[3]+=1
    animal_score[4]+=1
  }
  if (buttonText=='Protectie')
  {
    animal_score[0]+=1
  }
  if (buttonText=='Pentru ca sunt dragute')
  {
    animal_score[1]+=1
    animal_score[3]+=1
    animal_score[4]+=1
    animal_score[5]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Mai mult de 14 ore')
  {
    animal_score[3]+=1
    animal_score[4]+=1
  }
  if (buttonText=='Intre 8 si 14 ore')
  {
    animal_score[0]+=1
    animal_score[8]+=1
  }
  if (buttonText=='Mai putin de 8 ore')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[5]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }
  if (buttonText=='Da')
  {
    animal_score[0]=0
    animal_score[3]=0
    animal_score[8]=0
    animal_score[5]=0
  }
  if (buttonText=='Nu')
  {
    animal_score[1]+=1
    animal_score[2]+=1
    animal_score[4]+=1
    animal_score[6]+=1
    animal_score[7]+=1
  }

  if (shuffledQuestions.length > currindex + 1)
  {
    currindex++
    setNextQuestion()
  }
  else
  {
    // @ts-ignore
    questionContainerElement.classList.add('hide')
    // @ts-ignore
    progressText.classList.add('hide')
    // @ts-ignore
    progressBarFull.classList.add('hide')
    // @ts-ignore
    progressBar.classList.add('hide')
    // @ts-ignore
    questionElement.classList.add('hide')
    // @ts-ignore
    answerButtonsElement.classList.add('hide')
    // @ts-ignore
    hideall.classList.add('hide')

    const max_value=Math.max(...animal_score)
    const indexes = [];
    for (let i=0; i< animal_score.length; i++) {
      if (animal_score[i] === max_value) {
        indexes.push(i);
      }
    }

    let result_string_multiple='!QUIZ TERMINAT! Animalutele care ti se potrivesc sunt: \n'
    let result_string_solo='!QUIZ TERMINAT! Animalutul care ti se potriveste este: \n'
    let k=0
    let animal_string=''
    for (let i=0; i< indexes.length; i++){
      if(indexes[i]==0)
      {
        animal_string+='Cainele de talie mare \n'
        k+=1
      }
      if(indexes[i]==1)
      {
        animal_string+='Papagalul \n'
        k+=1
      }
      if(indexes[i]==3)
      {
        animal_string+='Testoasa \n'
        k+=1
      }
      if(indexes[i]==4)
      {
        animal_string+='Pisica cu par \n'
        k+=1
      }
      if(indexes[i]==5)
      {
        animal_string+='Pisica fara par \n'
        k+=1
      }
      if(indexes[i]==6)
      {
        animal_string+='Hamsterul \n'
        k+=1
      }
      if(indexes[i]==7)
      {
        animal_string+='Pestele \n'
        k+=1
      }
      if(indexes[i]==8)
      {
        animal_string+='Soparla \n'
        k+=1
      }
      if(indexes[i]==9)
      {
        animal_string+='Cainele de talie mica \n'
        k+=1
      }
    }

    if (k==1)
    {
      // @ts-ignore
      results.innerText=result_string_solo
    }
    else
    {
      // @ts-ignore
      results.innerText=result_string_multiple
    }
    // @ts-ignore
    animals.innerText=animal_string
    //set new window with results
    // @ts-ignore
    results.classList.remove('hide')
    // @ts-ignore
    animals.classList.remove('hide')
  }

}

function resetState(){
  // @ts-ignore
  while(answerButtonsElement.firstChild){
    // @ts-ignore
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function setNextQuestion()
{
  // @ts-ignore
  progressText.innerText = `Intrebarea ${currindex+1} din 10`
  // @ts-ignore
  progressBarFull.style.width = `${(currindex/10) * 100}%`
  resetState()
  showQuestion(shuffledQuestions[currindex])
}

function showQuestion(question: { question: string; answers: { text: string }[] })
{
  // @ts-ignore
  questionElement.innerText= question.question
  question.answers.forEach((answer: { text: string }) =>{
    const button = document.createElement('button')
    button.innerText= answer.text
    button.classList.add('btn')
    button.addEventListener('click', selectAnswer)
    // @ts-ignore
    answerButtonsElement.appendChild(button)
  })
}
