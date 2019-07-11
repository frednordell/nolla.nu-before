import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
	nested: {}
})
class TopBar extends React.Component {
	state = {
		left: false
	}

	toggleDrawer = (open) => () => {
		this.setState({
			left: open
		})
	}


	render() {
		const sideButtons = (
			<List>
    		<ListItem button>
      		<ListItemIcon>
        		<Icon>school</Icon>
     		 </ListItemIcon>
     		<ListItemText primary="Educational" />
    		</ListItem>
    		<ListItem button>
      		<ListItemIcon>
        		<Icon>code</Icon>
     		 </ListItemIcon>
     		<ListItemText primary="Non-profit" />
    		</ListItem>
    		<ListItem button>
      		<ListItemIcon>
        		<Icon>public</Icon>
     		 </ListItemIcon>
     		<ListItemText primary="FOSS & Personal" />
    		</ListItem>
			</List>
		);
		return (
			<div>
			<AppBar position="static" color="default">
				<Toolbar>
					<IconButton onClick={this.toggleDrawer(true)}><Icon>menu</Icon></IconButton>
					<span style={{flex: 1}}></span>
					<IconButton href="styrelsen@dsek.se" target="_blank" rel="noopener noreferrer">
						<Icon>mail</Icon>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer open={this.state.left} onClose={this.toggleDrawer(false)} ModalProps={{keepMounted: true, /* Better open performance on mobile.*/}}>
				<div onKeyDown={this.toggleDrawer(false)}>
					<Grid container direction="row" alignItems="center" justify="space-between">
						<Typography variant="h6" align="center" style={{marginLeft: '18px'}}>Sections</Typography>
						<IconButton onClick={this.toggleDrawer(false)}><Icon>chevron_left</Icon></IconButton>
					</Grid>
		          	<Divider></Divider>
            		{sideButtons}
          		</div>
			</Drawer>
			</div>
		);
	}
}

export default withStyles(styles)(TopBar);