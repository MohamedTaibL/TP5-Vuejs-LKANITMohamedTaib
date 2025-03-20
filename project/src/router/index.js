import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AddJob from '../views/AddJob.vue'
import EditJob from '../views/EditJob.vue'
import ActualDetails from '../views/ActualDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/addjob',
    name: 'addjob',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddJob,
    props: true // Pass props to AddJob component
  },
  {
    path:'/editjob/:id',
    name: "editjob",
    component : EditJob
  },
  {
    path:'/actualdetails/:id',
    name : "actual details",
    component: ActualDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
