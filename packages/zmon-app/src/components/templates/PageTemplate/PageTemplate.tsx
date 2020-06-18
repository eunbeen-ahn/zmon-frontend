import React from 'react';
import AppTopBar from '../../organisms/AppTopBar';
import AppDrawer from '../../organisms/AppDrawer';
import AppFooter from '../../organisms/AppFooter';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  children: React.ReactNode;
}
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    padding: theme.spacing(4),
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  }
}));

/*
  for Pages
 */
const PageTemplate = ({ children, ...props }: Props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.container} {...props}>
      <AppTopBar
        open={open}
        onOpen={handleDrawerOpen}/>
      <AppDrawer
        open={open}
        onClose={handleDrawerClose}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
        <AppFooter/>
      </main>
    </div>
  );
};

export default PageTemplate;
