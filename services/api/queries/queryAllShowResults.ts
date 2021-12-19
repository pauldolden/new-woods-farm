export const queryAllShowResults = `
query {
    showResultCollection {
   items {
     sheepName
     category
     showName
     date
     place
   }
 }
}
`;
