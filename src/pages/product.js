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
    <Flex sx={{ flexDirection: ['column', 'column', 'row'], mb: 6 }}>
      <Box
        width={[1, 1, 3 / 8]}
      >
        <Image />
      </Box>
      <Box
        width={[1, 1, 5 / 8]}
        px={[0, 0, 4]}
        py={[4, 4, 0]}
      >
        <h1>Product Details</h1>
        <p>Here be the description of an awesome product.</p>
      </Box>
    </Flex>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
