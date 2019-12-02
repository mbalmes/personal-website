import React from "react";
import Layout from "../components/layout";
import Me from "../components/me";
import Portfolio from "../components/portfolio";
import Blog from "../components/blog";
const IndexPage = () => (
  <Layout>
    <div class="columns is-gapless is-multiline">
      <div class="column is-12">
        <Me />
      </div>
      <div class="column is-6">
        <Portfolio />
      </div>
      <div class="column is-6">
        <Blog />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
