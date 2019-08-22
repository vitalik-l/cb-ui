import React from 'react';
import classNames from 'classnames';

export default function InputGroup({children, ...props}) {
    function renderInput(child) {
        const {label, error, className, ...inputProps} = child.props;
        if (!label) {
            return (
                <React.Fragment>
                    {error ? <div className="cb-InputGroup-error">{error}</div> : null}
                    <input
                        className={classNames('cb-InputGroup__value', className)}
                        {...inputProps}
                    />
                </React.Fragment>
            );
        } else {
            return (
                <tr>
                    <td>{label}</td>
                    <td>
                        <input
                            {...inputProps}
                        />
                    </td>
                    <td>
                        {error ? <span className="cb-InputGroup-error">{error}</span> : null}
                    </td>
                </tr>
            );
        }
    }

    function renderChildren() {
        return React.Children.map(children, renderInput);
    }

    return (
        <div className="cb-InputGroup">
            <label className="cb-InputGroup__label">{props.label}</label>
            {React.Children.count(children) === 1 ?
                renderChildren()
                :
                <table className="cb-InputGroup__value">
                    <tbody>
                    {renderChildren()}
                    </tbody>
                </table>
            }
        </div>
    );
}