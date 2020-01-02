import React, { useEffect, useContext } from 'react';
import { TinyLine, TinyLineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface TinyLineConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<TinyLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechTinyLine: React.FC<TinyLineConfig> = (props: TinyLineConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<TinyLine, TinyLineConfig>(TinyLine, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

export default (props: TinyLineConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechTinyLine {...config} {...props} />
    </ErrorBoundary>
  );
};
