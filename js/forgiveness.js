
        var num = document.getElementById('num');
        var btnIncrease = document.getElementById('increase');
        var btnReset = document.getElementById('reset');

        num.innerHTML = getValueFromLocal();
        
        function getValueFromLocal(){
            if(!localStorage.getItem("number")){
                return 0;
            }
            return parseInt(localStorage.getItem("number"))
        }

        // increase Button
        btnIncrease.addEventListener('click',()=>{
        let number = getValueFromLocal()
        number+=1;
        localStorage.setItem("number", number);
        num.innerHTML = number
        })

        // reset Button
        btnReset.addEventListener('click',()=>{
        localStorage.setItem("number", 0);
        num.innerHTML = getValueFromLocal() 
        })
    