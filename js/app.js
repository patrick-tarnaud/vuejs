let message = {
    props: {
        type: {
            type: String,
            default: 'success'
        },
        message: String
    },
    template: `<div :class='type'>{{message}}</div>`
}

let counter = {
    data: function () {
        return {
            count: 0
        }
    },
    methods: {
        incrementer: function () {
            this.count++
        }
    },
    template: `<div>
        <span>{{ count }}</span>
        <button @click='incrementer'>Incrémenter</button>
        </div>`
}

let vm = new Vue({
    el: '#app',
    components: {
        message,
        counter
    },
    data: {
        msgSuccess: '',
        msgError: ''
    }
})