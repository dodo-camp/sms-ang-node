import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages.service';
import { listDropAnimation, routerSlideIn } from '../../animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [listDropAnimation, routerSlideIn],
  host: { '[@routerTransition]': '' }
})
export class MessagesComponent implements OnInit {
  public messages: Array<any> = new Array(0);
  constructor(private msgService: MessageService) { }

  ngOnInit() {
    this.msgService.getMessage().subscribe((msgs) => {
      this.messages = msgs.usersMessages;
    })
  }

  trackByFn(index, item) {
    return index;
  }

}
