
var app = new Vue({
  el: "#app",
  data() {
    return {
      message: "下記は、Vue.jsの`v-for`ディレクティブで表示しています",
      items: ["hello", "fetch", "axios"],

      test: "表示test",
    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {
    alert("mounted")
  },

  created() {
    alert("created")
  },

  beforeDestroy() {
    alert("beforeDestroy")
  },
})