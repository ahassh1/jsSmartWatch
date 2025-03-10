const ringButton = document.querySelectorAll('.ring-button');

for(let i = 0; i < ringButton.length; i++){
    const ringBtn = ringButton[i]
    ringBtn.addEventListener('click', function(event){
        for(let j= 0; j < ringButton.length; j++){
            ringButton[j].classList.remove('border-purple-600');
            ringButton[j].classList.add('border-gray-700');
        }

        event.target.classList.add('border-purple-600'); 
        event.target.classList.remove('border-gray-700');

        const productImage =document.getElementById('product-image');
        productImage.src = '../images/teal.png'
    }) 
}

