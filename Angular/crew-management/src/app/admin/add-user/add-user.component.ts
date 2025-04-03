import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
 username:string='';
 userId:number=50;
 anchorUrl:string='http://google.com'
 disabled:boolean=true
}
