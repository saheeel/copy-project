import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizzaday',
  templateUrl: './pizzaday.component.html',
  styleUrls: ['./pizzaday.component.css']
})
export class PizzadayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nameRegex = /^[a-zA-Z ]{2,30}$/;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  userData:any|undefined;
  foods = ["Pizza", "Burger", "Pasta", "Salad", "Sandwich", "Soup", "Tacos", "Burrito", "Sushi", "Ramen", "Noodles", "Rice", "Chicken", "Steak", "Fish", "Pork", "Beef", "Lamb", "Turkey", "Ham", "Eggs", "Cheese", "Bacon", "Pancakes", "Waffles", "French Toast", "Ice Cream", "Cake", "Pie", "Cookies", "Brownies", "Chocolate", "Candy", "Fruit", "Vegetables", "Potatoes", "Rice", "Beans", "Nuts", "Milk", "Juice", "Water", "Tea", "Coffee", "Soda", "Beer", "Wine", "Lemonade", "Limeade", "Margarita", "Mojito", "Sangria", "Cocktail", "Martini", "Whiskey", "Vodka", "Rum", "Gin", "Tequila", "Brandy", "Cognac", "Champagne", "Cider", "Milkshake" ]
  sizes = ["Small", "Medium", "Large", "Extra Large"]
  onSubmit(form: any): void {
    this.userData = form.value;
    console.log(this.userData);
  }
fooditem = {
  price: 300
}

}
