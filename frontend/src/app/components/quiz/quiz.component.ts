import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../model/quiz.model";
import {FormControl, FormGroup} from "@angular/forms";
import {QuizResults} from "../../model/quizResults.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    quizList: Quiz[] = [
    {
      id: '1',
      question: "How much free time do you have per week?",
      options: ['apartment', 'house with a big yard', 'house with a small yard']
    },
    {
      id: '2',
      question: "How often are you away from home (for more than a few days)?",
      options: ['at least once a week', 'once or twice a month', 'a few times a year', 'rarely']
    },
    {
      id: '3',
      question: "How are you spending your free time?",
      options: ['walking in nature/ hiking', 'going out with your friends', 'playing video games']
    },
    {
      id: '4',
      question: "Where do you spend most of your free time?",
      options: ['outdoors', 'indoors']
    },
    {
      id: '5',
      question: "What pet/pets do you have?",
      options: ['dog', 'cat', 'birds', 'reptiles', 'none']
    },
    {
      id: '6',
      question: "How important is keeping your home tidy?",
      options: ['very important', 'indifferent', 'not important at all']
    },
    {
      id: '7',
      question: "What bothers you the most?",
      options: ['chewed shoes', 'scratched furniture', 'pet hair', 'being woken up in the middle of the night']
    },
    {
      id: '8',
      question: "Why do you want a pet?",
      options: ['for companionship', 'for protection', 'just because they are cute']
    },
    {
      id: '9',
      question: " How much time do you spend at home?",
      options: ['more than 14 hours', 'between 8 and 14 hours', 'less than 8 hours']
    },
    {
      id: '10',
      question: "Are you allergic to pet hair?",
      options: ['yes', 'no']
    },
  ];
  quizForm!: FormGroup;
  questionIndex = 0;
  question!: string;
  options!: string[];
  startQuiz = false;
  finishedQuiz = false;
  result: QuizResults[] = [
    {animal: 'big dog', points: 0},
    {animal: 'bird', points: 0},
    {animal: 'turtle', points: 0},
    {animal: 'cat with fur', points: 0},
    {animal: 'cat without fur', points: 0},
    {animal: 'hamster', points: 0},
    {animal: 'fish', points: 0},
    {animal: 'lizard', points: 0},
    {animal: 'small dog', points: 0}
  ];

  constructor() { }

  ngOnInit(): void {
    this.quizForm = new FormGroup({
      'question': new FormControl(null),
    });
    this.question = this.quizList[0].question;
    this.options = this.quizList[0].options;
    this.questionIndex++;
  }

  getOptionIndex(option: string, id: number) {
    id--;
    let quizItem = this.quizList[id];
    for (let i=0; i<quizItem.options.length; i++) {
      console.log(option+' '+id+' '+quizItem.options[i]);
      if (quizItem.options[i] === option) {

        return i;
      }
    }
    return 0;
  }

  onNextQuestion(option: string) {
    if (this.questionIndex < this.quizList.length) {
      let quizItem = this.quizList[+this.questionIndex];
      let optionIndex = this.getOptionIndex(option, this.questionIndex);
      this.question = quizItem.question;
      this.options = quizItem.options;

      console.log(this.questionIndex+'\n'+this.question+'\n'+this.options+'\n'+optionIndex);

      switch (quizItem.id) {
        case '1': {
          if (optionIndex == 0) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
            this.result[8].points++;
          } else if (optionIndex == 1) {
            this.result[0].points++;
            this.result[1].points++;
            this.result[2].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
            this.result[8].points++;
          } else if (optionIndex == 2) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
            this.result[8].points++;
          }
          break;
        }
        case '2': {
          if (optionIndex == 0) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
          } else if (optionIndex == 1) {
            this.result[8].points++;
          } else if (optionIndex == 2) {
            this.result[0].points++;
          } else if (optionIndex == 3) {
            this.result[3].points++;
            this.result[4].points++;
          }
          break;
        }
        case '3': {
          if (optionIndex == 0) {
            this.result[0].points++;
            this.result[8].points++;
          } else if (optionIndex == 1) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
          } else if (optionIndex == 2) {
            this.result[3].points++;
            this.result[4].points++;
          }
          break;
        }
        case '4': {
          if (optionIndex == 0) {
            this.result[0].points++;
            this.result[8].points++;
          } else if (optionIndex == 1) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
          }
          break;
        }
        case '5': {
          if (optionIndex == 0) {
            this.result[0].points++;
            this.result[2].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
            this.result[8].points++;
          } else if (optionIndex == 1) {
            this.result[2].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[5].points++;
            this.result[7].points++;
          } else if (optionIndex == 2) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
          } else if (optionIndex == 3) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[5].points++;
            this.result[6].points++;
          } else if (optionIndex == 4) {
            this.result[0].points++;
            this.result[1].points++;
            this.result[2].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
            this.result[8].points++;
          }
          break;
        }
        case '6': {
          if (optionIndex == 0) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
          } else if (optionIndex == 1) {
            this.result[0].points++;
            this.result[1].points++;
            this.result[2].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
            this.result[8].points++;
          } else if (optionIndex == 2) {
            this.result[0].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[8].points++;
          }
          break;
        }
        case '7': {
          if (optionIndex == 0) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
          } else if (optionIndex == 1) {
            this.result[0].points++;
            this.result[1].points++;
            this.result[2].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
            this.result[8].points++;
          } else if (optionIndex == 2) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[3].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
          } else if (optionIndex == 3) {
            this.result[2].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
          }
          break;
        }
        case '8': {
          if (optionIndex == 0) {
            this.result[3].points++;
            this.result[4].points++;
            this.result[8].points++;
          } else if (optionIndex == 1) {
            this.result[0].points++;
          } else if (optionIndex == 2) {
            this.result[1].points++;
            this.result[3].points++;
            this.result[4].points++;
            this.result[5].points++;
            this.result[8].points++;
          }
          break;
        }
        case '9': {
          let optionIndex = this.getOptionIndex(option, this.questionIndex);
          if (optionIndex == 0) {
            this.result[3].points++;
            this.result[4].points++;
          } else if (optionIndex == 1) {
            this.result[0].points++;
            this.result[8].points++;
          } else if (optionIndex == 2) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[5].points++;
            this.result[6].points++;
            this.result[7].points++;
          }
          break;
        }
        case '10': {
          let optionIndex = this.getOptionIndex(option, this.questionIndex);
          if (optionIndex == 0) {
            this.result[0].points = 0;
            this.result[3].points = 0;
            this.result[5].points = 0;
            this.result[8].points = 0;
          } else if (optionIndex == 1) {
            this.result[1].points++;
            this.result[2].points++;
            this.result[4].points++;
            this.result[6].points++;
            this.result[7].points++;
          }
          break;
        }
        default: {
          break;
        }
      }
      this.questionIndex++;
    } else {
      this.finishedQuiz = true;
    }
  }

  onStartQuiz() {
    this.startQuiz = true;
  }
}
