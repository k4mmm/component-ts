import styled from "@emotion/styled";

export const ProfileCard = styled.div`
  margin: 20px auto;
  width: 250px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #000000;
  margin-bottom: 30px;
`;
export const Description = styled.div`
  padding: 10px 0;
  width: 150px;
  margin: auto;
  text-align: center;
  font-size: 16px;
`;

export const Avatar = styled.img`
  height: 100px;
  border-radius: 50%;
`;
export const UserName = styled.p`
  color: #122236;
  font-size: 18px;
  font-weight: 700;
`;
export const Location = styled.p`
  color: #82909e;
`;

export const Tag = styled.p`
  color: #82909e;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatItem = styled.li`
  width: 100px;
  text-align: center;
  padding: 15px 0;
  border: 1px solid #e4e9f0;
  background-color: #f3f6f9;
  &:first-of-type {
    border-radius: 0 0 0 5px;
  }
  &:last-child {
    border-radius: 0 0 5px 0;
  }
`;

export const Lebel = styled.span`
  display: block;
  font-size: 14px;
  color: #768696;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  display: block;
`;
