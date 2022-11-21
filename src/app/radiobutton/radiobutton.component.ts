import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {

  onSubmit=(V1: any)=> {
    console.log(V1.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
