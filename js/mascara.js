$(".tipo_pessoa").click(function(){
   
   var tipo_pessoa = $(".tipo_pessoa:checked").val();
   
   $("#cpf_cnpj").unmask(); 
   
   if(tipo_pessoa == 'F'){
      $("#cpf_cnpj").mask("999.999.999-99");
   } else {
      $("#cpf_cnpj").mask("99.999.999/9999-99");
   }                   
});

$("#cpf_cnpj").mask("999.999.999-99");