import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '../ButtonBase';
import { Input } from '../Input';
import { useClasses } from '../hooks/useClasses';
import { useControlled } from '../hooks/useControlled';
import { Option } from './Option';
import { Options } from './Options';
import baseStyles from './CoreSelect.module.scss';

type ClassesType = {
  root?: string;
  disabled?: string;
  invalid?: string;
  fullWidth?: string;
  autoWidth?: string;
  value?: string;
  select?: string;
  icon?: string;
  editable?: string;
  button?: string;
  inputRoot?: string;
  input?: string;
  options?: string;
  option?: string;
  selected?: string;
  open?: string;
};

export type SelectProps = {
  className?: string;
  invalid?: boolean;
  fullWidth?: boolean;
  autoWidth?: boolean;
  icon?: any;
  format?: any;
  disabled?: boolean;
  native?: boolean;
  InputComponent?: React.ElementType;
  inputProps?: any;
  inputRef?: any;
  editable?: boolean;
  classes?: ClassesType;
  styles?: ClassesType;
  onToggle?: (state: boolean) => void;
  portalTarget?: any;
  disablePortal?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select: React.FC<SelectProps> = React.forwardRef((props, ref: any) => {
  const {
    className,
    disabled,
    invalid,
    fullWidth,
    autoWidth,
    value: valueProp,
    icon,
    defaultValue = '',
    onChange,
    format,
    classes: classesProp,
    native = false,
    InputComponent = Input,
    children,
    inputProps,
    inputRef,
    editable,
    onToggle,
    portalTarget,
    disablePortal,
    styles,
    name,
    ...restProps
  } = props;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select',
  });
  const [anchorEl, setAnchorEl] = React.useState();
  const classes: ClassesType = useClasses(baseStyles, styles ?? classesProp);
  const inputClasses = React.useMemo(
    () => ({
      root: classes.inputRoot,
      input: classes.input,
    }),
    [classes],
  );

  const handleChange = React.useCallback(
    (event: any) => {
      setValue(event.target.value);
      if (onChange) {
        onChange(event);
      }
    },
    [onChange, setValue],
  );

  const toggleOptions = React.useCallback(
    (event?: any) => {
      event?.stopPropagation();
      const newAnchorEl = anchorEl ? null : event?.target;
      setAnchorEl(newAnchorEl);
      if (onToggle) {
        onToggle(!!newAnchorEl);
      }
    },
    [anchorEl, onToggle],
  );

  const onSelectOption = React.useCallback(
    (value: number | string) => {
      handleChange({ target: { value, name } });
      toggleOptions();
    },
    [toggleOptions, handleChange],
  );

  const open = !!anchorEl;

  return (
    <div
      className={clsx(
        className,
        classes.root,
        editable && classes.editable,
        disabled && classes.disabled,
        invalid && classes.invalid,
        fullWidth && classes.fullWidth,
        autoWidth && classes.autoWidth,
        open && classes.open,
      )}
      ref={ref}
    >
      {native ? (
        <select
          className={classes.select}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          children={children}
          {...restProps}
        />
      ) : (
        <React.Fragment>
          <InputComponent
            value={value}
            onChange={handleChange}
            inputRef={inputRef}
            classes={inputClasses}
            {...inputProps}
            {...restProps}
            type={undefined}
          />
          <ButtonBase className={classes.button} onMouseDown={toggleOptions} />
          <Options
            anchorEl={anchorEl}
            open={open}
            onClose={toggleOptions}
            className={classes.options}
            portalTarget={disablePortal ? false : portalTarget}
          >
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) {
                return null;
              }
              const {
                className: childClassName,
                onClick: childClick,
                value: childValue,
                ...childProps
              } = child.props;
              const selected = childValue === value;

              const handleClick = (event: any) => {
                onSelectOption(childValue === undefined ? childProps.children : childValue);
                if (childClick) {
                  childClick(event);
                }
              };

              const props = {
                onClick: handleClick,
                className: clsx(classes.option, childClassName, selected && classes.selected),
                selected,
                ...childProps,
              };

              if (child.type === 'option') return <Option {...props} />;

              return React.cloneElement(child, props);
            })}
          </Options>
        </React.Fragment>
      )}
      {autoWidth && (
        <div className={classes.value}>{typeof format === 'function' ? format(value) : value}</div>
      )}
      {React.cloneElement(icon, {
        className: classes.icon,
        'aria-hidden': 'true',
      })}
    </div>
  );
});

Select.defaultProps = {
  icon: (
    <svg focusable="false" viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  ),
  native: false,
};
