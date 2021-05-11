import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../src/styles.css";
import {
  Container,
  Grid,
  GridRow,
  GridColumn,
  Message,
  Button,
} from "semantic-ui-react";


function App() {
  const [count, setCount] = React.useState(0)

  const handleIncrement = React.useCallback(() => {
    setCount(count + 1)
  }, [setCount, count])

  const handleReset = React.useCallback(() => {
    setCount(0)
  }, [setCount])

  return (
    <Container>
      <Grid>
        <GridRow centered textAlign="center">
          <GridColumn width={16}>
            <Message floating onClick={handleIncrement} content={count} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width={16}>
            <Button
              fluid
              inverted
              size="massive"
              color="red"
              onClick={handleReset}
            >
              Reset
            </Button>
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
}

export default App;
