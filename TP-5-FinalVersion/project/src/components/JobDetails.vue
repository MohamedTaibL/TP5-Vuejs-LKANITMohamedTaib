<template>
  <div class="jobStyling">
    <h3>{{ jobOffer.title }}</h3>
    <p>{{ jobOffer.description }}</p>
    <p>Salary: {{ jobOffer.salary }}</p>
    <p>Creation Date: {{ jobOffer.creationDate }}</p>
    <div>
      <button id="delete" @click="deleteJob">Delete</button>
      <router-link :to="'/editjob/' + jobOffer.id">
        <button @click = "Modify">Modify</button>
      </router-link>
      <button id="details" @click ="showDetails">Show More Details</button>
    </div>
  </div>
</template>

<script>
import data from '@/assets/Jobs.json';

export default {
  name: 'JobDetails',
  data(){
    return{
      index: data.findIndex(job => JSON.stringify(job) == JSON.stringify(this.jobOffer))
  }},
  props: {
    jobOffer: {
      type: Object,
      required: true
    }
  },
  methods: {
  deleteJob() {
    if (confirm("Are you sure you want to delete this job?")) {
        data.splice(this.index, 1);
        this.$emit('flag'); // Emit an event to notify parent component
    }
  },
  Modify() {
    this.$router.push({ path: '/editjob/${this.index}' , query : {Index : this.index}})
  },
  showDetails(){
    this.$router.push({path : '/actualdetails/${this.index}',
    query : {Index : this.index}
    })
  }

}
}
</script>

<style scoped>
.jobStyling {
  background-color: #f9f9f9;
  color: #333;
  box-shadow: 10px 10px 10px gray;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;

}

button {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease, background-color 0.3s ease;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: inset 0 0 20px 8px gray
}

button:hover {
  transform: scale(1.05);
  background-color: #ff6347;
  color: #fff;
}
</style>