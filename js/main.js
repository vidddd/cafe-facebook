function comenzar(opcion){

	$("#intro").css("display","none");
	if(opcion=="constructor"){
			gtag('event', 'Crea_el_tuyo');
		$("#constructor").css("display","block");
	}else if(opcion=="prefijados"){
		$("#prefijados").css("display","block");
			gtag('event', 'Elige_Disenador_Exclusivo');
	}
}
controlVisorConstructor="nada";
posicionTema=0;
posicionTaza=0;
posicionColor=0;
posicionTexto=0;
function quitarBGmarco(){
	$(".marco").css("background-image","none");
}
function atras4() {
 $('#ilustracion'+posicionIlustracion).hide();
 $('#mensaje'+posicionMensaje).hide();
	controlVisorConstructor="nada";
	posicionTema=0;
	posicionTaza=0;
	posicionColor=0;
	posicionTexto=0;
	$(".bt_tema").removeClass('activo');
	$(".bt_color").removeClass('activo');
	$(".bt_taza").removeClass('activo');
	$(".bt_mensaje").removeClass('activo');
	$('#constructor').hide();
	$("#intro").show();
}
function quitarActivo(nuevoActivo){
	$(".bt_tema").removeClass('activo');
	$(".bt_color").removeClass('activo');
	$(".bt_taza").removeClass('activo');
	$(".bt_mensaje").removeClass('activo');
	$(".bt_"+nuevoActivo).addClass('activo');
}
function MoverCarrusel(direccion){
	/*---------------- TEMA -------------------------*/
	if(controlVisorConstructor=='tema'){
		if(direccion=='izq'){
			$("#tema"+posicionTema).css("display","none");
			if(posicionTema>1){
				posicionTema--;
			}else{
				posicionTema=3;
			}
			$("#tema"+posicionTema).css("display","block");		$('#temah').val(posicionTema);
		}
		if(direccion=='dch'){
			$("#tema"+posicionTema).css("display","none");
			if(posicionTema<3){
				posicionTema++;
			}else{
				posicionTema=1;
			}
			$("#tema"+posicionTema).css("display","block");		$('#temah').val(posicionTema);
		}
	}
	/*---------------- COLOR -------------------------*/
	if(controlVisorConstructor=='color'){
		if(direccion=='izq'){
			$("#fondo"+posicionColor).css("display","none");
			if(posicionColor>1){
				posicionColor--;
			}else{
				posicionColor=6;
			}
			$("#fondo"+posicionColor).css("display","block");$('#fondoh').val(posicionColor);
		}
		if(direccion=='dch'){
			$("#fondo"+posicionColor).css("display","none");
			if(posicionColor<6){
				posicionColor++;
			}else{
				posicionColor=1;
			}
			$("#fondo"+posicionColor).css("display","block");$('#fondoh').val(posicionColor);
		}
	}
	/*---------------- TAZA -------------------------*/
	if(controlVisorConstructor=='taza'){
		if(direccion=='izq'){
			$("#taza"+posicionTaza).css("display","none");
			if(posicionTaza>1){
				posicionTaza--;
			}else{
				posicionTaza=6;
			}
			$("#taza"+posicionTaza).css("display","block");$('#tazah').val(posicionTaza);
		}
		if(direccion=='dch'){
			$("#taza"+posicionTaza).css("display","none");
			if(posicionTaza<6){
				posicionTaza++;
			}else{
				posicionTaza=1;
			}
			$("#taza"+posicionTaza).css("display","block");$('#tazah').val(posicionTaza);
		}
	}
	/*---------------- Mensaje -------------------------*/
	if(controlVisorConstructor=='mensaje'){
		if(direccion=='izq'){
			$("#texto"+posicionTexto).css("display","none");
			if(posicionTexto>1){
				posicionTexto--;
			}else{
				posicionTexto=6;
			}
			$("#texto"+posicionTexto).css("display","block");$('#textoh').val(posicionTexto);
		}
		if(direccion=='dch'){
			$("#texto"+posicionTexto).css("display","none");
			if(posicionTexto<6){
				posicionTexto++;
			}else{
				posicionTexto=1;
			}
			$("#texto"+posicionTexto).css("display","block");$('#textoh').val(posicionTexto);
		}
	}
}
function cambiarTema(){
	controlVisorConstructor="tema";
	quitarActivo('tema');
	if(posicionTema==0){
		quitarBGmarco();
		posicionTema=1;
		$("#tema1").css("display","block");
	}
	if(posicionTema != 0 && posicionTaza != 0 && posicionColor != 0 && posicionTexto != 0 ) {
		$('#aceptar1a').css("display","none");
		$('#aceptar1').show();
	}
	$('#temah').val(posicionTema);
}
function cambiarColor(){
	controlVisorConstructor="color";
	quitarActivo('color');
	if(posicionColor==0){
		quitarBGmarco();
		posicionColor=1;
		$("#fondo1").css("display","block");
	}
	if(posicionTema != 0 && posicionTaza != 0 && posicionColor != 0 && posicionTexto != 0 ) {
		$('#aceptar1a').css("display","none");
		$('#aceptar1').show();
	}
		$('#fondoh').val(posicionColor);
}
function cambiarTaza(){
	controlVisorConstructor="taza";
	quitarActivo('taza');
	if(posicionTaza==0){
		quitarBGmarco();
		posicionTaza=1;
		$("#taza1").css("display","block");
	}
	if(posicionTema != 0 && posicionTaza != 0 && posicionColor != 0 && posicionTexto != 0 ) {
		$('#aceptar1a').css("display","none");
		$('#aceptar1').show();
	}
		$('#tazah').val(posicionTaza);
}
function cambiarMensaje(){
	controlVisorConstructor="mensaje";
	quitarActivo('mensaje');
	if(posicionTexto==0){
		quitarBGmarco();
		posicionTexto=1;
		$("#texto1").css("display","block");
	}
	if(posicionTema != 0 && posicionTaza != 0 && posicionColor != 0 && posicionTexto != 0 ) {
		$('#aceptar1a').css("display","none");
		$('#aceptar1').show();
	}
		$('#textoh').val(posicionTexto);
}
/*------------------- ILUSTRACIONES ---------------------------*/
controlVisorPrefijado="nada";
posicionIlustracion=0;
posicionMensaje=0;
function quitarActivo2(nuevoActivo){
	$(".bt_ilustracion").removeClass('activo');
	$(".bt_mensaje2").removeClass('activo');
	$(".bt_"+nuevoActivo).addClass('activo');
}
function MoverCarrusel2(direccion){
	/*---------------- TEMA -------------------------*/
	if(controlVisorPrefijado=='ilustracion'){
		if(direccion=='izq'){
			$("#ilustracion"+posicionIlustracion).css("display","none");
			if(posicionIlustracion>1){
				posicionIlustracion--;
			}else{
				posicionIlustracion=4;
			}
			$("#ilustracion"+posicionIlustracion).css("display","block");$('#ilustracionh').val(posicionIlustracion);
		}
		if(direccion=='dch'){
			$("#ilustracion"+posicionIlustracion).css("display","none");
			if(posicionIlustracion<4){
				posicionIlustracion++;
			}else{
				posicionIlustracion=1;
			}
			$("#ilustracion"+posicionIlustracion).css("display","block");$('#ilustracionh').val(posicionIlustracion);
		}
	}
	/*---------------- Mensaje -------------------------*/
	if(controlVisorPrefijado=='mensaje'){
		if(direccion=='izq'){
			$("#mensaje"+posicionMensaje).css("display","none");
			if(posicionMensaje>1){
				posicionMensaje--;
			}else{
				posicionMensaje=7;
			}
			$("#mensaje"+posicionMensaje).css("display","block");$('#mensajeh').val(posicionMensaje);
		}
		if(direccion=='dch'){
			$("#mensaje"+posicionMensaje).css("display","none");
			if(posicionMensaje<7){
				posicionMensaje++;
			}else{
				posicionMensaje=1;
			}
			$("#mensaje"+posicionMensaje).css("display","block");$('#mensajeh').val(posicionMensaje);
		}
	}
}
function cambiarIlustracion(){
	controlVisorPrefijado="ilustracion";
	quitarActivo2('ilustracion');
	if(posicionIlustracion==0){
		quitarBGmarco();
		posicionIlustracion=1;
		$("#ilustracion1").css("display","block");
	}
	$('#ilustracionh').val(posicionIlustracion);
	if(posicionIlustracion != 0 && posicionMensaje != 0) {
			$('#aceptar2a').css("display","none");
			$('#aceptar2').show();
	}
}
function cambiarMensaje2(){
	controlVisorPrefijado="mensaje";
	quitarActivo2('mensaje2');
	if(posicionMensaje==0){
		quitarBGmarco();
		posicionMensaje=1;
		$("#mensaje1").css("display","block");
	}
	$('#mensajeh').val(posicionMensaje);
	if(posicionIlustracion != 0 && posicionMensaje != 0) {
		$('#aceptar2a').css("display","none");
		$('#aceptar2').show();
	}
}
function verFinal(){
	gtag('event', 'Continuar');
		//var node = document.getElementById('canvas');
	//	var canvas = document.querySelector("canvas");
	save_img2();
		$(".bt_atras").show();
}


function verFinal2(){
	gtag('event', 'Continuar');
	save_img3();
	$(".bt_atras2").show();
	$(".bt_atras").hide();
}
function atras3() {
	controlVisorPrefijado="nada";
 $('#ilustracion'+posicionIlustracion).hide();
 $('#mensaje'+posicionMensaje).hide();
posicionIlustracion=0;posicionMensaje=0;
	$(".bt_ilustracion").removeClass('activo');
	$(".bt_mensaje2").removeClass('activo');
	$('#prefijados').hide();
	$("#intro").show();
}
function save_img(data){
			idcafe = $('#idcafe').val();
			$.post('save-jpg.php', {data: data, idcafe: idcafe}, function(res){
				//if the file saved properly, trigger a popup to the user.
				if(res != ''){
					//location.href ='https://cafe.promofb.es/index.php?cafeid='+res;
					d = new Date();
					$("#imagef").attr("src", "cafe-finals/"+idcafe+".jpg?"+d.getTime());
					$("#final").show();
					$('#prefijados').hide();
					$('#intro').hide();$('#constructor').hide();
					$('#compartirlink').attr("href", "https://www.facebook.com/sharer/sharer.php?u=https%3A//cafe.promofb.es/index.php?cafeid="+idcafe);
					$('#adescargar').attr("href", "https://cafe.promofb.es/cafe-finals/"+idcafe+".jpg");
				}
				else{
					alert('Fallo al generar la foto');
				}
			});
		}


		function save_img2(){
			var idcafe = $('#idcafe').val();
			var fondo = $('#fondoh').val();
			var taza = $('#tazah').val();
			var tema = $('#temah').val();
			var texto = $('#textoh').val();
					$.get('new-images.php', { idcafe : idcafe, fondo: fondo, taza: taza, tema: tema, texto: texto }, function(res){
						//if the file saved properly, trigger a popup to the user.
						if(res != ''){
							//location.href ='https://cafe.promofb.es/index.php?cafeid='+res;
							d = new Date();
							$("#imagef").attr("src", "cafe-finals/"+idcafe+".jpg?"+d.getTime());
							$("#final").show();
							$('#prefijados').hide();
							$('#intro').hide();$('#constructor').hide();
							$('#compartirlink').attr("href", "https://www.facebook.com/sharer/sharer.php?u=https%3A//cafe.promofb.es/index.php?cafeid="+idcafe);
							$('#adescargar').attr("href", "cafe-finals/"+idcafe+".jpg");
						}
						else{
							alert('Fallo al generar la foto');
						}
					});
				}

				function save_img3(){
					var idcafe = $('#idcafe').val();
					var ilustracion = $('#ilustracionh').val();
					var mensaje = $('#mensajeh').val();
							$.get('new-images2.php', { idcafe : idcafe, ilustracion: ilustracion, mensaje: mensaje }, function(res){
								//if the file saved properly, trigger a popup to the user.
								if(res != ''){
									//location.href ='https://cafe.promofb.es/index.php?cafeid='+res;
									d = new Date();
									$("#imagef").attr("src", "cafe-finals/"+idcafe+".jpg?"+d.getTime());
									$("#final").show();
									$('#prefijados').hide();
									$('#intro').hide();$('#constructor').hide();
									$('#compartirlink').attr("href", "https://www.facebook.com/sharer/sharer.php?u=https%3A//cafe.promofb.es/index.php?cafeid="+idcafe);
									$('#adescargar').attr("href", "cafe-finals/"+idcafe+".jpg");
								}
								else{
									alert('Fallo al generar la foto');
								}
							});
						}

function atras() {
		$("#final").hide();
		$('#constructor').show();	$('#prefijados').hide();
	}
function atras2() {
		$("#final").hide();
		$('#constructor').hide();
		$('#prefijados').show();
}
function iOS() {
  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];
  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }
  return false;
}
