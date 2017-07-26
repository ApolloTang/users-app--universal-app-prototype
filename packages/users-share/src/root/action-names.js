import device from 'share/src/root/device-rn/action-names';

import Symbol from 'es6-symbol';

function duplicateEventNameError(eventName) {
  throw new Error(`Event ${eventName} already exists`);
}

const actionName_symbols = [
  ...device,
].reduce((acc, eventName) => ({
  ...acc,
  [`${eventName}`]: acc[eventName] ? duplicateEventNameError(eventName) : Symbol.for(`${eventName}`),
}), {});

export default actionName_symbols;
