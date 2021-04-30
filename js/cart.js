let cart = {
    'pls' : 1,
    'mns' : 1
}

document.onclick = event => {
    if (event.target.classList.contains('plus')){
        plusFunct(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')){
        minusFunct(event.target.dataset.id);
    }
}

const plusFunct = id => {
    cart[id]++;
    renderCart();
}

const minusFunct = id => {
    if (cart[id]-1 == 0){

    }
    cart[id]--;
    renderCart();
}


var price = document.getElementById('price');
                let o1 = document.getElementById('option1');
                let o2 = document.getElementById('option2');
                let o3 = document.getElementById('option3');
                let o4 = document.getElementById('option4');
                if (o1.ariaChecked) {
                  price.value = 100;
                }
                o2.onclick = function() {
                  price.innerText = "200";
                }
                if (o3.ariaChecked) {
                  price.innerText = "300";
                }
                if (o4.ariaChecked) {
                  price.innerText = "500";
                }
                console.log(o1);

                document.getElementById('option1').addEventListener("click", setPrice(100), false);
                document.getElementById('option2').addEventListener("click", setPrice(200), false);
                document.getElementById('option3').addEventListener("click", setPrice(300), false);
                document.getElementById('option4').addEventListener("click", setPrice(500), false);