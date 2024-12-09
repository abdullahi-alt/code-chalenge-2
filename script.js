// Array to store shopping list items
let shoppingList = [];

// DOM Elements
const inputField = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const clearButton = document.getElementById('clear-button');
const shoppingListContainer = document.getElementById('shopping-list');

// Function to render the shopping list
function renderList() {
  shoppingListContainer.innerHTML = '';
  shoppingList.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    listItem.className = 'list-item';
    if (item.purchased) {
      listItem.classList.add('purchased');
    }
    // Add click event to toggle purchase state
    listItem.addEventListener('click', () => togglePurchased(index));
    shoppingListContainer.appendChild(listItem);
  });
}

// Function to add a new item
function addItem() {
  const newItem = inputField.value.trim();
  if (newItem) {
    shoppingList.push({ name: newItem, purchased: false });
    inputField.value = ''; // Clear the input field
    renderList();
  }
}

// Function to toggle purchase state
function togglePurchased(index) {
  shoppingList[index].purchased = !shoppingList[index].purchased;
  renderList();
}

// Function to clear the list
function clearList() {
  shoppingList = [];
  renderList();
}

// Event Listeners
addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);

// Allow pressing Enter to add items
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
 