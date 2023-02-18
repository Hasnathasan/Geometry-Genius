// bolg 
document.getElementById('blog').addEventListener('click', function(){
    window.open("blog.html");
})


// ==================================
// Area of Tringle With Validation
// ==================================
document.getElementById('btn-tringle').addEventListener('click', function () {
    const b = parseFloat(getValueFromInput('input-tringle-1'));
    const h = parseFloat(getValueFromInput('input-tringle-2'));
    if(typeof b === 'number' && b >= 0 && typeof h === 'number' && h >= 0){
        const A = 0.5 * b * h;
        setAns('Triangle', A);
    }
    else{
        alert('Invalid Value!  Provide valid Number.');
    }
    
});




// ==================================
// Area of Rectangle With Validation
// ==================================

document.getElementById('btn-rectangle').addEventListener('click', function () {
    const W = parseFloat(getValueFromInput('input-rectangle-1'));
    const L = parseFloat(getValueFromInput('input-rectangle-2'));
    if(typeof W === 'number' && W >= 0 && typeof L === 'number' && L >= 0){
        const A = W * L ;
        setAns('Rectangle', A);
    }
    else{
        alert('Invalid Value!  Provide valid Number.');
    }
});




// Area of Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const b = getInnerText('parallelogram-b');
    const h = getInnerText('parallelogram-h');
    const A = b * h;
    setAns('Parallelogram', A);
});




// Area of Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function () {
    console.log('check')
    const d1 = getInnerText('rhombus-d1');
    const d2 = getInnerText('rhombus-d2');
    const A = 0.5 * d1 * d2;
    setAns('Rhombus', A);
});




// Area of Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function () {
    console.log('check')
    const p = getInnerText('pentagon-p');
    const b = getInnerText('pentagon-b');
    const A = 0.5 * p * b;
    setAns('Pentagon', A);
});




// Area of Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function () {
    console.log('check')
    const a = getInnerText('ellipse-a');
    const b = getInnerText('ellipse-b');
    const A = (3.14 * a * b).toFixed(2);
    setAns('Ellipse', A);
});

// ---------------------------
// Color Change by mouseenter
// ---------------------------

  
document.getElementById('each-card1').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card2').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card3').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card4').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card5').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    eachItem.style.backgroundColor = color;
})
document.getElementById('each-card6').addEventListener('mouseenter', function(event) {
    const color = getRandomColor();
    const eachItem = event.target;
    eachItem.style.backgroundColor = color;
})







//    ---------------------
//     Edit value of Input
//    ---------------------
// 


document.getElementById('edit-parallelogram-value').addEventListener('click', function () {
    const hideElement = document.getElementById('hidden3');
    hideElement.classList.remove('d-none');
    const input1 = document.getElementById('input-parallelogram-1');
    input1.value = '';
    const input2 = document.getElementById('input-parallelogram-2');
    input2.value = '';
})
document.getElementById('edit-rhombus-value').addEventListener('click', function () {
    const hideElement = document.getElementById('hidden4');
    hideElement.classList.remove('d-none');
    const input1 = document.getElementById('input-rhombus-1');
    input1.value = '';
    const input2 = document.getElementById('input-rhombus-2');
    input2.value = '';
})
document.getElementById('edit-pentagon-value').addEventListener('click', function () {
    const hideElement = document.getElementById('hidden5');
    hideElement.classList.remove('d-none');
    const input1 = document.getElementById('input-pentagon-1');
    input1.value = '';
    const input2 = document.getElementById('input-pentagon-2');
    input2.value = '';
})
document.getElementById('edit-ellipse-value').addEventListener('click', function () {
    const hideElement = document.getElementById('hidden6');
    hideElement.classList.remove('d-none');
    const input1 = document.getElementById('input-ellipse-1');
    input1.value = '';
    const input2 = document.getElementById('input-ellipse-2');
    input2.value = '';
})



document.getElementById('set-parallelogram-value').addEventListener('click', function(){
    setValue('input-parallelogram-1', 'input-parallelogram-2', 'parallelogram-b', 'parallelogram-h');
})
document.getElementById('set-rhombus-value').addEventListener('click', function(){
    setValue('input-rhombus-1', 'input-rhombus-2', 'rhombus-d1', 'rhombus-d2');
})
document.getElementById('set-pentagon-value').addEventListener('click', function(){
    setValue('input-pentagon-1', 'input-pentagon-2', 'pentagon-p', 'pentagon-b');
})
document.getElementById('set-ellipse-value').addEventListener('click', function(){
    setValue('input-ellipse-1', 'input-ellipse-2', 'ellipse-a', 'ellipse-b');
})
