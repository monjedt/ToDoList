let url = "https://dummyjson.com/todos" ; 
let todoList = [] ; 

let count = 0 ;


async function fetchData(){
    let response = await fetch(url) ; 
    let data = await response.json() ; 
    data.todos.forEach(todo => {
        todoList.push(todo) ; 
        
    });
    console.log(todoList) ; 
    displayData(todoList) ; 
    count++;
    document.getElementById("counter-todo").textContent = count ; 
}


function displayData(todoList){
    let ul  = document.getElementById("todolist") ; 
    ul.innerHTML = "";
    for(let i = 0 ; i<todoList.length; i++)
    {   
        count++;
        let deletebtn = document.createElement("button") ; 
        let liElement = document.createElement("li") ; 
        let checkbox = document.createElement("input") ;
        checkbox.type = "checkbox" ;
       
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                liElement.style.textDecoration = "line-through"; 
            } else {
                liElement.style.textDecoration = "none"; 
            }
        });

        deletebtn.textContent = "delete" ; 
        liElement.textContent = todoList[i].todo ; 
        liElement.appendChild(checkbox);
        liElement.appendChild(deletebtn);
        ul.appendChild(liElement) ; 

       deletebtn.addEventListener('click',() => {
        if(confirm("are you sure yhat you want to delete it ?")){
        liElement.remove() ; 
        count--;
        document.getElementById("counter-todo").textContent = count ; 
        }
       })
    }
}


function addData()
{
    let ul  = document.getElementById("todolist") ;
    let searchbtn =  document.getElementById("add-button") ; 
    searchbtn.addEventListener('click',(event) => {
    let dataText = document.getElementById("add-todo").value ;  
    if (dataText.trim() !== "") { // Check if input is not empty
        let liElement = document.createElement("li");
        liElement.textContent = dataText;
        let deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        let checkbox = document.createElement("input") ;
        checkbox.type = "checkbox" ;
        count++;
        document.getElementById("counter-todo").textContent = count ; 
       
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                liElement.style.textDecoration = "line-through"; 
                liElement.style.color = "red" ;
            } else {
                liElement.style.textDecoration = "none"; 
            }
        });
        liElement.appendChild(checkbox)
        liElement.appendChild(deletebtn);
        ul.appendChild(liElement);
        dataText = document.getElementById("add-todo").value = "";
        deletebtn.addEventListener('click', () => {
            if (confirm("Are you sure that you want to delete it?")) {
                liElement.remove();
                count--;
                document.getElementById("counter-todo").textContent = count ; 
            }
        });
   }
})
} 
       
// function searchData() {
//     let searchText = document.getElementById("search-todo").value.toLowerCase();  // Get search input and convert to lowercase
//     let ul = document.getElementById("todolist");
//     let listItems = ul.getElementsByTagName("li");  // Get all list items

//     // Loop through all list items and hide those that don't match the search text
//     for (let i = 0; i < listItems.length; i++) {
//         let todoText = listItems[i].textContent.toLowerCase();
//         if (todoText.includes(searchText)) {
//             listItems[i].style.display = "";  // Show the item if it matches the search
//         } else {
//             listItems[i].style.display = "none";  // Hide the item if it doesn't match
//         }
//     }
// }
// Call the searchData function when the button is clicked
// document.getElementById("search-button").addEventListener("click", searchData);
// searchData();


// 

document.addEventListener('DOMContentLoaded', () => { //chatgpt
    fetchData();  // Fetch initial data
    addData();    // Set up adding new todo
    // 
});

// let counter = document.getElementById("counter-todo").textContent = count ; 








