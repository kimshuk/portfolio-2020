import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Muli", "sans-serif"].join(","),
    fontSize: 14,
  },
  palette: {
    background: "#d68181",
  },
})

export default theme
