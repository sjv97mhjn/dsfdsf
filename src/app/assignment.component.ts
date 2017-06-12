import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-assignment',
  template: `
    <p>
      assignment Works!
    </p>
    <button (click)="activate()">Show/Hide Details</button>
   <p  *ngIf="active">Secret Meassage Revealed Id=12798
   </p>
   <p *ngFor="let xy of xyz"
    [ngStyle]="{color: setcolor(xy)}">Button Clicked {{xy}} time
   </p>
  `,
  styles: []
})
export class AssignmentComponent implements OnInit {

  active=false;
  xyz =[];
  x=1;
  constructor() { }

  activate()
  {

    this.active=!this.active;
    this.xyz.push(this.x);
    this.x=this.x+1;
  }

setcolor(x)
{
  if(x>=5)
    return "red";
  else
    return "black";

}
  ngOnInit() {
  }

}
