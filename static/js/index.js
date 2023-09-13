document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const submitButton = document.getElementById('submitButton');
    const message = document.getElementById('message');

    submitButton.addEventListener('click', () => {
        const text = userInput.value;
        
        //send data as text to flask backend
        fetch('/send_text', {
            method:'POST',
            body: JSON.stringify({text: text}),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Network error');
            }
        })
        .then(data => {
            message.textContent = data.message;
            console.log('Value sent succesfully', data);
        })
        .catch(error => {
            console.error('Error; ', error)
        })
    });
});