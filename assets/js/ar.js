var step = 1;
var is_notified = false;
AFRAME.registerComponent('image-tracker-1', {
    init: function () {
        console.log("image-tracker-1 init");
    },
    tick: function() {
        if (this.el.object3D.visible == true) {
            step = 2;
        }
    }
});
AFRAME.registerComponent('image-tracker-2', {
    init: function () {
        console.log("image-tracker-2 init");
    },
    tick: function() {
        if (this.el.object3D.visible == true) {
            if (step != 2 && !is_notified) {
                is_notified = true;
                alert("請先掃描封面辨識點");
            }
        }
    }
});
