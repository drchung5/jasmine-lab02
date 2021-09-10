import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  
  numForm: FormGroup

  constructor() { }

  onSubmit() {}

  ngOnInit(): void {
    this.numForm = new FormGroup({
      num: new FormControl("",[Validators.min(1),Validators.max(10),Validators.required])
    })
  }

}
