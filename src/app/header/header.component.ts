import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public auth: AuthService) {
        auth.handleAuthentication();
    }

    ngOnInit() {
        if (this.auth.isAuthenticated()) {
            this.auth.renewTokens();
        }
        const menu = document.getElementById('navbar-toggler');
        menu.addEventListener('click', () => {
        menu.classList.toggle('hide-mobile');
    });
    }

}
