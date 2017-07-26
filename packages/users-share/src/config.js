const domain = 'mydomain.com'
const config_url = {
  rootUrl: `${domain}`,
  apiUrl: `${domain}/api`,
  // apiUrl:'http://192.168.2.13:3001'
};


let BUILD = 'PROD';
const IS_WEBAPP = false;

try {
  const DEBUG = (process && process.env && process.env.debug === true)
  const DEV = (process && process.env && process.env.dev === true)
  const PROD = (process && process.env && process.env.prod === true)
  const TEST = (process && process.env && process.env.NODE_ENV === 'test');

  const IS_WEBAPP = (process && process.env && process.env.isWebApp === true);

  switch (true) {
    case (DEBUG === true) :
      BUILD = 'DEBUG';
      break;
    case (DEV === true) :
      BUILD = 'DEV';
      break;
    case (TEST === true) :
      BUILD = 'TEST';
      break;
  }
} catch (e) {
  // @TODO
}


try {
  if (__DEV__) {
    BUILD = 'DEV';
  }
} catch (e) {
  // @TODO
}

const out = {
  ...config_url,
  BUILD,
  IS_WEBAPP
}

console.log('UUUUUUUUUUUUUUUUUU appConfig: out: ', out)

export default out;
// http POST http://192.168.2.13:3001/sessions/create username=apollo password=password

