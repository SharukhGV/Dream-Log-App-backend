// // function formatDate(dreamdate) {
// //   let formattedDreamDate = `${dreamdate.getUTCFullYear()}-${dreamdate.getUTCMonth()}-${dreamdate.getUTCDay()}`;
// //   return formattedDreamDate;
// // }

// // function formatDateArray(dreamdates) {
// //   let alteredData = dreamdates.map((dream) => {
// //     const newDream = {
// //       name: dream.name,
// //       good_dream: dream.good_dream,
// //       dream_description: dream.dream_description,
// //       topic: dream.topic,
// //       date: formatDate(dream.date),
// //       night: dream.night,
// //       user_id: dream.user_id,
// //     };

// //     return newDream;
// //   });
// // return alteredData
// // }



// //CHATGPT CORRECTION TO MY CODE ABOVE
// // No, the middleware is not correct for formatting the date in the format of YEAR-Month-Day. The issue is with the getUTCMonth() and getUTCDay() methods used to extract the month and day components of the date.

// // The getUTCMonth() method returns a value between 0 and 11, where 0 represents January and 11 represents December. To get the month in a two-digit format, you need to add 1 to the result and use the padStart() method to add a leading zero if necessary.

// // The getUTCDay() method returns a value between 0 and 6, where 0 represents Sunday and 6 represents Saturday. To get the day of the month, you need to use the getUTCDate() method instead.
// //CHATGPT CORRECTION TO MY CODE ABOVE [END OF RESPONSE FROM CHATGPT]





// // function formatDate(dreamdate) {
// //     const year = dreamdate.getUTCFullYear();
// //     const month = (dreamdate.getUTCMonth() + 1).toString().padStart(2, '0');
// //     const day = dreamdate.getUTCDate().toString().padStart(2, '0');
// //     return `${year}-${month}-${day}`;
// //   }
  
// //   function formatDateArray(dreamdates) {

// //     function formatDate(dreamdate) {
// //         const year = dreamdate.getUTCFullYear();
// //         const month = (dreamdate.getUTCMonth() + 1).toString().padStart(2, '0');
// //         const day = dreamdate.getUTCDate().toString().padStart(2, '0');
// //         return `${year}-${month}-${day}`;
// //       }

// //     let alteredData = dreamdates.map((dream) => {
// //       const newDream = {
// //         name: dream.name,
// //         good_dream: dream.good_dream,
// //         dream_description: dream.dream_description,
// //         topic: dream.topic,
// //         date: formatDate(dream.date),
// //         night: dream.night,
// //         user_id: dream.user_id,
// //       };
  
// //       return newDream;
// //     });
  
// //     return alteredData;
// //   }
  

// function formatDate(dreamdate) {
//     const year = dreamdate.slice(0, 4);
//     const month = dreamdate.slice(5, 7);
//     const day = dreamdate.slice(8, 10);
//     return `${year}-${month}-${day}`;
//   }
  
//   function formatDateArray(dreams) {
//     let alteredData = dreams.map((dream) => {
//       const newDream = {
//         name: dream.name,
//         good_dream: dream.good_dream,
//         dream_description: dream.dream_description,
//         topic: dream.topic,
//         date: formatDate(dream.date),
//         night: dream.night,
//         user_id: dream.user_id,
//       };
//       return newDream;
//     });
//     return alteredData;
//   }
  

// function checkDream(dream) {
//     function formatDate(dreamdate) {
//         const year = dreamdate.getUTCFullYear();
//         const month = (dreamdate.getUTCMonth() + 1).toString().padStart(2, '0');
//         const day = dreamdate.getUTCDate().toString().padStart(2, '0');
//         return `${year}-${month}-${day}`;
//       }

//   const newDream = {
//     name: dream.name,
//     good_dream: dream.good_dream,
//     dream_description: dream.dream_description,
//     topic: dream.topic,
//     date: formatDate(dream.date),
//     night: dream.night,
//     user_id: dream.user_id,
//   };
//   return newDream;
// }

// module.exports = {checkDream,formatDateArray};




