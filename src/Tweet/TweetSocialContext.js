import styled from "styled-components";

const Container = styled.div`
  --indent: 4rem;
  align-items: center;
  color: rgb(91, 112, 131);
  display: flex;
  font-size: 13px;
  font-weight: bolder;
  padding-left: var(--indent);
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  right: calc(100% - var(--indent) + 0.25rem);
`;

export function TweetSocialContext({ icon, children }) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      {children}
    </Container>
  );
}
