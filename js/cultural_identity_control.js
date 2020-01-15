AFRAME.registerComponent("cursor-listener", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log("mouse clicked")
      this.el.emit("clickEvent")
    })
  }
})

AFRAME.registerComponent("ckpt-cursor-listener", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log("mouse clicked on checkpoint")
      this.el.emit("ckptClickEvent")
      var allVideoSources = document.querySelectorAll("video");
      for (var i=0; i < allVideoSources.length; i++) {
          allVideoSources[i].pause();
      }

      var parent = this.el.parentElement;
      var currentVideos = parent.querySelectorAll("a-video");
      for (var i=0; i < currentVideos.length; i++) {
          //need to get the source video of a-video
          console.log(currentVideos[i].getAttribute('src'));
          document.querySelector(currentVideos[i].getAttribute('src')).play();
      }
    })
  }
})

AFRAME.registerComponent('core-link-listener', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', function (evt) {
      document.querySelector("#portalLink").setAttribute('visible', !document.querySelector("#portalLink").getAttribute('visible'));
      document.querySelector("#portalLink").setAttribute('disabled', !document.querySelector("#portalLink").getAttribute('visible'));
    })
  }
})
