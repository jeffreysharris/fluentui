import * as React from 'react';
import {
  ContextualMenu,
  Customizer,
  IContextualMenuProps,
  IIconProps,
  ILayerProps,
  LayerHost,
  mergeStyleSets,
} from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { useId } from '@fluentui/react-hooks';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

export const ButtonContextualMenuExample: React.FunctionComponent<IButtonExampleProps> = (
  props: IButtonExampleProps,
) => {
  const { disabled, checked } = props;

  let menuButton: React.RefObject<HTMLInputElement> | null;

  const _calloutTarget = React.createRef<HTMLDivElement>();

  const layerHostId = useId('contextualMenuLayerHost');

  const layerProps: ILayerProps = { hostId: layerHostId };

  const menuProps: IContextualMenuProps = {
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
    id: 'ContextualMenuTest',
    alignTargetEdge: true,
    hidden: false,
    target: _calloutTarget,
    calloutProps: {
      preventDismissOnEvent: () => true,
    },
  };

  const addIcon: IIconProps = { iconName: 'Add' };

  const styles = mergeStyleSets({
    layerHost: {
      position: 'relative',
      height: 400,
      width: 1000,
      // overflow: 'hidden',
      border: '1px solid #ccc',
    },
    contextualMenu: {
      opacity: 1,
      filter: 'opacity(1)',
    },
  });

  const buttonProps = {
    text: 'New item',
    iconProps: addIcon,
    menuProps: menuProps,
    // Optional callback to customize menu rendering
    // menuAs: _getMenu,
    // Optional callback to do other actions (besides opening the menu) on click
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
    // <div id="ContextualMenuExample">
    //   <DefaultButton
    //     id="ContextualMenuButton"
    //     componentRef={(node: any) => {
    //       console.log('attaching node as componentRef');
    //       if (node?._buttonElement) {
    //         menuButton = node._buttonElement;
    //       }
    //     }}
    //     onClick={buttonProps.onMenuClick}
    //     {...buttonProps}
    //   />
    //   <PrimaryButton {...buttonProps} />
    //   <ContextualMenu
    //     id="ContextualMenu-1"
    //     onDismiss={(ev: any) => {
    //       ev.preventDefault();
    //       ev.stopPropagation();
    //       _getMenu(menuProps);
    //     }}
    //     target="#ContextualMenu"
    //     {...menuProps}
    //   />
    // </div>
    <div>
      <Customizer scopedSettings={{ Layer: { ...layerProps } }}>
        <LayerHost id={layerHostId} className={styles.layerHost}>
          <ContextualMenu {...menuProps} id="ContextualMenuExample" />
          <div className="targetClass" ref={_calloutTarget} />
        </LayerHost>
      </Customizer>
    </div>
  );
};

function _getMenu(props: IContextualMenuProps): JSX.Element {
  // Customize contextual menu with menuAs
  return (
    <ContextualMenu
      id="ContextualMenu-"
      onDismiss={(ev: any) => {
        ev.preventDefault();
        ev.stopPropagation();
        _getMenu(props);
      }}
      {...props}
    />
  );
}
