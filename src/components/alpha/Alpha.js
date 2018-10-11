import React from 'react'
import reactCSS from 'reactcss'

import { ColorWrap, Alpha } from '../common'
import AlphaPointer from './AlphaPointer'

export const AlphaPicker = React.forwardRef(
  (
    {
      rgb,
      hsl,
      width,
      height,
      onChange,
      direction,
      style,
      renderers,
      pointer,
      className,
    },
    ref
  ) => {
    const styles = reactCSS({
      default: {
        picker: {
          position: 'relative',
          width,
          height,
        },
        alpha: {
          radius: '2px',
          style,
        },
      },
    })

    return (
      <div
        style={ styles.picker }
        className={ `alpha-picker ${ className }` }
        ref={ ref }
      >
        <Alpha
          { ...styles.alpha }
          rgb={ rgb }
          hsl={ hsl }
          pointer={ pointer }
          renderers={ renderers }
          onChange={ onChange }
          direction={ direction }
        />
      </div>
    )
  }
)

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: AlphaPointer,
  ref: null,
  className: '',
}

export default ColorWrap(AlphaPicker)
