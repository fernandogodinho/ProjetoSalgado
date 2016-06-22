//Pode ser feito assim, mas e melhor utilizar o submit do form
//Aqui irá demonstrar a mensagem de erro criada no html
$(function(){
	$('button[type=submit]')
		.click(function(){
			$('#message').show();
		});
});

//Interceptando o submit do form
$(function(){
	$('form').submit(function(){
			var temErros = false;
			
			var nome = $('input[name=nome]').val();
			if (nome.isEmpty()){
				$('#nome-group').addClass('has-error');
				temErros = true;
			}
			
			var email = $('input[name=email]').val();
			var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
			if (email.isEmpty() || !reEmail.test(email)){
				$('#email-group').addClass('has-error');
				temErros = true;
			}
			
			if (temErros){
				$('#message')
					.html("<strong>Erro!</strong> Nome deve ser preenchido!")
					.show;
				$('input[name=nome]').focus();
			}
			
			return false;
		});
});



//Carregar menu por ajax.
//Carregando o menu de um objeto comum para todas as telas
$(function(){
	//carregar o menu
	$.get('menu.html', function(){
		
	});
});


//Consultar CEP
$(function(){
	$('#consultar').click(function(){
		var cep = $('input[name=cep]').val();
		$.getJSON('http://api.postmon.com.br/v1/cep/' + cep, function(endereco){
			$('input[name=logradouro]').val(endereco.logradouro);
			$('input[name=bairro]').val(endereco.bairro);
			$('input[name=municipio]').val(endereco.cidade + '/' + endereco.estado);
		});
	});
});