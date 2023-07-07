import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';

const routes: Routes = [
  {
    path: 'user-info-form',
    component: UserInfoFormComponent,
  },
  {
    path: 'user-info-display',
    component: UserInfoDisplayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
