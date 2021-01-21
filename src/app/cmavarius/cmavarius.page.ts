import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-cmavarius',
  templateUrl: './cmavarius.page.html',
  styleUrls: ['./cmavarius.page.scss'],
})
export class CMAVariusPage implements OnInit {

  URL: SafeResourceUrl;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.URL=this.domSanitizer.bypassSecurityTrustResourceUrl("https://ticsalutsocial.cat/");
  }

}
