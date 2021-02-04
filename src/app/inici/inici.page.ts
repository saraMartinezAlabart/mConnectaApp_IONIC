import { Component} from '@angular/core';
import {Plugins, AppState} from '@capacitor/core';
//import { AppAvailability } from '@ionic-native/app-availability';
//import { Platform } from '@ionic/angular';
//import { Market } from '@ionic-native/market/ngx';

const {App} = Plugins;

@Component({
  selector: 'app-inici',
  templateUrl: 'inici.page.html',
  styleUrls: ['inici.page.scss']
})

export class iniciPage {

  //constructor(private appAvailability: AppAvailability, private platform: Platform) {}
  //constructor(private market: Market) {}
  constructor() {}

  //async obreAppMedicacio(){
    //var ret = await App.canOpenUrl({ url: 'cat.catsalut.SeguimentMedicacio' });
    //var retx = await App.openUrl({ url:'cat.catsalut.SeguimentMedicacio' });
    //console.log('url resposta al intentar obrir: ', ret);
  //}
  
  //async obreAppLMS(){
    //var appLMS; 
    //if (this.platform.is('ios')) {
     // appLMS = '1358288989';
    //} 
    //else if (this.platform.is('android')) {
     // appLMS = 'cat.gencat.mobi.lamevasalut';
   // }
    
   // var ret;
   // var retx;

   // this.appAvailability.check(appLMS)
    //  .then(
    //    async (yes: boolean) => {ret = await App.canOpenUrl({ url: 'cat.gencat.mobi.lamevasalut' }); retx = await App.openUrl({ url:'cat.gencat.mobi.lamevasalut' });},
    //    (no: boolean) => console.log(appLMS + ' is NOT available')
    //  );
   // console.log('url resposta al intentar obrir: ', ret);
  //}

  async obreAppLMS(){
    var retLMS = await App.canOpenUrl({ url: 'cat.gencat.mobi.lamevasalut' });
    var retxLMS = await App.openUrl({ url:'cat.gencat.mobi.lamevasalut' });
    console.log('url resposta al intentar obrir: ', retLMS);
  }

  async obreAppTB(){
    var retTB = await App.canOpenUrl({ url: 'py.com.sodep.simple' });
    var retxTB = await App.openUrl({ url:'py.com.sodep.simple' });
    console.log('url resposta al intentar obrir: ', retTB);
  }

  async obreAppClinic(){
    var retC = await App.canOpenUrl({ url: 'org.clinicbarcelona.app' });
    var retxC = await App.openUrl({ url:'org.clinicbarcelona.app' });
    console.log('url resposta al intentar obrir: ', retC);
    //if(retC.value == false) this.market.open('org.clinicbarcelona.app');
  }
  
}
