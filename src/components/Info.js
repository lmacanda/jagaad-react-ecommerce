import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
  padding: 0 1%;
  margin-top: 4%;
  background-color: #faf4f4;

  .info_item {
    width: 100%;
  }

  p {
    color: #9f9f9f;
  }

  @media (min-width: 758px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 4% 5%;
    justify-content: space-between;

    .info_item {
      width: 20%;
    }
  }
`;

export default function Info() {
  return (
    <>
      <Container>
        <div className="info_item">
          <h2>Free Delivery</h2>
          <p>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className="info_item">
          <h2>90 Days Return</h2>
          <p>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className="info_item">
          <h2>Secure Payment</h2>
          <p>100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </Container>
    </>
  );
}
