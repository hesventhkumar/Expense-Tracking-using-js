const transactionForm = document.getElementById('transactionForm');
const transactionTable = document.querySelector('.transaction-table ');

transactionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        
        <td>${name}</td>
        <td>${amount}</td>
        <td>${type}</td>
        <td>${date}</td>
        <td><button class=" edit-btn btn-success btn-sm px-3 me-3">Edit</button><button class="delete-btn btn-danger btn-sm">Delete</button> </td>
    `;

    transactionTable.appendChild(newRow);

    transactionTable.addEventListener('click', (event) => {
if (event.target.classList.contains('delete-btn')) {
    const row = event.target.parentNode.parentNode;

    row.remove();}});

   
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('type').value = '';
    document.getElementById('date').value = '';
});