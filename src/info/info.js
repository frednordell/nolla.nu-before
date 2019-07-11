import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Info extends Component {
	text = {
		swe: {
			tlth: {
				title: "Kåren",
				body1: "Alla studenter på LTH är medlemmar i Teknologkåren vid Lunds tekniska högskola, TLTH. Kåren är studenternas röst mot universitetet och en mötesplats för teknologerna. Kårens huvudsakliga uppgift är att bevaka utbildningarna, men gör även mycket annat, t.ex arbetar med studenternas arbetsmiljö, studiemedelsfrågor, kontakter med näringsliv, nöjen, fester och fritidsaktiviteter.Kårens expedition finns i Kårhuset. Här hittar man även kårens heltidare, de studenter som under ett år tar uppehåll från studierna för att helhjärtat arbeta för Teknologkåren.",
			},
			dsek: {
				title: "Sektionen",
				body1: "Kåren är uppdelad i elva sektioner. En sektion omfattar studenter vid ett eller flera utbildningsprogram. Sektionerna har hand om de frågor som rör studenter på just de programmen. Din sektion heter Datatekniksektionen! Du kan läsa mer om vad D-sektionen gör för något på sektionens hemsida www.dsek.se."
			},
			housing: {
				title: "Boende",
				body1: "I Lund kan det ibland vara lite knepigt att få tag på boende - som tur är har novischer (förstaårsstudenter) förtur. Kontakta AF-Bostäder, Bopoolen eller en nation direkt! Studentlund har några bra tips som gäller alla dessa alternativ, samt några andra sätt att få tag i boende. Klicka dig in där och läs på! Lyckas du ändå inte få någonstans att bo så fråga runt bland phaddrarna och äldre teknologer så kan säkert ett tillfälligt boende fixas.",
			},
			bring: {
				title: "Vad ska jag ha med mig till Lund?",
				body1: "De olika sittningarna och tillställningarna du kommer gå på under nollningen kommer ha olika klädkoder. Dessa existerar för att hjälpa dig veta hur du ska klä dig, och hur formellt eventet är. Kom ihåg att klädkodernas syfte är inte att göra dig fattig genom att tvinga dig inhandla dyra kläder som du endast kommer använda en gång. Du kan alltid fråga en kompis om du får låna deras kläder inför kvällen, eller kolla med de som anordnar eventet ifall de kläder du hade tänkt ha på dig ändå är okej. Det kan vara smart att ha med sig kläder till dessa event redan när du kommer till Lund. Detta är en lista på de klädkoder som kommer förekomma under nollningen:"
			},
			feel: {
				title: "Mår du dåligt?",
				body1: "Om du någon gång mår dåligt eller känner dig illa behandlad under din tid här på LTH och under nollningen så finns det flera ställen du kan vända dig till.",
			}
		},
		eng: {}
	};

	render() {
		return(
			<div id="info">
				<Grid container direction="column" alignItems="center" justify="space-around" spacing={7}>
					<Grid item xs={12}>
						<Typography align='center' variant="h1">Bra-att-ha information</Typography>
					</Grid>				
					<Grid item xs={12}>
						<Grid container direction="row" alignItems="flex-start" justify="space-evenly" spacing={2}>
							<Grid item xs={12} md={3} align="center">
								<Typography variant="h4" align="center">{this.text.swe.tlth.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text.swe.tlth.body1}</Typography>
								<Button href="https://tlth.se" target="_blank" variant="text"><Icon style={{marginRight: '5px'}}>link</Icon>tlth.se</Button>
							</Grid>
							<Grid item xs={12} md={3} align="center">
								<Typography variant="h4" align="center">{this.text.swe.dsek.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text.swe.dsek.body1}</Typography>
								<Button color="primary" href="https://dsek.se" target="_blank" variant="text"><Icon style={{marginRight: '5px'}}>link</Icon>dsek.se</Button>
							</Grid>
							<Grid item xs={12} md={3}>
								<Typography variant="h4" align="center">{this.text.swe.housing.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text.swe.housing.body1}</Typography>
								<ButtonGroup variant="outlined" size="small">
									<Button href="https://www.afbostader.se/" target="_blank" variant="outlined"><Icon style={{marginRight: '5px'}}>link</Icon>afb</Button>
									<Button href="https://bopoolen.nu/" target="_blank" variant="outlined"><Icon style={{marginRight: '5px'}}>link</Icon>bopoolen</Button>
									<Button href="https://www.studentlund.se/bostad/" target="_blank" variant="outlined"><Icon style={{marginRight: '5px'}}>link</Icon>studentlund</Button>
								</ButtonGroup>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container direction="row" alignItems="flex-start" justify="space-evenly" spacing={2}>
							<Grid item xs={12} md={5}>
								<Typography variant="h4" align="center">{this.text.swe.bring.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text.swe.bring.body1}</Typography>
								<List>
									<ListItem>
										<ListItemText> <b>Högtidsdräkt</b> - Långklänning eller frack, men en mörk kostym duger oftast. Fråga arrangören om du är osäker. </ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>Mörk kostym</b> - En mörk kostym (svart, grå, brun eller mörkblå), eller en finare klänning eller en kjol med en top. </ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>Bruten kavaj</b> - Finare vardagskläder. En kavaj kombinerat med något annat, eller bara något som du känner dig snygg i. </ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>Temaenligt</b> - Visa sittningar har teman som du måste klä dig efter. Detta är väldigt sällan en strikt klädkod; följ temat så gott du kan! </ListItemText>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} md={5}>
								<Typography variant="h4" align="center">{this.text.swe.feel.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text.swe.feel.body1}</Typography>
								<List>
									<ListItem>
										<ListItemText> <b>Staben eller pepparna</b>, speciellt om det rör just saker som har hänt under nollningen. </ListItemText>
									</ListItem>
									<ListItem> 
										<ListItemText> <b>Din phadder</b>, som kan hjälpa dig att hitta rätt person att prata med. </ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>Studenthälsan</b> <br />De tar hand om studenter som behöver hjälp, mer info finns på deras hemsida:</ListItemText>
										<Fab color="secondary" size="small" href="https://www.lu.se/studera/livet-som-student/service-och-stod/studenthalsan" target="_blank"><Icon>link</Icon></Fab>
									</ListItem>
									<ListItem>
										<ListItemText> <b>LTH:s egna kuratorer</b>, mer info finns på deras hemsida:</ListItemText>
										<Fab  color="secondary" size="small" href="http://www.student.lth.se/stod_i_studierna/kuratorer_lth/" target="_blank"><Icon>link</Icon></Fab>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Info;