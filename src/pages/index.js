import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ol>Things to do:
    <li>Use Open Sans Font</li>
    <li>Add Header</li>
    <li>Add Logo to Header</li>
    <li>Add Header Menu</li>
    <li>Add Fullscreen Background Blurred</li>
    <li>Add Log in & Sign up buttons</li>
    <li>Add Popup</li>
    <li>Add Footer + Privacy Policy link + Language Dropdown</li>
    </ol>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
