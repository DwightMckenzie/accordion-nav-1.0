const accrdn = document.getElementById('dm-accrdn');
const accrdnItms = Array.from(accrdn.children);

function addAttr() {
    console.log('set attributes');
    
    let a = 1;
    let b = a;
    let c = a;
    let d = a;
    
    accrdnItms.forEach(e => {
        let spnTg = document.createElement('span');

        e.setAttribute('id', 'itm-' + b++);
        e.setAttribute('class', 'itm');
        e.setAttribute('onclick', 'tggleBdy(this)');
        e.children[0].setAttribute('id', 'hd-' + c++);
        e.children[0].setAttribute('class', 'hd');
        e.children[0].appendChild(spnTg);
        e.children[0].lastChild.innerHTML = '&lsaquo;';
        e.children[0].lastChild.classList.add('crt');
        e.children[1].setAttribute('id', 'bdy-' + d++);
        e.children[1].setAttribute('class', 'bdy');
    });
}
function tggleBdy(e) {
    let bdy = e.children[1];
    
    if (e.classList.contains('active') && bdy.classList.contains('opened')) {

        console.log('here');

        bdy.style.display = 'none';
        e.classList.remove('active');
        e.children[0].lastChild.style.transform = "rotate(0deg)";
        bdy.classList.remove('opened');
    } else {                        
        for (let i = 0; i < accrdnItms.length; i++) {
            
            let div = accrdnItms[i];
            let bdy = div.children[1];
            
            if (div.classList.contains('active') && bdy.classList.contains('opened')) {
                div.children[1].style.display = 'none';
                div.classList.remove('active');
                div.children[0].lastChild.style.transform = 'rotate(0deg)';
                div.children[1].classList.remove('opened');
            }
        }
        
        bdy.style.display = 'block';
        e.classList.add('active');
        e.children[0].lastChild.style.transform = "rotate(-90deg)";
        bdy.classList.add('opened');
    }
}

addAttr();
