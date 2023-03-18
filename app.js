const btn=document.querySelector(".btn");
const btn2=document.querySelector(".clear")
const list=document.querySelector("ul");
const spn=document.querySelector(".pending_tasks")
let count=0;
btn.addEventListener('click',function addTask() {
    const task=document.querySelector("input");
    const newTask=task.value;
    if(newTask.trim()){
        const li=document.createElement("LI");
        li.innerText=newTask;
        list.appendChild(li);
        count+=1;
        spn.textContent=`${count}`
        task.value="";
    }
})
document.querySelector("input").addEventListener('keypress',function addTask(e) {
    if(e.key=='Enter'){
        const task=document.querySelector("input");
        const newTask=task.value;
        if(newTask.trim()){
            const li=document.createElement("LI");
            li.innerText=newTask;
            list.appendChild(li);
            count+=1;
            spn.textContent=`${count}`
            task.value="";
        }
    }
})
list.addEventListener('click',function deleteTask(e) {
    if(e.target.nodeName=='LI'){
        e.target.classList.add('lclass');
        setTimeout(() => {
            e.target.remove();
        
            count-=1;
            if(count==0){
                spn.textContent="No";
            }
            else{
            spn.textContent=`${count}`;
        }
        
        }, 1000);
    }

})
btn2.addEventListener('click',function clearAll(){
    list.textContent="";
    count=0;
    spn.textContent="No";
})
