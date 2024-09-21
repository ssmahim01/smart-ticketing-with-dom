// Global variables

const menuBtn = document.getElementById('menu-btn');
const mobile_menu = document.querySelector('#mobileMenu');
const selectedSeat = document.getElementById('selected-seat');
const total_ticket_booked = document.querySelector('#total-booked');
const availableSeat = document.getElementById('available-seat');
const total_price = document.getElementById('total-price');
const couponInput = document.getElementById('coupon-field');
const couponBtn = document.getElementById('coupon-btn');


// Click menu

menuBtn.addEventListener('click', function(){
    menuBtn.children[0].classList.toggle('hidden');
    const menuClose = document.getElementById('close-icon');

    menuClose.classList.toggle('hidden');
    mobile_menu.classList.toggle('hidden');
    mobile_menu.classList.toggle('flex');
});

// Seat booking content

let seatName = [];
let totalPrice = 0;

function selectSeat(event){

    let value = event.innerText;

    if(seatName.includes(value)){
        return alert('Seat already booked!');
    }

    else if(seatName.length < 4){
        event.classList.add('bg-primary');
        event.classList.add('text-white');
    
        seatName.push(event.innerText);
        total_ticket_booked.innerText = seatName.length;
    
        // Decrease available seat
    
        const availableSeatText = parseFloat(availableSeat.innerText);
        const newSeatValue = availableSeatText - 1;
        availableSeat.innerText = newSeatValue;
    
    
       selectedSeat.innerHTML += `
       <li class="text-base font-medium flex justify-between">
       <span>${event.innerText}</span>
       <span>Economy</span>
       <span>৳550</span>
       </li>
       `
    
        // Update total price
    
        totalPrice += 550;
        total_price.innerText = totalPrice.toFixed(2);
    
        // Active Coupon content
    
        if(seatName.length > 3){
            couponInput.removeAttribute('disabled');
            couponBtn.removeAttribute('disabled');
        }
    }
    else{
        alert('Maximum seat booked!');
        return;
    }
}