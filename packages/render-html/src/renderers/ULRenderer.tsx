import React from 'react';
import { defaultHTMLElementModels } from '@native-html/transient-render-engine';
import { DefaultBlockRenderer } from '../render/render-types';
import {
  DefaultTagRendererProps,
  DefaultSupportedListStyleType
} from '../shared-types';
import { TBlock } from '@native-html/transient-render-engine';
import ULElement, { ULElementProps } from '../elements/ULElement';

function getListStyleTypeFromNestLevel(
  nestLevel: number
): DefaultSupportedListStyleType {
  switch (nestLevel % 3) {
    case 0:
      return 'disc';
    case 1:
      return 'circle';
    default:
      return 'square';
  }
}

export function useULElementProps(
  props: DefaultTagRendererProps<TBlock>
): ULElementProps {
  const listStyleSpecs = props.sharedProps.customListStyleSpecs;
  return {
    ...props,
    listStyleSpecs,
    getFallbackListStyleTypeFromNestLevel: getListStyleTypeFromNestLevel
  };
}

const ULRenderer: DefaultBlockRenderer = (props) => {
  return React.createElement(ULElement, useULElementProps(props));
};

ULRenderer.model = defaultHTMLElementModels.ul;

export default ULRenderer;
