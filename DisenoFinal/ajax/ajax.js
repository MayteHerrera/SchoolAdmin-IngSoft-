function cargarAjax(){
	var j = jQuery.noConflict();
j.ajaxSetup({
    cache: false
});
	var xmlhttp=false;
 	try {
 		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 	} catch (e) {
 		try {
 			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 		} catch (E) {
 			xmlhttp = false;
 		}
  	}

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
 		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}


function mostrarContenido(url){
    var contenedor,c1;
	contenedor = document.getElementById("page-wrapper");
	//c1 = document.getElementById("feps").value;
	ajax=cargarAjax();
    //alert(c1);
	ajax.open("GET",url,true);
 	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText
		}
	}
	 ajax.send(null)
}



function mostrarContenidoMenu(url,opc,niv){
    var contenedor;
	contenedor = document.getElementById("contenedor");
	 
	if(niv=='2'){
	   if((opc=='9') || (opc=='10')){
		   url='php/noacceso.php';
	   }
	}
	
	if(niv=='3'){
	   if((opc=='2') || (opc=='8')){
		   url=url;
	   }else{
		   url='forms/noacceso.php';
	   }
	}
	
	ajax=cargarAjax();

	ajax.open("GET",url,true);
 	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText
		}
	}
	 ajax.send(null)
}



function validarUsuarios(url,idcontenedor,accion){
	var contenedor,c1,c2;
	contenedor = document.getElementById(idcontenedor);
	c1 = document.getElementById('fusuario').value;
    c2 = document.getElementById('fclave').value;
	ajax=cargarAjax();
	ajax.open("POST", url,true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText
		}
	}
	  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   ajax.send("ttipodoc="+c1+"&tnumdoc="+c2+"&tnombre="+"&action="+accion)
}



 
/********************************************************
OPCIONES DE BUSQUEDA
*********************************************************/
	  


function mostrarContenidoAfiliadoNovedad(url,idcontenedor){
    var contenedor,c1,c2;

	contenedor = document.getElementById(idcontenedor);
	c1 = document.getElementById('ftipodoc').value;
	c2 = document.getElementById('fnumdoc').value;
     //alert(c1+c2);
	ajax=cargarAjax();
	ajax.open("POST", url, true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText
		}
	}
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send("ftipodoc="+c1+"&fnumdoc="+c2)

 }

function mostrarContenidoA(url){
    var contenedor,c1,c2,c3,c4;
	contenedor = document.getElementById("contenedor");
	c0 = document.getElementById("fradio1").value;
	c1 = document.getElementById("fradio2").value;
	c2 = document.getElementById("ftipodoc").value;
	c3 = document.getElementById("fnumdoc").value;
	c4 = document.getElementById("fficha").value;
  url='';

    if(c0=='on'){
       url='forms/Afiliardocumento';
    }else{
       url='forms/Afiliarficha';
    }
	ajax=cargarAjax();

	ajax.open("GET",url,true);
 	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText
		}
	}
	 ajax.send(null)
}


 
   function mostrarContenidoB(url){
    var contenedor,c1,c2,c3,c4,c5,c6,c7,c8,c9;
    contenedor = document.getElementById("contenedor");
	c0 = document.getElementById("fradio1").value;
	c1 = document.getElementById("fradio2").value;
	c2 = document.getElementById("fradio3").value;
	c3 = document.getElementById("ftipodoc").value;
	c4 = document.getElementById("fnumdoc").value;
	c5 = document.getElementById("fficha").value;
	c6 = document.getElementById("fpriape").value;
	c7 = document.getElementById("fsegape").value;
	c8 = document.getElementById("fprinom").value;
	c9 = document.getElementById("fsegnom").value;
  url='';

    if(c0=='on'){
       url='forms/Listarafiliado.php';
    }else{
       url='forms/Buenvenida.php';
    }

    url=url+"?ftipodoc="+c3+"&fnumdoc="+c4+"&fficha="+c5+"&fpriape="+c6+"&fsegape="+c7+"&fprinom="+c8+"&fsegnom="+c9;
   	ajax=cargarAjax();

	ajax.open("GET",url,true);
 	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText
		}
	}
	 ajax.send(null)
}

   function asignarImagen(url){
    var contenedor,c1;
	contenedor = document.getElementById("foto");
	c1 = document.getElementById("xfile").value;
    var fullPath = document.getElementById('xfile').value;
    alert(fullPath);
    ajax=cargarAjax();
    ajax.open("POST", "php/Funciones.php", true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText
		}
	}
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send("farchivo="+c1+"&action=montarfoto")

 }
 

  function subirimagen(){
  $(document).ready(function(){
	var button = $('#upload_button'), interval;
	new AjaxUpload('#upload_button', {
        action: 'upload.php',
		onSubmit : function(file , ext){},
		onComplete: function(file, response){ }
	});
});



  }
 
 
 



