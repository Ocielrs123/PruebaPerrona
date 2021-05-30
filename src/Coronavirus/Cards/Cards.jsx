import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Estadisticas del COVID-19</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infectados"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Numero de casos Activos de COVID-19"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recuperados"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Numero de casos Recuperados de COVID-19"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Muertes"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Numero de Muertes por COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Info;