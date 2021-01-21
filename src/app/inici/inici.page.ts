import { Component } from '@angular/core';
import {Plugins, AppState} from '@capacitor/core';
const {App} = Plugins;

@Component({
  selector: 'app-inici',
  templateUrl: 'inici.page.html',
  styleUrls: ['inici.page.scss']
})
export class iniciPage {

  constructor() {}

  async obreAppMedicacio(){
    var ret = await App.canOpenUrl({ url: 'cat.catsalut.SeguimentMedicacio' });
    var retx = await App.openUrl({ url:'cat.catsalut.SeguimentMedicacio' });
    console.log('url resposta al intentar obrir: ', ret);
  }
  
  async obreAppLMS(){
    var ret = await App.canOpenUrl({ url: 'cat.gencat.mobi.lamevasalut' });
    var retx = await App.openUrl({ url:'cat.gencat.mobi.lamevasalut' });
    console.log('url resposta al intentar obrir: ', ret);
  }
}
