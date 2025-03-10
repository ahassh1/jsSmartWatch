const ringButtons = document.querySelectorAll(".ring-button");
for (let i = 0; i < ringButtons.length; i++) {
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener("click", function (event) {
        const color = event.target.id.replace("-color", "");
        console.log(color)
        for (let j = 0; j < ringButtons.length; j++) {
            ringButtons[j].classList.remove("border-purple-600");
            ringButtons[j].classList.add("border-gray-300");
        }
        //color add kortesi
        event.target.classList.add("border-purple-600");
        event.target.classList.remove("border-gray-300");
        
        const productImage = document.getElementById("product-image");
        // productImage.src = "../images/gray.png";
        // productImage.src = `../images/${color}.png`;
        let productImageBase = "../images/";
    productImage.src = productImageBase + color + ".png";
  });
}



function selectWristSize(size){
    const sizes = ['S', 'M', 'L', 'XL'];
    for(let i = 0; i<sizes.length; i++){
        const button = document.getElementById('size-'+ sizes[i]);
           const element =sizes[i];
          if(size===element){
           button.classList.add("border-purple-600")
          }else{
            button.classList.remove('border-purple-600')
          }
    }
}

const quantityElement = document.querySelectorAll('.quantity-button')
for(let btn of quantityElement){
        btn.addEventListener('click', function(event){

          const amount =event.target.innerText === '+' ? 1 : -1; // 1 ||-1

          const quantityElement = document.getElementById('quantity');
          const currentQuantity= parseInt(quantityElement.innerText);  //0

         const newQuantity = Math.max(0, currentQuantity + amount);// 0 +1 +1
         quantityElement.innerText = newQuantity;
        })  
}
 
// add to card 
let cartCount = 0;
document.getElementById('add-to-cart')
.addEventListener('click', function(){
  
  const quantity = parseInt(document.getElementById('quantity').innerText);
  
  if(quantity > 0){

     document.getElementById('checkout-container').classList.remove('hidden');
     cartCount = cartCount +quantity;
     document.getElementById('cart-count').innerText  = cartCount;
 }
 else{
  alert('please add a quantity')
 }
})