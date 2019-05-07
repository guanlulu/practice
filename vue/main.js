var sub1 = require('./sub1.vue')
var sub2 = require('./sub2.vue')
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    components: {
        sub1,
        sub2
    }
})