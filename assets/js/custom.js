
$(document).ready(function() {
 
    getTemp();
    AirQuality();

    $("#btnSubmit").click(function() {

      // $("#btnSubmit").prop("disabled",true);
      $("#btnSubmit").fadeOut("slow");
      $("#sentMsg").fadeIn("slow");

        $.ajax({
            url: "/Mail/api/Mail",
            type: "POST",
            data: {
                name: $("#name").val(),
                phone: $("#phone").val(),
                email: $("#email").val(),
                message: $("#message").val()         
            },
            success: function(n) {
                $("#messageResult").show(1000);

            },//success
            error: function(n){
              $("#sentMsg").text("ERROR SENDING MESSAGE - PLEASE EMAIL YOUR MESSAGE TO RIVERVIEW@CLOVISCROSSFIRE.COM");
            }
        })
    });


    function setLbl(thisType,thisValue){

        var obj = $("#AirQ");
        var atr = "";
        var thisText="";

      if(thisType=="AQI"){

           if(thisValue<=50){
              atr ="background-color: #00e400;display:none;color:black;font-weight: bold;";
            }          
            if(thisValue>=51 && thisValue<=100){
              atr ="background-color: #ffff00;display:none;color:black;font-weight: bold;";
            }
            if(thisValue>=101 && thisValue<=150){
              atr ="background-color: #ff7e00;display:none;color:black;font-weight: bold;";
            }
            if(thisValue>=150 && thisValue<=200){
              atr ="background-color: #ff0000;display:none;color:black;font-weight: bold;";
            }
            if(thisValue>=200 && thisValue<=300){
              atr ="background-color: #8f3f97;display:none;color:black;font-weight: bold;";
            }
            if(thisValue>=300){
              atr ="background-color: #7e0023;display:none;color:balck;font-weight: bold;";
            }                           
            obj.attr("style", atr);
            thisText = "Air Quality: " + thisValue + obj.text();
      }else{
            thisText = obj.text() + ": " + thisValue;
      }


      obj.text(thisText);
      
      $("#AirQ").show();

    }//setLbl
   

    function getTemp(){    
    $.ajax({
          crossOrigin: true,
          type: "GET",
          url:"http://api.openweathermap.org/data/2.5/weather?zip=93720,us&units=imperial&APPID=1bcc29dcbc108f7bf2ddfab0c063a3c2",
          success:function(data){
            // var returnedData = JSON.parse(data);
            temp= " and Temp: " + data.main.temp + " with " + data.weather[0].description;
            setLbl("temp",temp);
          },
        error:function(){
        // alert("Error obtaining air quality");
        }      
        }); 
    }//getTemp


    function AirQuality(){
        $.ajax({
            type: "GET",
            url:"https://api.waqi.info/feed/clovis/?token=4cc464f245c297e1e7f17efb8c77c2b0147c3ffb",
            success:function(result){
              var nmbr=result.data.aqi
              setLbl("AQI",nmbr);
            },
          error:function(){
           // alert("Error obtaining air quality");
          }      
          }); 
    }//AirQ

    loadGallery();
    
    function getPath(){

     var thisPath=   (Math.floor(Math.random() * 9) + 1).toString();
      if(thisPath=="2"){
        thisPath="3";
      }

      return thisPath;
    }

    function loadGallery(){

      var thisPath=getPath();
     
      $("#th1").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_1.JPG");
      $("#img1").attr("href", "assets/img/Gallery/" + thisPath +"/TH_1.JPG");

      thisPath=getPath();
      $("#th2").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_2.JPG");
      $("#img2").attr("href", "assets/img/Gallery/" + thisPath +"/TH_2.JPG");

      thisPath=getPath();
      $("#th3").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_3.JPG");
      $("#img3").attr("href", "assets/img/Gallery/" + thisPath +"/TH_3.JPG");

      thisPath=getPath();
      $("#th4").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_4.JPG");
      $("#img4").attr("href", "assets/img/Gallery/" + thisPath +"/TH_4.JPG");

      thisPath=getPath();
      $("#th5").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_5.JPG");
      $("#img5").attr("href", "assets/img/Gallery/" + thisPath +"/TH_5.JPG");

      thisPath=getPath();
      $("#th6").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_6.JPG");
      $("#img6").attr("href", "assets/img/Gallery/" + thisPath +"/TH_6.JPG");

      thisPath=getPath();
      $("#th7").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_7.JPG");
      $("#img7").attr("href", "assets/img/Gallery/" + thisPath +"/TH_7.JPG");

      thisPath=getPath();
      $("#th8").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_8.JPG");
      $("#img8").attr("href", "assets/img/Gallery/" + thisPath +"/TH_8.JPG");

      thisPath=getPath();
      $("#th9").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_9.JPG");
      $("#img9").attr("href", "assets/img/Gallery/" + thisPath +"/TH_9.JPG");

      thisPath=getPath();
      $("#th10").attr("src", "assets/img/Gallery/" + thisPath +"/thimb/TH_10.JPG");
      $("#img10").attr("href", "assets/img/Gallery/" + thisPath +"/TH_10.JPG");
  
    }

      //  jQuery.get('http://127.0.0.1:8888/foo.htm', function(data) {
      var thisPath=window.location.origin + '/foo.htm';

      jQuery.get(thisPath, function(data) {
        // alert(data);
        document.getElementById("announcementns").innerHTML=data;
      });

});

