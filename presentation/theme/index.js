import createTheme from '../../createTheme'
import colors from './colors'
import fonts from './fonts'

const OneDarkTheme = createTheme(colors, fonts, {
  progress: {
    pacmanTop: {
      background: colors.quaternary
    },
    pacmanBottom: {
      background: colors.quaternary
    },
    point: {
      borderColor: colors.quaternary
    }
  },
  components: {
    blockquote: {
      textAlign: 'left',
      position: 'relative',
      display: 'inline-block',
      margin: 20
    },
    quote: {
      borderLeft: "1px solid ".concat(colors.primary),
      paddingLeft: 40,
      display: 'block',
      color: colors.primary,
      fontSize: '4.9rem',
      lineHeight: 1,
      fontWeight: 'bold'
    },
    cite: {
      color: colors.tertiary,
      display: 'block',
      clear: 'left',
      fontSize: '2rem',
      marginTop: '1rem'
    },
    content: {
      margin: '0 auto',
      textAlign: 'left'
    },
    goToAction: {
      borderRadius: '6px',
      fontFamily: fonts.primary,
      padding: '0.25em 1em',
      border: 'none',
      background: '#000',
      color: '#fff',
      '&:hover': {
        background: colors.tertiary,
        color: '#000'
      }
    },
    heading: {
      h1: {
        color: colors.primary,
        // fontSize: '7.05rem',
        fontSize: '52px',
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: '300',
        textAlign: 'center',
        margin: 0,
        zoom: 1
      },
      h2: {
        color: colors.secondary,
        fontSize: '5.88rem',
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: '300',
        margin: 0
      },
      h3: {
        color: 'black',
        fontSize: '4.9rem',
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: 'bold',
        margin: '0.5rem auto'
      },
      h4: {
        color: 'black',
        fontSize: '3.82rem',
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: 'bold',
        margin: '0.5rem auto'
      },
      h5: {
        color: 'black',
        fontSize: '3.19rem',
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: 'bold',
        margin: '0.5rem auto'
      },
      h6: {
        color: 'black',
        fontSize: '2.66rem',
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: 'bold',
        margin: '0.5rem auto'
      }
    },
    image: {
      display: 'block',
      margin: '0.5rem auto'
    },
    link: {
      textDecoration: 'none'
    },
    listItem: {
      fontSize: '2.66rem'
    },
    list: {
      textAlign: 'left',
      listStylePosition: 'inside',
      padding: 0
    },
    s: {
      strikethrough: {}
    },
    tableHeaderItem: {
      fontSize: '2.66rem',
      fontWeight: 'bold'
    },
    tableItem: {
      fontSize: '2.66rem'
    },
    table: {
      width: '100%'
    },
    text: {
      color: 'black',
      fontSize: '2.66rem',
      fontFamily: fonts.primary,
      margin: '0.25rem auto'
    }
  }
})

export default OneDarkTheme
