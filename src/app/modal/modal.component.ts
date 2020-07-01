import { Component } from '@angular/core';

@Component({
  selector: 'modal',
  template: `
    <div class="modal">
      <img src="../assets/images/logo.png" />
      <h1>This page is not designed for pages smaller than 1300px width</h1>
      <h2>Continue at own risk...</h2>
      <button (click)="removeModal()">Ok</button>
    </div>
  `,
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  screenResize(): void {
    if (
      document.documentElement.clientWidth < 1301 &&
      localStorage.getItem('modal') == null
    ) {
      let modal: HTMLElement = document.getElementsByClassName(
        'modal'
      )[0] as HTMLElement;
      modal.style.display = 'flex';
    }
  }
  ngOnInit() {
    this.screenResize();
    window.addEventListener('resize', this.screenResize);
  }

  removeModal() {
    localStorage.setItem('modal', 'removed');
    const modal = document.querySelector('.modal');
    modal.addEventListener('animationend', () => {
      modal.remove();
    });
    modal.classList.add('remove');
  }
}
