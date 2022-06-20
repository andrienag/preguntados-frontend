import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LeaderboardPageRoutingModule } from './leaderboard-routing.module';
import { LeaderboardPage } from './leaderboard.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LeaderboardPageRoutingModule,
  ],
  declarations: [LeaderboardPage],
})
export class LeaderboardPageModule {}
