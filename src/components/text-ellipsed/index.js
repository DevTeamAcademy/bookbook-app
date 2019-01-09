import React from 'react';
// global
import * as H from '../../helpers';
// components text
import { Text } from './ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const TextEllipsed = (props: Object) => {
  const { title, children } = props;
  if (H.isNotNil(title)) {
    return (
      <Text {...props} title={title}>
        {children}
      </Text>
    );
  }
  return <Text {...props}>{children}</Text>;
};

export default TextEllipsed;
