import styled from "styled-components";

const TweetActionButton = styled.button`
  align-items: baseline;
  background: none;
  border: 0;
  display: inline-flex;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
`;

export function TweetAction({ label, icon, count }) {
  return (
    <TweetActionButton type="button">
      <span aria-label={label}>{icon}</span>
      {count && <span>{count}</span>}
    </TweetActionButton>
  );
}
