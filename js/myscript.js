	
	
	solicitar_paises();
	
	
	function saludar(){

			var nombre= document.getElementById('nombre').value;
			var pais= document.getElementById('pais').value;
			//var edad= document.getElementById('edad').value;
			var nacimiento= document.getElementById('nacimiento').value;
			
			var fecha = new Date();
			var dia= 01;//fecha.getDate();
			var mes= 01;//("0" + (fecha.getMonth() + 1)).slice(-2);
			var años = fecha.getFullYear()-1;
			años -=  nacimiento;
			
			
			var str = 'Hola '+nombre+' de '+pais+', el día '+dia+' del mes '+mes+' tendra '+ años+' años';
			actualizar_saludo(str);
			
			var str2= nombre+' - '+pais+' - '+dia+'/'+mes+'/'+nacimiento;
			var div = document.createElement('div');
			
			div.innerHTML = str2;
			div.setAttribute('class', 'mydiv') ;
			div.addEventListener("click", function(){
				actualizar_saludo(str); 
			});
			
			document.getElementById('visitantes').appendChild(div);
	}
	
	function actualizar_saludo(str){
		document.getElementById('msj').innerHTML=str;
	}
	
	
	function solicitar_paises(){
		var xmlhttp;		
		if (window.XMLHttpRequest){
			xmlhttp=new XMLHttpRequest();
		}
		else{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}		
		xmlhttp.onreadystatechange=function(){		
			if (xmlhttp.readyState==4 && xmlhttp.status==200){	
			
			var paises = xmlhttp.responseText; 
				var lospaises = JSON.parse(paises);		
				
				if (typeof paises[0] === "undefined") {
					alert('No se Obtuvieron paises');
				}
				
				var cant= lospaises.length;
				var select= document.getElementById('pais');
				var selected= '';
				for(var i=0; i< cant; i++){
					
					if(lospaises[i]['name'] == 'Argentina'){
						selected='selected';
					}else{
						selected='';
					}
					
					
					var opt = document.createElement('option');
						opt.value = lospaises[i]['name'];
						opt.selected = selected;
						opt.innerHTML = lospaises[i]['name'];
						select.appendChild(opt);
				}
				
			}
		}	
		xmlhttp.open("GET","https://restcountries.eu/rest/v2/all",true);		
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");		
		xmlhttp.send();
		
	}
		
	/*function calcularEdad(fecha) {
		var fecha_hoy = new Date();
		var fecha_cumpleanos = new Date(fecha);
		var edad = fecha_hoy.getFullYear() - fecha_cumpleanos.getFullYear();
		var mes = fecha_hoy.getMonth() - fecha_cumpleanos.getMonth();
		if (mes < 0 || (m === 0 && fecha_hoy.getDate() < fecha_cumpleanos.getDate())) {
			edad--;
		}
		return edad;
	}*/	
	