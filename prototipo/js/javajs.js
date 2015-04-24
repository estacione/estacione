function validarLogin(){
	
	if (document.login.usuario.value != "admin"){
		window.alert ("Usuário inválido!");
		document.login.usuario.focus(); 											
		return false;
	}

	if (document.login.senha.value != "admin"){
		window.alert ("Senha inválida!");
		document.login.senha.focus(); 											
		return false;
	}
}

function validarForm(){
	
	if (document.formulario.idade.value <= "14"){//if (document.formulario.idade.value == ""){
		window.alert ("Voce deve preencher o campo Idade sendo maior que 15 anos!");
		document.formulario.idade.focus(); 											
		return false;
	}

}

function mostraDados(){

	var formDados = document.getElementById("formulario");
	var armazenaDados = "";
    var i;
    for (i = 0; i < formDados.length; i++) {
        armazenaDados = armazenaDados + formDados.elements[i].value + "<br>";
		document.getElementById("demo").innerHTML = armazenaDados;
	}

}