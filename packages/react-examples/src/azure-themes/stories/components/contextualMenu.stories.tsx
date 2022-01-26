import * as React from 'react';
import { ContextualMenu, IContextualMenuProps, IIconProps } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

const menuProps: IContextualMenuProps = {
  // For example: disable dismiss if shift key is held down while dismissing
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
  directionalHintFixed: true,
};

const addIcon: IIconProps = { iconName: 'Add' };

export const ButtonContextualMenuExample: React.FunctionComponent<IButtonExampleProps> = (
  props: IButtonExampleProps,
) => {
  const { disabled, checked } = props;

  let menuButton: React.RefObject<HTMLInputElement> | null;

  const buttonProps = {
    text: 'New item',
    iconProps: addIcon,
    menuProps: menuProps,
    // Optional callback to customize menu rendering
    menuAs: _getMenu,
    // Optional callback to do other actions (besides opening the menu) on click
    onMenuClick: _onMenuClick,
    // By default, the ContextualMenu is re-created each time it's shown and destroyed when closed.
    // Uncomment the next line to hide the ContextualMenu but persist it in the DOM instead.
    persistMenu: true,
    allowDisabledFocus: true,
    disabled: disabled,
    checked: checked,
  };

  function _handleClick(): void {
    if (menuButton && menuButton.current) {
      menuButton.current?.click();
    }
  }

  React.useEffect(() => {
    _handleClick();
  });

  return (
    <>
      <DefaultButton
        id="ContextualMenuButton"
        componentRef={(node: any) => {
          console.log('attaching node as componentRef');
          if (node?._buttonElement) {
            menuButton = node._buttonElement;
          }
        }}
        onClick={buttonProps.onMenuClick}
        {...buttonProps}
      />
      <PrimaryButton {...buttonProps} />
      <ContextualMenu
        id="ContextualMenu-1"
        // onDismiss={(ev: any) => {
        //   ev.preventDefault();
        //   ev.stopPropagation();
        //   _getMenu(menuProps)
        // }}
        target="#ContextualMenuButton"
        {...menuProps}
      />
    </>
  );
};

function _menuOpened(_props: IContextualMenuProps): void {
  console.log('_menuOpened');
}

function _getMenu(props: IContextualMenuProps): JSX.Element {
  console.log('_getMenu');
  // Customize contextual menu with menuAs
  return (
    <ContextualMenu
      id="ContextualMenu-2"
      onMenuOpened={_menuOpened}
      onDismiss={(ev: any) => {
        ev.preventDefault();
        ev.stopPropagation();
        _getMenu(menuProps);
      }}
      {...props}
    />
  );
}

function _onMenuClick(_ev?: React.SyntheticEvent<any>): void {
  console.log('_onMenuClick');
}
