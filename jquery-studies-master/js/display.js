// function getlocal(){
//     let displayItem = JSON.parse(localStorage.getItem("CATEGORY"))
//     let listItem = JSON.parse(localStorage.getItem("NewList"))

//     return [displayItem, listItem]
// }
// console.log(getlocal())

    let displayItem = JSON.parse(localStorage.getItem("CATEGORY"))
    let listItem = JSON.parse(localStorage.getItem("NewList"))

    // return [displayItem, listItem]

console.log(displayItem)
console.log(listItem)


let item = document.querySelector("#input")
let catig = document.querySelector("#cat2")
createItem(item)


let Items = "";

function displayItems(){
    
    for(let i = 0; i < listItem.length; i++){
        Items +=`
        
        <div>
        ${listItem[i]}
        </div>
        
        `
    }

}
   function listItems(){
    for(let i = 0; i < displayItem.length; i++){
        Items +=`
        
        <div>
        ${displayItem[i]}
        </div>
        
        `
    }
   }
   

    document.querySelector("#listers").innerHTML = Items



function createItem(catig){
    listItem.push(catig)
    localStorage.setItem("items", JSON.stringify(listItem))
 
    
}

function createItem(item){
    displayItem.push(item)
    localStorage.setItem("items", JSON.stringify(displayItem))
 
}


// getlocal().forEach((item) => {
//     fetch.innerHTML= `

//     <div>${item.displayItem}</div>
//     <div>${item.listItem}</div>
    
//     `
// })