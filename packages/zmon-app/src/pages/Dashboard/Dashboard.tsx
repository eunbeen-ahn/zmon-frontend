import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Paper,
} from '@material-ui/core';

import Chart from 'components/organisms/Charts';
import Deposits from 'components/organisms/Deposits';
import Orders from 'components/organisms/Orders';
import PageTemplate from 'components/templates/PageTemplate/PageTemplate';

const useStyles = makeStyles((theme) => ({
  container: {
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <PageTemplate>
      <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Charts */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
    </PageTemplate>
  );
}
