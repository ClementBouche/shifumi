import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-chips',
  templateUrl: 'autocomplete-chips.component.html',
  styleUrls: ['autocomplete-chips.component.css'],
})
export class AutocompleteChipsComponent implements OnInit {
  @Input() values: string[] = ['Lime'];

  @Input() all: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @Input() placeholder: string = 'New fruit';

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  control = new FormControl();

  filtered: Observable<string[]>;

  @ViewChild('chipInput', { static: false }) chipInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor() {
  }

  ngOnInit() {
    // ??
    if (this.values && this.values.length == 1 && !this.values[0]) {
      this.values = [];
    }
    this.filtered = this.control.valueChanges.pipe(
      startWith(null),
      map((value: string | null) => value ? this._filter(value) : this.all.slice())
    );
  }

  add(event: MatChipInputEvent): void {
    // Add only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.values.push(value.trim());
      }

      if (input) {
        input.value = '';
      }

      this.control.setValue(null);
    }
  }

  remove(item: string): void {
    const index = this.values.indexOf(item);

    if (index >= 0) {
      this.values.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.values.push(event.option.viewValue);
    this.chipInput.nativeElement.value = '';
    this.control.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.all.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }
}
