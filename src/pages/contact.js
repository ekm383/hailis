import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import ContactForm from "../components/ContactForm"
import Section from "../components/globals/section/Section"
import Intro from "../components/Intro"

const Contact = () => (
  <Layout>
    <SEO
      title="Contact | Haili's Hawaiian Food"
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
        <Banner titleSmall="Contact"></Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ marginTop: "2rem" }}>
      <Intro heading="How can we help?" />
      <p style={{ marginBottom: "1rem" }}>
        Taste the difference at Haili’s Hawaiian Foods. For decades we have been
        serving time-honored recipes made with fresh meats, fruits and
        vegetables and spiced with the perfect blend of seasonings. From classic
        Kalua pig to fresh wraps and savory stews, we offer a wide assortment of
        authentic Hawaiian dishes sure to please any palette.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        Whether you’re stopping in for a quick bite or you want us to cater your
        next event, you’ll be glad you chose Haili’s Hawaiian Foods.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        To learn more about our menu or book us for your party, call us at
        808-735-8019 or fill out the form below.
      </p>
    </Section>
    <Section style={{ marginTop: "2rem" }}>
      <ContactForm />
    </Section>
  </Layout>
)

export default Contact
