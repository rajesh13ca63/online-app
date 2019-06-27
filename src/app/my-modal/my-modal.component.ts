import { Component, OnInit, ComponentRef } from '@angular/core';
import { IModalDialogButton, IModalDialogOptions, IModalDialog } from 'ngx-modal-dialog';



@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit, IModalDialog  {
  actionButtons: IModalDialogButton[];
  constructor() {
    this.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'I will always close', onAction: () => true },
      { text: 'I never close', onAction: () => false }
    ];
  }

  ngOnInit() {
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }

}
