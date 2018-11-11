import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact-service.service';
import { routerSlideIn } from '../../animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [routerSlideIn],
  host: { '[@routerTransition]': '' }
})
export class ContactsComponent implements OnInit {
  public contacts: Array<{}> = new Array(0);

  constructor(private contactService: ContactService, private route: Router) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts.contacts;
    });
  }

  public routeToContactInfo(code: string) {
    this.route.navigateByUrl(`/contact-info/${code}`);
  }

}
