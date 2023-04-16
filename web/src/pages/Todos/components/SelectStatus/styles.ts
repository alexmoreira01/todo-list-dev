
import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';

export const SelectTrigger = styled(Select.SelectTrigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 35px;

  font-size: 13px;
  line-height: 1;

  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 10px;
  border-radius: 4px;
  padding: 0px 15px;
  gap: 5px;

  background-color: white;
  color: ${(props) => props.theme["gray-300"]};
  background: ${(props) => props.theme["gray-600"]};

  cursor: pointer;

`;

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background: ${(props) => props.theme["gray-600"]};

  border-radius: 6px;
  box-shadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)';
`;
  
export const SelectViewport = styled(Select.Viewport)`
  padding: 5;
`; 

export const SelectIcon = styled(Select.SelectIcon)`
  color: ${(props) => props.theme["blue-300"]};
`;

export const StyledItem = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  color: ${(props) => props.theme["gray-200"]};
  border-radius: 3px;
  display: 'flex';
  align-items: center;

  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: ${(props) => props.theme["blue-300"]};
    pointer-events: none;
  }
 
  &[data-highlighted] {
    outline: none;
  } 

`;

export const SelectLabel = styled(Select.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: ${(props) => props.theme["gray-100"]};
`;


export const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;