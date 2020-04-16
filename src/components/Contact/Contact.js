import React, { useState } from "react"
import axios from "axios"
import Title from "../Title"
import styles from "../../css/contact.module.css"

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://formspree.io/mlewolko",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          "Your message has been submitted! Thanks for reaching out! Someone from Daventertainment office will contact you soon!",
          form
        )
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className={styles.formControl}
              placeholder="john smith"
            />
          </div>
          <label htmlFor="email">Email:</label>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              required
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <label htmlFor="message">Message:</label>
          <div>
            <textarea
              id="message"
              name="message"
              rows="10"
              className={styles.formControl}
              placeholder="Hello there"
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={serverState.submitting}
          >
            Submit
          </button>
          {serverState.status && (
            <div className={styles.response}>
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
