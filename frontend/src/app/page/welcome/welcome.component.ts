import { Component,OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //*********welcome.compoenet.html***********/
  @ViewChild('name') nameKey!: ElementRef;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  startQuiz(){
    localStorage.setItem("name", this.nameKey.nativeElement.value);
    this.route.navigateByUrl("/question")
  }
    
  

}
