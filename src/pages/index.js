import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div id="houseparty" class="iframe-container">
          <iframe
            src="https://player.twitch.tv/?channel=luyapoetry"
            allowfullscreen="true"
          ></iframe>
        </div>
        <div class="about">
          <h2>About Luya</h2>
          <p>
            Luya (<a href="http://instagram.com/luyapoetry">@luyapoetry</a>) is
            a local poetry organization that uplifts the voices and experiences
            of people of color. Luya (Tagalog for “ginger”) is used as both a
            spice and a remedy across many cultures, and we bring this spirit of
            nourishment and healing to every workshop, performance, and open mic
            space we create. We believe deeply in using poetry to bring
            communities of color together, to build solidarity around the issues
            that are important to us, and to reclaim our cultures and histories.
          </p>
          <p>
            Our monthly spoken word open mic series is a welcoming space for
            poets of color to express themselves to an audience that understands
            where they’re coming from. Whether you're a spoken word veteran, or
            someone just starting to find your voice, we're here for you.
            Perform with or without music, alone or in a group, stick to the
            theme or don’t – all we ask is that you bring your whole self to the
            mic. Organized by multidisciplinary artists from the Asian diaspora,
            our open mic aims to bring the community together, and showcase
            local Chicago-area talent. If you’d like to collaborate with us,
            email us at &nbsp;
            <a href="mailto:luyapoetry@gmail.com">luyapoetry@gmail.com</a>.
          </p>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
