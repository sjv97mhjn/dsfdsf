import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   username:string="";
   serverId : number =10;
  serverStatus : string ='offline';
  ANS : boolean = true;
  newserver: string ="No New Server is Created";
  Showinput="";
  test=false;

   check()
   {

   	if(this.username=="")
   	{
   		return true;
   	}
   	else
   		return false;

   }
   RESET()
   {
   	this.username="";
   }
 constructor()
 {

console.log( Math.random() );
this.serverStatus= Math.random()>0.5?"online":"ofline";

setTimeout( () => {

	this.ANS=false;

},2000 )

 }


  

    onclickserver()
    {

      this.newserver="Server is Created";
  		this.test=true;
    }
    showinput(event : Event)

    {

      this.Showinput=(<HTMLInputElement>event.target).value;

    }
  

}
