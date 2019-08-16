import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './app-material.module';

import { AutocompleteChipsComponent } from './components/autocomplete-chips/autocomplete-chips.component';
import { AutocompleteSearchInputComponent } from './components/autocomplete-search-input/autocomplete-search-input.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { CustomLayoutComponent } from './components/custom-layout/custom-layout.component';
import { LayoutNavComponent } from './components/layout-nav/layout-nav.component';
import { LayoutSideComponent } from './components/layout-side/layout-side.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { PageShortcutComponent } from './components/page-shortcut/page-shortcut.component';
import { PlayerSearchInputComponent } from './components/player-search-input/player-search-input.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TimelineComponent } from './components/timeline/timeline.component';

import { SafeHtmlDirective } from './directives/safe-html.directive';
import { BackgroundImageDirective } from './directives/background-image.directive';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { ColorGradientDirective } from './directives/color-gradient.directive';

import { PlayTimePipe } from './pipes/play-time.pipe';
import { DatePipe } from './pipes/date.pipe';
import { TextChipComponent } from './components/text-chip/text-chip.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { InputScrollTopComponent } from './components/input-scroll-top/input-scroll-top.component';

@NgModule({
  declarations: [
    AutocompleteChipsComponent,
    AutocompleteSearchInputComponent,
    AvatarComponent,
    CommentSectionComponent,
    CustomLayoutComponent,
    LayoutNavComponent,
    LayoutSideComponent,
    MenuButtonComponent,
    PageShortcutComponent,
    PlayerSearchInputComponent,
    SpinnerComponent,
    TimelineComponent,
    TextChipComponent,
    SearchFilterComponent,
    InputScrollTopComponent,
    ColorGradientDirective,
    ScrollToDirective,
    BackgroundImageDirective,
    SafeHtmlDirective,
    PlayTimePipe,
    DatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [
    AutocompleteChipsComponent,
    AutocompleteSearchInputComponent,
    AvatarComponent,
    CommentSectionComponent,
    CustomLayoutComponent,
    LayoutNavComponent,
    LayoutSideComponent,
    MenuButtonComponent,
    PageShortcutComponent,
    PlayerSearchInputComponent,
    SpinnerComponent,
    TimelineComponent,
    TextChipComponent,
    SearchFilterComponent,
    InputScrollTopComponent,
    ColorGradientDirective,
    ScrollToDirective,
    BackgroundImageDirective,
    SafeHtmlDirective,
    PlayTimePipe,
    DatePipe,
  ]
})
export class SharedModule { }
