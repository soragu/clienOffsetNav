const container = document.getElementById('container');
console.log(container);

const centerBlock = document.getElementById('center-block');
console.log(centerBlock);

const elements = document.getElementsByClassName('d');
console.log(elements);

const diffWidth = container.clientWidth - centerBlock.clientWidth;

for (let i=0, max=elements.length; i < max; i++) {
  elements[i].addEventListener('click', function(e){
    console.log(e.target.offsetLeft);
    let left = container.clientWidth/2 - (e.target.offsetLeft + e.target.clientWidth/2);
    if (left > 0) {
      left = 0;
    } else if (left < diffWidth) {
      left = diffWidth;
    }
    centerBlock.setAttribute("style", `left: ${left}px`);
  });
}
