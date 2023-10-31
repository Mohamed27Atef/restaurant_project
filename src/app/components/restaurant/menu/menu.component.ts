import { Component, ElementRef, Renderer2, AfterViewInit, Input } from '@angular/core';
import * as Isotope from 'isotope-layout';
import { Menu } from 'src/app/interfaces/menu';
import { Recipe } from 'src/app/interfaces/recipe';
@Component({
  selector: 'restaurant-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
 })
 export class MenuComponent implements AfterViewInit {

  public menus!: Menu[];
  public recipes!: Recipe[];
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const menuContainer = this.el.nativeElement.querySelector('.menu-container');

    if (menuContainer) {
      const menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      const menuFilters = this.el.nativeElement.querySelectorAll('#menu-flters li');

      menuFilters.forEach((filter: HTMLElement) => {
        this.renderer.listen(filter, 'click', (event) => {
          event.preventDefault();
          menuFilters.forEach((el: HTMLElement) => {
            this.renderer.removeClass(el, 'filter-active');
          });
      
          this.renderer.addClass(filter, 'filter-active');
      
          menuIsotope.arrange({
            filter: filter.getAttribute('data-filter') as string
          });
        });
      });
    }
  }
}