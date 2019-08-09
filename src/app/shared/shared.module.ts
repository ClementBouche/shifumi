import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './app-material.module';

import { AutocompleteSearchInputComponent } from './components/autocomplete-search-input/autocomplete-search-input.component';
import { PlayerSearchInputComponent } from './components/player-search-input/player-search-input.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { PlayTimePipe } from './pipes/play-time.pipe';
import { BackgroundImageDirective } from './directives/background-image.directive';
import { DatePipe } from './pipes/date.pipe';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ColorGradientDirective } from './directives/color-gradient.directive';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LayoutNavComponent } from './components/layout-nav/layout-nav.component';
import { LayoutSideComponent } from './components/layout-side/layout-side.component';
import { CustomLayoutComponent } from './components/custom-layout/custom-layout.component';
import { PageShortcutComponent } from './components/page-shortcut/page-shortcut.component';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { AutocompleteChipsComponent } from './components/autocomplete-chips/autocomplete-chips.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { SafeHtmlDirective } from './directives/safe-html.directive';

@NgModule({
  declarations: [
    AutocompleteSearchInputComponent,
    PlayerSearchInputComponent,
    MenuButtonComponent,
    PlayTimePipe,
    BackgroundImageDirective,
    DatePipe,
    AvatarComponent,
    ColorGradientDirective,
    TimelineComponent,
    LayoutNavComponent,
    LayoutSideComponent,
    CustomLayoutComponent,
    PageShortcutComponent,
    ScrollToDirective,
    AutocompleteChipsComponent,
    CommentSectionComponent,
    SafeHtmlDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [
    AutocompleteSearchInputComponent,
    PlayerSearchInputComponent,
    MenuButtonComponent,
    PlayTimePipe,
    BackgroundImageDirective,
    DatePipe,
    AvatarComponent,
    TimelineComponent,
    LayoutNavComponent,
    LayoutSideComponent,
    CustomLayoutComponent,
    PageShortcutComponent,
    ScrollToDirective,
    AutocompleteChipsComponent,
    CommentSectionComponent,
    SafeHtmlDirective,
  ]
})
export class SharedModule { }
