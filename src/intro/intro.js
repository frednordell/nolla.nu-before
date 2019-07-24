import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Icon from '@material-ui/core/Icon'




class Intro extends Component {

	text = {
		swe: {
			title: "Hejsan blivande Data- eller infocom-teknolog!",
			pre: "Stort grattis till att du har blivit antagen till Sveriges i särklass roligaste skola: LTH! ",
			body1: "För att du ska känna dig välkommen och inte alltför vilsen i början så kommer du genomgå en nollning. Den sträcker sig över de första veckorna och tillsammans kommer vi försöka se till att de här veckorna blir några av de roligaste i ditt liv. Eftersom nollningen har ett sådant fullspäckat schema så är det inte säkert att du orkar vara med på allt, och det är helt okej. Du väljer själv vilka aktiviteter du vill delta i. Något som däremot är säkert är att du kommer träffa väldigt många vänner och ha oerhört kul under tiden!",
			body3: "Uppropet kommer hållas den 26:e augusti klockan 09:15 i Kåraulan både för de som ska studera Datateknik och de som ska studera InfoCom. Kåraulan hittar du på Sölvegatan 22A. Se till att vara i tid; det är obligatoriskt att vara där för att få behålla sin plats vid utbildningen. Om du har några frågor som rör mottagningen så kan du alltid höra av dig till staben@dsek.se.",
			button: "Scrolla ner!",
			butThen: "Men sen då?!"
		},
		eng: {
			title: "WELCOME TO THE COMPUTER SCIENCE GUILD!",
			pre: "Congratulations on your acceptance to Sweden's best school; LTH! ",
			body1: "If you are reading this then it most likely means that you are an exchange student who has been placed in the computer science guild (the D-guild). In that case; congratulations once again! We will do our best to make sure that you are feeling welcomed and not too lost in the beginning of your stay. If you are feeling overwhelmed or confused about what this is about, that is completely normal and that is exactly why this website exists. Feel free to read up on our student traditions and what the different guilds do; you can find most of the information here on nolla.nu.",
			body3: "You will undergo a nollning here on LTH that lasts for the first couple of weeks. This is a great opportunity to meet new friends and acquaintance yourself with other people. Please do note that the nollning at LTH and the international nollning at LU are two completely different things. Different groups of people arrange them and the schedules will clash from time to time. This is no problem, though. You can choose freely what activities you want to take part in. However, keep in mind that the people at LTH will (most likely) not know anything about the nollning at LU. Regardless of what you choose to do, it is safe to say that you will have a lot of fun and meet plenty of new friends!",
			button: "Scoll down!",
			butThen: "What's next?!"
		}
	};

	render() {
		return(
			<div id="intro">
				<Grid container direction="row" alignItems="baseline" justify="space-evenly" spacing={1}>
					<Grid item xs={10} lg={6}>
						<Hidden lgUp>
							<Typography variant="h1" align="center">{this.text[this.props.lang].title}</Typography>
						</Hidden>
						<Hidden mdDown>
							<Typography variant="h2" align="center">{this.text[this.props.lang].title}</Typography>
						</Hidden>
						<br />
						<Typography variant="body1" align="center">{this.text[this.props.lang].pre}</Typography>
						<Typography variant="body1" align="center">{this.text[this.props.lang].body3}</Typography>
					</Grid>
					<Grid item xs={10} lg={4} align="center">
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
						<Typography variant="h2" align="center">{this.text[this.props.lang].butThen}</Typography>
						<br />
						<Typography variant="body1" align="center">{this.text[this.props.lang].body1}</Typography>
						<br />
						<Typography variant="h4" align="center">{this.text[this.props.lang].button}</Typography>
						<Icon style={{marginRight: '5px'}} onClick={this.handleTopClick}>arrow_downward</Icon>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Intro;