import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
  margin: 20px auto;
  width: 350px;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px #000000;
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  color: grey;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  height: 70px;
`;

export const StatItem = styled.li`
  text-align: center;
  width: 100%;
  height: 100%;
`;
export const Label = styled.span`
  display: block;
  padding-top: 15px;
  font-size: 12px;
  color: rgb(221, 208, 208);
`;

export const Percentage = styled.span`
  display: block;
  font-size: 16px;
  padding-top: 5px;
  font-weight: 900;
  color: rgb(221, 208, 208);
`;
