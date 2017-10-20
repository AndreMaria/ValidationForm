import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FornularioComponent } from './formulario/formulario.component';
import { FilhoComponent } from './formulario/filho/filho.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BeerComponent } from './beer/beer.component';

@NgModule({
  declarations: [
    AppComponent,
    FornularioComponent,
    FilhoComponent,
    AutocompleteComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
