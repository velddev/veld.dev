const React = require("react")
const { default: Layout } = require("./src/components/Layout")

exports.wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
};