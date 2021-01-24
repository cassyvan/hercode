import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: './navbar.component.html',
    selector: 'navbar-component',
    styleUrls: ['navbar.component.css'],
})

export class NavBarComponent implements OnInit{
    showBox: boolean = true;

    constructor() {}

    ngOnInit(): void{
        this.showBox = false;
    }
  
    onClickedOutside(): void {
        this.showBox = false;
    }

    onMenuClick(): void {
        this.showBox = !this.showBox;
    }
}



