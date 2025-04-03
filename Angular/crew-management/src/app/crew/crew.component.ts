import { Component } from '@angular/core';
import { CrewMembersComponent } from '../crew-members/crew-members.component';
@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CrewMembersComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {


  message :string="Hello Dear";
  token :string="123asdffgg";
  receivedMessage:string="1";


  receivingMessage(message:string):void{
    this.receivedMessage=message;
  }
}
