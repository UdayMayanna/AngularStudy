import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  standalone:false,
  templateUrl: './nav-header.component.html',
  styles: `nav {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    margin: 0;
}
.nav-menu ul {
    display: flex;
    gap: 10px;
    list-style-type: none;
}
.nav-menu ul li a {
    text-decoration: none;
    font-size: 18px;
    font-family: monospace;
    font-weight: 600;
    color: black;
}
.active-menu{
    color: blueviolet !important;
    background: black;
    padding: 10px;
}`
})
export class NavHeaderComponent {

}
