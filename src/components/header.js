import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const Header = ({ siteTitle }) => (
  <header>
    <Grid container>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#000`,
            textDecoration: `none`,
          }}
        >
          <Typography variant="h6">{siteTitle}</Typography>
        </Link>
      </h1>
    </Grid>

    <footer>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/andrew-kim-72b5598b/"
      >
        Andrew Kim
      </a>
    </footer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
