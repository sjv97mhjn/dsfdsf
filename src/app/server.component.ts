import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `
    <p [ngStyle]="{color: getColor()}" 
       [ngClass]="{ online : serverStatus == 'online' }" >
       {{"server "}} is working on ID {{ serverId}} with {{serverStatus}} Status
    </p>
  `,
  styles: [`

     .online {

      background-color = white;
     

     }

  `]
})
export class ServerComponent implements OnInit {
  serverId : number =10;
  serverStatus : string ='offline';
  constructor() { 
this.serverStatus= Math.random()>0.5?"online":"ofline";
  }

  ngOnInit() {
  }

  getColor()
  {

    return this.serverStatus === "ofline" ? "red" : " green";

  }
}
