let menu={
    pizza : 180,
    burger : 80,
    punjabi : 190,
    chinese : 220,
    south_indian :200,
    cake : 350
}

// for(item  in menu){
//     console.log(item,menu[item])
// }
let items=[];
let prices =[];

function AddItem(cat,ids){
    items.push(cat);
    prices.push(menu[cat]);
    console.log(items,prices);
    sessionStorage.setItem('items',items) ; 
    sessionStorage.setItem('prices',prices);  

}
// document.querySelector("#item-text").innerHTML = localStorage.getItem('cart');