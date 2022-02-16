const accrdn = document.getElementById('dm-accrdn');
const accrdnItms = Array.from(accrdn.children);

// add attributes to items of accordian
function addAttr() {
    console.log('set attributes');
    
    let a = 1;
    let b = a;
    let c = a;
    let d = a;
        
    // applies attributes to single div
    accrdnItms.forEach(e => {
        let spnTg = document.createElement('span');

        // single parent div
        e.setAttribute('id', 'itm-' + b++);
        e.setAttribute('class', 'itm');
        e.setAttribute('onclick', 'tggleBdy(this)');
        
        // div header
        e.children[0].setAttribute('id', 'hd-' + c++);
        e.children[0].setAttribute('class', 'hd');

        // add span carrot
        e.children[0].appendChild(spnTg);
        e.children[0].lastChild.innerHTML = '&lsaquo;';
        e.children[0].lastChild.classList.add('crt');

        // div paragraph body
        e.children[1].setAttribute('id', 'bdy-' + d++);
        e.children[1].setAttribute('class', 'bdy');
        // e.children[1].classList.add('closed');
    });
}
// toggle body of accordion item
function tggleBdy(e) {
    let bdy = e.children[1];
    
    if (e.classList.contains('active') && bdy.classList.contains('opened')) {

        console.log('here');

        bdy.style.display = 'none';
        e.classList.remove('active');
        e.children[0].lastChild.style.transform = "rotate(0deg)";
        bdy.classList.remove('opened');
    } else {
        // search for and close any active & standby                        
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

        // change classes of current selection
        bdy.style.display = 'block';
        e.classList.add('active');
        e.children[0].lastChild.style.transform = "rotate(-90deg)";
        bdy.classList.add('opened');
    }
}

// on load
addAttr();