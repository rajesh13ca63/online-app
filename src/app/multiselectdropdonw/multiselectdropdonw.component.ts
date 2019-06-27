import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-multiselectdropdonw',
    templateUrl: './multiselectdropdonw.component.html',
    styleUrls: ['./multiselectdropdonw.component.css']
})
export class MultiselectdropdonwComponent implements OnInit {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    citylist = [];

    constructor() { }

    ngOnInit() {
        this.dropdownList = [
            'Mumbai',
            'Bangaluru' ,
            'Pune' ,
            'Navsari',
            'New Delhi'
        ];
        this.selectedItems = [
            'Pune',
            'Navsari'
        ];
        this.dropdownSettings = {
            singleSelection: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    }

    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
        console.log('this.selectedItems', this.selectedItems);
    }

    onSubmitValue(item: any) {
        this.selectedItems.push(this.citylist);
        this.dropdownList.push(this.citylist);
        console.log(this.selectedItems);
    }

}
