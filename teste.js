
window.onload = function(){
    
	let links = document.querySelectorAll('#bottom-bar a')
	for (link of links) {
	    let target = link.getAttribute('data-target')
	    link.addEventListener('click', function() {
		    mudaTela(target)
	    })
	}
	

	let links2 = document.querySelectorAll('#pop a')
	for (link of links2) {
	    let target = link.getAttribute('data-target')
	    link.addEventListener('click', function() {
		    mudaTela(target)
	    })
	}

	
}
function fecharpopup(){
	document.getElementById('pop').style.display='none';
	
}

function popup(){
	document.getElementById('pop').style.display='block';
}

function aumenta(obj){
    obj.height=obj.height*1.3;
    obj.width=obj.width*1.3;
}
 
function diminui(obj){
	obj.height=obj.height/1.3;
    obj.width=obj.width/1.3;
}

function mudaTela(target) {
	let tela_target = document.getElementById(target)
	let link_target = document.querySelector('a[data-target="'+target+'"]')

	document.querySelector('div.tela.active').classList.remove('active')
	document.querySelector('a.active').classList.remove('active')

	tela_target.classList.add('active')
	link_target.classList.add('active')
}

function selecionar(id){
	if (document.getElementById(id).style.background == ''){
		document.getElementById(id).style.background =  '#'+ document.getElementById('CorEscolida').value;
	}else{
		document.getElementById(id).style.background='';
	}
}

function SomeCor(){
	document.getElementById('CorEscolida').value = '000000';
}

function ApareceCor(){
		document.getElementById('cor').style.display = 'block';
}

