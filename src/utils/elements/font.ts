import type Styles from '*.module.scss';
import {
  FontSize,
  FontWeight,
  ResponsiveValue,
} from '@internal/types/common/style';
import { textPropDefs } from '@radix-ui/themes/dist/cjs/components/text.props.js';
import { extractProps } from '@radix-ui/themes/src/helpers/extract-props';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import { deepClone } from '@utils/common/clone';

/**
 *
 * get font styles for the typography for the component
 * @param size - The size of the font
 * @param weight - The weight of the font
 * @param className - The class name to be used
 * @param styles - The module styles to be useds
 * @returns class names as a single string value.
 */
export const getFontStyles = <T>(
  props: Record<string, unknown>,
  size?: ResponsiveValue<T> | null,
  weight?: ResponsiveValue<T> | null,
  className?: string,
  styles: typeof Styles = {}
) => {
  const fontFamily = 'typography-font-family-default';

  // Styles to be used get the classNames based on the Breaking points
  const styleDefinition = {
    size: {
      ...deepClone(textPropDefs.size),
      className: 'typography-font-size',
      values: FontSize,
    },
    weight: {
      ...deepClone(textPropDefs.weight),
      className: 'typography-font-weight',
      values: FontWeight,
    },
  };

  const data = {
    ...props,
    size: size ?? undefined,
    weight: weight ?? undefined,
  };
  const { className: fontStyles } = extractProps(data, styleDefinition);
  const classes = getModuleClasses(className?.trim(), styles);
  return classNames(fontStyles, fontFamily, classes);
};
