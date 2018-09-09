import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

export const app_routes: Routes = [


  {
    path:'first-page',
    loadChildren: './pages/first-page/first-page.module#FirstPageModule'
  },

  {
    path:'second-page',
    loadChildren: './pages/second-page/second-page.module#SecondPageModule'
  },


];
