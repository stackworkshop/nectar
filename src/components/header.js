/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Box } from "rebass"

const Header = ({ siteTitle }) => (
  <header
    sx={{ mb: 3, borderBottom: '1px solid' }}
  >
    <Box
      mx={'auto'}
      maxWidth={960}
      py={5}
      px={4}
    >
      <h1 sx={{ my: 0, mx: 'auto' }}>
        <Link
          to="/"
          sx={{
            color: 'grey',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Box>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
