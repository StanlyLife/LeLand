import { Component } from '@angular/core';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./css/testimonial.component.css'],
})
export class TestimonialComponent {
  public slideNumber = 1;
  public fullElipsisUrl: '../assets/images/testimonial/EllipseFull.png';
  public emptyElipsisUrl: '../assets/images/testimonial/ElipseEmpty.png';
  private interval;
  Carousel() {
    this.interval = setInterval(() => {
      this.slideNumber = (this.slideNumber + 1) % 3;
    }, 5000);
  }

  arrowTestimonial(value: string): void {
    clearInterval(this.interval);
    if (this.slideNumber < 1) {
      this.slideNumber = 2;
    } else {
      this.slideNumber =
        value == 'next'
          ? (this.slideNumber + 1) % 3
          : (this.slideNumber - 1) % 3;
    }
  }
  changeTestimonial(value: number): void {
    this.slideNumber = value;
  }

  ngOnInit(): void {
    this.Carousel();
  }
}
