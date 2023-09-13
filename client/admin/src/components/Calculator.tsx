import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const result = eval(input);
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === '%') {
      try {
        const result = eval(input) / 100;
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div>
      <Container sx={{ marginTop: '2rem', backgroundColor: '#800020', padding: '2rem', borderRadius: '10px', marginLeft: '180px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              sx={{ width: '100%', marginBottom: '1rem', backgroundColor: 'lightgray' }}
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              inputProps={{ style: { fontSize: '2rem', textAlign: 'right' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: '100%', marginBottom: '1rem', backgroundColor: 'lightgray' }}
              variant="outlined"
              value={output}
              InputProps={{ style: { fontSize: '3rem', textAlign: 'right'} }}
            />
          </Grid>
          {['+', '-', '*', '/', '%', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'].map((buttonValue, index) => (
            <Grid item xs={3} key={index}>
              <Button
                variant="contained"
                sx={{ width: '100%', height: '100%', fontSize: '2rem', backgroundColor: 'grey' }}
                onClick={() => handleButtonClick(buttonValue)}
              >
                {buttonValue}
              </Button>
            </Grid>
          ))}
          <Grid item xs={6}>
            <Button variant="contained" sx={{ width: '100%', height: '100%', fontSize: '2rem', backgroundColor: 'grey' }} onClick={clearInput}>
              Clear
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '100%', height: '100%', fontSize: '2rem', backgroundColor: 'grey' }}
              onClick={() => handleButtonClick('=')}
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Calculator;
