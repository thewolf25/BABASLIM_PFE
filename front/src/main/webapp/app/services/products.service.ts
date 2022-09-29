import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:any = []
  pizzaStandart = [
    {id: 1,title :"Pizza Tonata", description :"Sauce tomate, Mozzarella 100% lait, Thon, Poivrons, Oignons,\n                    Champignons, Olive",image:"tonata.png", price :12.5 },
    {id: 2,title :"Pizza Classic Jambon", description :"Sauce tomate, Mozzarella 100% lait, Jambon de Dinde ",image:"jambon.png", price :10.5 },
    {id: 3,title :"Pizza Classic Thon", description :"Sauce tomate, Mozzarella 100% lait, Thon, Olives ",image:"classic.png", price :11.5 },
    {id: 4,title :"Pizza TEX-MEX", description :"Sauce tomate, Ahrouss, Mozzarella 100% lait, Poivrons, Oignons,\n                    Piment, Olive, Filet de Poulet ",image:"texmex.png", price :12.9 },
    {id: 5,title :"Pizza Pepperoni", description :"Sauce tomate, Mozzarella 100% lait, Chorizo de Boeuf ",image:"pepperoni.png", price :12 },
    {id: 6,title :"Pizza Suprême", description :"Crème fraîche, Mozzarella 100% lait, Oignons, Champignons, Filet de\n                    Poulet, Origan ",image:"supreme.png", price :12.5 },
    {id:7 ,title :"Pizza Texane", description :"Sauce Tomate , Mozzarella 100% Lait, Champignons, Oignons, Poivrons,\n                    Viande hachée de Boeuf",image:"texan.png", price :13 },
    {id: 8,title :"Pizza La Reine", description :"Sauce Tomate , Mozzarella 100% Lait, Champignons, Jambon de\n                    Dinde",image:"reine.png", price :11.5 },
    {id: 9,title :"Pizza Orientale", description :"Sauce Tomate, Mozzarella 100% Lait, Oignons, Poivrons, Merguez de\n                    Boeuf",image:"orientale.png", price :11.5 },
    {id: 10,title :"Pizza Végétarienne", description :"Sauce Tomate, Mozzarella 100% Lait, Oignons, Champignons, Poivrons,\n                    Olives",image:"veg.png", price :10.5 },
    {id: 11,title :"Pizza Pili", description :"Sauce Tomate, Mozzarella 100% Lait, Piments, Oignons, Viande hachée\n                    et Merguez de Boeuf",image:"pili.png", price :13 },
    {id: 12,title :"Pizza 4 Fromages", description :"Sauce Tomate (ou Crème fraîche), Mozzarella 100% Lait, Scarmoza ,\n                    Enotria, Gorgonzola",image:"4f.png", price :16.5 },
    {id: 13,title :"Pizza Master", description :"Sauce Tomate Harra, Mozzarella 100% Lait, Cheddar, Champignons,\n                    Oignons, Viande hachée de Boeuf",image:"master.png", price :11.9 },
    {id: 14,title :"Pizza Tona-Mex", description :"Crème fraîche, Ahrouss, Thon, Mozzarella 100% lait,\n                    Poivrons, Oignons, Piment, Olive",image:"tonamex.png", price :12.9 },
    {id: 15,title :"Pizza CHILI/BBQ Kebab", description :"Crème fraîche, Sauce à l'Ail, Mozzarella 100% lait,\n                    Poivrons, Oignons, Lamelle de Kebab, Sauce Ahrousse ou Sauce BBQ",image:"kebab.png", price :15.5 },

  ] 
  pizzaFamiliale = [
    {id: 16,title :"MEGA 4x4", description :"Personnalisez votre pizza 4x4 en choisissant 4 recettes parmi celles\n                    que nous proposons ",image:"4x4.png", price :29.5 },

  ]

  pizzaMini = [
    {id: 17,title :"Pizza Carrée Suprême", description :"Crème fraiche, Mozzarella, Poulet, Oignons, Champignons, Origan\n                ",image:"carresupreme.png", price :6 },
    {id: 18,title :"Pizza Carrée Tonata", description :"Sauce Tomate, Mozzarella,Thon, Oignons, Champignons, Poivrons,\n                    Olives",image:"carretonata.png", price :6 },
    {id: 19,title :"Pizza Carrée Végétarienne", description :"Sauce Tomate, Mozzarella, Thon, Oignons, Champignons, Poivrons,\n                    Olives",image:"carreveg.png", price :6 },
    {id: 20,title :"Pizza Carrée Calassic Thon", description :"Sauce tomate, Mozzarella, Thon, Olives",image:"carreneptune.png", price :6 },
    {id: 21,title :"Pizza Carrée TEXMEX", description :"Sauce Tomate Harra, Mozzarella, Piments, Oignons, Olives,\n                    Poulet",image:"carretexmex.png", price :6 },
    {id: 22,title :"Pizza Carrée pepperoni", description :"Sauce tomate, Mozzarella, Chorizo ",image:"carrepepperoni.png", price :6 },
    {id: 23,title :"Pizza Carrée Pili", description :"Sauce Tomate, Mozzarella, Piments, Oignons, Viande hachée,\n                    Merguez",image:"carrepili.png", price :6 },
    {id: 24,title :"Pizza Carrée La Reine", description :"Sauce Tomate , Mozzarella, Champignons, Jambon",image:"carrereine.png", price :6 },
    {id: 25,title :"Pizza Carrée Orientale", description :"Sauce Tomate, Mozzarella, Oignons, Poivrons, Merguez ",image:"carreoriental.png", price :6 },
    {id:26 ,title :"Pizza Carrée Master", description :"Sauce Tomate Harra, Mozzarella, Cheddar, Champignons, Oignons, Viande\n                    hachée",image:"carremaster.png", price :6 },
    {id: 27,title :"Pizza Carrée Jambon", description :"Sauce Tomate, Mozzarella, Jambon ",image:"carrejambon.png", price :6 },
    {id: 28,title :"Pizza Carré Texane", description :"Sauce Tomate , Mozzarella, Champignons, Oignons, Poivrons, Viande\n                    hachée ",image:"carretexan.png", price :6 },
   
  ]
  entry = [
    {id: 29,title :"Chicken Wings ", description :" x5 pièces avec un petit pain",image:"wings.png", price :4 },
    {id: 30,title :"Potato's ", description :" Des pommes de terre assaisonnées cuites, dorées et\n                    croustillantes.",image:"potatoes.png", price :4 },
    {id: 31,title :"Cheesy Bread", description :"Sauce à l'Ail, Mozzarella, Origan ",image:"bspizza.png", price :4 },
  ]
  drinks = [
    {id: 32,title :"Coca Cola", description :" Canette de 24cl",image:"coca.png", price :2 },
    {id: 33,title :"Coca Cola Zero", description :"Sans sucre, Canette de 24cl ",image:"zero.png", price :2 },
    {id: 34,title :"Fanta", description :"Canette de 24cl ",image:"fanta.png", price :2 },
    {id: 35,title :"Apla", description :"Canette de 24cl ",image:"apla.png", price :2 },
    {id: 36,title :"Boga Lim", description :"Canette de 24cl ",image:"lim.png", price :2 },
    {id: 37,title :"Boga Cidre", description :"Canette de 24cl ",image:"cidre.png", price :2 },
    {id: 38,title :"Orangina", description :"Canette de 24cl ",image:"orangina.png", price :2.2 },
    {id: 39,title :"Eau minérale", description :"eau minérale naturelle 1L ",image:"eau.png", price :1.4 }
  ]

  constructor() { 
    this.products = [...this.pizzaStandart , ...this.pizzaFamiliale, ...this.pizzaMini, this.drinks];
  }


  getSingleProduct(id:number):any{
    const product = this.products.find((s:any) => Number(s.id) === Number(id)) 
    return product
  }

}
