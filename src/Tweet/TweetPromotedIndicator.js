import styled from "styled-components";

const Container = styled.div`
  font-size: smaller;
`;

const Label = styled.span`
  color: rgba(0 0 0 / 0.68);
`;

export function TweetPromotedIndicator() {
  return (
    <Container>
      {"↗️"} <Label>Promoted</Label>
    </Container>
  );
}
