import React from "react";
import Layout from "../components/layout";
import Me from "../components/me";
import Portfolio from "../components/portfolio";
import Blog from "../components/blog";
const IndexPage = () => (
  <Layout>
    <div class="columns is-centered">
      <div class="column is-6">
        {/* <Nav />                      */}
        <Me />
      </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-4">
        <Portfolio />
        </div>
        <div class="column is-4">
        <Blog />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
