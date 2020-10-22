import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Intro from "../components/Intro"
import Section from "../components/globals/section/Section"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      promo: file(relativePath: { eq: "hailis-promo.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const promoImage = data.promo.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title="Home | Haili's Hawaiian Food"
        description="Haili's Hawaiian Food is located on 760 Palani Ave near Waikiki. We serve traditional Hawaiian cuisine like lau lau, kalua pig, ahi poke and more.`,
      author: `@restaurantmarketinghawaii"
        keywords={[
          `Hawaiian Restaurant`,
          `Hawaii Restaurant`,
          `Hawaiian Local Food`,
          `Plate Lunch`,
          `Local style food`,
        ]}
      />
      <HeaderIndex style={{ padding: "4rem 0rem" }}>
        <Section style={{ width: "100vw", alignItems: "center" }}>
          <Banner
            title="Haili's Hawaiian Food"
            subtitle="Haili's is located on 760 Palani Ave near Waikiki. We serve traditional Hawaiian cuisine like lau lau, kalua pig, ahi poke and more. Family owned since 1950."
          >
            <a href="https://www.grindztogo.com/single.php/order/restaurant/18?takeout=1">
              <Button>ORDER TAKEOUT</Button>
            </a>
          </Banner>
        </Section>
      </HeaderIndex>
      <Section style={{ padding: "3rem 0rem 1rem 0rem" }}>
        <Img
          fluid={promoImage}
          alt="promotion"
          style={{ width: "500px", margin: "1rem auto 2rem auto" }}
        />
        <Intro
          style={{ marginBottom: "0rem", textAlign: "center" }}
          heading="Welcome to Haili's"
        />
        <p style={{ marginBottom: "1rem" }}>
          At Haili’s Hawaiian Foods, we are proud of our tradition of offering
          delicious and authentic Hawaiian cuisine. With a wide selection of
          favorites, we are the perfect place to visit for any meal and provide
          full catering services as well.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          Haili’s Hawaiian Foods opened in 1958 and has been providing the
          absolute best Hawaiian food in Honolulu, HI, ever since. From
          traditional favorites to spicy new twists, we offer the food you and
          your family love.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          Our secret is simple: we use only the freshest ingredients and honor
          the culinary lessons that have been passed from generation to
          generation in our family. Haili’s Hawaiian Foods is the place to call,
          whether you’re looking for a great place to dine-in or you want
          delicious food delivered right to your door.
        </p>
      </Section>
      <Section style={{ padding: " 1rem 0rem 3rem 0rem" }}>
        <Intro
          style={{ marginBottom: "0rem", textAlign: "center" }}
          heading="Come Taste Paradise At Haili’s Hawaiian Foods"
        />
        <p style={{ marginBottom: "1rem" }}>
          Our menu has been refined over the years to include the dishes our
          customers enjoy the most. From delicious poi and poke to Lomi salmon
          and sushi, we make it our mission to win our guests over as regulars
          with each mouth-watering bite.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          If you enjoy our classic cuisine, consider hiring us for your event.
          We provide comprehensive catering services, including buffet service,
          professional on-site staff, food line servers and more.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          When you’re searching for the perfect spot to enjoy a savory meal or
          looking to entertain guests with outstanding Hawaiian favorites,
          remember Haili’s Hawaiian Foods. For decades, our customers have
          chosen us as their favorite Hawaiian restaurant in Honolulu, HI,
          because:
        </p>
        <ul style={{ marginLeft: "2rem", color: "var(--darkGray)" }}>
          <li style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            We offer outstanding and authentic international cuisine.
          </li>
          <li style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            We have been written up extensively for our excellent Hawaiian
            dishes.
          </li>
          <li style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            We bring over 60 years of experience in perfecting our recipes.
          </li>
          <li style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            We are family owned and operated.
          </li>
          <li style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            We provide dine-in, delivery and catering services.
          </li>
        </ul>
      </Section>
    </Layout>
  )
}

export default IndexPage
