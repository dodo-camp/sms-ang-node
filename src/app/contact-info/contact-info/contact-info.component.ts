import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactInfoService } from '../contact-info-service.service';
import { routerSlideIn } from '../../animations';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
  animations: [routerSlideIn],
  host: { '[@routerTransition]': '' }
})
export class ContactInfoComponent implements OnInit {

  protected _contactInfo: any = {};
  public color = {
    lightpink: 'lightpink',
    purple: '#DDBDF1'
  }

  constructor(private route: ActivatedRoute, private infoService: ContactInfoService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      let code: string = param.name;
      this.infoService.getContactInfo(code).subscribe(this._setContactInfo.bind(this), (err) => {
        throw err;
      });
    });
  }

  protected _setContactInfo(event: any) {
    if (Object.keys(event).length)
      this._contactInfo = Object.assign({}, event["contactInfo"]);
    else {
      this.router.navigateByUrl('/contacts');
    }
  }

  public openTextScreen() {
    this.router.navigateByUrl(`/text/${this.code}`)
  }

  get name() {
    return this._contactInfo["name"];
  }

  get number() {
    return this._contactInfo["number"];
  }

  get code() {
    return this._contactInfo["code"];
  }

}
