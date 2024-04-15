// main container of all bus seats
const container = document.querySelector('.container');

const seats = document.querySelectorAll('.bus-seat');

const availableSeats = document.getElementById('available-seats');

const count = document.getElementById('seat-badge-count');

const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');

const ticketPrice = document.getElementById('ticket-price');

const couponButton = document.getElementById('coupon-apply-btn')
const nextButton = document.getElementById('next-btn')

const couponInput = document.getElementById('coupon-input')
const discountPrice = document.getElementById('discount-price')



container.addEventListener('click', (e) => {
    toggleSeat(e)
})

function updateSelectedCount() {
    // Get all selected seats
    const selectedSeats = document.querySelectorAll('.bus-seat.bg-primary-color')

    const selectedSeatsCount = selectedSeats.length;

    const perTicketPrice = parseInt(ticketPrice.innerText);


    count.innerText = selectedSeatsCount;
    totalPrice.innerText = selectedSeatsCount * perTicketPrice;
    availableSeats.innerText = 40 - selectedSeatsCount;
    grandTotal.innerText = selectedSeatsCount * perTicketPrice;
}


function toggleSeat(e) {


    if (e.target.classList.contains("bg-primary-color")) {
        e.target.classList.remove("bg-primary-color");
    }
    else {
        const selectedSeats = document.querySelectorAll('.bus-seat.bg-primary-color')
        if (selectedSeats.length < 4) {
            e.target.classList.add("bg-primary-color");
        }
        else {
            toast()
        }
    }

    applyButtonToggle()
    nextButtonToggle()

    updateSelectedCount()
}



function applyButtonToggle() {
    const selectedSeats = document.querySelectorAll('.bus-seat.bg-primary-color')
    if (selectedSeats.length == 4) {
        couponButton.classList.remove('pointer-events-none');
        couponButton.classList.add('bg-primary-color');
    }
    else {
        couponButton.classList.add("pointer-events-none")
        couponButton.classList.remove("bg-primary-color")
    }
}


function nextButtonToggle() {
    const selectedSeats = document.querySelectorAll('.bus-seat.bg-primary-color')
    if (selectedSeats.length > 0) {
        nextButton.classList.remove('pointer-events-none')
        nextButton.classList.add('bg-primary-color')
    }
    else {
        nextButton.classList.add("pointer-events-none")
        nextButton.classList.remove("bg-primary-color")
    }
}

// Toast 
function toast() {
    const toast = document.getElementById('alert-toast');
    toast.classList.remove('hidden');
    setTimeout(() => { toast.classList.add("hidden") }, 3000);
}


couponButton.addEventListener('click', () => {
    applyDiscount()
})


function applyDiscount() {
    const couponInputValue = couponInput.value;
    if (couponInputValue === 'NEW15') {
        const totalPriceNumber = parseInt(totalPrice.innerText);
        const discountAmount = (totalPriceNumber * 15) / 100;
        discountPrice.innerText = discountAmount;

        grandTotal.innerText = totalPriceNumber - discountAmount;
    }
    else if (couponInputValue === 'Coupon Code') {
        const totalPriceNumber = parseInt(totalPrice.innerText);
        const discountAmount = (totalPriceNumber * 20) / 100;
        discountPrice.innerText = discountAmount;
        grandTotal.innerText = totalPriceNumber - discountAmount;
    }
}

