const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const btfUrlParams = urlParams.getAll('btf');

const feature = (key: string): boolean =>
  btfUrlParams.includes(key);

export default feature;