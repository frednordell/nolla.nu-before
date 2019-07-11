import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class Multi extends Component {

	text = {
		swe: {
			intro: {
				title: "Hejsan blivande teknolog!",
				body1: "Nollningen är ett namn på de fem första veckorna av er tid här på LTH. Den första av dessa utspelar sig innan ordinarie undervisning börjar och det är här som aktiviteterna ligger som tätast. På dagarna ges nyttiga introduktionskurser i diverse ämnen och på kvällarna finns det roliga fritidsaktiviteter och fester att delta i."
			},
			zero: {
				title: "Vad är en Nolla?",
				body1: "En Nolla är oftast en förstaårsstudent. Denna student tas hand om av phaddrarna som alltid ser till att Nollan har det trevligt! Som Nolla får man gå på massvis av roliga event och fester samt bekanta sig med sina nya kursare. Nolla är man fram till nollegasquen (nollningens avslutningsfest) då man upphöjs till etta efter fullbordat nolleuppdrag.",
			},
			phadder: {
				title: "Vad är en Phadder?",
				body1: "En phadder är en äldre student som ofta springer runt i en ouveralle, och en del springer runt utan ouveralle. Phaddern vet en fruktansvärd massa saker om LTH och då speciellt hur D-sektionen och studentlivet fungerar. En phadder kan också allt som står på nollningsprogrammet, var föreläsningssalar ligger, hur man beställer pizza och var man tar vägen om man missade sista tåget hem. De flesta phaddrarna har även gått på utbildning i ledarskap, alkoholansvar och mycket, mycket mer, så tveka inte att fråga dem något om en kris uppstår. Phaddern är till för Nollans skull.",
			},
			pepp: {
				title: "Vad är en Peppare?",
				body1: "En peppare är en person som bistår staben i deras arbete med att planera och uföra nollningen. De springer allt som oftast runt i rosa frackar och ser till så att både Nollor och phaddrar är peppade. De vet allt om hur nollningen fungerar - om du har missat att köpa biljett till en sittning eller känner dig osäker på var och när du ska infinna dig till olika event så kan du alltid prata med en peppare!"
			},
			stab: {
				title: "Vad är Staben?",
				body1: "Vi som ansvarar för nollningen kallas för staben. Staben planerar och genomför D-sektionens nollning. Arbetet med nollningen leds av mig, Överphös, och i år har jag fem stabsmedlemmar bakom mig. Alla vi i staben läser Datateknik eller Infocom och arbetar ideellt och helhjärtat med att genomföra den bästa nollningen någonsin!",
			}
		},
		eng: {
	
		}
	};

	render() {
		return(
			<div id="multi">
				<Grid container direction="column" alignItems="center" justify="space-around" spacing={7}>
					<Grid item xs={12}>
						<Typography align='center' variant="h1">Nollningen i korthet</Typography>
					</Grid>
					<Grid container direction="row" alignItems="flex-start" justify="center" spacing={0}>
						<Grid item xs={12} md={6}>
							<Typography variant="body1" align="center">{this.text.swe.intro.body1}</Typography>
						</Grid>
					</Grid>				
					<Grid item xs={12}>
						<Grid container direction="row" alignItems="flex-start" justify="space-evenly" spacing={2}>
							<Grid item xs={12} md={3}>
								<Typography variant="h4" align="center">{this.text.swe.zero.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text.swe.zero.body1}</Typography>
							</Grid>
							<Grid item xs={12} md={3}>
								<Typography variant="h4" align="center">{this.text.swe.phadder.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text.swe.phadder.body1}</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container direction="row" alignItems="center" justify="space-evenly" spacing={2}>
							<Grid item xs={12} md={3}>
								<Typography variant="h4" align="center">{this.text.swe.pepp.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text.swe.pepp.body1}</Typography>
							</Grid>
							<Grid item xs={12} md={3}>
								<Typography variant="h4" align="center">{this.text.swe.stab.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text.swe.stab.body1}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Multi;