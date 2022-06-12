import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { QuizPageRoutingModule } from './quiz-routing.module';
import { QuizPage } from './quiz.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, QuizPageRoutingModule],
  declarations: [QuizPage],
})
export class QuizPageModule {}
