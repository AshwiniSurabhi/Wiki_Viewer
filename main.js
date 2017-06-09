$(document).ready(function(){
 $('#search').click(function(){
   var searchthis=$('#searchtext').val();
  // console.log(searchthis);
   var url='https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchthis+'&format=json&callback=?';
   $.ajax({
   type:"GET",
     url:url,
     async:false,
     dataType:"json",
     success:function(data){
       $("#output").html("");
       for(var i=0;i<data[1].length;i++)
       $('#output').prepend('<li><a target="blank" href='+data[3][i]+'>'+data[3][i]+'</a><p>'+data[2][i]+'</p></li>');
       $('#searchtext').val('');
     },
     error:function(errorMessage){
       alert(error);
       
     }
   });
   
   
 });
  $('#searchtext').keypress(function(e){
    if(e.which==13)
      $('#search').click();
      
  });
  
});
