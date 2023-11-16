const fs = require("fs");
const path = require("path");

const dir_path = path.join(__dirname, "crud");
const file_path = `${dir_path}/new_file_1.txt`;
fs.writeFileSync(file_path, "the first reading file with node");

// fs.readFile(file_path, 'utf-8' , (err, item) => {
//   console.log('content of the file ===> ', item);
// });

// fs.appendFile(file_path, " the next updating the file with node", (err) => {
//   if (!err) {
//     console.log("File is updated");
//   }
// });

fs.rename(file_path, `${dir_path}/new_file_1_renamed.txt`, (err) => {
  if (!err) {
    console.log("File is Renamed");
  }
});
