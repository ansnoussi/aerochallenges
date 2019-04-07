import React from 'react';
import { Text, Image, Button, Card } from './mini'
import { Composition } from 'atomic-layout'


const templateMobile = `
  thumbnail
  heading
  actions
`

const templateTablet = `
  thumbnail heading
  thumbnail actions
`



  const QuitterZoneCard = ({ nbEssai }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail>
              <Image src="../assets/porte.png" alt="zoneImage" />
            </Thumbnail>
            <Heading>
              <h3>Zone de départ</h3>
            {(nbEssai > 1) ? <Text small >echec du premier essai : -3 points</Text> : <div></div>}
            </Heading>
            <Actions flex align="flex-end">
              {(nbEssai == 0) ? <Button wide style={{backgroundColor:'red'}} >0 points</Button> : <Button wide style={{backgroundColor:'green'}} >+ {(nbEssai > 1)? 2 : 5} points</Button>}
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )

  const BoolCard = ({ title, bool, points, }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail>
            </Thumbnail>
            <Heading>
              <h3>{title}</h3>
            </Heading>
            <Actions flex align="flex-end">
              {(bool == 0) ? <Button wide  style={{backgroundColor:'red'}} >0 points</Button> : <Button wide  style={{backgroundColor:'green'}} >+ {points} points</Button>}
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )

  
  const ColisionCard = ({ nbr }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail >
              <Text   style={{fontSize: 100}}>{nbr}</Text>
            </Thumbnail>
            <Heading>
              <h3>Collisions</h3>
            </Heading>
            <Actions flex align="flex-end">
            {(nbr >0) ? <Button wide  style={{backgroundColor:'red'}} >- {nbr} points</Button> : <div></div>}
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )

  const ZIGZAGCard = ({ colonnes }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail >
             <Image src="../assets/sample.png" alt="zigzag img" />
            </Thumbnail>
            <Heading>
              <h3>ZIGZAG</h3>
              {<Text small >passer {colonnes} colonnes</Text>}
            </Heading>
            <Actions flex align="flex-end">
            {(colonnes == 3)? <Button wide  style={{backgroundColor:'green'}} >+ 30 points</Button> : <div></div> }
            {(colonnes == 2)? <Button wide  style={{backgroundColor:'green'}} >+ 15 points</Button> : <div></div> }
            {(colonnes == 0)? <Button wide  style={{backgroundColor:'red'}} >0 points</Button> : <div></div> }
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )


  const OqbaCard = ({ tours }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail >
             <Image src="../assets/sample.png" alt="zigzag img" />
            </Thumbnail>
            <Heading>
              <h3>Mosquée Oqba</h3>
              {<Text small >effectuer {tours} tours</Text>}
            </Heading>
            <Actions flex align="flex-end">
            {(tours == 3)? <Button wide  style={{backgroundColor:'green'}} >+ 45 points</Button> : <div></div> }
            {(tours == 2)? <Button wide  style={{backgroundColor:'green'}} >+ 30 points</Button> : <div></div> }
            {(tours == 1)? <Button wide  style={{backgroundColor:'green'}} >+ 15 points</Button> : <div></div> }
            {(tours == 0)? <Button wide  style={{backgroundColor:'red'}} >0 points</Button> : <div></div> }
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )

  const BassinCard = ({ bassin, niveau, duree, poids }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail >
             <Image src="../assets/sample.png" alt="zigzag img" />
            </Thumbnail>
            <Heading>
              <h3>Bassins aghlabides </h3>
              {(bassin == 0) ? <div></div> : <div> {<Text small >stabiliser au dessus du {(bassin == 1) ? "grand" : "petit"} bassin au {(niveau == 0) ? "dessous" : "dessus"} du niveau du muraille de Sfax pendant {duree} seconds </Text>} </div>}
            </Heading>
            <Actions flex align="flex-end">
            {(bassin == 0)? <Button wide  style={{backgroundColor:'red'}} >0 points</Button> : <Button wide  style={{backgroundColor:'green'}} >+ {duree * poids} points</Button> }
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )


  const SfaxCard = ({ portail }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail >
             <Image src="../assets/sample.png" alt="zigzag img" />
            </Thumbnail>
            <Heading>
              <h3>Muraille de Sfax</h3>
              {(portail == 0)? null : <div> {<Text small >traverser le {(portail == 1) ? "petit" : "grand"} portail</Text>} </div>}
            </Heading>
            <Actions flex align="flex-end">
            {(portail == 2)? <Button wide  style={{backgroundColor:'green'}} >+ 30 points</Button> : <div></div> }
            {(portail == 1)? <Button wide  style={{backgroundColor:'green'}} >+ 50 points</Button> : <div></div> }
            {(portail == 0)? <Button wide  style={{backgroundColor:'red'}} >0 points</Button> : <div></div> }
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )



  const AfricaCard = ({ temps, points }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail >
             <Image src="../assets/sample.png" alt="zigzag img" />
            </Thumbnail>
            <Heading>
              <h3>Muraille de Sfax</h3>
              {(temps == 0)? null : <div> {<Text small >atterrir sur la zone d'arrivé dans {temps} seconds</Text>} </div>}
            </Heading>
            <Actions flex align="flex-end">
            {(temps > 0)? <Button wide  style={{backgroundColor:'green'}} >+ {points} points</Button> : <div></div> }
            {(temps == 0)? <Button wide  style={{backgroundColor:'red'}} >0 points</Button> : <div></div> }
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )

  const HelicesCard = ({ protege }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail >
            </Thumbnail>
            <Heading>
              <h3>Protection des hélices</h3>
              <Text small >les hélices {(protege == 0) ? "ne sont pas" : "sont"} protégées</Text>
            </Heading>
            <Actions flex align="flex-end">
            {(protege == 0)? <Button wide  style={{backgroundColor:'red'}} >- 10 points</Button> : <Button wide  style={{backgroundColor:'green'}} >- 0 points</Button> }
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )

  const DiametreCard = ({ diametre }) => (
    <Card>
      <Composition
        template={templateMobile}
        templateMd={templateTablet}
        templateLg={templateMobile}
        templateColsMdOnly="minmax(100px, 1fr) 1fr"
        padding={15}
        gutter={15}
        gutterLg={25}
      >
        {({ Thumbnail, Heading, Actions }) => (
          <>
            <Thumbnail >
            </Thumbnail>
            <Heading>
              <h3>Diametre</h3>
              <Text small >{diametre} mm</Text>
            </Heading>
            <Actions flex align="flex-end">
            {(diametre <= 195 )? <Button wide  style={{backgroundColor:'green'}} >non homologués</Button> : <Button wide  style={{backgroundColor:'red'}} >- 50 points</Button> }
            </Actions>
          </>
        )}
      </Composition>
    </Card>
  )



export default class NewPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : "bestTEAM",
            uid : 1554215647463,
            score : 900,
            details : {
                quitterZone : 2,
                fabriquerParParticpant : 1,
                posterTechnique : 0,
                collisions : 2,
                zigzag : 3,
                murailleDeSfax : 1,
                hotelAfrica : 22.3,
                OqbaIbnNafi : 0,
                bassins : 2,
                niveauStabilisation : 0,
                dureeStabilization : 2,
                diametre: 120,
                helicesProtegees: 0,
            }
        };
    }

    calculerPoidsSecond(bassin , niveau){
      if(bassin == 1){
        if(niveau == 0){
          return 8;
        }else{
          return 4;
        }
      }else{
        if(niveau == 0){
          return 5;
        }else{
          return 4;
        }
      }
    }
    
    calculerHotelAfricaTemps(temps){
      if(temps < 3600){
        return 36;
      }else{
        return(36 - Math.round((temps - 180) / 5));
      }
    }

    render(){
        return(<div className="container">
            <h1>{this.state.name}</h1>
            <h1>score: {this.state.score}</h1>
            <Composition
            templateCols="repeat(auto-fit, 250px)"
            templateColsMd="repeat(2, 1fr)"
            templateColsLg="repeat(auto-fit, minmax(250px, 1fr))"
            justifyContent="center"
            gutter={15}
            gutterLg={25}
            >

<BoolCard title="Fabriquer par le participant" bool={this.state.details.fabriquerParParticpant} points={100} imageUrl="../assets/sample.png" ></BoolCard>
<BoolCard title="Poster technique" bool={this.state.details.posterTechnique} points={10} imageUrl="../assets/sample.png" ></BoolCard>
<HelicesCard protege={this.state.details.helicesProtegees} ></HelicesCard>
<DiametreCard diametre={this.state.details.diametre} ></DiametreCard>
<QuitterZoneCard key={this.state.uid} nbEssai={this.state.details.quitterZone} ></QuitterZoneCard>
<ZIGZAGCard colonnes={this.state.details.zigzag} ></ZIGZAGCard>
<BassinCard bassin={this.state.details.bassins} niveau={this.state.details.niveauStabilisation} duree={this.state.details.dureeStabilization} poids={this.calculerPoidsSecond(this.state.details.bassins, this.state.details.niveauStabilisation)} ></BassinCard>
<ColisionCard nbr={this.state.details.collisions} ></ColisionCard>
<OqbaCard tours={this.state.details.OqbaIbnNafi} ></OqbaCard>
<SfaxCard portail={this.state.details.murailleDeSfax} ></SfaxCard>
<AfricaCard temps={this.state.details.hotelAfrica} points={this.calculerHotelAfricaTemps(this.state.details.hotelAfrica)} ></AfricaCard>




            
          </Composition>
        </div>);
    }
}

