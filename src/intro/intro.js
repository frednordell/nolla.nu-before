import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Hidden from '@material-ui/core/Hidden';


class Intro extends Component {

	text = {
		swe: {
			title: "Hejsan blivande teknolog!",
			pre: "Stort grattis till att du har blivit antagen till Sveriges i särklass roligaste skola: LTH! ",
			body1: "För att du ska känna dig välkommen och inte alltför vilsen i början så kommer du genomgå en nollning. Den sträcker sig över de första veckorna och tillsammans kommer vi försöka se till att de här veckorna blir några av de roligaste i ditt liv. Eftersom nollningen har ett sådant fullspäckat schema så är det inte säkert att du orkar vara med på allt, och det är helt okej. Du väljer själv vilka aktiviteter du vill delta i. Något som däremot är säkert är att du kommer träffa väldigt många vänner och ha oerhört kul under tiden!",
			body3: "Uppropet kommer hållas den 26:e augusti klockan 09:15 i Kåraulan både för de som ska studera Datateknik och de som ska studera InfoCom. Kåraulan hittar du på Sölvegatan 22A. Se till att vara i tid; det är obligatoriskt att vara där för att få behålla sin plats vid utbildningen. Om du har några frågor som rör nollningen så kan du alltid höra av dig till staben@dsek.se."
		},
		eng: {
			title: "",
			body1: "",
			body2: ""
		}
	};

	render() {
		return(
			<div id="intro">
				<Grid container direction="row" alignItems="baseline" justify="space-evenly" spacing={1}>
					<Grid item xs={12} lg={6}>
						<Hidden lgUp>
							<Typography variant="h1" align="center">{this.text.swe.title}</Typography>
						</Hidden>
						<Hidden mdDown>
							<Typography variant="h2" align="center">{this.text.swe.title}</Typography>
						</Hidden>
						<br />
						<Typography variant="body1" align="center">{this.text.swe.pre}</Typography>
						<Typography variant="body1" align="center">{this.text.swe.body3}</Typography>
					</Grid>
					<Grid item xs={12} lg={4} align="center">
						<Hidden mdDown>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Hidden>
						<Typography variant="h2" align="center">Men sen då?!</Typography>
						<br />
						<Typography variant="body1" align="center">{this.text.swe.body1}</Typography>
						<br />
						<Button variant="text"><Icon style={{marginRight: '5px'}}>arrow_downward</Icon> Läs Mer!</Button>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Intro;