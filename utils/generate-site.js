
const fs = require('fs');

const writeFile = filecontent => {
  return new Promise((resolve, reject) => {
		fs.writeFile('./dist/index.html', filecontent, err => {
			if (err) {
				reject(err);
				return;
			}

			resolve({
				ok: true,
				message: 'File Created!'
			});
		})
  });
}
//writeFile();
module.exports = writeFile;