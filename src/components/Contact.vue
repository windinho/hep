<template>
  <section class="jumbotron row">
    <form class="col" @submit.prevent="submitForm()">
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10">
          <input v-model="name" type="text" class="form-control" id="name" placeholder="Enter name" minlength="2" maxlength="10" pattern="[A-Za-z]+" title="Enter 2 - 10 letter alphabets" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">Email:</label>
        <div class="col-sm-10">
          <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email" required  >
        </div>
      </div>
      <div class="form-group row text-left">
        <div class="col-sm-10 offset-sm-2">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
    <div class="col text-left ml-3" v-if="show">
      <b>Name:</b> {{name}} <br>   
      <b>Email:</b> {{email}}
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      show: false
    };
  },
  methods: {
    submitForm(e) {
      this.show = true;
    }
  }
};
</script>