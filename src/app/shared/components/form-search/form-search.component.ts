import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
  <input
  #inputSearch
  autofocus
  type="text"
  class="form-control-lg"
  placeholder="Search......."
  (keyup)="onSearch(inputSearch.value)"
  />
  `,
  styles: ['input{width:60%; margin-left: 15vw;}']
})
export class FormSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(value:string){
    console.log('Buscar ->', value);
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams:{q:value},
      })
    }
  }

}
