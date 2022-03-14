const accrdn = document.getElementById('dm-accrdn');
const accrdnItms = Array.from(accrdn.children);

// add attributes to items of accordian
(function setAttr() {
	
	let a = 1;
	let b = a;
	let c = a;
	let d = a;
	// applies attributes to single div
	accrdnItms.forEach((e) => {

		let div = e;
		let spnTg = document.createElement('span');

		// single parent div
		div.setAttribute('id', 'itm-' + b++);
		div.setAttribute('class', 'itm standby');
		div.setAttribute('onclick', 'tggleBdy(this)');

		// div header
		div.children[0].setAttribute('id', `hdr-${c++}`);
		div.children[0].setAttribute('class', 'hdr');

		// div paragraph body
		div.children[1].setAttribute('id', `bdy-${d++}`);
		div.children[1].setAttribute('class', 'bdy closed');

		// add span carrot
		div.children[0].appendChild(spnTg);
		div.children[0].lastChild.innerHTML = '&lsaquo;';
		div.children[0].lastChild.classList.add('crt');

	});

})();

// toggle body of accordion item
function tggleBdy(itm) {
	// get body of item
	let bdy = itm.children[1];

	// get height of body paragraphs 
	let bdyH = bdy.children[0].clientHeight;

	if (itm.classList.contains('active') && bdy.classList.contains('opened')) {
		itm.classList.replace('active', 'standby');
		itm.children[0].style.color = '#777';
		itm.children[0].lastChild.style.transform = "rotate(0deg)";
		bdy.classList.replace('opened', 'closed');
		bdy.style.height = '0px';

	} else {
		// search for and close others that are active and open
		for (let i = 0; i < accrdnItms.length; i++) {
			let div = accrdnItms[i];
			let bdy = div.children[1];
			if (div.classList.contains('active') && bdy.classList.contains('opened')) {
				div.classList.replace('active', 'standby');
				div.children[0].style.color = '#777';
				div.children[0].lastChild.style.transform = 'rotate(0deg)';
				bdy.classList.replace('opened', 'closed');
				bdy.style.height = '0px';
			}
		}

		// change classes of current selection
		itm.classList.replace('standby', 'active');
		itm.children[0].style.color = '#444';
		itm.children[0].lastChild.style.transform = "rotate(-90deg)";
		bdy.classList.replace('closed', 'opened');
		bdy.style.height = `${bdyH}px`;
	}

}
