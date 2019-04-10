import { mapObjIndexed, or } from 'ramda';

export const mergeValues = (initial, settings) =>
  mapObjIndexed((setting, name) => or(settings[name], setting), initial);
