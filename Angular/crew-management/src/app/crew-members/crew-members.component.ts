import { Component ,EventEmitter,Input ,Output} from '@angular/core';

@Component({
  selector: 'app-crew-members',
  standalone: true,
  imports: [],   //--- imports takes the modules in which i have to work 
  //providers:[] --- it takes the services which i m going to use
  templateUrl: './crew-members.component.html',
  styleUrl: './crew-members.component.scss'
})
export class CrewMembersComponent {


  @Input() msg:string="";
  @Input() token:string="";
  @Output() messageSend = new EventEmitter<string>();


  sendMessage(){
    this.messageSend.emit("hello from child to parent");
  }
}
