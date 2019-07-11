import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
//import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Icon from '@material-ui/core/Icon'




class Intro extends Component {

	constructor(props) {
    	super(props);
	    // This binding is necessary to make `this` work in the callback
	    this.handleTopClick = this.handleTopClick.bind(this);
  	}

	text = {
		swe: {
			title: "Hejsan blivande Data- eller infocomteknolog!",
			pre: "Stort grattis till att du har blivit antagen till Sveriges i särklass roligaste skola: LTH! ",
			body1: "För att du ska känna dig välkommen och inte alltför vilsen i början så kommer du genomgå en nollning. Den sträcker sig över de första veckorna och tillsammans kommer vi försöka se till att de här veckorna blir några av de roligaste i ditt liv. Eftersom nollningen har ett sådant fullspäckat schema så är det inte säkert att du orkar vara med på allt, och det är helt okej. Du väljer själv vilka aktiviteter du vill delta i. Något som däremot är säkert är att du kommer träffa väldigt många vänner och ha oerhört kul under tiden!",
			body3: "Uppropet kommer hållas den 26:e augusti klockan 09:15 i Kåraulan både för de som ska studera Datateknik och de som ska studera InfoCom. Kåraulan hittar du på Sölvegatan 22A. Se till att vara i tid; det är obligatoriskt att vara där för att få behålla sin plats vid utbildningen. Om du har några frågor som rör mottagningen så kan du alltid höra av dig till staben@dsek.se."
		},
		eng: {
			title: "",
			body1: "",
			body2: ""
		}
	};

	handleTopClick() {
		console.log("asd");
		this.smoothScroll.scrollTo('multi');
	};

	smoothScroll = {
	timer: null,

	stop: function () {
		clearTimeout(this.timer);
	},

	scrollTo: function (id, callback) {
		var settings = {
			duration: 1000,
			easing: {
				outQuint: function (x, t, b, c, d) {
					return c*((t=t/d-1)*t*t*t*t + 1) + b;
				}
			}
		};
		var percentage;
		var startTime;
		var node = document.getElementById(id);
		var nodeTop = node.offsetTop;
		var nodeHeight = node.offsetHeight;
		var body = document.body;
		var html = document.documentElement;
		var height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		var windowHeight = window.innerHeight
		var offset = window.pageYOffset;
		var delta = nodeTop - offset;
		var bottomScrollableY = height - windowHeight;
		var targetY = (bottomScrollableY < delta) ?
			bottomScrollableY - (height - nodeTop - nodeHeight + offset):
			delta;

		startTime = Date.now();
		percentage = 0;

		if (this.timer) {
			clearInterval(this.timer);
		}

		function step () {
			var yScroll;
			var elapsed = Date.now() - startTime;

			if (elapsed > settings.duration) {
				clearTimeout(this.timer);
			}

			percentage = elapsed / settings.duration;

			if (percentage > 1) {
				clearTimeout(this.timer);

				if (callback) {
					callback();
				}
			} else {
				yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
				window.scrollTo(0, yScroll);
				this.timer = setTimeout(step, 10);     
			}
		}

		this.timer = setTimeout(step, 10);
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
						<Typography variant="h4" align="center">Scrolla ner!</Typography>
						<Icon style={{marginRight: '5px'}} onClick={this.handleTopClick}>arrow_downward</Icon>
						{/*<Button variant="text"><Icon style={{marginRight: '5px'}} onClick={this.handleTopClick}>arrow_downward</Icon> Läs Mer!</Button>*/}
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Intro;