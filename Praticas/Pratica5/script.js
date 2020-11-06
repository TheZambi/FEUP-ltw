let form = document.getElementsByTagName('form')[0];
var total = 0;

form.addEventListener('submit', function(event) {
    var nameValue = document.getElementsByName('description')[0].value;
    var quantityValue = document.getElementsByName('quantity')[0].value;
    total+=parseInt(quantityValue);

    updateTotal(total);

    let product = document.createElement("tr");

    product.innerHTML = `<td>${nameValue}</td><td><input value=${quantityValue}></td><td><input type="button" value="Remove"</td>`;
    document.querySelector('table').appendChild(product);

    product.getElementsByTagName("input")[1].addEventListener("click", function()
    {
        product.remove();
        total-=parseInt(quantityValue);
        updateTotal(total);
    })

    product.getElementsByTagName("input")[0].addEventListener("change", function()
    {
        total-=parseInt(quantityValue);
        quantityValue = product.getElementsByTagName('input')[0].value;
        total+=parseInt(quantityValue);
        updateTotal(total);
    })

    event.preventDefault();

  }, false);

function updateTotal(total) {
    document.getElementById("total").innerHTML = total;
}