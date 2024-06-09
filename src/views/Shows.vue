<script setup>
  import { reactive } from 'vue'
  import dayjs from 'dayjs'

  function formatDate(date) {
    return dayjs(date).format('MM/DD/YYYY hh:mm A');
  }

  function formatImgUrl(path) {
    return 'http://localhost:8000' + path
  }

  const shows = [
    {
    id: 18,
    venue: "STILTED - Live at The Whiskey",
    presale_link: null,
    has_presale: true,
    presale_link: "http://surfsideseven.com/rock.html",
    show_date_time: "2016-01-12T20:30:00-07:00",
    image: "/media/shows/prettyLoud.jpg"
    }
  ]

  const pastShows = [
    {
    id: 1,
    venue: "Surfside 7 with Mesa Divide",
    presale_link: null,
    has_presale: false,
    show_date_time: "2024-02-20T16:06:45-07:00",
    image: null
    },
    {
    id: 5,
    venue: "Stilted playing FoCoMX 2019 at the Whiskey",
    presale_link: null,
    has_presale: false,
    show_date_time: "2019-04-27T23:45:00-06:00",
    image: null
    },
    {
    id: 6,
    venue: "Fort Festivus with Stella Luce, Stilted, SeÃ±orita Sometimes, and Night Champ at Hodi's Half Note",
    presale_link: null,
    has_presale: false,
    show_date_time: "2018-12-20T20:30:00-07:00",
    image: null
    },
    {
    id: 7,
    venue: "Tonight!Demise Music Festival ft Denver Broncos UK / Stella Luce",
    presale_link: null,
    has_presale: false,
    show_date_time: "2018-08-04T19:00:00-06:00",
    image: null
    },
    {
    id: 8,
    venue: "Saturday!! Stilted & Transient Curse",
    presale_link: null,
    has_presale: false,
    show_date_time: "2018-07-14T20:00:00-06:00",
    image: null
    },
    {
    id: 9,
    venue: "SmileEatingJesus // TV135 // Stilted // FlowLines at YMH",
    presale_link: null,
    has_presale: false,
    show_date_time: "2018-07-02T21:00:00-06:00",
    image: null
    },
    {
    id: 10,
    venue: "Swing Station w/ The Kity Project,Amy & the Peace Pipes,Stilted",
    presale_link: null,
    has_presale: false,
    show_date_time: "2018-06-23T21:00:00-06:00",
    image: null
    },
    {
    id: 11,
    venue: "Stilted at FoCoMX",
    presale_link: null,
    has_presale: false,
    show_date_time: "2018-04-27T21:30:00-06:00",
    image: null
    },
    {
    id: 12,
    venue: "Stilted Halloween 'Spooktacular'",
    presale_link: null,
    has_presale: false,
    show_date_time: "2017-10-28T20:00:00-06:00",
    image: null
    },
    {
    id: 13,
    venue: "Stilted Plays All the Hits at Equinox",
    presale_link: null,
    has_presale: false,
    show_date_time: "2017-06-16T19:00:00-06:00",
    image: null
    },
    {
    id: 14,
    venue: "FoCoMx 9 Saturday Kickoff at Prost",
    presale_link: null,
    has_presale: false,
    show_date_time: "2017-04-29T13:30:00-06:00",
    image: null
    },
    {
    id: 15,
    venue: "Maxwell Mud w/ Stilted",
    presale_link: null,
    has_presale: false,
    show_date_time: "2017-04-06T21:00:00-06:00",
    image: null
    },
    {
    id: 16,
    venue: "Saturday! Rose Hill Drive w/ the Velveteers and Stilted",
    presale_link: null,
    has_presale: false,
    show_date_time: "2016-12-31T21:00:00-07:00",
    image: null
    }
  ]
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