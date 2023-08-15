import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Character } from '@app/shared/interface/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { filter, take } from 'rxjs';

type RequestInfo = {
  next: string;
};
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  loading: boolean = false;
  isLoadingComplete: boolean = false;
  currentPage:number=1;
  info: RequestInfo = {
    next: '',
  };
  private pageNum = 1;
  private query!: string;
  isAlive: boolean = true;
  constructor(
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private routers: Router
  ) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    this.getCharactersByQuery();
  }
  private onUrlChanged(): void {
    this.routers.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.characters = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      });
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      console.log('Params ->', params);
      this.query = params['q'];
      this.getDataFromService();
    });
  }

  private getDataFromService(): void {
    this.characterSvc
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = [];
        }
      });
  }

  getCharacters() {
    this.loading = true;
    this.characterSvc.getCharacters(this.currentPage)
      .subscribe(response => {
        this.characters = [...this.characters, ...response.results];
        this.loading = false;
        if (response.info.next) {
          this.currentPage++;
        } else {
          this.isLoadingComplete = true;
        }
      });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight && !this.loading && !this.isLoadingComplete) {
      this.getCharacters();
    }
  }
}
