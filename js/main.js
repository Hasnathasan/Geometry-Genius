// Area of Tringle
document.getElementById('btn-tringle').addEventListener('click', function () {
    const b = getInnerText('triangle-b');
    const h = getInnerText('triangle-h');
    const A = 0.5 * b * h;
    setAns('Triangle', A);
});




// Area of Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const W = getInnerText('rectangle-w');
    const I = getInnerText('rectangle-i');
    const A = W * I;
    setAns('Rectangle', A);
});



// Area of Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const b = getInnerText('parallelogram-b');
    const h = getInnerText('parallelogram-h');
    const A = b * h;
    setAns('parallelogram', A);
});




// Area of Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function () {
    console.log('check')
    const d1 = getInnerText('rhombus-d1');
    const d2 = getInnerText('rhombus-d2');
    const A = 0.5 * d1 * d2;
    setAns('rhombus', A);
});




// Area of Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function () {
    console.log('check')
    const p = getInnerText('pentagon-p');
    const b = getInnerText('pentagon-b');
    const A = 0.5 * p * b;
    setAns('pentagon', A);
});




// Area of Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function () {
    console.log('check')
    const a = getInnerText('ellipse-a');
    const b = getInnerText('ellipse-b');
    const A = (3.14 * a * b).toFixed(2);
    setAns('ellipse', A);
});

// ---------------------------
// Color Change by mouseenter
// ---------------------------

  
document.getElementById('each-card1').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    console.log(eachItem);
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card2').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    console.log(eachItem);
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card3').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    console.log(eachItem);
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card4').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    console.log(eachItem);
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card5').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    console.log(eachItem);
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card6').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    console.log(eachItem);
    eachItem.style.backgroundColor = color;
})


//    ---------------------
//     Edit Area of Items
//    ---------------------
// 



document.getElementById('edit-tringle-value').addEventListener('click', function () {
    const hideElement = document.getElementById('hidden1');
    hideElement.classList.remove('d-none');
    const input1 = document.getElementById('input-tringle-1');
    input1.value = '';
    const input2 = document.getElementById('input-tringle-2');
    input2.value = '';
})


document.getElementById('set-tringle-value').addEventListener('click', function(){
    setValue('input-tringle-1', 'input-tringle-2', 'triangle-b', 'triangle-h');
})
