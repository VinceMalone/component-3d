import styled from "styled-components";

const Container = styled.div`
  color: rgb(91, 112, 131);
  font-size: 0.9rem;
`;

const Link = styled.span`
  color: rgb(27, 149, 224);
`;

export function TweetReplyContext({ accounts }) {
  return (
    <Container>
      Replying to{" "}
      {accounts.map((account) => (
        <Link key={account}>@{account}</Link>
      ))}
    </Container>
  );
}
