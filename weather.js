let url = "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=d5ef41e7a1ffe8316eaa53c364c03db0&units=metric"

        fetch(url)
          .then((response) => {
          return response.jsons();
        })
        .then((json) => {
          console.log(json);

          let result = "온도 : " + Math.floor(json.main.temp) + "ºC &nbsp &nbsp"
                    + "최고온도: " + Math.floor(json.main.temp_max) + "ºC &nbsp &nbsp"
                    + "최저온도: " + Math.floor(json.main.temp_min) + "ºC &nbsp &nbsp"
          let icon = json.weather[0].icon;
          document.getElementById("weather").innerHTML = result;
          let iconurl = document.getElementById("ic");
          iconurl.src = "http://openweathermap.org/img/wn/" + icon + ".png";
        });
        