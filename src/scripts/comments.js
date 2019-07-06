import Vue from "vue";

const commentItem = {
    template: '#comment-itme'
}

new Vue ({
    el: "#comments-component",
    template: "#comments-list",
    components : {
        commentItem
    }
    
})