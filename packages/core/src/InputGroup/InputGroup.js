import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function InputGroup({ children, label }) {
  function renderInput(child) {
    const { error, className, ...inputProps } = child.props;
    if (!label) {
      return (
        <>
          {error ? <div className="cb-InputGroup-error">{error}</div> : null}
          <input className={classNames('cb-InputGroup__value', className)} {...inputProps} />
        </>
      );
    }
    return (
      <tr>
        <td>{inputProps.label}</td>
        <td>
          <input className={className} {...inputProps} />
        </td>
        <td>{error ? <span className="cb-InputGroup-error">{error}</span> : null}</td>
      </tr>
    );
  }

  function renderChildren() {
    return React.Children.map(children, renderInput);
  }

  return (
    <div className="cb-InputGroup">
      <label className="cb-InputGroup__label">{label}</label>
      {React.Children.count(children) === 1 ? (
        renderChildren()
      ) : (
        <table className="cb-InputGroup__value">
          <tbody>{renderChildren()}</tbody>
        </table>
      )}
    </div>
  );
}

InputGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.element)]),
  label: PropTypes.string,
};

export default InputGroup;
