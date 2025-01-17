import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Practice19';
  data: any[] = [];
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

}
}
