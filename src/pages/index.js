import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import "../scss/photo-gallery.scss"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`Marcus Welds`, `welding`, `metal fabrication`, `custom bumpers`, `generator box` ]} />
    <p>Looking for a solid bumper setup for your van or truck? Marcus Williams specializes in welding and metal fabrication of off-road accessories. Front and rear bumpers can be customized to include generator and fuel boxes, spare tire, integrated lights, multiple hitch mounts, and more. <Link to="/contact/" className="arrow"><span>Contact Marcus</span></Link></p>
    <p>In the news: <a href="https://www.fourwheeler.com/news/features/2001-overlanding-off-roading-4x4-conversion-vans/">Overlanding and Off Roading in 4x4 Conversion Vans, FourWheeler Magazine</a></p>
    <div className="photo-gallery">
    <ul>
        {data.allPhotosYaml.edges.map((image, index) => {
          return <li key={`image-${index}`}>
            <Img fluid={image.node.image.childImageSharp.fluid} alt={image.node.alt} />
          </li>
        })
      }
    </ul>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
{
  allPhotosYaml {
    edges {
      node {
        alt
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
// export const pageQuery = graphql`
//   {
//     images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
//       edges {
//         node {
//           name
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `