let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}


function showSpinner() {
            document.querySelector(".spinner-overlay").style.display = "flex";
        }

        // Hide the spinner
        function hideSpinner() {
            document.querySelector(".spinner-overlay").style.display = "none";
        }


// JavaScript
const selectElement = document.getElementById('locationSelect');
const roundImageSection = document.getElementById('roundImageSection');
const imageContainers = roundImageSection.querySelectorAll('.image-container');

// Show all image containers initially
const displayedImages = new Set();

// Show all unique image containers initially
function showAllImageContainers() {
  imageContainers.forEach((container) => {
    const dataLocation = container.getAttribute('data-location');
    if (!displayedImages.has(dataLocation)) {
      container.style.display = 'block';
      displayedImages.add(dataLocation);
    } else {
      container.style.display = 'none'; // Hide duplicates
    }
  });
}

// Store the previously selected value in localStorage (if available)
let previousValue = localStorage.getItem('selectedValue') || 'All';
selectElement.value = previousValue;

// Function to show/hide image containers based on selected value
function showHideImageContainers(selectedValue) {
  if (selectedValue !== 'All') {
    imageContainers.forEach((container) => {
      const dataLocation = container.getAttribute('data-location');
      container.style.display = dataLocation === selectedValue ? 'block' : 'none';
      
    });
  } else {
    // Show all image containers when 'All' is selected
    showAllImageContainers();
  }
}

// Initial call to show all image containers
showAllImageContainers();

// Initial call to show/hide containers based on the initially selected value
showHideImageContainers(previousValue);

// Add event listener for change event on select element
document.addEventListener("DOMContentLoaded", function() {
  const selectElement = document.getElementById("locationSelect");

  // Store the initial value
  let initialValue = selectElement.value;

  // Add 'change' event listener to the select element
  selectElement.addEventListener("change", function(event) {
   
      
      const selectedValue = event.target.value;
      localStorage.setItem("selectedValue", selectedValue);
      showHideImageContainers(selectedValue);
      
      // Update the initial value after the user interaction
      initialValue = selectedValue;
      location.reload();
  });
});


function showAllImageContainers() {
  imageContainers.forEach((container) => {
    const dataLocation = container.getAttribute('data-location');
    if (!displayedImages.has(dataLocation)) {
      container.style.display = 'block';
      displayedImages.add(dataLocation);
    } else {
      container.style.display = 'none'; // Hide duplicates
    }
  });
}

// Function to show/hide image containers based on selected value
function showHideImageContainers(selectedValue) {
  if (selectedValue !== 'All') {
    imageContainers.forEach((container) => {
      const dataLocation = container.getAttribute('data-location');
      container.style.display = dataLocation === selectedValue ? 'block' : 'none';
    });
  } else {
    // Show all image containers when 'All' is selected
    showAllImageContainers();
  }
}



selectElement.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  const url = `http://127.0.0.1:8002/api/method/library.www.biibo.index.aa?argument=${selectedValue}`; // Replace with your API endpoint URL
  showSpinner(); 
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log('Fetched data:', data);
      hideSpinner();
    })
    .catch((error) => {
      console.log('Fetch error:', error);
  });


})




const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const cardsContainer = document.querySelector(".cards");
const cards = document.querySelector(".cards");

let currentPosition = 0;
const cardWidth = document.querySelector(".brand-card").clientWidth;

prevButton.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    updatePosition();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPosition > -((cards.children.length - 1) * cardWidth)) {
    currentPosition -= cardWidth;
    updatePosition();
  }
});

function updatePosition() {
  cardsContainer.style.transform = `translateX(${currentPosition}px)`;
}

// Update card width on window resize
window.addEventListener("resize", () => {
  cardWidth = document.querySelector(".brand-card").clientWidth;
  updatePosition();
});



const renderContainer = document.getElementById('render');

selectElement.addEventListener('change', () => {
  const selectedValue = selectElement.value;
  const url = `http://127.0.0.1:8002/api/method/library.www.biibo.index.bbb`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderContainer.innerHTML = ''; // Clear previous content
      
      for (let item of data.message) {
        let listItem = document.createElement('li');
        listItem.classList.add()
        let anchorElement = document.createElement('a');
        let imageElement = document.createElement('img');
        let productNameElement = document.createElement('div');

        anchorElement.href = `/${item[1]}`;
        imageElement.src = item[0];
        imageElement.alt = 'Product Image';
        imageElement.className = 'product-image';
        productNameElement.className = 'product-name';
        productNameElement.textContent = item[2];

        anchorElement.appendChild(imageElement);
        anchorElement.appendChild(productNameElement);
        listItem.appendChild(anchorElement);

        renderContainer.appendChild(listItem);
      }
    })
    .catch((error) => {
      console.log('Fetch error:', error);
    });
});


let abc = document.getElementById('building-materials')
abc.onclick = () => {
  selectedValue = selectElement.value
  console.log("hello")
  const url = `http://127.0.0.1:8002/api/method/library.www.BuildingBlocks.index.aa?argument=${selectedValue}`; // Replace with your API endpoint URL

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log('Fetched data:', data);
    })
    .catch((error) => {
      console.log('Fetch error:', error);
  });
}