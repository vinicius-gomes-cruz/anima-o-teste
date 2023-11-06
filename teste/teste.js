let secs = document.querySelectorAll('section')

window.onscroll = () => {
     secs.forEach(sec => {
         let top = window.scrollY;
         let offset = sec.offsetTop - 800;
         let height = sec.offsetHeight + 1000;
         console.log(top)

         if (top >= offset && top < offset + height) {
             sec.classList.add('animado');
         }

         else {
             sec.classList.remove('animado');
         }
     })
}