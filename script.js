const audioData = {
  "products": [
    {
      "id": 0,
      "mp3": "/htmlaudio/audio/1.mp3", // Make sure these paths are updated as discussed!
      "title": "10 counts by woman teacher",
      "choice": true,
      "new": true,
      "duration": ["13sec"]
    },
    {
      "id": 1,
      "mp3": "/htmlaudio/audio/4-year-old-counting-to-10-94902.mp3", // Updated path
      "title": "Cute child counts 10",
      "price": 0,
      "choice": true,
      "duration": ["11sec"]
    },
    // ... and so on for ALL your audio entries, ensuring all "mp3" paths start with "/htmlaudio/audio/"
  ]
};

const audioListContainer = document.getElementById('audio-list');

audioData.products.forEach(product => {
    const audioItemDiv = document.createElement('div');
    audioItemDiv.classList.add('audio-item');

    const detailsDiv = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = product.title;
    detailsDiv.appendChild(title);

    const duration = document.createElement('p');
    duration.textContent = `Duration: ${product.duration[0]}`;
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
        price.textContent = `Price: $${(product.price / 100).toFixed(2)}`;
        detailsDiv.appendChild(price);
    }

    audioItemDiv.appendChild(detailsDiv);

    const audioPlayerDiv = document.createElement('div');
    audioPlayerDiv.classList.add('audio-player');
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = product.mp3;
    audio.type = 'audio/mpeg';

    audioPlayerDiv.appendChild(audio);
    audioItemDiv.appendChild(audioPlayerDiv);

    audioListContainer.appendChild(audioItemDiv);
});