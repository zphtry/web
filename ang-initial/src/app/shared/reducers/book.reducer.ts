import { BookActions } from '@app/shared/actions/book.actions';
import {IBook} from '@app/shared/models/book.model';
 
const defaultBook: IBook = {
  title: 'War and peace',
  pages: 9000
}

export function bookReducer(state: IBook = defaultBook,
action: BookActions.All): IBook  {

  switch (action.type) {

    case BookActions.UPDATE_TITLE: {
      return {...state, title: action.payload};
    }

    case BookActions.UPDATE_PAGES: {
      return {...state, pages: action.payload};
    }

    default:
      return state;
  }
}
