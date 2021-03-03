import React from 'react';
import clsx from 'clsx';

// local files
import { ownerDocument } from './utils';
import { useIsFocusVisible } from '../hooks/useIsFocusVisible';
import { useForkRef } from '../utils/useForkRef';
import { ValueLabel } from './ValueLabel';
import { useControlled } from '../hooks/useControlled';
import { useEventCallback } from '../hooks/useEventCallback';
import { useClasses } from '../hooks/useClasses';
import { classOption } from '../utils/classes';
import coreStyles from './CoreSlider.module.scss';

export type SliderProps = {
  className?: string;
};

function asc(a: number, b: number) {
  return a - b;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(min, value), max);
}

function findClosest(values: any, currentValue: any) {
  const { index: closestIndex } = values.reduce((acc: any, value: any, index: any) => {
    const distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index,
      };
    }

    return acc;
  }, null);
  return closestIndex;
}

function trackFinger(event: any, touchId: any) {
  if (touchId.current !== undefined && event.changedTouches) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY,
        };
      }
    }

    return false;
  }

  return {
    x: event.clientX,
    y: event.clientY,
  };
}

function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min);
}

function percentToValue(percent: number, min: number, max: number) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num: number) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value: number, step: number, min: number) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex({ values, source, newValue, index }: any) {
  // Performance shortcut
  if (source[index] === newValue) {
    return source;
  }

  const output = values.slice();
  output[index] = newValue;
  return output;
}

function focusThumb({ sliderRef, activeIndex, setActive }: any) {
  const doc = ownerDocument(sliderRef.current);
  if (
    !sliderRef.current.contains(doc.activeElement) ||
    Number(doc.activeElement.getAttribute('data-index')) !== activeIndex
  ) {
    sliderRef.current.querySelector(`[role="slider"][data-index="${activeIndex}"]`).focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

const axisProps: any = {
  horizontal: {
    offset: (percent: number) => ({ left: `${percent}%` }),
    leap: (percent: number) => ({ width: `${percent}%` }),
  },
  'horizontal-reverse': {
    offset: (percent: number) => ({ right: `${percent}%` }),
    leap: (percent: number) => ({ width: `${percent}%` }),
  },
  vertical: {
    offset: (percent: number) => ({ bottom: `${percent}%` }),
    leap: (percent: number) => ({ height: `${percent}%` }),
  },
};

const Identity = (x: any) => x;

// TODO: remove support for Safari < 13.
// https://caniuse.com/#search=touch-action
//
// Safari, on iOS, supports touch action since v13.
// Over 80% of the iOS phones are compatible
// in August 2020.
let cachedSupportsTouchActionNone: any;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === undefined) {
    const element = document.createElement('div');
    element.style.touchAction = 'none';
    document.body.appendChild(element);
    cachedSupportsTouchActionNone = window.getComputedStyle(element).touchAction === 'none';
    element.parentElement?.removeChild(element);
  }
  return cachedSupportsTouchActionNone;
}

export const Slider = React.forwardRef<any, any>((props, ref) => {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'aria-valuetext': ariaValuetext,
    className,
    classes: classesProp,
    classNamePrefix,
    color = 'primary',
    component: Component = 'span',
    defaultValue,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    onMouseDown,
    orientation = 'horizontal',
    scale = Identity,
    step = 1,
    ThumbComponent = 'span',
    track = 'normal',
    value: valueProp,
    ValueLabelComponent = ValueLabel,
    valueLabelDisplay = 'off',
    valueLabelFormat = Identity,
    ...other
  } = props;
  const touchId = React.useRef();
  // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transfered when inversing a range slider.
  const [active, setActive] = React.useState(-1);
  const [open, setOpen] = React.useState(-1);

  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Slider',
  });

  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map((value: number) => clamp(value, min, max));
  const marks =
    marksProp && step !== null
      ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
          value: min + step * index,
        }))
      : marksProp || [];

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef,
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React.useState(-1);

  const sliderRef = React.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);

  const handleFocus = useEventCallback((event: any) => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current) {
      setFocusVisible(index);
    }
    setOpen(index);
  });
  const handleBlur = useEventCallback((event: any) => {
    handleBlurVisible(event);
    if (!isFocusVisibleRef.current) {
      setFocusVisible(-1);
    }
    setOpen(-1);
  });
  const handleMouseOver = useEventCallback((event: any) => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  });
  const handleMouseLeave = useEventCallback(() => {
    setOpen(-1);
  });

  React.useLayoutEffect(() => {
    if (disabled && (sliderRef.current as any).contains(document.activeElement)) {
      // This is necessary because Firefox and Safari will keep focus
      // on a disabled element:
      // https://codesandbox.io/s/mui-pr-22247-forked-h151h?file=/src/App.js
      if (document.activeElement) {
        (document.activeElement as any).blur();
      }
    }
  }, [disabled]);

  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusVisible !== -1) {
    setFocusVisible(-1);
  }

  const isRtl = false;

  const handleKeyDown = useEventCallback((event: any) => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    const value = values[index];
    const tenPercents = (max - min) / 10;
    const marksValues = marks.map((mark: any) => mark.value);
    const marksIndex = marksValues.indexOf(value);
    let newValue;
    const increaseKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
    const decreaseKey = isRtl ? 'ArrowRight' : 'ArrowLeft';

    switch (event.key) {
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
      case 'PageUp':
        if (step) {
          newValue = value + tenPercents;
        }
        break;
      case 'PageDown':
        if (step) {
          newValue = value - tenPercents;
        }
        break;
      case increaseKey:
      case 'ArrowUp':
        if (step) {
          newValue = value + step;
        } else {
          newValue = marksValues[marksIndex + 1] || marksValues[marksValues.length - 1];
        }
        break;
      case decreaseKey:
      case 'ArrowDown':
        if (step) {
          newValue = value - step;
        } else {
          newValue = marksValues[marksIndex - 1] || marksValues[0];
        }
        break;
      default:
        return;
    }

    // Prevent scroll of the page
    event.preventDefault();

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    }

    newValue = clamp(newValue, min, max);

    if (range) {
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        source: valueDerived,
        newValue,
        index,
      }).sort(asc);
      focusThumb({ sliderRef, activeIndex: newValue.indexOf(previousValue) });
    }

    setValueState(newValue);
    setFocusVisible(index);

    if (onChange) {
      onChange(newValue);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  });

  const previousIndex = React.useRef<number>();
  let axis = orientation;
  if (isRtl && orientation === 'horizontal') {
    axis += '-reverse';
  }

  const getFingerNewValue = ({ finger, move = false, values: values2, source }: any) => {
    const { current: slider } = sliderRef as any;
    const { width, height, bottom, left } = slider.getBoundingClientRect();
    let percent;

    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }

    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }

    let newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const marksValues = marks.map((mark: any) => mark.value);
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }

    newValue = clamp(newValue, min, max);
    let activeIndex = 0;

    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current || 0;
      }

      const previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        source,
        newValue,
        index: activeIndex,
      }).sort(asc);
      activeIndex = newValue.indexOf(previousValue);
      previousIndex.current = activeIndex;
    }

    return { newValue, activeIndex };
  };

  const handleTouchMove = useEventCallback((nativeEvent: any) => {
    const finger = trackFinger(nativeEvent, touchId);

    if (!finger) {
      return;
    }

    // Cancel move in case some other element consumed a mouseup event and it was not fired.
    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleTouchEnd(nativeEvent);
      return;
    }

    const { newValue, activeIndex } = getFingerNewValue({
      finger,
      move: true,
      values,
      source: valueDerived,
    });

    focusThumb({ sliderRef, activeIndex, setActive });
    setValueState(newValue);

    if (onChange) {
      onChange(newValue);
    }
  });

  const handleTouchEnd = useEventCallback((nativeEvent: any) => {
    const finger = trackFinger(nativeEvent, touchId);

    if (!finger) {
      return;
    }

    const { newValue } = getFingerNewValue({ finger, values, source: valueDerived });

    setActive(-1);
    if (nativeEvent.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }

    touchId.current = undefined;

    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  });

  const handleTouchStart = useEventCallback((event: any) => {
    // If touch-action: none; is not supported we need to prevent the scroll manually.
    if (!doesSupportTouchActionNone()) {
      event.preventDefault();
    }

    const touch = event.changedTouches[0];
    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(event, touchId);
    const { newValue, activeIndex } = getFingerNewValue({ finger, values, source: valueDerived });
    focusThumb({ sliderRef, activeIndex, setActive });

    setValueState(newValue);

    if (onChange) {
      onChange(newValue);
    }

    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });

  React.useEffect(() => {
    const { current: slider } = sliderRef as any;
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: doesSupportTouchActionNone(),
    });

    const doc = ownerDocument(slider);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart, {
        passive: doesSupportTouchActionNone(),
      });

      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchEnd, handleTouchMove, handleTouchStart]);

  React.useEffect(() => {
    if (disabled) {
      const doc = ownerDocument(sliderRef.current);
      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    }
  }, [disabled, handleTouchEnd, handleTouchMove]);

  const handleMouseDown = useEventCallback((event: any) => {
    if (onMouseDown) {
      onMouseDown(event);
    }

    event.preventDefault();
    const finger = trackFinger(event, touchId);
    const { newValue, activeIndex } = getFingerNewValue({ finger, values, source: valueDerived });
    focusThumb({ sliderRef, activeIndex, setActive });

    setValueState(newValue);

    if (onChange) {
      onChange(newValue);
    }

    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  });

  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
  const trackStyle = {
    ...axisProps[axis].offset(trackOffset),
    ...axisProps[axis].leap(trackLeap),
  };

  const classes = useClasses(
    {
      wrap: '-wrap',
      /* Styles applied to the root element if `marks` is provided with at least one label. */
      marked: '_marked',
      /* Pseudo-class applied to the root element if `orientation="vertical"`. */
      vertical: '_vertical',
      /* Pseudo-class applied to the root and thumb element if `disabled={true}`. */
      disabled: '_disabled',
      /* Styles applied to the rail element. */
      rail: '__rail',
      /* Styles applied to the track element. */
      track: '__track',
      /* Styles applied to the track element if `track={false}`. */
      trackFalse: '_track_false',
      /* Styles applied to the track element if `track="inverted"`. */
      trackInverted: '_track_inverted',
      /* Styles applied to the thumb element. */
      thumb: '-thumb',
      thumbColor: '-thumb_color',
      /* Pseudo-class applied to the thumb element if it's active. */
      thumbActive: '-thumb_active',
      /* Pseudo-class applied to the thumb element if keyboard focused. */
      thumbFocus: '-thumb_focus',
      /* Styles applied to the thumb label element. */
      valueLabel: '-valueLabel',
      /* Styles applied to the mark element. */
      mark: '-mark',
      /* Styles applied to the mark element if active (depending on the value). */
      markActive: '-mark_active',
      /* Styles applied to the mark label element. */
      markLabel: '-mark__label',
      /* Styles applied to the mark label element if active (depending on the value). */
      markLabelActive: '-mark__label_active',
      color: '_color',
    },
    props,
  );

  return (
    <div className={classes.wrap}>
      <Component
        ref={handleRef}
        className={clsx(
          coreStyles.root,
          classes.root,
          classOption(classes.color, color),
          {
            [coreStyles.disabled]: disabled,
            [classes.disabled]: disabled,
            [classes.marked]: marks.length > 0 && marks.some((mark: any) => mark.label),
            [classes.vertical]: orientation === 'vertical',
            [classes.trackInverted]: track === 'inverted',
            [classes.trackFalse]: track === false,
          },
          className,
        )}
        onMouseDown={handleMouseDown}
        {...other}
      >
        <span className={clsx(coreStyles.rail, classes.rail)} />
        <span className={clsx(coreStyles.track, classes.track)} style={trackStyle} />
        <input value={values.join(',')} name={name} type="hidden" />
        {marks.map((mark: any, index: number) => {
          const percent = valueToPercent(mark.value, min, max);
          const style = axisProps[axis].offset(percent);

          let markActive;
          if (track === false) {
            markActive = values.indexOf(mark.value) !== -1;
          } else {
            markActive =
              (track === 'normal' &&
                (range
                  ? mark.value >= values[0] && mark.value <= values[values.length - 1]
                  : mark.value <= values[0])) ||
              (track === 'inverted' &&
                (range
                  ? mark.value <= values[0] || mark.value >= values[values.length - 1]
                  : mark.value >= values[0]));
          }

          return (
            <React.Fragment key={mark.value}>
              <span
                style={style}
                data-index={index}
                className={clsx(classes.mark, {
                  [classes.markActive]: markActive,
                })}
              />
              {mark.label != null ? (
                <span
                  aria-hidden
                  data-index={index}
                  style={style}
                  className={clsx(classes.markLabel, {
                    [classes.markLabelActive]: markActive,
                  })}
                >
                  {mark.label}
                </span>
              ) : null}
            </React.Fragment>
          );
        })}
        {values.map((value: any, index: number) => {
          const percent = valueToPercent(value, min, max);
          const style = axisProps[axis].offset(percent);

          return (
            <ValueLabelComponent
              key={index}
              valueLabelFormat={valueLabelFormat}
              valueLabelDisplay={valueLabelDisplay}
              className={classes.valueLabel}
              value={
                typeof valueLabelFormat === 'function'
                  ? valueLabelFormat(scale(value), index)
                  : valueLabelFormat
              }
              index={index}
              open={open === index || active === index || valueLabelDisplay === 'on'}
              disabled={disabled}
            >
              <ThumbComponent
                className={clsx(
                  coreStyles.thumb,
                  classes.thumb,
                  classOption(classes.thumbColor, color),
                  {
                    [classes.thumbActive]: active === index,
                    [classes.disabled]: disabled,
                    [classes.thumbFocus]: focusVisible === index,
                  },
                )}
                tabIndex={disabled ? null : 0}
                role="slider"
                style={style}
                data-index={index}
                aria-label={getAriaLabel ? getAriaLabel(index) : ariaLabel}
                aria-labelledby={ariaLabelledby}
                aria-orientation={orientation}
                aria-valuemax={scale(max)}
                aria-valuemin={scale(min)}
                aria-valuenow={scale(value)}
                aria-valuetext={
                  getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext
                }
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              />
            </ValueLabelComponent>
          );
        })}
      </Component>
    </div>
  );
});

Slider.displayName = 'Slider';

Slider.defaultProps = {
  ThumbComponent: 'div',
};
