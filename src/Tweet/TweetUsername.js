import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Username = styled.div`
  font-weight: bolder;
`;

const AccountName = styled.div``;

export function TweetUsername({ accountName, username }) {
  return (
    <Container>
      <Username>{username}</Username>
      <AccountName>@{accountName}</AccountName>
    </Container>
  );
}
