<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th class="heading" v-for="(c, i) in cols" :key="i" scope="cols">{{c}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(m, i) in movies" :key="i">
          <td v-for="(c, i) in cols" :key="i">
            {{m[c]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Vue from "vue";
  import VueResource from "vue-resource";
  Vue.use(VueResource);

  export default {
    data() {
      return {
        cols: [],
        trs: [],
        movies: null
      };
    },
    mounted() {
      this.$http.get("https://jsonplaceholder.typicode.com/comments").then(
        response => {
          console.log(response.body);
          let movies = response.body;
          this.movies = movies;

          // function renderData(page) {
          // headings
          var col = [];
          for (var i = 0; i < movies.length; i++) {
            for (var key in movies[i]) {
              if (col.indexOf(key) === -1) {
                col.push(key);
              }
            }
          }
          this.cols = col;
          // data
          var data = [];
          let trs = [];
          let tds = [];
          for (var i = 0; i < movies.length; i++) {
            for (var j = 0; j < col.length; j++) {
              let td = [];
              td = movies[i][col[j]];
              tds[j] = td;
            }
            trs.push(tds);
          }
          this.trs = trs;
        },
        response => { }
      );
    }
  };
</script>

<style scoped>
  .heading {
    text-transform: capitalize;
  }
</style>