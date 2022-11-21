import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  onSubmit(form: any){

  }

  city=[
    {id:1, name:"ABC"},
    {id:2, name:"DEF"},
    {id:3, name:"GHI"}
  ];

  log(val: any)
  {
    console.log(val)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
