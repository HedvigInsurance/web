import utm from '@segment/utm-params';
import Cookies from 'js-cookie';

const { NODE_ENV = 'development' } = process.env;

export const onClientEntry = () => {
  const searchParams = utm.strict(window.location.search);
  // 7 days is a standard attribution window for app installs
  const EXPIRY_DAYS = 7;
  const existingParams = Cookies.getJSON('utm-params') || {};
  Object.keys(searchParams).forEach((key) => {
    existingParams[key] = searchParams[key];
  });
  const secure = NODE_ENV !== 'development';
  Cookies.set('utm-params', existingParams, { expires: EXPIRY_DAYS, secure });
};
