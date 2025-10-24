import { jsx as e } from "react/jsx-runtime";
import n from "react";
const i = Symbol("NULL_CTX");
class l extends Error {
}
function d(t) {
  const r = n.createContext(t?.initialValue || i), c = () => {
    const o = n.useContext(r);
    if (o === i) throw new l(t?.errorMsg ?? "cannot use context outside provider");
    return o;
  }, s = t && t.initializer != null ? ({ children: o }) => /* @__PURE__ */ e(r.Provider, { value: t.initializer(), children: o }) : ({ value: o, children: a }) => /* @__PURE__ */ e(r.Provider, { value: o, children: a });
  return [r, c, s];
}
export {
  l as ContextError,
  d as createContext
};
//# sourceMappingURL=index.es.js.map
