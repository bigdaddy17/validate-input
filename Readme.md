# validate-input
node module to validate incoming params exist

install:
npm install validateinput

usage:
fields = ['%param1', '%param2%'];
validParams = validater(payload, fields);

if (!validParams) {
  // do something
}
