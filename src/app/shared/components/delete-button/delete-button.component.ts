import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {

  @Output() delete = new EventEmitter<boolean>();
  canDelete: boolean | undefined;

  cancel(): void {
    this.canDelete = false;
  }

  prepareForDelete() {
    this.canDelete = true;
  }

  deleteProduct() {
    this.delete.emit(true);
    this.canDelete = false;
  }

}
