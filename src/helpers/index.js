import domtoimage from 'dom-to-image';

export function strToArray (array){
  return array.split(',');
}

export function fileToUrl(file) {
  return URL.createObjectURL(file);
}

export function downloadImage(cardElement, posterName) {
  const title = posterName ? posterName.toLowerCase().trim() : 'card';

  domtoimage.toPng(cardElement)
    .then(function (dataUrl) {
      const anchor = document.createElement('a');
      const filename =`${Date.now()}_${title}.png`;
      
      anchor.href = dataUrl;
      anchor.setAttribute('download', filename); 
      anchor.click();
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
  })
}

export const getStorage = (key)=> JSON.parse(window.localStorage.getItem(key));
export const setStorage = (key, payload)=> window.localStorage.setItem(key, JSON.stringify(payload));

