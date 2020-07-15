$(".changeBtn1").click(function(){
    console.log("click is working Btn 1");

    $(".firstDiv").addClass("firstDivNew");
})

$(".changeBtn2").click(function(){
    console.log("click is working Btn 2");

    $(".secondDiv").css("background","yellow");
    $(".secondDiv").css("border-color", "blue");
})

$(".changeBtn3").click(function(){
    console.log("click is working Btn 3");
})

$(".changeAllBtn").click(function(){
    console.log("click is working Change All");

    $(".firstDiv").addClass("changeAllColors");
    $(".secondDiv").addClass("firstDivNew");
    $(".thirdDiv").css("background", "orange");
    $(".thirdDiv").css("border-color", "yellow");

})

$(".hideBtn1").click(function(){
    $(".firstDiv").toggle();
})