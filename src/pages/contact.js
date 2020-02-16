import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
      <SEO title="Contact" keywords={['Marcus Welds', 'contact', 'metal fabrication', 'welding']} />
      <section>
          <h2>
              Contact Marcus with your idea
          </h2>
          <div className="contact">
              <p>Offering freelance metal design and welding services, including van and truck bumpers, generator boxes, and custom fabrication.</p>
              <p><strong>All fields are required.</strong></p>
              <div role="form" lang="en-US" dir="ltr">
                  <div className="screen-reader-response"></div>
                  <form disabled key="contact-form" action="/thanks/" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="pooh-field">
                      <p style={{ display: `none` }}>
                          <label>Don’t fill this out if you're human: <input name="pooh-field" /></label>
                      </p>
                      <div className="response-output display-none"></div>
                      <p>
                          <label htmlFor="name">Your Name</label><br />
                          <input type="text" name="name" size="40" id="name" required="true" />
                      </p>
                      <p>
                          <label htmlFor="email">Your Email</label><br />
                          <input type="email" name="email" size="40" id="email" required="true" />
                      </p>
                      <p>
                          <label htmlFor="subject">Your Subject</label><br />
                          <input type="text" name="subject" size="40" id="subject" required="true" />
                      </p>
                      <p>
                          <label htmlFor="message">Your Message</label><br />
                          <textarea name="message" cols="40" rows="10" id="message" required="true"></textarea>
                      </p>
                      <p><input type="submit" value="Send" /></p>
                      <input type="hidden" name="form-name" value="contact" />
                  </form>
              </div>
          </div>
      </section>
  </Layout>
)

export default ContactPage;