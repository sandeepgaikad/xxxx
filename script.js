document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const username = document.querySelector('.input').value;
    alert(`You entered: ${username}`);
});
