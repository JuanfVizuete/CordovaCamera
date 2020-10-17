/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    document.getElementById("tomarFoto").addEventListener("click",tomarFoto);
    document.getElementById("takeVideo").addEventListener("click",takeVideo);
    
}

function tomarFoto(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL });

        function onSuccess(rutaImagen) {
            var image = document.getElementById('imagen');
            image.src = "data:image/jpeg;base64," + rutaImagen;
        }
        
        function onFail(message) {
            alert('Failed because: ' + message);
        }
    
    
}

function captureSuccess(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
      path = mediaFiles[i].fullPath;
      // do something interesting with the file
      document.getElementById("video2").remove();
      var x = document.createElement("video2");

      if (x.canPlayType("video/mp4")) {
        x.setAttribute("src", path);
      } else {
        x.setAttribute("src", "https://video.twimg.com/ext_tw_video/1244003140183060485/pu/vid/1280x720/nyR7xJnXM6sBC_6L.mp4");
      }

      x.setAttribute("width", "380");
      x.setAttribute("height", "280");
      x.setAttribute("controls", "controls");
      x.setAttribute("autoplay","autoplay");
      x.setAttribute("id","video2");
      document.getElementById('wea').appendChild(x);
      
      var VideoPlayer = document.getElementById('VideoPlayer');
      VideoPlayer.play(path);
      
    }
  };
function takeVideo() {
  // capture error callback

  // start video capture
  navigator.device.capture.captureVideo(captureSuccess, FailCallback, { limit: 1 });

}

function FailCallback(message) {
    alert('Error!!!: ' + message);
  }

  //**********VIDEOOOOOO******* */

  document.addEventListener('DOMContentLoaded', (ev)=>{
    let form = document.getElementById('myform');
    //get the captured media file
    let input = document.getElementById('capture');
    
    input.addEventListener('change', (ev)=>{
        console.dir( input.files[0] );
        if(input.files[0].type.indexOf("image/") > -1){
            let img = document.getElementById('img');
            img.src = window.URL.createObjectURL(input.files[0]);
        }
        else if(input.files[0].type.indexOf("audio/") > -1 ){
            let audio = document.getElementById('audio');
            audio.src = window.URL.createObjectURL(input.files[0]);
        }
        else if(input.files[0].type.indexOf("video/") > -1 ){
            let video = document.getElementById('video');
            video.src=window.URL.createObjectURL(input.files[0]);
            video.play(window.URL.createObjectURL(input.files[0]));
        }
        
        
    })
    
})


