/*declaration of constants and variables*/ 
const TitleDay = document.getElementsByClassName("TitleDay");
const TitleNight = document.getElementsByClassName("TitleNight");
const LeftLogic = document.getElementsByClassName("LeftLogic");
const CenterLogic = document.getElementsByClassName("CenterLogic");
const RightLogic = document.getElementsByClassName("RightLogic");
const ImgReturnDay = document.getElementsByClassName("ImgReturnDay");
const ImgReturnNight = document.getElementsByClassName("ImgReturnNight");
const ImgLeftSun = document.getElementById("ImgLeftSun");
const ImgRightMoon = document.getElementById("ImgRightMoon");
const ImgCenterSun = document.getElementById("ImgCenterSun");
const ImgCenterMoon = document.getElementById("ImgCenterMoon");
var ControlOne = document.body.controlone;
var ControlTWo = document.body.controltwo;

/*The function Click receives three parameters, with display configuration function*/
function Click(ParameterOne,ParameterTwo,ParameterTree){
    document.getElementById(ParameterOne).style.display="flex";
    document.getElementById(ParameterTwo).style.display="none";
    document.getElementById(ParameterTree).style.display="none";
}

/*The Over and Out functions receive the same parameter, together they have the similarity of using the CSS Hover selector in JavaScript*/ 
function Over(id){
    if(ControlTWo==="00"){
        document.getElementById(id).style.border="2px solid white";
    }
    else{
        document.getElementById(id).style.border="2px solid black";
    }
}
function Out(id){
    document.getElementById(id).style.border="0px solid red";
}

/*Function that selects and orders the change of available modes*/
function Constructor(){
    if(control === "On"){
        document.body.style.background="black";
        document.body.style.color="white";
        for(var count = 0;count <=2;count++){
            TitleDay[count].style.opacity="0";
            TitleDay[count].transition="opacity 0.5s ease-in";
            TitleNight[count].style.opacity="1";
            TitleNight[count].style.transition="opacity 0.5s 0.5s ease-in";
        }
        ImgReturnDay[0].style.opacity="0";
        ImgReturnDay[1].style.opacity="0";
        ImgReturnNight[0].style.opacity="1";
        ImgReturnNight[1].style.opacity="1";
        LeftLogic[0].style.backgroundColor="white";
        CenterLogic[0].style.backgroundColor="white";
        RightLogic[0].style.backgroundColor="white";
        ImgLeftSun.style.opacity="0";
        ImgRightMoon.style.opacity="1";
        ImgLeftSun.style.transition="opacity 0.5s ease-in";
        ImgRightMoon.style.transition="opacity 0.5s 0.5s ease-in";
        ImgCenterSun.style.opacity="0";
        ImgCenterMoon.style.opacity="1";
        ControlOne="Off";
        ControlTWo="00";
    }
    else{
        document.body.style.background="white";
        document.body.style.color="black";
        for(var count = 0;count <=2;count++){
            TitleNight[count].style.opacity="0";
            TitleNight[count].transition="opacity 0.5s ease-in";
            TitleDay[count].style.opacity="1";
            TitleDay[count].style.transition="opacity 0.5s 0.5s ease-in";
        }
        ImgReturnDay[0].style.opacity="1";
        ImgReturnDay[1].style.opacity="1";
        ImgReturnNight[0].style.opacity="0";
        ImgReturnNight[1].style.opacity="0";
        LeftLogic[0].style.backgroundColor="black";
        CenterLogic[0].style.backgroundColor="black";
        RightLogic[0].style.backgroundColor="black";
        ImgLeftSun.style.opacity="1";
        ImgRightMoon.style.opacity="0";
        ImgLeftSun.style.transition="opacity 0.5s 0.5s ease-in";
        ImgRightMoon.style.transition="opacity 0.5s ease-in";
        ImgCenterSun.style.opacity="1";
        ImgCenterMoon.style.opacity="0";
        ControlOne="On";
        ControlTWo="01"
    }
}
