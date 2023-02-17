function getInnerText(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
}
// function setAns(name, A){
//     const div = document.createElement('div');
//     const li1 = document.createElement('li');
//     li1.innerText = name;
//     const sup = document.createElement('sup');
//     sup.innerText = 2;
//     const li2 = document.createElement('li');
//     const cm2 = document.createElement('p');
//     cm2.innerText = 'cm';
//     cm2.appendChild(sup);
//     li2.innerText = A + cm2.innerText;
//     console.log(li2)
//     const button = document.createElement('button');
//     button.classList.add('btn', 'btn-primary', 'fs-6');
//     const p1 = document.createElement('p');
//     p1.innerText = 'hi';
//     p1.appendChild(sup);
//     console.log(p1)
//     button.innerText = 'Convert to ' + dd.innerText;
//     div.appendChild(li1);
//     div.appendChild(li2);
//     div.appendChild(button);
//     div.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-4', 'fs-6');
//     const setAddress = document.getElementById('area-ans');
//     setAddress.appendChild(div);
//     console.log(div);
// }


function setAns(name, A){
    const div = document.createElement('div');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const button = document.createElement('button');
    li1.innerText = name;
    li2.innerText = A;
    button.innerText = 'Convert to ';
    let m2 = document.createElement('p');
    m2.innerText = 'm';
    const sup2 = document.createElement('sup');
    sup2.innerText = '2';
    let cm2 = document.createElement('p');
    cm2.innerText = 'cm';
    const sup = document.createElement('sup');
    sup.innerText = '2';
    cm2.appendChild(sup);
    m2.appendChild(sup2);
    li2.appendChild(cm2);
    button.appendChild(m2);
    div.appendChild(li1);
    div.appendChild(li2);
    div.appendChild(button);
    const setAddress = document.getElementById('area-ans');
    setAddress.appendChild(div);
    div.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'inline-p', 'mb-3', 'split-div');
    button.classList.add('btn', 'btn-primary');
}



