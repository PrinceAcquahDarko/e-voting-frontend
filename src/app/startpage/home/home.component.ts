import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {anim} from '../../shared/animations'

const trigge = anim()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigge
  ]
})
export class HomeComponent implements OnInit {  
  none = 'none'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  login($element: any){
    this.none = 'block';
    $element.scrollIntoView({behaviour: 'smooth', block: 'start', inline: 'nearest'})
    this.router.navigate(['login'])
  }

  register($element: any){

    this.none = 'block';
    $element.scrollIntoView({behaviour: 'smooth', block: 'start', inline: 'nearest'})
    this.router.navigate(['register'])
  }

}
