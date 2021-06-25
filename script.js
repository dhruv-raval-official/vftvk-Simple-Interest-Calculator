function compute(){
      var a= document.getElementById("principal").value;
        var sa = document.getElementById("rate").value;
      
      var time = document.getElementById("year").value;
          if(a <= 0){
            alert("Enter positive Amount");
            document.getElementById("principal").focus();
          }
      else{
      var answer = (a*time*sa)/100;
document.getElementById("result").innerHTML = answer;
document.getElementById("result").style.background="yellow";
}
       
    }

    function fatch(){
      var sa = document.getElementById("rate").value;
      document.getElementById("rate_val").innerHTML = sa+"%";

    }
