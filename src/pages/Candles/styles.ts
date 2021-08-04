import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { chartHeight } from '../../components/CandlesPlot/constants';

const gray = '#424242';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justfityContent: 'center',
      alignItems: 'center',

      width: 'auto',
      minHeight: '100vh',
    },
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      justfityContent: 'center',
      // alignItems: 'center',

      padding: 8,

      minHeight: '100%',
      minWidth: '100%',

      backgroundColor: gray,
    },
    chart: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),

      height: chartHeight,
    },
    minorText: {
      alignSelf: 'center',
      color: 'white',
      opacity: 0.9,
      fontSize: '.8rem',
    },
  });
});

export default useStyles;
