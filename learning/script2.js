// const fs = require('node:fs');

// fs.writeFile("xample.txt","helo world learing node ",function(err){
//     if(err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("File written successfully");
//     }
// })


// fs.appendFile("xample.txt","this is message for appending the message using fs.appendFile1 ",function(err){
//     if(err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("File written successfully");
//     }
// })

// fs.rename("xample.txt","rename.txt",function(err){
//   if(err) {
//       console.error("Error writing file:", err);
//   } else {
//       console.log("File written successfully");
//   }
// })

// fs.copyFile("rename.txt","./copy/copied.txt",function(err){
//   if(err) {
//       console.error("Error copying file:", err);
//   } else {
//       console.log("File copied successfully");
//   }
// })

// fs.unlink("rename.txt",function(err){
//   if(err) {
//       console.error("Error deleting file:", err);
//   } else {
//       console.log("File deleted successfully");
//   }
// });

// fs.rmdir("./copy", { recursive: true }, function(err) {
//   if(err) {
//       console.error("Error deleting directory:", err);
//   } else {
//       console.log("Directory deleted successfully");
//   }
// });



const http = require('node:http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
})
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});