const audioData = {
  "products": [
    {
      "id": 0,
      "mp3": "/htmlaudio/audio/1.mp3", // Corrected path for GitHub Pages
      "title": "10 counts by woman teacher",
      "choice": true,
      "new": true,
      "duration": ["13sec"]
    },
    {
      "id": 1,
      "mp3": "/htmlaudio/audio/4-year-old-counting-to-10-94902.mp3", // Corrected path
      "title": "Cute child counts 10",
      "price": 0,
      "choice": true,
      "duration": ["11sec"]
    },
    {
      "id": 2,
      "mp3": "/htmlaudio/audio/10countwomanteacher.mp3", // Corrected path
      "title": "10 count by woman teacher slowly",
    
      "choice": false,
      "duration": ["14sec"]
    },
    {
      "id": 3,
      "mp3": "/htmlaudio/audio/10secbeat.mp3", // Corrected path
      "title": "10 seconds anxiety",
      "price": 0,
      "choice": false,
      "duration": ["8sec"]
    },
    {
      "id": 4,
      "mp3": "/htmlaudio/audio/20sec.mp3", // Corrected path
      "title": "20 seconds with woman teacher voice",
    
      "choice": true,
      "duration": ["30sec"]
    },
    {
      "id": 5,
      "mp3": "/htmlaudio/audio/metronome1min.mp3", // Corrected path
      "title": "Metronome 1min",
      
      "choice": false,
      "duration": ["62sec"]
    },
    {
      "id": 6,
      "mp3": "/htmlaudio/audio/3minbell.mp3", // Corrected path
      "title": "3 min bell",
      
      "choice": true,
      "duration": ["181sec"]
    },
    {
      "id": 7,
      "mp3": "/htmlaudio/audio/tiktok7sec.mp3", // Corrected path
      "title": "Tiktok 7sec",
     
      "choice": false,
      "duration": ["8sec"]
    },
    {
      "id": 8,
      "mp3": "/htmlaudio/audio/analog1min.mp3", // Corrected path
      "title": "Analog clock 1min",
     
      "choice": true,
      "duration": ["61sec"]
    },
    {
      "id": 9,
      "mp3": "/htmlaudio/audio/10secdrum.mp3", // Corrected path
      "title": "10 seconds drum",
     
      "choice": false,
      "new": true,
      "duration": ["8sec"]
    },
    {
      "id": 10,
      "mp3": "/htmlaudio/audio/piano-20sec.mp3", // Corrected path
      "title": "Piano 20sec",
      "choice": true,
      "new": false,
      "duration": ["20sec"]
    },
    {
      "id": 11,
      "mp3": "/htmlaudio/audio/meditation-2min23sec.mp3", // Corrected path
      "title": "Meditation",
    
      "choice": true,
      "new": true,
      "duration": ["142sec"]
    }
  ]
};

const audioListContainer = document.getElementById('audio-list');

audioData.products.forEach(product => {
    const audioItemDiv = document.createElement('div');
    audioItemDiv.classList.add('audio-item');

    // Title and details
    const detailsDiv = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = product.title;
    detailsDiv.appendChild(title);

    const duration = document.createElement('p');
    // Ensure duration[0] is always available and handle potential errors
    duration.textContent = `Duration: ${product.duration && product.duration.length > 0 ? product.duration[0] : 'N/A'}`;
    detailsDiv.appendChild(duration);

    if (product.new) {
        const newTag = document.createElement('span');
        newTag.textContent = ' (NEW!)';
        newTag.style.fontWeight = 'bold';
        newTag.style.color = 'green';
        title.appendChild(newTag);
    }

    if (product.price > 0) {
        const price = document.createElement('p');
        price.textContent = `Price: $${(product.price / 100).toFixed(2)}`; // Assuming price is in cents
        detailsDiv.appendChild(price);
    }

    audioItemDiv.appendChild(detailsDiv);

    // Audio player
    const audioPlayerDiv = document.createElement('div');
    audioPlayerDiv.classList.add('audio-player');
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = product.mp3;
    audio.type = 'audio/mpeg'; // Assuming all are MP3s for simplicity, but you can check product.type if available

    audioPlayerDiv.appendChild(audio);
    audioItemDiv.appendChild(audioPlayerDiv);

    audioListContainer.appendChild(audioItemDiv);
});
