import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { AutocompleteService } from './autocomplete.service';
import { AutocompleteModel } from './autocomplete.model';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [AutocompleteService]
})
export class AutocompleteComponent implements OnInit {

  public query = '';
  protected list: Array<AutocompleteModel> ;
  public countries = [ 'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus',
                      'Belgium', 'Bosnia & Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus',
                      'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia',
                      'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo',
                      'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta',
                      'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland',
                      'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia',
                      'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'];
  public filteredList = [];
  public elementRef;

  @Input() url: string;

  constructor(myElement: ElementRef, private service: AutocompleteService) {
      this.elementRef = myElement;
  }

  ngOnInit() {
    this.list = new Array<AutocompleteModel>();
    this.GetAllElements();
  }

  filter() {
      if (this.query !== '' && this.query.length > 2) {
          this.filteredList = this.list.filter(function(el){
              return el.Texto.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          }.bind(this));
      }else {
          this.filteredList = [];
      }
  }

  select(item) {
      debugger;
      this.query = item.Texto;
      this.filteredList = [];
  }

  handleClick(event) {
    let clickedComponent = event.target;
    let inside = false;
    do {
        if (clickedComponent === this.elementRef.nativeElement) {
            inside = true;
        }
       clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
     if (!inside) {
         this.filteredList = [];
     }
  }

  GetAllElements() {
    const result = this.service.GetAll(this.url);
    if (result) {
        const response = result.then((items) => {
            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                const item = new AutocompleteModel();
                item.Id = element.Id;
                item.Texto = element.Nome;

          this.list.push(item);
        }
      }).catch((erro) => {
        console.log(erro);
      });
    }
  }

}
