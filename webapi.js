

let transactions_number = document.body.querySelector(".transactions div .itemnumbers");


function counting(){

    let transactions_value =transactions_number.textContent
transactions_number.textContent = Number(transactions_value) + 1

}

setInterval(counting , 1000);


//blockchain-developers,macwindow_body

let sidebar_element=document.body.querySelectorAll(".blockchain_sidebar_item");
let content_element=document.body.querySelectorAll(".body_content")

sidebar_element[0].classList.add("selected");
content_element[0].classList.add("show");

sidebar_element.forEach(function sidebar_iterator(item , index) {

item.addEventListener("click",function onclick(event) {

    sidebar_element.forEach(function remove_element(element) {
        element.classList.remove("selected")
    });
     
    let selectedelement = event.target;
    selectedelement.classList.add("selected");


    content_element.forEach(function remove_element_from_content(element) {
        element.classList.remove("show")
    });
   let counterpart_content = content_element[index];
   counterpart_content.classList.add("show");

  });
});






