const API_URL = 'https://api.openweathermap.org/data';
const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57';
const API_VERSION = '2.5';

const setErrorMessage = (message) => {
    document.getElementById('errorMessage').innerHTML = message;
};

const gettingWeather = () => {
    const inputValue = document.getElementById('input').value.trim();
    if (inputValue) {
        fetch(`${API_URL}/${API_VERSION}/weather?q=${inputValue}&appid=${API_KEY}`)
            .then((resp) => {
                return resp.json();
            })
            .then(data => {
            
                setErrorMessage('')
            })
            .catch(() => {
                console.log('OOOpppsss');
            })
    } else {
        setErrorMessage('Gev jan mi ban gone gri')
    }
}

const whichButton = (event) => {
    if (event.code === 'Enter') {
        gettingWeather()
    }
}