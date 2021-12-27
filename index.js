  
const container = document.querySelector(".container");

const cards  = document.querySelector(".cards");

  var headerl = document.getElementById("headerl");

        function showMenu() {
            headerl.style.right = "0";
        }

        function hideMenu() {
            headerl.style.right = "-210px";
        }




let isPressedDown = false;

let Xspace;

container.addEventListener("mousedown", (e) => {
    isPressed = true;
    xSpace = e.offsetX - cards.offsetLeft;
    console.log(cards.offsetLeft);
    container.style.cursor = "grabbing";
})

container.addEventListener("mouseup" , ()=>{
container.style.cursor = "grab";
   
})

 
window.addEventListener("mouseup" , ()=>{
isPressed = false;
   
})

container.addEventListener("mousemove", (e) => {
    if(!isPressed) return;

     e.preventDefault();
     cards.style.left = `${e.offsetX - xSpace}px`;

     cardbound();

})

function cardbound()
{
    const container_rect = container.getBoundingClientRect();
    const cards_rect  =cards.getBoundingClientRect();

    if(parseInt(cards.style.left)  > 0)
    {
    cards.style.left = 0 ;
    }

    else if(cards_rect.right < container_rect.right)
     {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }

    console.log(cards_rect.right);
    console.log(container_rect.right);
}

