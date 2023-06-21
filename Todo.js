let inputElement=document.querySelector('input');
let formElement=document.querySelector('form');
let listElement=document.querySelector('ul');
let totalTasksElement=document.querySelector('#total-task');
let taskslist=[
    
];

function deleteItem(e){
    let task=e.target.parentElement.previousElementSibling.innerHTML;
    let index=taskslist.indexOf(task);
    if(index !== -1){
        taskslist.splice(index,1)
    }
    populateList();
}


function populateList(){
    listElement.innerHTML='';
     taskslist.forEach(function(item){
        let newItem=document.createElement('li');


        //Add new span for text
        let span=document.createElement('span');
        span.innerHTML=item;
        newItem.appendChild(span);



        //Add delete button
        let anchorElement=document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML='<i class="fa-solid fa-trash"></i>'
        newItem.appendChild(anchorElement);
        
        anchorElement.addEventListener('click',(e)=>deleteItem(e)) ;

        //ADD LI TO UL
        listElement.appendChild(newItem);

     });
     totalTasksElement.innerHTML=taskslist.length;
     inputElement.value='';
}
populateList();



function addTask(){

  if(inputElement.value){
    taskslist.push(inputElement.value);
    populateList();
  }else{
    alert("add a task!")
  }
}

formElement.addEventListener('submit',function(e){
    e.preventDefault();
    addTask();
    

});