// Function to show/hide sections
function showSection(sectionId) {
  document.querySelectorAll('section').forEach((section) => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

// Customers functionality
document.getElementById('customerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('customerName').value;
  const email = document.getElementById('customerEmail').value;
  const phone = document.getElementById('customerPhone').value;
  const address = document.getElementById('customerAddress').value;

  const table = document.getElementById('customerTable').querySelector('tbody');
  const row = table.insertRow();
  row.innerHTML = `<td>${name}</td><td>${email}</td><td>${phone}</td><td>${address}</td>`;

  e.target.reset();
});

// Cars functionality
document.getElementById('carForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const model = document.getElementById('carModel').value;
  const brand = document.getElementById('carBrand').value;
  const rate = document.getElementById('carRate').value;
  const plate = document.getElementById('carPlate').value;

  const table = document.getElementById('carTable').querySelector('tbody');
  const row = table.insertRow();
  row.innerHTML = `<td>${model}</td><td>${brand}</td><td>${rate}</td><td>${plate}</td>`;

  e.target.reset();
});

// Rentals functionality
document.getElementById('rentalForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const customer = document.getElementById('rentalCustomer').value;
  const car = document.getElementById('rentalCar').value;
  const start = document.getElementById('rentalStart').value;
  const end = document.getElementById('rentalEnd').value;

  const table = document.getElementById('rentalTable').querySelector('tbody');
  const row = table.insertRow();
  row.innerHTML = `<td>${customer}</td><td>${car}</td><td>${start}</td><td>${end}</td>`;

  e.target.reset();



  
});
