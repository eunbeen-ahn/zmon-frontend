import { Box, Link, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const LINK = 'https://material-ui.com/';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={LINK}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function AppFooter () {
  const classes = useStyles();
  return (
    <Box pt={4} className={classes.footer}>
      <Copyright />
    </Box>
  )
}
