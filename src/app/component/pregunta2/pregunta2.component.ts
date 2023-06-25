import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css'],
})
export class Pregunta2Component {
  form: FormGroup;
  result: number | undefined;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      first: ['', Validators.required],
      second: ['', Validators.required],
      third: ['', Validators.required],
    });
  }

  calcular() {
    const a = Number(this.form.value['first']);
    const b = Number(this.form.value['second']);
    const c = Number(this.form.value['third']);
    this.result = (a + b + c) / 3;
  }
}
