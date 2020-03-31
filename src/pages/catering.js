import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import Intro from "../components/Intro"
import Menu from "../components/Menu"

const Catering = () => (
  <Layout>
    <SEO
      title="Catering | Haili's Hawaiian Food"
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
        <Banner titleSmall="Catering"></Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ padding: "2rem 0rem 0rem 0rem" }}>
      <Intro heading="Catering Services" />
      <p style={{ marginBottom: "1rem" }}>
        We’ve come a long way since we opened over 60 years ago and are proud to
        now offer catering services in Honolulu, HI. Whether you’re hosting a
        simple family party or need to throw an office event, Haili’s Hawaiian
        Foods is the perfect choice for outstanding food for people of all
        tastes.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        We make it easy for you by providing every level of service from setup
        through cleanup and everything in between. With professional wait staff
        and beautiful presentation, you’ll be proud to have us catering any type
        of event.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        As soon as you book us, we’ll work closely with you in allowing you to
        select the menu you want served. We have an outstanding assortment of
        authentic Hawaiian dishes and will prepare them specifically for your
        party, guaranteeing that your guests will enjoy fresh and succulent
        dishes of all types.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        With a buffet style setup and food line servers, you get the perfect
        mixture of convenience and class to keep your event running smoothly.
        Our buffet tables are set in beautiful koa dishes to maintain a
        traditional and professional look.
      </p>
      <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>
        Enjoy a wide assortment of menu options that suit every type of taste
        and budget:
      </p>
    </Section>
    <Section style={{ padding: "0rem 0rem 3rem 0rem" }}>
      <Menu />
      <p style={{ margin: "2rem 0rem" }}>
        Our full service catering package includes professional, friendly staff
        on-site, food line servers, food service buffet setup and food service
        buffet cleanup.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        When you’re looking for outstanding catering in Honolulu, HI, call
        Haili’s Hawaiian Foods at 808-735-8019.
      </p>
    </Section>
  </Layout>
)

export default Catering
