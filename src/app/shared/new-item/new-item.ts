import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NewItems } from '../types/type-item';

@Component({
  selector: 'app-new-item',
  imports: [RouterLink, FormsModule],
  templateUrl: './new-item.html',
  styleUrl: './new-item.scss',
})
export class NewItemComponent implements OnChanges, OnDestroy {
  @Input() news: NewItems[] = [];

  @Output() dataEvent = new EventEmitter<number>();

  get totalNews(): number {
    return this.news.length;
  }

  ngOnChanges(changes: any): void {
    console.log(changes['news'].currentValue);
    console.log(changes['news'].previousValue);
  }

  ngOnDestroy(): void {
    console.log('NewItemComponent destroyed');
  }

  handleDelete = (id: number) => {
    // console.log('Delete item with id:', id);
    this.dataEvent.emit(id);
  }
}

