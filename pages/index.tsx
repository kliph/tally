import React from "react";
import {
  Container,
  Grid,
  GridRow,
  GridColumn,
  Message,
  Button,
} from "semantic-ui-react";

function Tally() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = React.useCallback(() => {
    setCount(count + 1);
  }, [setCount, count]);

  const handleReset = React.useCallback(() => {
    setCount(0);
  }, [setCount]);

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
              RESET
            </Button>
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
}

export default Tally;
