import { Component } from '@angular/core';

@Component({
  selector: 'plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./css/plans.component.css', './css/plans.switch.component.css'],
})
export class PlansComponent {
  isChecked: boolean = true;
  price: string = 'mo';

  monthStartup: string = '14';
  monthEnterprise: string = '29';

  yearStartup: string = '159';
  yaerEnterprise: string = '339';

  tierFree: string = '0';
  tierStartup: string = '14';
  tierEnterprise: string = '29';

  checkValue(event: any) {
    this.price = event;
    if (event === 'year') {
      this.tierStartup = this.yearStartup;
      this.tierEnterprise = this.yaerEnterprise;
    } else {
      this.tierStartup = this.monthStartup;
      this.tierEnterprise = this.monthEnterprise;
    }
    this.isChecked ? (this.isChecked = false) : (this.isChecked = true);
  }
}
