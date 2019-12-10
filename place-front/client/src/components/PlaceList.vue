<template>
<div>
    <hr>
    <div class="list-unstyled" v-for="place in places" :key="place._id">
      <li class="media">
        
        <div class="media-body">
          <h4 class="mt-0 mb-1">Place: {{place.name}}</h4>
          <h5 class="mt-0 mb-1">Did you visited? {{place.visited ? 'Yes, Loved it!':'No, so sad!'}}</h5>
          <br />
         
        </div>
      </li>
      <hr>
    </div>
  </div>
    
</template>

<script>
const API_URL = "http://localhost:4200/place";
 const headers = {
  'Accept': 'application/json',
}
export default {
     name: "home",
    data: () => ({
        error: "",
        places: []
    }),
    mounted() {
    fetch(API_URL, {headers})
      .then(response => response.json())
      .then(result => {
        this.places = result;
      });
  },
  methods: {}
}
</script>

<style scoped>
  
  li {
      list-style: none;
  }

</style>