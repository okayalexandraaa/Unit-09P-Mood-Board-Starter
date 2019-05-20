var happyImages = [
    "https://i.vimeocdn.com/video/208974515_1280x720.jpg","https://hellogiggles.com/wp-content/uploads/2015/03/22/featured.jpg","https://theluxuryspot.com/wp-content/uploads/2014/09/girl-happy.jpg",
   
  
];
var sadImages = [ 
    "https://i1.sndcdn.com/avatars-000424866783-xz2u9u-t500x500.jpg","https://pbs.twimg.com/profile_images/1082706070680858626/hbpJQtle.jpg","https://cdn.pixabay.com/photo/2017/04/02/04/57/sad-2195019_960_720.png",
    "https://www.familyfriendpoems.com/images/hero/sad.jpg"
    ]; 
var tiredImages = ["https://gkng5olag22mpz1r551iq1dd-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/feeling-tired-2560x1280.jpg","https://media3.giphy.com/media/NWg7M1VlT101W/giphy.gif","https://media.self.com/photos/57d88ab246d0cb351c8c4cef/4:3/w_728,c_limit/always-tired-feat.jpeg"];
var hungryImages = ["","https://media.tenor.com/images/f85c932039fc7e45c6c1f946502a5f2b/tenor.gif","http://clipart-library.com/img/419107.jpg","https://assets.parents.com/s3fs-public/styles/nfp_1080_portrait/public/hungry-child.jpg?s6wZccXb7b6.w4eFYtyCXQvuguCPhmsN" ];


$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
     if(input === "happy"){
        happyMood();
    } else if(input==="sad"){
       sadMood();
    }else if(input==="tired"){
         tiredMood();
    }else if(input==="hungry"){
        hungryMood();
    }else{
     alert("Please enter happy, sad, tired, or hungry!");   
    }
});



function happyMood(){
   changeBackgroundColor("yellow");
   changeTextColor("red");
   iterate(happyImages);
}
function sadMood(){
  changeBackgroundColor("lightblue"); 
  changeTextColor("brown");
  iterate(sadImages);
}
function tiredMood(){
    changeBackgroundColor("pink");
    changeTextColor("purple");
    iterate(tiredImages);
}
function hungryMood(){
   changeBackgroundColor("purple");
   changeTextColor("lightblue");
   iterate(hungryImages);
}

function changeBackgroundColor(color){
     $("body").css('background-color', (color));
}

function changeTextColor(color){
     $('body').css('color', color);
}

function iterate (array){
    array.forEach(function(element){
        $("body").append("<img src=" +element +">");
    });
}


