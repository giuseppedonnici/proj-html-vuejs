function getImagePath(image) {
    return new URL(`./assets/img/${image}`, import.meta.url).href;
  }
  
  
  export {
      getImagePath
  }