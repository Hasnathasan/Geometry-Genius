function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}
function getValueFromInput(id) {
  const value = document.getElementById(id).value;
  return value;
}



function setAns(name, A) {
  const div = document.createElement('div');
  div.innerHTML =
    `<li>${name}</li>
  <li>${A} cm<sup>2</sup></li>
  <button class="btn btn-primary fs-6">Convert to m<sup>2</sup></button>
  `;
  console.log(div);
  div.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'inline-p', 'mb-3', 'split-div', 'fs-6');
  const setAddress = document.getElementById('area-ans');
  setAddress.appendChild(div);
}



function getRandomColor() {
  const letters = '0123456789abcdef';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




function setValue(input1, input2, set1, set2) {
  const value1 = document.getElementById(input1).value;
  const setaddress1 = document.getElementById(set1);
  setaddress1.innerText = value1;
  const value2 = document.getElementById(input2).value;
  const setAddress2 = document.getElementById(set2)
  setAddress2.innerText = value2;
}



