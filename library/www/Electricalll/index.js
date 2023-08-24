window.onload = function() {
    console.log("Web page has finished loading.");
    const selectElement = document.getElementById('locationSelect');
    const spinner = document.getElementById('spinner');
    const mainContainer = document.getElementById('cardContainer-Electrical');

    selectedValue = selectElement.value;
    const url = `http://127.0.0.1:8002/api/method/library.www.Electricalll.index.bb?argument=${selectedValue}`;

    spinner.style.display = 'block'; // Show the spinner

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (let i of data.message) {
            const card = createCard(i);
            mainContainer.appendChild(card);
        }
    })
    .catch((error) => {
        console.log('Fetch error:', error);
    })
    .finally(() => {
        spinner.style.display = 'none'; // Hide the spinner after fetch completes (success or error)
    });
};

function createCard(itemData) {
    const card = document.createElement('div');
    card.className = 'items-card';

    const image = document.createElement('img');
    image.src = itemData[0];
    image.className = 'product-image'
    image.alt = 'Product Image';
    card.appendChild(image);

    const title = document.createElement('h2');
    title.className = "item-title";
    title.textContent = itemData[1];
    card.appendChild(title);

    const anchorEl = document.createElement('a');
    anchorEl.href = itemData[2];

    const price = itemData[3];
    const currency = itemData[4];
    
    const priceElement = document.createElement('span'); // Create a new element to hold the formatted price
    priceElement.className = 'price-element';
    if (currency === 'USD') {
        priceElement.textContent = '$' + price; // Set the formatted price text
    } else if (currency === 'EUR') {
        priceElement.textContent = '€' + price; // Set the formatted price text
    }else if (currency === 'INR') {
        priceElement.textContent = '₹' + price; // Set the formatted price text
    }
    
    card.appendChild(priceElement); // Append the price element to the card

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.className = 'add-to-cart-button';
    card.appendChild(addToCartButton);

    const listEl = document.createElement('li');
    listEl.className = 'items-list-container';
    anchorEl.appendChild(card);

    listEl.appendChild(anchorEl);
    return listEl;
}

const selectElement = document.getElementById('locationSelect');
selectElement.addEventListener('change', () => {
    // const currentPagePath = window.location.pathname;
    // const absolutePath = `http://127.0.0.1:8002${currentPagePath}`;
    // window.location.href = absolutePath;
    location.reload();
});
