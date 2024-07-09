<script setup>
  import { ref, watch } from 'vue'
  import axios from 'axios'

  const apiBase = 'https://api.themesadivide.com'
  // const apiBase = 'http://localhost:8000'
  const submitted = ref(false)
  const error = ref(false)
  const message = ref({
    contact_name: null,
    contact_email: null,
    contact_phone: null,
    message_subject: null,
    message_body: null
  })

  async function submitForm() {
    event.preventDefault()
    let response = await axios.post(`${apiBase}/contact`, message.value)
    if (response.status == 201){
      submitted.value = true
    } else {

    }
    
  }
</script>

<template>
  <div className="black">
    <div v-if="submitted">
      <h3 class="center-text">Thank you, your message has been delivered.</h3>
      <div class="center-text">
        <a class="btn btn-dark" href="/">Return Home</a>
      </div>
    </div>
    <div v-else>
      <h1 className="center-text">CONTACT US</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row my-2">
            <div className="col-md-6">
              <label>Name</label>
              <input type="text" v-model="message.contact_name" />
            </div>
            <div className="col-md-6">
              <label>Email</label>
              <input type="text" v-model="message.contact_email" />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-6">
              <label>Subject</label>
              <input type="text" v-model="message.message_subject"/>
            </div>
            <div className="col-md-6">
              <label>Phone</label>
              <input type="text" v-model="message.contact_phone"/>
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="message_body">message</label>
            <textarea v-model="message.message_body"></textarea>
          </div>
          <div v-if="error">
            <div class="alert alert-warning" role="alert">An error occurred and your message could not be delivered.</div>
          </div>
          <div className="col-md-1">
            <button @click="submitForm" className="btn btn-dark">Send</button>
          </div>        
        </form>        
      </div>
    </div>
  </div>
</template>