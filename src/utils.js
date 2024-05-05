function getRandomNumber(min, max) {
    const lower = Math.ceil(Math.min(max, min));
    const upper = Math.floor(Math.max(min, max));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  }
  
  function getRandomArrayElement (items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  
  function createIdGenerator() {
    let id = 1;
    return function () {
      id += 1;
      return id;
    };
  }

export {getRandomArrayElement, getRandomNumber, createIdGenerator}