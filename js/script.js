// 16gb - 180
// s 512 - 100 1tb-180
// delivery 20

/*--------------------------------
        Identifier Declaration
 ---------------------------------*/


// memory 
const variationMemory8gb  = document.getElementById('variations-memory-8gb')
const variationMemory16gb  = document.getElementById('variations-memory-16gb')

 // storage
const variationStorage256gb  = document.getElementById('variation-storage-256gb')
const variationStorage512gb  = document.getElementById('variation-storage-512gb')
const variationStorage1tb  = document.getElementById('variation-storage-1tb')

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


/*--------------------------------
        Event Handler 
 ---------------------------------*/


 // memory variations event handler
variationMemory8gb.addEventListener('click',function(){
    memoryCost.innerText = 0;
    totalPriceCalculation();
})
variationMemory16gb.addEventListener('click',function(){
    memoryCost.innerText = 100;
    totalPriceCalculation();
})

// storage variations event handler
variationStorage512gb.addEventListener('click',function(){
    storageCost.innerText = 100;
    totalPriceCalculation();
})
variationStorage1tb.addEventListener('click',function(){
    storageCost.innerText = 180
    totalPriceCalculation();
})

// delivery variations event handler
variationFreeDelivery.addEventListener('click',function(){
    deliveryCost.innerText = 0
    totalPriceCalculation();
})

variationExpressDelivery.addEventListener('click',function(){
    deliveryCost.innerText = 20
    totalPriceCalculation();
})

// promo button 
promoButton.addEventListener('click',function(){
    promoCodeCheck(promoInput.value);
})




/*--------------------------------
        Calculation
 ---------------------------------*/


// subtotal calculation
function totalPriceCalculation(){
    let basePrice = 1299 ; 
    let subTotal = 0;
    subTotal =basePrice + parseInt(memoryCost.innerText) +  parseInt(storageCost.innerText) +   parseInt(deliveryCost.innerText) 
    subTotalPrice.innerText = subTotal;   
    totalPrice.innerText = subTotal;

}


function promoCodeCheck(promoCode){

    if(promoCode == 'stevekaku'){
        const totalCostAfterPromoApply = parseFloat(subTotalPrice.innerText) - (parseFloat(subTotalPrice.innerText) * 0.2)
        totalPrice.innerText = totalCostAfterPromoApply;
        promoInput.value = '';
    }

    

}
