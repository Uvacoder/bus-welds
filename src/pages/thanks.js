import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ThanksPage = () => (
    <div>
        <Layout>
            <SEO title="Thanks" keywords={['Marcus Welds', 'welding', 'metal fabrication']} />
            <section className="generic-wrap">
                <h2>
                    Thanks for your message.
                </h2>

                <p>I'll do my best to get back to you if and when I can. If it's urgent, you can always reach me <a href="https://instagram.com/marcuswelds" target="_blank" rel="noopener noreferrer">on Instagram</a>.</p>

                <p><Link to="/" class="arrow"><span>Go home</span></Link></p>
            </section>
        </Layout>
    </div>
)

export default ThanksPage