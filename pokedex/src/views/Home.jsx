import React from "react";
import PokemonCard from "../components/PokemonCard";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import pokemonData from "../data/data";

export const Home = () => {
  return (
    <div>
      <Container maxWidth="false">
        <Grid container>
          {pokemonData.map((pokemon, index) => (
            <Grid item xs={3} key={index}>
              <PokemonCard
                name={pokemon.name}
                url={pokemon.url}
                type={pokemon.type}
                description={pokemon.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
