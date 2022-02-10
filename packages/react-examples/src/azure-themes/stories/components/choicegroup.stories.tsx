/* eslint-disable @fluentui/max-len */
import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';

const options: IChoiceGroupOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C', disabled: true },
  { key: 'D', text: 'Option D' },
];

export interface IChoiceGroupBasicExampleProps {
  id?: string;
}

export const ChoiceGroupBasicExample: React.FunctionComponent<IChoiceGroupBasicExampleProps> = props => {
  const id = props.id;
  return (
    <ChoiceGroup
      id={id}
      defaultSelectedKey="B"
      options={options}
      onChange={_onChange}
      label="Pick one"
      required={true}
    />
  );
};

function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
  console.dir(option);
}
