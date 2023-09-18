import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'services',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/services/services.module').then(m => m.ServicesPageModule)
          }
        ]
      },
      {
        path: 'survey',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/survey/survey.module').then(m => m.SurveyPageModule)
          }
        ]
      },
      {
        path: 'jane',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/jane/jane.module').then(m => m.JanePageModule)
          }
        ]
      },
      
      {
        path: 'profile',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: 'help',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/help/help.module').then(m => m.HelpPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'services',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
