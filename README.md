# validate-input
node module to validate incoming params exist

usage:
fields = ['%param1', '%param2%'];
validParams = validater(payload, fields);

if (!validParams) {
  // do something
}
