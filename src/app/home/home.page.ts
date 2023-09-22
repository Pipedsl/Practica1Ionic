import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contador: number = 0;
  constructor() {}

  public aumentarContador(){
    this.contador = this.contador + 1;
  }

  public get tamanioFuente():string{
    return 'font-size:'+this.contador+'px;'
  }

}
