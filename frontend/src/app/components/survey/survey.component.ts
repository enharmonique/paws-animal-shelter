import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveyForm!: FormGroup;

  constructor(private router: Router) { }

   ngOnInit(): void {
    this.surveyForm = new FormGroup({
      'firstQuestion' : new FormControl(null,[Validators.required]),
      'secondQuestion' : new FormControl(null,[Validators.required]),
      'thirdQuestion' : new FormControl(null,[Validators.required]),
      'fourthQuestion' : new FormControl(null,[Validators.required]),
      'fifthQuestion' : new FormControl(null,[Validators.required]),
      'sixthQuestion' : new FormControl(null,[Validators.required]),
      'seventhQuestion' : new FormControl(null,[Validators.required]),

    })
  }

  onSubmit() {
    console.log(this.surveyForm);

    if (this.surveyForm.invalid){
      return;
    } else {
      this.router.navigate(['/quizResult']);
    }

  }

}
