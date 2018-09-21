import * as React from 'react';
import Img from 'gatsby-image';

interface Props {
  image: any; // TODO type this better?
  sizes: object; // TODO type this better?
}

const MediaLogos: React.SFC<Props> = (props) => (
  <div className="Container">
    {props.image && <Img className="Home-media" sizes={props.sizes} alt="" />}
  </div>
);

export { MediaLogos };
