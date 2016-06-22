$("#tipo_pessoa").click(function(){
   var tipo_pessoa = $("#tipo_pessoa").val();
   
   $("#cpf_cnpj").unmask(); 
   
   if(tipo_pessoa == 'F'){
      $("#cpf_cnpj").mask("999.999.999-99");
      $("#sexo").prop('disabled', false);
   } else {
      $("#cpf_cnpj").mask("99.999.999/9999-99");
      $("#sexo").prop('disabled', 'disabled');
      $("#sexo").val('');
   }                   
});

$("#cpf_cnpj").mask("999.999.999-99");