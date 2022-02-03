/* Run Loading Page */
var loadingPage = document.querySelector('.loading-page');
var childLoadingPage = document.querySelector('.loading-page .child-layer');
var numberLoadingPage = document.querySelector('.loading-page .number');

window.onload = () => {
    
    var counter = setInterval(countDown, 500);
    
    var startNumber = 0;
    var mark = "%";

    function countDown() {
        numberLoadingPage.innerHTML = startNumber += 20 ;
        numberLoadingPage.innerHTML += mark;
            if(startNumber == 100) {
                startNumber =  0 ;
            } else {
                return false;
            }
        }
}

    setTimeout(() => {
        loadingPage.style.display = 'none';
    }, 3000);

/* Run Loading Page */
