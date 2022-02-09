import * as React from 'react';
import {
  ContextualMenu,
  Customizer,
  getId,
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
// const targetId :string = getId('ContextualMenuTarget');
// const layerHostId :string = getId('ContextualMenuLayerHost');

export const ButtonContextualMenuExample: React.FunctionComponent<IButtonExampleProps> = (
  props: IButtonExampleProps,
) => {
  const { disabled, checked } = props;

  const secondaryTargetId: string = useId('ContextualMenuTarget');
  const primaryTargetId: string = useId('ContextualMenuTarget');
  const layerHostId: string = useId('ContextualMenuLayerHost');
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
    id: '#ContextualMenuMenu',
    directionalHintFixed: true,
    alignTargetEdge: true,
    hidden: false,
    shouldFocusOnMount: true,
    doNotLayer: true,
    //Custom settings for the parent Callout layer to ensure the contextual menu is displayed for snapshotting
    calloutProps: {
      hidden: false,
      preventDismissOnEvent: () => true,
      styles: {
        root: {
          opacity: '1 !important',
          filter: 'opacity(1) !important',
        },
      },
    },
  };

  const addIcon: IIconProps = { iconName: 'Add' };

  const styles = mergeStyleSets({
    contextualMenuExampleArea: {
      display: 'block',
      height: 120,
      width: '100%',
    },
    targetClass: {
      display: 'inline-block',
      height: 32,
      minWidth: 130,
      width: '100%',
    },
    layerHost: {
      display: 'inline-block',
      height: '100%',
      width: '100%',
    },
  });

  const buttonProps = {
    text: 'New item',
    iconProps: addIcon,
    // menuProps: menuProps,
    // Optional callback to customize menu rendering
    // menuAs: _getMenu,
    // Optional callback to do other actions (besides opening the menu) on click
    // By default, the ContextualMenu is re-created each time it's shown and destroyed when closed.
    // Uncomment the next line to hide the ContextualMenu but persist it in the DOM instead.
    // persistMenu: true,
    allowDisabledFocus: true,
    disabled: disabled,
    checked: checked,
  };

  return (
    <div>
      <Customizer scopedSettings={{ Layer: layerProps }}>
        <div className={styles.contextualMenuExampleArea}>
          <div className={styles.targetClass} id={secondaryTargetId}>
            <DefaultButton {...buttonProps} />
          </div>
          <ContextualMenu {...menuProps} target={`#${secondaryTargetId}`} />
        </div>
        <div className={styles.contextualMenuExampleArea}>
          <div className={styles.targetClass} id={primaryTargetId}>
            <PrimaryButton {...buttonProps} />
          </div>
          <ContextualMenu {...menuProps} target={`#${primaryTargetId}`} />
        </div>
      </Customizer>
      <LayerHost id={layerHostId} className={styles.layerHost} />
    </div>
  );
};
