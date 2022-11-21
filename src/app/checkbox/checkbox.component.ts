import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  onSubmit=(V1: any)=> {
    console.log(V1.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
