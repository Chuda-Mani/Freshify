
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
 
});

function goToFruits() {
  // Redirect to the fruits page URL (replace 'fruits.html' with your actual fruits page)
  window.location.href = "fruits.html";
}

function goToProducts()
{
  window.location.href="products.html";
}

function goToCustomers()
{
  window.location.href="customers.html";
}

