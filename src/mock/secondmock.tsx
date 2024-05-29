export interface secondTableProps {
  id?: number;
  document?: string;
  format?: string;
  status?: string;
  
timestampUploaded?: string;
  
}

export type mainSecondTableProps = secondTableProps[];

// const SecondTable: mainSecondTableProps = [
//   {
//     id: 1,
//     document: "Valid Driver’s Licence",
//     format: "Gutkowski, Mann and Morar",
//     status: "Decline",
//     date: "Apr 12, 2023 | 09:32AM",
//   },
//   {
//     id: 2,
//     document: "Car Ownership Certificate",
//     format: "Stehr and Sons",
//     status: "Approved",
//     date: "1Apr 12, 2023 | 09:32AM",
//   },
//   {
//     id: 3,
//     document: "Valid Driver’s Licence",
//     format: "Ankunding and Sons",
//     status: "Approved",
//     date: "12Apr 12, 2023 | 09:32AM",
//   },
//   {
//     id: 4,
//     document: "Car Ownership Certificate",
//     format: "Mraz, Sporer and Olson",
//     status: "Approved",
//     date: "7Apr 12, 2023 | 09:32AM",
//   },
//   {
//     id: 5,
//     document: "Road Worthiness Certificate",
//     format: "Rolfson Group",
//     status: "Approved",
//     date: "2Apr 12, 2023 | 09:32AM",
//   },
// ];

// export { SecondTable };
