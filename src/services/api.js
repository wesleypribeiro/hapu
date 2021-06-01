const URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';

const submit = (event, name, email) => {
    event.preventDefault();
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({name, email}),
      headers: { 'Content-Type': 'application/json' },
    })
  }

export default submit;