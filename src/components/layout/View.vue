<template>


  <div class="container">

    <div class="row">
      <div class="col-12">
      </div>
    </div>
    <div class="row">
      <div class="col-12">

        <div class="card-columns">
          <div class="card" v-for="dog in dogs" :key="dog.id">
            <img :src="dog.image" class="card-img-top" :alt="dog.name" />
            <div class="card-body">
              <h5 class="card-title">{{ dog.name }}</h5>
              <p class="card-text">{{ dog.description }}</p>
              <router-link :to="{ name: 'DogDetails', params: { id: dog.id } }" class="btn btn-primary">More details</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "ViewList"
}
</script>

<style scoped>

.container {
  margin-top: 2rem;
}

.card-columns {
  column-count: 1;
}

.card {
  margin-bottom: 1rem;
}


@media screen and (min-width: 700px) {
  .card-columns {
    column-count: 2;
  }
}

@media screen and (min-width: 1000px) {
  .card-columns {
    column-count: 3;
  }
}

@media screen and (min-width: 1200px) {
  .card-columns {
    column-count: 4;
  }
}

@media screen and (min-width: 1400px) {
  .card-columns {
    column-count: 5;
  }
}

</style>