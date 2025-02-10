const fs = require("fs");
const crypto = require("crypto");

const path = process.argv[2];
const hash_path = `${path}.sha256`;

fs.readFile(path, (error, data) => {
  if (error) {
    console.error(error);
    process.exit(100);
  }

  const hash = crypto.createHash("sha256").update(data).digest("hex");

  fs.readFile(hash_path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      process.exit(101);
    }

    if (hash != data.trim()) {
      process.exit(102);
    } else {
      console.log("ok");
      process.exit(0);
    }
  });
});
