
window.onload = (function() {
  console.log("Meow World");

  var submitButton = document.getElementById("submitbutton");
  var lightButton =  document.getElementById("light");


  submitButton.addEventListener('click', function(){
    getRandomCatUrl();
  });

  lightButton.addEventListener('click', function(){
    const curColor = document.body.style.backgroundColor;

    if(curColor === 'silver'){
      document.body.style.backgroundColor = "black";
      document.body.style.color = "green";
    }else{
      document.body.style.backgroundColor = "silver";
      document.body.style.color = "black";
    }
  })
});

function getRandomCatUrl() {
  var randomCatGifImg = document.getElementById("randomCatGif");
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.giphy.com/v1/gifs/random?tag=cats&fixed_height=200&fixed_width=200&api_key=CapsQ6kkgk1ckOa1R3MfvPS87ziHqtcQ&limit=1');
  xhr.onload = function() {
    debugger
    randomCatGifImg.src = JSON.parse(xhr.response).data.images.fixed_height.url;
  }
  xhr.send();

};
