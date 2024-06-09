<template>
  <div className="black">
    <h1 className="center-text">CONTACT US</h1>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row my-2">
          <div className="col-md-6">
            <label htmlFor="contact_name">Name</label>
            <input type="text" name="contact_name" id="contact_name" />
          </div>
        <div className="col-md-6">
          <label htmlFor="contact_email">Email</label>
          <input type="text" name="contact_email" id="contact_email" />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-6">
          <label htmlFor="message_subject">Subject</label>
          <input type="text" name="message_subject" id="message_subject"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="contact_phone">Phone</label>
          <input type="text" name="contact_phone" id="contact_phone"/>
        </div>
      </div>
      <div className="my-2">
        <label htmlFor="message_body">message</label>
        <textarea name="message_body" id="message_body"></textarea>
      </div>
        <div className="col-md-1">
        <input type="submit" name="commit" value="Send" className="btn btn-dark" data-disable-with="Send" />
        </div>
      </form>
    </div>
  </div>
</template>