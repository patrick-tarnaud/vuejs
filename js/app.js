let message = {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    message: String,
    header: String
  },
  template: `<div :class='type'>
                <i class="close icon" style="width: 10px; height: 10px">X</i>
                <div class="header">{{header}}</div>
                <span>{{message}}</span>
              </div>`
}

let counter = {
  props: {
    start: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      count: 0
    }
  },
  mounted() {
    this.count = this.start

  },
  methods: {
    incrementer() {
      this.count++
    }
  },
  template: `<button @click='incrementer'>{{ count }}</button>`
}

let vm = new Vue({
  el: '#app',
  components: {
    message,
    counter
  },
  data: {
    msgSuccess: 'Mon message de succès',
    msgError: 'Mon message d\'erreur'
  }
})