import {
  groupBy,
  getSectionListDataFromSectionKey,
} from '../src/Utils/helperFunctions';

test('Test groupBy', () => {
  expect(
    groupBy(
      [
        {id: 1, type: 'A', name: 'q1'},
        {id: 2, type: 'A', name: 'q2'},
        {id: 3, type: 'B', name: 'q3'},
        {id: 4, type: 'B', name: 'q4'},
        {id: 5, type: 'C', name: 'q5'},
      ],
      'type',
    ),
  ).toStrictEqual({
    A: [
      {id: 1, type: 'A', name: 'q1'},
      {id: 2, type: 'A', name: 'q2'},
    ],
    B: [
      {id: 3, type: 'B', name: 'q3'},
      {id: 4, type: 'B', name: 'q4'},
    ],
    C: [{id: 5, type: 'C', name: 'q5'}],
  });
});

test('Test getSectionListDataFromSectionKey', () => {
  expect(
    getSectionListDataFromSectionKey(
      [
        {id: 1, type: 'A', name: 'q1'},
        {id: 2, type: 'A', name: 'q2'},
        {id: 3, type: 'B', name: 'q3'},
        {id: 4, type: 'B', name: 'q4'},
        {id: 5, type: 'C', name: 'q5'},
      ],
      'type',
    ),
  ).toStrictEqual([
    {
      title: 'A',
      data: [
        {id: 1, type: 'A', name: 'q1'},
        {id: 2, type: 'A', name: 'q2'},
      ],
    },
    {
      title: 'B',
      data: [
        {id: 3, type: 'B', name: 'q3'},
        {id: 4, type: 'B', name: 'q4'},
      ],
    },
    {
      title: 'C',
      data: [{id: 5, type: 'C', name: 'q5'}],
    },
  ]);
});
