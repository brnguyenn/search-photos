import { calculatePageCount } from "./photos";

test.each`
  totalCount | itemsPerPage | expected
  ${10}      | ${5}         | ${2}
  ${0}       | ${5}         | ${0}
  ${11}      | ${5}         | ${3}
  ${7}       | ${0}         | ${0}
`(
  "returns $expected when total is $totalCount and items per page is $itemsPerPage",
  ({ totalCount, itemsPerPage, expected }) => {
    expect(calculatePageCount(totalCount, itemsPerPage)).toBe(expected);
  }
);
