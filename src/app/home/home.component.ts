import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    butDisabled = true;
    butDisabledCity = true;
    states: Array<any>;
    cities: Array<any>;
    countryList: Array<any> = [
        { name: 'India', states: [
                { name: 'Karnataka', cities: ['Banaglore', 'Delhi', 'Lucknow', 'Mumbai']},
                { name: 'Bihar', cities: ['Patna', 'Bettiah', 'Muzaffarpur', 'Motihar', 'Siwan']},
                { name: 'UP', cities: ['Lucknow', 'Kanpur', 'Noida', 'Meerut', 'Raibareli']}
            ]
        },
        { name: 'Germany', states: [
                { name: 'Duesseldorf', cities: ['Leinfelden-Echterdingen', 'Eschborn', 'Banaglore']}
            ]
        },
        { name: 'USA', states: [ { name: 'Washington DC', cities: ['New York', 'Washington', 'Calliforniya'] }]}
    ];

    constructor(private modalService: ModalDialogService,
                private viewRef: ViewContainerRef,
                private toastr: ToastrManager) { }

    ngOnInit() {
    }

    changeCountry(country) {
        if (!country) {
            this.butDisabled = true;
            this.butDisabledCity = true;
            return;
        }
        this.states = [];
        this.cities = [];
        this.butDisabled = false;
        this.butDisabledCity = true;
        this.states = this.countryList.find(count => count.name === country).states;
    }

    changeState(state) {
        if (!state) {
            this.cities = [];
            this.butDisabledCity = true;
            return;
        }
        this.butDisabledCity = false;
        this.cities = this.states.find(count => count.name === state).cities;
    }

    openpopup() {
        this.modalService.openDialog(this.viewRef, {
            title: 'Some modal title',
            childComponent: SimpleModalComponent,
            settings: {
                closeButtonClass: 'fa fa-close'
            },
            data: {
              text: 'Some text content'
            }
        });

    }

    deleteItem() {
        this.modalService.openDialog(this.viewRef, {
            title: 'Delete',
            childComponent: SimpleModalComponent,
                data: {
                    text: 'Are You sure You want to delete this?'
                },
                placeOnTop: true,
                settings: {
                    closeButtonClass: 'close theme-icon-close'
                },
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => new Promise((resolve: any, reject: any) => {
                            this.toastr.successToastr('Success', 'Toastr fun!', {
                                position: 'top-center',
                                animate: null
                            });
                        resolve();
                    })
                },
                {
                    text: 'No',
                    buttonClass: 'btn btn-default',
                    onAction: () => new Promise((resolve: any) => {
                        resolve();
                    })
                }
            ]
          });
    }

    showSuccess() {
        this.toastr.successToastr('<span style="color:red; font-size: 16px; text-align: center;">Custom Toast</span> <span>Undu<span>',
        null,
        {enableHTML: true, position: 'top-center', animate: 'fade', maxShown: 1}
        );
    }

    showToast(position: any = 'top-left') {
        this.toastr.successToastr('This is a toast.', 'Toast', {
            position: position
        });
    }
}
