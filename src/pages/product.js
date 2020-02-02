/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Flex, Box } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="Product Details" />
    <Flex sx={{ flexDirection: ['column', 'column', 'row'] }}>
      <Box
        width={[1, 1, 1 / 3]}
      >
        <Image />
      </Box>
      <Box
        width={[1, 1, 2 / 3]}
        p={3}
      >
        <h1>Product Details</h1>
        <p>Welcome to page 2</p>
      </Box>
    </Flex>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
