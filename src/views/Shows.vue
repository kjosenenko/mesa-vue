<script setup>
  import { reactive, onBeforeMount } from 'vue'
  import dayjs from 'dayjs'
  import axios from 'axios'

  const apiBase = 'http://localhost:8000'
  let shows = []
  let pastShows = []

  onBeforeMount(() => {
    setShows();
    setPastShows();
  })

  async function setShows() {
    let response = await axios.get(`${apiBase}/shows/`)
    shows = response.data
    console.log(shows)
  }

  async function setPastShows() {
    let response = await axios.get(`${apiBase}/past_shows/`)
    pastShows = response.data
    console.log(pastShows)
  }

  function formatDate(date) {
    return dayjs(date).format('MM/DD/YYYY hh:mm A');
  }

  function formatImgUrl(path) {
    return apiBase + path
  };
</script>

<template>
  <div>
    <h1 className="center-text monoton">SHOWS AND DATES</h1>
    <div v-if="shows.length">
      <div v-for="show in shows" :key="show.id" className="card">
        <div className="row">
          <div className="col-md-2">
            <img className="show_image" :src="`${formatImgUrl(show.image)}`">
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h3>{{show.venue}}</h3>
              <h5>{{formatDate(show.show_date_time)}}</h5>
              <a v-if="show.has_presale" className='presale_link' :href="show.presale_link">More Info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div className="card">
        <div className="card-body">
          <h5 className="center-text">No new shows at this time. Please check back later.</h5>
        </div>
      </div>
    </div>
    <div v-if="pastShows.length">
      <h1 className="center-text monoton">PAST SHOWS</h1>
      <div v-for="show in pastShows" :key="show.id" className="card">
        <div className="row">
          <div className="col-md-12">
            <div className="card-body">
              <h3>{{show.venue}}</h3>
              <h5>{{formatDate(show.show_date_time)}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>