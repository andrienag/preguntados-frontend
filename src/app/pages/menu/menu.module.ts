import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, MenuPageRoutingModule],
  declarations: [MenuPage],
})
export class MenuPageModule {}
