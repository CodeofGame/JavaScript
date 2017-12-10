"use strict"

let util=require("util");
let EventEmitter=require("events").EventEmitter;



function MusicPlayer(){
  this.play=false;
  EventEmitter.call(this);
}

//类的继承
MusicPlayer.prototype=Object.create(EventEmitter.prototype);

let AudioDevice={
  play:function(){
    console.log("Music is playing...");
  },
  stop:function(){
    console.log("Music is Stop!");
  }                                     
}

var music=new MusicPlayer();

//通过on注册事件 ，可以添加多个监听器
music.on("play",function(){
  this.play=true;
  AudioDevice.play();
});

music.on("play",function(){
  console.log("新添加一个监听器");
})

music.on("stop",function(){
  this.play=false;
  AudioDevice.stop();
})

music.removeE

//通过emit触发事件
music.emit("play");                                             vf


setTimeout(function(){
  music.emit("stop");
},2000);









