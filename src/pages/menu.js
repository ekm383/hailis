import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"

const Menu = () => (
  <Layout>
    <SEO
      title="Menu | Haili's Hawaiian Food"
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
        <Banner titleSmall="Menu"></Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ padding: "2rem 0rem" }}></Section>
  </Layout>
)

export default Menu
