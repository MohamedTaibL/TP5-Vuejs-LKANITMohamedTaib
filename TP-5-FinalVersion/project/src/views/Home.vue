<template>
  <FilterNav @response1="(msg) => searched_value = msg" @response2="(value) => descending = value" @response3="(value) => minsalary = value"/>
  <div v-for="job in filterJobs" :key="job.id">
    <JobDetails :jobOffer="job" @flag="updateJobs"/>
  </div>

  <router-view></router-view>
</template>

<script>
import FilterNav from '../components/FilterNav.vue';
import JobDetails from '../components/JobDetails.vue';
import AddJob from './AddJob.vue';
import data from '@/assets/Jobs.json';

export default {
  name: 'Home',
  data() {
    return {
      filteredname: "",
      minsalary: 0,
      jobs: [],
      searched_value: "",
      descending: false,
    }
  },
  components: {
    FilterNav,
    JobDetails,
    AddJob
  },
  mounted(){
    this.jobs = [...data];

  },
  methods: {
    updateJobs() {
      this.jobs = [...data]; // [...data] to cause reactivity of vuejs
    },
    
  },
  computed: {
    filterJobs() {
      let filtered = this.jobs.filter((job) => {
        return job.title.toLowerCase().includes(this.searched_value.toLowerCase()) &&
               job.salary >= this.minsalary;
      });
      if (this.descending) {
        filtered.sort((a, b) => b.salary - a.salary);
      }
      return filtered;
    }
  },


 
  }

</script>
