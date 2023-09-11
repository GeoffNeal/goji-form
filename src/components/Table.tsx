import styled, { css } from "styled-components";

const tableCellStyles = css`
  width: 200px;
  text-align: center;
  padding: 0 var(--default-padding) 0 var(--default-padding);
`;

const Table = styled.table`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  border: var(--light-border);
  border-radius: var(--default-border-radius);
  background-color: var(--white);
`;

export const TableRow = styled.tr`
  display: block;
  padding: var(--default-padding);

  thead & {
    border-top-left-radius: var(--default-border-radius);
    border-top-right-radius: var(--default-border-radius);
    background-color: var(--brand-01-160);
    color: var(--white);
  }

  tbody &:nth-child(2n) {
    background-color: var(--off-white);
  }

  tbody &:hover {
    background-color: var(--brand-01-05);
  }

  tbody &:first-child:not(thead + tbody &:first-child) {
    border-top-left-radius: var(--default-border-radius);
    border-top-right-radius: var(--default-border-radius);
  }

  tbody &:last-child {
    border-bottom-left-radius: var(--default-border-radius);
    border-bottom-right-radius: var(--default-border-radius);
  }
`;

export const Th = styled.th`
  ${tableCellStyles}
`;

export const Td = styled.td`
  ${tableCellStyles}
`;

export default Table;
