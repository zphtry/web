import { Action } from '@ngrx/store';
//import { IObject } from '../models/object.model

export namespace BookActions {

  export const UPDATE_TITLE = 'UpdateTitle';
  export const UPDATE_PAGES = 'UpdatePages';

  export class UpdateTitle implements Action {
    
    constructor(public payload: string) {}
    readonly type = UPDATE_TITLE;
  }

  export class UpdatePages implements Action {

    constructor(public payload: number) {}
    readonly type = UPDATE_PAGES;
  }

  export type All
      = UpdateTitle
      | UpdatePages;
}