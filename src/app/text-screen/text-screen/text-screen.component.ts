import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TextScreenService } from '../text-screen.service';
import { routerSlideIn } from '../../animations';

@Component({
  selector: 'app-text-screen',
  templateUrl: './text-screen.component.html',
  styleUrls: ['./text-screen.component.css'],
  animations: [routerSlideIn],
  host: { '[@routerTransition]': '' }
})
export class TextScreenComponent implements OnInit {
  private code: string;
  public group: FormGroup;
  constructor(private route: ActivatedRoute, private textService: TextScreenService, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.group = fb.group({
      text: new FormControl(`Hi. Your OTP is: ${this._generateOTP()}`, [Validators.required])
    })
  }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.code = param.code;
    });
  }

  public sendMessage() {
    if (this.group.valid) {
      let obj = {
        text: this.group.controls["text"].value,
        code: this.code
      }
      this.textService.sendMessage(obj).subscribe(this._messageSentResponse.bind(this), err => {
        throw err;
      });
    }
  }

  protected _messageSentResponse(res: any) {
    if (res.success) {
      this.snackBar.open("message sent successfully", '', {
        duration: 2000,
      });
    }
    else {
      this.snackBar.open("message not sent", '', {
        duration: 2000,
      });
    }
  }

  protected _generateOTP() {
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

}
