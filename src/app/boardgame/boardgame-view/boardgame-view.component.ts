import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Boardgame } from '../shared/model/boardgame.model';
import { BoardgameService } from '../shared/services/boardgame.service';
import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';
import { Tagable } from 'src/app/core/model/tagable.interface';

@Component({
  selector: 'app-boardgame-view',
  templateUrl: './boardgame-view.component.html',
  styleUrls: ['./boardgame-view.component.css']
})
export class BoardgameViewComponent implements OnInit, Tagable {

  boardgame: Boardgame;

  actions: string[] = ['add'];

  constructor(
    private boardgameService: BoardgameService,
    private metadataTags: MetadataTagsService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {boardgame: Boardgame}) => {
      this.boardgame = data.boardgame;
      this.cd.markForCheck();
    });

    this.updateTags();
  }

  import() {
    this.boardgameService.getPreview(this.boardgame.xmlId, false).then((bg) => {
      this.router.navigate(['boardgame', bg.id]);
    });
  }

  updateTags() {
    if (this.boardgame) {
      this.metadataTags.updateTitle('Shifumi - ' + this.boardgame.name);
      this.metadataTags.updateDescription(this.boardgame.name);
      this.metadataTags.updateImage(this.boardgame.image, 200);
    }
  }

  doAction(actionName: string) {
    if (actionName == 'add') {
      this.router.navigate(['/', 'play', 'add', this.boardgame.id]);
    }
  }

}
