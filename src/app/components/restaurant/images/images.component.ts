import { AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'resturamt-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements AfterViewInit {
  constructor() { }
  @Input("images") images!: string[];
  @Input() mainImage!: string;
  ngAfterViewInit(): void {
    let counter:number=0;
    const slides = document.querySelectorAll('.slide');
    const navCircles = document.querySelectorAll('.nav-circle');
    let currentIndex: number = 0;

    const slideElements = Array.from(slides) as HTMLElement[];
    const navCircleElements = Array.from(navCircles) as HTMLElement[];

    function showSlide(index: number) {
        slideElements.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
            navCircleElements[i].classList.remove('active');
        });
        navCircleElements[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideElements.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);

    navCircleElements.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
  }
}