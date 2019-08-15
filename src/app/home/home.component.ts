import { Component, OnInit } from '@angular/core';
import { MetadataTagsService } from '../core/services/metadata-tags.service';
import { Tagable } from '../core/model/tagable.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, Tagable {

  constructor(
    private router: Router,
    private metadataTags: MetadataTagsService
  ) { }

  ngOnInit() {
    this.updateTags();
  }

  go(page: string) {
    if (page === 'boardgame' ||
        page === 'player' ||
        page === 'place' ||
        page === 'play'
    ) {
      this.router.navigate(['/', page]);
    }
  }

  updateTags() {
    this.metadataTags.updateTitle('Shifumi - Accueil');
  }

}
