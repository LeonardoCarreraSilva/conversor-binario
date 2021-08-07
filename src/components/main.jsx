import React, { useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";

export default function Main() {
  const [binary, setBinary] = useState();
  const [result, setResult] = useState();

  return (
    <Container maxWidth="sm">
      <h1>Concersor de binario para decimal</h1>
      <FormControl margin="normal" fullWidth>
        <InputLabel>Binary</InputLabel>
        <Input
          id="binary"
          fullWidth
          value={this.binary}
          onChange={() => {
            //fazer logica
          }}
        />
      </FormControl>

      <FormControl disabled margin="normal" fullWidth>
        <InputLabel htmlFor="component-disable">Resultado Decimal</InputLabel>
        <Input
          id="result"
          value={this.result}
          onChange={() => {
            //fazer logica
          }}
        />
      </FormControl>
    </Container>
  );
}