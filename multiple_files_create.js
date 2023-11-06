const fs = require("fs");
const path = require("path");

const dir_path = path.join(__dirname, "files");

for (let index = 0; index < 5; index++) {
  fs.writeFileSync(
    `${dir_path}/the_file_${index}.txt`,
    `the file content for file_${index}`
  );
}


fs.readdir(dir_path, (err, files)=>{
    files.forEach((item)=>{
      console.log('the file name in files =', item);
    });
});