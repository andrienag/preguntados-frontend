import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { QuizPageRoutingModule } from './quiz-routing.module';
import { QuizPage } from './quiz.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    QuizPageRoutingModule,
  ],
  declarations: [QuizPage],
})
export class QuizPageModule {}
