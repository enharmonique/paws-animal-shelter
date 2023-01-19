import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../model/quiz.model";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    quizList: Quiz[] = [
    {
      id: '1',
      question: "Where do you live?",
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.quizForm = new FormGroup({
      'question' : new FormControl(null),
       // 'answer' : new FormControl(null)
    });
  }

  // getOptions() {
  //   return this.quizForm.controls['answers'] as FormArray;
  // }
  //
  getQuestion() {
    return this.quizForm.controls['questions'] as FormArray;
  }

  onSubmit() {
    console.log(this.quizForm.value)
    console.log({
      questions : [this.quizForm.getRawValue()]
    //   answers : [this.getOptions()],
    })
    this.router.navigate(['/quizResult']);
  }
}
