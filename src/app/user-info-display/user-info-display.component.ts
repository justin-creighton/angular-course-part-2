import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.scss'],
  // ENCAPSULATION OPTIONS ARE ViewEncapsulation.Emulated, ViewEncapsulation.ShadowDom AND ViewEncapsulation.None
})
export class UserInfoDisplayComponent implements OnInit {
  info: any = {};
  loadingData: boolean = true;
  pointerIcon: any = faHandPointer;

  constructor(private userInfo: UserInfoService) {}

  ngOnInit(): void {
    // HERE WE SUBSCRIBE TO THE OBSERVABLE AND WE THEN GET THE DATA WHEN IT'S AVAILABLE
    this.userInfo.loadData().subscribe((userInfo: any) => {
      this.info = userInfo;
      console.log(this.info);
      this.loadingData = false;
    });
  }
}
