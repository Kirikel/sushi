// Находим элементы на стр
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// отслеживаем клик на кнопку btnMinus
btnMinus.addEventListener('click', function(){
        console.log('Minus click');

        // Проверяем, чтобы счетчик больше 1
        if (parseInt(counter.innerText)>1){
                // изменяем текст в счетчике уменьшая его на 1
                counter.innerText =  --counter.innerText;
        }
})

// отслеживаем клик на кнопку btnPlus
btnPlus.addEventListener('click', function(){
        console.log('Plus click');
        counter.innerText = ++counter.innerText;
});



