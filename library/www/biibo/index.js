// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   const slides = document.getElementsByClassName("slide");
//   const dots = document.getElementsByClassName("dot");

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slideIndex++;

//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   for (let i = 0; i < dots.length; i++) {
//     dots[i].classList.remove("active");
//   }

//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].classList.add("active");

//   setTimeout(showSlides, 2000); // Change slide every 2 seconds
// }


// function showSpinner() {
//             document.querySelector(".spinner-overlay").style.display = "flex";
//         }

//         // Hide the spinner
//         function hideSpinner() {
//             document.querySelector(".spinner-overlay").style.display = "none";
//         }


// // JavaScript
// const selectElement = document.getElementById('locationSelect');
// const roundImageSection = document.getElementById('roundImageSection');
// const imageContainers = roundImageSection.querySelectorAll('.image-container');

// // Show all image containers initially
// function showAllImageContainers() {
//   imageContainers.forEach((container) => {
//     container.style.display = 'block';
//   });
// }

// // Store the previously selected value in localStorage (if available)
// let previousValue = localStorage.getItem('selectedValue') || 'All';
// selectElement.value = previousValue;

// // Function to show/hide image containers based on selected value
// function showHideImageContainers(selectedValue) {
//   if (selectedValue !== 'All') {
//     imageContainers.forEach((container) => {
//       const dataLocation = container.getAttribute('data-location');
//       container.style.display = dataLocation === selectedValue ? 'block' : 'none';
//     });
//   } else {
//     // Show all image containers when 'All' is selected
//     showAllImageContainers();
//   }
// }

// // Initial call to show all image containers
// showAllImageContainers();

// // Initial call to show/hide containers based on the initially selected value
// showHideImageContainers(previousValue);

// // Add event listener for change event on select element
// selectElement.addEventListener('change', (event) => {
//   const selectedValue = event.target.value;
//   localStorage.setItem('selectedValue', selectedValue); // Store the selected value in localStorage
//   showHideImageContainers(selectedValue); // Show/hide image containers based on selected value
// });






// selectElement.addEventListener('change', (event) => {
//   const selectedValue = event.target.value;
//   const url = `http://127.0.0.1:8002/api/method/library.www.biibo.index.aa?argument=${selectedValue}`; // Replace with your API endpoint URL
//   showSpinner(); 
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Fetched data:', data);
//       hideSpinner();
//     })
//     .catch((error) => {
//       console.log('Fetch error:', error);
//   });


// })




// const prevButton = document.querySelector(".prev-button");
// const nextButton = document.querySelector(".next-button");
// const cardsContainer = document.querySelector(".cards");
// const cards = document.querySelector(".cards");

// let currentPosition = 0;
// const cardWidth = document.querySelector(".brand-card").clientWidth;

// prevButton.addEventListener("click", () => {
//   if (currentPosition < 0) {
//     currentPosition += cardWidth;
//     updatePosition();
//   }
// });

// nextButton.addEventListener("click", () => {
//   if (currentPosition > -((cards.children.length - 1) * cardWidth)) {
//     currentPosition -= cardWidth;
//     updatePosition();
//   }
// });

// function updatePosition() {
//   cardsContainer.style.transform = `translateX(${currentPosition}px)`;
// }

// // Update card width on window resize
// window.addEventListener("resize", () => {
//   cardWidth = document.querySelector(".brand-card").clientWidth;
//   updatePosition();
// });
