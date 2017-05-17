require("./main.css");

var Vue = require("vue");

var app = new Vue({
    el: "#app",
    data:{
        message: "hello.",
        show: false
    },
    methods:{
        clickedOutside: function () {
            this.show = false;
        }
    },
    directives: {
        'click-outside': require("./click-outside-directive")
    }
});