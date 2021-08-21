// 16gb - 180
// s 512 - 100 1tb-180
// delivery 20

// storage
const variationStorage256gb  = document.getElementById('variation-storage-256gb')
const variationStorage512gb  = document.getElementById('variation-storage-512gb')
const variationStorage1tb  = document.getElementById('variation-storage-1tb')

// memory 
const variationMemory8bg  = document.getElementById('variations-memory-8gb')
const variationMemoryCost  = document.getElementById('variations-memory-16gb')

// delivery 
const variationFreeDelivery  = document.getElementById('variation-free-delivery')
const variationExpressDelivery  = document.getElementById('variation-express-delivery')

// cost 
const memoryCost  = document.getElementById('memory-cost')
const storageCost  = document.getElementById('storage-cost')
const deliveryCost  = document.getElementById('delivery-charge')
const subTotalPrice  = document.getElementById('sub-total-price')
const totalPrice  = document.getElementById('total-price')

// promo 
const promoInput  = document.getElementById('promo-input')
const promoButton  = document.getElementById('promo-button')


// storage variation event handel
variationStorage512gb.addEventListener('click',function(){
    storageCost.innerText = 100;
    totalPriceCalculation();
})
variationStorage1tb.addEventListener('click',function(){
    storageCost.innerText = 180
    totalPriceCalculation();
})




/// calculation 

// subtotal calculation
function totalPriceCalculation(){
    let basePrice = 1299 ; 
    let subTotal = 0;
    subTotal =basePrice + parseInt(memoryCost.innerText) +  parseInt(storageCost.innerText) +   parseInt(deliveryCost.innerText) 
    subTotalPrice.innerText = subTotal;   
}


