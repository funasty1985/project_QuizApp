import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PartialModule } from '../partial/partial.module';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ModelModule } from '../model/model.module';
import { MatSelectModule } from '@angular/material/select';
import { ListQuizComponent } from './list-quiz/list-quiz.component';

@NgModule({
  declarations: [
    CreateQuizComponent,
    ListQuizComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PartialModule,
    FormsModule,
    MatIconModule,
    MatOptionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ModelModule,
    MatSelectModule
  ],
  exports: [
    PartialModule,
  ]
})
export class PageModule { }
