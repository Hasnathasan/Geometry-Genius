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
