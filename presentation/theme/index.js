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
    heading: {
      h1: {
        color: colors.primary,
        fontSize: '2.2em',
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 40,
        zoom: 1
      },
      h2: {
        color: colors.secondary,
        fontSize: '1em',
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: '100',
        textAlign: 'center',
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
      color: colors.secondary,
      fontSize: '3vmin',
      fontFamily: fonts.secondary,
      fontWeight: 300,
      margin: '0.25rem auto'
    },
    list: {
      textAlign: 'left',
      listStylePosition: 'inside',
      padding: 20
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
      color: colors.secondary,
      fontSize: '2vmin',
      fontFamily: fonts.secondary,
      fontWeight: 300,
      margin: '0.25rem auto'
    }
  }
})

export default OneDarkTheme
