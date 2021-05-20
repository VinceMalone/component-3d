import styled from "styled-components";

const Container = styled.div`
  --size: 3rem;
  display: flex;
  height: var(--size);
  width: var(--size);
`;

const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export function TweetAvatar({ src }) {
  return (
    <Container>
      <Image alt="" src={src} />
    </Container>
  );
}
