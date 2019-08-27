import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';
import { map } from 'rxjs/operators';
import { PlacesPage } from '../shared/model/places-page.model';
import { Place } from '../shared/model/place.model';
import { TableService } from 'src/app/shared-chart/services/table.service';

@Component({
  selector: 'app-place-home',
  templateUrl: './place-home.component.html',
  styleUrls: ['./place-home.component.css']
})
export class PlaceHomeComponent implements OnInit {

  places: Place[];

  displayedColumns: string[] = ['id', 'place', 'count', 'time'];

  tableData: any[];

  counts: any;

  constructor(
    private route: ActivatedRoute,
    private tableService: TableService,
    private router: Router,
    private metadataTags: MetadataTagsService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.pipe(
      // get page from resolver
      map((data: { placesPage: PlacesPage }) => {
        this.places = data.placesPage.result;

        this.tableData = this.tableService.createPlaceTable(this.places);

        this.counts = {
          fives: this.tableData.filter((bg) => bg.count >= 5 && bg.count < 10).length,
          dimes: this.tableData.filter((bg) => bg.count >= 10 && bg.count < 25).length,
          quarters: this.tableData.filter((bg) => bg.count >= 25 && bg.count < 100).length,
          hundreds: this.tableData.filter((bg) => bg.count >= 100).length,
        };

        this.cd.markForCheck();
      })
    ).subscribe();
  }

}
