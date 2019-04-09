$(".answer").hide();

$("#submit").click(function() {
    $(".answer").hide();
    var important, emotion;
    
    if($("#important").val() === "yes"){
        important = true;
    }
    else{
        important = false;
    }
    
    if(parseInt($("#emotion").val()) >= 1){ // takes important's text and converts it into an integer
        emotion = true;
    }
        else{
        emotion=false;    
    }
    
    console.log(important);
    console.log(emotion);
    
    if(!emotion && important){
        $("#mario").show();
    }
    else if(emotion && !important){
        $("#luigi").show();
    }
    else if(emotion && important){
        $("#peach").show();
    }
    else if(!emotion && !important){
        $("#toad").show();
    }
});