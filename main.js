'use strict';
const container = document.querySelector('.container');
let objectTree = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

function createTree(element, object) {
  const ul = document.createElement("ul");

  for (const property in object) {
    ul.insertAdjacentHTML('beforeend',
      `<li>${property}</li>`);

    if (Object.keys(object[property]).length > 0) {
      createTree(ul, object[property]);
    }
  }
  element.append(ul)
}

createTree(container, objectTree);
