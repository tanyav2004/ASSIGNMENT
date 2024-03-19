document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const cartTable = document.querySelector('.Final table'); 
    btn1.onclick = () => addToCart("Hey There Spongebobe Oversized tshirt", 11);
    btn2.onclick = () => addToCart("American jersey ", 13);
    btn3.onclick = () => addToCart("Marvel", 15)
    function addToCart(productName, price) {
        const newRow = cartTable.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        cell1.textContent = productName;
        cell2.innerHTML = '<button class="plus">+</button><button class="minus">-</button>';
        cell3.textContent = '$0';

        const plusButton = cell2.getElementsByClassName('plus')[0];
        const minusButton = cell2.getElementsByClassName('minus')[0];
        let countplus = 0;

        plusButton.onclick = () => {
            countplus += price;
            cell3.textContent = '$' + countplus;
        };

        minusButton.onclick = () => {
            if (countplus - price >= 0) {
                countplus -= price;
                cell3.textContent = '$' + countplus;
            } else {
                countplus = 0;
                cell3.textContent = '$0';
            }
        };
    }
});