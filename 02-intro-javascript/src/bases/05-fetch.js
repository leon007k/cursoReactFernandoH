const apiKey = '';

const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

petition
  .then(response => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Random Gif';

    document.body.append(img);
  })
  .catch(console.warn);