import { Component, OnInit } from '@angular/core';
import { MetadataTagsService } from '../core/services/metadata-tags.service';
import { Tagable } from '../core/model/tagable.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, Tagable {

  constructor(
    private metadataTags: MetadataTagsService
  ) { }

  ngOnInit() {
    this.updateTags();
  }

  updateTags() {
    this.metadataTags.updateTitle('Shifumi - Accueil');
  }

}
