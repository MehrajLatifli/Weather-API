$(document).ready(function()
{
    const apikey= "9df36cff2de03602951447ffa2fefcfc";
    

    var contentcity;

    let url;

    
    url=`https://api.openweathermap.org/data/2.5/onecall?lat=${40.4093}&lon=${49.8671}&exclude=hourly,minutely&appid=${apikey}`;


    var currentdata;
    var currentdata2;




    alert("This project work host (ex: localhost)");


 
    

    $.get(url,function(data,status){

        
        fillhtml(url,data,status)
    });

    

    setTimeout(() => {
        
        $("#city_select").change(function()
        {
    

    
            
          if($("#city_select").val()=="Baku"){
        
    

            url=`https://api.openweathermap.org/data/2.5/onecall?lat=${40.4093}&lon=${49.8671}&exclude=hourly,minutely&appid=${apikey}`;

            $.get(url,function(data,status){
                
                currentdata="";
                contentcity="";

               fillhtml(url,data,status)
           });
            
          }
    
          if($("#city_select").val()=="Ankara"){
        
    
         

            url=`https://api.openweathermap.org/data/2.5/onecall?lat=${39.925533}&lon=${32.866287}&exclude=hourly,minutely&appid=${apikey}`;

            
            
            $.get(url,function(data,status){
                
                currentdata="";
                contentcity="";

                fillhtml(url,data,status)
            });

          }


          if($("#city_select").val()=="Almaty"){
        
    
         

            url=`https://api.openweathermap.org/data/2.5/onecall?lat=${43.2220}&lon=${76.8512}&exclude=hourly,minutely&appid=${apikey}`;

            
            
            $.get(url,function(data,status){
                

                currentdata="";
                contentcity="";

                

                fillhtml(url,data,status)
            });

          }

          if($("#city_select").val()=="Bishkek"){
        
    
         

            url=`https://api.openweathermap.org/data/2.5/onecall?lat=${42.8746}&lon=${74.5698}&exclude=hourly,minutely&appid=${apikey}`;

            
            
            $.get(url,function(data,status){
                

                currentdata="";
                contentcity="";

                

                fillhtml(url,data,status)
            });

          }

          if($("#city_select").val()=="Samarkand"){
        
    
         

            url=`https://api.openweathermap.org/data/2.5/onecall?lat=${39.6270}&lon=${66.9750}&exclude=hourly,minutely&appid=${apikey}`;

            
            
            $.get(url,function(data,status){
                

                currentdata="";
                contentcity="";

                

                fillhtml(url,data,status)
            });

          }

          if($("#city_select").val()=="Ashgabat"){
        
    
         

            url=`https://api.openweathermap.org/data/2.5/onecall?lat=${37.9601}&lon=${58.3261}&exclude=hourly,minutely&appid=${apikey}`;

            
            
            $.get(url,function(data,status){
                

                currentdata="";
                contentcity="";

                

                fillhtml(url,data,status)
            });

          }

          if($("#city_select").val()=="Yakutsk"){
        
    
         

            url=`https://api.openweathermap.org/data/2.5/onecall?lat=${62.0397}&lon=${129.7422}&exclude=hourly,minutely&appid=${apikey}`;

            
            
            $.get(url,function(data,status){
                

                currentdata="";
                contentcity="";

                

                fillhtml(url,data,status)
            });

          }

          if($("#city_select").val()=="Budapest"){
        
    
         

            url=`https://api.openweathermap.org/data/2.5/onecall?lat=${47.4979}&lon=${19.0402}&exclude=hourly,minutely&appid=${apikey}`;

            
            
            $.get(url,function(data,status){
                

                currentdata="";
                contentcity="";

                

                fillhtml(url,data,status)
            });

          }
    
    
        });
        
    }, 2000);



    function fillhtml(url,data,status){

       
        
            // $(".container").text(JSON.stringify(data));
            $.removeData(data);
            
                
            // $(".container").append(`Status : ${status}`);
    
            var {dt,sunrise,sunset,temp,feels_like,pressure,humidity,dew_point,uvi,clouds,visibility,wind_speed,wind_deg,weather}=data.current;
    

    
            currentdata=`
             
                     
            <div class="tempday2">
            
            <br>
            <div>Timezone: ${(data.timezone)}</div>
            <br>
            <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png">
              <div> ${window.moment(dt*1000).format('dddd')} </div>
              <div>Temp: ${(temp-273.15).toFixed(4)}&#176; C</div>
              <br>
              
              
              </div>
              

              <div class="tempday2"">
              
              <br>
              <div> ${window.moment(dt*1000).format( 'DD/MM/YYYY')} </div>
              <br>
              <div>Wind: ${(wind_speed)} kph</div>
              <br>
              <div>Pressure: ${(pressure)} mb</div>
              <br>
              <div>Humidity: ${(humidity)} %</div>
              <br>
    
            </div>
            `;
    
            contentcity+="<option name='city'  style='font-size: 1em;' value=Select>Select</option>";
            contentcity+="<option name='city'  style='font-size: 1em;' value=Baku>Baku</option>";
            contentcity+="<option name='city'  style='font-size: 1em;'  value=Ankara>Ankara</option>";
            contentcity+="<option name='city'  style='font-size: 1em;' value=Almaty>Almaty</option>";
            contentcity+="<option name='city'  style='font-size: 1em;'  value=Bishkek>Bishkek</option>";
            contentcity+="<option name='city'  style='font-size: 1em;'  value=Samarkand>Samarkand</option>";
            contentcity+="<option name='city'  style='font-size: 1em;'  value=Ashgabat>Ashgabat</option>";
            contentcity+="<option name='city'  style='font-size: 1em;'  value=Yakutsk>Yakutsk</option>";
            contentcity+="<option name='city'  style='font-size: 1em;'  value=Budapest>Budapest</option>";
            

       

            $(".temp").html(currentdata.substring('undefined'.length));
            $("#city_select").html(contentcity.substring('undefined'.length));
    
    
    
    
            var otherday;
    
            data.daily.forEach(( day, index ) =>
            {
               
                if(index==0)
                {
    
                }
    
                else
                {
    
                
        
    
                    otherday+=`
                    <div class="tempday">
                      <br>
                      <div> ${window.moment(day.dt*1000).format('dddd')} </div>
                      <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                      <div>Night ${(day.temp.night-273.15).toFixed(4)}&#176; C</div>
                      <div>Day ${(day.temp.day-273.15).toFixed(4)}&#176; C</div>
                      <br>
                      <div> ${window.moment(day.dt*1000).format( 'DD/MM/YYYY')} </div>
    
                    </div>
                    `
    
    
                    $("#tdays").html(otherday.substring('undefined'.length));
    
                    
                }
    
            });
    
        
               

                
    }

});