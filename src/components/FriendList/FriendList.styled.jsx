import styled from "@emotion/styled";

export const List = styled.ul`
  margin: 20px auto;
  width: 200px;
  margin-bottom: 30px;
`;
export const Item = styled.li`
  box-shadow: 2px 2px 5px #000000;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
export const Status = styled.span`
  background-color: ${({ status }) => {
    switch (status) {
      case true:
        return "green";
      case false:
        return "red";
      default:
        return "black";
    }
  }};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
`;
export const Avatar = styled.img`
  padding: 5px;
`;
export const FriendName = styled.p`
  color: gray;
`;
