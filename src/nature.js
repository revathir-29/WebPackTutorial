import NatureImage from './nature.jpg'

function addImage(){
    const img = document.createElement("img");
    img.src = NatureImage;

    const body = document.querySelector('body');
    body.append(img);
}

export default addImage;