function toggleMenu() {
    alert("Menu functionality coming soon!");
  }
   // Menu Toggle for Mobile
   const menuToggle = document.querySelector('.menu-toggle');
   const navigation = document.querySelector('.navigation');

   menuToggle.addEventListener('click', () => {
     navigation.classList.toggle('active');
   });
   document.addEventListener('DOMContentLoaded', function() {
   const statNumbers = document.querySelectorAll('.stat-number');

   statNumbers.forEach(statNumber => {
       let value = statNumber.getAttribute('data-value');
       if(value){
           const target = parseFloat(value);

           let start = 0;
           let duration = 2000; // Animation duration in milliseconds (adjust as desired)

           if(target <=1000){
                duration = target * 100; // Adjust the duration
           } else {
                duration = 1000 * 2; // Adjust the duration
           }


           function animateNumber(current, target, duration) {
            const increment = Math.ceil(target / (duration/10));
                let timer = setInterval(() => {
                   current += increment;
                   if (current > target) {
                       clearInterval(timer);
                        statNumber.textContent = new Intl.NumberFormat().format(target); // Format with commas
                      return
                  }
                     statNumber.textContent = new Intl.NumberFormat().format(Math.ceil(current)); // Format with commas
               }, 10);
           }
           animateNumber(start, target <=1000?target:1000, duration);
      }
   });
});

document.getElementById('learnMoreBtn').addEventListener('click', function() {
  alert('Thank you for your interest! More information will be available soon.');
});