import {
  useThemeProps
} from "./chunk-SXDJQ5CX.js";
import {
  require_react_dom
} from "./chunk-OHIE3E62.js";
import {
  CacheProvider,
  Global,
  StyleSheet,
  ThemeContext,
  clsx_default,
  createCache,
  require_prop_types,
  require_react_is,
  serializeStyles,
  styled,
  styled_default
} from "./chunk-UAN347NY.js";
import {
  require_jsx_runtime
} from "./chunk-AF2GVECZ.js";
import {
  __toESM,
  require_react
} from "./chunk-PGD2RI3G.js";

// node_modules/@mui/lab/node_modules/@mui/utils/composeClasses/composeClasses.mjs
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    let buffer = "";
    let start = true;
    for (let i = 0; i < slot.length; i += 1) {
      const value = slot[i];
      if (value) {
        buffer += (start === true ? "" : " ") + getUtilityClass(value);
        start = false;
        if (classes && classes[value]) {
          buffer += " " + classes[value];
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}

// node_modules/@mui/lab/Masonry/Masonry.mjs
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@mui/lab/node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.mjs
var React = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var cacheMap = /* @__PURE__ */ new Map();
var TEST_INTERNALS_DO_NOT_USE = {
  /**
   * to intercept the generated CSS before inserting to the style tag, so that we can check the generated CSS.
   *
   * let rule;
   * TEST_INTERNALS_DO_NOT_USE.insert = (...args) => {
   *    rule = args[0];
   * };
   *
   * expect(rule).to.equal(...);
   */
  insert: void 0
};
var createEmotionCache = (options, CustomSheet) => {
  const cache = createCache(options);
  cache.sheet = new CustomSheet({
    key: cache.key,
    nonce: cache.sheet.nonce,
    container: cache.sheet.container,
    speedy: cache.sheet.isSpeedy,
    prepend: cache.sheet.prepend,
    insertionPoint: cache.sheet.insertionPoint
  });
  return cache;
};
var insertionPoint;
if (typeof document === "object") {
  insertionPoint = document.querySelector('[name="emotion-insertion-point"]');
  if (!insertionPoint) {
    insertionPoint = document.createElement("meta");
    insertionPoint.setAttribute("name", "emotion-insertion-point");
    insertionPoint.setAttribute("content", "");
    const head = document.querySelector("head");
    if (head) {
      head.prepend(insertionPoint);
    }
  }
}
function getCache(injectFirst, enableCssLayer) {
  if (injectFirst || enableCssLayer) {
    class MyStyleSheet extends StyleSheet {
      insert(rule, options) {
        if (TEST_INTERNALS_DO_NOT_USE.insert) {
          return TEST_INTERNALS_DO_NOT_USE.insert(rule, options);
        }
        if (this.key && this.key.endsWith("global")) {
          this.before = insertionPoint;
        }
        return super.insert(rule, options);
      }
    }
    const emotionCache = createEmotionCache({
      key: "css",
      insertionPoint: injectFirst ? insertionPoint : void 0
    }, MyStyleSheet);
    if (enableCssLayer) {
      const prevInsert = emotionCache.insert;
      emotionCache.insert = (...args) => {
        if (!args[1].styles.match(/^@layer\s+[^{]*$/)) {
          args[1].styles = `@layer mui {${args[1].styles}}`;
        }
        return prevInsert(...args);
      };
    }
    return emotionCache;
  }
  return void 0;
}
function StyledEngineProvider(props) {
  const {
    injectFirst,
    enableCssLayer,
    children
  } = props;
  const cache = React.useMemo(() => {
    const cacheKey = `${injectFirst}-${enableCssLayer}`;
    if (typeof document === "object" && cacheMap.has(cacheKey)) {
      return cacheMap.get(cacheKey);
    }
    const fresh = getCache(injectFirst, enableCssLayer);
    cacheMap.set(cacheKey, fresh);
    return fresh;
  }, [injectFirst, enableCssLayer]);
  return cache ? (0, import_jsx_runtime.jsx)(CacheProvider, {
    value: cache,
    children
  }) : children;
}
true ? StyledEngineProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: import_prop_types.default.node,
  /**
   * If `true`, the styles are wrapped in `@layer mui`.
   * Learn more about [Cascade layers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers).
   */
  enableCssLayer: import_prop_types.default.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: import_prop_types.default.bool
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.mjs
var import_prop_types2 = __toESM(require_prop_types(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme: defaultTheme4 = {}
  } = props;
  const globalStyles = typeof styles === "function" ? (themeInput) => styles(isEmpty(themeInput) ? defaultTheme4 : themeInput) : styles;
  return (0, import_jsx_runtime2.jsx)(Global, {
    styles: globalStyles
  });
}
true ? GlobalStyles.propTypes = {
  defaultTheme: import_prop_types2.default.object,
  styles: import_prop_types2.default.oneOfType([import_prop_types2.default.array, import_prop_types2.default.string, import_prop_types2.default.object, import_prop_types2.default.func])
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/styled-engine/index.mjs
function styled2(tag, options) {
  const stylesFactory = styled(tag, options);
  if (true) {
    return (...styles) => {
      const component = typeof tag === "string" ? `"${tag}"` : "component";
      if (styles.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join("\n"));
      } else if (styles.some((style4) => style4 === void 0)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}
function internal_mutateStyles(tag, processor) {
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
}
var wrapper = [];
function internal_serializeStyles(styles) {
  wrapper[0] = styles;
  return serializeStyles(wrapper);
}

// node_modules/@mui/lab/node_modules/@mui/system/GlobalStyles/GlobalStyles.mjs
var import_prop_types5 = __toESM(require_prop_types(), 1);

// node_modules/@mui/lab/node_modules/@mui/utils/deepmerge/deepmerge.mjs
var React2 = __toESM(require_react(), 1);
var import_react_is = __toESM(require_react_is(), 1);
function isPlainObject(item) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (React2.isValidElement(source) || (0, import_react_is.isValidElementType)(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? {
    ...target
  } : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (React2.isValidElement(source[key]) || (0, import_react_is.isValidElementType)(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) && // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// node_modules/@mui/lab/node_modules/@mui/system/createBreakpoints/createBreakpoints.mjs
var sortBreakpointsValues = (values2) => {
  const breakpointsAsArray = Object.keys(values2).map((key) => ({
    key,
    val: values2[key]
  })) || [];
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.key]: obj.val
    };
  }, {});
};
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: values2 = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit = "px",
    step = 5,
    ...other
  } = breakpoints;
  const sortedValues = sortBreakpointsValues(values2);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  const mediaKeys = [];
  for (let i = 0; i < keys.length; i += 1) {
    mediaKeys.push(up(keys[i]));
  }
  return {
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit,
    internal_mediaKeys: mediaKeys,
    ...other
  };
}

// node_modules/@mui/lab/node_modules/@mui/system/cssContainerQueries/cssContainerQueries.mjs
var MIN_WIDTH_PATTERN = /min-width:\s*([0-9.]+)/;
function sortContainerQueries(theme, css2) {
  if (!theme.containerQueries || !hasContainerQuery(css2)) {
    return css2;
  }
  const keys = [];
  for (const key in css2) {
    if (key.startsWith("@container")) {
      keys.push(key);
    }
  }
  keys.sort((a, b) => {
    return +(a.match(MIN_WIDTH_PATTERN)?.[1] || 0) - +(b.match(MIN_WIDTH_PATTERN)?.[1] || 0);
  });
  const result = css2;
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const value = result[key];
    delete result[key];
    result[key] = value;
  }
  return result;
}
function hasContainerQuery(css2) {
  for (const key in css2) {
    if (key.startsWith("@container")) {
      return true;
    }
  }
  return false;
}
function isCqShorthand(breakpointKeys, value) {
  return value === "@" || value.startsWith("@") && (breakpointKeys.some((key) => value.startsWith(`@${key}`)) || !!value.match(/^@\d/));
}
function getContainerQuery(theme, shorthand) {
  const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
  if (!matches) {
    if (true) {
      throw (
        /* minify-error */
        new Error(`MUI: The provided shorthand ${`(${shorthand})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`)
      );
    }
    return null;
  }
  const [, containerQuery, containerName] = matches;
  const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
  return theme.containerQueries(containerName).up(value);
}
function cssContainerQueries(themeInput) {
  const toContainerQuery = (mediaQuery, name) => mediaQuery.replace("@media", name ? `@container ${name}` : "@container");
  function attachCq(node2, name) {
    node2.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
    node2.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
    node2.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
    node2.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
    node2.not = (...args) => {
      const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
      if (result.includes("not all and")) {
        return result.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or");
      }
      return result;
    };
  }
  const node = {};
  const containerQueries = (name) => {
    attachCq(node, name);
    return node;
  };
  attachCq(containerQueries);
  return {
    ...themeInput,
    containerQueries
  };
}

// node_modules/@mui/lab/node_modules/@mui/system/createTheme/shape.mjs
var shape = {
  borderRadius: 4
};
var shape_default = shape;

// node_modules/@mui/lab/node_modules/@mui/system/responsivePropType/responsivePropType.mjs
var import_prop_types3 = __toESM(require_prop_types(), 1);
var responsivePropType = true ? import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string, import_prop_types3.default.object, import_prop_types3.default.array]) : {};
var responsivePropType_default = responsivePropType;

// node_modules/@mui/lab/node_modules/@mui/system/breakpoints/breakpoints.mjs
var import_prop_types4 = __toESM(require_prop_types(), 1);

// node_modules/@mui/lab/node_modules/@mui/utils/isObjectEmpty/isObjectEmpty.mjs
function isObjectEmpty(object) {
  if (object == null) {
    return true;
  }
  for (const _ in object) {
    return false;
  }
  return true;
}

// node_modules/@mui/lab/node_modules/@mui/utils/fastDeepAssign/fastDeepAssign.mjs
function fastDeepAssign(target, source) {
  const sourceIsArray = Array.isArray(source);
  const targetIsArray = Array.isArray(target);
  if (isPrimitive(source)) {
    return source;
  } else if (isPrimitiveOrBuiltIn(target)) {
    return clone(source);
  } else if (sourceIsArray && targetIsArray) {
    return mergeArray(target, source);
  } else if (sourceIsArray !== targetIsArray) {
    return clone(source);
  } else {
    return mergeObject(target, source);
  }
}
function cloneArray(value) {
  let i = 0;
  const il = value.length;
  const result = new Array(il);
  for (i = 0; i < il; i += 1) {
    result[i] = clone(value[i]);
  }
  return result;
}
function cloneObject(target) {
  const result = {};
  for (const key in target) {
    result[key] = clone(target[key]);
  }
  return result;
}
function mergeArray(target, source) {
  const tl = target.length;
  for (let i = 0; i < source.length; i += 1) {
    target[tl + i] = clone(source[i]);
  }
  return target;
}
function isMergeableObject(value) {
  return typeof value === "object" && value !== null && !(value instanceof RegExp) && !(value instanceof Date);
}
function isPrimitive(value) {
  return typeof value !== "object" || value === null;
}
function isPrimitiveOrBuiltIn(value) {
  return typeof value !== "object" || value === null || value instanceof RegExp || value instanceof Date;
}
function clone(entry) {
  return isMergeableObject(entry) ? Array.isArray(entry) ? cloneArray(entry) : cloneObject(entry) : entry;
}
function mergeObject(target, source) {
  for (const key in source) {
    if (key in target) {
      target[key] = fastDeepAssign(target[key], source[key]);
    } else {
      target[key] = clone(source[key]);
    }
  }
  return target;
}

// node_modules/@mui/lab/node_modules/@mui/system/breakpoints/breakpoints.mjs
var EMPTY_THEME = {};
var values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
};
var DEFAULT_BREAKPOINTS = createBreakpoints({
  values
});
var defaultContainerQueries = {
  containerQueries: (containerName) => ({
    up: (key) => {
      let result = typeof key === "number" ? key : values[key] || key;
      if (typeof result === "number") {
        result = `${result}px`;
      }
      return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
    }
  })
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const result = {};
  return iterateBreakpoints(result, props.theme, propValue, (mediaKey, value, initialKey) => {
    const finalValue = styleFromPropValue(value, initialKey);
    if (mediaKey) {
      result[mediaKey] = finalValue;
    } else {
      fastDeepAssign(result, finalValue);
    }
  });
}
function iterateBreakpoints(target, theme, propValue, callback) {
  theme ??= EMPTY_THEME;
  if (Array.isArray(propValue)) {
    const breakpoints = theme.breakpoints ?? DEFAULT_BREAKPOINTS;
    for (let i = 0; i < propValue.length; i += 1) {
      buildBreakpoint(target, breakpoints.up(breakpoints.keys[i]), propValue[i], void 0, callback);
    }
    return target;
  }
  if (typeof propValue === "object") {
    const breakpoints = theme.breakpoints ?? DEFAULT_BREAKPOINTS;
    const breakpointValues = breakpoints.values ?? values;
    for (const key in propValue) {
      if (isCqShorthand(breakpoints.keys, key)) {
        const containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, key);
        if (containerKey) {
          buildBreakpoint(target, containerKey, propValue[key], key, callback);
        }
      } else if (key in breakpointValues) {
        const mediaKey = breakpoints.up(key);
        buildBreakpoint(target, mediaKey, propValue[key], key, callback);
      } else {
        const cssKey = key;
        target[cssKey] = propValue[cssKey];
      }
    }
    return target;
  }
  callback(void 0, propValue);
  return target;
}
function buildBreakpoint(target, mediaKey, value, initialKey, callback) {
  target[mediaKey] ??= {};
  callback(mediaKey, value, initialKey);
}
function createEmptyBreakpointObject(breakpoints = DEFAULT_BREAKPOINTS) {
  const {
    internal_mediaKeys: mediaKeys
  } = breakpoints;
  const result = {};
  for (let i = 0; i < mediaKeys.length; i += 1) {
    result[mediaKeys[i]] = {};
  }
  return result;
}
function removeUnusedBreakpoints(breakpoints, style4) {
  const breakpointKeys = breakpoints.internal_mediaKeys;
  for (let i = 0; i < breakpointKeys.length; i += 1) {
    const key = breakpointKeys[i];
    if (isObjectEmpty(style4[key])) {
      delete style4[key];
    }
  }
  return style4;
}
function mergeBreakpointsInOrder(breakpoints, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpoints);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => deepmerge(prev, next), {});
  return removeUnusedBreakpoints(breakpoints, mergedOutput);
}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  if (typeof breakpointValues !== "object") {
    return {};
  }
  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach((breakpoint) => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase
}) {
  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);
  if (keys.length === 0) {
    return breakpointValues;
  }
  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === "object") {
      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }
    return acc;
  }, {});
}
function hasBreakpoint(breakpoints, value) {
  if (Array.isArray(value)) {
    return true;
  }
  if (typeof value === "object" && value !== null) {
    for (let i = 0; i < breakpoints.keys.length; i += 1) {
      if (breakpoints.keys[i] in value) {
        return true;
      }
    }
    const valueKeys = Object.keys(value);
    for (let i = 0; i < valueKeys.length; i += 1) {
      if (isCqShorthand(breakpoints.keys, valueKeys[i])) {
        return true;
      }
    }
  }
  return false;
}

// node_modules/@mui/lab/node_modules/@mui/utils/capitalize/capitalize.mjs
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? "MUI: `capitalize(string)` expects a string argument." : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// node_modules/@mui/lab/node_modules/@mui/system/style/style.mjs
function getStyleValue2(themeMapping, transform, userValue, alternateProp) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(userValue);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[userValue] || userValue;
  } else if (typeof userValue === "string") {
    value = getPath(themeMapping, userValue, true, alternateProp) || userValue;
  } else {
    value = userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function getPath(obj, pathInput, checkVars = true, alternateProp = void 0) {
  if (!obj || !pathInput) {
    return null;
  }
  const path = pathInput.split(".");
  if (obj.vars && checkVars) {
    const val = getPathImpl(obj.vars, path, alternateProp);
    if (val != null) {
      return val;
    }
  }
  return getPathImpl(obj, path, alternateProp);
}
function getPathImpl(object, path, alternateProp = void 0) {
  let lastResult = void 0;
  let result = object;
  let index = 0;
  while (index < path.length) {
    if (result === null || result === void 0) {
      return result;
    }
    lastResult = result;
    result = result[path[index]];
    index += 1;
  }
  if (alternateProp && result === void 0) {
    const lastKey = path[path.length - 1];
    const alternateKey = `${alternateProp}${lastKey === "default" ? "" : capitalize(lastKey)}`;
    return lastResult?.[alternateKey];
  }
  return result;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;
  const fn = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (valueFinal) => {
      const value = getStyleValue2(themeMapping, transform, valueFinal, prop);
      return cssProperty === false ? value : {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = true ? {
    [prop]: responsivePropType_default
  } : {};
  fn.filterProps = [prop];
  return fn;
}

// node_modules/@mui/lab/node_modules/@mui/system/spacing/spacing.mjs
var EMPTY_THEME2 = {
  internal_cache: {}
};
var properties = {
  m: "margin",
  p: "padding"
};
var directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
var aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
var CSS_PROPERTIES = {};
for (const key in properties) {
  CSS_PROPERTIES[key] = [properties[key]];
}
for (const keyProperty in properties) {
  for (const keyDirection in directions) {
    const property = properties[keyProperty];
    const direction = directions[keyDirection];
    const value = Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
    CSS_PROPERTIES[keyProperty + keyDirection] = value;
  }
}
for (const key in aliases) {
  CSS_PROPERTIES[key] = CSS_PROPERTIES[aliases[key]];
}
var marginKeys = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]);
var paddingKeys = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
var spacingKeys = /* @__PURE__ */ new Set([...marginKeys, ...paddingKeys]);
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey, true) ?? defaultValue;
  if (typeof themeSpacing === "number" || typeof themeSpacing === "string") {
    return (val) => {
      if (typeof val === "string") {
        return val;
      }
      if (true) {
        if (typeof val !== "number") {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${val}.`);
        }
      }
      if (typeof themeSpacing === "string") {
        if (themeSpacing.startsWith("var(") && val === 0) {
          return 0;
        }
        if (themeSpacing.startsWith("var(") && val === 1) {
          return themeSpacing;
        }
        return `calc(${val} * ${themeSpacing})`;
      }
      return themeSpacing * val;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (val) => {
      if (typeof val === "string") {
        return val;
      }
      const abs = Math.abs(val);
      if (true) {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
        }
      }
      const transformed = themeSpacing[abs];
      if (val >= 0) {
        return transformed;
      }
      if (typeof transformed === "number") {
        return -transformed;
      }
      if (typeof transformed === "string" && transformed.startsWith("var(")) {
        return `calc(-1 * ${transformed})`;
      }
      return `-${transformed}`;
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  if (true) {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
  }
  return () => void 0;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8, "spacing");
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  return transformer(propValue);
}
var container = [""];
function style2(props, keys) {
  const theme = props.theme ?? EMPTY_THEME2;
  const transformer = theme?.internal_cache?.unarySpacing ?? createUnarySpacing(theme);
  const result = {};
  for (const prop in props) {
    if (!keys.has(prop)) {
      continue;
    }
    const cssProperties = CSS_PROPERTIES[prop] ?? (container[0] = prop, container);
    const propValue = props[prop];
    iterateBreakpoints(result, props.theme, propValue, (mediaKey, value) => {
      const target = mediaKey ? result[mediaKey] : result;
      for (let i = 0; i < cssProperties.length; i += 1) {
        target[cssProperties[i]] = getValue(transformer, value);
      }
    });
  }
  return result;
}
function margin(props) {
  return style2(props, marginKeys);
}
margin.propTypes = true ? Array.from(marginKeys).reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style2(props, paddingKeys);
}
padding.propTypes = true ? Array.from(paddingKeys).reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return style2(props, spacingKeys);
}
spacing.propTypes = true ? Array.from(spacingKeys).reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;
var spacing_default = spacing;

// node_modules/@mui/lab/node_modules/@mui/system/createTheme/createSpacing.mjs
function createSpacing(spacingInput = 8, transform = createUnarySpacing({
  spacing: spacingInput
})) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const spacing2 = (...argsInput) => {
    if (true) {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing2.mui = true;
  return spacing2;
}

// node_modules/@mui/lab/node_modules/@mui/system/compose/compose.mjs
function compose(...styles) {
  const handlers = styles.reduce((acc, style4) => {
    style4.filterProps.forEach((prop) => {
      acc[prop] = style4;
    });
    return acc;
  }, {});
  const fn = (props) => {
    const result = {};
    for (const prop in props) {
      if (handlers[prop]) {
        fastDeepAssign(result, handlers[prop](props));
      }
    }
    return result;
  };
  fn.propTypes = true ? styles.reduce((acc, style4) => Object.assign(acc, style4.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style4) => acc.concat(style4.filterProps), []);
  return fn;
}
var compose_default = compose;

// node_modules/@mui/lab/node_modules/@mui/system/borders/borders.mjs
function borderTransform(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style({
    prop,
    themeKey: "borders",
    transform
  });
}
var border = createBorderStyle("border", borderTransform);
var borderTop = createBorderStyle("borderTop", borderTransform);
var borderRight = createBorderStyle("borderRight", borderTransform);
var borderBottom = createBorderStyle("borderBottom", borderTransform);
var borderLeft = createBorderStyle("borderLeft", borderTransform);
var borderColor = createBorderStyle("borderColor");
var borderTopColor = createBorderStyle("borderTopColor");
var borderRightColor = createBorderStyle("borderRightColor");
var borderBottomColor = createBorderStyle("borderBottomColor");
var borderLeftColor = createBorderStyle("borderLeftColor");
var outline = createBorderStyle("outline", borderTransform);
var outlineColor = createBorderStyle("outlineColor");
var borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = true ? {
  borderRadius: responsivePropType_default
} : {};
borderRadius.filterProps = ["borderRadius"];
var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
var borders_default = borders;

// node_modules/@mui/lab/node_modules/@mui/system/cssGrid/cssGrid.mjs
var gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
    const styleFromPropValue = (propValue) => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = true ? {
  gap: responsivePropType_default
} : {};
gap.filterProps = ["gap"];
var columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
    const styleFromPropValue = (propValue) => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = true ? {
  columnGap: responsivePropType_default
} : {};
columnGap.filterProps = ["columnGap"];
var rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
    const styleFromPropValue = (propValue) => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = true ? {
  rowGap: responsivePropType_default
} : {};
rowGap.filterProps = ["rowGap"];
var gridColumn = style({
  prop: "gridColumn"
});
var gridRow = style({
  prop: "gridRow"
});
var gridAutoFlow = style({
  prop: "gridAutoFlow"
});
var gridAutoColumns = style({
  prop: "gridAutoColumns"
});
var gridAutoRows = style({
  prop: "gridAutoRows"
});
var gridTemplateColumns = style({
  prop: "gridTemplateColumns"
});
var gridTemplateRows = style({
  prop: "gridTemplateRows"
});
var gridTemplateAreas = style({
  prop: "gridTemplateAreas"
});
var gridArea = style({
  prop: "gridArea"
});
var grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
var cssGrid_default = grid;

// node_modules/@mui/lab/node_modules/@mui/system/palette/palette.mjs
function paletteTransform(value, userValue) {
  if (userValue === "grey") {
    return userValue;
  }
  return value;
}
var color = style({
  prop: "color",
  themeKey: "palette",
  transform: paletteTransform
});
var bgcolor = style({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
var backgroundColor = style({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
var palette = compose_default(color, bgcolor, backgroundColor);
var palette_default = palette;

// node_modules/@mui/lab/node_modules/@mui/system/sizing/sizing.mjs
function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width = style({
  prop: "width",
  transform: sizingTransform
});
var maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      const breakpoint = props.theme?.breakpoints?.values?.[propValue] || values[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (props.theme?.breakpoints?.unit !== "px") {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
var minWidth = style({
  prop: "minWidth",
  transform: sizingTransform
});
var height = style({
  prop: "height",
  transform: sizingTransform
});
var maxHeight = style({
  prop: "maxHeight",
  transform: sizingTransform
});
var minHeight = style({
  prop: "minHeight",
  transform: sizingTransform
});
var sizeWidth = style({
  prop: "size",
  cssProperty: "width",
  transform: sizingTransform
});
var sizeHeight = style({
  prop: "size",
  cssProperty: "height",
  transform: sizingTransform
});
var boxSizing = style({
  prop: "boxSizing"
});
var sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
var sizing_default = sizing;

// node_modules/@mui/lab/node_modules/@mui/system/styleFunctionSx/defaultSxConfig.mjs
var defaultSxConfig = {
  // borders
  border: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderTop: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderRight: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderBottom: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderLeft: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: borderTransform
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: borderRadius
  },
  // palette
  color: {
    themeKey: "palette",
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: "palette",
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: (value) => ({
      "@media print": {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: "typography"
  }
};
var defaultSxConfig_default = defaultSxConfig;

// node_modules/@mui/lab/node_modules/@mui/system/styleFunctionSx/styleFunctionSx.mjs
var EMPTY_THEME3 = {};
function unstable_createStyleFunctionSx() {
  function styleFunctionSx(props) {
    if (!props.sx) {
      return null;
    }
    const {
      sx,
      theme = EMPTY_THEME3,
      nested
    } = props;
    const config = theme.unstable_sxConfig ?? defaultSxConfig_default;
    const wrapper2 = {
      sx: null,
      theme,
      nested: true
    };
    function process2(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === "function") {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== "object") {
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const breakpoints = theme.breakpoints ?? DEFAULT_BREAKPOINTS;
      const css2 = createEmptyBreakpointObject(breakpoints);
      for (const styleKey in sxObject) {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value === null || value === void 0) {
          continue;
        }
        if (typeof value !== "object") {
          setThemeValue(css2, styleKey, value, theme, config);
          continue;
        }
        if (config[styleKey]) {
          setThemeValue(css2, styleKey, value, theme, config);
          continue;
        }
        if (hasBreakpoint(breakpoints, value)) {
          iterateBreakpoints(css2, props.theme, value, (mediaKey, finalValue) => {
            css2[mediaKey][styleKey] = finalValue;
          });
        } else {
          wrapper2.sx = value;
          css2[styleKey] = styleFunctionSx(wrapper2);
        }
      }
      if (!nested && theme.modularCssLayers) {
        return {
          "@layer sx": sortContainerQueries(theme, removeUnusedBreakpoints(breakpoints, css2))
        };
      }
      return sortContainerQueries(theme, removeUnusedBreakpoints(breakpoints, css2));
    }
    return Array.isArray(sx) ? sx.map(process2) : process2(sx);
  }
  styleFunctionSx.filterProps = ["sx"];
  return styleFunctionSx;
}
var styleFunctionSx_default = unstable_createStyleFunctionSx();
function setThemeValue(css2, prop, value, theme, config) {
  const options = config[prop];
  if (!options) {
    css2[prop] = value;
    return;
  }
  if (value == null) {
    return;
  }
  const {
    themeKey
  } = options;
  if (themeKey === "typography" && value === "inherit") {
    css2[prop] = value;
    return;
  }
  const {
    style: style4
  } = options;
  if (style4) {
    fastDeepAssign(css2, style4({
      [prop]: value,
      theme
    }));
    return;
  }
  const {
    cssProperty = prop,
    transform
  } = options;
  const themeMapping = getPath(theme, themeKey);
  iterateBreakpoints(css2, theme, value, (mediaKey, valueFinal) => {
    const finalValue = getStyleValue2(themeMapping, transform, valueFinal, prop);
    if (cssProperty === false) {
      if (mediaKey) {
        css2[mediaKey] = finalValue;
      } else {
        fastDeepAssign(css2, finalValue);
      }
    } else {
      if (mediaKey) {
        css2[mediaKey][cssProperty] = finalValue;
      } else {
        css2[cssProperty] = finalValue;
      }
    }
  });
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}

// node_modules/@mui/lab/node_modules/@mui/system/createTheme/applyStyles.mjs
function applyStyles(key, styles) {
  const theme = this;
  if (theme.vars) {
    if (!theme.colorSchemes?.[key] || typeof theme.getColorSchemeSelector !== "function") {
      return {};
    }
    let selector = theme.getColorSchemeSelector(key);
    if (selector === "&") {
      return styles;
    }
    if (selector.includes("data-") || selector.includes(".")) {
      selector = `*:where(${selector.replace(/\s*&$/, "")}) &`;
    }
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

// node_modules/@mui/lab/node_modules/@mui/system/createTheme/createTheme.mjs
function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {},
    ...other
  } = options;
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing2 = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...paletteInput
    },
    spacing: spacing2,
    shape: {
      ...shape_default,
      ...shapeInput
    }
  }, other);
  muiTheme = cssContainerQueries(muiTheme);
  muiTheme.applyStyles = applyStyles;
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig_default,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  muiTheme.internal_cache = {};
  return muiTheme;
}
var createTheme_default = createTheme;

// node_modules/@mui/lab/node_modules/@mui/system/useThemeWithoutDefault/useThemeWithoutDefault.mjs
var React3 = __toESM(require_react(), 1);
function isObjectEmpty2(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme4 = null) {
  const contextTheme = React3.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty2(contextTheme) ? defaultTheme4 : contextTheme;
}
var useThemeWithoutDefault_default = useTheme;

// node_modules/@mui/lab/node_modules/@mui/system/useTheme/useTheme.mjs
var systemDefaultTheme = createTheme_default();
function useTheme2(defaultTheme4 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme4);
}
var useTheme_default = useTheme2;

// node_modules/@mui/lab/node_modules/@mui/system/GlobalStyles/GlobalStyles.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function wrapGlobalLayer(styles) {
  const serialized = internal_serializeStyles(styles);
  if (styles !== serialized && serialized.styles) {
    if (!serialized.styles.match(/^@layer\s+[^{]*$/)) {
      serialized.styles = `@layer global{${serialized.styles}}`;
    }
    return serialized;
  }
  return styles;
}
function GlobalStyles2({
  styles,
  themeId,
  defaultTheme: defaultTheme4 = {}
}) {
  const upperTheme = useTheme_default(defaultTheme4);
  const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
  let globalStyles = typeof styles === "function" ? styles(resolvedTheme) : styles;
  if (resolvedTheme.modularCssLayers) {
    if (Array.isArray(globalStyles)) {
      globalStyles = globalStyles.map((styleArg) => {
        if (typeof styleArg === "function") {
          return wrapGlobalLayer(styleArg(resolvedTheme));
        }
        return wrapGlobalLayer(styleArg);
      });
    } else {
      globalStyles = wrapGlobalLayer(globalStyles);
    }
  }
  return (0, import_jsx_runtime3.jsx)(GlobalStyles, {
    styles: globalStyles
  });
}
true ? GlobalStyles2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: import_prop_types5.default.object,
  /**
   * @ignore
   */
  styles: import_prop_types5.default.oneOfType([import_prop_types5.default.array, import_prop_types5.default.func, import_prop_types5.default.number, import_prop_types5.default.object, import_prop_types5.default.string, import_prop_types5.default.bool]),
  /**
   * @ignore
   */
  themeId: import_prop_types5.default.string
} : void 0;
var GlobalStyles_default = GlobalStyles2;

// node_modules/@mui/lab/node_modules/@mui/system/display/display.mjs
var displayPrint = style({
  prop: "displayPrint",
  cssProperty: false,
  transform: (value) => ({
    "@media print": {
      display: value
    }
  })
});
var displayRaw = style({
  prop: "display"
});
var overflow = style({
  prop: "overflow"
});
var textOverflow = style({
  prop: "textOverflow"
});
var visibility = style({
  prop: "visibility"
});
var whiteSpace = style({
  prop: "whiteSpace"
});
var display_default = compose_default(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

// node_modules/@mui/lab/node_modules/@mui/system/flexbox/flexbox.mjs
var flexBasis = style({
  prop: "flexBasis"
});
var flexDirection = style({
  prop: "flexDirection"
});
var flexWrap = style({
  prop: "flexWrap"
});
var justifyContent = style({
  prop: "justifyContent"
});
var alignItems = style({
  prop: "alignItems"
});
var alignContent = style({
  prop: "alignContent"
});
var order = style({
  prop: "order"
});
var flex = style({
  prop: "flex"
});
var flexGrow = style({
  prop: "flexGrow"
});
var flexShrink = style({
  prop: "flexShrink"
});
var alignSelf = style({
  prop: "alignSelf"
});
var justifyItems = style({
  prop: "justifyItems"
});
var justifySelf = style({
  prop: "justifySelf"
});
var flexbox = compose_default(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
var flexbox_default = flexbox;

// node_modules/@mui/lab/node_modules/@mui/system/positions/positions.mjs
var position = style({
  prop: "position"
});
var zIndex = style({
  prop: "zIndex",
  themeKey: "zIndex"
});
var top = style({
  prop: "top"
});
var right = style({
  prop: "right"
});
var bottom = style({
  prop: "bottom"
});
var left = style({
  prop: "left"
});
var positions_default = compose_default(position, zIndex, top, right, bottom, left);

// node_modules/@mui/lab/node_modules/@mui/system/shadows/shadows.mjs
var boxShadow = style({
  prop: "boxShadow",
  themeKey: "shadows"
});
var shadows_default = boxShadow;

// node_modules/@mui/lab/node_modules/@mui/system/typography/typography.mjs
var fontFamily = style({
  prop: "fontFamily",
  themeKey: "typography"
});
var fontSize = style({
  prop: "fontSize",
  themeKey: "typography"
});
var fontStyle = style({
  prop: "fontStyle",
  themeKey: "typography"
});
var fontWeight = style({
  prop: "fontWeight",
  themeKey: "typography"
});
var letterSpacing = style({
  prop: "letterSpacing"
});
var textTransform = style({
  prop: "textTransform"
});
var lineHeight = style({
  prop: "lineHeight"
});
var textAlign = style({
  prop: "textAlign"
});
var typographyVariant = style({
  prop: "typography",
  cssProperty: false,
  themeKey: "typography"
});
var typography = compose_default(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
var typography_default = typography;

// node_modules/@mui/lab/node_modules/@mui/system/getThemeValue/getThemeValue.mjs
var filterPropsMapping = {
  borders: borders_default.filterProps,
  display: display_default.filterProps,
  flexbox: flexbox_default.filterProps,
  grid: cssGrid_default.filterProps,
  positions: positions_default.filterProps,
  palette: palette_default.filterProps,
  shadows: shadows_default.filterProps,
  sizing: sizing_default.filterProps,
  spacing: spacing_default.filterProps,
  typography: typography_default.filterProps
};
var styleFunctionMapping = {
  borders: borders_default,
  display: display_default,
  flexbox: flexbox_default,
  grid: cssGrid_default,
  positions: positions_default,
  palette: palette_default,
  shadows: shadows_default,
  sizing: sizing_default,
  spacing: spacing_default,
  typography: typography_default
};
var propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach((propName) => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});

// node_modules/@mui/lab/node_modules/@mui/system/Box/Box.mjs
var import_prop_types6 = __toESM(require_prop_types(), 1);

// node_modules/@mui/lab/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs
var defaultGenerator = (componentName) => componentName;
var createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
var ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator_default = ClassNameGenerator;

// node_modules/@mui/lab/node_modules/@mui/system/createBox/createBox.mjs
var React4 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function createBox(options = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme4,
    defaultClassName = "MuiBox-root",
    generateClassName
  } = options;
  const BoxRoot = styled2("div", {
    shouldForwardProp: (prop) => prop !== "theme" && prop !== "sx" && prop !== "as"
  })(styleFunctionSx_default);
  const Box2 = React4.forwardRef(function Box3(inProps, ref) {
    const theme = useTheme_default(defaultTheme4);
    const {
      className,
      component = "div",
      ...other
    } = inProps;
    return (0, import_jsx_runtime4.jsx)(BoxRoot, {
      as: component,
      ref,
      className: clsx_default(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme,
      ...other
    });
  });
  return Box2;
}

// node_modules/@mui/lab/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs
var globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}

// node_modules/@mui/lab/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}

// node_modules/@mui/lab/node_modules/@mui/system/Box/boxClasses.mjs
var boxClasses = generateUtilityClasses("MuiBox", ["root"]);
var boxClasses_default = boxClasses;

// node_modules/@mui/lab/node_modules/@mui/system/Box/Box.mjs
var Box = createBox({
  defaultClassName: boxClasses_default.root,
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types6.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types6.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object])
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/utils/getDisplayName/getDisplayName.mjs
var import_react_is2 = __toESM(require_react_is(), 1);
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (typeof Component === "object") {
    switch (Component.$$typeof) {
      case import_react_is2.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case import_react_is2.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}

// node_modules/@mui/lab/node_modules/@mui/system/preprocessStyles.mjs
function preprocessStyles(input) {
  const {
    variants,
    ...style4
  } = input;
  const result = {
    variants,
    style: internal_serializeStyles(style4),
    isProcessed: true
  };
  if (result.style === style4) {
    return result;
  }
  if (variants) {
    variants.forEach((variant) => {
      if (typeof variant.style !== "function") {
        variant.style = internal_serializeStyles(variant.style);
      }
    });
  }
  return result;
}

// node_modules/@mui/lab/node_modules/@mui/system/createStyled/createStyled.mjs
var systemDefaultTheme2 = createTheme_default();
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
function shallowLayer(serialized, layerName) {
  if (layerName && serialized && typeof serialized === "object" && serialized.styles && !serialized.styles.startsWith("@layer")) {
    serialized.styles = `@layer ${layerName}{${String(serialized.styles)}}`;
  }
  return serialized;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (_props, styles) => styles[slot];
}
function attachTheme(props, themeId, defaultTheme4) {
  props.theme = isObjectEmpty(props.theme) ? defaultTheme4 : props.theme[themeId] || props.theme;
}
function processStyle(props, style4, layerName) {
  const resolvedStyle = typeof style4 === "function" ? style4(props) : style4;
  if (Array.isArray(resolvedStyle)) {
    return resolvedStyle.flatMap((subStyle) => processStyle(props, subStyle, layerName));
  }
  if (Array.isArray(resolvedStyle?.variants)) {
    let rootStyle;
    if (resolvedStyle.isProcessed) {
      rootStyle = layerName ? shallowLayer(resolvedStyle.style, layerName) : resolvedStyle.style;
    } else {
      const {
        variants,
        ...otherStyles
      } = resolvedStyle;
      rootStyle = layerName ? shallowLayer(internal_serializeStyles(otherStyles), layerName) : otherStyles;
    }
    return processStyleVariants(props, resolvedStyle.variants, [rootStyle], layerName);
  }
  if (resolvedStyle?.isProcessed) {
    return layerName ? shallowLayer(internal_serializeStyles(resolvedStyle.style), layerName) : resolvedStyle.style;
  }
  return layerName ? shallowLayer(internal_serializeStyles(resolvedStyle), layerName) : resolvedStyle;
}
function processStyleVariants(props, variants, results = [], layerName = void 0) {
  let mergedState;
  variantLoop: for (let i = 0; i < variants.length; i += 1) {
    const variant = variants[i];
    if (typeof variant.props === "function") {
      mergedState ??= {
        ...props,
        ...props.ownerState,
        ownerState: props.ownerState
      };
      if (!variant.props(mergedState)) {
        continue;
      }
    } else {
      for (const key in variant.props) {
        if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) {
          continue variantLoop;
        }
      }
    }
    if (typeof variant.style === "function") {
      mergedState ??= {
        ...props,
        ...props.ownerState,
        ownerState: props.ownerState
      };
      results.push(layerName ? shallowLayer(internal_serializeStyles(variant.style(mergedState)), layerName) : variant.style(mergedState));
    } else {
      results.push(layerName ? shallowLayer(internal_serializeStyles(variant.style), layerName) : variant.style);
    }
  }
  return results;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme4 = systemDefaultTheme2,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  function styleAttachTheme(props) {
    attachTheme(props, themeId, defaultTheme4);
  }
  const styled4 = (tag, inputOptions = {}) => {
    internal_mutateStyles(tag, (styles) => styles.filter((style4) => style4 !== styleFunctionSx_default));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)),
      ...options
    } = inputOptions;
    const layerName = componentName && componentName.startsWith("Mui") || !!componentSlot ? "components" : "custom";
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
    );
    const skipSx = inputSkipSx || false;
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root" || componentSlot === "root") {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = styled2(tag, {
      shouldForwardProp: shouldForwardPropOption,
      label: generateStyledLabel(componentName, componentSlot),
      ...options
    });
    const transformStyle = (style4) => {
      if (style4.__emotion_real === style4) {
        return style4;
      }
      if (typeof style4 === "function") {
        return function styleFunctionProcessor(props) {
          return processStyle(props, style4, props.theme.modularCssLayers ? layerName : void 0);
        };
      }
      if (isPlainObject(style4)) {
        const serialized = preprocessStyles(style4);
        return function styleObjectProcessor(props) {
          if (!serialized.variants) {
            return props.theme.modularCssLayers ? shallowLayer(serialized.style, layerName) : serialized.style;
          }
          return processStyle(props, serialized, props.theme.modularCssLayers ? layerName : void 0);
        };
      }
      return style4;
    };
    const muiStyledResolver = (...expressionsInput) => {
      const expressionsHead = [];
      const expressionsBody = expressionsInput.map(transformStyle);
      const expressionsTail = [];
      expressionsHead.push(styleAttachTheme);
      if (componentName && overridesResolver) {
        expressionsTail.push(function styleThemeOverrides(props) {
          const theme = props.theme;
          const styleOverrides = theme.components?.[componentName]?.styleOverrides;
          if (!styleOverrides) {
            return null;
          }
          const resolvedStyleOverrides = {};
          for (const slotKey in styleOverrides) {
            resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey], props.theme.modularCssLayers ? "theme" : void 0);
          }
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsTail.push(function styleThemeVariants(props) {
          const theme = props.theme;
          const themeVariants = theme?.components?.[componentName]?.variants;
          if (!themeVariants) {
            return null;
          }
          return processStyleVariants(props, themeVariants, [], props.theme.modularCssLayers ? "theme" : void 0);
        });
      }
      if (!skipSx) {
        expressionsTail.push(styleFunctionSx_default);
      }
      if (Array.isArray(expressionsBody[0])) {
        const inputStrings = expressionsBody.shift();
        const placeholdersHead = new Array(expressionsHead.length).fill("");
        const placeholdersTail = new Array(expressionsTail.length).fill("");
        let outputStrings;
        {
          outputStrings = [...placeholdersHead, ...inputStrings, ...placeholdersTail];
          outputStrings.raw = [...placeholdersHead, ...inputStrings.raw, ...placeholdersTail];
        }
        expressionsHead.unshift(outputStrings);
      }
      const expressions = [...expressionsHead, ...expressionsBody, ...expressionsTail];
      const Component = defaultStyledResolver(...expressions);
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      if (true) {
        Component.displayName = generateDisplayName(componentName, componentSlot, tag);
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
  return styled4;
}
function generateDisplayName(componentName, componentSlot, tag) {
  if (componentName) {
    return `${componentName}${capitalize(componentSlot || "")}`;
  }
  return `Styled(${getDisplayName(tag)})`;
}
function generateStyledLabel(componentName, componentSlot) {
  let label;
  if (true) {
    if (componentName) {
      label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
    }
  }
  return label;
}
function isStringTag(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}

// node_modules/@mui/lab/node_modules/@mui/system/styled/styled.mjs
var styled3 = createStyled();
var styled_default2 = styled3;

// node_modules/@mui/lab/node_modules/@mui/utils/resolveProps/resolveProps.mjs
function resolveProps(defaultProps, props, mergeClassNameAndStyle = false) {
  const output = {
    ...props
  };
  for (const key in defaultProps) {
    if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      const propName = key;
      if (propName === "components" || propName === "slots") {
        output[propName] = {
          ...defaultProps[propName],
          ...output[propName]
        };
      } else if (propName === "componentsProps" || propName === "slotProps") {
        const defaultSlotProps = defaultProps[propName];
        const slotProps = props[propName];
        if (!slotProps) {
          output[propName] = defaultSlotProps || {};
        } else if (!defaultSlotProps) {
          output[propName] = slotProps;
        } else {
          output[propName] = {
            ...slotProps
          };
          for (const slotKey in defaultSlotProps) {
            if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
              const slotPropName = slotKey;
              output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
            }
          }
        }
      } else if (propName === "className" && mergeClassNameAndStyle && props.className) {
        output.className = clsx_default(defaultProps?.className, props?.className);
      } else if (propName === "style" && mergeClassNameAndStyle && props.style) {
        output.style = {
          ...defaultProps?.style,
          ...props?.style
        };
      } else if (output[propName] === void 0) {
        output[propName] = defaultProps[propName];
      }
    }
  }
  return output;
}

// node_modules/@mui/lab/node_modules/@mui/system/useThemeProps/getThemeProps.mjs
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}

// node_modules/@mui/lab/node_modules/@mui/system/useThemeProps/useThemeProps.mjs
function useThemeProps2({
  props,
  name,
  defaultTheme: defaultTheme4,
  themeId
}) {
  let theme = useTheme_default(defaultTheme4);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  return getThemeProps({
    theme,
    name,
    props
  });
}

// node_modules/@mui/lab/node_modules/@mui/system/useMediaQuery/useMediaQuery.mjs
var React6 = __toESM(require_react(), 1);

// node_modules/@mui/lab/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs
var React5 = __toESM(require_react(), 1);
var useEnhancedEffect = typeof window !== "undefined" ? React5.useLayoutEffect : React5.useEffect;
var useEnhancedEffect_default = useEnhancedEffect;

// node_modules/@mui/lab/node_modules/@mui/system/useMediaQuery/useMediaQuery.mjs
function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const [match, setMatch] = React6.useState(() => {
    if (noSsr && matchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }
    return defaultMatches;
  });
  useEnhancedEffect_default(() => {
    if (!matchMedia) {
      return void 0;
    }
    const queryList = matchMedia(query);
    const updateMatch = () => {
      setMatch(queryList.matches);
    };
    updateMatch();
    queryList.addEventListener("change", updateMatch);
    return () => {
      queryList.removeEventListener("change", updateMatch);
    };
  }, [query, matchMedia]);
  return match;
}
var safeReact = {
  ...React6
};
var maybeReactUseSyncExternalStore = safeReact.useSyncExternalStore;
function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const getDefaultSnapshot = React6.useCallback(() => defaultMatches, [defaultMatches]);
  const getServerSnapshot = React6.useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia(query).matches;
    }
    if (ssrMatchMedia !== null) {
      const {
        matches
      } = ssrMatchMedia(query);
      return () => matches;
    }
    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
  const [getSnapshot, subscribe] = React6.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {
      }];
    }
    const mediaQueryList = matchMedia(query);
    return [() => mediaQueryList.matches, (notify) => {
      mediaQueryList.addEventListener("change", notify);
      return () => {
        mediaQueryList.removeEventListener("change", notify);
      };
    }];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return match;
}
function unstable_createUseMediaQuery(params = {}) {
  const {
    themeId
  } = params;
  return function useMediaQuery2(queryInput, options = {}) {
    let theme = useThemeWithoutDefault_default();
    if (theme && themeId) {
      theme = theme[themeId] || theme;
    }
    const supportMatchMedia = typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
    const {
      defaultMatches = false,
      matchMedia = supportMatchMedia ? window.matchMedia : null,
      ssrMatchMedia = null,
      noSsr = false
    } = getThemeProps({
      name: "MuiUseMediaQuery",
      props: options,
      theme
    });
    if (true) {
      if (typeof queryInput === "function" && theme === null) {
        console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join("\n"));
      }
    }
    let query = typeof queryInput === "function" ? queryInput(theme) : queryInput;
    query = query.replace(/^@media( ?)/m, "");
    if (query.includes("print")) {
      console.warn([`MUI: You have provided a \`print\` query to the \`useMediaQuery\` hook.`, "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join("\n"));
    }
    const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== void 0 ? useMediaQueryNew : useMediaQueryOld;
    const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
    if (true) {
      React6.useDebugValue({
        query,
        match
      });
    }
    return match;
  };
}
var useMediaQuery = unstable_createUseMediaQuery();

// node_modules/@mui/lab/node_modules/@mui/system/ThemeProvider/ThemeProvider.mjs
var React13 = __toESM(require_react(), 1);
var import_prop_types10 = __toESM(require_prop_types(), 1);

// node_modules/@mui/lab/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.mjs
var React9 = __toESM(require_react(), 1);
var import_prop_types7 = __toESM(require_prop_types(), 1);

// node_modules/@mui/lab/node_modules/@mui/utils/exactProp/exactProp.mjs
var specialProperty = "exact-prop: ​";
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return {
    ...propTypes,
    [specialProperty]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  };
}

// node_modules/@mui/lab/node_modules/@mui/private-theming/useTheme/ThemeContext.mjs
var React7 = __toESM(require_react(), 1);
var ThemeContext2 = React7.createContext(null);
if (true) {
  ThemeContext2.displayName = "ThemeContext";
}
var ThemeContext_default = ThemeContext2;

// node_modules/@mui/lab/node_modules/@mui/private-theming/useTheme/useTheme.mjs
var React8 = __toESM(require_react(), 1);
function useTheme3() {
  const theme = React8.useContext(ThemeContext_default);
  if (true) {
    React8.useDebugValue(theme);
  }
  return theme;
}

// node_modules/@mui/lab/node_modules/@mui/private-theming/ThemeProvider/nested.mjs
var hasSymbol = typeof Symbol === "function" && Symbol.for;
var nested_default = hasSymbol ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";

// node_modules/@mui/lab/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    if (true) {
      if (!mergedTheme) {
        console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join("\n"));
      }
    }
    return mergedTheme;
  }
  return {
    ...outerTheme,
    ...localTheme
  };
}
function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme3();
  if (true) {
    if (outerTheme === null && typeof localTheme === "function") {
      console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  const theme = React9.useMemo(() => {
    const output = outerTheme === null ? {
      ...localTheme
    } : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested_default] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return (0, import_jsx_runtime5.jsx)(ThemeContext_default.Provider, {
    value: theme,
    children
  });
}
true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: import_prop_types7.default.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: import_prop_types7.default.oneOfType([import_prop_types7.default.object, import_prop_types7.default.func]).isRequired
} : void 0;
if (true) {
  true ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
}
var ThemeProvider_default = ThemeProvider;

// node_modules/@mui/lab/node_modules/@mui/system/RtlProvider/index.mjs
var React10 = __toESM(require_react(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var RtlContext = React10.createContext();
function RtlProvider({
  value,
  ...props
}) {
  return (0, import_jsx_runtime6.jsx)(RtlContext.Provider, {
    value: value ?? true,
    ...props
  });
}
true ? RtlProvider.propTypes = {
  children: import_prop_types8.default.node,
  value: import_prop_types8.default.bool
} : void 0;
var RtlProvider_default = RtlProvider;

// node_modules/@mui/lab/node_modules/@mui/system/DefaultPropsProvider/DefaultPropsProvider.mjs
var React11 = __toESM(require_react(), 1);
var import_prop_types9 = __toESM(require_prop_types(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var PropsContext = React11.createContext(void 0);
function DefaultPropsProvider({
  value,
  children
}) {
  return (0, import_jsx_runtime7.jsx)(PropsContext.Provider, {
    value,
    children
  });
}
true ? DefaultPropsProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types9.default.node,
  /**
   * @ignore
   */
  value: import_prop_types9.default.object
} : void 0;
var DefaultPropsProvider_default = DefaultPropsProvider;

// node_modules/@mui/lab/node_modules/@mui/utils/useId/useId.mjs
var React12 = __toESM(require_react(), 1);
var globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React12.useState(idOverride);
  const id = idOverride || defaultId;
  React12.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
var safeReact2 = {
  ...React12
};
var maybeReactUseId = safeReact2.useId;
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }
  return useGlobalId(idOverride);
}

// node_modules/@mui/lab/node_modules/@mui/system/ThemeProvider/useLayerOrder.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function useLayerOrder(theme) {
  const upperTheme = useThemeWithoutDefault_default();
  const id = useId() || "";
  const {
    modularCssLayers
  } = theme;
  let layerOrder = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  if (!modularCssLayers || upperTheme !== null) {
    layerOrder = "";
  } else if (typeof modularCssLayers === "string") {
    layerOrder = modularCssLayers.replace(/mui(?!\.)/g, layerOrder);
  } else {
    layerOrder = `@layer ${layerOrder};`;
  }
  useEnhancedEffect_default(() => {
    const head = document.querySelector("head");
    if (!head) {
      return;
    }
    const firstChild = head.firstChild;
    if (layerOrder) {
      if (firstChild && firstChild.hasAttribute?.("data-mui-layer-order") && firstChild.getAttribute("data-mui-layer-order") === id) {
        return;
      }
      const styleElement = document.createElement("style");
      styleElement.setAttribute("data-mui-layer-order", id);
      styleElement.textContent = layerOrder;
      head.prepend(styleElement);
    } else {
      head.querySelector(`style[data-mui-layer-order="${id}"]`)?.remove();
    }
  }, [layerOrder, id]);
  if (!layerOrder) {
    return null;
  }
  return (0, import_jsx_runtime8.jsx)(GlobalStyles_default, {
    styles: layerOrder
  });
}

// node_modules/@mui/lab/node_modules/@mui/system/ThemeProvider/ThemeProvider.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var EMPTY_THEME4 = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return React13.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === "function") {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? {
        ...upperTheme,
        [themeId]: mergedTheme
      } : mergedTheme;
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? {
      ...upperTheme,
      [themeId]: localTheme
    } : {
      ...upperTheme,
      ...localTheme
    };
  }, [themeId, upperTheme, localTheme, isPrivate]);
}
function ThemeProvider2(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useThemeWithoutDefault_default(EMPTY_THEME4);
  const upperPrivateTheme = useTheme3() || EMPTY_THEME4;
  if (true) {
    if (upperTheme === null && typeof localTheme === "function" || themeId && upperTheme && !upperTheme[themeId] && typeof localTheme === "function") {
      console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = (themeId ? engineTheme[themeId] : engineTheme).direction === "rtl";
  const layerOrder = useLayerOrder(engineTheme);
  return (0, import_jsx_runtime9.jsx)(ThemeProvider_default, {
    theme: privateTheme,
    children: (0, import_jsx_runtime9.jsx)(ThemeContext.Provider, {
      value: engineTheme,
      children: (0, import_jsx_runtime9.jsx)(RtlProvider_default, {
        value: rtlValue,
        children: (0, import_jsx_runtime9.jsxs)(DefaultPropsProvider_default, {
          value: themeId ? engineTheme[themeId].components : engineTheme.components,
          children: [layerOrder, children]
        })
      })
    })
  });
}
true ? ThemeProvider2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: import_prop_types10.default.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: import_prop_types10.default.string
} : void 0;
if (true) {
  true ? ThemeProvider2.propTypes = exactProp(ThemeProvider2.propTypes) : void 0;
}

// node_modules/@mui/lab/node_modules/@mui/system/cssVars/createCssVarsProvider.mjs
var React15 = __toESM(require_react(), 1);
var import_prop_types11 = __toESM(require_prop_types(), 1);

// node_modules/@mui/lab/node_modules/@mui/system/InitColorSchemeScript/InitColorSchemeScript.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mui/lab/node_modules/@mui/system/cssVars/useCurrentColorScheme.mjs
var React14 = __toESM(require_react(), 1);

// node_modules/@mui/lab/node_modules/@mui/system/cssVars/createCssVarsProvider.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mui/lab/node_modules/@mui/system/version/index.mjs
var major = Number("9");
var minor = Number("0");
var patch = Number("0");

// node_modules/@mui/lab/node_modules/@mui/system/Container/createContainer.mjs
var React16 = __toESM(require_react(), 1);
var import_prop_types12 = __toESM(require_prop_types(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var defaultTheme = createTheme_default();
var defaultCreateStyledComponent = styled_default2("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
  }
});
var useThemePropsDefault = (inProps) => useThemeProps2({
  props: inProps,
  name: "MuiContainer",
  defaultTheme
});
var useUtilityClasses = (ownerState, componentName) => {
  const getContainerUtilityClass = (slot) => {
    return generateUtilityClass(componentName, slot);
  };
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth: maxWidth2
  } = ownerState;
  const slots = {
    root: ["root", maxWidth2 && `maxWidth${capitalize(String(maxWidth2))}`, fixed && "fixed", disableGutters && "disableGutters"]
  };
  return composeClasses(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps: useThemeProps3 = useThemePropsDefault,
    componentName = "MuiContainer"
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    ...!ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    }
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...ownerState.maxWidth === "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up("xs")]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(theme.breakpoints.values.xs, 444)
      }
    },
    ...ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
    ownerState.maxWidth !== "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up(ownerState.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
      }
    }
  }));
  const Container2 = React16.forwardRef(function Container3(inProps, ref) {
    const props = useThemeProps3(inProps);
    const {
      className,
      component = "div",
      disableGutters = false,
      fixed = false,
      maxWidth: maxWidth2 = "lg",
      classes: classesProp,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      disableGutters,
      fixed,
      maxWidth: maxWidth2
    };
    const classes = useUtilityClasses(ownerState, componentName);
    return (
      // @ts-ignore theme is injected by the styled util
      (0, import_jsx_runtime12.jsx)(ContainerRoot, {
        as: component,
        ownerState,
        className: clsx_default(classes.root, className),
        ref,
        ...other
      })
    );
  });
  true ? Container2.propTypes = {
    children: import_prop_types12.default.node,
    classes: import_prop_types12.default.object,
    className: import_prop_types12.default.string,
    component: import_prop_types12.default.elementType,
    disableGutters: import_prop_types12.default.bool,
    fixed: import_prop_types12.default.bool,
    maxWidth: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types12.default.string]),
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object])
  } : void 0;
  return Container2;
}

// node_modules/@mui/lab/node_modules/@mui/system/Container/Container.mjs
var import_prop_types13 = __toESM(require_prop_types(), 1);
var Container = createContainer();
true ? Container.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types13.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types13.default.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types13.default.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types13.default.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: import_prop_types13.default.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types13.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object])
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/system/Container/containerClasses.mjs
var containerClasses = generateUtilityClasses("MuiContainer", ["root", "disableGutters", "fixed", "maxWidthXs", "maxWidthSm", "maxWidthMd", "maxWidthLg", "maxWidthXl"]);

// node_modules/@mui/lab/node_modules/@mui/system/Grid/Grid.mjs
var import_prop_types15 = __toESM(require_prop_types(), 1);

// node_modules/@mui/lab/node_modules/@mui/system/Grid/createGrid.mjs
var React18 = __toESM(require_react(), 1);
var import_prop_types14 = __toESM(require_prop_types(), 1);

// node_modules/@mui/lab/node_modules/@mui/utils/isMuiElement/isMuiElement.mjs
var React17 = __toESM(require_react(), 1);
function isMuiElement(element, muiNames) {
  return React17.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    element.type.muiName ?? element.type?._payload?.value?.muiName
  ) !== -1;
}

// node_modules/@mui/lab/node_modules/@mui/system/Grid/traverseBreakpoints.mjs
var filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter((key) => responsiveKeys.includes(key));
var traverseBreakpoints = (breakpoints, responsive, iterator) => {
  const smallestBreakpoint = breakpoints.keys[0];
  if (Array.isArray(responsive)) {
    responsive.forEach((breakpointValue, index) => {
      iterator((responsiveStyles, style4) => {
        if (index <= breakpoints.keys.length - 1) {
          if (index === 0) {
            Object.assign(responsiveStyles, style4);
          } else {
            responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style4;
          }
        }
      }, breakpointValue);
    });
  } else if (responsive && typeof responsive === "object") {
    const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
    keys.forEach((key) => {
      if (breakpoints.keys.includes(key)) {
        const breakpointValue = responsive[key];
        if (breakpointValue !== void 0) {
          iterator((responsiveStyles, style4) => {
            if (smallestBreakpoint === key) {
              Object.assign(responsiveStyles, style4);
            } else {
              responsiveStyles[breakpoints.up(key)] = style4;
            }
          }, breakpointValue);
        }
      }
    });
  } else if (typeof responsive === "number" || typeof responsive === "string") {
    iterator((responsiveStyles, style4) => {
      Object.assign(responsiveStyles, style4);
    }, responsive);
  }
};

// node_modules/@mui/lab/node_modules/@mui/system/Grid/gridGenerator.mjs
function getSelfSpacingVar(axis) {
  return `--Grid-${axis}Spacing`;
}
function getParentSpacingVar(axis) {
  return `--Grid-parent-${axis}Spacing`;
}
var selfColumnsVar = "--Grid-columns";
var parentColumnsVar = "--Grid-parent-columns";
var generateGridSizeStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.size, (appendStyle, value) => {
    let style4 = {};
    if (value === "grow") {
      style4 = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    }
    if (value === "auto") {
      style4 = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    }
    if (typeof value === "number") {
      style4 = {
        flexGrow: 0,
        flexBasis: "auto",
        width: `calc(100% * ${value} / var(${parentColumnsVar}) - (var(${parentColumnsVar}) - ${value}) * (var(${getParentSpacingVar("column")}) / var(${parentColumnsVar})))`
      };
    }
    appendStyle(styles, style4);
  });
  return styles;
};
var generateGridOffsetStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.offset, (appendStyle, value) => {
    let style4 = {};
    if (value === "auto") {
      style4 = {
        marginLeft: "auto"
      };
    }
    if (typeof value === "number") {
      style4 = {
        marginLeft: value === 0 ? "0px" : `calc(100% * ${value} / var(${parentColumnsVar}) + var(${getParentSpacingVar("column")}) * ${value} / var(${parentColumnsVar}))`
      };
    }
    appendStyle(styles, style4);
  });
  return styles;
};
var generateGridColumnsStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {
    [selfColumnsVar]: 12
  };
  traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
    const columns = value ?? 12;
    appendStyle(styles, {
      [selfColumnsVar]: columns,
      "> *": {
        [parentColumnsVar]: columns
      }
    });
  });
  return styles;
};
var generateGridRowSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
    const spacing2 = typeof value === "string" ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar("row")]: spacing2,
      "> *": {
        [getParentSpacingVar("row")]: spacing2
      }
    });
  });
  return styles;
};
var generateGridColumnSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
    const spacing2 = typeof value === "string" ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar("column")]: spacing2,
      "> *": {
        [getParentSpacingVar("column")]: spacing2
      }
    });
  });
  return styles;
};
var generateGridDirectionStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
    appendStyle(styles, {
      flexDirection: value
    });
  });
  return styles;
};
var generateGridStyles = ({
  ownerState
}) => {
  return {
    minWidth: 0,
    boxSizing: "border-box",
    ...ownerState.container && {
      display: "flex",
      flexWrap: "wrap",
      ...ownerState.wrap && ownerState.wrap !== "wrap" && {
        flexWrap: ownerState.wrap
      },
      gap: `var(${getSelfSpacingVar("row")}) var(${getSelfSpacingVar("column")})`
    }
  };
};
var generateSizeClassNames = (size) => {
  const classNames = [];
  Object.entries(size).forEach(([key, value]) => {
    if (value !== false && value !== void 0) {
      classNames.push(`grid-${key}-${String(value)}`);
    }
  });
  return classNames;
};
var generateSpacingClassNames = (spacing2, smallestBreakpoint = "xs") => {
  function isValidSpacing(val) {
    if (val === void 0) {
      return false;
    }
    return typeof val === "string" && !Number.isNaN(Number(val)) || typeof val === "number" && val > 0;
  }
  if (isValidSpacing(spacing2)) {
    return [`spacing-${smallestBreakpoint}-${String(spacing2)}`];
  }
  if (typeof spacing2 === "object" && !Array.isArray(spacing2)) {
    const classNames = [];
    Object.entries(spacing2).forEach(([key, value]) => {
      if (isValidSpacing(value)) {
        classNames.push(`spacing-${key}-${String(value)}`);
      }
    });
    return classNames;
  }
  return [];
};
var generateDirectionClasses = (direction) => {
  if (direction === void 0) {
    return [];
  }
  if (typeof direction === "object") {
    return Object.entries(direction).map(([key, value]) => `direction-${key}-${value}`);
  }
  return [`direction-xs-${String(direction)}`];
};

// node_modules/@mui/lab/node_modules/@mui/system/Grid/createGrid.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var defaultTheme2 = createTheme_default();
var defaultCreateStyledComponent2 = styled_default2("div", {
  name: "MuiGrid",
  slot: "Root"
});
function useThemePropsDefault2(props) {
  return useThemeProps2({
    props,
    name: "MuiGrid",
    defaultTheme: defaultTheme2
  });
}
function createGrid(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent2,
    useThemeProps: useThemeProps3 = useThemePropsDefault2,
    useTheme: useTheme4 = useTheme_default,
    componentName = "MuiGrid"
  } = options;
  const useUtilityClasses3 = (ownerState, theme) => {
    const {
      container: container2,
      direction,
      spacing: spacing2,
      wrap,
      size
    } = ownerState;
    const slots = {
      root: ["root", container2 && "container", wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...generateDirectionClasses(direction), ...generateSizeClassNames(size), ...container2 ? generateSpacingClassNames(spacing2, theme.breakpoints.keys[0]) : []]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  function parseResponsiveProp(propValue, breakpoints, shouldUseValue = () => true) {
    const parsedProp = {};
    if (propValue === null) {
      return parsedProp;
    }
    if (Array.isArray(propValue)) {
      propValue.forEach((value, index) => {
        if (value !== null && shouldUseValue(value) && breakpoints.keys[index]) {
          parsedProp[breakpoints.keys[index]] = value;
        }
      });
    } else if (typeof propValue === "object") {
      Object.keys(propValue).forEach((key) => {
        const value = propValue[key];
        if (value !== null && value !== void 0 && shouldUseValue(value)) {
          parsedProp[key] = value;
        }
      });
    } else {
      parsedProp[breakpoints.keys[0]] = propValue;
    }
    return parsedProp;
  }
  const GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  const Grid2 = React18.forwardRef(function Grid3(inProps, ref) {
    const theme = useTheme4();
    const themeProps = useThemeProps3(inProps);
    const props = themeProps;
    const {
      className,
      children,
      columns: columnsProp = 12,
      container: container2 = false,
      component = "div",
      direction = "row",
      wrap = "wrap",
      size: sizeProp = {},
      offset: offsetProp = {},
      spacing: spacingProp = 0,
      rowSpacing: rowSpacingProp = spacingProp,
      columnSpacing: columnSpacingProp = spacingProp,
      unstable_level: level = 0,
      ...other
    } = props;
    const size = parseResponsiveProp(sizeProp, theme.breakpoints, (val) => val !== false);
    const offset = parseResponsiveProp(offsetProp, theme.breakpoints);
    const columns = inProps.columns ?? (level ? void 0 : columnsProp);
    const spacing2 = inProps.spacing ?? (level ? void 0 : spacingProp);
    const rowSpacing = inProps.rowSpacing ?? inProps.spacing ?? (level ? void 0 : rowSpacingProp);
    const columnSpacing = inProps.columnSpacing ?? inProps.spacing ?? (level ? void 0 : columnSpacingProp);
    const ownerState = {
      ...props,
      level,
      columns,
      container: container2,
      direction,
      wrap,
      spacing: spacing2,
      rowSpacing,
      columnSpacing,
      size,
      offset
    };
    const classes = useUtilityClasses3(ownerState, theme);
    return (0, import_jsx_runtime13.jsx)(GridRoot, {
      ref,
      as: component,
      ownerState,
      className: clsx_default(classes.root, className),
      ...other,
      children: React18.Children.map(children, (child) => {
        if (React18.isValidElement(child) && isMuiElement(child, ["Grid"]) && container2 && child.props.container) {
          return React18.cloneElement(child, {
            unstable_level: child.props?.unstable_level ?? level + 1
          });
        }
        return child;
      })
    });
  });
  true ? Grid2.propTypes = {
    children: import_prop_types14.default.node,
    className: import_prop_types14.default.string,
    columns: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.number), import_prop_types14.default.number, import_prop_types14.default.object]),
    columnSpacing: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string])), import_prop_types14.default.number, import_prop_types14.default.object, import_prop_types14.default.string]),
    component: import_prop_types14.default.elementType,
    container: import_prop_types14.default.bool,
    direction: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types14.default.arrayOf(import_prop_types14.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types14.default.object]),
    offset: import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.number, import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.number])), import_prop_types14.default.object]),
    rowSpacing: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string])), import_prop_types14.default.number, import_prop_types14.default.object, import_prop_types14.default.string]),
    size: import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.bool, import_prop_types14.default.number, import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.bool, import_prop_types14.default.number])), import_prop_types14.default.object]),
    spacing: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string])), import_prop_types14.default.number, import_prop_types14.default.object, import_prop_types14.default.string]),
    sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
    wrap: import_prop_types14.default.oneOf(["nowrap", "wrap-reverse", "wrap"])
  } : void 0;
  Grid2.muiName = "Grid";
  return Grid2;
}

// node_modules/@mui/lab/node_modules/@mui/system/Grid/Grid.mjs
var Grid = createGrid();
true ? Grid.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types15.default.node,
  /**
   * The number of columns.
   * @default 12
   */
  columns: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.number), import_prop_types15.default.number, import_prop_types15.default.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string])), import_prop_types15.default.number, import_prop_types15.default.object, import_prop_types15.default.string]),
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: import_prop_types15.default.bool,
  /**
   * Defines the `flex-direction` style property for the container.
   *
   * ⚠️ Only `row` and `row-reverse` are supported. `column` and `column-reverse` are not supported,
   * because the Grid component is designed to subdivide layouts into **columns**, not rows.
   *
   * For vertical layouts, use `Stack` instead.
   *
   * @default 'row'
   */
  direction: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["row-reverse", "row"]), import_prop_types15.default.arrayOf(import_prop_types15.default.oneOf(["row-reverse", "row"])), import_prop_types15.default.object]),
  /**
   * Defines the offset value for the type `item` components.
   */
  offset: import_prop_types15.default.oneOfType([import_prop_types15.default.string, import_prop_types15.default.number, import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.string, import_prop_types15.default.number])), import_prop_types15.default.object]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string])), import_prop_types15.default.number, import_prop_types15.default.object, import_prop_types15.default.string]),
  /**
   * Defines the size of the the type `item` components.
   */
  size: import_prop_types15.default.oneOfType([import_prop_types15.default.string, import_prop_types15.default.bool, import_prop_types15.default.number, import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.string, import_prop_types15.default.bool, import_prop_types15.default.number])), import_prop_types15.default.object]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string])), import_prop_types15.default.number, import_prop_types15.default.object, import_prop_types15.default.string]),
  /**
   * @ignore
   */
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
  /**
   * @internal
   * The level of the grid starts from `0` and increases when the grid nests
   * inside another grid. Nesting is defined as a container Grid being a direct
   * child of a container Grid.
   *
   * ```js
   * <Grid container> // level 0
   *   <Grid container> // level 1
   *     <Grid container> // level 2
   * ```
   *
   * Only consecutive grid is considered nesting. A grid container will start at
   * `0` if there are non-Grid container element above it.
   *
   * ```js
   * <Grid container> // level 0
   *   <div>
   *     <Grid container> // level 0
   * ```
   *
   * ```js
   * <Grid container> // level 0
   *   <Grid>
   *     <Grid container> // level 0
   * ```
   */
  unstable_level: import_prop_types15.default.number,
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: import_prop_types15.default.oneOf(["nowrap", "wrap-reverse", "wrap"])
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/system/Grid/gridClasses.mjs
var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
var WRAPS = ["nowrap", "wrap-reverse", "wrap"];
var GRID_SIZES = ["auto", "grow", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var gridClasses = generateUtilityClasses("MuiGrid", [
  "root",
  "container",
  "item",
  // spacings
  ...SPACINGS.map((spacing2) => `spacing-xs-${spacing2}`),
  // direction values
  ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
  // wrap values
  ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
  // grid sizes for all breakpoints
  ...GRID_SIZES.map((size) => `grid-xs-${size}`),
  ...GRID_SIZES.map((size) => `grid-sm-${size}`),
  ...GRID_SIZES.map((size) => `grid-md-${size}`),
  ...GRID_SIZES.map((size) => `grid-lg-${size}`),
  ...GRID_SIZES.map((size) => `grid-xl-${size}`)
]);

// node_modules/@mui/lab/node_modules/@mui/system/Stack/Stack.mjs
var import_prop_types17 = __toESM(require_prop_types(), 1);

// node_modules/@mui/lab/node_modules/@mui/system/Stack/createStack.mjs
var React19 = __toESM(require_react(), 1);
var import_prop_types16 = __toESM(require_prop_types(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var defaultTheme3 = createTheme_default();
var defaultCreateStyledComponent3 = styled_default2("div", {
  name: "MuiStack",
  slot: "Root"
});
function useThemePropsDefault3(props) {
  return useThemeProps2({
    props,
    name: "MuiStack",
    defaultTheme: defaultTheme3
  });
}
function joinChildren(children, separator) {
  const childrenArray = React19.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(React19.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
var getSideFromDirection = (direction) => {
  return {
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  }[direction];
};
var style3 = ({
  ownerState,
  theme
}) => {
  let styles = {
    display: "flex",
    flexDirection: "column",
    ...handleBreakpoints({
      theme
    }, resolveBreakpointValues({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), (propValue) => ({
      flexDirection: propValue
    }))
  };
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base
    });
    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === "object") {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: getValue(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
        }
      };
    };
    styles = deepmerge(styles, handleBreakpoints({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent3,
    useThemeProps: useThemeProps3 = useThemePropsDefault3,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses3 = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style3);
  const Stack2 = React19.forwardRef(function Grid2(inProps, ref) {
    const themeProps = useThemeProps3(inProps);
    const {
      component = "div",
      direction = "column",
      spacing: spacing2 = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = themeProps;
    const ownerState = {
      direction,
      spacing: spacing2,
      useFlexGap
    };
    const classes = useUtilityClasses3();
    return (0, import_jsx_runtime14.jsx)(StackRoot, {
      as: component,
      ownerState,
      ref,
      className: clsx_default(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
  true ? Stack2.propTypes = {
    children: import_prop_types16.default.node,
    direction: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types16.default.arrayOf(import_prop_types16.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types16.default.object]),
    divider: import_prop_types16.default.node,
    spacing: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])), import_prop_types16.default.number, import_prop_types16.default.object, import_prop_types16.default.string]),
    sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object])
  } : void 0;
  return Stack2;
}

// node_modules/@mui/lab/node_modules/@mui/system/Stack/Stack.mjs
var Stack = createStack();
true ? Stack.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types17.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types17.default.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types17.default.arrayOf(import_prop_types17.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types17.default.object]),
  /**
   * Add an element between each child.
   */
  divider: import_prop_types17.default.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.number, import_prop_types17.default.string])), import_prop_types17.default.number, import_prop_types17.default.object, import_prop_types17.default.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the theme's default props configuration.
   * @default false
   */
  useFlexGap: import_prop_types17.default.bool
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/system/Stack/stackClasses.mjs
var stackClasses = generateUtilityClasses("MuiStack", ["root"]);

// node_modules/@mui/lab/node_modules/@mui/utils/useForkRef/useForkRef.mjs
var React20 = __toESM(require_react(), 1);
function useForkRef(...refs) {
  const cleanupRef = React20.useRef(void 0);
  const refEffect = React20.useCallback((instance) => {
    const cleanups = refs.map((ref) => {
      if (ref == null) {
        return null;
      }
      if (typeof ref === "function") {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === "function" ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach((refCleanup) => refCleanup?.());
    };
  }, refs);
  return React20.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = void 0;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
  }, refs);
}

// node_modules/@mui/lab/Masonry/Masonry.mjs
var import_prop_types18 = __toESM(require_prop_types(), 1);
var React21 = __toESM(require_react(), 1);

// node_modules/@mui/lab/Masonry/masonryClasses.mjs
function getMasonryUtilityClass(slot) {
  return generateUtilityClass("MuiMasonry", slot);
}
var masonryClasses = generateUtilityClasses("MuiMasonry", ["root"]);
var masonryClasses_default = masonryClasses;

// node_modules/@mui/lab/Masonry/Masonry.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var parseToNumber = (val) => {
  return Number(val.replace("px", ""));
};
var lineBreakStyle = {
  flexBasis: "100%",
  width: 0,
  margin: 0,
  padding: 0
};
var useUtilityClasses2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMasonryUtilityClass, classes);
};
var getStyle = ({
  ownerState,
  theme
}) => {
  let styles = {
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "flex-start",
    boxSizing: "border-box",
    "& > *": {
      boxSizing: "border-box"
    }
  };
  const stylesSSR = {};
  if (ownerState.isSSR) {
    const orderStyleSSR = {};
    const defaultSpacing = parseToNumber(theme.spacing(ownerState.defaultSpacing));
    for (let i = 1; i <= ownerState.defaultColumns; i += 1) {
      orderStyleSSR[`&:nth-of-type(${ownerState.defaultColumns}n+${i % ownerState.defaultColumns})`] = {
        order: i
      };
    }
    stylesSSR.height = ownerState.defaultHeight;
    stylesSSR.margin = -(defaultSpacing / 2);
    stylesSSR["& > *"] = {
      ...styles["& > *"],
      ...orderStyleSSR,
      margin: defaultSpacing / 2,
      width: `calc(${(100 / ownerState.defaultColumns).toFixed(2)}% - ${defaultSpacing}px)`
    };
    return {
      ...styles,
      ...stylesSSR
    };
  }
  const spacingValues = resolveBreakpointValues({
    values: ownerState.spacing,
    breakpoints: theme.breakpoints.values
  });
  const transformer = createUnarySpacing(theme);
  const spacingStyleFromPropValue = (propValue) => {
    let spacing2;
    if (typeof propValue === "string" && !Number.isNaN(Number(propValue)) || typeof propValue === "number") {
      const themeSpacingValue = Number(propValue);
      spacing2 = getValue(transformer, themeSpacingValue);
    } else {
      spacing2 = propValue;
    }
    return {
      margin: `calc(0px - (${spacing2} / 2))`,
      "& > *": {
        margin: `calc(${spacing2} / 2)`
      },
      ...ownerState.maxColumnHeight && {
        height: typeof spacing2 === "number" ? Math.ceil(ownerState.maxColumnHeight + parseToNumber(spacing2)) : `calc(${ownerState.maxColumnHeight}px + ${spacing2})`
      }
    };
  };
  styles = deepmerge(styles, handleBreakpoints({
    theme
  }, spacingValues, spacingStyleFromPropValue));
  const columnValues = resolveBreakpointValues({
    values: ownerState.columns,
    breakpoints: theme.breakpoints.values
  });
  const columnStyleFromPropValue = (propValue) => {
    const columnValue = Number(propValue);
    const width2 = `${(100 / columnValue).toFixed(2)}%`;
    const spacing2 = typeof spacingValues === "string" && !Number.isNaN(Number(spacingValues)) || typeof spacingValues === "number" ? getValue(transformer, Number(spacingValues)) : "0px";
    return {
      "& > *": {
        width: `calc(${width2} - ${spacing2})`
      }
    };
  };
  styles = deepmerge(styles, handleBreakpoints({
    theme
  }, columnValues, columnStyleFromPropValue));
  if (typeof spacingValues === "object") {
    styles = deepmerge(styles, handleBreakpoints({
      theme
    }, spacingValues, (propValue, breakpoint) => {
      if (breakpoint) {
        const themeSpacingValue = Number(propValue);
        const lastBreakpoint = Object.keys(columnValues).pop();
        const spacing2 = getValue(transformer, themeSpacingValue);
        const column = typeof columnValues === "object" ? columnValues[breakpoint] || columnValues[lastBreakpoint] : columnValues;
        const width2 = `${(100 / column).toFixed(2)}%`;
        return {
          "& > *": {
            width: `calc(${width2} - ${spacing2})`
          }
        };
      }
      return null;
    }));
  }
  return styles;
};
var MasonryRoot = styled_default("div", {
  name: "MuiMasonry",
  slot: "Root"
})(getStyle);
var Masonry = React21.forwardRef(function Masonry2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiMasonry"
  });
  const {
    children,
    className,
    component = "div",
    columns = 4,
    spacing: spacing2 = 1,
    sequential = false,
    defaultColumns,
    defaultHeight,
    defaultSpacing,
    ...other
  } = props;
  const masonryRef = React21.useRef();
  const [maxColumnHeight, setMaxColumnHeight] = React21.useState();
  const isSSR = !maxColumnHeight && defaultHeight && defaultColumns !== void 0 && defaultSpacing !== void 0;
  const [numberOfLineBreaks, setNumberOfLineBreaks] = React21.useState(isSSR ? defaultColumns - 1 : 0);
  const ownerState = {
    ...props,
    spacing: spacing2,
    columns,
    maxColumnHeight,
    defaultColumns,
    defaultHeight,
    defaultSpacing,
    isSSR
  };
  const classes = useUtilityClasses2(ownerState);
  const handleResize = React21.useCallback(() => {
    if (!masonryRef.current) {
      return;
    }
    const masonry = masonryRef.current;
    const firstVisibleChild = Array.from(masonry.childNodes).find((child) => child.nodeType === Node.ELEMENT_NODE && child.dataset.class !== "line-break" && window.getComputedStyle(child).display !== "none");
    if (!firstVisibleChild) {
      return;
    }
    const parentWidth = masonry.clientWidth;
    const firstChildWidth = firstVisibleChild.clientWidth;
    if (parentWidth === 0 || firstChildWidth === 0) {
      return;
    }
    const firstChildComputedStyle = window.getComputedStyle(firstVisibleChild);
    const firstChildMarginLeft = parseToNumber(firstChildComputedStyle.marginLeft);
    const firstChildMarginRight = parseToNumber(firstChildComputedStyle.marginRight);
    const currentNumberOfColumns = Math.round(parentWidth / (firstChildWidth + firstChildMarginLeft + firstChildMarginRight));
    const columnHeights = new Array(currentNumberOfColumns).fill(0);
    let skip = false;
    let nextOrder = 1;
    masonry.childNodes.forEach((child) => {
      if (child.nodeType !== Node.ELEMENT_NODE || child.dataset.class === "line-break" || skip) {
        return;
      }
      const childComputedStyle = window.getComputedStyle(child);
      if (childComputedStyle.display === "none") {
        return;
      }
      const childMarginTop = parseToNumber(childComputedStyle.marginTop);
      const childMarginBottom = parseToNumber(childComputedStyle.marginBottom);
      const childHeight = parseToNumber(childComputedStyle.height) ? Math.ceil(parseToNumber(childComputedStyle.height)) + childMarginTop + childMarginBottom : 0;
      if (childHeight === 0) {
        skip = true;
        return;
      }
      for (let i = 0; i < child.childNodes.length; i += 1) {
        const nestedChild = child.childNodes[i];
        if (nestedChild.tagName === "IMG" && nestedChild.clientHeight === 0) {
          skip = true;
          break;
        }
      }
      if (!skip) {
        if (sequential) {
          columnHeights[nextOrder - 1] += childHeight;
          child.style.order = nextOrder;
          nextOrder += 1;
          if (nextOrder > currentNumberOfColumns) {
            nextOrder = 1;
          }
        } else {
          const currentMinColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
          columnHeights[currentMinColumnIndex] += childHeight;
          const order2 = currentMinColumnIndex + 1;
          child.style.order = order2;
        }
      }
    });
    if (!skip) {
      queueMicrotask(() => {
        if (masonryRef.current) {
          ReactDOM.flushSync(() => {
            setMaxColumnHeight(Math.max(...columnHeights));
            setNumberOfLineBreaks(currentNumberOfColumns > 0 ? currentNumberOfColumns - 1 : 0);
          });
        }
      });
    }
  }, [sequential]);
  useEnhancedEffect_default(() => {
    if (typeof ResizeObserver === "undefined" || typeof MutationObserver === "undefined") {
      return void 0;
    }
    const masonry = masonryRef.current;
    if (!masonry) {
      return void 0;
    }
    let resizeTimeout;
    const debouncedHandleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 16);
    };
    const resizeObserver = new ResizeObserver(debouncedHandleResize);
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement && node.dataset.class !== "line-break") {
            resizeObserver.observe(node);
          }
        });
        mutation.removedNodes.forEach((node) => {
          if (node instanceof HTMLElement && node.dataset.class !== "line-break") {
            resizeObserver.unobserve(node);
          }
        });
      });
      handleResize();
    });
    Array.from(masonry.childNodes).forEach((childNode) => {
      if (childNode instanceof HTMLElement && childNode.dataset.class !== "line-break") {
        resizeObserver.observe(childNode);
      }
    });
    mutationObserver.observe(masonry, {
      childList: true
    });
    handleResize();
    return () => {
      clearTimeout(resizeTimeout);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [handleResize, columns, spacing2, children]);
  const handleRef = useForkRef(ref, masonryRef);
  const lineBreaks = new Array(numberOfLineBreaks).fill("").map((_, index) => (0, import_jsx_runtime15.jsx)("span", {
    "data-class": "line-break",
    style: {
      ...lineBreakStyle,
      order: index + 1
    }
  }, index));
  return (0, import_jsx_runtime15.jsxs)(MasonryRoot, {
    as: component,
    className: clsx_default(classes.root, className),
    ref: handleRef,
    ownerState,
    ...other,
    children: [children, lineBreaks]
  });
});
true ? Masonry.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types18.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types18.default.object,
  /**
   * @ignore
   */
  className: import_prop_types18.default.string,
  /**
   * Number of columns.
   * @default 4
   */
  columns: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.number, import_prop_types18.default.string])), import_prop_types18.default.number, import_prop_types18.default.object, import_prop_types18.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types18.default.elementType,
  /**
   * The default number of columns of the component. This is provided for server-side rendering.
   */
  defaultColumns: import_prop_types18.default.number,
  /**
   * The default height of the component in px. This is provided for server-side rendering.
   */
  defaultHeight: import_prop_types18.default.number,
  /**
   * The default spacing of the component. Like `spacing`, it is a factor of the theme's spacing. This is provided for server-side rendering.
   */
  defaultSpacing: import_prop_types18.default.number,
  /**
   * Allows using sequential order rather than adding to shortest column
   * @default false
   */
  sequential: import_prop_types18.default.bool,
  /**
   * Defines the space between children. It is a factor of the theme's spacing.
   * @default 1
   */
  spacing: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.number, import_prop_types18.default.string])), import_prop_types18.default.number, import_prop_types18.default.object, import_prop_types18.default.string]),
  /**
   * Allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object, import_prop_types18.default.bool])), import_prop_types18.default.func, import_prop_types18.default.object])
} : void 0;
var Masonry_default = Masonry;
export {
  Masonry_default as default,
  getMasonryUtilityClass,
  masonryClasses_default as masonryClasses
};
//# sourceMappingURL=@mui_lab_Masonry.js.map
