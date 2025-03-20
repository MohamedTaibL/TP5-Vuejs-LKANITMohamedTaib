<template>
  <form class="display">
    <label for="title">Job Title:</label>
    <input id="title" placeholder="Enter The Job Title" v-model="title"/>
    
    <label for="description">Job Description:</label>
    <input id="description" placeholder="Enter The Job Description" v-model="description"/>
    
    <label for="salary">Job Salary:</label>
    <input id="salary" placeholder="Enter The Job Salary" v-model="salary"/>
    
    <label for="date">Creation Date:</label>
    <input id="date" type="date" v-model="date"/>
    
    <label for="details">Job Details:</label>
    <textarea id="details" placeholder="Enter The Job Details" v-model="details"></textarea>
    
    <button @click.prevent="submit">Submit</button>
  </form>
</template>

<script>
import data from '@/assets/Jobs.json'
export default {
  data() {
    return {
      title: "",
      description: "",
      salary: 0,
      date: "",
      details: "",
      jobObject: {},
    }
  },
  methods: {
    submit() {
      if (!this.title || !this.description || !this.date) {
        alert("Title, description, and creation date cannot be empty.");
        return;
      }
      if (this.salary <= 0) {
        alert("Salary must be a positive number.");
        return;
      }
      this.jobObject = {
        title: this.title,
        description: this.description,
        salary: this.salary,
        creationDate: this.date,
        details: this.details
      }
      data.unshift(this.jobObject);
      this.$router.push('/');
    }
  },
}
</script>

<style scoped>
.display {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  justify-content: space-around;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

input[type="text"],
input[type="date"],
input[type="number"],
textarea {
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #36a372;
}
</style>