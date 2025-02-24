import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signal-practice',
  imports: [],
  templateUrl: './signal-practice.component.html',
  styleUrl: './signal-practice.component.scss',
})
export class SignalPracticeComponent {

  //In this we are learinig SIGNALS which is used instead of Zone.js in Change detection
firstName= signal('John');
lastName=signal('Micheal');

rollNumber=signal<number>(0);

increment(){
  this.rollNumber.update(oldVal=>oldVal+1);
  this.firstName.set('Jax')
}

//Linked Signal
//If the Signal values changes then the linked signal also needs to be changed ie Linked Change

fullName=linkedSignal({
  source: this.firstName,
  computation:(newVal,oldVal)=>{
    return newVal+this.lastName()
  }
});
}

