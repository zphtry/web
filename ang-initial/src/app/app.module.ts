import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules }    from '@angular/router';
import { app_routes } from './app.routing';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from '@app/shared/reducers/book.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_routes, {preloadingStrategy: PreloadAllModules}),
    StoreModule.forRoot({
      book: bookReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
