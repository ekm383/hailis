import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Intro from "../components/Intro"
import Section from "../components/globals/section/Section"

const About = () => (
  <Layout>
    <SEO
      title="About | Haili's Hawaiian Food"
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
        <Banner titleSmall="About"></Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ padding: "2rem 0rem" }}>
      <Intro heading="Authentic Hawaiian Food" />
      <p style={{ marginBottom: "1rem" }}>
        Haili’s Hawaiian Foods began small in 1948 when we opened at the Ward’s
        Farmer’s Market. Quickly word spread about our delicious cuisine and
        customers flocked from all over the island. From the start, we’ve been
        committed to offering only the freshest ingredient for our classic
        dishes at prices our customers could afford. Mother Haili cooked recipes
        that honored the tradition of classic Hawaiian cuisine. In her day, poi
        cost only “one dollah” for three bags and “35 cents for one laulau.”
      </p>
      <p style={{ marginBottom: "1rem" }}>
        A lot has changed from these humble roots. Hawaii has gained statehood
        and our little corner of the farmer’s market has grown into its very own
        restaurant in Honolulu, HI. However, what hasn’t changed is that we have
        continued to cook the very same family recipes served to customers over
        60 years ago. The passion for cooking has remained alive and well in the
        Haili family and we have worked hard to maintain the quality, reputation
        and energy that our customers have come to depend on.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        These days, you can still find us serving authentic Hawaiian meals, like
        poke, kalua pig, chicken long rice and poi and laulau. Guests still stop
        in for simple and fresh plate lunches in Honolulu, HI, and we look
        forward to seeing each and every one of them. Our restaurant has earned
        a reputation as a great spot to visit whether you want to dine-in or
        carry out and we make sure to uphold the same level of quality with each
        order. We’ve also extended our services to include catering for
        everything from office parties to fun luaus. With full buffet service
        and on-site staff, you’ll be able to relax and enjoy your event knowing
        we’ll take care of the rest.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        At Haili’s Hawaiian Foods, we have loved serving your family for the
        past 60 years and are looking forward to continuing that tradition for
        decades to come.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        To learn more about our authentic cuisine, call us at 808-735-8019.
      </p>
    </Section>
  </Layout>
)

export default About
