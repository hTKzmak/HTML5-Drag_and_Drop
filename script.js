function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");

    let element = document.getElementById(data); //выбранный тобой блок
    let area = ev.target; //выбранная тобой блок с рамкой

    // Метод getComputedStyle() — это функция JavaScript, которую можно использовать для получения вычисленного стиля элемента, 
    // а вычисленный стиль — это окончательный стиль, который применяется к элементу после применения всех остальных стилей.
    let elemStyle = window.getComputedStyle(element) // стили блока
    let areaStyle = window.getComputedStyle(area) // стили блока с рамкой

    // если цвет у elemStyle.backgroundColor имеется в areaStyle.border, то окрашиваем блок с рамкой в тот же цвет и убираем блок  
    if(areaStyle.border.includes(elemStyle.backgroundColor)){
        area.style.backgroundColor = elemStyle.backgroundColor;
        element.style.display = 'none';
    }

    
  }
