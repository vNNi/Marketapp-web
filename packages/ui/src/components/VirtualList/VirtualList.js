import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function VirtualList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {[0, 1, 2, 3].map(value => {

        return (
          <ListItem key={value} role={undefined} dense button>
            <h1>eae</h1>
          </ListItem>
        );
      })}
    </List>
  );
}
