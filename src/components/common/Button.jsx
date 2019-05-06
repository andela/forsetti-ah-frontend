import React from 'react';
import { Button } from 'reactstrap';

const ButtonComponent = ({
  role, onClick, type, disabled, className, children
}) => (
  <Button
    type={type}
    role={role}
    disabled={disabled}
    onClick={onClick}
    className={className}
  >
    {children}
  </Button>
);

export default ButtonComponent;
