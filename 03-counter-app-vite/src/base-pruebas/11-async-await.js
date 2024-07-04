import { APIKEY } from "../const-protected";

export const getImagen = async () => {

    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (err) {
        // manejo del error
        //console.error(err);
        return 'No se encontro la imagen'
    }



}

getImagen();



