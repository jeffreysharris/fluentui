import * as React from 'react';
import { DefaultButton, IButtonProps } from '@fluentui/react/lib/Button';
import { TeachingBubble } from '@fluentui/react/lib/TeachingBubble';
import { useBoolean } from '@fluentui/react-hooks';

const examplePrimaryButtonProps: IButtonProps = {
  children: 'Try it out',
};

export const TeachingBubbleBasicExample: React.FunctionComponent = () => {
  const secondaryButton = React.useRef<HTMLElement>(null);
  const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] = useBoolean(true);

  const [visible, setVisible] = React.useState<boolean>(true);

  const exampleSecondaryButtonProps: IButtonProps = React.useMemo(
    () => ({
      children: 'Maybe later',
      onClick: setVisible,
    }),
    [setVisible],
  );

  return (
    <div>
      <DefaultButton
        id="targetButton"
        onClick={setVisible}
        text={visible ? 'Hide TeachingBubble' : 'Show TeachingBubble'}
        elementRef={secondaryButton}
      />

      {teachingBubbleVisible && (
        <TeachingBubble
          target="#targetButton"
          hasCondensedHeadline={true}
          primaryButtonProps={examplePrimaryButtonProps}
          secondaryButtonProps={exampleSecondaryButtonProps}
          onDismiss={setVisible}
          headline="Discover what’s trending around you"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
          harum non?
        </TeachingBubble>
      )}
    </div>
  );
};
