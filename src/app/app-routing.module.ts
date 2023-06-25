import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pregunta1Component } from './component/pregunta1/pregunta1.component';
import { Pregunta2Component } from './component/pregunta2/pregunta2.component';
import { Pregunta3Component } from './component/pregunta3/pregunta3.component';
import { Pregunta4Component } from './component/pregunta4/pregunta4.component';

const routes: Routes = [
  {
    path: '',
    component: Pregunta1Component,
  },
  {
    path: 'pregunta1',
    component: Pregunta1Component,
  },
  {
    path: 'pregunta2',
    component: Pregunta2Component,
  },
  {
    path: 'pregunta3',
    component: Pregunta3Component,
  },
  {
    path: 'pregunta4',
    component: Pregunta4Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
