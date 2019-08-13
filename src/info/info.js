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
import Hidden from '@material-ui/core/Hidden';

class Info extends Component {
	text = {
		swe: {
			text: "Bra-att-ha information",
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
				body1: "De olika sittningarna och tillställningarna du kommer gå på under nollningen kommer ha olika klädkoder. Dessa existerar för att hjälpa dig veta hur du ska klä dig, och hur formellt eventet är. Kom ihåg att klädkodernas syfte är inte att göra dig fattig genom att tvinga dig inhandla dyra kläder som du endast kommer använda en gång. Du kan alltid fråga en kompis om du får låna deras kläder inför kvällen, eller kolla med de som anordnar eventet ifall de kläder du hade tänkt ha på dig ändå är okej. Det kan vara smart att ha med sig kläder till dessa event redan när du kommer till Lund. Detta är en lista på de klädkoder som kommer förekomma under nollningen:",
				points: {
					one: ["Högtidsdräkt", "Långklänning eller frack, men en mörk kostym duger oftast. Fråga arrangören om du är osäker. "],
					two: ["Mörk kostym", "En mörk kostym (svart, grå, brun eller mörkblå), eller en finare klänning eller en kjol med en top."],
					three: ["Bruten kavaj", "Finare vardagskläder. En kavaj kombinerat med något annat, eller bara något som du känner dig snygg i."],
					four: ["Temaenligt", "Visa sittningar har teman som du måste klä dig efter. Detta är väldigt sällan en strikt klädkod; följ temat så gott du kan!"]
				}
			},
			feel: {
				title: "Mår du dåligt?",
				body1: "Om du någon gång mår dåligt eller känner dig illa behandlad under din tid här på LTH och under nollningen så finns det flera ställen du kan vända dig till.",
				points: {
					stab: ["Staben eller pepparna", ", speciellt om det rör just saker som har hänt under nollningen."],
					phadder: ["Din phadder", ", som kan hjälpa dig att hitta rätt person att prata med."],
					health: ["Studenthälsan", "De tar hand om studenter som behöver hjälp, mer info finns på deras hemsida:"],
					kutators: ["LTH:s egna kuratorer", ", mer info finns på deras hemsida:"],
					liku: ["Trivselrådet", ", D-sektionens likabehandlingsutskott"]
				}
			}
		},
		eng: {
			text: "General information",
			tlth: {
				title: "Kåren",
				body1: "Every student at LTH is a member of Teknologkåren, TLTH. Teknologkåren represents the voices of the students against the university, and acts as a meeting place for the students. The main task for Teknologkåren is to supervise the different educations, but they also work with a lot of other things. For example, they improve the work environment for the students, take care of things regarding student aid, they mainain a close relationship with the business (näringslivet), entertainment, parties, and leisure activities.The expedition for Teknologkåren can be found in Kårhuset. You can also find the full time workers of Teknologkåren here. These are students who pauses their studies for one year in order to wholeheartedly work for Teknologkåren.",
			},
			dsek: {
				title: "The Guild",
				body1: "Teknologkåren is divided into eleven different guilds. A guild includes students from one or more program at LTH. The guilds take care of questions that directly concerns the students at their respective programs. Your guild is is called the Computer Science Guild, often called D-guild. The letter D comes from the Swedish word for computer science; datateknik. You can read more about the what the D-guild works with on their website www.dsek.se (this website is in Swedish only, but Google translate does a pretty good job at translating it)."
			},
			housing: {
				title: "Colored overalls (student boilersuits)",
				body1: "Every guild on LTH has its own color. The overalls are colored according to the guild you are in. This way it is easy to identify what another student studies, and it gives the students an opportunity to represent their own guild. The D-guild (computer science) has pink as its color! Ask your phadder if you are curious about what the other colors represent - they'll know.",
			},
			bring: {
				title: "About Lund and Sweden",
				body1: "",
				points: {
					one: ["Healthcare", "healthcare in Sweden is (almost) free. You pay at maximum 300SEK for a visit at the doctor. However, the way these visits work in Sweden can be different from other countries. Drop in-times are prioritized, meaning if you walk in with a not so super serious issue, expect other patients to be prioritized over you and you might be waiting for over two hours. What you are supposed to do instead is to call and book an appointment in beforehand"],
					two: ["Sirens every three month ", "on the first Monday every three months (Mars, June, September and December) at 3 sharp in the afternoon, Sweden tests its air raid warnings. These are sirens that are evenly distributed on (mostly) tall buildings throughout Sweden. The system has been tested this way since 1931, meaning all Swedes are accustomed to it. The sound of the sirens can however come as a shock if you are not prepared for it. So if you hear the sirens (they are very hard not to hear), do not be afraid. It is just a routine test."],
					three: ["Payments ", "in Sweden we barely use cash anymore; we are moving towards a so called cash-free society. This means that you will very rarely be able to pay by cash during the nollning, however most regular stores still accept it. It could be wise to check if you have a high fee on card transactions while abroad, since this could be a problem for you during your first weeks here."],
					four: ["The difference between guilds and nations ", "what guilds are to LTH, nations are to all students at Lund's University. In order to become a member of (and to get involved in) a guild you need to be a student at LTH and a member of Teknologkåren. The corresponding requirements for nations are that you have to be a student at Lund's University, and a member of Studentlund. You become a member of Studentlund when you gain membership at a nation (which is free). You can read more about the different nations, what they do, and how to get involved at studentlund.se."]
				}
			},
			feel: {
				title: "Are you feeling bad?",
				body1: "If you ever are feeling bad, or feel that you are being treated badly during your time here at LTH and during the nollning, ther are a couple of places and persons you can turn to.",
				points: {
					stab: ["Staben or pepparna", ", especially if there's anything that can be directly related to the nollning."],
					phadder: ["Your phadder", ", who can help you find the right person to talk to."],
					health: ["Studenthälsan", "(the student health counselling). They take care of students who need help You can find more information on their website."],
					kutators: ["LTH:s own counselors", ", more info on their web page:"],
					liku: ["Trivselrådet", ", The D-guilds equal opportunities representatives"]
				}
			}
		}
	};

	render() {
		return(
			<div id="info">
				<Grid container direction="column" alignItems="center" justify="space-around" spacing={7}>
					<Grid item xs={12}>
						<Typography align='center' variant="h1">{this.text[this.props.lang].text}</Typography>
					</Grid>				
					<Grid item xs={12}>
						<Grid container direction="row" alignItems="flex-start" justify="space-evenly" spacing={2}>
							<Grid item xs={10} md={3} align="center">
								<Typography variant="h4" align="center">{this.text[this.props.lang].tlth.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text[this.props.lang].tlth.body1}</Typography>
								<Button href="https://tlth.se" target="_blank" variant="text"><Icon style={{marginRight: '5px'}}>link</Icon>tlth.se</Button>
							</Grid>
							<Grid item xs={10} md={3} align="center">
								<Typography variant="h4" align="center">{this.text[this.props.lang].dsek.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text[this.props.lang].dsek.body1}</Typography>
								<Button color="primary" href="https://dsek.se" target="_blank" variant="text"><Icon style={{marginRight: '5px'}}>link</Icon>dsek.se</Button>
							</Grid>
							<Grid item xs={10} md={3}>
								<Typography variant="h4" align="center">{this.text[this.props.lang].housing.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text[this.props.lang].housing.body1}</Typography>
								{this.props.lang === "swe" ? <ButtonGroup variant="outlined" size="small">
									<Button href="https://www.afbostader.se/" target="_blank" variant="outlined"><Icon style={{marginRight: '5px'}}>link</Icon>afb</Button>
									<Button href="https://bopoolen.nu/" target="_blank" variant="outlined"><Icon style={{marginRight: '5px'}}>link</Icon>bopoolen</Button>
									<Button href="https://www.studentlund.se/bostad/" target="_blank" variant="outlined"><Icon style={{marginRight: '5px'}}>link</Icon>studentlund</Button>
								</ButtonGroup> : ""}
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container direction="row" alignItems="flex-start" justify="space-evenly" spacing={2}>
							<Grid item xs={10} md={5}>
								<Typography variant="h4" align="center">{this.text[this.props.lang].bring.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text[this.props.lang].bring.body1}</Typography>
								<List>
									<ListItem>
										<ListItemText> <b>{this.text[this.props.lang].bring.points.one[0]}</b> - {this.text[this.props.lang].bring.points.one[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>{this.text[this.props.lang].bring.points.two[0]}</b> -  {this.text[this.props.lang].bring.points.two[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>{this.text[this.props.lang].bring.points.three[0]}</b> -  {this.text[this.props.lang].bring.points.three[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>{this.text[this.props.lang].bring.points.four[0]}</b> -  {this.text[this.props.lang].bring.points.four[1]}</ListItemText>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={10} md={5}>
								<Typography variant="h4" align="center">{this.text[this.props.lang].feel.title}</Typography>
								<Divider></Divider>
								<Typography variant="body1" align="center">{this.text[this.props.lang].feel.body1}</Typography>
								<List>
									<ListItem>
										<ListItemText> <b>{this.text[this.props.lang].feel.points.stab[0]}</b>{this.text[this.props.lang].feel.points.stab[1]}</ListItemText>
									</ListItem>
									<ListItem> 
										<ListItemText> <b>{this.text[this.props.lang].feel.points.phadder[0]}</b>{this.text[this.props.lang].feel.points.phadder[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>{this.text[this.props.lang].feel.points.health[0]}n</b> <br />{this.text[this.props.lang].feel.points.health[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<Fab color="secondary" size="small" href="https://www.lu.se/studera/livet-som-student/service-och-stod/studenthalsan" target="_blank"><Icon>link</Icon></Fab>
									</ListItem>
									<ListItem>
										<ListItemText> <b>{this.text[this.props.lang].feel.points.kutators[0]}</b>{this.text[this.props.lang].feel.points.kutators[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<Fab  color="secondary" size="small" href="http://www.student.lth.se/stod_i_studierna/kuratorer_lth/" target="_blank"><Icon>link</Icon></Fab>	
									</ListItem>
									<ListItem>
										<ListItemText> <b>{this.text[this.props.lang].feel.points.liku[0]}</b>{this.text[this.props.lang].feel.points.liku[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<Fab  color="secondary" size="small" href="mailto:trivselm@dsek.se" target="_blank"><Icon>mail</Icon></Fab>	
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