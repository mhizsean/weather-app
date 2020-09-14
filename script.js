var button = document.querySelector('.btn');
var locationVal = document.querySelector('.location-value')
var region = document.querySelector('.region-name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')


button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+locationVal.value+'&appid=e765d323e2b638961fe78e58459ef40e&units=metric')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var nameVal = data['name'];
        var tempVal = data['main']['temp'] + "°C";
        var descVal = data['weather'][0]['description']

        region.innerHTML = nameVal;
        temp.innerHTML = tempVal;
        desc.innerHTML = descVal;
    })


    .catch(err => alert('Invalid city name'))
})

