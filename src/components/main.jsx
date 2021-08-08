import React, { useState } from "react";

import { Container, FormControl, InputLabel, Input } from "@material-ui/core";

function getArray(binario) {
  const string = `${binario}`;
  const array = string.split("").reverse();
  return array;
}

export default function Main() {
  const [binary, setBinary] = useState([]);
  const [result, setResult] = useState(0);

  function conversor(string) {
    var resultado = 0;
    var array = getArray(string);
    var espoenteMaximo = (parseInt(string.length) - 1) ;
    var aux = 0;

    for (let i = 0; i <= espoenteMaximo; i++) {
      aux = Math.pow(2, parseInt(i)) * parseInt(array[i]);
      resultado = resultado + aux;
    }
    setResult(resultado);
  }

  return (
    <Container maxWidth="sm">
      <h1>Conversor de binario para decimal</h1>
      <FormControl margin="normal" fullWidth>
        <InputLabel>Binario</InputLabel>
        <Input
          id="binary"
          fullWidth
          value={binary}
          onChange={(event) => {
            setBinary(event.target.value);
            conversor(event.target.value);
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <Input id="result" value={result} disabled/>
      </FormControl>
    </Container>
  );
}
