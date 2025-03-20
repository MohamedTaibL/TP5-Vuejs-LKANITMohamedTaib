<template>
    <div class="details-container">
      <h2>Job Details</h2>
      <p>{{ Details }}</p>
    </div>
  </template>
  
  <script>
  import data from '@/assets/Jobs.json'
  export default {
    data() {
      return {
        index: this.$route.query.Index,
        Details: null
      }
    },
    mounted() {
      this.Details = data[this.index].details
    }
  }
  </script>
  
  <style scoped>
  .details-container {
    max-width: 900px;
    margin: 50px auto;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    text-align: left;
  }
  
  .details-container h2 {
    margin-bottom: 25px;
    font-size: 28px;
    color: #333;
  }
  
  .details-container p {
    font-size: 18px;
    line-height: 1.8;
    color: #555;
  }
  </style>