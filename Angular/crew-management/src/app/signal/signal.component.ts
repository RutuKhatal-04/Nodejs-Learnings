import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

    counter=signal(0);
    counter1=signal(0);
    username=signal(' ');
    users=  signal([
      'ARC',
      'TUTORIALS'
    ]);
    videos=signal({
      title:'YOUTUBE CHANNEL',
      description:'Awesome angular signal tutorial'
    })
    setCounter(){
      this.counter.set(30)
    }

    setCounter1(){
      this.counter1.update(counter1=>counter1+50)
    }
}
