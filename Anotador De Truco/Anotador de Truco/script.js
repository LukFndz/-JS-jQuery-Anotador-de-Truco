$(document).ready(function() {
	console.log("asd");
     btnIniciar = $(".iniciar");
     
     //REGLAS
     var equipo1;
     var equipo2;
     var final = 30;

     //PUNTAJE
     var puntosE1 = 0;
     var fosforosE1 = 0;
     var fosforosE2 = 0;
     var puntosE2 = 0;

      btnIniciar.on("click", function(){
      equipo1 = $(".equipo1").val();
      equipo2 = $(".equipo2").val();
      $(".equipo1LBL").val(equipo1);
      $(".equipo2LBL").val(equipo2); 
      $(".equiposInicio").removeClass("visible");
      $(".equiposInicio").addClass("hidden");
      $(".BTNJuego").removeClass("hidden");
      $(".BTNJuego").addClass("visible");
      $(".BTNJuego2").removeClass("hidden");
      $(".BTNJuego2").addClass("visible");
      $(".reglaTXT").val("a " + final);
     });
      

      $(".final24").on("click", function(){
      final = 24;
    });


      $(".final30").on("click", function(){
      final = 30;
     });

      $(".suma").on("click", function(){
        if(fosforosE1 == 5)
          fosforosE1 = 0;
        puntosE1 += 1;
        fosforosE1 += 1;
         $("#puntaje1LBL").val(puntosE1);
        switch(final)
        {
          case 30:
         if(puntosE1 < 6)
         {
          $("#E1pack1").attr("src",puntosE1 + ".png");
         }
         if(puntosE1 < 11 && puntosE1 > 5)
         {
          $("#E1pack2").attr("src",fosforosE1 + ".png");
         }
         if(puntosE1 < 16 && puntosE1 > 10)
         {
          $("#E1pack3").attr("src",fosforosE1 + ".png");
         }
         if(puntosE1 < 21 && puntosE1 > 15)
         {
          $("#E1pack4").attr("src",fosforosE1 + ".png");
         }
          if(puntosE1 < 26 && puntosE1 > 20)
         {
          $("#E1pack5").attr("src",fosforosE1 + ".png");
         }
          if(puntosE1 < 31 && puntosE1 > 25)
         {
          $("#E1pack6").attr("src",fosforosE1 + ".png");
         }
         break;

         case 24:
         if(puntosE1 < 6)
         {
          $("#E1pack1").attr("src",puntosE1 + ".png");
         }
         if(puntosE1 < 11 && puntosE1 > 5)
         {
          $("#E1pack2").attr("src",fosforosE1 + ".png");
         }
         if(puntosE1 < 13 && puntosE1 > 10)
         {
          $("#E1pack3").attr("src",fosforosE1 + ".png");
         }
         if(puntosE1 == 12)
           fosforosE1 = 0;
          if(puntosE1 < 18 && puntosE1 > 12)
         {
          $("#E1pack4").attr("src",fosforosE1 + ".png");
         }
          if(puntosE1 < 23 && puntosE1 > 17)
         {
          $("#E1pack5").attr("src",fosforosE1 + ".png");
         }
          if(puntosE1 < 25 && puntosE1 > 22)
         {
          $("#E1pack6").attr("src",fosforosE1 + ".png");
         }
         break;
       }
         checkWin(puntosE1);
                 console.log("fosf1: " + fosforosE1);
      console.log("los puntos del e1 son: " + puntosE1);
      console.log("los puntos del e2 son: " + puntosE2);
      console.log("los fosforos del e1 son: " + fosforosE1);
     });


      $(".suma2").on("click", function(){
        if(fosforosE2 == 5)
        fosforosE2 = 0;
        puntosE2 += 1;
        fosforosE2 += 1;
         $("#puntaje2LBL").val(puntosE2);
         switch(final)
         {
          case 30:
         if(puntosE2 < 6)
         {
          $("#E2pack1").attr("src",puntosE2 + ".png");
         }
         if(puntosE2 < 11 && puntosE2 > 5)
         {
          $("#E2pack2").attr("src",fosforosE2 + ".png");
         }
         if(puntosE2 < 16 && puntosE2 > 10)
         {
          $("#E2pack3").attr("src",fosforosE2 + ".png");
         }
          if(puntosE2 < 21 && puntosE2 > 15)
         {
          $("#E2pack4").attr("src",fosforosE2 + ".png");
         }
          if(puntosE2 < 26 && puntosE2 > 20)
         {
          $("#E2pack5").attr("src",fosforosE2 + ".png");
         }
          if(puntosE2 < 31 && puntosE2 > 25)
         {
          $("#E2pack6").attr("src",fosforosE2 + ".png");
         }
         break;

         case 24:
         if(puntosE2 < 6)
         {
          $("#E2pack1").attr("src",puntosE2 + ".png");
         }
         if(puntosE2 < 11 && puntosE2 > 5)
         {
          $("#E2pack2").attr("src",fosforosE2 + ".png");
         }
         if(puntosE2 < 13 && puntosE2 > 10)
         {
          $("#E2pack3").attr("src",fosforosE2 + ".png");
         }
         if(puntosE2 == 12)
           fosforosE2 = 0;
          if(puntosE2 < 18 && puntosE2 > 12)
         {
          $("#E2pack4").attr("src",fosforosE2 + ".png");
         }
          if(puntosE2 < 23 && puntosE2 > 17)
         {
          $("#E2pack5").attr("src",fosforosE2 + ".png");
         }
          if(puntosE2 < 25 && puntosE2 > 22)
         {
          $("#E2pack6").attr("src",fosforosE2 + ".png");
         }
         break;
       }
         checkWin(puntosE2);
      console.log("los puntos del e1 son: " + puntosE1);
      console.log("los puntos del e2 son: " + puntosE2);
     });

      $(".resta").on("click", function(){
        if(fosforosE1 == 0 && final != 24)
          fosforosE1 = 5;

         if(final == 24 && puntosE1 == 12)
         {
          fosforosE1 = 2;
          }
          else if(fosforosE1 == 0 && final == 24)
          fosforosE1 = 5; 

        if(puntosE1 > 0)
        {
          puntosE1 -= 1;
          fosforosE1 -= 1;
        }
        console.log("fosf1: " + fosforosE1);
         $("#puntaje1LBL").val(puntosE1);
        switch(final)
        {
         case 30:
         if(puntosE1 < 5)
         {
          $("#E1pack1").attr("src",puntosE1 + ".png");
         }
         if(puntosE1 < 10 && puntosE1 > 4)
         {
          $("#E1pack2").attr("src",fosforosE1 + ".png");
         }
         if(puntosE1 < 15 && puntosE1 > 9)
         {
          $("#E1pack3").attr("src",fosforosE1 + ".png");
         }    
         if(puntosE1 < 20 && puntosE1 > 14)
         {
          $("#E1pack4").attr("src",fosforosE1 + ".png");
         }
          if(puntosE1 < 25 && puntosE1 > 19)
         {
          $("#E1pack5").attr("src",fosforosE1 + ".png");
         }
          if(puntosE1 < 31 && puntosE1 > 24)
         {
          $("#E1pack6").attr("src",fosforosE1 + ".png");
         }  
         break;

         case 24:
         if(puntosE1 < 5)
         {
          $("#E1pack1").attr("src",puntosE1 + ".png");
         }
         if(puntosE1 < 10 && puntosE1 > 4)
         {
          $("#E1pack2").attr("src",fosforosE1 + ".png");
         }
         if(puntosE1 < 12 && puntosE1 > 9)
         {
          $("#E1pack3").attr("src",fosforosE1 + ".png");
         }  
         if(puntosE1 < 17 && puntosE1 > 11)
         {
          $("#E1pack4").attr("src",fosforosE1 + ".png");
         }
          if(puntosE1 < 22 && puntosE1 > 16)
         {
          $("#E1pack5").attr("src",fosforosE1 + ".png");
         }
          if(puntosE1 < 25 && puntosE1 > 21)
         {
          $("#E1pack6").attr("src",fosforosE1 + ".png");
         }  
         break;
        }    
      console.log("los puntos del e1 son: " + puntosE1);
      console.log("los puntos del e2 son: " + puntosE2);
     });


      $(".resta2").on("click", function(){
          if(fosforosE2 == 0 && final != 24)
          fosforosE2 = 5;

         if(final == 24 && puntosE2 == 12)
         {
          fosforosE2 = 2;
          }
          else if(fosforosE2 == 0 && final == 24)
          fosforosE2 = 5; 

        if(puntosE2 > 0)
        {
          puntosE2 -= 1;
          fosforosE2 -= 1;
        }
         
         $("#puntaje2LBL").val(puntosE2);
         switch(final)
         {
          case 30:
         if(puntosE2 < 5)
         {
          $("#E2pack1").attr("src",puntosE2 + ".png");
         }
         if(puntosE2 < 10 && puntosE2 > 4)
         {
          $("#E2pack2").attr("src",fosforosE2 + ".png");
         }
         if(puntosE2 < 15 && puntosE2 > 9)
         {
          $("#E2pack3").attr("src",fosforosE2 + ".png");
         }
         if(puntosE2 < 20 && puntosE2 > 14)
         {
          $("#E2pack4").attr("src",fosforosE2 + ".png");
         }
          if(puntosE2 < 25 && puntosE2 > 19)
         {
          $("#E2pack5").attr("src",fosforosE2 + ".png");
         }
          if(puntosE2 < 31 && puntosE2 > 24)
         {
          $("#E2pack6").attr("src",fosforosE2 + ".png");
         }         

         break;


         case 24:
         if(puntosE2 < 5)
         {
          $("#E2pack1").attr("src",puntosE2 + ".png");
         }
         if(puntosE2 < 10 && puntosE2 > 4)
         {
          $("#E2pack2").attr("src",fosforosE2 + ".png");
         }
         if(puntosE2 < 12 && puntosE2 > 9)
         {
          $("#E2pack3").attr("src",fosforosE2 + ".png");
         }  
         if(puntosE2 < 17 && puntosE2 > 11)
         {
          $("#E2pack4").attr("src",fosforosE2 + ".png");
         }
          if(puntosE2 < 22 && puntosE2 > 16)
         {
          $("#E2pack5").attr("src",fosforosE2 + ".png");
         }
          if(puntosE2 < 25 && puntosE2 > 21)
         {
          $("#E2pack6").attr("src",fosforosE2 + ".png");
         }  
         break;
        }  
      console.log("los puntos del e1 son: " + puntosE1);
      console.log("los puntos del e2 son: " + puntosE2);
      console.log("los fosforos del e2 son: " + fosforosE2);
     });


        $(".btfinal").on("click", function(){
          reinciarJuego();
     });


      function checkWin(puntos)
      {
          if(puntos >= final)
          {
            if(puntosE1 >= final)
              $(".reglaTXT").val(equipo1 + " es el vencedor");
            else if(puntosE2 >= final)
              $(".reglaTXT").val(equipo2 + " es el vencedor");
            $(".suma").addClass("hidden");
            $(".resta").addClass("hidden");
            $(".suma2").addClass("hidden");
            $(".resta2").addClass("hidden");

          }
      }

      function reinciarJuego()
      {
        $(".suma").removeClass("hidden");
        $(".resta").removeClass("hidden");
        $(".suma").addClass("visible");
        $(".resta").addClass("visible");
        $(".suma2").removeClass("hidden");
        $(".resta2").removeClass("hidden");
        $(".suma2").addClass("visible");
        $(".resta2").addClass("visible");
        $(".equipo1").val("Equipo 1");
        $(".equipo2").val("Equipo 2");
        $("#puntaje1LBL").val("0");
        $("#puntaje2LBL").val("0");
        $("#E1pack1").attr("src","0.png");
        $("#E1pack2").attr("src","0.png");
        $("#E1pack3").attr("src","0.png");
        $("#E2pack1").attr("src","0.png");
        $("#E2pack2").attr("src","0.png");
        $("#E2pack3").attr("src","0.png"); 
        $("#E1pack4").attr("src","0.png");
        $("#E1pack5").attr("src","0.png");
        $("#E1pack6").attr("src","0.png");
        $("#E2pack4").attr("src","0.png");
        $("#E2pack5").attr("src","0.png");
        $("#E2pack6").attr("src","0.png");                                        
        final = 30;
        puntosE1 = 0;
        fosforosE1= 0;
        puntosE2 = 0;
        fosforosE2= 0;

      $(".equiposInicio").removeClass("hidden");
      $(".equiposInicio").addClass("visible");
      $(".BTNJuego").removeClass("visible");
      $(".BTNJuego").addClass("hidden");
      $(".BTNJuego2").removeClass("visible");
      $(".BTNJuego2").addClass("hidden");
      }
});