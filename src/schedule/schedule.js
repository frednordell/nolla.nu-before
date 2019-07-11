import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Hidden from '@material-ui/core/Hidden';


class Schedule extends Component {

	text = {
		swe: {
			title: "Scheman",
			pre: "Här nedan hittar ni era respektive scheman för mottagningsveckan. För att hitta ert vanliga schema så får ni klicka er in på schemageneratorn och fylla i D1 under studentgrupp om ni går på data, och C1 under studentgrupp om ni går på InfoCom.",
		},
		eng: {
			title: "",
			pre: "",
		}
	};

	render() {
		return(
			<div id="schedule">
				<Grid container direction="column" alignItems="center" justify="space-around" spacing={7}>
					<Grid item xs={12}>
						<Typography align='center' variant="h1">{this.text.swe.title}</Typography>
					</Grid>
					<Grid container direction="row" alignItems="flex-start" justify="center" spacing={0}>
						<Grid item xs={12} md={6}>
							<Typography variant="body1" align="center">{this.text.swe.pre}</Typography>
						</Grid>
					</Grid>				
					<Grid item xs={12}>
						<Button color="primary" href="https://cloud.timeedit.net/lu/web/lth1/ri17565450000YQQ95Z5537057y8Y5034gQ6g1X1Y55ZQ756.html" target="_blank" variant="text">Mottagningsschema Datateknik</Button>
						<Button color="primary" href="https://cloud.timeedit.net/lu/web/lth1/ri17565450000YQQ95Z5537057y8Y5534gQ6g1X1Y55ZQ756.html" target="_blank" variant="text">Mottagningsschema InfoCom</Button>
						<Button color="primary" href="https://cloud.timeedit.net/lu/web/lth1/ri1Q5006.html" target="_blank" variant="text">Schemageneratorn</Button>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Schedule;