import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'menu',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'quiz',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/quiz/quiz.module').then((m) => m.QuizPageModule),
  },
  {
    path: 'leaderboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/leaderboard/leaderboard.module').then(
        (m) => m.LeaderboardPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
