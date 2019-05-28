import * as React from 'react';
import DownscreenContext from './DownscreenContext';

type Props = React.HTMLAttributes<HTMLLabelElement>;

const Label = (props: Props) => {
  const { id } = React.useContext(DownscreenContext);

  return <label id={`${id}-label`} htmlFor={`${id}-input`} {...props} />;
};

export default Label;
