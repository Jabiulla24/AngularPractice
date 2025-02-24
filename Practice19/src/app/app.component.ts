import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { SignalPracticeComponent } from './signal-practice/signal-practice.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,SignalPracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Practice19';
  data: any[] = [];
  data2:any[]=[];
  data3:any[]=[];
  myObserver = new Observable((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
    // setTimeout(() => {
    //   observer.error(new Error('Something went wrong')); // If this is called further data will not be sent similarly with complete also
    // }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
});

//Using of and For Operrator
//Of Operator creates an observable from the arguments we pass to it which is emited
//After all the values it Emits the complete 

//Note the Array values will be printed as it is it will be not iterated 

myObserver2=of([1,2,3,4,5],[5,6,7,8],true,34,2222);

//To iterate over the arrays we need another operator called from Operator which take one argument which iterates and emits
//We can us From Operator to convert a promise to an Observables

myObserver3=from([5,6,6,7])
//Promise Data is a promise It will be converted to Observable using from 
promiseData= new Promise((resolve,reject)=>{
resolve([20,30,40,50]);
})

myObserver4=from(this.promiseData);

getdata() {
  //First Call back if for Next,Second Call back is for Error and third for Complete
//   this.myObserver.subscribe((val: any) => {
//     this.data.push(val);      
//   },
//     (err: any) => {
//       alert(err.message);
    
//     },
//     () => {
//     alert('Finally is Called')
//   })
this.myObserver.subscribe({
  next:(val: any)=>{
    this.data.push(val);   
  },
  error(err: any){
    alert(err.message)
  },
  complete(){
    alert('Completed');
  }
})
this.myObserver2.subscribe({
  next:(val: any)=>{
    this.data2.push(val);   
  },
  error(err: any){
    alert(err.message)
  },
  complete(){
    alert('Completed');
  }
})
this.myObserver4.subscribe({
  next:(val: any)=>{
    this.data2.push(val);   
  },
  error(err: any){
    alert(err.message)
  },
  complete(){
    alert('Completed');
  }
})
}
}
