import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon } from '@radix-ui/react-icons';
import { SelectContent, SelectLabel, SelectViewport, StyledItem, StyledItemIndicator } from './styles';

export function SelectStatus() {

  const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <StyledItemIndicator>
          <CheckIcon />
        </StyledItemIndicator>
      </StyledItem>
    );
  });

  return (
    <Select.Portal>
      <SelectContent>

        <SelectViewport>
          <Select.Group>
            <SelectLabel>Tarefas</SelectLabel>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="completed">Completas</SelectItem>
            <SelectItem value="pending">Pendentes</SelectItem>
          </Select.Group>

        </SelectViewport>

      </SelectContent>
    </Select.Portal>
  )
}