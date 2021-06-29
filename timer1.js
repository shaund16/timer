//these are the arguments passed in command line
const args = process.argv.slice(2);


for (const num of args) {
  if (num > -1 && !isNaN(num)) {
    setTimeout(() => {
      process.stdout.write('.');
    }, num * 1000);
  }
}
