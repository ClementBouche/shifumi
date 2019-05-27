import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BoardgamesPage } from 'src/app/boardgame/shared/model/boardgames-page.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';

@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.css']
})
export class PeopleViewComponent implements OnInit {

  people: String;

  page: BoardgamesPage;

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data
        .pipe(
          // load from data resolver
          map((data: { page: BoardgamesPage }) => {
            this.page = data.page;
            this.cd.markForCheck();
          }),
        )
        .subscribe();

    this.route.params
      .pipe(
        map(params => {
          this.people = params.name;
          this.cd.markForCheck();
        })
      )
      .subscribe();
  }

  get activityYear() {
    if (this.page) {
      return this.page.result.sort((a, b) => {
        return a.year - b.year > 0 ? 1 : a.year - b.year == 0 ? 0 : -1;
      })[0].year;
    }
  }

  get hasArtist(): Boardgame[] {
    return this.page.result.filter((bg) => {
      return bg.artists.findIndex((a) => a.name == this.people) != -1;
    })
  }

  get hasDesigner(): Boardgame[] {
    return this.page.result.filter((bg) => {
      return bg.designers.findIndex((d) => d.name == this.people) != -1;
    })
  }

}
