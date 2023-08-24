window.onload = function() {
    console.log("Web page has finished loading.");
    const selectElement = document.getElementById('locationSelect');
    const spinner = document.getElementById('spinner');
    const mainContainer = document.getElementById('cardContainer-floring');

    selectedValue = selectElement.value;
    const url = `http://127.0.0.1:8002/api/method/library.www.Fencingg.index.bb?argument=${selectedValue}`;

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
    card.className = 'card';

    const image = document.createElement('img');
    image.src = itemData[0];
    image.alt = 'Product Image';
    card.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = itemData[1];
    card.appendChild(title);

    const anchorEl = document.createElement('a')
    anchorEl.href = itemData[2];

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.className = 'add-to-cart-button';
    card.appendChild(addToCartButton);

    anchorEl.appendChild(card);
    return anchorEl;
}

const selectElement = document.getElementById('locationSelect');
selectElement.addEventListener('change', () => {
    const currentPagePath = window.location.pathname;
    const absolutePath = `http://127.0.0.1:8002${currentPagePath}`;
    window.location.href = absolutePath;
});
