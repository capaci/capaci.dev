

enum FeatureFlags {
  ABOUT = 'ABOUT',
  BLOG = 'BLOG',
  TALKS = 'TALKS',
  PORTFOLIO = 'PORTFOLIO',
}

type FEATURE_FLAGS_TYPE = Record<FeatureFlags, boolean>

const PRODUCTION_FEATURE_FLAGS: FEATURE_FLAGS_TYPE = {
  ABOUT: false,
  BLOG: false,
  TALKS: false,
  PORTFOLIO: false,
}

const DEV_FEATURE_FLAGS: FEATURE_FLAGS_TYPE = {
  ...PRODUCTION_FEATURE_FLAGS,
  BLOG: true,
}

const FEATURE_FLAGS = process.env.NODE_ENV === 'production'
? PRODUCTION_FEATURE_FLAGS
: DEV_FEATURE_FLAGS


export default FEATURE_FLAGS
