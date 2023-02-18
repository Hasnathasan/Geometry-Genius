document.getElementById('btn-tringle').addEventListener('click', function(){
    const b = getInnerText('triangle-b');
    const h = getInnerText('triangle-h');
    const A = 0.5 * b * h;
    setAns('Triangle', A);
})
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const W = getInnerText('rectangle-w');
    const I = getInnerText('rectangle-i');
    const A = W * I;
    setAns('Rectangle', A);
})
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const b = getInnerText('parallelogram-b');
    const h = getInnerText('parallelogram-h');
    const A = b * h;
    setAns('parallelogram', A);
})
document.getElementById('btn-rhombus').addEventListener('click', function(){
    console.log('check')
    const d1 = getInnerText('rhombus-d1');
    const d2 = getInnerText('rhombus-d2');
    const A = 0.5 * d1 * d2;
    setAns('rhombus', A);
})
document.getElementById('btn-pentagon').addEventListener('click', function(){
    console.log('check')
    const p = getInnerText('pentagon-p');
    const b = getInnerText('pentagon-b');
    const A = 0.5 * p * b;
    setAns('pentagon', A);
})
document.getElementById('btn-ellipse').addEventListener('click', function(){
    console.log('check')
    const a = getInnerText('ellipse-a');
    const b = getInnerText('ellipse-b');
    const A = (3.14 * a * b).toFixed(2);
    setAns('ellipse', A);
})
