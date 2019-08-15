import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-chips',
  templateUrl: 'autocomplete-chips.component.html',
  styleUrls: ['autocomplete-chips.component.css'],
})
export class AutocompleteChipsComponent implements OnInit {
  @Input() values: string[];

  @Input() all: string[];

  @Input() placeholder: string;

  @Output() valuesChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

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
    if (!this.values) {
      this.values = [];
    }
    this.filtered = this.control.valueChanges.pipe(
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

      this.valuesChanged.emit(this.values);
    }
  }

  remove(item: string): void {
    const index = this.values.indexOf(item);

    if (index >= 0) {
      this.values.splice(index, 1);
    }

    this.valuesChanged.emit(this.values);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.values.push(event.option.viewValue);
    this.chipInput.nativeElement.value = '';
    this.control.setValue(null);

    this.valuesChanged.emit(this.values);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.all.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }
}
