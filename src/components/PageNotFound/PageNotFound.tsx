import styled from "@emotion/styled";

/**
 * A Component that shows that there is no page is linked for the given route.
 * @returns - Component
 */
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
