let Status = document.querySelector("h5")
let Button = document.querySelector("#add")
//let remove = document.querySelector('#remove')    now we are commenting this line because our main motive was to build 1 button for add friend and remove

let flag = 0       // through this logic we made 'Add Friennd' , 'Remove' in 1 button
Button.addEventListener("click",function(){
  if(flag == 0) {
    Status.innerHTML = "Friend"
    Status.style.color = 'green'
    Button.innerHTML = 'Remove Friend'
    Button.style.color = 'white'

    flag = 1
   }
  else{
    Status.innerHTML = 'Stranger'
    Status.style.color = 'red'
    Button.innerHTML = ' Add Friend '
    Button.style.color = 'black'
    flag = 0
   }
})

/*remove.addEventListener('click',function(){         now we are commenting this line because our main motive was to build 1 button for add friend and remove
    Status.innerHTML = 'Stranger'
    Status.style.color = 'red'
}) */


