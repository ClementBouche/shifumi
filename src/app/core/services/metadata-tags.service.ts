import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetadataTagsService {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
    this.meta.updateTag(
      { property: 'og:title', content: title },
      `property='og:title'`
    );
  }

  updateDescription(description: string) {
    this.meta.updateTag(
      { property: 'og:description', content: description },
      `property='og:description'`
    );
  }

  updateImage(image: string, width: number = null, height: number = null) {
    this.meta.updateTag(
      { property: 'og:image', content: image },
      `property='og:image'`
    );

    this.meta.removeTag(`property='og:image:width'`);
    this.meta.removeTag(`property='og:image:height'`);
    if (width != null) {
      this.meta.addTag({ property: 'og:image:width', content: width.toFixed(0) });
    }
    if (height != null) {
      this.meta.addTag({ property: 'og:image:height', content: height.toFixed(0) });
    }
  }

}
