import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  ReactNode,
} from 'react';

// Normalize by convert the flag constant to camelCase and trim spaces.
const normalizeFlagKey = (flag: string) => {
  return flag
    .trim()
    .toLowerCase()
    .replace(/_([a-z])/g, (_, g1) => g1.toUpperCase());
};

// This function processes the feature flags and converts them to a format that can be used in the application.
export const processFeatureFlags = (
  parsedFlags: ResolvedFeatureFlags
): FeatureFlagConfig => {
  const resolvedFlags: FeatureFlagConfig = {};
  if (Array.isArray(parsedFlags)) {
    parsedFlags.forEach(flag => {
      if (flag) {
        const formattedKey = normalizeFlagKey(flag);
        resolvedFlags[formattedKey] = true;
      }
    });
  } else {
    console.warn(
      `Provided data is not a valid JSON object. Feature flags not loaded.`
    );
  }
  return resolvedFlags;
};

export type FeatureFlagProps = {
  /**
   * String containing feature flags separated by comma or Array of strings.
   * Flag names contains its feature name and follows by the action it expected to perform.
   * The action can be one of the following: `ENABLE`, `DISABLE`, `HIDE`, `SHOW`.
   *
   * i.e. Action indicates enable/disable/hide/show for the feature name, which are passed in as a string.
   * Each flag represent whether the feature is enabled or disabled.
   *
   * The feature flag names should be in uppercase and separated by commas.
   * Example: `"CHILD_SPONSORSHIP_HIDE, HOME_PAGE_SHOW"`
   *
   * @property
   */
  config?: string | string[];
};

type ResolvedFeatureFlags = Array<string>;

export type FeatureFlagConfig = {
  /**
   * This object is used to manage the state of feature flags in the application.
   * Each key in the object represents a feature flag, and the value is always `true`.
   * The respective enabled/disabled feature name will converted to camelCase format for consistency.
   *
   * Example: `{ childSponsorshipHide: true, homePageShow: true }`
   *
   */
  [key: string]: true;
};

/**
 * Custom hook to manage feature flags.
 * This hook takes a JSON string of feature flags, parses it,
 * and returns an object with the feature flags as keys and true as values.
 *
 * @param {FeatureFlagProps} props - The properties for the hook.
 *
 * @returns {FeatureFlagConfig} - An object containing the feature flags.
 *
 */
export const useFeatureFlag = ({
  config,
}: FeatureFlagProps): FeatureFlagConfig => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlagConfig>({});
  const [initialized, setInitialized] = useState(false);

  const initializeFeatureFlags = useCallback(() => {
    let resolvedFlags: FeatureFlagConfig = {};
    if (config) {
      try {
        const parsedConfig = Array.isArray(config) ? config : config.split(',');
        resolvedFlags = processFeatureFlags(parsedConfig);
      } catch (error) {
        console.error(
          `Error parsing feature flag configuration from ${config}:`,
          error
        );
        resolvedFlags = {};
      }
    }
    setFeatureFlags(resolvedFlags);
    setInitialized(true);
  }, [config, initialized]);

  useEffect(() => {
    if (!initialized) {
      initializeFeatureFlags();
    }
  }, [config]);

  return featureFlags;
};

/**
 * Create the context, it is for managing feature flags.
 * @default {}
 *
 * @returns {React.Context<FeatureFlagConfig>} - The context object for feature flags.
 */
const Context = createContext<FeatureFlagConfig>({});

/**
 * Custom hook to access the feature flag context.
 * @returns {FeatureFlagConfig} - The current feature flag configuration from the context.
 */
export const useFeatureContext = (): FeatureFlagConfig => useContext(Context);

export type FeatureFlagContextType = {
  readonly children: ReactNode;
} & FeatureFlagProps;

/**
 * Provider component for feature flags. This component wraps the application and provides the feature flags context.
 * It initializes the feature flags based on the provided configuration.
 *
 * @param {FeatureFlagContextType} props - The properties for the provider.
 *
 * @return {ReactNode} - The rendered provider component with the feature flags context.
 */
export const FeatureFlagProvider = ({
  children,
  config,
}: FeatureFlagContextType): ReactNode => {
  const flag = useFeatureFlag({ config });
  return <Context.Provider value={flag}>{children}</Context.Provider>;
};

export default useFeatureFlag;
