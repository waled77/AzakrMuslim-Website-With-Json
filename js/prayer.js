fetch('prayer.json')
.then(function (res) {
    return res.json();
})
.then(function(data) {
    for(var i = 0; i < data.length;i++) {
        document.querySelector('.prayer .container').innerHTML += `
        <div class="box">
            ${data[i].dua}
        </div>
            
        `
    }
})
.catch(function (err) {
    console.log(err);
});