import * as React from 'react';

const useEffectAfterMount = (cb: () => void, deps: React.DependencyList) => {
  const justMounted = React.useRef(true);

  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }

    justMounted.current = false;
  }, deps);
};

export default useEffectAfterMount;
