function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    let element = document.getElementById(data);
    let area = ev.target;

    let elemStyle = window.getComputedStyle(element)
    let areaStyle = window.getComputedStyle(area)

    if(areaStyle.border.includes(elemStyle.backgroundColor)){
        area.style.backgroundColor = elemStyle.backgroundColor;
        element.style.display = 'none';
    }

    
  }