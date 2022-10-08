"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine(){
    
    context.beginPath();
    context.rect(15,15,300,300);
    context.fillStyle="black";
    context.fill();

    context.beginPath();
    context.rect(40,40,50,50);
    context.fillStyle="lightgreen";
    context.fill();

    context.beginPath();
    context.rect(40,90,50,50);
    context.fillStyle="lightgreen";
    context.fill();

    context.beginPath();
    context.rect(40,140,50,50);
    context.fillStyle="lightgreen";
    context.fill();

    context.beginPath();
    context.rect(40,190,50,50);
    context.fillStyle="lightgreen";
    context.fill();
//
    context.beginPath();
    context.rect(90,40,50,50);
    context.fillStyle="lightgreen";
    context.fill();
    

    context.beginPath();
    context.rect(140,40,50,50);
    context.fillStyle="lightgreen";
    context.fill();

    context.beginPath();
    context.rect(190,40,50,50);
    context.fillStyle="lightgreen";
    context.fill();

    context.beginPath();
    context.rect(240,40,50,50);
    context.fillStyle="lightgreen";
    context.fill();
//
    

    context.beginPath();
    context.rect(240,90,50,50);
    context.fillStyle="lightgreen";
    context.fill();

    context.beginPath();
    context.rect(240,140,50,50);
    context.fillStyle="lightgreen";
    context.fill();

    context.beginPath();
    context.rect(240,190,50,50);
    context.fillStyle="lightgreen";
    context.fill();
//

    context.beginPath();
    context.rect(140,90,50,50);
    context.fillStyle="lightgreen";
    context.fill();

//
    context.beginPath();
    context.rect(90,140,50,50);
    context.fillStyle="lightgreen";
    context.fill();
//
    context.beginPath();
    context.rect(190,140,50,50);
    context.fillStyle="lightgreen";
    context.fill();
//

    context.beginPath();
    context.rect(90,190,50,50);
    context.fillStyle="lightgreen";
    context.fill();

//
    context.beginPath();
    context.rect(190,190,50,50);
    context.fillStyle="lightgreen";
    context.fill();

//

    context.beginPath();
    context.rect(90,240,50,50);
    context.fillStyle="lightgreen";
    context.fill();

    context.beginPath();
    context.rect(140,240,50,50);
    context.fillStyle="lightgreen";
    context.fill();

    context.beginPath();
    context.rect(190,240,50,50);
    context.fillStyle="lightgreen";
    context.fill();
}

