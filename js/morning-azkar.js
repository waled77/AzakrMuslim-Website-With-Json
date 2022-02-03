var incBtn = document.querySelectorAll('.counter-content .increase');
var allInputs = document.querySelectorAll('.box input');

allInputs.forEach((input) => {
    input.onfocus = () => {
        input.setAttribute('readonly','readonly');
    }
});

for(var i = 0; i < incBtn.length;i++) {
    var button = incBtn[i];
    button.onclick = (e) => {
        var buttonClicked = e.target;
        var input = buttonClicked.parentElement.children[2];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        input.value = newValue;

        if(input.value == input.max) {
            input.value = 'أحسنت';
            buttonClicked.classList.add('hidden');

        }else if(isNaN(input.value)) {
            input.value = 'انتهيت';
        } else {
            return false;
        }
        
    }
    
}