import { Component } from '@angular/core';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrl: './protocol.component.css'
})
export class ProtocolComponent {
saveForm(myform:any):void
{
console.log(myform)
}
}
