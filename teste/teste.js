let divs = document.querySelectorAll('div')

window.onscroll = () => {
     divs.forEach(div => {
         let top = window.scrollY;
         let offset = div.offsetTop - 150;
         let height = div.offsetHeight;
         console.log(top)

         if (top >= offset && top < offset + height) {
             div.classList.add('animado');
         }

         else {
             div.classList.remove('animado');
         }
     })
}