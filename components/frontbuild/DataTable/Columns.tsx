// export interface ColumnMeta {
//   columnClasses: string;
// }

// export const mulliganColumns: ColumnDef<CardMatchResult>[] = [
//   {
//     accessorKey: "cardName",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Card Name" />
//     ),
//     cell: ({ row }) => {
//       return (
//         <div className="flex space-x-2">
//           <span className="max-w-[500px] truncate text-xs sm:text-sm">
//             {row.getValue("cardName")}
//           </span>
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "totalGames",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Total Games" />
//     ),
//     cell: ({ row }) => {
//       return (
//         <div className="flex space-x-2">
//           <span className="max-w-[500px] truncate text-xs sm:text-sm">
//             {row.getValue("totalGames")}
//           </span>
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "wins",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Wins" />
//     ),
//     cell: ({ row }) => {
//       return (
//         <div className="flex space-x-2">
//           <span className="max-w-[500px] truncate text-xs sm:text-sm">
//             {row.getValue("wins")}
//           </span>
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "winrate",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Win Rate" />
//     ),
//     cell: ({ row }) => {
//       return (
//         <div className="flex space-x-2">
//           <span className="max-w-[500px] truncate text-xs sm:text-sm">
//             {row.getValue("winrate")}%
//           </span>
//         </div>
//       );
//     },
//   },
// ];
