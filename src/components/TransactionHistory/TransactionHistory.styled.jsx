import styled from "@emotion/styled";

export const Tabele = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: none;
  margin-bottom: 20px;
`;

export const ColumnName = styled.th`
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }
  &:last-of-type {
    border-radius: 0 8px 8px 0;
  }
`;
export const TransInfo = styled.td`
  text-align: center;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }
  &:last-of-type {
    border-radius: 0 8px 8px 0;
  }
`;
export const TableBody = styled.tr`
  &:nth-of-type(even) {
    background: #f3f3f3;
  }
`;
