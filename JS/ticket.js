const menuBtn = document.getElementById('menu-btn');
const mobile_menu = document.querySelector('#mobileMenu');
const selectedSeat = document.getElementById('selected-seat');

menuBtn.addEventListener('click', function(){
    menuBtn.children[0].classList.toggle('hidden');
    const menuClose = document.getElementById('close-icon');

    menuClose.classList.toggle('hidden');
    mobile_menu.classList.toggle('hidden');
    mobile_menu.classList.toggle('flex');
});

function selectSeat(event){
   selectedSeat.innerHTML = `
   <li class="text-base font-medium flex justify-between">
   <span>${event.innerText}</span>
   <span>Economy</span>
   <span>৳550</span>
   </li>
   `
}