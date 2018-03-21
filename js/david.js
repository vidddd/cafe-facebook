function comenzar(opcion){
	$("#intro").css("display","none");
	if(opcion=="constructor"){
		$("#constructor").css("display","block");
	}else if(opcion=="prefijados"){
		$("#prefijados").css("display","block");
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
				posicionTema=5;
			}
			$("#tema"+posicionTema).css("display","block");
		}
		if(direccion=='dch'){
			$("#tema"+posicionTema).css("display","none");
			if(posicionTema<5){
				posicionTema++;
			}else{
				posicionTema=1;
			}
			$("#tema"+posicionTema).css("display","block");
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
			$("#fondo"+posicionColor).css("display","block");
		}
		if(direccion=='dch'){
			$("#fondo"+posicionColor).css("display","none");
			if(posicionColor<6){
				posicionColor++;
			}else{
				posicionColor=1;
			}
			$("#fondo"+posicionColor).css("display","block");
		}
	}
	/*---------------- TAZA -------------------------*/
	if(controlVisorConstructor=='taza'){
		if(direccion=='izq'){
			$("#taza"+posicionTaza).css("display","none");
			if(posicionTaza>1){
				posicionTaza--;
			}else{
				posicionTaza=5;
			}
			$("#taza"+posicionTaza).css("display","block");
		}
		if(direccion=='dch'){
			$("#taza"+posicionTaza).css("display","none");
			if(posicionTaza<5){
				posicionTaza++;
			}else{
				posicionTaza=1;
			}
			$("#taza"+posicionTaza).css("display","block");
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
			$("#texto"+posicionTexto).css("display","block");
		}
		if(direccion=='dch'){
			$("#texto"+posicionTexto).css("display","none");
			if(posicionTexto<6){
				posicionTexto++;
			}else{
				posicionTexto=1;
			}
			$("#texto"+posicionTexto).css("display","block");
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
				posicionIlustracion=5;
			}
			$("#ilustracion"+posicionIlustracion).css("display","block");
		}
		if(direccion=='dch'){
			$("#ilustracion"+posicionIlustracion).css("display","none");
			if(posicionIlustracion<5){
				posicionIlustracion++;
			}else{
				posicionIlustracion=1;
			}
			$("#ilustracion"+posicionIlustracion).css("display","block");
		}
	}
	/*---------------- Mensaje -------------------------*/
	if(controlVisorPrefijado=='mensaje'){
		if(direccion=='izq'){
			$("#mensaje"+posicionMensaje).css("display","none");
			if(posicionMensaje>1){
				posicionMensaje--;
			}else{
				posicionMensaje=5;
			}
			$("#mensaje"+posicionMensaje).css("display","block");
		}
		if(direccion=='dch'){
			$("#mensaje"+posicionMensaje).css("display","none");
			if(posicionMensaje<5){
				posicionMensaje++;
			}else{
				posicionMensaje=1;
			}
			$("#mensaje"+posicionMensaje).css("display","block");
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
	if(posicionIlustracion != 0 && posicionMensaje != 0) {
		$('#aceptar2a').css("display","none");
		$('#aceptar2').show();
	}
}
function verFinal(){
		var node = document.getElementById('canvas');
		if(iOS() || navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
			html2canvas(node).then(function(canvas) {
					var base64image = canvas.toDataURL("image/jpeg");
					save_img(base64image);
			});
		} // detect IE8 and above, and edge
		 else if (document.documentMode || /Edge/.test(navigator.userAgent)){
			html2canvas(node).then(function(canvas) {
					var base64image = canvas.toDataURL("image/jpeg");
					save_img(base64image);
			});
		}
		else {
				var options = { quality: 0.99 };
				domtoimage.toJpeg(node, options).then(function (dataUrl) {
					save_img(dataUrl);
				});
			}
		$(".bt_atras").show();
}
function verFinal2(){
	 var node = document.getElementById('canvas2');
	 if(iOS() || navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0 ) {
		 html2canvas(node).then(function(canvas) {
		     var base64image = canvas.toDataURL("image/jpeg");
		 	 	 save_img(base64image);
		 });
	 } // detect IE8 and above, and edge
	  else if (document.documentMode || /Edge/.test(navigator.userAgent)){
		 html2canvas(node).then(function(canvas) {
				 var base64image = canvas.toDataURL("image/jpeg");
				 save_img(base64image);
		 });
  }
	else {
		var options = { quality: 0.99 };
		domtoimage.toJpeg(node, options).then(function (dataUrl) {
			save_img(dataUrl);
		}).catch(function (error) {
          alert(error);
        });
		}
		$(".bt_atras2").show();
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
