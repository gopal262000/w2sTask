import styled from "@emotion/styled";

export default function ErrorPage() {
  const StyledNotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    text-align: center;
  `;
  return (
    <StyledNotFound>
      <h1>Oops!</h1>
      <p>404 - Page Not Found</p>
    </StyledNotFound>
  );
}
