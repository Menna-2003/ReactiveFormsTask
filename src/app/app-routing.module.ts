import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { AccountInformationComponent } from './components/account-information/account-information.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'PersonalInfo', pathMatch: 'full' },
  { path: 'PersonalInfo', component: PersonalInformationComponent },
  { path: 'AccountInfo', component: AccountInformationComponent },
  { path: 'ProfileDetails', component: ProfileDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
