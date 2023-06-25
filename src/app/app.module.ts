import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pregunta1Component } from './component/pregunta1/pregunta1.component';
import { Pregunta2Component } from './component/pregunta2/pregunta2.component';
import { Pregunta3Component } from './component/pregunta3/pregunta3.component';
import { Pregunta4Component } from './component/pregunta4/pregunta4.component';
import { MaterialModule } from './component/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from './util/custom-paginator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Pregunta1Component,
    Pregunta2Component,
    Pregunta3Component,
    Pregunta4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginator,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
