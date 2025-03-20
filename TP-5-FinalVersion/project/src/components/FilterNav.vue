<template>
  <div class="container">
    <label for="search">Search a certain job:</label>
    <input type="text" id="search" placeholder="Search a certain job:" v-model="searched" @input="this.$emit('response1', searched)"/>
    
    <label for="desc">Descending Price :</label>
    <input id="desc" type="checkbox" v-model="desc" @change="this.$emit('response2', desc)"/>
    
    <label for="min_price">Minimum Salary</label>
    <input id="min_price" type="number" min="0" placeholder="Enter minimum salary" v-model="min_price" @input="this.$emit('response3', min_price)"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'FilterNav',
      searched: "",
      desc: false,
      min_price: 0
    }
  },
  emits: ['response1', 'response2', 'response3']
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px; /* Add space between elements */
  flex-wrap: wrap; /* Allow wrapping to the next line if needed */
}

input[type="text"],
input[type="number"] {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px; /* Adjust the width */
  font-family: 'Arial', sans-serif; /* Change the font */
}

label {
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-family: 'Arial', sans-serif; /* Change the font */
  justify-content: center; /* Center the label content */
}

input[type="checkbox"] {
  margin-left: 10px;
}

input[type="text"]::placeholder,
input[type="number"]::placeholder {
  color: #aaa;
}
</style>