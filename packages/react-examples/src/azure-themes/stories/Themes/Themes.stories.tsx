import * as React from 'react';
import { TextField, Stack, Checkbox, SearchBox, Link, Label, Text, ThemeProvider } from '@fluentui/react';
import {
  AzureThemeLight,
  AzureThemeDark,
  AzureThemeHighContrastLight,
  AzureThemeHighContrastDark,
} from '@fluentui/azure-themes';
import { DefaultButton, CompoundButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { ButtonCommandBarExample } from '../components/commandBarButton.stories';
import { ButtonSplitExample } from '../components/splitButton.stories';
import { ButtonIconExample } from '../components/iconButton.stories';
import { ButtonIconWithTooltipExample } from '../components/iconTooltip.stories';
import { ButtonContextualMenuExample } from '../components/contextualMenu.stories';
import { ButtonActionExample } from '../components/actionButton.stories';
import { ButtonToggleExample } from '../components/buttonToggle.stories';
import { CalloutBasicExample } from '../components/callout.stories';
import { ActivityItemBasicExample } from '../components/activityitem.stories';
import { ChoiceGroupBasicExample } from '../components/choicegroup.stories';
import { ToggleBasicExample } from '../components/toggle.stories';
import { ColorPickerBasicExample } from '../components/colorpicker.stories';
import { ComboBoxBasicExample } from '../components/comboBox.stories';
import { ContextualMenuDefaultExample } from '../components/ContextMenu.stories';
import { DropdownBasicExample } from '../components/dropdown.stories';
import { CommandBarBasicExample } from '../components/commandBar.stories';
import { TagPickerBasicExample } from '../components/tags.stories';
import { DetailsListCompactExample } from '../components/detailsList.stories';
import { DatePickerBoundedExample } from '../components/dateBoundary.stories';
import { PivotBasicExample } from '../components/Pivots.stories';
import { TeachingBubbleBasicExample } from '../components/TeachingBubble.stories';
import { MessageBarBasicExample } from '../components/messageBar.stories';
import { TooltipBasicExample } from '../components/tooltip.stories';
import { SliderBasicExample } from '../components/slider.stories';

const Example = () => (
  <Stack gap={8} horizontalAlign="center" style={{ maxWidth: 1000 }}>
    <Stack gap={8} padding={32} horizontalAlign="center">
      <Text>13px body text</Text>
      <Label>MessageBar / InfoBox</Label>
      <MessageBarBasicExample />
    </Stack>
    <Stack gap={8} padding={64} horizontalAlign="center">
      <Label>TeachingBubble</Label>
      <TeachingBubbleBasicExample />
    </Stack>
    <Stack gap={8} padding={64} horizontalAlign="center">
      <Label>Pivots</Label>
      <PivotBasicExample />
    </Stack>
    <Stack gap={8} horizontalAlign="center">
      <Label>Buttons</Label>
      <DefaultButton text="DefaultButton" />
      <PrimaryButton text="PrimaryButton" />
      <CompoundButton primary text="CompoundButton" />
      <CompoundButton secondaryText="secondary text." text="CompoundButton" />
      <DefaultButton primary={true} text="Default button as primary" />
      <DefaultButton primary={true} disabled={true} text="Default w/ primary disabled" />
      <Label>Disabled Buttons</Label>
      <DefaultButton disabled text="DefaultButton disabled" />
      <PrimaryButton disabled text="PrimaryButton disabled" />
      <PrimaryButton disabled text="PrimaryButton disabled" />
      <CompoundButton disabled primary text="CompoundButton primary disabled" />
      <Label disabled>I am a disabled label</Label>
      <Label>Icon Buttons</Label>
      <ButtonIconExample checked={false} />
      <ButtonCommandBarExample />
      <ButtonIconWithTooltipExample />
      <ButtonContextualMenuExample />
      <ButtonActionExample />

      <Label>Toggle button</Label>
      <ButtonToggleExample />
      <ButtonSplitExample checked={false} />
      <CalloutBasicExample />
      <DefaultButton text="WIP: default button > primary" primary />
      <DefaultButton text="WIP: Primary button" primary />

      <Label>Tooltip</Label>
      <TooltipBasicExample />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'DetailsList'}>
      <Label>DetailsList / Grid</Label>
      <DetailsListCompactExample />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'Slider'}>
      <Label>Slider</Label>
      <SliderBasicExample />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'DatePicker'}>
      <Label className="section">DatePicker</Label>
      <DatePickerBoundedExample />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'TagPicker'}>
      <Label>Picker</Label>
      <TagPickerBasicExample />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'CommandBar'}>
      <Label>CommandBar</Label>
      <CommandBarBasicExample />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'Checkboxes'}>
      <Label>Checkboxes</Label>
      <Checkbox label="Unchecked checkbox (uncontrolled)" />
      <Checkbox label="Checked checkbox (uncontrolled)" defaultChecked />
      <Checkbox label="Disabled checkbox" disabled />
      <Checkbox label="Disabled checked checkbox" disabled defaultChecked />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'Links'}>
      <Label>Links</Label>
      <Link>Hello I am a link, hover underline</Link>
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'ComboBox'}>
      <Label>ComboBox</Label>
      <ComboBoxBasicExample />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'Dropdowns'}>
      <Label>Dropdowns</Label>
      <DropdownBasicExample />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'SearchBox'}>
      <Label>Search / input fields</Label>
      <SearchBox />
      <TextField disabled placeholder="disabled placeholder" />
      <TextField disabled value="disabled text" />
      <TextField placeholder="Hello" />
      <TextField errorMessage="Error message!" />
    </Stack>

    <Stack gap={8} horizontalAlign="center" style={{ marginTop: 40 }} id={'Misc'}>
      <Label>Misc</Label>
      <ActivityItemBasicExample />
      <ChoiceGroupBasicExample />
      <ToggleBasicExample />
      <ColorPickerBasicExample />
      <ContextualMenuDefaultExample />
    </Stack>
  </Stack>
);

export const Light = () => (
  <ThemeProvider theme={AzureThemeLight} applyTo="body">
    <Example />
  </ThemeProvider>
);

export const Dark = () => (
  <ThemeProvider theme={AzureThemeDark} applyTo="body">
    <Example />
  </ThemeProvider>
);

export const HighContrastLight = () => (
  <ThemeProvider theme={AzureThemeHighContrastLight} applyTo="body">
    <Example />
  </ThemeProvider>
);

export const HighContrastDark = () => (
  <ThemeProvider theme={AzureThemeHighContrastDark} applyTo="body">
    <Example />
  </ThemeProvider>
);
