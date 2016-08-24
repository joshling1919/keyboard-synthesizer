import React from 'react';

const noteKey = ({tone}) => (
  <li className="key" id={tone} key={tone}>{tone}</li>
);

export default noteKey;
