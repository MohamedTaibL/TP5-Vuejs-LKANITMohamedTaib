<template>
  <form>
    <div class="form-group">
      <label for="title">Change Title :</label>
      <input type="checkbox" v-model="changeTitle"/>
      <input placeholder="Enter The Job Title" v-model="title" v-if="changeTitle"/>
    </div>
    <div class="form-group">
      <label for="description">Change Description :</label>
      <input type="checkbox" v-model="changeDescription"/>
      <input placeholder="Enter The Job Description" v-model="description" v-if="changeDescription"/>
    </div>
    <div class="form-group">
      <label for="salary">Change Salary :</label>
      <input type="checkbox" v-model="changeSalary"/>
      <input placeholder="Enter The Job Salary" v-model="salary" v-if="changeSalary"/>
    </div>
    <div class="form-group">
      <label for="date">Change Date :</label>
      <input type="checkbox" v-model="changeDate"/>
      <input type="date" v-model="date" v-if="changeDate"/>
    </div>
    <div class="form-group">
      <label for="details">Change Details :</label>
      <input type="checkbox" v-model="changeDetails"/>
      <textarea placeholder="Enter The Job Details" v-model="details" v-if="changeDetails"></textarea>
    </div>
    <button @click.prevent="submit">Submit</button>
  </form>
</template>

<script>
import data from '@/assets/Jobs.json';
export default {
  data() {
    return {
      index: this.$route.query.Index,
      title: "",
      description: "",
      salary: 0,
      date: "",
      details: "",
      changeTitle: false,
      changeDescription: false,
      changeSalary: false,
      changeDate: false,
      changeDetails: false
    }
  },

  methods: {
    submit() {
      if (!(this.changeDate || this.changeDescription || this.changeSalary || this.changeTitle || this.changeDetails)) {
        this.$router.push('/');
        return;
      }

      if (this.changeTitle && !this.title) {
        alert("Title cannot be empty.");
        return;
      }
      if (this.changeDescription && !this.description) {
        alert("Description cannot be empty.");
        return;
      }
      if (this.changeDate && !this.date) {
        alert("Creation date cannot be empty.");
        return;
      }
      if (this.changeSalary && this.salary <= 0) {
        alert("Salary must be a positive number.");
        return;
      }
      if (this.changeDetails && !this.details) {
        alert("Details cannot be empty.");
        return;
      }

      if (this.changeTitle) {
        data[this.index].title = this.title;
      }
      if (this.changeDescription) {
        data[this.index].description = this.description;
      }
      if (this.changeSalary) {
        data[this.index].salary = this.salary;
      }
      if (this.changeDate) {
        data[this.index].creationDate = this.date;
      }
      if (this.changeDetails) {
        data[this.index].details = this.details;
      }

      console.log(data[this.index]);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.form-group label {
  flex: 1;
  margin-right: 10px;
}

.form-group input[type="text"],
.form-group input[type="date"],
.form-group input[type="number"],
.form-group textarea {
  flex: 2;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group input[type="checkbox"] {
  margin-left: 10px;
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