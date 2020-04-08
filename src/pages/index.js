import React from "react";
import { Link, graphql } from "gatsby";
import cloud5 from "../../content/assets/ulap05.png";
import cloud6 from "../../content/assets/ulap06.png";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import { Parallax } from "react-scroll-parallax";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <div id="houseparty" class="iframe-container">
        <iframe
          src="https://player.twitch.tv/?channel=luyapoetry"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div class="about">
        <h2>About Luya</h2>
        <p>
          Luya (<a href="http://instagram.com/luyapoetry">@luyapoetry</a>) is a
          local poetry organization that uplifts the voices and experiences of
          people of color. Luya (Tagalog for “ginger”) is used as both a spice
          and a remedy across many cultures, and we bring this spirit of
          nourishment and healing to every workshop, performance, and open mic
          space we create. We believe deeply in using poetry to bring
          communities of color together, to build solidarity around the issues
          that are important to us, and to reclaim our cultures and histories.
        </p>
        <p>
          Our monthly spoken word open mic series is a welcoming space for poets
          of color to express themselves to an audience that understands where
          they’re coming from. Whether you're a spoken word veteran, or someone
          just starting to find your voice, we're here for you. Perform with or
          without music, alone or in a group, stick to the theme or don’t – all
          we ask is that you bring your whole self to the mic. Organized by
          multidisciplinary artists from the Asian diaspora, our open mic aims
          to bring the community together, and showcase local Chicago-area
          talent. If you’d like to collaborate with us, email us at &nbsp;
          <a href="mailto:luyapoetry@gmail.com">luyapoetry@gmail.com</a>
        </p>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
