function loadJSON(path, api, success, error) {
  document.getElementById("lb-msg").innerHTML = "loading data...";
  var data = null;
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  
  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      success(JSON.parse(xhr.responseText));
    }
  })
  
  xhr.open("GET", path);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", api);
  xhr.setRequestHeader("cache-control", "no-cache");
  
  xhr.send(data);
}

function getLeaderboard(Data, success, error) {
  var count = 0-1;
  Array.from({length: Data.length}, () => {
    count += 1;
    document.getElementById("un" + count).innerHTML = Data[count].username;
    document.getElementById("s" + count).innerHTML = Data[count].score;
  })
}

function updateLeaderboard(Data, success, error) {
  var username = getCookie("username");
  var count = 0-1;
  Array.from({length: Data.length}, () => {
    count += 1
    if (username != Data[count].username && score > Data[count].score) {
      
    }
  })
}

function setError(msg) {
  alert(msg)
}

loadJSON("https://zball-ec41.restdb.io/rest/leaderboard", "6228c7c7dced170e8c83a0b8", updateLeaderboard, setError);
