import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../components/theme"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  typoStyle: {
    color: "red",
    fontFamily: "'Muli', sans-serif",
  },
})

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <SEO title="Home" />
        <Typography className={classes.typoStyle}>Main Container</Typography>
        <Typography className={classes.typoStyle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          assumenda laboriosam reiciendis officia nemo sit ratione illo sequi
          alias? Dicta ipsa reprehenderit pariatur molestiae! Sapiente veniam
          voluptatibus rerum eos ipsa ipsum perspiciatis possimus. Animi rerum
          et iusto! Illo obcaecati alias aliquam, veritatis vel a officia
          assumenda adipisci facere, eligendi corporis.
        </Typography>
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
      </ThemeProvider>
    </Layout>
  )
}

export default IndexPage
