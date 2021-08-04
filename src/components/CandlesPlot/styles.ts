import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: '100%',
    },
    plot: {
      width: '100%',
      height: '100%',
    },
  });
});

export default useStyles;
