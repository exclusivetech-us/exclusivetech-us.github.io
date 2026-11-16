(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e3) {
      throw err = [e3], e3;
    }
  };
  var __commonJS = (cb2, mod) => function __require() {
    try {
      return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e3) {
      throw mod = 0, e3;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../skills/platform/files/render/page-kit/kit.js
  var kit_exports = {};
  __export(kit_exports, {
    Files: () => G5,
    React: () => _M,
    ReactDom: () => AM,
    ReactDomClient: () => FM,
    ReactJsxRuntime: () => TM,
    ReactRouterDom: () => z4
  });
  function Yy(e3, t) {
    return t + e3.replace(/\\/g, "/");
  }
  function Iu(e3) {
    return typeof e3 == "object" && e3 != null && "pathname" in e3 && "search" in e3 && "hash" in e3 && "state" in e3 && "key" in e3;
  }
  function Vu(e3 = {}) {
    let { initialEntries: t = ["/"], initialIndex: r, v5Compat: n = false } = e3, a;
    a = t.map((h, v) => c(h, typeof h == "string" ? null : h.state, v === 0 ? "default" : void 0, typeof h == "string" ? void 0 : h.mask));
    let i = s(r ?? a.length - 1), o = "POP", l = null;
    function s(h) {
      return Math.min(Math.max(h, 0), a.length - 1);
    }
    function u() {
      return a[i];
    }
    function c(h, v = null, y, m) {
      let g = vn(a ? u().pathname : "/", h, v, y, m);
      return ke(g.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(h)}`), g;
    }
    function d(h) {
      return typeof h == "string" ? h : je(h);
    }
    return { get index() {
      return i;
    }, get action() {
      return o;
    }, get location() {
      return u();
    }, createHref: d, createURL(h) {
      return new URL(d(h), "http://localhost");
    }, encodeLocation(h) {
      let v = typeof h == "string" ? St(h) : h;
      return { pathname: v.pathname || "", search: v.search || "", hash: v.hash || "" };
    }, push(h, v) {
      o = "PUSH";
      let y = Iu(h) ? h : c(h, v);
      i += 1, a.splice(i, a.length, y), n && l && l({ action: o, location: y, delta: 1 });
    }, replace(h, v) {
      o = "REPLACE";
      let y = Iu(h) ? h : c(h, v);
      a[i] = y, n && l && l({ action: o, location: y, delta: 0 });
    }, go(h) {
      o = "POP";
      let v = s(i + h), y = a[v];
      i = v, l && l({ action: o, location: y, delta: h });
    }, listen(h) {
      return l = h, () => {
        l = null;
      };
    } };
  }
  function Wi(e3 = {}) {
    function t(n, a) {
      let i = a.state?.masked, { pathname: o, search: l, hash: s } = i || n.location;
      return vn("", { pathname: o, search: l, hash: s }, a.state && a.state.usr || null, a.state && a.state.key || "default", i ? { pathname: n.location.pathname, search: n.location.search, hash: n.location.hash } : void 0);
    }
    function r(n, a) {
      return typeof a == "string" ? a : je(a);
    }
    return qy(t, r, null, e3);
  }
  function Wu(e3 = {}) {
    function t(a, i) {
      let { pathname: o = "/", search: l = "", hash: s = "" } = St(a.location.hash.substring(1));
      return !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o), vn("", { pathname: o, search: l, hash: s }, i.state && i.state.usr || null, i.state && i.state.key || "default");
    }
    function r(a, i) {
      let o = a.document.querySelector("base"), l = "";
      if (o && o.getAttribute("href")) {
        let s = a.location.href, u = s.indexOf("#");
        l = u === -1 ? s : s.slice(0, u);
      }
      return l + "#" + (typeof i == "string" ? i : je(i));
    }
    function n(a, i) {
      ke(a.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(i)})`);
    }
    return qy(t, r, n, e3);
  }
  function q(e3, t) {
    if (e3 === false || e3 === null || typeof e3 > "u") throw new Error(t);
  }
  function ke(e3, t) {
    if (!e3) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {
      }
    }
  }
  function Bk() {
    return Math.random().toString(36).substring(2, 10);
  }
  function dy(e3, t) {
    return { usr: e3.state, key: e3.key, idx: t, masked: e3.mask ? { pathname: e3.pathname, search: e3.search, hash: e3.hash } : void 0 };
  }
  function vn(e3, t, r = null, n, a) {
    return { pathname: typeof e3 == "string" ? e3 : e3.pathname, search: "", hash: "", ...typeof t == "string" ? St(t) : t, state: r, key: t && t.key || n || Bk(), mask: a };
  }
  function je({ pathname: e3 = "/", search: t = "", hash: r = "" }) {
    return t && t !== "?" && (e3 += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e3 += r.charAt(0) === "#" ? r : "#" + r), e3;
  }
  function St(e3) {
    let t = {};
    if (e3) {
      let r = e3.indexOf("#");
      r >= 0 && (t.hash = e3.substring(r), e3 = e3.substring(0, r));
      let n = e3.indexOf("?");
      n >= 0 && (t.search = e3.substring(n), e3 = e3.substring(0, n)), e3 && (t.pathname = e3);
    }
    return t;
  }
  function qy(e3, t, r, n = {}) {
    let { window: a = document.defaultView, v5Compat: i = false } = n, o = a.history, l = "POP", s = null, u = c();
    u == null && (u = 0, o.replaceState({ ...o.state, idx: u }, ""));
    function c() {
      return (o.state || { idx: null }).idx;
    }
    function d() {
      l = "POP";
      let m = c(), g = m == null ? null : m - u;
      u = m, s && s({ action: l, location: y.location, delta: g });
    }
    function f(m, g) {
      l = "PUSH";
      let p = Iu(m) ? m : vn(y.location, m, g);
      r && r(p, m), u = c() + 1;
      let w = dy(p, u), b = y.createHref(p.mask || p);
      try {
        o.pushState(w, "", b);
      } catch (E) {
        if (E instanceof DOMException && E.name === "DataCloneError") throw E;
        a.location.assign(b);
      }
      i && s && s({ action: l, location: y.location, delta: 1 });
    }
    function h(m, g) {
      l = "REPLACE";
      let p = Iu(m) ? m : vn(y.location, m, g);
      r && r(p, m), u = c();
      let w = dy(p, u), b = y.createHref(p.mask || p);
      o.replaceState(w, "", b), i && s && s({ action: l, location: y.location, delta: 0 });
    }
    function v(m) {
      return Gy(a, m);
    }
    let y = { get action() {
      return l;
    }, get location() {
      return e3(a, o);
    }, listen(m) {
      if (s) throw new Error("A history only accepts one active listener");
      return a.addEventListener(cy, d), s = m, () => {
        a.removeEventListener(cy, d), s = null;
      };
    }, createHref(m) {
      return t(a, m);
    }, createURL: v, encodeLocation(m) {
      let g = v(m);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    }, push: f, replace: h, go(m) {
      return o.go(m);
    } };
    return y;
  }
  function Gy(e3, t, r = false) {
    let n = "http://localhost";
    e3 && (n = e3.location.origin !== "null" ? e3.location.origin : e3.location.href), q(n, "No window.location.(origin|href) available to create URL");
    let a = typeof t == "string" ? t : je(t);
    return a = a.replace(/ $/, "%20"), !r && vl.test(a) && (a = n + a), new URL(a, n);
  }
  function Yu(e3) {
    return { defaultValue: e3 };
  }
  function Wk(e3) {
    return Vk.has(e3);
  }
  function qk(e3) {
    return Yk.has(e3);
  }
  function Gk(e3) {
    return e3.index === true;
  }
  function yn(e3, t, r = [], n = {}, a = false) {
    return e3.map((i, o) => {
      let l = [...r, String(o)], s = typeof i.id == "string" ? i.id : l.join("-");
      if (q(i.index !== true || !i.children, "Cannot specify children on an index route"), q(a || !n[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), Gk(i)) {
        let u = { ...i, id: s };
        return n[s] = fy(u, t(u)), u;
      } else {
        let u = { ...i, id: s, children: void 0 };
        return n[s] = fy(u, t(u)), i.children && (u.children = yn(i.children, t, l, n, a)), u;
      }
    });
  }
  function fy(e3, t) {
    return Object.assign(e3, { ...t, ...typeof t.lazy == "object" && t.lazy != null ? { lazy: { ...e3.lazy, ...t.lazy } } : {} });
  }
  function Yi(e3, t, r = "/") {
    return Et(e3, t, r, false);
  }
  function Et(e3, t, r, n, a) {
    let i = typeof t == "string" ? St(t) : t, o = Qe(i.pathname || "/", r);
    if (o == null) return null;
    let l = a ?? dl(e3), s = null, u = ew(o);
    for (let c = 0; s == null && c < l.length; ++c) s = aE(l[c], u, n);
    return s;
  }
  function Ky(e3, t) {
    let { route: r, pathname: n, params: a } = e3;
    return { id: r.id, pathname: n, params: a, data: t[r.id], loaderData: t[r.id], handle: r.handle };
  }
  function dl(e3) {
    let t = Qy(e3);
    return Kk(t), t;
  }
  function Qy(e3, t = [], r = [], n = "", a = false) {
    let i = (o, l, s = a, u) => {
      let c = { relativePath: u === void 0 ? o.path || "" : u, caseSensitive: o.caseSensitive === true, childrenIndex: l, route: o };
      if (c.relativePath.startsWith("/")) {
        if (!c.relativePath.startsWith(n) && s) return;
        q(c.relativePath.startsWith(n), `Absolute route path "${c.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(n.length);
      }
      let d = er([n, c.relativePath]), f = r.concat(c);
      o.children && o.children.length > 0 && (q(o.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${d}".`), Qy(o.children, t, f, d, s)), !(o.path == null && !o.index) && t.push({ path: d, score: rE(d, o.index), routesMeta: f.map((h, v) => {
        let [y, m] = np(h.relativePath, h.caseSensitive, v === f.length - 1);
        return { ...h, matcher: y, compiledParams: m };
      }) });
    };
    return e3.forEach((o, l) => {
      if (o.path === "" || !o.path?.includes("?")) i(o, l);
      else for (let s of Xy(o.path)) i(o, l, true, s);
    }), t;
  }
  function Xy(e3) {
    let t = e3.split("/");
    if (t.length === 0) return [];
    let [r, ...n] = t, a = r.endsWith("?"), i = r.replace(/\?$/, "");
    if (n.length === 0) return a ? [i, ""] : [i];
    let o = Xy(n.join("/")), l = [];
    return l.push(...o.map((s) => s === "" ? i : [i, s].join("/"))), a && l.push(...o), l.map((s) => e3.startsWith("/") && s === "" ? "/" : s);
  }
  function Kk(e3) {
    e3.sort((t, r) => t.score !== r.score ? r.score - t.score : nE(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
  }
  function rE(e3, t) {
    let r = e3.split("/"), n = r.length;
    return r.some(hy) && (n += tE), t && (n += Zk), r.filter((a) => !hy(a)).reduce((a, i) => a + (Qk.test(i) ? Xk : i === "" ? Jk : eE), n);
  }
  function nE(e3, t) {
    return e3.length === t.length && e3.slice(0, -1).every((n, a) => n === t[a]) ? e3[e3.length - 1] - t[t.length - 1] : 0;
  }
  function aE(e3, t, r = false) {
    let { routesMeta: n } = e3, a = {}, i = "/", o = [];
    for (let l = 0; l < n.length; ++l) {
      let s = n[l], u = l === n.length - 1, c = i === "/" ? t : t.slice(i.length) || "/", d = { path: s.relativePath, caseSensitive: s.caseSensitive, end: u }, f = s.matcher && s.compiledParams ? Jy(d, c, s.matcher, s.compiledParams) : $a(d, c), h = s.route;
      if (!f && u && r && !n[n.length - 1].route.index && (f = $a({ path: s.relativePath, caseSensitive: s.caseSensitive, end: false }, c)), !f) return null;
      Object.assign(a, f.params), o.push({ params: a, pathname: er([i, f.pathname]), pathnameBase: oE(er([i, f.pathnameBase])), route: h }), f.pathnameBase !== "/" && (i = er([i, f.pathnameBase]));
    }
    return o;
  }
  function Zy(e3, t = {}) {
    let r = e3;
    r.endsWith("*") && r !== "*" && !r.endsWith("/*") && (ke(false, `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`), r = r.replace(/\*$/, "/*"));
    let n = r.startsWith("/") ? "/" : "", a = (o) => o == null ? "" : typeof o == "string" ? o : String(o), i = r.split(/\/+/).map((o, l, s) => {
      if (l === s.length - 1 && o === "*") return a(t["*"]);
      let c = o.match(/^:([\w-]+)(\??)(.*)/);
      if (c) {
        let [, d, f, h] = c, v = t[d];
        return q(f === "?" || v != null, `Missing ":${d}" param`), encodeURIComponent(a(v)) + h;
      }
      return o.replace(/\?$/g, "");
    }).filter((o) => !!o);
    return n + i.join("/");
  }
  function $a(e3, t) {
    typeof e3 == "string" && (e3 = { path: e3, caseSensitive: false, end: true });
    let [r, n] = np(e3.path, e3.caseSensitive, e3.end);
    return Jy(e3, t, r, n);
  }
  function Jy(e3, t, r, n) {
    let a = t.match(r);
    if (!a) return null;
    let i = a[0], o = ji(i, 1), l = a.slice(1);
    return { params: n.reduce((u, { paramName: c, isOptional: d }, f) => {
      if (c === "*") {
        let v = l[f] || "";
        o = ji(i.slice(0, i.length - v.length), 1);
      }
      let h = l[f];
      return d && !h ? u[c] = void 0 : u[c] = (h || "").replace(/%2F/g, "/"), u;
    }, {}), pathname: i, pathnameBase: o, pattern: e3 };
  }
  function np(e3, t = false, r = true) {
    ke(e3 === "*" || !e3.endsWith("*") || e3.endsWith("/*"), `Route path "${e3}" will be treated as if it were "${e3.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e3.replace(/\*$/, "/*")}".`);
    let n = [], a = "^" + e3.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, s, u, c) => {
      if (n.push({ paramName: l, isOptional: s != null }), s) {
        let d = c.charAt(u + o.length);
        return d && d !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e3.endsWith("*") ? (n.push({ paramName: "*" }), a += e3 === "*" || e3 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e3 !== "" && e3 !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
  }
  function ew(e3) {
    try {
      return e3.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return ke(false, `The URL path "${e3}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e3;
    }
  }
  function Qe(e3, t) {
    if (t === "/") return e3;
    if (!e3.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length, n = e3.charAt(r);
    return n && n !== "/" ? null : e3.slice(r) || "/";
  }
  function iE({ basename: e3, pathname: t }) {
    return t === "/" ? e3 : er([e3, t]);
  }
  function qu(e3, t = "/") {
    let { pathname: r, search: n = "", hash: a = "" } = typeof e3 == "string" ? St(e3) : e3, i;
    return r ? (r = ip(r), r.startsWith("/") || r.startsWith("\\") ? i = py(r.substring(1), "/") : i = py(r, t)) : i = t, { pathname: i, search: lE(n), hash: sE(a) };
  }
  function py(e3, t) {
    let r = ji(t).split("/");
    return e3.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }), r.length > 1 ? r.join("/") : "/";
  }
  function Fh(e3, t, r, n) {
    return `Cannot include a '${e3}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function tw(e3) {
    return e3.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
  }
  function Gu(e3) {
    let t = tw(e3);
    return t.map((r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase);
  }
  function yl(e3, t, r, n = false) {
    let a;
    typeof e3 == "string" ? a = St(e3) : (a = { ...e3 }, q(!a.pathname || !a.pathname.includes("?"), Fh("?", "pathname", "search", a)), q(!a.pathname || !a.pathname.includes("#"), Fh("#", "pathname", "hash", a)), q(!a.search || !a.search.includes("#"), Fh("#", "search", "hash", a)));
    let i = e3 === "" || a.pathname === "", o = i ? "/" : a.pathname, l;
    if (o == null) l = r;
    else {
      let d = t.length - 1;
      if (!n && o.startsWith("..")) {
        let f = o.split("/");
        for (; f[0] === ".."; ) f.shift(), d -= 1;
        a.pathname = f.join("/");
      }
      l = d >= 0 ? t[d] : "/";
    }
    let s = qu(a, l), u = o && o !== "/" && o.endsWith("/"), c = (i || o === ".") && r.endsWith("/");
    return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
  }
  function ji(e3, t = 0) {
    let r = e3.length;
    for (; r > t && e3.charCodeAt(r - 1) === 47; ) r--;
    return r === e3.length ? e3 : e3.slice(0, r);
  }
  function op(e3, t) {
    return new uE(e3, typeof t == "number" ? { status: t } : t);
  }
  function Ue(e3) {
    return e3 != null && typeof e3.status == "number" && typeof e3.statusText == "string" && typeof e3.internal == "boolean" && "data" in e3;
  }
  function mn(e3) {
    let t = e3.map((r) => r.route.path).filter(Boolean);
    return er(t) || "/";
  }
  function nw(e3, t) {
    let r = e3;
    if (typeof r != "string" || !gl.test(r)) return { absoluteURL: void 0, isExternal: false, to: r };
    let n = r, a = false;
    if (rw) try {
      let i = new URL(window.location.href), o = vl.test(r) ? new URL(Yy(r, i.protocol)) : new URL(r), l = Qe(o.pathname, t);
      o.origin === i.origin && l != null ? r = l + o.search + o.hash : a = true;
    } catch {
      ke(false, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    return { absoluteURL: n, isExternal: a, to: r };
  }
  function aw(e3, t) {
    let r = { lazy: [], "lazy.loader": [], "lazy.action": [], "lazy.middleware": [], middleware: [], loader: [], action: [] };
    e3.forEach((a) => a({ id: t.id, index: t.index, path: t.path, instrument(i) {
      let o = Object.keys(r);
      for (let l of o) i[l] && r[l].push(i[l]);
    } }));
    let n = {};
    if (typeof t.lazy == "function" && r.lazy.length > 0) {
      let a = Aa(r.lazy, t.lazy, () => {
      });
      a && (n.lazy = a);
    }
    if (typeof t.lazy == "object") {
      let a = t.lazy;
      ["middleware", "loader", "action"].forEach((i) => {
        let o = a[i], l = r[`lazy.${i}`];
        if (typeof o == "function" && l.length > 0) {
          let s = Aa(l, o, () => {
          });
          s && (n.lazy = Object.assign(n.lazy || {}, { [i]: s }));
        }
      });
    }
    return ["loader", "action"].forEach((a) => {
      let i = t[a];
      if (typeof i == "function" && r[a].length > 0) {
        let o = i[ea] ?? i, l = Aa(r[a], o, (...s) => my(s[0]));
        l && (a === "loader" && o.hydrate === true && (l.hydrate = true), l[ea] = o, n[a] = l);
      }
    }), t.middleware && t.middleware.length > 0 && r.middleware.length > 0 && (n.middleware = t.middleware.map((a) => {
      let i = a[ea] ?? a, o = Aa(r.middleware, i, (...l) => my(l[0]));
      return o ? (o[ea] = i, o) : a;
    })), n;
  }
  function cE(e3, t) {
    let r = { navigate: [], fetch: [] };
    if (t.forEach((n) => n({ instrument(a) {
      let i = Object.keys(a);
      for (let o of i) a[o] && r[o].push(a[o]);
    } })), r.navigate.length > 0) {
      let n = e3.navigate[ea] ?? e3.navigate, a = Aa(r.navigate, n, (...i) => {
        let [o, l] = i;
        return { to: typeof o == "number" || typeof o == "string" ? o : o ? je(o) : ".", ...gy(e3, l ?? {}) };
      });
      a && (a[ea] = n, e3.navigate = a);
    }
    if (r.fetch.length > 0) {
      let n = e3.fetch[ea] ?? e3.fetch, a = Aa(r.fetch, n, (...i) => {
        let [o, , l, s] = i;
        return { href: l ?? ".", fetcherKey: o, ...gy(e3, s ?? {}) };
      });
      a && (a[ea] = n, e3.fetch = a);
    }
    return e3;
  }
  function iw(e3, t) {
    let r = { request: [] };
    t.forEach((a) => a({ instrument(i) {
      let o = Object.keys(i);
      for (let l of o) i[l] && r[l].push(i[l]);
    } }));
    let n = e3;
    return r.request.length > 0 && (n = Aa(r.request, e3, (...a) => {
      let [i, o] = a;
      return { request: lw(i), context: o != null ? sw(o) : o };
    })), n;
  }
  function Aa(e3, t, r) {
    return e3.length === 0 ? null : async (...n) => {
      let a = await ow(e3, r(...n), () => t(...n), e3.length - 1);
      if (a.type === "error") throw a.value;
      return a.value;
    };
  }
  async function ow(e3, t, r, n) {
    let a = e3[n], i;
    if (a) {
      let o, l = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = ow(e3, t, r, n - 1), i = await o, q(i, "Expected a result"), i.type === "error" && i.value instanceof Error ? { status: "error", error: i.value } : { status: "success", error: void 0 });
      try {
        await a(l, t);
      } catch (s) {
        console.error("An instrumentation function threw an error:", s);
      }
      o || await l(), await o;
    } else try {
      i = { type: "success", value: await r() };
    } catch (o) {
      i = { type: "error", value: o };
    }
    return i || { type: "error", value: new Error("No result assigned in instrumentation chain.") };
  }
  function my(e3) {
    let { request: t, context: r, params: n, pattern: a } = e3;
    return { request: lw(t), params: { ...n }, pattern: a, context: sw(r) };
  }
  function gy(e3, t) {
    return { currentUrl: je(e3.state.location), ..."formMethod" in t ? { formMethod: t.formMethod } : {}, ..."formEncType" in t ? { formEncType: t.formEncType } : {}, ..."formData" in t ? { formData: t.formData } : {}, ..."body" in t ? { body: t.body } : {} };
  }
  function lw(e3) {
    return { method: e3.method, url: e3.url, headers: { get: (...t) => e3.headers.get(...t) } };
  }
  function sw(e3) {
    if (fE(e3)) {
      let t = { ...e3 };
      return Object.freeze(t), t;
    } else return { get: (t) => e3.get(t) };
  }
  function fE(e3) {
    if (e3 === null || typeof e3 != "object") return false;
    let t = Object.getPrototypeOf(e3);
    return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === dE;
  }
  function sp(e3) {
    if (e3.createURL) return e3.createURL("/");
    try {
      return new URL(e3.createHref("/"), vy);
    } catch {
      return vy;
    }
  }
  function $h(e3, t) {
    return e3.origin === t.origin && (e3.origin !== "null" || e3.protocol === t.protocol && e3.host === t.host);
  }
  function hE(e3, t) {
    if (e3.startsWith("//")) return true;
    let r = t.protocol.toLowerCase();
    return e3.toLowerCase().startsWith(r) ? t.host === "" || e3.slice(r.length).startsWith("//") : false;
  }
  function Fa(e3, t, r, n) {
    let a = null;
    try {
      a = e3 == null ? null : new URL(e3, r);
    } catch {
    }
    let i = new URL(t, r), o = a != null && !$h(a, r), l = !$h(i, r);
    if (n === "reject") {
      if (o || l) throw new Error("External navigation is not allowed");
    } else if (l && (a == null || !hE(e3, a) || !$h(a, i))) throw new Error("External navigation is not allowed");
  }
  function za(e3) {
    let t = e3.window ? e3.window : typeof window < "u" ? window : void 0, r = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
    q(e3.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let n = e3.hydrationRouteProperties || [], a = e3.mapRouteProperties || dw, i = a;
    if (e3.instrumentations) {
      let k = e3.instrumentations;
      i = (D) => ({ ...a(D), ...aw(k.map((N) => N.route).filter(Boolean), D) });
    }
    let o = {}, l = new yE(yn(e3.routes, i, void 0, o)), s = e3.basename || "/";
    s.startsWith("/") || (s = `/${s}`);
    let u = e3.dataStrategy || RE, c = { ...e3.future }, d = null, f = /* @__PURE__ */ new Set(), h = null, v = null, y = null, m = null, g = e3.hydrationData != null, p = Et(l.activeRoutes, e3.history.location, s, false, l.branches), w = false, b = null, E, S;
    if (p == null && !e3.patchRoutesOnNavigation) {
      let k = Ke(404, { pathname: e3.history.location.pathname }), { matches: D, route: N } = Fi(l.activeRoutes);
      E = true, S = !E, p = D, b = { [N.id]: k };
    } else if (p && !e3.hydrationData && ts(p, l.activeRoutes, e3.history.location.pathname).active && (p = null), p) if (p.some((k) => k.route.lazy)) E = false, S = !E;
    else if (!p.some((k) => dp(k.route))) E = true, S = !E;
    else {
      let k = e3.hydrationData ? e3.hydrationData.loaderData : null, D = e3.hydrationData ? e3.hydrationData.errors : null, N = p;
      if (D) {
        let _ = p.findIndex((T) => D[T.route.id] !== void 0);
        N = N.slice(0, _ + 1);
      }
      S = false, E = true, N.forEach((_) => {
        let T = pw(_.route, k, D);
        S = S || T.renderFallback, E = E && !T.shouldLoad;
      });
    }
    else {
      E = false, S = !E, p = [];
      let k = ts(null, l.activeRoutes, e3.history.location.pathname);
      k.active && k.matches && (w = true, p = k.matches);
    }
    let R, x = { historyAction: e3.history.action, location: e3.history.location, matches: p, initialized: E, renderFallback: S, navigation: $i, restoreScrollPosition: e3.hydrationData != null ? false : null, preventScrollReset: false, revalidation: "idle", loaderData: e3.hydrationData && e3.hydrationData.loaderData || {}, actionData: e3.hydrationData && e3.hydrationData.actionData || null, errors: e3.hydrationData && e3.hydrationData.errors || b, fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() }, M = "POP", P = null, A = false, L, B = false, j = /* @__PURE__ */ new Map(), ne = null, Z = false, oe = false, Le = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Map(), Ve = 0, Pe = -1, yr = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Set(), rr = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Set(), pa = /* @__PURE__ */ new Map(), Jl, co = null;
    function K5() {
      if (d = e3.history.listen(({ action: k, location: D, delta: N }) => {
        if (Jl) {
          Jl(), Jl = void 0;
          return;
        }
        ke(pa.size === 0 || N != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
        let _ = bm({ currentLocation: x.location, nextLocation: D, historyAction: k });
        if (_ && N != null) {
          let T = new Promise((Q) => {
            Jl = Q;
          });
          e3.history.go(N * -1), es(_, { state: "blocked", location: D, proceed() {
            es(_, { state: "proceeding", proceed: void 0, reset: void 0, location: D }), T.then(() => e3.history.go(N));
          }, reset() {
            let Q = new Map(x.blockers);
            Q.set(_, pn), vt({ blockers: Q });
          } }), P?.resolve(), P = null;
          return;
        }
        return ma(k, D);
      }), r) {
        PE(t, j);
        let k = () => _E(t, j);
        t.addEventListener("pagehide", k), ne = () => t.removeEventListener("pagehide", k);
      }
      return x.initialized || ma("POP", x.location, { initialHydration: true }), R;
    }
    function Q5() {
      d && d(), ne && ne(), f.clear(), L && L.abort(), x.fetchers.forEach((k, D) => cd(x.fetchers, D)), x.blockers.forEach((k, D) => xm(D));
    }
    function X5(k) {
      if (f.add(k), h) {
        let { newErrors: D } = h;
        h = null, k(x, { deletedFetchers: [], newErrors: D, viewTransitionOpts: void 0, flushSync: false });
      }
      return () => f.delete(k);
    }
    function vt(k, D = {}) {
      k.matches && (k.matches = k.matches.map((T) => {
        let Q = o[T.route.id], Y = T.route;
        return Y.element !== Q.element || Y.errorElement !== Q.errorElement || Y.hydrateFallbackElement !== Q.hydrateFallbackElement ? { ...T, route: Q } : T;
      })), x = { ...x, ...k };
      let N = [], _ = [];
      x.fetchers.forEach((T, Q) => {
        T.state === "idle" && (qt.has(Q) ? N.push(Q) : _.push(Q));
      }), qt.forEach((T) => {
        !x.fetchers.has(T) && !ie.has(T) && N.push(T);
      }), f.size === 0 && (h = { newErrors: k.errors ?? null }), [...f].forEach((T) => T(x, { deletedFetchers: N, newErrors: k.errors ?? null, viewTransitionOpts: D.viewTransitionOpts, flushSync: D.flushSync === true })), N.forEach((T) => cd(x.fetchers, T)), _.forEach((T) => x.fetchers.delete(T));
    }
    function ei(k, D, { flushSync: N } = {}) {
      let _ = x.actionData != null && x.navigation.formMethod != null && Ye(x.navigation.formMethod) && x.navigation.state === "loading" && k.state?._isRedirect !== true, T;
      D.actionData ? Object.keys(D.actionData).length > 0 ? T = D.actionData : T = null : _ ? T = x.actionData : T = null;
      let Q = D.loaderData ? Ly(x.loaderData, D.loaderData, D.matches || [], D.errors) : x.loaderData, Y = x.blockers;
      Y.size > 0 && (Y = new Map(Y), Y.forEach((J, le) => Y.set(le, pn)));
      let X = Z ? false : Em(k, D.matches || x.matches), W = A === true || x.navigation.formMethod != null && Ye(x.navigation.formMethod) && k.state?._isRedirect !== true;
      l.commitHmrRoutes(), Z || M === "POP" || (M === "PUSH" ? e3.history.push(k, k.state) : M === "REPLACE" && e3.history.replace(k, k.state));
      let te;
      if (M === "POP") {
        let J = j.get(x.location.pathname);
        J && J.has(k.pathname) ? te = { currentLocation: x.location, nextLocation: k } : j.has(k.pathname) && (te = { currentLocation: k, nextLocation: x.location });
      } else if (B) {
        let J = j.get(x.location.pathname);
        J ? J.add(k.pathname) : (J = /* @__PURE__ */ new Set([k.pathname]), j.set(x.location.pathname, J)), te = { currentLocation: x.location, nextLocation: k };
      }
      vt({ ...D, actionData: T, loaderData: Q, historyAction: M, location: k, initialized: true, renderFallback: false, navigation: $i, revalidation: "idle", restoreScrollPosition: X, preventScrollReset: W, blockers: Y }, { viewTransitionOpts: te, flushSync: N === true }), M = "POP", A = false, B = false, Z = false, oe = false, P?.resolve(), P = null, co?.resolve(), co = null;
    }
    async function pm(k, D) {
      if (P?.resolve(), P = null, typeof k == "number") {
        P || (P = Ty());
        let be = P.promise;
        return e3.history.go(k), be;
      }
      let N = Bh(x.location, x.matches, s, k, D?.fromRouteId, D?.relative), { path: _, submission: T, error: Q } = xy(false, N, D), Y;
      if (D?.mask) {
        let be = typeof D.mask == "string" ? St(D.mask) : { ...x.location.mask, ...D.mask };
        if (Y = { pathname: be.pathname ?? "", search: be.search ?? "", hash: be.hash ?? "" }, vl.test(Y.pathname)) throw new Error("External navigation is not allowed");
        Y.pathname.startsWith("\\") && (Y.pathname = Y.pathname.replace(/^\\+/, "/")), Fa(typeof D.mask == "string" ? D.mask : je(D.mask), je(Y), e3.history.createURL("/"), "reject");
      }
      let X = x.location, W = vn(X, _, D && D.state, void 0, Y);
      W = { ...W, ...e3.history.encodeLocation(W) }, Fa(k == null ? e3.history.createHref(x.location) : typeof k == "string" ? k : je(k), e3.history.createHref(W.mask || W), e3.history.createURL("/"), "reject");
      let te = D && D.replace != null ? D.replace : void 0, J = "PUSH";
      te === true ? J = "REPLACE" : te === false || T != null && Ye(T.formMethod) && T.formAction === x.location.pathname + x.location.search && (J = "REPLACE");
      let le = D && "preventScrollReset" in D ? D.preventScrollReset === true : void 0, ae = (D && D.flushSync) === true, me = bm({ currentLocation: X, nextLocation: W, historyAction: J });
      if (me) {
        es(me, { state: "blocked", location: W, proceed() {
          es(me, { state: "proceeding", proceed: void 0, reset: void 0, location: W }), pm(k, D);
        }, reset() {
          let be = new Map(x.blockers);
          be.set(me, pn), vt({ blockers: be });
        } });
        return;
      }
      await ma(J, W, { submission: T, pendingError: Q, preventScrollReset: le, replace: D && D.replace, enableViewTransition: D && D.viewTransition, flushSync: ae, callSiteDefaultShouldRevalidate: D && D.defaultShouldRevalidate });
    }
    function Z5() {
      co || (co = Ty()), ud(), vt({ revalidation: "loading" });
      let k = co.promise;
      return x.navigation.state === "submitting" ? k : x.navigation.state === "idle" ? (ma(x.historyAction, x.location, { startUninterruptedRevalidation: true }), k) : (ma(M || x.historyAction, x.navigation.location, { overrideNavigation: x.navigation, enableViewTransition: B === true }), k);
    }
    async function ma(k, D, N) {
      L && L.abort(), L = null, M = k, Z = (N && N.startUninterruptedRevalidation) === true, c3(x.location, x.matches), A = (N && N.preventScrollReset) === true, B = (N && N.enableViewTransition) === true;
      let _ = l.activeRoutes, T = N?.initialHydration && x.matches && x.matches.length > 0 && !w ? x.matches : Et(_, D, s, false, l.branches), Q = (N && N.flushSync) === true;
      if (T && x.initialized && !oe && DE(x.location, D) && !(N && N.submission && Ye(N.submission.formMethod))) {
        ei(D, { matches: T }, { flushSync: Q });
        return;
      }
      let Y = ts(T, _, D.pathname);
      if (Y.active && Y.matches && (T = Y.matches), !T) {
        let { error: ve, notFoundMatches: ge, route: zt } = dd(D.pathname);
        ei(D, { matches: ge, loaderData: {}, errors: { [zt.id]: ve } }, { flushSync: Q });
        return;
      }
      let X = N && N.overrideNavigation ? { ...N.overrideNavigation, matches: T, historyAction: k } : void 0;
      L = new AbortController();
      let W = Ai(e3.history, D, L.signal, N && N.submission), te = e3.getContext ? await e3.getContext() : new mr(), J;
      if (N && N.pendingError) J = [pr(T).route.id, { type: "error", error: N.pendingError }];
      else if (N && N.submission && Ye(N.submission.formMethod)) {
        let ve = await J5(W, D, N.submission, T, k, te, Y.active, N && N.initialHydration === true, { replace: N.replace, flushSync: Q });
        if (ve.shortCircuited) return;
        if (ve.pendingActionResult) {
          let [ge, zt] = ve.pendingActionResult;
          if (at(zt) && Ue(zt.error) && zt.error.status === 404) {
            L = null, ei(D, { matches: ve.matches, loaderData: {}, errors: { [ge]: zt.error } });
            return;
          }
        }
        T = ve.matches || T, J = ve.pendingActionResult, X = Oh(D, T, k, N.submission), Q = false, Y.active = false, W = Ai(e3.history, W.url, W.signal);
      }
      let { shortCircuited: le, matches: ae, loaderData: me, errors: be, workingFetchers: Ze } = await e32(W, D, T, k, te, Y.active, X, N && N.submission, N && N.fetcherSubmission, N && N.replace, N && N.initialHydration === true, Q, J, N && N.callSiteDefaultShouldRevalidate);
      le || (L = null, ei(D, { matches: ae || T, ...Py(J), loaderData: me, errors: be, ...Ze ? { fetchers: Ze } : {} }));
    }
    async function J5(k, D, N, _, T, Q, Y, X, W = {}) {
      ud();
      let te = ME(D, _, T, N);
      if (vt({ navigation: te }, { flushSync: W.flushSync === true }), Y) {
        let ae = await rs(_, D.pathname, k.signal);
        if (ae.type === "aborted") return { shortCircuited: true };
        if (ae.type === "error") {
          if (ae.partialMatches.length === 0) {
            let { matches: be, route: Ze } = Fi(l.activeRoutes);
            return { matches: be, pendingActionResult: [Ze.id, { type: "error", error: ae.error }] };
          }
          let me = pr(ae.partialMatches).route.id;
          return { matches: ae.partialMatches, pendingActionResult: [me, { type: "error", error: ae.error }] };
        } else if (ae.matches) _ = ae.matches;
        else {
          let { notFoundMatches: me, error: be, route: Ze } = dd(D.pathname);
          return { matches: me, pendingActionResult: [Ze.id, { type: "error", error: be }] };
        }
      }
      let J, le = Oi(_, D);
      if (!le.route.action && !le.route.lazy) J = { type: "error", error: Ke(405, { method: k.method, pathname: D.pathname, routeId: le.route.id }) };
      else {
        let ae = ra(i, o, k, D, _, le, X ? [] : n, Q), me = await fo(k, D, ae, Q, null);
        if (J = me[le.route.id], !J) {
          for (let be of _) if (me[be.route.id]) {
            J = me[be.route.id];
            break;
          }
        }
        if (k.signal.aborted) return { shortCircuited: true };
      }
      if (ta(J)) {
        let ae;
        return W && W.replace != null ? ae = W.replace : ae = Dy(J.response.headers.get("Location"), new URL(k.url), s, e3.history) === x.location.pathname + x.location.search, await ga(k, J, true, { submission: N, replace: ae }), { shortCircuited: true };
      }
      if (at(J)) {
        let ae = pr(_, le.route.id);
        return (W && W.replace) !== true && (M = "PUSH"), { matches: _, pendingActionResult: [ae.route.id, J, le.route.id] };
      }
      return { matches: _, pendingActionResult: [le.route.id, J] };
    }
    async function e32(k, D, N, _, T, Q, Y, X, W, te, J, le, ae, me) {
      let be = Y || Oh(D, N, _, X), Ze = X || W || _y(be), ve = !Z && !J;
      if (Q) {
        if (ve) {
          let jt = mm(ae);
          vt({ navigation: be, ...jt !== void 0 ? { actionData: jt } : {} }, { flushSync: le });
        }
        let de = await rs(N, D.pathname, k.signal);
        if (de.type === "aborted") return { shortCircuited: true };
        if (de.type === "error") {
          if (de.partialMatches.length === 0) {
            let { matches: Fr, route: rn } = Fi(l.activeRoutes);
            return { matches: Fr, loaderData: {}, errors: { [rn.id]: de.error } };
          }
          let jt = pr(de.partialMatches).route.id;
          return { matches: de.partialMatches, loaderData: {}, errors: { [jt]: de.error } };
        } else if (de.matches) N = de.matches;
        else {
          let { error: jt, notFoundMatches: Fr, route: rn } = dd(D.pathname);
          return { matches: Fr, loaderData: {}, errors: { [rn.id]: jt } };
        }
      }
      let ge = l.activeRoutes, { dsMatches: zt, revalidatingFetchers: It } = by(k, T, i, o, e3.history, x, N, Ze, D, J ? [] : n, J === true, oe, Le, qt, rr, gt, ge, s, e3.patchRoutesOnNavigation != null, l.branches, ae, me);
      if (Pe = ++Ve, !e3.dataStrategy && !zt.some((de) => de.shouldLoad) && !zt.some((de) => de.route.middleware && de.route.middleware.length > 0) && It.length === 0) {
        let de = new Map(x.fetchers), jt = ym(de);
        return ei(D, { matches: N, loaderData: {}, errors: ae && at(ae[1]) ? { [ae[0]]: ae[1].error } : null, ...Py(ae), ...jt ? { fetchers: de } : {} }, { flushSync: le }), { shortCircuited: true };
      }
      if (ve) {
        let de = {};
        if (!Q) {
          de.navigation = be;
          let jt = mm(ae);
          jt !== void 0 && (de.actionData = jt);
        }
        It.length > 0 && (de.fetchers = t3(It)), vt(de, { flushSync: le });
      }
      It.forEach((de) => {
        tn(de.key), de.controller && ie.set(de.key, de.controller);
      });
      let ho = () => It.forEach((de) => tn(de.key));
      L && L.signal.addEventListener("abort", ho);
      let { loaderResults: Nn, fetcherResults: ti } = await gm(zt, It, k, D, T);
      if (k.signal.aborted) return { shortCircuited: true };
      L && L.signal.removeEventListener("abort", ho), It.forEach((de) => ie.delete(de.key));
      let Mn = Mu(Nn);
      if (Mn) return await ga(k, Mn.result, true, { replace: te }), { shortCircuited: true };
      if (Mn = Mu(ti), Mn) return gt.add(Mn.key), await ga(k, Mn.result, true, { replace: te }), { shortCircuited: true };
      let Ar = new Map(x.fetchers), { loaderData: fd, errors: Ln } = My(x, N, Nn, ae, It, ti, Ar);
      J && x.errors && (Ln = { ...x.errors, ...Ln });
      let ns = ym(Ar), as = wm(Pe, Ar), is = ns || as || It.length > 0;
      return { matches: N, loaderData: fd, errors: Ln, ...is ? { workingFetchers: Ar } : {} };
    }
    function mm(k) {
      if (k && !at(k[1])) return { [k[0]]: k[1].data };
      if (x.actionData) return Object.keys(x.actionData).length === 0 ? null : x.actionData;
    }
    function t3(k) {
      let D = new Map(x.fetchers);
      return k.forEach((N) => {
        let _ = D.get(N.key), T = ll(void 0, _ ? _.data : void 0);
        D.set(N.key, T);
      }), D;
    }
    async function r3(k, D, N, _) {
      tn(k);
      let T = (_ && _.flushSync) === true, Q = l.activeRoutes, Y = Bh(x.location, x.matches, s, N, D, _?.relative), X = Et(Q, Y, s, false, l.branches), W = ts(X, Q, Y);
      if (W.active && W.matches && (X = W.matches), !X) {
        en(k, D, Ke(404, { pathname: Y }), { flushSync: T });
        return;
      }
      let { path: te, submission: J, error: le } = xy(true, Y, _);
      if (le) {
        en(k, D, le, { flushSync: T });
        return;
      }
      let ae = e3.getContext ? await e3.getContext() : new mr(), me = (_ && _.preventScrollReset) === true;
      if (J && Ye(J.formMethod)) {
        await n3(k, D, te, X, ae, W.active, T, me, J, _ && _.defaultShouldRevalidate);
        return;
      }
      rr.set(k, { routeId: D, path: te }), await a3(k, D, te, X, ae, W.active, T, me, J);
    }
    async function n3(k, D, N, _, T, Q, Y, X, W, te) {
      ud(), rr.delete(k);
      let J = x.fetchers.get(k);
      Jr(k, LE(W, J), { flushSync: Y });
      let le = new AbortController(), ae = Ai(e3.history, N, le.signal, W);
      if (Q) {
        let _e = await rs(_, new URL(ae.url).pathname, ae.signal, k);
        if (_e.type === "aborted") return;
        if (_e.type === "error") {
          en(k, D, _e.error, { flushSync: Y });
          return;
        } else if (_e.matches) _ = _e.matches;
        else {
          en(k, D, Ke(404, { pathname: N }), { flushSync: Y });
          return;
        }
      }
      let me = Oi(_, N);
      if (!me.route.action && !me.route.lazy) {
        let _e = Ke(405, { method: W.formMethod, pathname: N, routeId: D });
        en(k, D, _e, { flushSync: Y });
        return;
      }
      ie.set(k, le);
      let be = Ve, Ze = ra(i, o, ae, N, _, me, n, T), ve = await fo(ae, N, Ze, T, k), ge = ve[me.route.id];
      if (!ge) {
        for (let _e of Ze) if (ve[_e.route.id]) {
          ge = ve[_e.route.id];
          break;
        }
      }
      if (ae.signal.aborted) {
        ie.get(k) === le && ie.delete(k);
        return;
      }
      if (qt.has(k)) {
        if (ta(ge) || at(ge)) {
          Jr(k, Br(void 0));
          return;
        }
      } else {
        if (ta(ge)) if (ie.delete(k), Pe > be) {
          Jr(k, Br(void 0));
          return;
        } else return gt.add(k), Jr(k, ll(W)), ga(ae, ge, false, { fetcherSubmission: W, preventScrollReset: X });
        if (at(ge)) {
          en(k, D, ge.error);
          return;
        }
      }
      let zt = x.navigation.location || x.location, It = Ai(e3.history, zt, le.signal), ho = l.activeRoutes, Nn = x.navigation.state !== "idle" ? Et(ho, x.navigation.location, s, false, l.branches) : x.matches;
      q(Nn, "Didn't find any matches after fetcher action");
      let ti = ++Ve;
      yr.set(k, ti);
      let { dsMatches: Mn, revalidatingFetchers: Ar } = by(It, T, i, o, e3.history, x, Nn, W, zt, n, false, oe, Le, qt, rr, gt, ho, s, e3.patchRoutesOnNavigation != null, l.branches, [me.route.id, ge], te), fd = ll(W, ge.data), Ln = new Map(x.fetchers);
      Ln.set(k, fd), Ar.filter((_e) => _e.key !== k).forEach((_e) => {
        let va = _e.key, Cm = Ln.get(va), h3 = ll(void 0, Cm ? Cm.data : void 0);
        Ln.set(va, h3), tn(va), _e.controller && ie.set(va, _e.controller);
      }), vt({ fetchers: Ln });
      let ns = () => Ar.forEach((_e) => tn(_e.key));
      le.signal.addEventListener("abort", ns);
      let { loaderResults: as, fetcherResults: is } = await gm(Mn, Ar, It, zt, T);
      if (le.signal.aborted) return;
      le.signal.removeEventListener("abort", ns), yr.delete(k), ie.delete(k), Ar.forEach((_e) => ie.delete(_e.key));
      let de = x.fetchers.has(k), jt = (_e) => {
        if (!de) return _e;
        let va = new Map(_e.fetchers);
        return va.set(k, Br(ge.data)), { ..._e, fetchers: va };
      }, Fr = Mu(as);
      if (Fr) return x = jt(x), ga(It, Fr.result, false, { preventScrollReset: X });
      if (Fr = Mu(is), Fr) return gt.add(Fr.key), x = jt(x), ga(It, Fr.result, false, { preventScrollReset: X });
      let rn = new Map(x.fetchers);
      de && rn.set(k, Br(ge.data));
      let { loaderData: Sm, errors: hd } = My(x, Nn, as, void 0, Ar, is, rn);
      wm(ti, rn), x.navigation.state === "loading" && ti > Pe ? (q(M, "Expected pending action"), L && L.abort(), ei(x.navigation.location, { matches: Nn, loaderData: Sm, errors: hd, fetchers: rn })) : (vt({ errors: hd, loaderData: Ly(x.loaderData, Sm, Nn, hd), fetchers: rn }), oe = false);
    }
    async function a3(k, D, N, _, T, Q, Y, X, W) {
      let te = x.fetchers.get(k);
      Jr(k, ll(W, te ? te.data : void 0), { flushSync: Y });
      let J = new AbortController(), le = Ai(e3.history, N, J.signal);
      if (Q) {
        let ge = await rs(_, new URL(le.url).pathname, le.signal, k);
        if (ge.type === "aborted") return;
        if (ge.type === "error") {
          en(k, D, ge.error, { flushSync: Y });
          return;
        } else if (ge.matches) _ = ge.matches;
        else {
          en(k, D, Ke(404, { pathname: N }), { flushSync: Y });
          return;
        }
      }
      let ae = Oi(_, N);
      ie.set(k, J);
      let me = Ve, be = ra(i, o, le, N, _, ae, n, T), Ze = await fo(le, N, be, T, k), ve = Ze[ae.route.id];
      if (!ve) {
        for (let ge of _) if (Ze[ge.route.id]) {
          ve = Ze[ge.route.id];
          break;
        }
      }
      if (ie.get(k) === J && ie.delete(k), !le.signal.aborted) {
        if (qt.has(k)) {
          Jr(k, Br(void 0));
          return;
        }
        if (ta(ve)) if (Pe > me) {
          Jr(k, Br(void 0));
          return;
        } else {
          gt.add(k), await ga(le, ve, false, { preventScrollReset: X });
          return;
        }
        if (at(ve)) {
          en(k, D, ve.error);
          return;
        }
        Jr(k, Br(ve.data));
      }
    }
    async function ga(k, D, N, { submission: _, fetcherSubmission: T, preventScrollReset: Q, replace: Y } = {}) {
      N || (P?.resolve(), P = null), D.response.headers.has("X-Remix-Revalidate") && (oe = true);
      let X = D.response.headers.get("Location");
      q(X, "Expected a Location header on the redirect Response");
      let W = X, te = new URL(k.url);
      X = Dy(X, te, s, e3.history), Fa(W, X, te, "allow-explicit");
      let J = vn(x.location, X, { _isRedirect: true });
      if (r) {
        let ve = false;
        if (D.response.headers.has("X-Remix-Reload-Document")) ve = true;
        else if (ap(X)) {
          let ge = Gy(t, X, true);
          ve = ge.origin !== t.location.origin || Qe(ge.pathname, s) == null;
        }
        if (ve) {
          Y ? t.location.replace(X) : t.location.assign(X);
          return;
        }
      }
      L = null;
      let le = Y === true || D.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: ae, formAction: me, formEncType: be } = x.navigation;
      !_ && !T && ae && me && be && (_ = _y(x.navigation));
      let Ze = _ || T;
      if (vE.has(D.response.status) && Ze && Ye(Ze.formMethod)) await ma(le, J, { submission: { ...Ze, formAction: X }, preventScrollReset: Q || A, enableViewTransition: N ? B : void 0 });
      else {
        let ve = Oh(J, [], le, _);
        await ma(le, J, { overrideNavigation: ve, fetcherSubmission: T, preventScrollReset: Q || A, enableViewTransition: N ? B : void 0 });
      }
    }
    async function fo(k, D, N, _, T) {
      let Q, Y = {};
      try {
        Q = await xw(u, k, D, N, T, _, false);
      } catch (X) {
        return N.filter((W) => W.shouldLoad).forEach((W) => {
          Y[W.route.id] = { type: "error", error: X };
        }), Y;
      }
      if (k.signal.aborted) return Y;
      if (!Ye(k.method)) for (let X of N) {
        if (Q[X.route.id]?.type === "error") break;
        !Q.hasOwnProperty(X.route.id) && !x.loaderData.hasOwnProperty(X.route.id) && (!x.errors || !x.errors.hasOwnProperty(X.route.id)) && X.shouldCallHandler() && (Q[X.route.id] = { type: "error", result: new Error(`No result returned from dataStrategy for route ${X.route.id}`) });
      }
      for (let [X, W] of Object.entries(Q)) if (Nw(W)) {
        let te = W.result;
        Y[X] = { type: "redirect", response: Ew(te, k, X, N, s) };
      } else Y[X] = await kw(W);
      return Y;
    }
    async function gm(k, D, N, _, T) {
      let Q = fo(N, _, k, T, null), Y = Promise.all(D.map(async (te) => {
        if (te.matches && te.match && te.request && te.controller) {
          let le = (await fo(te.request, te.path, te.matches, T, te.key))[te.match.route.id];
          return { [te.key]: le };
        } else return Promise.resolve({ [te.key]: { type: "error", error: Ke(404, { pathname: te.path }) } });
      })), X = await Q, W = (await Y).reduce((te, J) => Object.assign(te, J), {});
      return { loaderResults: X, fetcherResults: W };
    }
    function ud() {
      oe = true, rr.forEach((k, D) => {
        ie.has(D) && Le.add(D), tn(D);
      });
    }
    function Jr(k, D, N = {}) {
      let _ = new Map(x.fetchers);
      _.set(k, D), vt({ fetchers: _ }, { flushSync: (N && N.flushSync) === true });
    }
    function en(k, D, N, _ = {}) {
      let T = pr(x.matches, D), Q = new Map(x.fetchers);
      cd(Q, k), vt({ errors: { [T.route.id]: N }, fetchers: Q }, { flushSync: (_ && _.flushSync) === true });
    }
    function i3(k) {
      return nr.set(k, (nr.get(k) || 0) + 1), qt.has(k) && qt.delete(k), x.fetchers.get(k) || wl;
    }
    function o3(k, D) {
      tn(k, D?.reason), Jr(k, Br(null));
    }
    function cd(k, D) {
      let N = x.fetchers.get(D);
      ie.has(D) && !(N && N.state === "loading" && yr.has(D)) && tn(D), rr.delete(D), yr.delete(D), gt.delete(D), qt.delete(D), Le.delete(D), k.delete(D);
    }
    function l3(k) {
      let D = (nr.get(k) || 0) - 1;
      D <= 0 ? (nr.delete(k), qt.add(k)) : nr.set(k, D), vt({ fetchers: new Map(x.fetchers) });
    }
    function tn(k, D) {
      let N = ie.get(k);
      N && (N.abort(D), ie.delete(k));
    }
    function vm(k, D) {
      for (let N of k) {
        let _ = D.get(N);
        q(_, `Expected fetcher: ${N}`);
        let T = Br(_.data);
        D.set(N, T);
      }
    }
    function ym(k) {
      let D = [], N = false;
      for (let _ of gt) {
        let T = k.get(_);
        q(T, `Expected fetcher: ${_}`), T.state === "loading" && (gt.delete(_), D.push(_), N = true);
      }
      return vm(D, k), N;
    }
    function wm(k, D) {
      let N = [];
      for (let [_, T] of yr) if (T < k) {
        let Q = D.get(_);
        q(Q, `Expected fetcher: ${_}`), Q.state === "loading" && (tn(_), yr.delete(_), N.push(_));
      }
      return vm(N, D), N.length > 0;
    }
    function s3(k, D) {
      let N = x.blockers.get(k) || pn;
      return pa.get(k) !== D && pa.set(k, D), N;
    }
    function xm(k) {
      x.blockers.delete(k), pa.delete(k);
    }
    function es(k, D) {
      let N = x.blockers.get(k) || pn;
      q(N.state === "unblocked" && D.state === "blocked" || N.state === "blocked" && D.state === "blocked" || N.state === "blocked" && D.state === "proceeding" || N.state === "blocked" && D.state === "unblocked" || N.state === "proceeding" && D.state === "unblocked", `Invalid blocker state transition: ${N.state} -> ${D.state}`);
      let _ = new Map(x.blockers);
      _.set(k, D), vt({ blockers: _ });
    }
    function bm({ currentLocation: k, nextLocation: D, historyAction: N }) {
      if (pa.size === 0) return;
      pa.size > 1 && ke(false, "A router only supports one blocker at a time");
      let _ = Array.from(pa.entries()), [T, Q] = _[_.length - 1], Y = x.blockers.get(T);
      if (!(Y && Y.state === "proceeding") && Q({ currentLocation: k, nextLocation: D, historyAction: N })) return T;
    }
    function dd(k) {
      let D = Ke(404, { pathname: k }), N = l.activeRoutes, { matches: _, route: T } = Fi(N);
      return { notFoundMatches: _, route: T, error: D };
    }
    function u3(k, D, N) {
      if (v = k, m = D, y = N || null, !g && x.navigation === $i) {
        g = true;
        let _ = Em(x.location, x.matches);
        _ != null && vt({ restoreScrollPosition: _ });
      }
      return () => {
        v = null, m = null, y = null;
      };
    }
    function km(k, D) {
      return y && y(k, D.map((_) => Ky(_, x.loaderData))) || k.key;
    }
    function c3(k, D) {
      if (v && m) {
        let N = km(k, D);
        v[N] = m();
      }
    }
    function Em(k, D) {
      if (v) {
        let N = km(k, D), _ = v[N];
        if (typeof _ == "number") return _;
      }
      return null;
    }
    function ts(k, D, N) {
      if (e3.patchRoutesOnNavigation) {
        let _ = l.branches;
        if (k) {
          if (Object.keys(k[0].params).length > 0) return { active: true, matches: Et(D, N, s, true, _) };
        } else return { active: true, matches: Et(D, N, s, true, _) || [] };
      }
      return { active: false, matches: null };
    }
    async function rs(k, D, N, _) {
      if (!e3.patchRoutesOnNavigation) return { type: "success", matches: k };
      let T = k;
      for (; ; ) {
        let Q = o;
        try {
          await e3.patchRoutesOnNavigation({ signal: N, path: D, matches: T, fetcherKey: _, patch: (te, J) => {
            N.aborted || ky(te, J, l, Q, i, false);
          } });
        } catch (te) {
          return { type: "error", error: te, partialMatches: T };
        }
        if (N.aborted) return { type: "aborted" };
        let Y = l.branches, X = Et(l.activeRoutes, D, s, false, Y), W = null;
        if (X) {
          if (Object.keys(X[0].params).length === 0) return { type: "success", matches: X };
          if (W = Et(l.activeRoutes, D, s, true, Y), !(W && T.length < W.length && Rm(T, W.slice(0, T.length)))) return { type: "success", matches: X };
        }
        if (W || (W = Et(l.activeRoutes, D, s, true, Y)), !W || Rm(T, W)) return { type: "success", matches: null };
        T = W;
      }
    }
    function Rm(k, D) {
      return k.length === D.length && k.every((N, _) => N.route.id === D[_].route.id);
    }
    function d3(k) {
      o = {}, l.setHmrRoutes(yn(k, i, void 0, o));
    }
    function f3(k, D, N = false) {
      ky(k, D, l, o, i, N), l.hasHMRRoutes || vt({});
    }
    return R = { get basename() {
      return s;
    }, get future() {
      return c;
    }, get state() {
      return x;
    }, get routes() {
      return l.stableRoutes;
    }, get branches() {
      return l.branches;
    }, get manifest() {
      return o;
    }, get window() {
      return t;
    }, initialize: K5, subscribe: X5, enableScrollRestoration: u3, navigate: pm, fetch: r3, revalidate: Z5, createHref: (k) => e3.history.createHref(k), createURL: (k) => e3.history.createURL(k), encodeLocation: (k) => e3.history.encodeLocation(k), getFetcher: i3, resetFetcher: o3, deleteFetcher: l3, dispose: Q5, getBlocker: s3, deleteBlocker: xm, patchRoutes: f3, _internalFetchControllers: ie, _internalSetRoutes: d3, _internalSetStateDoNotUseOrYouWillBreakYourApp(k) {
      vt(k);
    } }, e3.instrumentations && (R = cE(R, e3.instrumentations.map((k) => k.router).filter(Boolean))), R;
  }
  function up(e3, t) {
    q(e3.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let r = {}, n = (t ? t.basename : null) || "/", a = t?.mapRouteProperties || dw, i = a, o = { ...t?.future };
    if (t?.instrumentations) {
      let y = t.instrumentations;
      i = (m) => ({ ...a(m), ...aw(y.map((g) => g.route).filter(Boolean), m) });
    }
    let l = yn(e3, i, void 0, r), s = dl(l);
    async function u(y, { requestContext: m, filterMatchesToLoad: g, skipLoaderErrorBubbling: p, skipRevalidation: w, dataStrategy: b, generateMiddlewareResponse: E, normalizePath: S } = {}) {
      let R = S || wy, x = y.method, M = vn("", R(y), null, "default"), P = Et(l, M, n, false, s);
      if (m = m ?? new mr(), !qh(x) && x !== "HEAD") {
        let L = Ke(405, { method: x }), { matches: B, route: j } = Fi(l), ne = { basename: n, location: M, matches: B, loaderData: {}, actionData: null, errors: { [j.id]: L }, statusCode: L.status, loaderHeaders: {}, actionHeaders: {} };
        return E ? E(() => Promise.resolve(ne)) : ne;
      } else if (!P) {
        let L = Ke(404, { pathname: M.pathname }), { matches: B, route: j } = Fi(l), ne = { basename: n, location: M, matches: B, loaderData: {}, actionData: null, errors: { [j.id]: L }, statusCode: L.status, loaderHeaders: {}, actionHeaders: {} };
        return E ? E(() => Promise.resolve(ne)) : ne;
      }
      if (E) {
        q(m instanceof mr, "When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
        try {
          await Sy(P, r, i);
          let L, B = await Cy({ request: y, url: ju(y, M), pattern: mn(P), matches: P, params: P[0].params, context: m }, async () => await E(async (ne, Z = {}) => {
            let oe = await d(ne, M, P, m, b || null, p === true, null, "filterMatchesToLoad" in Z ? Z.filterMatchesToLoad ?? null : g ?? null, w === true);
            return Ae(oe) ? oe : (L = { location: M, basename: n, ...oe }, L);
          }), async (j, ne) => {
            if (Ui(j)) return j;
            if (Ae(j)) try {
              j = new it(j.status, j.statusText, await bw(j));
            } catch (Z) {
              j = Z;
            }
            if (gn(j) && (j = Cw(j)), L) {
              ne in L.loaderData && (L.loaderData[ne] = void 0);
              let Z = cp(l, L, j, p ? ne : pr(P, ne).route.id);
              return E(() => Promise.resolve(Z));
            } else {
              let Z = p ? ne : pr(P, P.find((Le) => Le.route.id === ne || Le.route.loader)?.route.id || ne).route.id, oe = { matches: P, location: M, basename: n, loaderData: {}, actionData: null, errors: { [Z]: j }, statusCode: Ue(j) ? j.status : 500, actionHeaders: {}, loaderHeaders: {} };
              return E(() => Promise.resolve(oe));
            }
          });
          return q(Ae(B), "Expected a response in query()"), B;
        } catch (L) {
          if (Ae(L)) return L;
          throw L;
        }
      }
      let A = await d(y, M, P, m, b || null, p === true, null, g || null, w === true);
      return Ae(A) ? A : { location: M, basename: n, ...A };
    }
    async function c(y, { routeId: m, requestContext: g, dataStrategy: p, generateMiddlewareResponse: w, normalizePath: b } = {}) {
      let E = b || wy, S = y.method, R = vn("", E(y), null, "default"), x = Et(l, R, n, false, s);
      if (g = g ?? new mr(), !qh(S) && S !== "HEAD" && S !== "OPTIONS") throw Ke(405, { method: S });
      if (!x) throw Ke(404, { pathname: R.pathname });
      let M = m ? x.find((L) => L.route.id === m) : Oi(x, R);
      if (m && !M) throw Ke(403, { pathname: R.pathname, routeId: m });
      if (!M) throw Ke(404, { pathname: R.pathname });
      if (w) return q(g instanceof mr, "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `RouterContextProvider`"), await Sy(x, r, i), await Cy({ request: y, url: ju(y, R), pattern: mn(x), matches: x, params: x[0].params, context: g }, async () => await w(async (j) => {
        let ne = await d(j, R, x, g, p || null, false, M, null, false), Z = A(ne);
        return Ae(Z) ? Z : typeof Z == "string" ? new Response(Z) : Response.json(Z);
      }), (B) => {
        if (gn(B)) return Promise.resolve(Yh(B));
        if (Ae(B)) return Promise.resolve(B);
        throw B;
      });
      let P = await d(y, R, x, g, p || null, false, M, null, false);
      return A(P);
      function A(L) {
        if (Ae(L)) return L;
        let B = L.errors ? Object.values(L.errors)[0] : void 0;
        if (B !== void 0) throw B;
        if (L.actionData) return Object.values(L.actionData)[0];
        if (L.loaderData) return Object.values(L.loaderData)[0];
      }
    }
    async function d(y, m, g, p, w, b, E, S, R) {
      q(y.signal, "query()/queryRoute() requests must contain an AbortController signal");
      try {
        if (Ye(y.method)) return await f(y, m, g, E || Oi(g, m), p, w, b, E != null, S, R);
        let x = await h(y, m, g, p, w, b, E, S);
        return Ae(x) ? x : { ...x, actionData: null, actionHeaders: {} };
      } catch (x) {
        if (Dw(x) && Ae(x.result)) {
          if (x.type === "error") throw x.result;
          return x.result;
        }
        if (Ui(x)) return x;
        throw x;
      }
    }
    async function f(y, m, g, p, w, b, E, S, R, x) {
      let M;
      if (!p.route.action && !p.route.lazy) {
        let L = Ke(405, { method: y.method, pathname: new URL(y.url).pathname, routeId: p.route.id });
        if (S) throw L;
        M = { type: "error", error: L };
      } else {
        let L = ra(i, r, y, m, g, p, [], w);
        M = (await v(y, m, L, S, w, b))[p.route.id], y.signal.aborted && yy(y, S);
      }
      if (ta(M)) throw new Response(null, { status: M.response.status, headers: { Location: M.response.headers.get("Location") } });
      if (S) {
        if (at(M)) throw M.error;
        return { matches: [p], loaderData: {}, actionData: { [p.route.id]: M.data }, errors: null, statusCode: 200, loaderHeaders: {}, actionHeaders: {} };
      }
      if (x) if (at(M)) {
        let L = E ? p : pr(g, p.route.id);
        return { statusCode: Ue(M.error) ? M.error.status : M.statusCode != null ? M.statusCode : 500, actionData: null, actionHeaders: { ...M.headers ? { [p.route.id]: M.headers } : {} }, matches: g, loaderData: {}, errors: { [L.route.id]: M.error }, loaderHeaders: {} };
      } else return { actionData: { [p.route.id]: M.data }, actionHeaders: M.headers ? { [p.route.id]: M.headers } : {}, matches: g, loaderData: {}, errors: null, statusCode: M.statusCode || 200, loaderHeaders: {} };
      let P = new Request(y.url, { headers: y.headers, redirect: y.redirect, signal: y.signal });
      if (at(M)) {
        let L = E ? p : pr(g, p.route.id);
        return { ...await h(P, m, g, w, b, E, null, R, [L.route.id, M]), statusCode: Ue(M.error) ? M.error.status : M.statusCode != null ? M.statusCode : 500, actionData: null, actionHeaders: { ...M.headers ? { [p.route.id]: M.headers } : {} } };
      }
      return { ...await h(P, m, g, w, b, E, null, R), actionData: { [p.route.id]: M.data }, ...M.statusCode ? { statusCode: M.statusCode } : {}, actionHeaders: M.headers ? { [p.route.id]: M.headers } : {} };
    }
    async function h(y, m, g, p, w, b, E, S, R) {
      let x = E != null;
      if (x && !E?.route.loader && !E?.route.lazy) throw Ke(400, { method: y.method, pathname: new URL(y.url).pathname, routeId: E?.route.id });
      let M;
      if (E) M = ra(i, r, y, m, g, E, [], p);
      else {
        let L = R && at(R[1]) ? g.findIndex((j) => j.route.id === R[0]) - 1 : void 0, B = mn(g);
        M = g.map((j, ne) => L != null && ne > L ? hl(i, r, y, m, B, j, [], p, false) : hl(i, r, y, m, B, j, [], p, (j.route.loader || j.route.lazy) != null && (!S || S(j))));
      }
      if (!w && !M.some((L) => L.shouldLoad)) return { matches: g, loaderData: {}, errors: R && at(R[1]) ? { [R[0]]: R[1].error } : null, statusCode: 200, loaderHeaders: {} };
      let P = await v(y, m, M, x, p, w);
      return y.signal.aborted && yy(y, x), { ...Rw(g, P, R, true, b), matches: g };
    }
    async function v(y, m, g, p, w, b) {
      let E = await xw(b || Vh, y, m, g, null, w, true), S = {};
      return await Promise.all(g.map(async (R) => {
        if (!(R.route.id in E)) return;
        let x = E[R.route.id];
        if (Nw(x)) {
          let M = x.result;
          throw Ew(M, y, R.route.id, g, n);
        }
        if (p) {
          if (Ae(x.result)) throw x;
          if (gn(x.result)) throw Yh(x.result);
        }
        S[R.route.id] = await kw(x);
      })), S;
    }
    return { dataRoutes: l, _internalRouteBranches: s, query: u, queryRoute: c };
  }
  function cp(e3, t, r, n) {
    let a = n || t._deepestRenderedBoundaryId || e3[0].id;
    return { ...t, statusCode: Ue(r) ? r.status : 500, errors: { [a]: r } };
  }
  function yy(e3, t) {
    if (e3.signal.reason !== void 0) throw e3.signal.reason;
    let r = t ? "queryRoute" : "query";
    throw new Error(`${r}() call aborted without an \`AbortSignal.reason\`: ${e3.method} ${e3.url}`);
  }
  function wE(e3) {
    return e3 != null && ("formData" in e3 && e3.formData != null || "body" in e3 && e3.body !== void 0);
  }
  function wy(e3) {
    let t = new URL(e3.url);
    return { pathname: t.pathname, search: t.search, hash: t.hash };
  }
  function Bh(e3, t, r, n, a, i) {
    let o, l;
    if (a) {
      o = [];
      for (let u of t) if (o.push(u), u.route.id === a) {
        l = u;
        break;
      }
    } else o = t, l = t[t.length - 1];
    let s = yl(n || ".", Gu(o), Qe(e3.pathname, r) || e3.pathname, i === "path");
    if (n == null && (s.search = e3.search, s.hash = e3.hash), (n == null || n === "" || n === ".") && l) {
      let u = hp(s.search);
      if (l.route.index && !u) s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index";
      else if (!l.route.index && u) {
        let c = new URLSearchParams(s.search), d = c.getAll("index");
        c.delete("index"), d.filter((h) => h).forEach((h) => c.append("index", h));
        let f = c.toString();
        s.search = f ? `?${f}` : "";
      }
    }
    return r !== "/" && (s.pathname = iE({ basename: r, pathname: s.pathname })), je(s);
  }
  function xy(e3, t, r) {
    if (!r || !wE(r)) return { path: t };
    if (r.formMethod && !qh(r.formMethod)) return { path: t, error: Ke(405, { method: r.formMethod }) };
    let n = () => ({ path: t, error: Ke(400, { type: "invalid-body" }) }), i = (r.formMethod || "get").toUpperCase(), o = Sw(t);
    if (r.body !== void 0) {
      if (r.formEncType === "text/plain") {
        if (!Ye(i)) return n();
        let d = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((f, [h, v]) => `${f}${h}=${v}
`, "") : String(r.body);
        return { path: t, submission: { formMethod: i, formAction: o, formEncType: r.formEncType, formData: void 0, json: void 0, text: d } };
      } else if (r.formEncType === "application/json") {
        if (!Ye(i)) return n();
        try {
          let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
          return { path: t, submission: { formMethod: i, formAction: o, formEncType: r.formEncType, formData: void 0, json: d, text: void 0 } };
        } catch {
          return n();
        }
      }
    }
    q(typeof FormData == "function", "FormData is not available in this environment");
    let l, s;
    if (r.formData) l = Wh(r.formData), s = r.formData;
    else if (r.body instanceof FormData) l = Wh(r.body), s = r.body;
    else if (r.body instanceof URLSearchParams) l = r.body, s = Ny(l);
    else if (r.body == null) l = new URLSearchParams(), s = new FormData();
    else try {
      l = new URLSearchParams(r.body), s = Ny(l);
    } catch {
      return n();
    }
    let u = { formMethod: i, formAction: o, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: s, json: void 0, text: void 0 };
    if (Ye(u.formMethod)) return { path: t, submission: u };
    let c = St(t);
    return e3 && c.search && hp(c.search) && l.append("index", ""), c.search = `?${l}`, { path: je(c), submission: u };
  }
  function by(e3, t, r, n, a, i, o, l, s, u, c, d, f, h, v, y, m, g, p, w, b, E) {
    let S = b ? at(b[1]) ? b[1].error : b[1].data : void 0, R = a.createURL(i.location), x = a.createURL(s), M;
    if (c && i.errors) {
      let Z = Object.keys(i.errors)[0];
      M = o.findIndex((oe) => oe.route.id === Z);
    } else if (b && at(b[1])) {
      let Z = b[0];
      M = o.findIndex((oe) => oe.route.id === Z) - 1;
    }
    let P = b ? b[1].statusCode : void 0, A = P && P >= 400, L = { currentUrl: R, currentParams: i.matches[0]?.params || {}, nextUrl: x, nextParams: o[0].params, ...l, actionResult: S, actionStatus: P }, B = mn(o), j = o.map((Z, oe) => {
      let { route: Le } = Z, ie = null;
      if (M != null && oe > M) ie = false;
      else if (Le.lazy) ie = true;
      else if (!dp(Le)) ie = false;
      else if (c) {
        let { shouldLoad: gt } = pw(Le, i.loaderData, i.errors);
        ie = gt;
      } else xE(i.loaderData, i.matches[oe], Z) && (ie = true);
      if (ie !== null) return hl(r, n, e3, s, B, Z, u, t, ie);
      let Ve = false;
      typeof E == "boolean" ? Ve = E : A ? Ve = false : (d || R.pathname + R.search === x.pathname + x.search || R.search !== x.search || bE(i.matches[oe], Z)) && (Ve = true);
      let Pe = { ...L, defaultShouldRevalidate: Ve }, yr = fl(Z, Pe);
      return hl(r, n, e3, s, B, Z, u, t, yr, Pe, E);
    }), ne = [];
    return v.forEach((Z, oe) => {
      if (c || !o.some((nr) => nr.route.id === Z.routeId) || h.has(oe)) return;
      let Le = i.fetchers.get(oe), ie = Le && Le.state !== "idle" && Le.data === void 0, Ve = Et(m, Z.path, g ?? "/", false, w);
      if (!Ve) {
        if (p && ie) return;
        ne.push({ key: oe, routeId: Z.routeId, path: Z.path, matches: null, match: null, request: null, controller: null });
        return;
      }
      if (y.has(oe)) return;
      let Pe = Oi(Ve, Z.path), yr = new AbortController(), gt = Ai(a, Z.path, yr.signal), rr = null;
      if (f.has(oe)) f.delete(oe), rr = ra(r, n, gt, Z.path, Ve, Pe, u, t);
      else if (ie) d && (rr = ra(r, n, gt, Z.path, Ve, Pe, u, t));
      else {
        let nr;
        typeof E == "boolean" ? nr = E : A ? nr = false : nr = d;
        let qt = { ...L, defaultShouldRevalidate: nr };
        fl(Pe, qt) && (rr = ra(r, n, gt, Z.path, Ve, Pe, u, t, qt));
      }
      rr && ne.push({ key: oe, routeId: Z.routeId, path: Z.path, matches: rr, match: Pe, request: gt, controller: yr });
    }), { dsMatches: j, revalidatingFetchers: ne };
  }
  function dp(e3) {
    return e3.loader != null || e3.middleware != null && e3.middleware.length > 0;
  }
  function pw(e3, t, r) {
    if (e3.lazy) return { shouldLoad: true, renderFallback: true };
    if (!dp(e3)) return { shouldLoad: false, renderFallback: false };
    let n = t != null && e3.id in t, a = r != null && r[e3.id] !== void 0;
    if (!n && a) return { shouldLoad: false, renderFallback: false };
    if (typeof e3.loader == "function" && e3.loader.hydrate === true) return { shouldLoad: true, renderFallback: !n };
    let i = !n && !a;
    return { shouldLoad: i, renderFallback: i };
  }
  function xE(e3, t, r) {
    let n = !t || r.route.id !== t.route.id, a = !e3.hasOwnProperty(r.route.id);
    return n || a;
  }
  function bE(e3, t) {
    let r = e3.route.path;
    return e3.pathname !== t.pathname || r != null && r.endsWith("*") && e3.params["*"] !== t.params["*"];
  }
  function fl(e3, t) {
    if (e3.route.shouldRevalidate) {
      let r = e3.route.shouldRevalidate(t);
      if (typeof r == "boolean") return r;
    }
    return t.defaultShouldRevalidate;
  }
  function ky(e3, t, r, n, a, i) {
    let o;
    if (e3) {
      let u = n[e3];
      q(u, `No route found to patch children into: routeId = ${e3}`), u.children || (u.children = []), o = u.children;
    } else o = r.activeRoutes;
    let l = [], s = [];
    if (t.forEach((u) => {
      let c = o.find((d) => mw(u, d));
      c ? s.push({ existingRoute: c, newRoute: u }) : l.push(u);
    }), l.length > 0) {
      let u = yn(l, a, [e3 || "_", "patch", String(o?.length || "0")], n);
      o.push(...u);
    }
    if (i && s.length > 0) for (let u = 0; u < s.length; u++) {
      let { existingRoute: c, newRoute: d } = s[u], f = c, [h] = yn([d], a, [], {}, true);
      Object.assign(f, { element: h.element ? h.element : f.element, errorElement: h.errorElement ? h.errorElement : f.errorElement, hydrateFallbackElement: h.hydrateFallbackElement ? h.hydrateFallbackElement : f.hydrateFallbackElement });
    }
    r.hasHMRRoutes || r.setRoutes([...r.activeRoutes]);
  }
  function mw(e3, t) {
    return "id" in e3 && "id" in t && e3.id === t.id ? true : e3.index === t.index && e3.path === t.path && e3.caseSensitive === t.caseSensitive ? (!e3.children || e3.children.length === 0) && (!t.children || t.children.length === 0) ? true : e3.children?.every((r, n) => t.children?.some((a) => mw(r, a))) ?? false : false;
  }
  function kE(e3, t, r, n, a) {
    let i = r[e3.id];
    if (q(i, "No route found in manifest"), !e3.lazy) return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
    if (typeof e3.lazy == "function") {
      let c = Ry.get(i);
      if (c) return { lazyRoutePromise: c, lazyHandlerPromise: c };
      let d = (async () => {
        q(typeof e3.lazy == "function", "No lazy route function found");
        let f = await e3.lazy(), h = {};
        for (let v in f) {
          let y = f[v];
          if (y === void 0) continue;
          let m = qk(v), p = i[v] !== void 0 && v !== "hasErrorBoundary";
          m ? ke(!m, "Route property " + v + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : p ? ke(!p, `Route "${i.id}" has a static property "${v}" defined but its lazy function is also returning a value for this property. The lazy route property "${v}" will be ignored.`) : h[v] = y;
        }
        Object.assign(i, h), Object.assign(i, { ...n(i), lazy: void 0 });
      })();
      return Ry.set(i, d), d.catch(() => {
      }), { lazyRoutePromise: d, lazyHandlerPromise: d };
    }
    let o = Object.keys(e3.lazy), l = [], s;
    for (let c of o) {
      if (a && a.includes(c)) continue;
      let d = fp({ key: c, route: e3, manifest: r, mapRouteProperties: n });
      d && (l.push(d), c === t && (s = d));
    }
    let u = l.length > 0 ? Promise.all(l).then(() => {
    }) : void 0;
    return u?.catch(() => {
    }), s?.catch(() => {
    }), { lazyRoutePromise: u, lazyHandlerPromise: s };
  }
  function EE(e3) {
    return e3 !== void 0;
  }
  function Sy(e3, t, r) {
    let n = e3.map(({ route: a }) => {
      if (!(typeof a.lazy != "object" || !a.lazy.middleware)) return fp({ key: "middleware", route: a, manifest: t, mapRouteProperties: r });
    }).filter(EE);
    return n.length > 0 ? Promise.all(n) : void 0;
  }
  async function Vh(e3) {
    let t = e3.matches.filter((a) => a.shouldLoad), r = {};
    return (await Promise.all(t.map((a) => a.resolve()))).forEach((a, i) => {
      r[t[i].route.id] = a;
    }), r;
  }
  async function RE(e3) {
    return e3.matches.some((t) => t.route.middleware) ? gw(e3, () => Vh(e3)) : Vh(e3);
  }
  function Cy(e3, t, r) {
    return vw(e3, t, n, Ae, r);
    function n(a) {
      return gn(a) ? Yh(a) : a;
    }
  }
  function gw(e3, t) {
    return vw(e3, t, (n) => {
      if (Ui(n)) throw n;
      return n;
    }, NE, r);
    function r(n, a, i) {
      if (i) return Promise.resolve(Object.assign(i.value, { [a]: { type: "error", result: n } }));
      {
        let { matches: o } = e3, l = Math.min(Math.max(o.findIndex((u) => u.route.id === a), 0), Math.max(o.findIndex((u) => u.shouldCallHandler()), 0)), s = pr(o, o[l].route.id).route.id;
        return Promise.resolve({ [s]: { type: "error", result: n } });
      }
    }
  }
  async function vw(e3, t, r, n, a) {
    let { matches: i, ...o } = e3, l = i.flatMap((u) => u.route.middleware ? u.route.middleware.map((c) => [u.route.id, c]) : []);
    return await yw(o, l, t, r, n, a);
  }
  async function yw(e3, t, r, n, a, i, o = 0) {
    let { request: l } = e3;
    if (l.signal.aborted) throw l.signal.reason ?? new Error(`Request aborted: ${l.method} ${l.url}`);
    let s = t[o];
    if (!s) return await r();
    let [u, c] = s, d, f = async () => {
      if (d) throw new Error("You may only call `next()` once per middleware");
      try {
        return d = { value: await yw(e3, t, r, n, a, i, o + 1) }, d.value;
      } catch (h) {
        return d = { value: await i(h, u, d) }, d.value;
      }
    };
    try {
      let h = await c(e3, f), v = h != null ? n(h) : void 0;
      return a(v) ? v : d ? v ?? d.value : (d = { value: await f() }, d.value);
    } catch (h) {
      return await i(h, u, d);
    }
  }
  function ww(e3, t, r, n, a) {
    let i = fp({ key: "middleware", route: n.route, manifest: t, mapRouteProperties: e3 }), o = kE(n.route, Ye(r.method) ? "action" : "loader", t, e3, a);
    return { middleware: i, route: o.lazyRoutePromise, handler: o.lazyHandlerPromise };
  }
  function hl(e3, t, r, n, a, i, o, l, s, u = null, c) {
    let d = false, f = ww(e3, t, r, i, o);
    return { ...i, _lazyPromises: f, shouldLoad: s, shouldRevalidateArgs: u, shouldCallHandler(h) {
      return d = true, u ? typeof c == "boolean" ? fl(i, { ...u, defaultShouldRevalidate: c }) : typeof h == "boolean" ? fl(i, { ...u, defaultShouldRevalidate: h }) : fl(i, u) : s;
    }, resolve(h) {
      let { lazy: v, loader: y, middleware: m } = i.route, g = d || s || h && !Ye(r.method) && (v || y), p = m && m.length > 0 && !y && !v;
      return g && (Ye(r.method) || !p) ? SE({ request: r, path: n, pattern: a, match: i, lazyHandlerPromise: f?.handler, lazyRoutePromise: f?.route, handlerOverride: h, scopedContext: l }) : Promise.resolve({ type: "data", result: void 0 });
    } };
  }
  function ra(e3, t, r, n, a, i, o, l, s = null) {
    return a.map((u) => u.route.id !== i.route.id ? { ...u, shouldLoad: false, shouldRevalidateArgs: s, shouldCallHandler: () => false, _lazyPromises: ww(e3, t, r, u, o), resolve: () => Promise.resolve({ type: "data", result: void 0 }) } : hl(e3, t, r, n, mn(a), u, o, l, true, s));
  }
  async function xw(e3, t, r, n, a, i, o) {
    n.some((c) => c._lazyPromises?.middleware) && await Promise.all(n.map((c) => c._lazyPromises?.middleware));
    let l = { request: t, url: ju(t, r), pattern: mn(n), params: n[0].params, context: i, matches: n }, u = await e3({ ...l, fetcherKey: a, runClientMiddleware: o ? () => {
      throw new Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
    } : (c) => {
      let d = l;
      return gw(d, () => c({ ...d, fetcherKey: a, runClientMiddleware: () => {
        throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
      } }));
    } });
    try {
      await Promise.all(n.flatMap((c) => [c._lazyPromises?.handler, c._lazyPromises?.route]));
    } catch {
    }
    return u;
  }
  async function SE({ request: e3, path: t, pattern: r, match: n, lazyHandlerPromise: a, lazyRoutePromise: i, handlerOverride: o, scopedContext: l }) {
    let s, u, c = Ye(e3.method), d = c ? "action" : "loader", f = (h) => {
      let v, y = new Promise((p, w) => v = w);
      u = () => v(), e3.signal.addEventListener("abort", u);
      let m = (p) => typeof h != "function" ? Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${n.route.id}]`)) : h({ request: e3, url: ju(e3, t), pattern: r, params: n.params, context: l }, ...p !== void 0 ? [p] : []), g = (async () => {
        try {
          return { type: "data", result: await (o ? o((w) => m(w)) : m()) };
        } catch (p) {
          return { type: "error", result: p };
        }
      })();
      return Promise.race([g, y]);
    };
    try {
      let h = c ? n.route.action : n.route.loader;
      if (a || i) if (h) {
        let v, [y] = await Promise.all([f(h).catch((m) => {
          v = m;
        }), a, i]);
        if (v !== void 0) throw v;
        s = y;
      } else {
        await a;
        let v = c ? n.route.action : n.route.loader;
        if (v) [s] = await Promise.all([f(v), i]);
        else if (d === "action") {
          let y = new URL(e3.url), m = y.pathname + y.search;
          throw Ke(405, { method: e3.method, pathname: m, routeId: n.route.id });
        } else return { type: "data", result: void 0 };
      }
      else if (h) s = await f(h);
      else {
        let v = new URL(e3.url), y = v.pathname + v.search;
        throw Ke(404, { pathname: y });
      }
    } catch (h) {
      return { type: "error", result: h };
    } finally {
      u && e3.signal.removeEventListener("abort", u);
    }
    return s;
  }
  async function bw(e3) {
    let t = e3.headers.get("Content-Type");
    return t && /\bapplication\/json\b/.test(t) ? e3.body == null ? null : e3.json() : e3.text();
  }
  async function kw(e3) {
    let { result: t, type: r } = e3;
    if (Ae(t)) {
      let n;
      try {
        n = await bw(t);
      } catch (a) {
        return { type: "error", error: a };
      }
      return r === "error" ? { type: "error", error: new it(t.status, t.statusText, n), statusCode: t.status, headers: t.headers } : { type: "data", data: n, statusCode: t.status, headers: t.headers };
    }
    return r === "error" ? gn(t) ? t.data instanceof Error ? { type: "error", error: t.data, statusCode: t.init?.status, headers: t.init?.headers ? new Headers(t.init.headers) : void 0 } : { type: "error", error: Cw(t), statusCode: Ue(t) ? t.status : void 0, headers: t.init?.headers ? new Headers(t.init.headers) : void 0 } : { type: "error", error: t, statusCode: Ue(t) ? t.status : void 0 } : gn(t) ? { type: "data", data: t.data, statusCode: t.init?.status, headers: t.init?.headers ? new Headers(t.init.headers) : void 0 } : { type: "data", data: t };
  }
  function Ew(e3, t, r, n, a) {
    let i = e3.headers.get("Location");
    if (q(i, "Redirects returned/thrown from loaders/actions must have a Location header"), !ap(i)) {
      let o = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
      i = Bh(new URL(t.url), o, a, i), e3.headers.set("Location", i);
    }
    return e3;
  }
  function gr(e3) {
    try {
      return CE.includes(new URL(e3).protocol);
    } catch {
      return false;
    }
  }
  function Dy(e3, t, r, n) {
    if (ap(e3)) {
      let a = e3, i = vl.test(a) ? new URL(Yy(a, t.protocol)) : new URL(a);
      if (gr(i.toString())) throw new Error("Invalid redirect location");
      let o = Qe(i.pathname, r) != null;
      if (i.origin === t.origin && o) return ip(i.pathname) + i.search + i.hash;
    }
    try {
      let a = n.createURL(e3);
      if (gr(a.toString())) throw new Error("Invalid redirect location");
    } catch {
    }
    return e3;
  }
  function Ai(e3, t, r, n) {
    let a = e3.createURL(Sw(t)).toString(), i = { signal: r };
    if (n && Ye(n.formMethod)) {
      let { formMethod: o, formEncType: l } = n;
      i.method = o.toUpperCase(), l === "application/json" ? (i.headers = new Headers({ "Content-Type": l }), i.body = JSON.stringify(n.json)) : l === "text/plain" ? i.body = n.text : l === "application/x-www-form-urlencoded" && n.formData ? i.body = Wh(n.formData) : i.body = n.formData;
    }
    return new Request(a, i);
  }
  function ju(e3, t) {
    let r = new URL(e3.url), n = typeof t == "string" ? St(t) : t;
    if (r.pathname = n.pathname || "/", n.search) {
      let a = new URLSearchParams(n.search), i = a.getAll("index");
      a.delete("index");
      for (let o of i.filter(Boolean)) a.append("index", o);
      r.search = a.size ? `?${a.toString()}` : "";
    } else r.search = "";
    return r.hash = n.hash || "", r;
  }
  function Wh(e3) {
    let t = new URLSearchParams();
    for (let [r, n] of e3.entries()) t.append(r, typeof n == "string" ? n : n.name);
    return t;
  }
  function Ny(e3) {
    let t = new FormData();
    for (let [r, n] of e3.entries()) t.append(r, n);
    return t;
  }
  function Rw(e3, t, r, n = false, a = false) {
    let i = {}, o = null, l, s = false, u = {}, c = r && at(r[1]) ? r[1].error : void 0;
    return e3.forEach((d) => {
      if (!(d.route.id in t)) return;
      let f = d.route.id, h = t[f];
      if (q(!ta(h), "Cannot handle redirect results in processLoaderData"), at(h)) {
        let v = h.error;
        if (c !== void 0 && (v = c, c = void 0), o = o || {}, a) o[f] = v;
        else {
          let y = pr(e3, f);
          o[y.route.id] == null && (o[y.route.id] = v);
        }
        n || (i[f] = hw), s || (s = true, l = Ue(h.error) ? h.error.status : 500), h.headers && (u[f] = h.headers);
      } else i[f] = h.data, h.statusCode && h.statusCode !== 200 && !s && (l = h.statusCode), h.headers && (u[f] = h.headers);
    }), c !== void 0 && r && (o = { [r[0]]: c }, r[2] && (i[r[2]] = void 0)), { loaderData: i, errors: o, statusCode: l || 200, loaderHeaders: u };
  }
  function My(e3, t, r, n, a, i, o) {
    let { loaderData: l, errors: s } = Rw(t, r, n);
    return a.filter((u) => !u.matches || u.matches.some((c) => c.shouldLoad)).forEach((u) => {
      let { key: c, match: d, controller: f } = u;
      if (f && f.signal.aborted) return;
      let h = i[c];
      if (q(h, "Did not find corresponding fetcher result"), at(h)) {
        let v = pr(e3.matches, d?.route.id);
        s && s[v.route.id] || (s = { ...s, [v.route.id]: h.error }), o.delete(c);
      } else if (ta(h)) q(false, "Unhandled fetcher revalidation redirect");
      else {
        let v = Br(h.data);
        o.set(c, v);
      }
    }), { loaderData: l, errors: s };
  }
  function Ly(e3, t, r, n) {
    let a = Object.entries(t).filter(([, i]) => i !== hw).reduce((i, [o, l]) => (i[o] = l, i), {});
    for (let i of r) {
      let o = i.route.id;
      if (!t.hasOwnProperty(o) && e3.hasOwnProperty(o) && i.route.loader && (a[o] = e3[o]), n && n.hasOwnProperty(o)) break;
    }
    return a;
  }
  function Py(e3) {
    return e3 ? at(e3[1]) ? { actionData: {} } : { actionData: { [e3[0]]: e3[1].data } } : {};
  }
  function pr(e3, t) {
    return (t ? e3.slice(0, e3.findIndex((n) => n.route.id === t) + 1) : [...e3]).reverse().find((n) => n.route.hasErrorBoundary === true) || e3[0];
  }
  function Fi(e3) {
    let t = e3.length === 1 ? e3[0] : e3.find((r) => r.index || !r.path || r.path === "/") || { id: "__shim-error-route__" };
    return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
  }
  function Ke(e3, { pathname: t, routeId: r, method: n, type: a, message: i } = {}) {
    let o = "Unknown Server Error", l = "Unknown @remix-run/router error";
    return e3 === 400 ? (o = "Bad Request", n && t && r ? l = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.` : a === "invalid-body" && (l = "Unable to encode submission body")) : e3 === 403 ? (o = "Forbidden", l = `Route "${r}" does not match URL "${t}"`) : e3 === 404 ? (o = "Not Found", l = `No route matches URL "${t}"`) : e3 === 405 && (o = "Method Not Allowed", n && t && r ? l = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.` : n && (l = `Invalid request method "${n.toUpperCase()}"`)), new it(e3 || 500, o, new Error(l), true);
  }
  function Mu(e3) {
    let t = Object.entries(e3);
    for (let r = t.length - 1; r >= 0; r--) {
      let [n, a] = t[r];
      if (ta(a)) return { key: n, result: a };
    }
  }
  function Sw(e3) {
    let t = typeof e3 == "string" ? St(e3) : e3;
    return je({ ...t, hash: "" });
  }
  function DE(e3, t) {
    return e3.pathname !== t.pathname || e3.search !== t.search ? false : e3.hash === "" ? t.hash !== "" : e3.hash === t.hash ? true : t.hash !== "";
  }
  function Yh(e3) {
    return Response.json(e3.data, e3.init ?? void 0);
  }
  function Cw(e3) {
    return new it(e3.init?.status ?? 500, e3.init?.statusText ?? "Internal Server Error", e3.data);
  }
  function NE(e3) {
    return e3 != null && typeof e3 == "object" && Object.entries(e3).every(([t, r]) => typeof t == "string" && Dw(r));
  }
  function Dw(e3) {
    return e3 != null && typeof e3 == "object" && "type" in e3 && "result" in e3 && (e3.type === "data" || e3.type === "error");
  }
  function Nw(e3) {
    return Ae(e3.result) && cw.has(e3.result.status);
  }
  function at(e3) {
    return e3.type === "error";
  }
  function ta(e3) {
    return (e3 && e3.type) === "redirect";
  }
  function gn(e3) {
    return typeof e3 == "object" && e3 != null && "type" in e3 && "data" in e3 && "init" in e3 && e3.type === "DataWithResponseInit";
  }
  function Ae(e3) {
    return e3 != null && typeof e3.status == "number" && typeof e3.statusText == "string" && typeof e3.headers == "object" && typeof e3.body < "u";
  }
  function xl(e3) {
    return cw.has(e3);
  }
  function Ui(e3) {
    return Ae(e3) && xl(e3.status) && e3.headers.has("Location");
  }
  function qh(e3) {
    return gE.has(e3.toUpperCase());
  }
  function Ye(e3) {
    return pE.has(e3.toUpperCase());
  }
  function hp(e3) {
    return new URLSearchParams(e3).getAll("index").some((t) => t === "");
  }
  function Oi(e3, t) {
    let r = typeof t == "string" ? St(t).search : t.search;
    if (e3[e3.length - 1].route.index && hp(r || "")) return e3[e3.length - 1];
    let n = tw(e3);
    return n[n.length - 1];
  }
  function _y(e3) {
    let { formMethod: t, formAction: r, formEncType: n, text: a, formData: i, json: o } = e3;
    if (!(!t || !r || !n)) {
      if (a != null) return { formMethod: t, formAction: r, formEncType: n, formData: void 0, json: void 0, text: a };
      if (i != null) return { formMethod: t, formAction: r, formEncType: n, formData: i, json: void 0, text: void 0 };
      if (o !== void 0) return { formMethod: t, formAction: r, formEncType: n, formData: void 0, json: o, text: void 0 };
    }
  }
  function Oh(e3, t, r, n) {
    return n ? { state: "loading", location: e3, matches: t, historyAction: r, formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text } : { state: "loading", location: e3, matches: t, historyAction: r, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
  }
  function ME(e3, t, r, n) {
    return { state: "submitting", location: e3, matches: t, historyAction: r, formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text };
  }
  function ll(e3, t) {
    return e3 ? { state: "loading", formMethod: e3.formMethod, formAction: e3.formAction, formEncType: e3.formEncType, formData: e3.formData, json: e3.json, text: e3.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t };
  }
  function LE(e3, t) {
    return { state: "submitting", formMethod: e3.formMethod, formAction: e3.formAction, formEncType: e3.formEncType, formData: e3.formData, json: e3.json, text: e3.text, data: t ? t.data : void 0 };
  }
  function Br(e3) {
    return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e3 };
  }
  function PE(e3, t) {
    try {
      let r = e3.sessionStorage.getItem(fw);
      if (r) {
        let n = JSON.parse(r);
        for (let [a, i] of Object.entries(n || {})) i && Array.isArray(i) && t.set(a, new Set(i || []));
      }
    } catch {
    }
  }
  function _E(e3, t) {
    if (t.size > 0) {
      let r = {};
      for (let [n, a] of t) r[n] = [...a];
      try {
        e3.sessionStorage.setItem(fw, JSON.stringify(r));
      } catch (n) {
        ke(false, `Failed to save applied view transitions in sessionStorage (${n}).`);
      }
    }
  }
  function Ty() {
    let e3, t, r = new Promise((n, a) => {
      e3 = async (i) => {
        n(i);
        try {
          await r;
        } catch {
        }
      }, t = async (i) => {
        a(i);
        try {
          await r;
        } catch {
        }
      };
    });
    return { promise: r, resolve: e3, reject: t };
  }
  function pp() {
    return $t.useContext(bl);
  }
  function Xu(e3) {
    if (e3.startsWith(`${Lw}:${TE}:{`)) try {
      let t = JSON.parse(e3.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
    } catch {
    }
  }
  function Zu(e3) {
    if (e3.startsWith(`${Lw}:${AE}:{`)) try {
      let t = JSON.parse(e3.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new it(t.status, t.statusText, t.data);
    } catch {
    }
  }
  function gp(e3, { relative: t } = {}) {
    q(xn(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: r, navigator: n } = U.useContext(ht), { hash: a, pathname: i, search: o } = Ia(e3, { relative: t }), l = i;
    return r !== "/" && (l = i === "/" ? r : er([r, i])), n.createHref({ pathname: l, search: o, hash: a });
  }
  function xn() {
    return U.useContext(na) != null;
  }
  function qe() {
    return q(xn(), "useLocation() may be used only in the context of a <Router> component."), U.useContext(na).location;
  }
  function Pw() {
    return U.useContext(na).navigationType;
  }
  function _w(e3) {
    q(xn(), "useMatch() may be used only in the context of a <Router> component.");
    let { pathname: t } = qe();
    return U.useMemo(() => $a(e3, ew(t)), [t, e3]);
  }
  function Aw(e3) {
    U.useContext(ht).static || U.useLayoutEffect(e3);
  }
  function bn() {
    let { isDataRoute: e3 } = U.useContext(Ot);
    return e3 ? BE() : FE();
  }
  function FE() {
    q(xn(), "useNavigate() may be used only in the context of a <Router> component.");
    let e3 = U.useContext(Mr), { basename: t, navigator: r } = U.useContext(ht), { matches: n } = U.useContext(Ot), { pathname: a } = qe(), i = JSON.stringify(Gu(n)), o = U.useRef(false);
    return Aw(() => {
      o.current = true;
    }), U.useCallback((s, u = {}) => {
      if (ke(o.current, Tw), !o.current) return;
      if (typeof s == "number") {
        r.go(s);
        return;
      }
      let c = yl(s, JSON.parse(i), a, u.relative === "path");
      e3 == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : er([t, c.pathname])), Fa(typeof s == "string" ? s : je(s), r.createHref(c), sp(r), "reject"), (u.replace ? r.replace : r.push)(c, u.state, u);
    }, [t, r, i, a, e3]);
  }
  function $w() {
    return U.useContext(Fw);
  }
  function vp(e3) {
    let t = U.useContext(Ot).outlet;
    return U.useMemo(() => t && U.createElement(Fw.Provider, { value: e3 }, t), [t, e3]);
  }
  function kl() {
    let { matches: e3 } = U.useContext(Ot);
    return e3[e3.length - 1]?.params ?? {};
  }
  function Ia(e3, { relative: t } = {}) {
    let { matches: r } = U.useContext(Ot), { pathname: n } = qe(), a = JSON.stringify(Gu(r));
    return U.useMemo(() => yl(e3, JSON.parse(a), n, t === "path"), [e3, a, n, t]);
  }
  function yp(e3, t) {
    return Ow(e3, t);
  }
  function Ow(e3, t, r) {
    q(xn(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: n } = U.useContext(ht), { matches: a } = U.useContext(Ot), i = a[a.length - 1], o = i ? i.params : {}, l = i ? i.pathname : "/", s = i ? i.pathnameBase : "/", u = i && i.route;
    if (Vr) {
      let m = u && u.path || "";
      Bw(l, !u || m.endsWith("*") || m.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m === "/" ? "*" : `${m}/*`}">.`);
    }
    let c = qe(), d;
    if (t) {
      let m = typeof t == "string" ? St(t) : t;
      q(s === "/" || m.pathname?.startsWith(s), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${m.pathname}" was given in the \`location\` prop.`), d = m;
    } else d = c;
    let f = d.pathname || "/", h = f;
    if (s !== "/") {
      let m = s.replace(/^\//, "").split("/");
      h = "/" + f.replace(/^\//, "").split("/").slice(m.length).join("/");
    }
    let v = r && r.state.matches.length ? r.state.matches.map((m) => Object.assign(m, { route: r.manifest[m.route.id] || m.route })) : Yi(e3, { pathname: h });
    Vr && (ke(u || v != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `), ke(v == null || v[v.length - 1].route.element !== void 0 || v[v.length - 1].route.Component !== void 0 || v[v.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));
    let y = Iw(v && v.map((m) => Object.assign({}, m, { params: Object.assign({}, o, m.params), pathname: er([s, n.encodeLocation ? n.encodeLocation(m.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : m.pathname]), pathnameBase: m.pathnameBase === "/" ? s : er([s, n.encodeLocation ? n.encodeLocation(m.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : m.pathnameBase]) })), a, r);
    return t && y ? U.createElement(na.Provider, { value: { location: { pathname: "/", search: "", hash: "", state: null, key: "default", mask: void 0, ...d }, navigationType: "POP" } }, y) : y;
  }
  function $E() {
    let e3 = ja(), t = Ue(e3) ? `${e3.status} ${e3.statusText}` : e3 instanceof Error ? e3.message : JSON.stringify(e3), r = e3 instanceof Error ? e3.stack : null, n = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: n }, i = { padding: "2px 4px", backgroundColor: n }, o = null;
    return Vr && (console.error("Error handled by React Router default ErrorBoundary:", e3), o = U.createElement(U.Fragment, null, U.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), U.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", U.createElement("code", { style: i }, "ErrorBoundary"), " or", " ", U.createElement("code", { style: i }, "errorElement"), " prop on your route."))), U.createElement(U.Fragment, null, U.createElement("h2", null, "Unexpected Application Error!"), U.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? U.createElement("pre", { style: a }, r) : null, o);
  }
  function zE({ children: e3, error: t }) {
    let { basename: r, navigator: n } = U.useContext(ht);
    if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
      let a = Xu(t.digest);
      if (a) {
        let i = zh.get(t);
        if (i) throw i;
        let o = nw(a.location, r), l = o.absoluteURL || o.to;
        if (Fa(a.location, l, sp(n), "allow-explicit"), gr(l)) throw new Error("Invalid redirect location");
        if (rw && !zh.get(t)) if (o.isExternal || a.reloadDocument) window.location.href = l;
        else {
          let s = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(o.to, { replace: a.replace }));
          throw zh.set(t, s), s;
        }
        return U.createElement("meta", { httpEquiv: "refresh", content: `0;url=${l}` });
      }
    }
    return e3;
  }
  function IE({ routeContext: e3, match: t, children: r }) {
    let n = U.useContext(Mr);
    return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), U.createElement(Ot.Provider, { value: e3 }, r);
  }
  function Iw(e3, t = [], r) {
    let n = r?.state;
    if (e3 == null) {
      if (!n) return null;
      if (n.errors) e3 = n.matches;
      else if (t.length === 0 && !n.initialized && n.matches.length > 0) e3 = n.matches;
      else return null;
    }
    let a = e3, i = n?.errors;
    if (i != null) {
      let c = a.findIndex((d) => d.route.id && i?.[d.route.id] !== void 0);
      q(c >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`), a = a.slice(0, Math.min(a.length, c + 1));
    }
    let o = false, l = -1;
    if (r && n) {
      o = n.renderFallback;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = c), d.route.id) {
          let { loaderData: f, errors: h } = n, v = d.route.loader && !f.hasOwnProperty(d.route.id) && (!h || h[d.route.id] === void 0);
          if (d.route.lazy || v) {
            r.isStatic && (o = true), l >= 0 ? a = a.slice(0, l + 1) : a = [a[0]];
            break;
          }
        }
      }
    }
    let s = r?.onError, u = n && s ? (c, d) => {
      s(c, { location: n.location, params: n.matches?.[0]?.params ?? {}, pattern: mn(n.matches), errorInfo: d });
    } : void 0;
    return a.reduceRight((c, d, f) => {
      let h, v = false, y = null, m = null;
      n && (h = i && d.route.id ? i[d.route.id] : void 0, y = d.route.errorElement || OE, o && (l < 0 && f === 0 ? (Bw("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), v = true, m = null) : l === f && (v = true, m = d.route.hydrateFallbackElement || null)));
      let g = t.concat(a.slice(0, f + 1)), p = () => {
        let w;
        return h ? w = y : v ? w = m : d.route.Component ? w = U.createElement(d.route.Component, null) : d.route.element ? w = d.route.element : w = c, U.createElement(IE, { match: d, routeContext: { outlet: c, matches: g, isDataRoute: n != null }, children: w });
      };
      return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? U.createElement(zw, { location: n.location, revalidation: n.revalidation, component: y, error: h, children: p(), routeContext: { outlet: null, matches: g, isDataRoute: true }, onError: u }) : p();
    }, null);
  }
  function wp(e3) {
    return `${e3} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function xp(e3) {
    let t = U.useContext(Mr);
    return q(t, wp(e3)), t;
  }
  function Yr(e3) {
    let t = U.useContext(Wr);
    return q(t, wp(e3)), t;
  }
  function jE(e3) {
    let t = U.useContext(Ot);
    return q(t, wp(e3)), t;
  }
  function Ki(e3) {
    let t = jE(e3), r = t.matches[t.matches.length - 1];
    return q(r.route.id, `${e3} can only be used on routes that contain a unique "id"`), r.route.id;
  }
  function UE() {
    return Ki("useRouteId");
  }
  function bp() {
    let e3 = Yr("useNavigation");
    return U.useMemo(() => {
      let { matches: t, historyAction: r, ...n } = e3.navigation;
      return n;
    }, [e3.navigation]);
  }
  function jw() {
    let e3 = xp("useRevalidator"), t = Yr("useRevalidator"), r = U.useCallback(async () => {
      await e3.router.revalidate();
    }, [e3.router]);
    return U.useMemo(() => ({ revalidate: r, state: t.revalidation }), [r, t.revalidation]);
  }
  function El() {
    let { matches: e3, loaderData: t } = Yr("useMatches");
    return U.useMemo(() => e3.map((r) => Ky(r, t)), [e3, t]);
  }
  function Rl() {
    let e3 = Yr("useLoaderData"), t = Ki("useLoaderData");
    return e3.loaderData[t];
  }
  function Uw(e3) {
    return Yr("useRouteLoaderData").loaderData[e3];
  }
  function Sl() {
    let e3 = Yr("useActionData"), t = Ki("useLoaderData");
    return e3.actionData ? e3.actionData[t] : void 0;
  }
  function ja() {
    let e3 = U.useContext(mp), t = Yr("useRouteError"), r = Ki("useRouteError");
    return e3 !== void 0 ? e3 : t.errors?.[r];
  }
  function kp() {
    return U.useContext(Hi)?._data;
  }
  function Hw() {
    return U.useContext(Hi)?._error;
  }
  function Ep(e3) {
    let { router: t, basename: r } = xp("useBlocker"), n = Yr("useBlocker"), [a, i] = U.useState(""), o = U.useCallback((l) => {
      if (typeof e3 != "function") return !!e3;
      if (r === "/") return e3(l);
      let { currentLocation: s, nextLocation: u, historyAction: c } = l;
      return e3({ currentLocation: { ...s, pathname: Qe(s.pathname, r) || s.pathname }, nextLocation: { ...u, pathname: Qe(u.pathname, r) || u.pathname }, historyAction: c });
    }, [r, e3]);
    return U.useEffect(() => {
      let l = String(++HE);
      return i(l), () => t.deleteBlocker(l);
    }, [t]), U.useEffect(() => {
      a !== "" && t.getBlocker(a, o);
    }, [t, a, o]), a && n.blockers.has(a) ? n.blockers.get(a) : pn;
  }
  function BE() {
    let { router: e3 } = xp("useNavigate"), t = Ki("useNavigate"), r = U.useRef(false);
    return Aw(() => {
      r.current = true;
    }), U.useCallback(async (a, i = {}) => {
      ke(r.current, Tw), r.current && (typeof a == "number" ? await e3.navigate(a) : await e3.navigate(a, { fromRouteId: t, ...i }));
    }, [e3, t]);
  }
  function Bw(e3, t, r) {
    !t && !Ay[e3] && (Ay[e3] = true, ke(false, r));
  }
  function Vw(...e3) {
    let t = Ki("useRoute"), r = e3[0] ?? t, n = Yr("useRoute"), a = n.matches.find(({ route: i }) => i.id === r);
    if (a !== void 0) return { handle: a.route.handle, loaderData: n.loaderData[r], actionData: n.actionData?.[r] };
  }
  function Fy(e3) {
    return { id: e3.route.id, pathname: e3.pathname, params: e3.params, handle: e3.route.handle };
  }
  function Ww() {
    let { location: e3, historyAction: t, matches: r, navigation: n } = Yr("unstable_useRouterState"), a = U.useMemo(() => ({ type: t, location: e3, searchParams: new URLSearchParams(e3.search), params: r[r.length - 1]?.params ?? {}, matches: r.map((o) => Fy(o)) }), [e3, r, t]), i = U.useMemo(() => {
      if (n.state === "idle") return null;
      let o = { type: n.historyAction, location: n.location, searchParams: new URLSearchParams(n.location.search), params: n.matches[n.matches.length - 1]?.params ?? {}, matches: n.matches.map((l) => Fy(l)) };
      return n.state === "loading" ? { ...o, state: "loading", formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text } : { ...o, state: "submitting", formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text };
    }, [n]);
    return U.useMemo(() => ({ active: a, pending: i }), [a, i]);
  }
  function Bi(e3, t) {
    !e3 && !$y[t] && ($y[t] = true, console.warn(t));
  }
  function YE(e3) {
    return Oy ? Oy(e3) : [e3, WE];
  }
  function kn(e3) {
    let t = { hasErrorBoundary: e3.hasErrorBoundary || e3.ErrorBoundary != null || e3.errorElement != null };
    return e3.Component && (Vr && e3.element && ke(false, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, { element: H.createElement(e3.Component), Component: void 0 })), e3.HydrateFallback && (Vr && e3.hydrateFallbackElement && ke(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, { hydrateFallbackElement: H.createElement(e3.HydrateFallback), HydrateFallback: void 0 })), e3.ErrorBoundary && (Vr && e3.errorElement && ke(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, { errorElement: H.createElement(e3.ErrorBoundary), ErrorBoundary: void 0 })), t;
  }
  function Ju(e3, t) {
    return za({ basename: t?.basename, getContext: t?.getContext, future: t?.future, history: Vu({ initialEntries: t?.initialEntries, initialIndex: t?.initialIndex }), hydrationData: t?.hydrationData, routes: e3, hydrationRouteProperties: Ua, mapRouteProperties: kn, dataStrategy: t?.dataStrategy, patchRoutesOnNavigation: t?.patchRoutesOnNavigation, instrumentations: t?.instrumentations }).initialize();
  }
  function Cl({ router: e3, flushSync: t, onError: r, useTransitions: n }) {
    n = pp() || n;
    let [i, o] = H.useState(e3.state), [l, s] = YE(i), [u, c] = H.useState(), [d, f] = H.useState({ isTransitioning: false }), [h, v] = H.useState(), [y, m] = H.useState(), [g, p] = H.useState(), w = H.useRef(/* @__PURE__ */ new Map()), b = H.useCallback((x, { deletedFetchers: M, newErrors: P, flushSync: A, viewTransitionOpts: L }) => {
      P && r && Object.values(P).forEach((j) => r(j, { location: x.location, params: x.matches[0]?.params ?? {}, pattern: mn(x.matches) })), x.fetchers.forEach((j, ne) => {
        j.data !== void 0 && w.current.set(ne, j.data);
      }), M.forEach((j) => w.current.delete(j)), Bi(A === false || t != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
      let B = e3.window != null && e3.window.document != null && typeof e3.window.document.startViewTransition == "function";
      if (Bi(L == null || B, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !L || !B) {
        t && A ? t(() => o(x)) : n === false ? o(x) : H.startTransition(() => {
          n === true && s((j) => zy(j, x)), o(x);
        });
        return;
      }
      if (t && A) {
        t(() => {
          y && (h?.resolve(), y.skipTransition()), f({ isTransitioning: true, flushSync: true, currentLocation: L.currentLocation, nextLocation: L.nextLocation });
        });
        let j = e3.window.document.startViewTransition(() => {
          t(() => o(x));
        });
        j.finished.finally(() => {
          t(() => {
            v(void 0), m(void 0), c(void 0), f({ isTransitioning: false });
          });
        }), t(() => m(j));
        return;
      }
      y ? (h?.resolve(), y.skipTransition(), p({ state: x, currentLocation: L.currentLocation, nextLocation: L.nextLocation })) : (c(x), f({ isTransitioning: true, flushSync: false, currentLocation: L.currentLocation, nextLocation: L.nextLocation }));
    }, [e3.window, t, y, h, n, s, r]);
    H.useLayoutEffect(() => e3.subscribe(b), [e3, b]), H.useEffect(() => {
      d.isTransitioning && !d.flushSync && v(new qE());
    }, [d]), H.useEffect(() => {
      if (h && u && e3.window) {
        let x = u, M = h.promise, P = e3.window.document.startViewTransition(async () => {
          n === false ? o(x) : H.startTransition(() => {
            n === true && s((A) => zy(A, x)), o(x);
          }), await M;
        });
        P.finished.finally(() => {
          v(void 0), m(void 0), c(void 0), f({ isTransitioning: false });
        }), m(P);
      }
    }, [u, h, e3.window, n, s]), H.useEffect(() => {
      h && u && l.location.key === u.location.key && h.resolve();
    }, [h, y, l.location, u]), H.useEffect(() => {
      !d.isTransitioning && g && (c(g.state), f({ isTransitioning: true, flushSync: false, currentLocation: g.currentLocation, nextLocation: g.nextLocation }), p(void 0));
    }, [d.isTransitioning, g]);
    let E = H.useMemo(() => ({ createHref: e3.createHref, createURL: e3.createURL, encodeLocation: e3.encodeLocation, go: (x) => e3.navigate(x), push: (x, M, P) => e3.navigate(x, { state: M, preventScrollReset: P?.preventScrollReset }), replace: (x, M, P) => e3.navigate(x, { replace: true, state: M, preventScrollReset: P?.preventScrollReset }) }), [e3]), S = e3.basename || "/", R = H.useMemo(() => ({ router: e3, navigator: E, static: false, basename: S, onError: r }), [e3, E, S, r]);
    return H.createElement(H.Fragment, null, H.createElement(Mr.Provider, { value: R }, H.createElement(Wr.Provider, { value: l }, H.createElement(Gi.Provider, { value: w.current }, H.createElement(qi.Provider, { value: d }, H.createElement(En, { basename: S, location: l.location, navigationType: l.historyAction, navigator: E, useTransitions: n }, H.createElement(GE, { routes: e3.routes, manifest: e3.manifest, future: e3.future, state: l, isStatic: false, onError: r })))))), null);
  }
  function zy(e3, t) {
    return { ...e3, navigation: t.navigation.state !== "idle" ? t.navigation : e3.navigation, revalidation: t.revalidation !== "idle" ? t.revalidation : e3.revalidation, actionData: t.navigation.state !== "submitting" ? t.actionData : e3.actionData, fetchers: t.fetchers };
  }
  function Yw({ routes: e3, manifest: t, future: r, state: n, isStatic: a, onError: i }) {
    return Ow(e3, void 0, { manifest: t, state: n, isStatic: a, onError: i, future: r });
  }
  function ec({ basename: e3, children: t, initialEntries: r, initialIndex: n, useTransitions: a }) {
    let i = H.useRef();
    i.current == null && (i.current = Vu({ initialEntries: r, initialIndex: n, v5Compat: true }));
    let o = i.current, [l, s] = H.useState({ action: o.action, location: o.location }), u = H.useCallback((c) => {
      a === false ? s(c) : H.startTransition(() => s(c));
    }, [a]);
    return H.useLayoutEffect(() => o.listen(u), [o, u]), H.createElement(En, { basename: e3, children: t, location: l.location, navigationType: l.action, navigator: o, useTransitions: a });
  }
  function qw({ to: e3, replace: t, state: r, relative: n }) {
    q(xn(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: a, navigator: i } = H.useContext(ht);
    ke(!a, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: o } = H.useContext(Ot), { pathname: l } = qe(), s = bn(), u = yl(e3, Gu(o), l, n === "path");
    Fa(typeof e3 == "string" ? e3 : je(e3), i.createHref(u), sp(i), "reject");
    let c = JSON.stringify(u);
    return H.useEffect(() => {
      s(JSON.parse(c), { replace: t, state: r, relative: n });
    }, [s, c, n, t, r]), null;
  }
  function tc(e3) {
    return vp(e3.context);
  }
  function Dl(e3) {
    q(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function En({ basename: e3 = "/", children: t = null, location: r, navigationType: n = "POP", navigator: a, static: i = false, useTransitions: o }) {
    q(!xn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let l = e3.replace(/^\/*/, "/"), s = H.useMemo(() => ({ basename: l, navigator: a, static: i, useTransitions: o, future: {} }), [l, a, i, o]);
    typeof r == "string" && (r = St(r));
    let { pathname: u = "/", search: c = "", hash: d = "", state: f = null, key: h = "default", mask: v } = r, y = H.useMemo(() => {
      let m = Qe(u, l);
      return m == null ? null : { location: { pathname: m, search: c, hash: d, state: f, key: h, mask: v }, navigationType: n };
    }, [l, u, c, d, f, h, n, v]);
    return ke(y != null, `<Router basename="${l}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`), y == null ? null : H.createElement(ht.Provider, { value: s }, H.createElement(na.Provider, { children: t, value: y }));
  }
  function rc({ children: e3, location: t }) {
    return yp(Vi(e3), t);
  }
  function Gw({ children: e3, errorElement: t, resolve: r }) {
    let n = H.useContext(Mr), a = H.useContext(Wr), i = H.useCallback((o, l) => {
      n && n.onError && a && n.onError(o, { location: a.location, params: a.matches[0]?.params || {}, pattern: mn(a.matches), errorInfo: l });
    }, [n, a]);
    return H.createElement(KE, { resolve: r, errorElement: t, onError: i }, H.createElement(QE, null, e3));
  }
  function QE({ children: e3 }) {
    let t = kp(), r = typeof e3 == "function" ? e3(t) : e3;
    return H.createElement(H.Fragment, null, r);
  }
  function Vi(e3, t = []) {
    let r = [];
    return H.Children.forEach(e3, (n, a) => {
      if (!H.isValidElement(n)) return;
      let i = [...t, a];
      if (n.type === H.Fragment) {
        r.push.apply(r, Vi(n.props.children, i));
        return;
      }
      q(n.type === Dl, `[${typeof n.type == "string" ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), q(!n.props.index || !n.props.children, "An index route cannot have child routes.");
      let o = { id: n.props.id || i.join("-"), caseSensitive: n.props.caseSensitive, element: n.props.element, Component: n.props.Component, index: n.props.index, path: n.props.path, middleware: n.props.middleware, loader: n.props.loader, action: n.props.action, hydrateFallbackElement: n.props.hydrateFallbackElement, HydrateFallback: n.props.HydrateFallback, errorElement: n.props.errorElement, ErrorBoundary: n.props.ErrorBoundary, hasErrorBoundary: n.props.hasErrorBoundary === true || n.props.ErrorBoundary != null || n.props.errorElement != null, shouldRevalidate: n.props.shouldRevalidate, handle: n.props.handle, lazy: n.props.lazy };
      n.props.children && (o.children = Vi(n.props.children, i)), r.push(o);
    }), r;
  }
  function Qw(e3) {
    return Iw(e3);
  }
  function Xw() {
    return { params: kl(), loaderData: Rl(), actionData: Sl(), matches: El() };
  }
  function Zw({ children: e3 }) {
    let t = Xw();
    return H.cloneElement(e3, t);
  }
  function nc(e3) {
    return function() {
      let r = Xw();
      return H.createElement(e3, r);
    };
  }
  function Jw() {
    return { params: kl(), loaderData: Rl(), actionData: Sl() };
  }
  function e2({ children: e3 }) {
    let t = Jw();
    return H.cloneElement(e3, t);
  }
  function ac(e3) {
    return function() {
      let r = Jw();
      return H.createElement(e3, r);
    };
  }
  function t2() {
    return { params: kl(), loaderData: Rl(), actionData: Sl(), error: ja() };
  }
  function r2({ children: e3 }) {
    let t = t2();
    return H.cloneElement(e3, t);
  }
  function ic(e3) {
    return function() {
      let r = t2();
      return H.createElement(e3, r);
    };
  }
  function oc(e3) {
    return typeof HTMLElement < "u" && e3 instanceof HTMLElement;
  }
  function XE(e3) {
    return oc(e3) && e3.tagName.toLowerCase() === "button";
  }
  function ZE(e3) {
    return oc(e3) && e3.tagName.toLowerCase() === "form";
  }
  function JE(e3) {
    return oc(e3) && e3.tagName.toLowerCase() === "input";
  }
  function eR(e3) {
    return !!(e3.metaKey || e3.altKey || e3.ctrlKey || e3.shiftKey);
  }
  function tR(e3, t) {
    return e3.button === 0 && (!t || t === "_self") && !eR(e3);
  }
  function pl(e3 = "") {
    return new URLSearchParams(typeof e3 == "string" || Array.isArray(e3) || e3 instanceof URLSearchParams ? e3 : Object.keys(e3).reduce((t, r) => {
      let n = e3[r];
      return t.concat(Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]);
    }, []));
  }
  function rR(e3, t) {
    let r = pl(e3);
    return t && t.forEach((n, a) => {
      r.has(a) || t.getAll(a).forEach((i) => {
        r.append(a, i);
      });
    }), r;
  }
  function nR() {
    if (Lu === null) try {
      new FormData(document.createElement("form"), 0), Lu = false;
    } catch {
      Lu = true;
    }
    return Lu;
  }
  function Ih(e3) {
    return e3 != null && !aR.has(e3) ? (ke(false, `"${e3}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$u}"`), null) : e3;
  }
  function iR(e3, t) {
    let r, n, a, i, o;
    if (ZE(e3)) {
      let l = e3.getAttribute("action");
      n = l ? Qe(l, t) : null, r = e3.getAttribute("method") || Fu, a = Ih(e3.getAttribute("enctype")) || $u, i = new FormData(e3);
    } else if (XE(e3) || JE(e3) && (e3.type === "submit" || e3.type === "image")) {
      let l = e3.form;
      if (l == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let s = e3.getAttribute("formaction") || l.getAttribute("action");
      if (n = s ? Qe(s, t) : null, r = e3.getAttribute("formmethod") || l.getAttribute("method") || Fu, a = Ih(e3.getAttribute("formenctype")) || Ih(l.getAttribute("enctype")) || $u, i = new FormData(l, e3), !nR()) {
        let { name: u, type: c, value: d } = e3;
        if (c === "image") {
          let f = u ? `${u}.` : "";
          i.append(`${f}x`, "0"), i.append(`${f}y`, "0");
        } else u && i.append(u, d);
      }
    } else {
      if (oc(e3)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      r = Fu, n = null, a = $u, o = e3;
    }
    return i && a === "text/plain" && (o = i, i = void 0), { action: n, method: r.toLowerCase(), encType: a, formData: i, body: o };
  }
  function oR() {
    let e3 = new TextDecoder(), t = "";
    return new TransformStream({ transform(r, n) {
      let a = e3.decode(r, { stream: true }), i = (t + a).split(`
`);
      t = i.pop() || "";
      for (let o of i) n.enqueue(o);
    }, flush(r) {
      t && r.enqueue(t);
    } });
  }
  async function Uh(e3) {
    let { indices: t } = this, r = t.get(e3);
    if (r) return [r];
    if (e3 === void 0) return Np;
    if (e3 === null) return Uu;
    if (Number.isNaN(e3)) return Rp;
    if (e3 === Number.POSITIVE_INFINITY) return Dp;
    if (e3 === Number.NEGATIVE_INFINITY) return Sp;
    if (e3 === 0 && 1 / e3 < 0) return Cp;
    let n = this.index++;
    t.set(e3, n);
    let a = [[e3, n]];
    return await uR.call(this, a), n;
  }
  async function uR(e3) {
    let { deferred: t, indices: r, plugins: n, postPlugins: a } = this, i = this.stringified, o = jh(), l = (u) => {
      let c = r.get(u);
      if (c) return [c];
      if (u === void 0) return Np;
      if (u === null) return Uu;
      if (Number.isNaN(u)) return Rp;
      if (u === Number.POSITIVE_INFINITY) return Dp;
      if (u === Number.NEGATIVE_INFINITY) return Sp;
      if (u === 0 && 1 / u < 0) return Cp;
      let d = this.index++;
      return r.set(u, d), e3.push([u, d]), d;
    }, s = 0;
    for (; e3.length > 0; ) {
      let u = jh();
      ++s % 6e3 === 0 && u - o >= lR && (await sR(), o = jh());
      let [c, d] = e3.pop(), f = (v) => Object.keys(v).map((y) => `"_${l(y)}":${l(v[y])}`).join(","), h = null;
      switch (typeof c) {
        case "boolean":
        case "number":
        case "string":
          i[d] = JSON.stringify(c);
          break;
        case "bigint":
          i[d] = `["${a2}","${c}"]`;
          break;
        case "symbol": {
          let v = Symbol.keyFor(c);
          v ? i[d] = `["${s2}",${JSON.stringify(v)}]` : h = new Error("Cannot encode symbol unless created with Symbol.for()");
          break;
        }
        case "object": {
          if (!c) {
            i[d] = `${Uu}`;
            break;
          }
          let v = Array.isArray(c), y = false;
          if (!v && n) for (let m of n) {
            let g = m(c);
            if (Array.isArray(g)) {
              y = true;
              let [p, ...w] = g;
              i[d] = `[${JSON.stringify(p)}`, w.length > 0 && (i[d] += `,${w.map((b) => l(b)).join(",")}`), i[d] += "]";
              break;
            }
          }
          if (!y) {
            let m = v ? "[" : "{";
            if (v) {
              for (let g = 0; g < c.length; g++) m += (g ? "," : "") + (g in c ? l(c[g]) : n2);
              i[d] = `${m}]`;
            } else if (c instanceof Date) {
              let g = c.getTime();
              i[d] = `["${i2}",${Number.isNaN(g) ? JSON.stringify("invalid") : g}]`;
            } else c instanceof URL ? i[d] = `["${u2}",${JSON.stringify(c.href)}]` : c instanceof RegExp ? i[d] = `["${l2}",${JSON.stringify(c.source)},${JSON.stringify(c.flags)}]` : c instanceof Set ? c.size > 0 ? i[d] = `["${Kh}",${[...c].map((g) => l(g)).join(",")}]` : i[d] = `["${Kh}"]` : c instanceof Map ? c.size > 0 ? i[d] = `["${Gh}",${[...c].flatMap(([g, p]) => [l(g), l(p)]).join(",")}]` : i[d] = `["${Gh}"]` : c instanceof Promise ? (i[d] = `["${Ii}",${d}]`, t[d] = c) : c instanceof Error ? (i[d] = `["${zi}",${JSON.stringify(c.message)}`, c.name !== "Error" && (i[d] += `,${JSON.stringify(c.name)}`), i[d] += "]") : Object.getPrototypeOf(c) === null ? i[d] = `["${o2}",{${f(c)}}]` : dR(c) ? i[d] = `{${f(c)}}` : h = new Error("Cannot encode object with prototype");
          }
          break;
        }
        default: {
          let v = Array.isArray(c), y = false;
          if (!v && n) for (let m of n) {
            let g = m(c);
            if (Array.isArray(g)) {
              y = true;
              let [p, ...w] = g;
              i[d] = `[${JSON.stringify(p)}`, w.length > 0 && (i[d] += `,${w.map((b) => l(b)).join(",")}`), i[d] += "]";
              break;
            }
          }
          y || (h = new Error("Cannot encode function or unexpected type"));
        }
      }
      if (h) {
        let v = false;
        if (a) for (let y of a) {
          let m = y(c);
          if (Array.isArray(m)) {
            v = true;
            let [g, ...p] = m;
            i[d] = `[${JSON.stringify(g)}`, p.length > 0 && (i[d] += `,${p.map((w) => l(w)).join(",")}`), i[d] += "]";
            break;
          }
        }
        if (!v) throw h;
      }
    }
  }
  function dR(e3) {
    let t = Object.getPrototypeOf(e3);
    return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === cR;
  }
  function Xh(e3) {
    let { hydrated: t, values: r } = this;
    if (typeof e3 == "number") return Iy.call(this, e3);
    if (!Array.isArray(e3) || !e3.length) throw new SyntaxError();
    let n = r.length;
    for (let a of e3) r.push(a);
    return t.length = r.length, Iy.call(this, n);
  }
  function Iy(e3) {
    let { hydrated: t, values: r, deferred: n, plugins: a } = this, i, o = [[e3, (s) => {
      i = s;
    }]], l = [];
    for (; o.length > 0; ) {
      let [s, u] = o.pop();
      switch (s) {
        case Np:
          u(void 0);
          continue;
        case Uu:
          u(null);
          continue;
        case Rp:
          u(NaN);
          continue;
        case Dp:
          u(1 / 0);
          continue;
        case Sp:
          u(-1 / 0);
          continue;
        case Cp:
          u(-0);
          continue;
      }
      if (t[s]) {
        u(t[s]);
        continue;
      }
      let c = r[s];
      if (!c || typeof c != "object") {
        t[s] = c, u(c);
        continue;
      }
      if (Array.isArray(c)) if (typeof c[0] == "string") {
        let [d, f, h] = c;
        switch (d) {
          case i2:
            u(t[s] = new Date(f));
            continue;
          case u2:
            u(t[s] = new URL(f));
            continue;
          case a2:
            u(t[s] = BigInt(f));
            continue;
          case l2:
            u(t[s] = new RegExp(f, h));
            continue;
          case s2:
            u(t[s] = Symbol.for(f));
            continue;
          case Kh:
            let v = /* @__PURE__ */ new Set();
            t[s] = v;
            for (let b = c.length - 1; b > 0; b--) o.push([c[b], (E) => {
              v.add(E);
            }]);
            u(v);
            continue;
          case Gh:
            let y = /* @__PURE__ */ new Map();
            t[s] = y;
            for (let b = c.length - 2; b > 0; b -= 2) {
              let E = [];
              o.push([c[b + 1], (S) => {
                E[1] = S;
              }]), o.push([c[b], (S) => {
                E[0] = S;
              }]), l.push(() => {
                y.set(E[0], E[1]);
              });
            }
            u(y);
            continue;
          case o2:
            let m = /* @__PURE__ */ Object.create(null);
            t[s] = m;
            for (let b of Object.keys(f).reverse()) {
              let E = [];
              o.push([f[b], (S) => {
                E[1] = S;
              }]), o.push([Number(b.slice(1)), (S) => {
                E[0] = S;
              }]), l.push(() => {
                m[E[0]] = E[1];
              });
            }
            u(m);
            continue;
          case Ii:
            if (t[f]) u(t[s] = t[f]);
            else {
              let b = new c2();
              n[f] = b, u(t[s] = b.promise);
            }
            continue;
          case zi:
            let [, g, p] = c, w = p && Pu && lp.includes(p) && p in Pu && typeof Pu[p] == "function" ? new Pu[p](g) : new Error(g);
            t[s] = w, u(w);
            continue;
          case Qh:
            u(t[s] = t[f]);
            continue;
          default:
            if (Array.isArray(a)) {
              let b = [], E = c.slice(1);
              for (let S = 0; S < E.length; S++) {
                let R = E[S];
                o.push([R, (x) => {
                  b[S] = x;
                }]);
              }
              l.push(() => {
                for (let S of a) {
                  let R = S(c[0], ...b);
                  if (R) {
                    u(t[s] = R.value);
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        let d = [];
        t[s] = d;
        for (let f = 0; f < c.length; f++) {
          let h = c[f];
          h !== n2 && o.push([h, (v) => {
            d[f] = v;
          }]);
        }
        u(d);
        continue;
      }
      else {
        let d = {};
        t[s] = d;
        for (let f of Object.keys(c).reverse()) {
          let h = [];
          o.push([c[f], (v) => {
            h[1] = v;
          }]), o.push([Number(f.slice(1)), (v) => {
            h[0] = v;
          }]), l.push(() => {
            d[h[0]] = h[1];
          });
        }
        u(d);
        continue;
      }
    }
    for (; l.length > 0; ) l.pop()();
    return i;
  }
  async function fR(e3, t) {
    let { plugins: r } = t ?? {}, n = new c2(), a = e3.pipeThrough(oR()).getReader(), i = { values: [], hydrated: [], deferred: {}, plugins: r }, o = await hR.call(i, a), l = n.promise;
    return o.done ? n.resolve() : l = pR.call(i, a).then(n.resolve).catch((s) => {
      for (let u of Object.values(i.deferred)) u.reject(s);
      n.reject(s);
    }), { done: l.then(() => a.closed), value: o.value };
  }
  async function hR(e3) {
    let t = await e3.read();
    if (!t.value) throw new SyntaxError();
    let r;
    try {
      r = JSON.parse(t.value);
    } catch {
      throw new SyntaxError();
    }
    return { done: t.done, value: Xh.call(this, r) };
  }
  async function pR(e3) {
    let t = await e3.read();
    for (; !t.done; ) {
      if (!t.value) continue;
      let r = t.value;
      switch (r[0]) {
        case Ii: {
          let n = r.indexOf(":"), a = Number(r.slice(1, n)), i = this.deferred[a];
          if (!i) throw new Error(`Deferred ID ${a} not found in stream`);
          let o = r.slice(n + 1), l;
          try {
            l = JSON.parse(o);
          } catch {
            throw new SyntaxError();
          }
          let s = Xh.call(this, l);
          i.resolve(s);
          break;
        }
        case zi: {
          let n = r.indexOf(":"), a = Number(r.slice(1, n)), i = this.deferred[a];
          if (!i) throw new Error(`Deferred ID ${a} not found in stream`);
          let o = r.slice(n + 1), l;
          try {
            l = JSON.parse(o);
          } catch {
            throw new SyntaxError();
          }
          let s = Xh.call(this, l);
          i.reject(s);
          break;
        }
        default:
          throw new SyntaxError();
      }
      t = await e3.read();
    }
  }
  function d2(e3, t) {
    let { onComplete: r, plugins: n, postPlugins: a, signal: i } = t ?? {}, o = { deferred: {}, index: 0, indices: /* @__PURE__ */ new Map(), stringified: [], plugins: n, postPlugins: a, signal: i }, l = new TextEncoder(), s = 0;
    return new ReadableStream({ async start(c) {
      let d = await Uh.call(o, e3);
      if (Array.isArray(d)) throw new Error("This should never happen");
      d < 0 ? c.enqueue(l.encode(`${d}
`)) : (c.enqueue(l.encode(`[${o.stringified.join(",")}]
`)), s = o.stringified.length - 1);
      let f = /* @__PURE__ */ new WeakSet(), h = Promise.resolve();
      if (Object.keys(o.deferred).length) {
        let v, y = new Promise((m, g) => {
          if (v = m, i) {
            let p = () => g(i.reason || new Error("Signal was aborted."));
            i.aborted ? p() : i.addEventListener("abort", (w) => {
              p();
            });
          }
        });
        for (; Object.keys(o.deferred).length > 0; ) {
          for (let [m, g] of Object.entries(o.deferred)) f.has(g) || f.add(o.deferred[Number(m)] = Promise.race([y, g]).then((p) => (h = h.then(async () => {
            let w = await Uh.call(o, p);
            if (Array.isArray(w)) c.enqueue(l.encode(`${Ii}${m}:[["${Qh}",${w[0]}]]
`)), o.index++, s++;
            else if (w < 0) c.enqueue(l.encode(`${Ii}${m}:${w}
`));
            else {
              let b = o.stringified.slice(s + 1).join(",");
              c.enqueue(l.encode(`${Ii}${m}:[${b}]
`)), s = o.stringified.length - 1;
            }
          }), h), (p) => (h = h.then(async () => {
            (!p || typeof p != "object" || !(p instanceof Error)) && (p = new Error("An unknown error occurred"));
            let w = await Uh.call(o, p);
            if (Array.isArray(w)) c.enqueue(l.encode(`${zi}${m}:[["${Qh}",${w[0]}]]
`)), o.index++, s++;
            else if (w < 0) c.enqueue(l.encode(`${zi}${m}:${w}
`));
            else {
              let b = o.stringified.slice(s + 1).join(",");
              c.enqueue(l.encode(`${zi}${m}:[${b}]
`)), s = o.stringified.length - 1;
            }
          }), h)).finally(() => {
            delete o.deferred[Number(m)];
          }));
          await Promise.race(Object.values(o.deferred));
        }
        v();
      }
      await Promise.all(Object.values(o.deferred)), await h, c.close(), r?.();
    } });
  }
  async function f2(e3) {
    let t = { signal: e3.signal };
    if (e3.method !== "GET") {
      t.method = e3.method;
      let r = e3.headers.get("Content-Type");
      r && /\bapplication\/json\b/.test(r) ? (t.headers = { "Content-Type": r }, t.body = JSON.stringify(await e3.json())) : r && /\btext\/plain\b/.test(r) ? (t.headers = { "Content-Type": r }, t.body = await e3.text()) : r && /\bapplication\/x-www-form-urlencoded\b/.test(r) ? t.body = new URLSearchParams(await e3.text()) : t.body = await e3.formData();
    }
    return t;
  }
  function wn(e3) {
    return e3.replace(gR, (t) => mR[t]);
  }
  function Rt(e3, t) {
    if (e3 === false || e3 === null || typeof e3 > "u") throw new Error(t);
  }
  function Lp({ context: e3, identifier: t, reader: r, textDecoder: n, nonce: a }) {
    if (!e3.renderMeta || !e3.renderMeta.didRenderScripts) return null;
    e3.renderMeta.streamCache || (e3.renderMeta.streamCache = {});
    let { streamCache: i } = e3.renderMeta, o = i[t];
    if (o || (o = i[t] = r.read().then((c) => {
      i[t].result = { done: c.done, value: n.decode(c.value, { stream: true }) };
    }).catch((c) => {
      i[t].error = c;
    })), o.error) throw o.error;
    if (o.result === void 0) throw o;
    let { done: l, value: s } = o.result, u = s ? hr.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: `window.__reactRouterContext.streamController.enqueue(${wn(JSON.stringify(s))});` } }) : null;
    return l ? hr.createElement(hr.Fragment, null, u, hr.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: "window.__reactRouterContext.streamController.close();" } })) : hr.createElement(hr.Fragment, null, u, hr.createElement(hr.Suspense, null, hr.createElement(Lp, { context: e3, identifier: t + 1, reader: r, textDecoder: n, nonce: a })));
  }
  function sc(e3, t, r, n, a, i) {
    let o = p2(e3, (l) => {
      let s = t.routes[l.route.id];
      return Rt(s, "Route not found in manifest"), { hasLoader: s.hasLoader, hasClientLoader: s.hasClientLoader };
    }, kR, n, a, i);
    return async (l) => l.runClientMiddleware(o);
  }
  function p2(e3, t, r, n, a, i, o = () => true) {
    return async (l) => {
      let { request: s, matches: u, fetcherKey: c } = l, d = e3();
      if (s.method !== "GET") return vR(l, r, a, i);
      let f = u.some((h) => {
        let { hasLoader: v, hasClientLoader: y } = t(h);
        return h.shouldCallHandler() && v && !y;
      });
      return !n && !f ? yR(l, t, r, a, i) : c ? bR(l, r, a, i) : wR(l, d, t, r, n, a, i, o);
    };
  }
  async function vR(e3, t, r, n) {
    let a = e3.matches.find((l) => l.shouldCallHandler());
    Rt(a, "No action match found");
    let i, o = await a.resolve(async (l) => await l(async () => {
      let { data: u, status: c } = await t(e3, r, n, [a.route.id]);
      return i = c, ml(u, a.route.id);
    }));
    return Ae(o.result) || Ue(o.result) || gn(o.result) ? { [a.route.id]: o } : { [a.route.id]: { type: o.type, result: op(o.result, i) } };
  }
  async function yR(e3, t, r, n, a) {
    let i = e3.matches.filter((l) => l.shouldCallHandler()), o = {};
    return await Promise.all(i.map((l) => l.resolve(async (s) => {
      try {
        let { hasClientLoader: u } = t(l), c = l.route.id, d = u ? await s(async () => {
          let { data: f } = await r(e3, n, a, [c]);
          return ml(f, c);
        }) : await s();
        o[l.route.id] = { type: "data", result: d };
      } catch (u) {
        o[l.route.id] = { type: "error", result: u };
      }
    }))), o;
  }
  async function wR(e3, t, r, n, a, i, o, l = () => true) {
    let s = /* @__PURE__ */ new Set(), u = false, c = e3.matches.map(() => jy()), d = jy(), f = {}, h = Promise.all(e3.matches.map(async (y, m) => y.resolve(async (g) => {
      c[m].resolve();
      let p = y.route.id, { hasLoader: w, hasClientLoader: b } = r(y), E = !y.shouldRevalidateArgs || y.shouldRevalidateArgs.actionStatus == null || y.shouldRevalidateArgs.actionStatus < 400;
      if (!y.shouldCallHandler(E)) {
        u || (u = y.shouldRevalidateArgs != null && w);
        return;
      }
      if (l(y) && b) {
        w && (u = true);
        try {
          let R = await g(async () => {
            let { data: x } = await n(e3, i, o, [p]);
            return ml(x, p);
          });
          f[p] = { type: "data", result: R };
        } catch (R) {
          f[p] = { type: "error", result: R };
        }
        return;
      }
      w && s.add(p);
      try {
        let R = await g(async () => {
          let x = await d.promise;
          return ml(x, p);
        });
        f[p] = { type: "data", result: R };
      } catch (R) {
        f[p] = { type: "error", result: R };
      }
    })));
    if (await Promise.all(c.map((y) => y.promise)), (!t.state.initialized && t.state.navigation.state === "idle" || s.size === 0) && !window.__reactRouterHdrActive) d.resolve({ routes: {} });
    else {
      let y = a && u && s.size > 0 ? [...s.keys()] : void 0;
      try {
        let m = await n(e3, i, o, y);
        d.resolve(m.data);
      } catch (m) {
        d.reject(m);
      }
    }
    return await h, await xR(d.promise, e3.matches, s, f), f;
  }
  async function xR(e3, t, r, n) {
    try {
      let a, i = await e3;
      if ("routes" in i) {
        for (let o of t) if (o.route.id in i.routes) {
          let l = i.routes[o.route.id];
          if ("error" in l) {
            a = l.error, n[o.route.id]?.result == null && (n[o.route.id] = { type: "error", result: a });
            break;
          }
        }
      }
      a !== void 0 && Array.from(r.values()).forEach((o) => {
        n[o].result instanceof h2 && (n[o].result = a);
      });
    } catch {
    }
  }
  async function bR(e3, t, r, n) {
    let a = e3.matches.find((l) => l.shouldCallHandler());
    Rt(a, "No fetcher match found");
    let i = a.route.id, o = await a.resolve(async (l) => l(async () => {
      let { data: s } = await t(e3, r, n, [i]);
      return ml(s, i);
    }));
    return { [a.route.id]: o };
  }
  function m2(e3) {
    let t = e3.searchParams.getAll("index");
    e3.searchParams.delete("index");
    let r = [];
    for (let n of t) n && r.push(n);
    for (let n of r) e3.searchParams.append("index", n);
    return e3;
  }
  function uc(e3, t, r, n) {
    let a = typeof e3 == "string" ? new URL(e3, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e3;
    return r ? a.pathname.endsWith("/") ? a.pathname = `${a.pathname}_.${n}` : a.pathname = `${a.pathname}.${n}` : a.pathname === "/" ? a.pathname = `_root.${n}` : t && Qe(a.pathname, t) === "/" ? a.pathname = `${ji(t)}/_root.${n}` : a.pathname = `${ji(a.pathname)}.${n}`, a;
  }
  async function kR(e3, t, r, n) {
    let { request: a } = e3, i = uc(a.url, t, r, "data");
    a.method === "GET" && (i = m2(i), n && i.searchParams.set("_routes", n.join(",")));
    let o = await fetch(i, await f2(a));
    if (o.status >= 400 && !o.headers.has("X-Remix-Response")) throw new it(o.status, o.statusText, await o.text());
    if (o.status === 204 && o.headers.has("X-Remix-Redirect")) return { status: lc, data: { redirect: { redirect: o.headers.get("X-Remix-Redirect"), status: Number(o.headers.get("X-Remix-Status") || "302"), revalidate: o.headers.get("X-Remix-Revalidate") === "true", reload: o.headers.get("X-Remix-Reload-Document") === "true", replace: o.headers.get("X-Remix-Replace") === "true" } } };
    if (Mp.has(o.status)) {
      let l = {};
      return n && a.method !== "GET" && (l[n[0]] = { data: void 0 }), { status: o.status, data: { routes: l } };
    }
    Rt(o.body, "No response body to decode");
    try {
      let l = await Ha(o.body, window), s;
      if (a.method === "GET") {
        let u = l.value;
        Nr in u ? s = { redirect: u[Nr] } : s = { routes: u };
      } else {
        let u = l.value, c = n?.[0];
        Rt(c, "No routeId found for single fetch call decoding"), "redirect" in u ? s = { redirect: u } : s = { routes: { [c]: u } };
      }
      return { status: o.status, data: s };
    } catch {
      throw new Error("Unable to decode turbo-stream response");
    }
  }
  function Ha(e3, t) {
    return fR(e3, { plugins: [(r, ...n) => {
      if (r === "SanitizedError") {
        let [a, i, o] = n, l = Error;
        a && lp.includes(a) && a in t && typeof t[a] == "function" && (l = t[a]);
        let s = new l(i);
        return s.stack = o, { value: s };
      }
      if (r === "ErrorResponse") {
        let [a, i, o] = n;
        return { value: new it(i, o, a) };
      }
      if (r === "SingleFetchRedirect") return { value: { [Nr]: n[0] } };
      if (r === "SingleFetchClassInstance") return { value: n[0] };
      if (r === "SingleFetchFallback") return { value: void 0 };
    }] });
  }
  function ml(e3, t) {
    if ("redirect" in e3) {
      let { redirect: n, revalidate: a, reload: i, replace: o, status: l } = e3.redirect;
      throw Oa(n, { status: l, headers: { ...a ? { "X-Remix-Revalidate": "yes" } : null, ...i ? { "X-Remix-Reload-Document": "yes" } : null, ...o ? { "X-Remix-Replace": "yes" } : null } });
    }
    let r = e3.routes[t];
    if (r == null) throw new h2(`No result found for routeId "${t}"`);
    if ("error" in r) throw r.error;
    if ("data" in r) return r.data;
    throw new Error(`Invalid response found for routeId "${t}"`);
  }
  function jy() {
    let e3, t, r = new Promise((n, a) => {
      e3 = async (i) => {
        n(i);
        try {
          await r;
        } catch {
        }
      }, t = async (i) => {
        a(i);
        try {
          await r;
        } catch {
        }
      };
    });
    return { promise: r, resolve: e3, reject: t };
  }
  async function g2(e3, t) {
    if (e3.id in t) return t[e3.id];
    try {
      let r = await import(e3.module);
      return t[e3.id] = r, r;
    } catch (r) {
      if (console.error(`Error loading route module \`${e3.module}\`, reloading page...`), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode && import_meta.hot) throw r;
      return window.location.reload(), new Promise(() => {
      });
    }
  }
  function ER(e3, t, r) {
    let n = e3.map((i) => {
      let o = t[i.route.id], l = r.routes[i.route.id];
      return [l && l.css ? l.css.map((s) => ({ rel: "stylesheet", href: s })) : [], o?.links?.() || []];
    }).flat(2), a = _p(e3, r);
    return x2(n, a);
  }
  function v2(e3) {
    return e3.css ? e3.css.map((t) => ({ rel: "stylesheet", href: t })) : [];
  }
  async function RR(e3) {
    if (!e3.css) return;
    let t = v2(e3);
    await Promise.all(t.map(w2));
  }
  async function y2(e3, t) {
    if (!e3.css && !t.links || !MR()) return;
    let r = [];
    if (e3.css && r.push(...v2(e3)), t.links && r.push(...t.links()), r.length === 0) return;
    let n = [];
    for (let a of r) !Pp(a) && a.rel === "stylesheet" && n.push({ ...a, rel: "preload", as: "style" });
    await Promise.all(n.map(w2));
  }
  async function w2(e3) {
    return new Promise((t) => {
      if (e3.media && !window.matchMedia(e3.media).matches || document.querySelector(`link[rel="stylesheet"][href="${e3.href}"]`)) return t();
      let r = document.createElement("link");
      Object.assign(r, e3);
      function n() {
        document.head.contains(r) && document.head.removeChild(r);
      }
      r.onload = () => {
        n(), t();
      }, r.onerror = () => {
        n(), t();
      }, document.head.appendChild(r);
    });
  }
  function Pp(e3) {
    return e3 != null && typeof e3.page == "string";
  }
  function SR(e3) {
    return e3 == null ? false : e3.href == null ? e3.rel === "preload" && typeof e3.imageSrcSet == "string" && typeof e3.imageSizes == "string" : typeof e3.rel == "string" && typeof e3.href == "string";
  }
  async function CR(e3, t, r) {
    let n = await Promise.all(e3.map(async (a) => {
      let i = t.routes[a.route.id];
      if (i) {
        let o = await g2(i, r);
        return o.links ? o.links() : [];
      }
      return [];
    }));
    return x2(n.flat(1).filter(SR).filter((a) => a.rel === "stylesheet" || a.rel === "preload").map((a) => a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" }));
  }
  function Uy(e3, t, r, n, a, i) {
    let o = (s, u) => r[u] ? s.route.id !== r[u].route.id : true, l = (s, u) => r[u].pathname !== s.pathname || r[u].route.path?.endsWith("*") && r[u].params["*"] !== s.params["*"];
    return i === "assets" ? t.filter((s, u) => o(s, u) || l(s, u)) : i === "data" ? t.filter((s, u) => {
      let c = n.routes[s.route.id];
      if (!c || !c.hasLoader) return false;
      if (o(s, u) || l(s, u)) return true;
      if (s.route.shouldRevalidate) {
        let d = s.route.shouldRevalidate({ currentUrl: new URL(a.pathname + a.search + a.hash, window.origin), currentParams: r[0]?.params || {}, nextUrl: new URL(e3, window.origin), nextParams: s.params, defaultShouldRevalidate: true });
        if (typeof d == "boolean") return d;
      }
      return true;
    }) : [];
  }
  function _p(e3, t, { includeHydrateFallback: r } = {}) {
    return DR(e3.map((n) => {
      let a = t.routes[n.route.id];
      if (!a) return [];
      let i = [a.module];
      return a.clientActionModule && (i = i.concat(a.clientActionModule)), a.clientLoaderModule && (i = i.concat(a.clientLoaderModule)), r && a.hydrateFallbackModule && (i = i.concat(a.hydrateFallbackModule)), a.imports && (i = i.concat(a.imports)), i;
    }).flat(1));
  }
  function DR(e3) {
    return [...new Set(e3)];
  }
  function NR(e3) {
    let t = {}, r = Object.keys(e3).sort();
    for (let n of r) t[n] = e3[n];
    return t;
  }
  function x2(e3, t) {
    let r = /* @__PURE__ */ new Set(), n = new Set(t);
    return e3.reduce((a, i) => {
      if (t && !Pp(i) && i.as === "script" && i.href && n.has(i.href)) return a;
      let l = JSON.stringify(NR(i));
      return r.has(l) || (r.add(l), a.push({ key: l, link: i })), a;
    }, []);
  }
  function MR() {
    if (_u !== void 0) return _u;
    let e3 = document.createElement("link");
    return _u = e3.relList.supports("preload"), e3 = null, _u;
  }
  function LR() {
    let { nonce: e3 } = qr();
    return Zh.createElement(Jh, { title: "Loading...", renderScripts: true }, Vr ? Zh.createElement("script", { nonce: e3, dangerouslySetInnerHTML: { __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            ` } }) : null);
  }
  function Tp(e3) {
    let t = {};
    return Object.values(e3).forEach((r) => {
      if (r) {
        let n = r.parentId || "";
        t[n] || (t[n] = []), t[n].push(r);
      }
    }), t;
  }
  function k2(e3, t, r) {
    let n = E2(t), a = t.HydrateFallback && (!r || e3.id === "root") ? t.HydrateFallback : e3.id === "root" ? LR : void 0, i = t.ErrorBoundary ? t.ErrorBoundary : e3.id === "root" ? () => Jn.createElement(M2, { error: ja() }) : void 0;
    return e3.id === "root" && t.Layout ? { ...n ? { element: Jn.createElement(t.Layout, null, Jn.createElement(n, null)) } : { Component: n }, ...i ? { errorElement: Jn.createElement(t.Layout, null, Jn.createElement(i, null)) } : { ErrorBoundary: i }, ...a ? { hydrateFallbackElement: Jn.createElement(t.Layout, null, Jn.createElement(a, null)) } : { HydrateFallback: a } } : { Component: n, ErrorBoundary: i, HydrateFallback: a };
  }
  function Ap(e3, t, r, n, a = "", i = Tp(e3), o = Promise.resolve({ Component: () => null })) {
    return (i[a] || []).map((l) => {
      let s = t[l.id];
      Rt(s, "No `routeModule` available to create server routes");
      let u = { ...k2(l, s, n), caseSensitive: l.caseSensitive, id: l.id, index: l.index, path: l.path, handle: s.handle, lazy: n ? () => o : void 0, loader: l.hasLoader || l.hasClientLoader ? () => null : void 0 }, c = Ap(e3, t, r, n, l.id, i, o);
      return c.length > 0 && (u.children = c), u;
    });
  }
  function cc(e3, t, r, n, a, i) {
    return Ba(t, r, n, a, i, "", Tp(t), e3);
  }
  function Tu(e3, t) {
    if (e3 === "loader" && !t.hasLoader || e3 === "action" && !t.hasAction) {
      let n = `You are trying to call ${e3 === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${e3} (routeId: "${t.id}")`;
      throw console.error(n), new it(400, "Bad Request", new Error(n), true);
    }
  }
  function Ou(e3, t) {
    let r = e3 === "clientAction" ? "a" : "an", n = `Route "${t}" does not have ${r} ${e3}, but you are trying to submit to it. To fix this, please add ${r} \`${e3}\` function to the route`;
    throw console.error(n), new it(405, "Method Not Allowed", new Error(n), true);
  }
  function Ba(e3, t, r, n, a, i = "", o = Tp(e3), l) {
    return (o[i] || []).map((s) => {
      let u = t[s.id];
      function c(p) {
        return Rt(typeof p == "function", "No single fetch function available for route handler"), p();
      }
      function d(p) {
        return s.hasLoader ? c(p) : Promise.resolve(null);
      }
      function f(p) {
        if (!s.hasAction) throw Ou("action", s.id);
        return c(p);
      }
      function h(p) {
        import(p);
      }
      function v(p) {
        p.clientActionModule && h(p.clientActionModule), p.clientLoaderModule && h(p.clientLoaderModule);
      }
      async function y(p) {
        let w = t[s.id], b = w ? y2(s, w) : Promise.resolve();
        try {
          return p();
        } finally {
          await b;
        }
      }
      let m = { id: s.id, index: s.index, path: s.path };
      if (u) {
        Object.assign(m, { ...m, ...k2(s, u, a), middleware: u.clientMiddleware, handle: u.handle, shouldRevalidate: Hy(m.path, u, s, n, l) });
        let p = r && r.loaderData && s.id in r.loaderData, w = p ? r?.loaderData?.[s.id] : void 0, b = r && r.errors && s.id in r.errors, E = b ? r?.errors?.[s.id] : void 0, S = l == null && (u.clientLoader?.hydrate === true || !s.hasLoader);
        m.loader = async ({ request: R, params: x, context: M, pattern: P, url: A }, L) => {
          let B = S;
          return S = false, await y(async () => (Rt(u, "No `routeModule` available for critical-route loader"), u.clientLoader ? u.clientLoader({ request: R, params: x, context: M, pattern: P, url: A, async serverLoader() {
            if (Tu("loader", s), B) {
              if (p) return w;
              if (b) throw E;
            }
            return d(L);
          } }) : d(L)));
        }, m.loader.hydrate = aa(s.id, u.clientLoader, s.hasLoader, a), m.action = ({ request: R, params: x, context: M, pattern: P, url: A }, L) => y(async () => {
          if (Rt(u, "No `routeModule` available for critical-route action"), !u.clientAction) {
            if (a) throw Ou("clientAction", s.id);
            return f(L);
          }
          return u.clientAction({ request: R, params: x, context: M, pattern: P, url: A, async serverAction() {
            return Tu("action", s), f(L);
          } });
        });
      } else {
        s.hasClientLoader || (m.loader = (b, E) => y(() => d(E))), s.hasClientAction || (m.action = (b, E) => y(() => {
          if (a) throw Ou("clientAction", s.id);
          return f(E);
        }));
        let p;
        async function w() {
          return p ? await p : (p = (async () => {
            (s.clientLoaderModule || s.clientActionModule) && await new Promise((E) => setTimeout(E, 0));
            let b = _R(s, t);
            return v(s), await b;
          })(), await p);
        }
        m.lazy = { loader: s.hasClientLoader ? async () => {
          let { clientLoader: b } = s.clientLoaderModule ? await import(s.clientLoaderModule) : await w();
          return Rt(b, "No `clientLoader` export found"), (E, S) => b({ ...E, async serverLoader() {
            return Tu("loader", s), d(S);
          } });
        } : void 0, action: s.hasClientAction ? async () => {
          let b = s.clientActionModule ? import(s.clientActionModule) : w();
          v(s);
          let { clientAction: E } = await b;
          return Rt(E, "No `clientAction` export found"), (S, R) => E({ ...S, async serverAction() {
            return Tu("action", s), f(R);
          } });
        } : void 0, middleware: s.hasClientMiddleware ? async () => {
          let { clientMiddleware: b } = s.clientMiddlewareModule ? await import(s.clientMiddlewareModule) : await w();
          return Rt(b, "No `clientMiddleware` export found"), b;
        } : void 0, shouldRevalidate: async () => {
          let b = await w();
          return Hy(m.path, b, s, n, l);
        }, handle: async () => (await w()).handle, Component: async () => (await w()).Component, ErrorBoundary: s.hasErrorBoundary ? async () => (await w()).ErrorBoundary : void 0 };
      }
      let g = Ba(e3, t, r, n, a, s.id, o, l);
      return g.length > 0 && (m.children = g), m;
    });
  }
  function Hy(e3, t, r, n, a) {
    if (a) return PR(r.id, t.shouldRevalidate, a);
    if (!n && r.hasLoader && !r.hasClientLoader) {
      let i = e3 ? np(e3)[1].map((l) => l.paramName) : [], o = (l) => i.some((s) => l.currentParams[s] !== l.nextParams[s]);
      if (t.shouldRevalidate) {
        let l = t.shouldRevalidate;
        return (s) => l({ ...s, defaultShouldRevalidate: o(s) });
      } else return (l) => o(l);
    }
    return t.shouldRevalidate;
  }
  function PR(e3, t, r) {
    let n = false;
    return (a) => n ? t ? t(a) : a.defaultShouldRevalidate : (n = true, r.has(e3));
  }
  async function _R(e3, t) {
    let r = g2(e3, t), n = RR(e3), a = await r;
    return await Promise.all([n, y2(e3, a)]), { Component: E2(a), ErrorBoundary: a.ErrorBoundary, clientMiddleware: a.clientMiddleware, clientAction: a.clientAction, clientLoader: a.clientLoader, handle: a.handle, links: a.links, meta: a.meta, shouldRevalidate: a.shouldRevalidate };
  }
  function E2(e3) {
    if (e3.default == null) return;
    if (!(typeof e3.default == "object" && Object.keys(e3.default).length === 0)) return e3.default;
  }
  function aa(e3, t, r, n) {
    return n && e3 !== "root" || t != null && (t.hydrate === true || r !== true);
  }
  function R2(e3) {
    let t = /* @__PURE__ */ new Set();
    return e3.forEach((r) => {
      r.startsWith("/") || (r = `/${r}`);
      for (let n = 1; n < r.length; n++) r[n] === "/" && t.add(r.slice(0, n));
      t.add(r);
    }), Array.from(t);
  }
  function Fp(e3, t) {
    return e3.mode === "lazy" && t === true;
  }
  function AR({ sri: e3, ...t }, r) {
    let n = new Set(r.state.matches.map((l) => l.route.id)), a = r.state.location.pathname.split("/").filter(Boolean), i = ["/"];
    for (a.pop(); a.length > 0; ) i.push(`/${a.join("/")}`), a.pop();
    i.forEach((l) => {
      let s = Et(r.routes, l, r.basename || "/", false, r.branches);
      s && s.forEach((u) => n.add(u.route.id));
    });
    let o = [...n].reduce((l, s) => Object.assign(l, { [s]: t.routes[s] }), {});
    return { ...t, routes: o, sri: e3 ? true : void 0 };
  }
  function fc(e3, t, r, n, a, i, o) {
    if (Fp(a, n)) return async ({ path: l, patch: s, signal: u, fetcherKey: c }) => {
      if (Hu.has(l)) return;
      let { state: d } = e3();
      await S2([l], c ? window.location.href : je(d.navigation.location || d.location), t, r, n, i, o, a.manifestPath, s, u);
    };
  }
  function hc(e3, t, r, n, a, i) {
    b2.useEffect(() => {
      if (!Fp(a, n) || window.navigator?.connection?.saveData === true) return;
      function o(c) {
        let d = c.tagName === "FORM" ? c.getAttribute("action") : c.getAttribute("href");
        if (!d) return;
        let f = c.tagName === "A" ? c.pathname : new URL(d, window.location.origin).pathname;
        Hu.has(f) || zu.add(f);
      }
      async function l() {
        document.querySelectorAll("a[data-discover], form[data-discover]").forEach(o);
        let c = Array.from(zu.keys()).filter((d) => Hu.has(d) ? (zu.delete(d), false) : true);
        if (c.length !== 0) try {
          await S2(c, null, t, r, n, i, e3.basename, a.manifestPath, e3.patchRoutes);
        } catch (d) {
          console.error("Failed to fetch manifest patches", d);
        }
      }
      let s = $R(l, 100);
      l();
      let u = new MutationObserver(() => s());
      return u.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ["data-discover", "href", "action"] }), () => u.disconnect();
    }, [n, i, t, r, e3, a]);
  }
  function $p(e3, t) {
    let r = e3 || "/__manifest";
    return t == null ? r : er([t, r]);
  }
  async function S2(e3, t, r, n, a, i, o, l, s, u) {
    e3 = R2(e3);
    let c = new URLSearchParams();
    c.set("paths", e3.sort().join(",")), c.set("version", r.version);
    let d = new URL($p(l, o), window.location.origin);
    if (d.search = c.toString(), d.toString().length > dc) {
      zu.clear();
      return;
    }
    let f;
    try {
      let m = await fetch(d, { signal: u });
      if (m.ok) {
        if (m.status === 204 && m.headers.has("X-Remix-Reload-Document")) {
          if (!t) {
            console.warn("Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.");
            return;
          }
          try {
            if (sessionStorage.getItem(Hh) === r.version) {
              console.error("Unable to discover routes due to manifest version mismatch.");
              return;
            }
            sessionStorage.setItem(Hh, r.version);
          } catch {
          }
          window.location.href = t, console.warn("Detected manifest version mismatch, reloading..."), await new Promise(() => {
          });
        } else if (m.status >= 400) throw new Error(await m.text());
      } else throw new Error(`${m.status} ${m.statusText}`);
      try {
        sessionStorage.removeItem(Hh);
      } catch {
      }
      f = await m.json();
    } catch (m) {
      if (u?.aborted) return;
      throw m;
    }
    let h = new Set(Object.keys(r.routes)), v = Object.values(f).reduce((m, g) => (g && !h.has(g.id) && (m[g.id] = g), m), {});
    Object.assign(r.routes, v), e3.forEach((m) => FR(m, Hu));
    let y = /* @__PURE__ */ new Set();
    Object.values(v).forEach((m) => {
      m && (!m.parentId || !v[m.parentId]) && y.add(m.parentId);
    }), y.forEach((m) => s(m || null, Ba(v, n, null, a, i, m)));
  }
  function FR(e3, t) {
    if (t.size >= TR) {
      let r = t.values().next().value;
      t.delete(r);
    }
    t.add(e3);
  }
  function $R(e3, t) {
    let r;
    return (...n) => {
      window.clearTimeout(r), r = window.setTimeout(() => e3(...n), t);
    };
  }
  function pc() {
    let e3 = G.useContext(Mr);
    return Rt(e3, "You must render this element inside a <DataRouterContext.Provider> element"), e3;
  }
  function mc() {
    let e3 = G.useContext(Wr);
    return Rt(e3, "You must render this element inside a <DataRouterStateContext.Provider> element"), e3;
  }
  function qr() {
    let e3 = G.useContext(vr);
    return Rt(e3, "You must render this element inside a <HydratedRouter> element"), e3;
  }
  function OR(e3, t) {
    let r = G.useContext(vr), [n, a] = G.useState(false), [i, o] = G.useState(false), { onFocus: l, onBlur: s, onMouseEnter: u, onMouseLeave: c, onTouchStart: d } = t, f = G.useRef(null);
    G.useEffect(() => {
      if (e3 === "render" && o(true), e3 === "viewport") {
        let y = (g) => {
          g.forEach((p) => {
            o(p.isIntersecting);
          });
        }, m = new IntersectionObserver(y, { threshold: 0.5 });
        return f.current && m.observe(f.current), () => {
          m.disconnect();
        };
      }
    }, [e3]), G.useEffect(() => {
      if (n) {
        let y = setTimeout(() => {
          o(true);
        }, 100);
        return () => {
          clearTimeout(y);
        };
      }
    }, [n]);
    let h = () => {
      a(true);
    }, v = () => {
      a(false), o(false);
    };
    return r ? e3 !== "intent" ? [i, f, {}] : [i, f, { onFocus: sl(l, h), onBlur: sl(s, v), onMouseEnter: sl(u, h), onMouseLeave: sl(c, v), onTouchStart: sl(d, h) }] : [false, f, {}];
  }
  function sl(e3, t) {
    return (r) => {
      e3 && e3(r), r.defaultPrevented || t(r);
    };
  }
  function Op(e3, t, r) {
    if (r && !Bu) return [e3[0]];
    if (t) {
      let n = e3.findIndex((a) => t[a.route.id] !== void 0);
      return e3.slice(0, n + 1);
    }
    return e3;
  }
  function C2({ nonce: e3, crossOrigin: t }) {
    let { isSpaMode: r, manifest: n, routeModules: a, criticalCss: i, nonce: o } = qr(), { errors: l, matches: s } = mc(), u = Op(s, l, r), c = G.useMemo(() => ER(u, a, n), [u, a, n]);
    return e3 == null && o && (e3 = o), G.createElement(G.Fragment, null, typeof i == "string" ? G.createElement("style", { [By]: "", nonce: e3, dangerouslySetInnerHTML: { __html: i } }) : null, typeof i == "object" ? G.createElement("link", { [By]: "", rel: "stylesheet", href: i.href, nonce: e3, crossOrigin: t }) : null, c.map(({ key: d, link: f }) => Pp(f) ? G.createElement(gc, { key: d, nonce: e3, ...f, crossOrigin: f.crossOrigin ?? t }) : G.createElement("link", { key: d, nonce: e3, ...f, crossOrigin: f.crossOrigin ?? t })));
  }
  function gc({ page: e3, ...t }) {
    let r = pp(), { nonce: n } = qr(), { router: a } = pc(), i = G.useMemo(() => Yi(a.routes, e3, a.basename), [a.routes, e3, a.basename]);
    return i ? (t.nonce == null && n && (t = { ...t, nonce: n }), r ? G.createElement(IR, { page: e3, matches: i, ...t }) : G.createElement(jR, { page: e3, matches: i, ...t })) : null;
  }
  function zR(e3) {
    let { manifest: t, routeModules: r } = qr(), [n, a] = G.useState([]);
    return G.useEffect(() => {
      let i = false;
      return CR(e3, t, r).then((o) => {
        i || a(o);
      }), () => {
        i = true;
      };
    }, [e3, t, r]), n;
  }
  function IR({ page: e3, matches: t, ...r }) {
    let n = qe(), { future: a } = qr(), { basename: i } = pc(), o = G.useMemo(() => {
      if (e3 === n.pathname + n.search + n.hash) return [];
      let l = uc(e3, i, a.v8_trailingSlashAwareDataRequests, "rsc"), s = false, u = [];
      for (let c of t) typeof c.route.shouldRevalidate == "function" ? s = true : u.push(c.route.id);
      return s && u.length > 0 && l.searchParams.set("_routes", u.join(",")), [l.pathname + l.search];
    }, [i, a.v8_trailingSlashAwareDataRequests, e3, n, t]);
    return G.createElement(G.Fragment, null, o.map((l) => G.createElement("link", { key: l, rel: "prefetch", as: "fetch", href: l, ...r })));
  }
  function jR({ page: e3, matches: t, ...r }) {
    let n = qe(), { future: a, manifest: i, routeModules: o } = qr(), { basename: l } = pc(), { loaderData: s, matches: u } = mc(), c = G.useMemo(() => Uy(e3, t, u, i, n, "data"), [e3, t, u, i, n]), d = G.useMemo(() => Uy(e3, t, u, i, n, "assets"), [e3, t, u, i, n]), f = G.useMemo(() => {
      if (e3 === n.pathname + n.search + n.hash) return [];
      let y = /* @__PURE__ */ new Set(), m = false;
      if (t.forEach((p) => {
        let w = i.routes[p.route.id];
        !w || !w.hasLoader || (!c.some((b) => b.route.id === p.route.id) && p.route.id in s && o[p.route.id]?.shouldRevalidate || w.hasClientLoader ? m = true : y.add(p.route.id));
      }), y.size === 0) return [];
      let g = uc(e3, l, a.v8_trailingSlashAwareDataRequests, "data");
      return m && y.size > 0 && g.searchParams.set("_routes", t.filter((p) => y.has(p.route.id)).map((p) => p.route.id).join(",")), [g.pathname + g.search];
    }, [l, a.v8_trailingSlashAwareDataRequests, s, n, i, c, t, e3, o]), h = G.useMemo(() => _p(d, i), [d, i]), v = zR(d);
    return G.createElement(G.Fragment, null, f.map((y) => G.createElement("link", { key: y, rel: "prefetch", as: "fetch", href: y, ...r })), h.map((y) => G.createElement("link", { key: y, rel: "modulepreload", href: y, ...r })), v.map(({ key: y, link: m }) => G.createElement("link", { key: y, nonce: r.nonce, ...m, crossOrigin: m.crossOrigin ?? r.crossOrigin })));
  }
  function D2() {
    let { isSpaMode: e3, routeModules: t } = qr(), { errors: r, matches: n, loaderData: a } = mc(), i = qe(), o = Op(n, r, e3), l = null;
    r && (l = r[o[o.length - 1].route.id]);
    let s = [], u = null, c = [];
    for (let d = 0; d < o.length; d++) {
      let f = o[d], h = f.route.id, v = a[h], y = f.params, m = t[h], g = [], p = { id: h, data: v, loaderData: v, meta: [], params: f.params, pathname: f.pathname, handle: f.route.handle, error: l };
      if (c[d] = p, m?.meta ? g = typeof m.meta == "function" ? m.meta({ data: v, loaderData: v, params: y, location: i, matches: c, error: l }) : Array.isArray(m.meta) ? [...m.meta] : m.meta : u && (g = [...u]), g = g || [], !Array.isArray(g)) throw new Error("The route at " + f.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://reactrouter.com/start/framework/route-module#meta`);
      p.meta = g, c[d] = p, s = [...g], u = s;
    }
    return G.createElement(G.Fragment, null, s.flat().map((d) => {
      if (!d) return null;
      if ("tagName" in d) {
        let { tagName: f, ...h } = d;
        return UR(f) ? G.createElement(f, { key: JSON.stringify(h), ...h }) : (console.warn(`A meta object uses an invalid tagName: ${f}. Expected either 'link' or 'meta'`), null);
      }
      if ("title" in d) return G.createElement("title", { key: "title" }, String(d.title));
      if ("charset" in d && (d.charSet ?? (d.charSet = d.charset), delete d.charset), "charSet" in d && d.charSet != null) return typeof d.charSet == "string" ? G.createElement("meta", { key: "charSet", charSet: d.charSet }) : null;
      if ("script:ld+json" in d) try {
        let f = JSON.stringify(d["script:ld+json"]);
        return G.createElement("script", { key: `script:ld+json:${f}`, type: "application/ld+json", dangerouslySetInnerHTML: { __html: wn(f) } });
      } catch {
        return null;
      }
      return G.createElement("meta", { key: JSON.stringify(d), ...d });
    }));
  }
  function UR(e3) {
    return typeof e3 == "string" && /^(meta|link)$/.test(e3);
  }
  function N2() {
    Bu = true;
  }
  function zp(e3) {
    let { manifest: t, serverHandoffString: r, isSpaMode: n, renderMeta: a, routeDiscovery: i, ssr: o, nonce: l } = qr(), { router: s, static: u, staticContext: c } = pc(), { matches: d } = mc(), f = pp(), h = Fp(i, o);
    e3.nonce == null && l && (e3 = { ...e3, nonce: l }), a && (a.didRenderScripts = true);
    let v = Op(d, null, n);
    G.useEffect(() => {
      N2();
    }, []);
    let y = G.useMemo(() => {
      if (f) return null;
      let w = c ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());` : " ", b = u ? `${t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${h ? "" : `import ${JSON.stringify(t.url)}`};
${v.map((E, S) => {
        let R = `route${S}`, x = t.routes[E.route.id];
        Rt(x, `Route ${E.route.id} not found in manifest`);
        let { clientActionModule: M, clientLoaderModule: P, clientMiddlewareModule: A, hydrateFallbackModule: L, module: B } = x, j = [...M ? [{ module: M, varName: `${R}_clientAction` }] : [], ...P ? [{ module: P, varName: `${R}_clientLoader` }] : [], ...A ? [{ module: A, varName: `${R}_clientMiddleware` }] : [], ...L ? [{ module: L, varName: `${R}_HydrateFallback` }] : [], { module: B, varName: `${R}_main` }];
        if (j.length === 1) return `import * as ${R} from ${JSON.stringify(B)};`;
        let ne = j.map((oe) => `import * as ${oe.varName} from "${oe.module}";`).join(`
`), Z = `const ${R} = {${j.map((oe) => `...${oe.varName}`).join(",")}};`;
        return [ne, Z].join(`
`);
      }).join(`
`)}
  ${h ? `window.__reactRouterManifest = ${JSON.stringify(AR(t, s), null, 2)};` : ""}
  window.__reactRouterRouteModules = {${v.map((E, S) => `${JSON.stringify(E.route.id)}:route${S}`).join(",")}};

import(${JSON.stringify(t.entry.module)});` : " ";
      return G.createElement(G.Fragment, null, G.createElement("script", { ...e3, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: w }, type: void 0 }), G.createElement("script", { ...e3, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: b }, type: "module", async: true }));
    }, []), m = Bu || f ? [] : [...new Set(t.entry.imports.concat(_p(v, t, { includeHydrateFallback: true })))], g = typeof t.sri == "object" ? t.sri : {};
    return Bi(!f, "The <Scripts /> element is a no-op when using RSC and can be safely removed."), Bu || f ? null : G.createElement(G.Fragment, null, typeof t.sri == "object" ? G.createElement("script", { ...e3, "rr-importmap": "", type: "importmap", suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: JSON.stringify({ integrity: g }) } }) : null, h ? null : G.createElement("link", { rel: "modulepreload", href: t.url, crossOrigin: e3.crossOrigin, integrity: g[t.url], nonce: e3.nonce, suppressHydrationWarning: true }), G.createElement("link", { rel: "modulepreload", href: t.entry.module, crossOrigin: e3.crossOrigin, integrity: g[t.entry.module], nonce: e3.nonce, suppressHydrationWarning: true }), m.map((p) => G.createElement("link", { key: p, rel: "modulepreload", href: p, crossOrigin: e3.crossOrigin, integrity: g[p], nonce: e3.nonce, suppressHydrationWarning: true })), y);
  }
  function HR(...e3) {
    return (t) => {
      e3.forEach((r) => {
        typeof r == "function" ? r(t) : r != null && (r.current = t);
      });
    };
  }
  function M2({ error: e3, isOutsideRemixApp: t }) {
    let { nonce: r } = qr();
    console.error(e3);
    let n = nt.createElement("script", { nonce: r, dangerouslySetInnerHTML: { __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      ` } });
    if (Ue(e3)) return nt.createElement(Jh, { title: "Unhandled Thrown Response!" }, nt.createElement("h1", { style: { fontSize: "24px" } }, e3.status, " ", e3.statusText), Vr ? n : null);
    let a;
    if (e3 instanceof Error) a = e3;
    else {
      let i = e3 == null ? "Unknown Error" : typeof e3 == "object" && "toString" in e3 ? e3.toString() : JSON.stringify(e3);
      a = new Error(i);
    }
    return nt.createElement(Jh, { title: "Application Error!", isOutsideRemixApp: t }, nt.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), nt.createElement("pre", { style: { padding: "2rem", background: "hsla(10, 50%, 50%, 0.1)", color: "red", overflow: "auto" } }, a.stack), n);
  }
  function Jh({ title: e3, renderScripts: t, isOutsideRemixApp: r, children: n }) {
    let { routeModules: a } = qr();
    return a.root?.Layout && !r ? n : nt.createElement("html", { lang: "en" }, nt.createElement("head", null, nt.createElement("meta", { charSet: "utf-8" }), nt.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" }), nt.createElement("title", null, e3)), nt.createElement("body", null, nt.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, n, t ? nt.createElement(zp, null) : null)));
  }
  function L2(e3, t) {
    return za({ basename: t?.basename, getContext: t?.getContext, future: t?.future, history: Wi({ window: t?.window }), hydrationData: t?.hydrationData || _2(), routes: e3, mapRouteProperties: kn, hydrationRouteProperties: Ua, dataStrategy: t?.dataStrategy, patchRoutesOnNavigation: t?.patchRoutesOnNavigation, window: t?.window, instrumentations: t?.instrumentations }).initialize();
  }
  function P2(e3, t) {
    return za({ basename: t?.basename, getContext: t?.getContext, future: t?.future, history: Wu({ window: t?.window }), hydrationData: t?.hydrationData || _2(), routes: e3, mapRouteProperties: kn, hydrationRouteProperties: Ua, dataStrategy: t?.dataStrategy, patchRoutesOnNavigation: t?.patchRoutesOnNavigation, window: t?.window, instrumentations: t?.instrumentations }).initialize();
  }
  function _2() {
    let e3 = window?.__staticRouterHydrationData;
    return e3 && e3.errors && (e3 = { ...e3, errors: VR(e3.errors) }), e3;
  }
  function VR(e3) {
    if (!e3) return null;
    let t = Object.entries(e3), r = {};
    for (let [n, a] of t) if (a && a.__type === "RouteErrorResponse") r[n] = new it(a.status, a.statusText, a.data, a.internal === true);
    else if (a && a.__type === "Error") {
      if (typeof a.__subType == "string" && lp.includes(a.__subType)) {
        let i = window[a.__subType];
        if (typeof i == "function") try {
          let o = new i(a.message);
          o.stack = "", r[n] = o;
        } catch {
        }
      }
      if (r[n] == null) {
        let i = new Error(a.message);
        i.stack = "", r[n] = i;
      }
    } else r[n] = a;
    return r;
  }
  function T2({ basename: e3, children: t, useTransitions: r, window: n }) {
    let a = z.useRef();
    a.current == null && (a.current = Wi({ window: n, v5Compat: true }));
    let i = a.current, [o, l] = z.useState({ action: i.action, location: i.location }), s = z.useCallback((u) => {
      r === false ? l(u) : z.startTransition(() => l(u));
    }, [r]);
    return z.useLayoutEffect(() => i.listen(s), [i, s]), z.createElement(En, { basename: e3, children: t, location: o.location, navigationType: o.action, navigator: i, useTransitions: r });
  }
  function A2({ basename: e3, children: t, useTransitions: r, window: n }) {
    let a = z.useRef();
    a.current == null && (a.current = Wu({ window: n, v5Compat: true }));
    let i = a.current, [o, l] = z.useState({ action: i.action, location: i.location }), s = z.useCallback((u) => {
      r === false ? l(u) : z.startTransition(() => l(u));
    }, [r]);
    return z.useLayoutEffect(() => i.listen(s), [i, s]), z.createElement(En, { basename: e3, children: t, location: o.location, navigationType: o.action, navigator: i, useTransitions: r });
  }
  function Ip({ basename: e3, children: t, history: r, useTransitions: n }) {
    let [a, i] = z.useState({ action: r.action, location: r.location }), o = z.useCallback((l) => {
      n === false ? i(l) : z.startTransition(() => i(l));
    }, [n]);
    return z.useLayoutEffect(() => r.listen(o), [r, o]), z.createElement(En, { basename: e3, children: t, location: a.location, navigationType: a.action, navigator: r, useTransitions: n });
  }
  function jp({ getKey: e3, storageKey: t, ...r }) {
    let n = z.useContext(vr), { basename: a } = z.useContext(ht), i = qe(), o = El();
    Vp({ getKey: e3, storageKey: t });
    let l = z.useMemo(() => {
      if (!n || !e3) return null;
      let u = tp(i, o, a, e3);
      return u !== i.key ? u : null;
    }, []);
    if (!n || n.isSpaMode) return null;
    let s = ((u, c) => {
      if (!window.history.state || !window.history.state.key) {
        let d = Math.random().toString(32).slice(2);
        window.history.replaceState({ key: d }, "");
      }
      try {
        let f = JSON.parse(sessionStorage.getItem(u) || "{}")[c || window.history.state.key];
        typeof f == "number" && window.scrollTo(0, f);
      } catch (d) {
        console.error(d), sessionStorage.removeItem(u);
      }
    }).toString();
    return r.nonce == null && n?.nonce && (r.nonce = n.nonce), z.createElement("script", { ...r, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: `(${s})(${wn(JSON.stringify(t || ep))}, ${wn(JSON.stringify(l))})` } });
  }
  function F2(e3) {
    return `${e3} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function yc(e3) {
    let t = z.useContext(Mr);
    return q(t, F2(e3)), t;
  }
  function Up(e3) {
    let t = z.useContext(Wr);
    return q(t, F2(e3)), t;
  }
  function Hp(e3, { target: t, replace: r, mask: n, state: a, preventScrollReset: i, relative: o, viewTransition: l, defaultShouldRevalidate: s, useTransitions: u } = {}) {
    let c = bn(), d = qe(), f = Ia(e3, { relative: o });
    return z.useCallback((h) => {
      if (tR(h, t)) {
        h.preventDefault();
        let v = r !== void 0 ? r : je(d) === je(f), y = () => c(e3, { replace: v, mask: n, state: a, preventScrollReset: i, relative: o, viewTransition: l, defaultShouldRevalidate: s });
        u ? z.startTransition(() => y()) : y();
      }
    }, [d, c, f, r, n, a, t, e3, i, o, l, s, u]);
  }
  function $2(e3) {
    ke(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = z.useRef(pl(e3)), r = z.useRef(false), n = qe(), a = z.useMemo(() => rR(n.search, r.current ? null : t.current), [n.search]), i = bn(), o = z.useCallback((l, s) => {
      let u = pl(typeof l == "function" ? l(new URLSearchParams(a)) : l);
      r.current = true, i("?" + u, s);
    }, [i, a]);
    return [a, o];
  }
  function wc() {
    let { router: e3 } = yc("useSubmit"), { basename: t } = z.useContext(ht), r = UE(), n = e3.fetch, a = e3.navigate;
    return z.useCallback(async (i, o = {}) => {
      let { action: l, method: s, encType: u, formData: c, body: d } = iR(i, t);
      if (o.navigate === false) {
        let f = o.fetcherKey || YR();
        await n(f, r, o.action || l, { defaultShouldRevalidate: o.defaultShouldRevalidate, preventScrollReset: o.preventScrollReset, formData: c, body: d, formMethod: o.method || s, formEncType: o.encType || u, flushSync: o.flushSync });
      } else await a(o.action || l, { defaultShouldRevalidate: o.defaultShouldRevalidate, preventScrollReset: o.preventScrollReset, formData: c, body: d, formMethod: o.method || s, formEncType: o.encType || u, replace: o.replace, state: o.state, fromRouteId: r, flushSync: o.flushSync, viewTransition: o.viewTransition });
    }, [n, a, t, r]);
  }
  function Bp(e3, { relative: t } = {}) {
    let { basename: r } = z.useContext(ht), n = z.useContext(Ot);
    q(n, "useFormAction must be used inside a RouteContext");
    let [a] = n.matches.slice(-1), i = { ...Ia(e3 || ".", { relative: t }) }, o = qe();
    if (e3 == null) {
      i.search = o.search;
      let l = new URLSearchParams(i.search), s = l.getAll("index");
      if (s.some((c) => c === "")) {
        l.delete("index"), s.filter((d) => d).forEach((d) => l.append("index", d));
        let c = l.toString();
        i.search = c ? `?${c}` : "";
      }
    }
    return (!e3 || e3 === ".") && a.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (i.pathname = i.pathname === "/" ? r : er([r, i.pathname])), je(i);
  }
  function O2({ key: e3 } = {}) {
    let { router: t } = yc("useFetcher"), r = Up("useFetcher"), n = z.useContext(Gi), a = z.useContext(Ot), i = a.matches[a.matches.length - 1]?.route.id;
    q(n, "useFetcher must be used inside a FetchersContext"), q(a, "useFetcher must be used inside a RouteContext"), q(i != null, 'useFetcher can only be used on routes that contain a unique "id"');
    let o = z.useId(), [l, s] = z.useState(e3 || o);
    e3 && e3 !== l && s(e3);
    let { deleteFetcher: u, getFetcher: c, resetFetcher: d, fetch: f } = t;
    z.useEffect(() => (c(l), () => u(l)), [u, c, l]);
    let h = z.useCallback(async (E, S) => {
      q(i, "No routeId available for fetcher.load()"), await f(l, i, E, S);
    }, [l, i, f]), v = wc(), y = z.useCallback(async (E, S) => {
      await v(E, { ...S, navigate: false, fetcherKey: l });
    }, [l, v]), m = z.useCallback((E) => d(l, E), [d, l]), g = z.useMemo(() => {
      let E = z.forwardRef((S, R) => z.createElement(vc, { ...S, navigate: false, fetcherKey: l, ref: R }));
      return E.displayName = "fetcher.Form", E;
    }, [l]), p = r.fetchers.get(l) || wl, w = n.get(l);
    return z.useMemo(() => ({ Form: g, submit: y, load: h, reset: m, ...p, data: w }), [g, y, h, m, p, w]);
  }
  function z2() {
    let e3 = Up("useFetchers");
    return z.useMemo(() => Array.from(e3.fetchers.entries()).map(([t, r]) => ({ ...r, key: t })), [e3.fetchers]);
  }
  function tp(e3, t, r, n) {
    let a = null;
    return n && (r !== "/" ? a = n({ ...e3, pathname: Qe(e3.pathname, r) || e3.pathname }, t) : a = n(e3, t)), a == null && (a = e3.key), a;
  }
  function Vp({ getKey: e3, storageKey: t } = {}) {
    let { router: r } = yc("useScrollRestoration"), { restoreScrollPosition: n, preventScrollReset: a } = Up("useScrollRestoration"), { basename: i } = z.useContext(ht), o = qe(), l = El(), s = bp();
    z.useEffect(() => (window.history.scrollRestoration = "manual", () => {
      window.history.scrollRestoration = "auto";
    }), []), qR(z.useCallback(() => {
      if (s.state === "idle") {
        let u = tp(o, l, i, e3);
        Au[u] = window.scrollY;
      }
      try {
        sessionStorage.setItem(t || ep, JSON.stringify(Au));
      } catch (u) {
        ke(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`);
      }
      window.history.scrollRestoration = "auto";
    }, [s.state, e3, i, o, l, t])), typeof document < "u" && (z.useLayoutEffect(() => {
      try {
        let u = sessionStorage.getItem(t || ep);
        u && (Au = JSON.parse(u));
      } catch {
      }
    }, [t]), z.useLayoutEffect(() => {
      let u = r?.enableScrollRestoration(Au, () => window.scrollY, e3 ? (c, d) => tp(c, d, i, e3) : void 0);
      return () => u && u();
    }, [r, i, e3]), z.useLayoutEffect(() => {
      if (n !== false) {
        if (typeof n == "number") {
          window.scrollTo(0, n);
          return;
        }
        try {
          if (o.hash) {
            let u = document.getElementById(decodeURIComponent(o.hash.slice(1)));
            if (u) {
              u.scrollIntoView();
              return;
            }
          }
        } catch {
          ke(false, `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
        }
        a !== true && window.scrollTo(0, 0);
      }
    }, [o, n, a]));
  }
  function I2(e3, t) {
    let { capture: r } = t || {};
    z.useEffect(() => {
      let n = r != null ? { capture: r } : void 0;
      return window.addEventListener("beforeunload", e3, n), () => {
        window.removeEventListener("beforeunload", e3, n);
      };
    }, [e3, r]);
  }
  function qR(e3, t) {
    let { capture: r } = t || {};
    z.useEffect(() => {
      let n = r != null ? { capture: r } : void 0;
      return window.addEventListener("pagehide", e3, n), () => {
        window.removeEventListener("pagehide", e3, n);
      };
    }, [e3, r]);
  }
  function j2({ when: e3, message: t }) {
    let r = Ep(e3);
    z.useEffect(() => {
      r.state === "blocked" && (window.confirm(t) ? setTimeout(r.proceed, 0) : r.reset());
    }, [r, t]), z.useEffect(() => {
      r.state === "blocked" && !e3 && r.reset();
    }, [r, e3]);
  }
  function Wp(e3, { relative: t } = {}) {
    let r = z.useContext(qi);
    q(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: n } = yc("useViewTransitionState"), a = Ia(e3, { relative: t });
    if (!r.isTransitioning) return false;
    let i = Qe(r.currentLocation.pathname, n) || r.currentLocation.pathname, o = Qe(r.nextLocation.pathname, n) || r.nextLocation.pathname;
    return $a(a.pathname, o) != null || $a(a.pathname, i) != null;
  }
  function U2({ basename: e3, children: t, location: r = "/" }) {
    typeof r == "string" && (r = St(r));
    let n = "POP", a = { pathname: r.pathname || "/", search: r.search || "", hash: r.hash || "", state: r.state != null ? r.state : null, key: r.key || "default", mask: void 0 }, i = H2();
    return fr.createElement(En, { basename: e3, children: t, location: a, navigationType: n, navigator: i, static: true, useTransitions: false });
  }
  function Ml({ context: e3, router: t, hydrate: r = true, nonce: n }) {
    q(t && e3, "You must provide `router` and `context` to <StaticRouterProvider>");
    let a = { router: t, navigator: H2(), static: true, staticContext: e3, basename: e3.basename || "/" }, i = /* @__PURE__ */ new Map(), o = "";
    if (r !== false) {
      let s = { loaderData: e3.loaderData, actionData: e3.actionData, errors: GR(e3.errors) };
      o = `window.__staticRouterHydrationData = JSON.parse(${wn(JSON.stringify(JSON.stringify(s)))});`;
    }
    let { state: l } = a.router;
    return fr.createElement(fr.Fragment, null, fr.createElement(Mr.Provider, { value: a }, fr.createElement(Wr.Provider, { value: l }, fr.createElement(Gi.Provider, { value: i }, fr.createElement(qi.Provider, { value: { isTransitioning: false } }, fr.createElement(En, { basename: a.basename, location: l.location, navigationType: l.historyAction, navigator: a.navigator, static: a.static, useTransitions: false }, fr.createElement(Yw, { manifest: t.manifest, routes: t.routes, future: t.future, state: l, isStatic: true })))))), o ? fr.createElement("script", { suppressHydrationWarning: true, nonce: n, dangerouslySetInnerHTML: { __html: o } }) : null);
  }
  function GR(e3) {
    if (!e3) return null;
    let t = Object.entries(e3), r = {};
    for (let [n, a] of t) Ue(a) ? r[n] = { ...a, __type: "RouteErrorResponse" } : a instanceof Error ? r[n] = { message: a.message, __type: "Error", ...a.name !== "Error" ? { __subType: a.name } : {} } : r[n] = a;
    return r;
  }
  function H2() {
    return { createHref: V2, encodeLocation: W2, push(e3) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e3)})\` somewhere in your app.`);
    }, replace(e3) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e3)}, { replace: true })\` somewhere in your app.`);
    }, go(e3) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e3})\` somewhere in your app.`);
    }, back() {
      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
    }, forward() {
      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
    } };
  }
  function B2(e3, t) {
    return up(e3, { ...t, mapRouteProperties: kn });
  }
  function Ll(e3, t, r = {}) {
    let n = {}, a = yn(e3, kn, void 0, n), i = t.matches.map((l) => {
      let s = n[l.route.id] || l.route;
      return { ...l, route: s };
    }), o = (l) => `You cannot use router.${l}() on the server because it is a stateless environment`;
    return { get basename() {
      return t.basename;
    }, get future() {
      return { v8_middleware: false, v8_passThroughRequests: false, v8_trailingSlashAwareDataRequests: false, ...r?.future };
    }, get state() {
      return { historyAction: "POP", location: t.location, matches: i, loaderData: t.loaderData, actionData: t.actionData, errors: t.errors, initialized: true, renderFallback: false, navigation: $i, restoreScrollPosition: null, preventScrollReset: false, revalidation: "idle", fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() };
    }, get routes() {
      return a;
    }, get branches() {
      return r.branches;
    }, get manifest() {
      return n;
    }, get window() {
    }, initialize() {
      throw o("initialize");
    }, subscribe() {
      throw o("subscribe");
    }, enableScrollRestoration() {
      throw o("enableScrollRestoration");
    }, navigate() {
      throw o("navigate");
    }, fetch() {
      throw o("fetch");
    }, revalidate() {
      throw o("revalidate");
    }, createHref: V2, encodeLocation: W2, getFetcher() {
      return wl;
    }, deleteFetcher() {
      throw o("deleteFetcher");
    }, resetFetcher() {
      throw o("resetFetcher");
    }, dispose() {
      throw o("dispose");
    }, getBlocker() {
      return pn;
    }, deleteBlocker() {
      throw o("deleteBlocker");
    }, patchRoutes() {
      throw o("patchRoutes");
    }, _internalFetchControllers: /* @__PURE__ */ new Map(), _internalSetRoutes() {
      throw o("_internalSetRoutes");
    }, _internalSetStateDoNotUseOrYouWillBreakYourApp() {
      throw o("_internalSetStateDoNotUseOrYouWillBreakYourApp");
    } };
  }
  function V2(e3) {
    return typeof e3 == "string" ? e3 : je(e3);
  }
  function W2(e3) {
    let t = typeof e3 == "string" ? e3 : je(e3);
    t = t.replace(/ $/, "%20");
    let r = gl.test(t) ? new URL(t) : new URL(t, "http://localhost");
    return { pathname: r.pathname, search: r.search, hash: r.hash };
  }
  function c4({ context: e3, url: t, nonce: r }) {
    typeof t == "string" && (t = new URL(t));
    let { manifest: n, routeModules: a, criticalCss: i, serverHandoffString: o } = e3, l = Ap(n.routes, a, e3.future, e3.isSpaMode);
    e3.staticHandlerContext.loaderData = { ...e3.staticHandlerContext.loaderData };
    for (let u of e3.staticHandlerContext.matches) {
      let c = u.route.id, d = a[c], f = e3.manifest.routes[c];
      d && f && aa(c, d.clientLoader, f.hasLoader, e3.isSpaMode) && (d.HydrateFallback || !f.hasLoader) && delete e3.staticHandlerContext.loaderData[c];
    }
    let s = Ll(l, e3.staticHandlerContext, { branches: e3.branches });
    return Lr.createElement(Lr.Fragment, null, Lr.createElement(vr.Provider, { value: { manifest: n, routeModules: a, criticalCss: i, serverHandoffString: o, future: e3.future, ssr: e3.ssr, isSpaMode: e3.isSpaMode, routeDiscovery: e3.routeDiscovery, nonce: r, serializeError: e3.serializeError, renderMeta: e3.renderMeta } }, Lr.createElement(Qi, { location: s.state.location }, Lr.createElement(Ml, { router: s, context: e3.staticHandlerContext, hydrate: false }))), e3.serverHandoffStream ? Lr.createElement(Lr.Suspense, null, Lr.createElement(Lp, { context: e3, identifier: 0, reader: e3.serverHandoffStream.getReader(), textDecoder: new TextDecoder(), nonce: r })) : null);
  }
  function d4(e3, t) {
    return function({ initialEntries: n, initialIndex: a, hydrationData: i, future: o }) {
      let l = Ji.useRef(), s = Ji.useRef();
      if (l.current == null) {
        s.current = { future: { v8_passThroughRequests: o?.v8_passThroughRequests === true, v8_middleware: o?.v8_middleware === true, v8_trailingSlashAwareDataRequests: o?.v8_trailingSlashAwareDataRequests === true }, manifest: { routes: {}, entry: { imports: [], module: "" }, url: "", version: "" }, routeModules: {}, ssr: false, isSpaMode: false, routeDiscovery: { mode: "lazy", manifestPath: "/__manifest" } };
        let u = f4(yn(e3, (c) => c), t !== void 0 ? t : o?.v8_middleware ? new mr() : {}, s.current.manifest, s.current.routeModules);
        l.current = Ju(u, { initialEntries: n, initialIndex: a, hydrationData: i });
      }
      return Ji.createElement(vr.Provider, { value: s.current }, Ji.createElement(Cl, { router: l.current }));
    };
  }
  function f4(e3, t, r, n, a) {
    return e3.map((i) => {
      if (!i.id) throw new Error("Expected a route.id in react-router processRoutes() function");
      let o = { id: i.id, path: i.path, index: i.index, Component: i.Component ? nc(i.Component) : void 0, HydrateFallback: i.HydrateFallback ? ac(i.HydrateFallback) : void 0, ErrorBoundary: i.ErrorBoundary ? ic(i.ErrorBoundary) : void 0, action: i.action ? (s) => i.action({ ...s, context: t }) : void 0, loader: i.loader ? (s) => i.loader({ ...s, context: t }) : void 0, middleware: i.middleware ? i.middleware.map((s) => (...u) => s({ ...u[0], context: t }, u[1])) : void 0, handle: i.handle, shouldRevalidate: i.shouldRevalidate }, l = { id: i.id, path: i.path, index: i.index, parentId: a, hasAction: i.action != null, hasLoader: i.loader != null, hasClientAction: false, hasClientLoader: false, hasClientMiddleware: false, hasErrorBoundary: i.ErrorBoundary != null, module: "build/stub-path-to-module.js", clientActionModule: void 0, clientLoaderModule: void 0, clientMiddlewareModule: void 0, hydrateFallbackModule: void 0 };
      return r.routes[o.id] = l, n[i.id] = { default: o.Component || tc, ErrorBoundary: o.ErrorBoundary || void 0, handle: i.handle, links: i.links, meta: i.meta, shouldRevalidate: i.shouldRevalidate }, i.children && (o.children = f4(i.children, t, r, n, o.id)), o;
    });
  }
  function lS(e3) {
    let t = new Uint8Array(e3.length);
    for (let r = 0; r < e3.length; r++) t[r] = e3.charCodeAt(r);
    return t;
  }
  async function sS(e3, t) {
    let r = cS(e3);
    return t.length > 0 && (r = await iS(r, t[0])), r;
  }
  async function uS(e3, t) {
    if (t.length > 0) {
      for (let r of t) {
        let n = await oS(e3, r);
        if (n !== false) return J2(n);
      }
      return null;
    }
    return J2(e3);
  }
  function cS(e3) {
    return btoa(fS(encodeURIComponent(JSON.stringify(e3))));
  }
  function J2(e3) {
    try {
      return JSON.parse(decodeURIComponent(dS(atob(e3))));
    } catch {
      return {};
    }
  }
  function dS(e3) {
    let t = e3.toString(), r = "", n = 0, a, i;
    for (; n < t.length; ) a = t.charAt(n++), /[\w*+\-./@]/.exec(a) ? r += a : (i = a.charCodeAt(0), i < 256 ? r += "%" + e4(i, 2) : r += "%u" + e4(i, 4).toUpperCase());
    return r;
  }
  function e4(e3, t) {
    let r = e3.toString(16);
    for (; r.length < t; ) r = "0" + r;
    return r;
  }
  function fS(e3) {
    let t = e3.toString(), r = "", n = 0, a, i;
    for (; n < t.length; ) {
      if (a = t.charAt(n++), a === "%") {
        if (t.charAt(n) === "u") {
          if (i = t.slice(n + 1, n + 5), /^[\da-f]{4}$/i.exec(i)) {
            r += String.fromCharCode(parseInt(i, 16)), n += 5;
            continue;
          }
        } else if (i = t.slice(n, n + 2), /^[\da-f]{2}$/i.exec(i)) {
          r += String.fromCharCode(parseInt(i, 16)), n += 2;
          continue;
        }
      }
      r += a;
    }
    return r;
  }
  function hS(e3, t) {
    Bi(!t, `The "${e3}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
  }
  function pS(e3) {
    return Object.keys(e3).reduce((t, r) => {
      let n = e3[r];
      return n && (t[r] = n.module), t;
    }, {});
  }
  function mS(e3) {
    return e3 === "development" || e3 === "production" || e3 === "test";
  }
  function i0(e3, t) {
    if (e3 instanceof Error && t !== "development") {
      let r = new Error("Unexpected Server Error");
      return r.stack = void 0, r;
    }
    return e3;
  }
  function kc(e3, t) {
    return Object.entries(e3).reduce((r, [n, a]) => Object.assign(r, { [n]: i0(a, t) }), {});
  }
  function p4(e3, t) {
    let r = i0(e3, t);
    return { message: r.message, stack: r.stack };
  }
  function _l(e3, t) {
    if (e3 === false || e3 === null || typeof e3 > "u") throw console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"), new Error(t);
  }
  function m4(e3, t, r, n, a) {
    let i = Et(t, n, a ?? "/", false, r);
    return i ? i.map((o) => {
      let l = e3[o.route.id];
      return _l(l, `Route with id "${o.route.id}" not found in manifest.`), { params: o.params, pathname: o.pathname, route: l };
    }) : null;
  }
  async function t4(e3, t, r) {
    let n = await e3({ request: r.v8_passThroughRequests ? t.request : vS(gS(t.request)), url: t.url, params: t.params, context: t.context, pattern: t.pattern });
    if (gn(n) && n.init && n.init.status && xl(n.init.status)) throw new Response(null, n.init);
    return n;
  }
  function gS(e3) {
    let t = new URL(e3.url), r = t.searchParams.getAll("index");
    t.searchParams.delete("index");
    let n = [];
    for (let i of r) i && n.push(i);
    for (let i of n) t.searchParams.append("index", i);
    let a = { method: e3.method, body: e3.body, headers: e3.headers, signal: e3.signal };
    return a.body && (a.duplex = "half"), new Request(t.href, a);
  }
  function vS(e3) {
    let t = new URL(e3.url);
    t.searchParams.delete("_routes");
    let r = { method: e3.method, body: e3.body, headers: e3.headers, signal: e3.signal };
    return r.body && (r.duplex = "half"), new Request(t.href, r);
  }
  function v4(e3) {
    globalThis[g4] = e3;
  }
  function Zp() {
    return globalThis[g4];
  }
  function y4(e3, t) {
    if (typeof process < "u") try {
      if (process.env.hasOwnProperty("IS_RR_BUILD_REQUEST") && process.env.IS_RR_BUILD_REQUEST === "yes") return e3.headers.get(t);
    } catch {
    }
    return null;
  }
  function yS(e3) {
    let t = {};
    return Object.values(e3).forEach((r) => {
      if (r) {
        let n = r.parentId || "";
        t[n] || (t[n] = []), t[n].push(r);
      }
    }), t;
  }
  function w4(e3, t, r = "", n = yS(e3)) {
    return (n[r] || []).map((a) => {
      let i = { hasErrorBoundary: a.id === "root" || a.module.ErrorBoundary != null, id: a.id, path: a.path, middleware: a.module.middleware, loader: a.module.loader ? async (o) => {
        let l = y4(o.request, "X-React-Router-Prerender-Data");
        if (l != null) {
          let u = l && decodeURI(l);
          _l(u, "Missing prerendered data for route");
          let c = new TextEncoder().encode(u), d = new ReadableStream({ start(v) {
            v.enqueue(c), v.close();
          } }), h = (await Ha(d, global)).value;
          if (h && Nr in h) {
            let v = h[Nr], y = { status: v.status };
            throw v.reload ? Ku(v.redirect, y) : v.replace ? Qu(v.redirect, y) : Oa(v.redirect, y);
          } else {
            _l(h && a.id in h, "Unable to decode prerendered data");
            let v = h[a.id];
            return _l("data" in v, "Unable to process prerendered data"), v.data;
          }
        }
        return await t4(a.module.loader, o, t);
      } : void 0, action: a.module.action ? (o) => t4(a.module.action, o, t) : void 0, handle: a.module.handle };
      return a.index ? { index: true, ...i } : { caseSensitive: a.caseSensitive, children: w4(e3, t, a.id, n), ...i };
    });
  }
  function r4(e3) {
    return wn(JSON.stringify(e3));
  }
  function o0(e3, t) {
    return wS(e3, (r) => {
      let n = t.routes[r.route.id];
      return _l(n, `Route with id "${r.route.id}" not found in build`), n.module.headers;
    });
  }
  function wS(e3, t, r) {
    let n = e3.errors ? e3.matches.findIndex((l) => e3.errors[l.route.id]) : -1, a = n >= 0 ? e3.matches.slice(0, n + 1) : e3.matches, i;
    if (n >= 0) {
      let { actionHeaders: l, actionData: s, loaderHeaders: u, loaderData: c } = e3;
      e3.matches.slice(n).some((d) => {
        let f = d.route.id;
        return l[f] && (!s || !s.hasOwnProperty(f)) ? i = l[f] : u[f] && !c.hasOwnProperty(f) && (i = u[f]), i != null;
      });
    }
    let o = new Headers(r);
    return a.reduce((l, s, u) => {
      let { id: c } = s.route, d = e3.loaderHeaders[c] || new Headers(), f = e3.actionHeaders[c] || new Headers(), h = i != null && u === a.length - 1, v = h && i !== d && i !== f, y = t(s);
      if (y == null) {
        let g = new Headers(l);
        return v && Va(i, g), Va(f, g), Va(d, g), g;
      }
      let m = new Headers(typeof y == "function" ? y({ loaderHeaders: d, parentHeaders: l, actionHeaders: f, errorHeaders: h ? i : void 0 }) : y);
      return v && Va(i, m), Va(f, m), Va(d, m), Va(l, m), m;
    }, new Headers(o));
  }
  function Va(e3, t) {
    let r = e3.get("Set-Cookie");
    if (r) {
      let n = (0, x4.splitCookiesString)(r), a = new Set(t.getSetCookie());
      n.forEach((i) => {
        a.has(i) || t.append("Set-Cookie", i);
      });
    }
  }
  function b4(e3, t) {
    let r = e3.headers.get("origin"), n = null, a = null;
    try {
      typeof r == "string" && r !== "null" ? (a = new URL(r), n = a.host) : n = r;
    } catch {
      throw new Error("`origin` header is not a valid URL. Aborting the action.");
    }
    let i = new URL(e3.url), o = a ? a.origin === i.origin : n === i.host;
    if (n && !o && !bS(n, t)) throw new Error("The `request.url` origin does not match `origin` header from a forwarded action request. Aborting the action.");
  }
  function xS(e3, t) {
    let r = e3.split("."), n = t.split(".");
    if (n.length < 1 || r.length < n.length) return false;
    for (; n.length; ) {
      let a = n.pop(), i = r.pop();
      switch (a) {
        case "":
          return false;
        case "*": {
          if (i) continue;
          return false;
        }
        case "**":
          return n.length > 0 ? false : i !== void 0;
        case void 0:
        default:
          if (i !== a) return false;
      }
    }
    return r.length === 0;
  }
  function bS(e3, t = []) {
    return t.some((r) => r && (r === e3 || xS(e3, r)));
  }
  function Al(e3, t, r) {
    t = t || "/";
    let n = new URL(e3.url), a = n.pathname;
    r?.v8_trailingSlashAwareDataRequests ? a.endsWith("/_.data") ? a = a.replace(/_\.data$/, "") : a = a.replace(/\.data$/, "") : (Qe(a, t) === "/_root.data" ? a = t : a.endsWith(".data") && (a = a.replace(/\.data$/, "")), Qe(a, t) !== "/" && a.endsWith("/") && (a = a.slice(0, -1)));
    let i = new URLSearchParams(n.search);
    i.delete("_routes");
    let o = i.toString();
    return o && (o = `?${o}`), { pathname: a, search: o, hash: "" };
  }
  async function kS(e3, t, r, n, a, i, o) {
    try {
      try {
        b4(n, Array.isArray(e3.allowedActionOrigins) ? e3.allowedActionOrigins : []);
      } catch {
        return s(new Error("Bad Request"), 400);
      }
      let c = e3.future.v8_passThroughRequests ? n : new Request(a, { method: n.method, body: n.body, headers: n.headers, signal: n.signal, ...n.body ? { duplex: "half" } : void 0 }), d = await r.query(c, { requestContext: i, skipLoaderErrorBubbling: true, skipRevalidation: true, generateMiddlewareResponse: e3.future.v8_middleware ? async (f) => {
        try {
          let h = await f(c);
          return l(h);
        } catch (h) {
          return s(h);
        }
      } : void 0, normalizePath: (f) => Al(f, e3.basename, e3.future) });
      return l(d);
    } catch (c) {
      return s(c);
    }
    function l(c) {
      return Ae(c) ? c : u(c);
    }
    function s(c, d = 500) {
      return o(c), Tl(n, e3, t, { result: { error: c }, headers: new Headers(), status: d });
    }
    function u(c) {
      let d = o0(c, e3);
      if (xl(c.statusCode) && d.has("Location")) return new Response(null, { status: c.statusCode, headers: d });
      c.errors && (Object.values(c.errors).forEach((h) => {
        (!Ue(h) || h.error) && o(h);
      }), c.errors = kc(c.errors, t));
      let f;
      return c.errors ? f = { error: Object.values(c.errors)[0] } : f = { data: Object.values(c.actionData || {})[0] }, Tl(n, e3, t, { result: f, headers: d, status: c.statusCode });
    }
  }
  async function ES(e3, t, r, n, a, i, o) {
    let l = new URL(n.url).searchParams.get("_routes"), s = l ? new Set(l.split(",")) : null;
    try {
      let f = e3.future.v8_passThroughRequests ? n : new Request(a, { headers: n.headers, signal: n.signal }), h = await r.query(f, { requestContext: i, filterMatchesToLoad: (v) => !s || s.has(v.route.id), skipLoaderErrorBubbling: true, generateMiddlewareResponse: e3.future.v8_middleware ? async (v) => {
        try {
          let y = await v(f);
          return u(y);
        } catch (y) {
          return c(y);
        }
      } : void 0, normalizePath: (v) => Al(v, e3.basename, e3.future) });
      return u(h);
    } catch (f) {
      return c(f);
    }
    function u(f) {
      return Ae(f) ? f : d(f);
    }
    function c(f) {
      return o(f), Tl(n, e3, t, { result: { error: f }, headers: new Headers(), status: 500 });
    }
    function d(f) {
      let h = o0(f, e3);
      if (xl(f.statusCode) && h.has("Location")) return new Response(null, { status: f.statusCode, headers: h });
      f.errors && (Object.values(f.errors).forEach((m) => {
        (!Ue(m) || m.error) && o(m);
      }), f.errors = kc(f.errors, t));
      let v = {}, y = new Set(f.matches.filter((m) => s ? s.has(m.route.id) : m.route.loader != null).map((m) => m.route.id));
      if (f.errors) for (let [m, g] of Object.entries(f.errors)) v[m] = { error: g };
      for (let [m, g] of Object.entries(f.loaderData)) !(m in v) && y.has(m) && (v[m] = { data: g });
      return Tl(n, e3, t, { result: v, headers: h, status: f.statusCode });
    }
  }
  function Tl(e3, t, r, { result: n, headers: a, status: i }) {
    let o = new Headers(a);
    return o.set("X-Remix-Response", "yes"), k4.has(i) ? new Response(null, { status: i, headers: o }) : (o.set("Content-Type", "text/x-script"), o.delete("Content-Length"), new Response(t0(n, e3.signal, t.entry.module.streamTimeout, r), { status: i || 200, headers: o }));
  }
  function n4(e3, t, r, n) {
    let a = RS(e3.status, e3.headers, r.basename), i = new Headers(e3.headers);
    return i.delete("Location"), i.set("Content-Type", "text/x-script"), Tl(t, r, n, { result: t.method === "GET" ? { [Nr]: a } : a, headers: i, status: lc });
  }
  function RS(e3, t, r) {
    let n = t.get("Location");
    return r && (n = Qe(n, r) || n), { redirect: n, status: e3, revalidate: t.has("X-Remix-Revalidate") || t.has("Set-Cookie"), reload: t.has("X-Remix-Reload-Document"), replace: t.has("X-Remix-Replace") };
  }
  function t0(e3, t, r, n) {
    let a = new AbortController(), i = setTimeout(() => {
      a.abort(new Error("Server Timeout")), l();
    }, typeof r == "number" ? r : 4950), o = () => {
      a.abort(t.reason), l();
    };
    t.addEventListener("abort", o);
    let l = () => {
      clearTimeout(i), t.removeEventListener("abort", o);
    };
    return d2(e3, { signal: a.signal, onComplete: l, plugins: [(s) => {
      if (s instanceof Error) {
        let { name: u, message: c, stack: d } = n === "production" ? i0(s, n) : s;
        return ["SanitizedError", u, c, d];
      }
      if (s instanceof it) {
        let { data: u, status: c, statusText: d } = s;
        return ["ErrorResponse", u, c, d];
      }
      if (s && typeof s == "object" && Nr in s) return ["SingleFetchRedirect", s[Nr]];
    }], postPlugins: [(s) => {
      if (s && typeof s == "object") return ["SingleFetchClassInstance", Object.fromEntries(Object.entries(s))];
    }, () => ["SingleFetchFallback"]] });
  }
  function a4(e3, t) {
    let r = w4(e3.routes, e3.future), n = mS(t) ? t : "production", a = up(r, { basename: e3.basename, instrumentations: e3.entry.module.instrumentations, future: e3.future }), i = e3.entry.module.handleError || ((l, { request: s }) => {
      n !== "test" && !s.signal.aborted && console.error(Ue(l) && l.error ? l.error : l);
    }), o = async (l, s) => {
      let u = {}, c, d = (p) => {
        t === "development" && Zp()?.processRequestError?.(p), i(p, { context: c, params: u, request: l });
      };
      if (e3.future.v8_middleware) {
        if (s && !(s instanceof mr)) {
          let p = new Error("Invalid `context` value provided to `handleRequest`. When middleware is enabled you must return an instance of `RouterContextProvider` from your `getLoadContext` function.");
          return d(p), Ec(p, n);
        }
        c = s || new mr();
      } else c = s || {};
      let f = new URL(l.url), h = Al(l, e3.basename, e3.future).pathname, v = y4(l, "X-React-Router-SPA-Mode") === "yes";
      if (!e3.ssr) {
        let p = decodeURI(h);
        if (e3.basename && e3.basename !== "/") {
          let w = Qe(p, e3.basename);
          if (w == null) return i(new it(404, "Not Found", `Refusing to prerender the \`${p}\` path because it does not start with the basename \`${e3.basename}\``), { context: c, params: u, request: l }), new Response("Not Found", { status: 404, statusText: "Not Found" });
          p = w;
        }
        if (e3.prerender.length === 0) v = true;
        else if (!e3.prerender.includes(p.replace(/\/$/, "")) && !e3.prerender.includes(p.replace(/[^/]$/, "/"))) {
          if (f.pathname.endsWith(".data")) return i(new it(404, "Not Found", `Refusing to SSR the path \`${p}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`), { context: c, params: u, request: l }), new Response("Not Found", { status: 404, statusText: "Not Found" });
          v = true;
        }
      }
      let y = $p(e3.routeDiscovery.manifestPath, e3.basename);
      if (e3.routeDiscovery.mode === "lazy" && f.pathname === y) try {
        return await SS(e3, a.dataRoutes, a._internalRouteBranches, f);
      } catch (p) {
        return d(p), new Response("Unknown Server Error", { status: 500 });
      }
      let m = m4(e3.routes, a.dataRoutes, a._internalRouteBranches, h, e3.basename);
      m && m.length > 0 && Object.assign(u, m[0].params);
      let g;
      if (f.pathname.endsWith(".data")) g = await CS(n, e3, a, l, h, c, d), Ui(g) && (g = n4(g, l, e3, n)), e3.entry.module.handleDataRequest && (g = await e3.entry.module.handleDataRequest(g, { context: c, params: m ? m[0].params : {}, request: l }), Ui(g) && (g = n4(g, l, e3, n)));
      else if (!v && m && m[m.length - 1].route.module.default == null && m[m.length - 1].route.module.ErrorBoundary == null) g = await NS(n, e3, a, m.slice(-1)[0].route.id, l, c, d);
      else {
        let { pathname: p } = f, w;
        e3.unstable_getCriticalCss ? w = await e3.unstable_getCriticalCss({ pathname: p }) : t === "development" && Zp()?.getCriticalCss && (w = await Zp()?.getCriticalCss?.(p)), g = await DS(n, e3, a, l, c, d, v, w);
      }
      return l.method === "HEAD" ? new Response(null, { headers: g.headers, status: g.status, statusText: g.statusText }) : g;
    };
    return e3.entry.module.instrumentations && (o = iw(o, e3.entry.module.instrumentations.map((l) => l.handler).filter(Boolean))), { serverMode: n, staticHandler: a, errorHandler: i, requestHandler: o };
  }
  async function SS(e3, t, r, n) {
    if (n.toString().length > dc) return new Response(null, { statusText: "Bad Request", status: 400 });
    if (e3.assets.version !== n.searchParams.get("version")) return new Response(null, { status: 204, headers: { "X-Remix-Reload-Document": "true" } });
    let a = {};
    if (n.searchParams.has("paths")) {
      let i = n.searchParams.get("paths") || "", o = new Set(i.split(",").filter(Boolean));
      for (let l of o) {
        l.startsWith("/") || (l = `/${l}`);
        let s = m4(e3.routes, t, r, l, e3.basename);
        if (s) for (let u of s) {
          let c = u.route.id, d = e3.assets.routes[c];
          d && (a[c] = d);
        }
      }
      return Response.json(a, { headers: { "Cache-Control": "public, max-age=31536000, immutable" } });
    }
    return new Response("Invalid Request", { status: 400 });
  }
  async function CS(e3, t, r, n, a, i, o) {
    let l = new URL(n.url);
    return l.pathname = a, Ye(n.method) ? await kS(t, e3, r, n, l, i, o) : await ES(t, e3, r, n, l, i, o);
  }
  async function DS(e3, t, r, n, a, i, o, l) {
    try {
      if (Ye(n.method)) try {
        b4(n, Array.isArray(t.allowedActionOrigins) ? t.allowedActionOrigins : []);
      } catch (c) {
        return i(c), new Response("Bad Request", { status: 400 });
      }
      let u = await r.query(n, { requestContext: a, generateMiddlewareResponse: t.future.v8_middleware ? async (c) => {
        try {
          let d = await c(n);
          return Ae(d) || (d = await s(d, o)), d;
        } catch (d) {
          return i(d), new Response(null, { status: 500 });
        }
      } : void 0, normalizePath: (c) => Al(c, t.basename, t.future) });
      return Ae(u) || (u = await s(u, o)), u;
    } catch (u) {
      return i(u), new Response(null, { status: 500 });
    }
    async function s(u, c) {
      let d = o0(u, t);
      if (k4.has(u.statusCode)) return new Response(null, { status: u.statusCode, headers: d });
      u.errors && (Object.values(u.errors).forEach((m) => {
        (!Ue(m) || m.error) && i(m);
      }), u.errors = kc(u.errors, e3));
      let f = { loaderData: u.loaderData, actionData: u.actionData, errors: u.errors }, h = { basename: t.basename, future: t.future, routeDiscovery: t.routeDiscovery, ssr: t.ssr, isSpaMode: c }, v = { manifest: t.assets, branches: r._internalRouteBranches, routeModules: pS(t.routes), staticHandlerContext: u, criticalCss: l, serverHandoffString: r4({ ...h, criticalCss: l }), serverHandoffStream: t0(f, n.signal, t.entry.module.streamTimeout, e3), renderMeta: {}, future: t.future, ssr: t.ssr, routeDiscovery: t.routeDiscovery, isSpaMode: c, serializeError: (m) => p4(m, e3) }, y = t.entry.module.default;
      try {
        return await y(n, u.statusCode, d, v, a);
      } catch (m) {
        i(m);
        let g = m;
        if (Ae(m)) try {
          let w = await LS(m);
          g = new it(m.status, m.statusText, w);
        } catch {
        }
        u = cp(r.dataRoutes, u, g), u.errors && (u.errors = kc(u.errors, e3));
        let p = { loaderData: u.loaderData, actionData: u.actionData, errors: u.errors };
        v = { ...v, staticHandlerContext: u, serverHandoffString: r4(h), serverHandoffStream: t0(p, n.signal, t.entry.module.streamTimeout, e3), renderMeta: {} };
        try {
          return await y(n, u.statusCode, d, v, a);
        } catch (w) {
          return i(w), Ec(w, e3);
        }
      }
    }
  }
  async function NS(e3, t, r, n, a, i, o) {
    try {
      let u = await r.queryRoute(a, { routeId: n, requestContext: i, generateMiddlewareResponse: t.future.v8_middleware ? async (c) => {
        try {
          let d = await c(a);
          return l(d);
        } catch (d) {
          return s(d);
        }
      } : void 0, normalizePath: (c) => Al(c, t.basename, t.future) });
      return l(u);
    } catch (u) {
      return s(u);
    }
    function l(u) {
      return Ae(u) ? u : typeof u == "string" ? new Response(u) : Response.json(u);
    }
    function s(u) {
      if (Ae(u)) return u;
      if (Ue(u)) return o(u), MS(u, e3);
      if (u instanceof Error && u.message === "Expected a response from queryRoute") {
        let c = new Error("Expected a Response to be returned from resource route handler");
        return o(c), Ec(c, e3);
      }
      return o(u), Ec(u, e3);
    }
  }
  function MS(e3, t) {
    return Response.json(p4(e3.error || new Error("Unexpected Server Error"), t), { status: e3.status, statusText: e3.statusText });
  }
  function Ec(e3, t) {
    let r = "Unexpected Server Error";
    return t !== "production" && (r += `

${String(e3)}`), new Response(r, { status: 500, headers: { "Content-Type": "text/plain" } });
  }
  function LS(e3) {
    let t = e3.headers.get("Content-Type");
    return t && /\bapplication\/json\b/.test(t) ? e3.body == null ? null : e3.json() : e3.text();
  }
  function Jp(e3) {
    return `__flash_${e3}__`;
  }
  function l0({ cookie: e3, createData: t, readData: r, updateData: n, deleteData: a }) {
    let i = Cc(e3) ? e3 : Sc(e3?.name || "__session", e3);
    return S4(i), { async getSession(o, l) {
      let s = o && await i.parse(o, l), u = s && await r(s);
      return Dc(u || {}, s || "");
    }, async commitSession(o, l) {
      let { id: s, data: u } = o, c = l?.maxAge != null ? new Date(Date.now() + l.maxAge * 1e3) : l?.expires != null ? l.expires : i.expires;
      return s ? await n(s, u, c) : s = await t(u, c), i.serialize(s, l);
    }, async destroySession(o, l) {
      return await a(o.id), i.serialize("", { ...l, maxAge: void 0, expires: /* @__PURE__ */ new Date(0) });
    } };
  }
  function S4(e3) {
    Bi(e3.isSigned, `The "${e3.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information.`);
  }
  function C4({ cookie: e3 } = {}) {
    let t = Cc(e3) ? e3 : Sc(e3?.name || "__session", e3);
    return S4(t), { async getSession(r, n) {
      return Dc(r && await t.parse(r, n) || {});
    }, async commitSession(r, n) {
      let a = await t.serialize(r.data, n);
      if (a.length > 4096) throw new Error("Cookie length will exceed browser maximum. Length: " + a.length);
      return a;
    }, async destroySession(r, n) {
      return t.serialize("", { ...n, maxAge: void 0, expires: /* @__PURE__ */ new Date(0) });
    } };
  }
  function D4({ cookie: e3 } = {}) {
    let t = /* @__PURE__ */ new Map();
    return l0({ cookie: e3, async createData(r, n) {
      let a = Math.random().toString(36).substring(2, 10);
      return t.set(a, { data: r, expires: n }), a;
    }, async readData(r) {
      if (t.has(r)) {
        let { data: n, expires: a } = t.get(r);
        if (!a || a > /* @__PURE__ */ new Date()) return n;
        a && t.delete(r);
      }
      return null;
    }, async updateData(r, n, a) {
      t.set(r, { data: n, expires: a });
    }, async deleteData(r) {
      t.delete(r);
    } });
  }
  function N4(e3, ...t) {
    let r = t[0], n = PS(e3).replace(/\/:([\w-]+)(\?)?/g, (a, i, o) => {
      let l = o === void 0, s = r?.[i];
      if (l && s === void 0) throw new Error(`Path '${e3}' requires param '${i}' but it was not provided`);
      return s === void 0 ? "" : "/" + s;
    });
    if (e3.endsWith("*")) {
      let a = r?.["*"];
      a !== void 0 && (n += "/" + a);
    }
    return n || "/";
  }
  function PS(e3) {
    let t = e3.length - 1, r = e3[t];
    if (r !== "*" && r !== "/") return e3;
    for (t--; t >= 0 && e3[t] === "/"; t--) ;
    return e3.slice(0, t + 1);
  }
  function o4(e3) {
    let t = new TextDecoder(), r, n = new Promise((s) => r = s), a = false, i = [], o = null;
    function l(s) {
      for (let u of i) {
        let c = t.decode(u, { stream: true });
        c.endsWith(i4) && (c = c.slice(0, -i4.length)), s.enqueue(r0.encode(c));
      }
      i.length = 0, o = null;
    }
    return new TransformStream({ transform(s, u) {
      i.push(s), !o && (o = setTimeout(async () => {
        l(u), a || (a = true, _S(e3, u).catch((c) => u.error(c)).then(r));
      }, 0));
    }, async flush(s) {
      await n, o && (clearTimeout(o), l(s)), s.enqueue(r0.encode("</body></html>"));
    } });
  }
  async function _S(e3, t) {
    let r = new TextDecoder("utf-8", { fatal: true }), n = e3.getReader();
    try {
      let i;
      for (; (i = await n.read()) && !i.done; ) {
        let o = i.value;
        try {
          e0(JSON.stringify(r.decode(o, { stream: true })), t);
        } catch {
          let s = JSON.stringify(btoa(String.fromCodePoint(...o)));
          e0(`Uint8Array.from(atob(${s}), m => m.codePointAt(0))`, t);
        }
      }
    } finally {
      n.releaseLock();
    }
    let a = r.decode();
    a.length && e0(JSON.stringify(a), t);
  }
  function e0(e3, t) {
    t.enqueue(r0.encode(`<script>${TS(`(self.__FLIGHT_DATA||=[]).push(${e3})`)}<\/script>`));
  }
  function TS(e3) {
    return e3.replace(/<!--/g, "<\\!--").replace(/<\/(script)/gi, "</\\$1");
  }
  function l4({ renderAppShell: e3, title: t, children: r }) {
    return e3 ? pt.default.createElement("html", { lang: "en" }, pt.default.createElement("head", null, pt.default.createElement("meta", { charSet: "utf-8" }), pt.default.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" }), pt.default.createElement("title", null, t)), pt.default.createElement("body", null, pt.default.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, r))) : r;
  }
  function L4({ error: e3, renderAppShell: t }) {
    console.error(e3);
    let r = pt.default.createElement("script", { dangerouslySetInnerHTML: { __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      ` } });
    if (Ue(e3)) return pt.default.createElement(l4, { renderAppShell: t, title: "Unhandled Thrown Response!" }, pt.default.createElement("h1", { style: { fontSize: "24px" } }, e3.status, " ", e3.statusText), Vr ? r : null);
    let n;
    if (e3 instanceof Error) n = e3;
    else {
      let a = e3 == null ? "Unknown Error" : typeof e3 == "object" && "toString" in e3 ? e3.toString() : JSON.stringify(e3);
      n = new Error(a);
    }
    return pt.default.createElement(l4, { renderAppShell: t, title: "Application Error!" }, pt.default.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), pt.default.createElement("pre", { style: { padding: "2rem", background: "hsla(10, 50%, 50%, 0.1)", color: "red", overflow: "auto" } }, n.stack), r);
  }
  function P4({ hasRootLayout: e3 }) {
    let t = ja();
    if (e3 === void 0) throw new Error("Missing 'hasRootLayout' prop");
    return pt.default.createElement(L4, { renderAppShell: !e3, error: t });
  }
  function AS(e3) {
    let t = {};
    for (let r of e3.matches) _4(t, r);
    return t;
  }
  function _4(e3, t) {
    t = Array.isArray(t) ? t : [t];
    for (let r of t) e3[r.id] = { links: r.links, meta: r.meta, default: FS };
  }
  function OS(e3) {
    if (u4) return u4(e3);
    throw new Error("React Router v7 requires React 19+ for RSC features.");
  }
  async function T4({ request: e3, serverResponse: t, createFromReadableStream: r, renderHTML: n, hydrate: a = true }) {
    let i = new URL(e3.url);
    if (zS(i) || IS(i) || e3.headers.has("rsc-action-id") || t.headers.get("React-Router-Resource") === "true") return t;
    if (!t.body) throw new Error("Missing body in server response");
    let s = t.clone(), u = null;
    a && (u = t.clone());
    let c = t.body, d, f = [], h = () => d ? new ReadableStream({ start(p) {
      d.forEach((w) => p.enqueue(w)), f.push(p);
    } }) : (d = [], c.pipeThrough(new TransformStream({ transform(p, w) {
      d.push(p), w.enqueue(p), f.forEach((b) => b.enqueue(p));
    }, flush() {
      f.forEach((p) => p.close()), f = [];
    } }))), v = null, y = () => {
      let p = Promise.resolve(r(h()));
      return Object.defineProperties(p, { _deepestRenderedBoundaryId: { get() {
        return v;
      }, set(w) {
        v = w;
      } }, formState: { get() {
        return p.then((w) => w.type === "render" ? w.formState : void 0);
      } } });
    }, m, g;
    try {
      if (!s.body) throw new Error("Failed to clone server response");
      let p = await r(s.body);
      if (t.status === lc && p.type === "redirect") {
        if (gr(p.location)) throw new Error("Invalid redirect location");
        let P = new Headers(t.headers);
        return P.delete("Content-Encoding"), P.delete("Content-Length"), P.delete("Content-Type"), P.delete("X-Remix-Response"), P.set("Location", p.location), new Response(u?.body || "", { headers: P, status: p.status, statusText: t.statusText });
      }
      let w = new Headers(), b = t.status, E = t.statusText, S = await n(y, { onError(P) {
        if (typeof P == "object" && P && "digest" in P && typeof P.digest == "string") {
          if (m = Xu(P.digest), m) return P.digest;
          let A = Zu(P.digest);
          if (A) return g = A, b = A.status, E = A.statusText, P.digest;
        }
      }, onHeaders(P) {
        for (let [A, L] of P) w.append(A, L);
      } }), R = new Headers(w);
      for (let [P, A] of t.headers) R.append(P, A);
      if (R.set("Content-Type", "text/html; charset=utf-8"), m) {
        if (gr(m.location)) throw new Error("Invalid redirect location");
        return R.set("Location", m.location), new Response(S, { status: m.status, headers: R });
      }
      let x = new TransformStream({ flush(P) {
        if (m) {
          if (gr(m.location)) return;
          P.enqueue(new TextEncoder().encode(`<meta http-equiv="refresh" content="0;url=${wn(m.location)}"/>`));
        }
      } });
      if (!a) return new Response(S.pipeThrough(x), { status: b, statusText: E, headers: R });
      if (!u?.body) throw new Error("Failed to clone server response");
      let M = S.pipeThrough(o4(u.body)).pipeThrough(x);
      return new Response(M, { status: b, statusText: E, headers: R });
    } catch (p) {
      if (p instanceof Response) return p;
      if (m) {
        if (gr(m.location)) throw new Error("Invalid redirect location");
        return new Response(`Redirect: ${m.location}`, { status: m.status, headers: { Location: m.location } });
      }
      try {
        let w = g ?? p, [b, E] = Ue(w) ? [w.status, w.statusText] : [500, ""], S, R = new Headers(), x = await n(() => {
          let B = Promise.resolve(r(h())).then((j) => Object.assign(j, { status: b, errors: v ? { [v]: w } : {} }));
          return Object.defineProperties(B, { _deepestRenderedBoundaryId: { get() {
            return v;
          }, set(j) {
            v = j;
          } }, formState: { get() {
            return B.then((j) => j.type === "render" ? j.formState : void 0);
          } } });
        }, { onError(L) {
          if (typeof L == "object" && L && "digest" in L && typeof L.digest == "string") {
            if (S = Xu(L.digest), S) return L.digest;
            let B = Zu(L.digest);
            if (B) return b = B.status, E = B.statusText, L.digest;
          }
        }, onHeaders(L) {
          for (let [B, j] of L) R.append(B, j);
        } }), M = new Headers(R);
        for (let [L, B] of t.headers) M.append(L, B);
        if (M.set("Content-Type", "text/html; charset=utf-8"), S) {
          if (gr(S.location)) throw new Error("Invalid redirect location");
          return M.set("Location", S.location), new Response(x, { status: S.status, headers: M });
        }
        let P = new TransformStream({ flush(L) {
          if (S) {
            if (gr(S.location)) return;
            L.enqueue(new TextEncoder().encode(`<meta http-equiv="refresh" content="0;url=${wn(S.location)}"/>`));
          }
        } });
        if (!a) return new Response(x.pipeThrough(P), { status: b, statusText: E, headers: M });
        if (!u?.body) throw new Error("Failed to clone server response");
        let A = x.pipeThrough(o4(u.body)).pipeThrough(P);
        return new Response(A, { status: b, statusText: E, headers: M });
      } catch {
      }
      throw p;
    }
  }
  function A4({ getPayload: e3 }) {
    let t = e3(), r = OS(t);
    if (r.type === "redirect") throw gr(r.location) ? new Error("Invalid redirect location") : new Response(null, { status: r.status, headers: { Location: r.location } });
    if (r.type !== "render") return null;
    let n = { ...r.loaderData };
    for (let l of r.matches) aa(l.id, l.clientLoader, l.hasLoader, false) && (l.hydrateFallbackElement || !l.hasLoader) && delete n[l.id];
    let a = { get _deepestRenderedBoundaryId() {
      return t._deepestRenderedBoundaryId ?? null;
    }, set _deepestRenderedBoundaryId(l) {
      t._deepestRenderedBoundaryId = l;
    }, actionData: r.actionData, actionHeaders: {}, basename: r.basename, errors: r.errors, loaderData: n, loaderHeaders: {}, location: r.location, statusCode: 200, matches: r.matches.map((l) => ({ params: l.params, pathname: l.pathname, pathnameBase: l.pathnameBase, route: { id: l.id, action: l.hasAction || !!l.clientAction, handle: l.handle, hasErrorBoundary: l.hasErrorBoundary, loader: l.hasLoader || !!l.clientLoader, index: l.index, path: l.path, shouldRevalidate: l.shouldRevalidate } })) }, i = Ll(r.matches.reduceRight((l, s) => {
      let u = { id: s.id, action: s.hasAction || !!s.clientAction, element: s.element, errorElement: s.errorElement, handle: s.handle, hasErrorBoundary: !!s.errorElement, hydrateFallbackElement: s.hydrateFallbackElement, index: s.index, loader: s.hasLoader || !!s.clientLoader, path: s.path, shouldRevalidate: s.shouldRevalidate };
      return l.length > 0 && (u.children = l), [u];
    }, []), a), o = { future: { v8_middleware: false, v8_trailingSlashAwareDataRequests: true, v8_passThroughRequests: true }, isSpaMode: false, ssr: true, criticalCss: "", manifest: { routes: {}, version: "1", url: "", entry: { module: "", imports: [] } }, routeDiscovery: r.routeDiscovery.mode === "initial" ? { mode: "initial", manifestPath: s4 } : { mode: "lazy", manifestPath: r.routeDiscovery.manifestPath || s4 }, routeModules: AS(r) };
    return Zi.createElement(bl.Provider, { value: true }, Zi.createElement(M4, { location: r.location }, Zi.createElement(vr.Provider, { value: o }, Zi.createElement(Ml, { context: a, router: i, hydrate: false, nonce: r.nonce }))));
  }
  function zS(e3) {
    return e3.pathname.endsWith(".rsc");
  }
  function IS(e3) {
    return e3.pathname.endsWith(".manifest");
  }
  function Nc({ state: e3, routes: t, getRouteInfo: r, location: n, basename: a, isSpaMode: i }) {
    let o = { ...e3, loaderData: { ...e3.loaderData } }, l = Yi(t, n, a);
    if (l) for (let s of l) {
      let u = s.route.id, c = r(u);
      aa(u, c.clientLoader, c.hasLoader, i) && (c.hasHydrateFallback || !c.hasLoader) ? delete o.loaderData[u] : c.hasLoader || (o.loaderData[u] = null);
    }
    return o;
  }
  function s0(e3) {
    return F4.createElement(Cl, { flushSync: $4.flushSync, ...e3 });
  }
  function jS() {
    if (!K && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
      if (window.__reactRouterManifest.sri === true) {
        let e3 = document.querySelector("script[rr-importmap]");
        if (e3?.textContent) try {
          window.__reactRouterManifest.sri = JSON.parse(e3.textContent).integrity;
        } catch (t) {
          console.error("Failed to parse import map", t);
        }
      }
      K = { context: window.__reactRouterContext, manifest: window.__reactRouterManifest, routeModules: window.__reactRouterRouteModules, stateDecodingPromise: void 0, router: void 0, routerInitialized: false };
    }
  }
  function US({ getContext: e3, instrumentations: t }) {
    if (jS(), !K) throw new Error("You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`");
    let r = K;
    if (!K.stateDecodingPromise) {
      let o = K.context.stream;
      q(o, "No stream found for single fetch decoding"), K.context.stream = void 0, K.stateDecodingPromise = Ha(o, window).then((l) => {
        K.context.state = l.value, r.stateDecodingPromise.value = true;
      }).catch((l) => {
        r.stateDecodingPromise.error = l;
      });
    }
    if (K.stateDecodingPromise.error) throw K.stateDecodingPromise.error;
    if (!K.stateDecodingPromise.value) throw K.stateDecodingPromise;
    let n = Ba(K.manifest.routes, K.routeModules, K.context.state, K.context.ssr, K.context.isSpaMode), a;
    if (K.context.isSpaMode) {
      let { loaderData: o } = K.context.state;
      K.manifest.routes.root?.hasLoader && o && "root" in o && (a = { loaderData: { root: o.root } });
    } else a = Nc({ state: K.context.state, routes: n, getRouteInfo: (o) => ({ clientLoader: K.routeModules[o]?.clientLoader, hasLoader: K.manifest.routes[o]?.hasLoader === true, hasHydrateFallback: K.routeModules[o]?.HydrateFallback != null }), location: window.location, basename: window.__reactRouterContext?.basename, isSpaMode: K.context.isSpaMode });
    window.history.state && window.history.state.masked && window.history.replaceState({ ...window.history.state, masked: void 0 }, "");
    let i = za({ routes: n, history: Wi(), basename: K.context.basename, getContext: e3, hydrationData: a, hydrationRouteProperties: Ua, instrumentations: t, mapRouteProperties: kn, future: { v8_passThroughRequests: K.context.future.v8_passThroughRequests }, dataStrategy: sc(() => i, K.manifest, K.routeModules, K.context.ssr, K.context.basename, K.context.future.v8_trailingSlashAwareDataRequests), patchRoutesOnNavigation: fc(() => i, K.manifest, K.routeModules, K.context.ssr, K.context.routeDiscovery, K.context.isSpaMode, K.context.basename) });
    return K.router = i, i.state.initialized && (K.routerInitialized = true, i.initialize()), i.createRoutesForHMR = cc, window.__reactRouterDataRouter = i, i;
  }
  function O4(e3) {
    Fl || (Fl = US({ getContext: e3.getContext, instrumentations: e3.instrumentations }));
    let [t, r] = ot.useState(void 0);
    ot.useEffect(() => {
    }, []), ot.useEffect(() => {
    }, [t]);
    let [n, a] = ot.useState(Fl.state.location);
    return ot.useLayoutEffect(() => {
      K && K.router && !K.routerInitialized && (K.routerInitialized = true, K.router.initialize());
    }, []), ot.useLayoutEffect(() => {
      if (K && K.router) return K.router.subscribe((i) => {
        i.location !== n && a(i.location);
      });
    }, [n]), q(K, "ssrInfo unavailable for HydratedRouter"), hc(Fl, K.manifest, K.routeModules, K.context.ssr, K.context.routeDiscovery, K.context.isSpaMode), ot.createElement(ot.Fragment, null, ot.createElement(vr.Provider, { value: { manifest: K.manifest, routeModules: K.routeModules, future: K.context.future, criticalCss: t, ssr: K.context.ssr, isSpaMode: K.context.isSpaMode, routeDiscovery: K.context.routeDiscovery } }, ot.createElement(Qi, { location: n }, ot.createElement(s0, { router: Fl, useTransitions: e3.useTransitions, onError: e3.onError }))), ot.createElement(ot.Fragment, null));
  }
  function Y4(e3) {
    var t, r, n = "";
    if (typeof e3 == "string" || typeof e3 == "number") n += e3;
    else if (typeof e3 == "object") if (Array.isArray(e3)) {
      var a = e3.length;
      for (t = 0; t < a; t++) e3[t] && (r = Y4(e3[t])) && (n && (n += " "), n += r);
    } else for (r in e3) e3[r] && (n && (n += " "), n += r);
    return n;
  }
  function q4() {
    for (var e3, t, r = 0, n = "", a = arguments.length; r < a; r++) (e3 = arguments[r]) && (t = Y4(e3)) && (n && (n += " "), n += t);
    return n;
  }
  function eC() {
    let e3 = 0, t, r, n = "";
    for (; e3 < arguments.length; ) (t = arguments[e3++]) && (r = K4(t)) && (n && (n += " "), n += r);
    return n;
  }
  function U4(e3, ...t) {
    let r, n, a, i = o;
    function o(s) {
      let u = t.reduce((c, d) => d(c), e3());
      return r = XS(u), n = r.cache.get, a = r.cache.set, i = l, l(s);
    }
    function l(s) {
      let u = n(s);
      if (u) return u;
      let c = JS(s, r);
      return a(s, c), c;
    }
    return function() {
      return i(eC.apply(null, arguments));
    };
  }
  function f0(...e3) {
    return RC(q4(e3));
  }
  function B4(e3, t) {
    if (typeof e3 == "function") return e3(t);
    e3 != null && (e3.current = t);
  }
  function SC(...e3) {
    return (t) => {
      let r = false, n = e3.map((a) => {
        let i = B4(a, t);
        return !r && typeof i == "function" && (r = true), i;
      });
      if (r) return () => {
        for (let a = 0; a < n.length; a++) {
          let i = n[a];
          typeof i == "function" ? i() : B4(e3[a], null);
        }
      };
    };
  }
  function DC(e3) {
    return typeof e3 == "object" && e3 !== null && "then" in e3;
  }
  function Z4(e3) {
    return e3 != null && typeof e3 == "object" && "$$typeof" in e3 && e3.$$typeof === CC && "_payload" in e3 && DC(e3._payload);
  }
  function NC(e3) {
    let t = MC(e3), r = Xe.forwardRef((n, a) => {
      let { children: i, ...o } = n;
      Z4(i) && typeof Mc == "function" && (i = Mc(i._payload));
      let l = Xe.Children.toArray(i), s = l.find(PC);
      if (s) {
        let u = s.props.children, c = l.map((d) => d === s ? Xe.Children.count(u) > 1 ? Xe.Children.only(null) : Xe.isValidElement(u) ? u.props.children : null : d);
        return (0, d0.jsx)(t, { ...o, ref: a, children: Xe.isValidElement(u) ? Xe.cloneElement(u, void 0, c) : null });
      }
      return (0, d0.jsx)(t, { ...o, ref: a, children: i });
    });
    return r.displayName = `${e3}.Slot`, r;
  }
  function MC(e3) {
    let t = Xe.forwardRef((r, n) => {
      let { children: a, ...i } = r;
      if (Z4(a) && typeof Mc == "function" && (a = Mc(a._payload)), Xe.isValidElement(a)) {
        let o = TC(a), l = _C(i, a.props);
        return a.type !== Xe.Fragment && (l.ref = n ? SC(n, o) : o), Xe.cloneElement(a, l);
      }
      return Xe.Children.count(a) > 1 ? Xe.Children.only(null) : null;
    });
    return t.displayName = `${e3}.SlotClone`, t;
  }
  function PC(e3) {
    return Xe.isValidElement(e3) && typeof e3.type == "function" && "__radixId" in e3.type && e3.type.__radixId === LC;
  }
  function _C(e3, t) {
    let r = { ...t };
    for (let n in t) {
      let a = e3[n], i = t[n];
      /^on[A-Z]/.test(n) ? a && i ? r[n] = (...o) => {
        let l = i(...o);
        return a(...o), l;
      } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...i } : n === "className" && (r[n] = [a, i].filter(Boolean).join(" "));
    }
    return { ...e3, ...r };
  }
  function TC(e3) {
    let t = Object.getOwnPropertyDescriptor(e3.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
    return r ? e3.ref : (t = Object.getOwnPropertyDescriptor(e3, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e3.props.ref : e3.props.ref || e3.ref);
  }
  function OC({ variant: e3 = "primary", fullWidth: t = false, large: r = false, className: n }) {
    return f0("m-px box-border inline-flex h-[var(--ds-control-compact)] cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap border font-text text-sizeBody font-medium leading-none transition-[background-color,border-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.98]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-foreground4", "disabled:cursor-default disabled:border-transparent disabled:bg-ds-muted disabled:text-ds-foreground4 disabled:shadow-none", r ? "h-[var(--ds-control)] rounded-[var(--ds-radius)] px-3.5" : "rounded-[var(--ds-radius-compact)] px-2.5", t && "flex w-[calc(100%-2px)]", $C[e3], n);
  }
  function Yx(e3) {
    return t8.get((e3 ?? "").toLowerCase().split("-")[0]) ?? qc;
  }
  function qx(e3) {
    return r8.has((e3 ?? "").toLowerCase().split("-")[0]) ? "rtl" : "auto";
  }
  function xe() {
    return (0, Gl.useContext)(Gc);
  }
  function W0(e3) {
    let t = (0, Gl.useContext)(Gc);
    return e3 ? Yx(e3) : t;
  }
  function Gx() {
    let [e3, t] = (0, He.useState)({ ready: false, isOwnerUser: false });
    return (0, He.useEffect)(() => {
      let r = false, n = $c();
      if (!n?.request) {
        t({ ready: true, isOwnerUser: false });
        return;
      }
      return n.request("context", null).then((a) => {
        r || t({ ready: true, isOwnerUser: a.isOwnerUser === true });
      }), () => {
        r = true;
      };
    }, []), e3;
  }
  function n8(e3, t) {
    let r = xe(), [n, a] = (0, He.useState)({ scope: { key: e3, initialValue: t }, value: t, status: "loading", ready: false });
    n.scope.key !== e3 && a({ scope: { key: e3, initialValue: t }, value: t, status: "loading", ready: false });
    let { scope: i, value: o, status: l, ready: s } = n, u = (0, He.useRef)(null), c = (0, He.useCallback)((h) => {
      a((v) => v.scope === i ? { ...v, ...h } : v);
    }, [i]);
    (0, He.useEffect)(() => {
      let h = { scope: i, value: i.initialValue, hydrated: false, sequence: 0 };
      u.current = h;
      let v = $c(), y = (m) => {
        if (u.current !== h) return;
        let g = i.initialValue;
        try {
          typeof m.value == "string" && (g = JSON.parse(m.value));
        } catch {
          m = { status: "invalid" };
        }
        h.value = g, h.hydrated = m.status === "saved" || m.status === "memory", c({ value: g, status: m.status ?? "memory", ready: true });
      };
      return v?.request ? v.request("local.read", { key: i.key }).then(y) : y({ status: "memory" }), () => {
        u.current === h && (u.current = null);
      };
    }, [i, c]);
    let d = (0, He.useCallback)((h) => {
      let v = u.current;
      if (!s || v?.scope !== i) return;
      let y = typeof h == "function" ? h(v.value) : h;
      v.value = y;
      let m = ++v.sequence, g;
      try {
        if (g = JSON.stringify(y), g === void 0) throw new Error("Invalid local state");
      } catch {
        c({ value: y, status: "invalid" });
        return;
      }
      let p = $c();
      if (!p?.request || !v.hydrated) {
        c({ value: y, status: "memory" });
        return;
      }
      c({ value: y, status: "saving" }), p.request("local.write", { key: i.key, value: g }).then((w) => {
        u.current === v && v.sequence === m && c({ status: w.status ?? "unknown" });
      });
    }, [i, s, c]), f = l === "loading" ? r.loadingState : l === "saving" ? r.savingState : l === "saved" ? r.savedState : r.unsavedState;
    return [o, d, { ready: s, status: l, message: f }];
  }
  function Kx() {
    let e3 = xe(), [t, r] = (0, He.useState)("idle"), [n, a] = (0, He.useState)(0), i = (0, He.useRef)(null), o = (0, He.useRef)(null), l = (0, He.useRef)(0), s = (0, He.useRef)(true);
    (0, He.useEffect)(() => (s.current = true, () => {
      s.current = false;
    }), []), (0, He.useEffect)(() => {
      if (n <= 0) return;
      let h = setTimeout(() => a(Math.max(0, l.current - Date.now())), Math.min(1e3, n));
      return () => clearTimeout(h);
    }, [n]);
    let u = (0, He.useCallback)((h) => {
      if (o.current) return o.current;
      if (Date.now() < l.current) return Promise.resolve({ status: "rate_limited", retryAfterMs: l.current - Date.now() });
      let v = $c();
      if (!v?.request) return i.current = null, r("unavailable"), Promise.resolve({ status: "unavailable" });
      r("sending");
      let y = v.request("wake", h).then((m) => {
        if (!s.current) return m;
        let g = m.status ?? "unknown";
        r(g);
        let p = m.retryAfterMs ?? 0;
        return l.current = Date.now() + p, a(p), (g === "accepted" || g === "forbidden" || g === "invalid" || g === "conflict" || g === "canceled" || g === "unavailable") && (i.current = null), m;
      }).finally(() => {
        o.current = null;
      });
      return o.current = y, y;
    }, []), c = (0, He.useCallback)((h) => {
      if (o.current) return o.current;
      if (i.current) return Promise.resolve({ status: "retry_required" });
      let v;
      try {
        if (v = JSON.stringify(h.content), v === void 0 || new TextEncoder().encode(v).length > 16 * 1024) throw new Error("Invalid wake content");
      } catch {
        return r("invalid"), Promise.resolve({ status: "invalid" });
      }
      let y = { operationId: crypto.randomUUID(), content: v };
      return i.current = y, u(y);
    }, [u]), d = (0, He.useCallback)(() => i.current ? u(i.current) : Promise.resolve({ status: "idle" }), [u]), f = t === "idle" ? "" : t === "sending" ? e3.sending : t === "accepted" ? e3.wakeAccepted : t === "rate_limited" ? n > 0 ? e3.wakeWait(Math.ceil(n / 1e3)) : e3.wakeRetryNow : t === "unknown" ? e3.wakeUnconfirmed : t === "forbidden" ? e3.wakeForbidden : t === "canceled" ? e3.wakeCanceled : t === "invalid" || t === "conflict" ? e3.wakeFailed : e3.wakeUnavailable;
    return { wakeAgent: c, retry: d, busy: t === "sending", status: t, message: f, retryAfterMs: n, canRetry: t === "unknown" || t === "rate_limited" };
  }
  function o8() {
    return { values: {}, nodes: { [a8]: { type: i8, props: {}, children: [] } } };
  }
  function l8(e3, t) {
    return Object.keys(e3.nodes).find((r) => e3.nodes[r].children.includes(t));
  }
  function Zx(e3, t) {
    let r = e3[t];
    delete e3[t];
    for (let n of r.children) Zx(e3, n);
  }
  function s8(e3, t) {
    if (t.op === "set") return { ...e3, values: { ...e3.values, [t.key]: t.value } };
    if (t.op === "add") {
      if (e3.nodes[t.id]) return e3;
      let a = { ...e3.nodes, [t.id]: { type: t.type, props: t.props ?? {}, children: [] } };
      if (!t.parent) return { ...e3, nodes: a };
      let i = e3.nodes[t.parent], o = t.after ? i.children.indexOf(t.after) + 1 : i.children.length;
      return a[t.parent] = { ...i, children: [...i.children.slice(0, o), t.id, ...i.children.slice(o)] }, { ...e3, nodes: a };
    }
    if (t.op === "update") {
      let a = { ...e3.nodes[t.id].props };
      for (let [i, o] of Object.entries(t.props)) o === null ? delete a[i] : a[i] = o;
      return { ...e3, nodes: { ...e3.nodes, [t.id]: { ...e3.nodes[t.id], props: a } } };
    }
    if (!e3.nodes[t.id]) return e3;
    let r = { ...e3.nodes }, n = l8(e3, t.id);
    return n && (r[n] = { ...r[n], children: r[n].children.filter((a) => a !== t.id) }), Zx(r, t.id), { ...e3, nodes: r };
  }
  function Ac(e3, t) {
    return e3 == null || t == null ? NaN : e3 < t ? -1 : e3 > t ? 1 : e3 >= t ? 0 : NaN;
  }
  function u8(e3, t) {
    return e3 == null || t == null ? NaN : t < e3 ? -1 : t > e3 ? 1 : t >= e3 ? 0 : NaN;
  }
  function tb(e3) {
    let t, r, n;
    e3.length !== 2 ? (t = Ac, r = (l, s) => Ac(e3(l), s), n = (l, s) => e3(l) - s) : (t = e3 === Ac || e3 === u8 ? e3 : c8, r = e3, n = e3);
    function a(l, s, u = 0, c = l.length) {
      if (u < c) {
        if (t(s, s) !== 0) return c;
        do {
          let d = u + c >>> 1;
          r(l[d], s) < 0 ? u = d + 1 : c = d;
        } while (u < c);
      }
      return u;
    }
    function i(l, s, u = 0, c = l.length) {
      if (u < c) {
        if (t(s, s) !== 0) return c;
        do {
          let d = u + c >>> 1;
          r(l[d], s) <= 0 ? u = d + 1 : c = d;
        } while (u < c);
      }
      return u;
    }
    function o(l, s, u = 0, c = l.length) {
      let d = a(l, s, u, c - 1);
      return d > u && n(l[d - 1], s) > -n(l[d], s) ? d - 1 : d;
    }
    return { left: a, center: o, right: i };
  }
  function c8() {
    return 0;
  }
  function d8(e3) {
    return e3 === null ? NaN : +e3;
  }
  function nx({ _intern: e3, _key: t }, r) {
    let n = t(r);
    return e3.has(n) ? e3.get(n) : r;
  }
  function p8({ _intern: e3, _key: t }, r) {
    let n = t(r);
    return e3.has(n) ? e3.get(n) : (e3.set(n, r), r);
  }
  function m8({ _intern: e3, _key: t }, r) {
    let n = t(r);
    return e3.has(n) && (r = e3.get(n), e3.delete(n)), r;
  }
  function g8(e3) {
    return e3 !== null && typeof e3 == "object" ? e3.valueOf() : e3;
  }
  function v8(e3, t, r) {
    var n, a = -1, i, o, l;
    if (t = +t, e3 = +e3, r = +r, e3 === t && r > 0) return [e3];
    if ((n = t < e3) && (i = e3, e3 = t, t = i), (l = nb(e3, t, r)) === 0 || !isFinite(l)) return [];
    if (l > 0) {
      let s = Math.round(e3 / l), u = Math.round(t / l);
      for (s * l < e3 && ++s, u * l > t && --u, o = new Array(i = u - s + 1); ++a < i; ) o[a] = (s + a) * l;
    } else {
      l = -l;
      let s = Math.round(e3 * l), u = Math.round(t * l);
      for (s / l < e3 && ++s, u / l > t && --u, o = new Array(i = u - s + 1); ++a < i; ) o[a] = (s + a) / l;
    }
    return n && o.reverse(), o;
  }
  function nb(e3, t, r) {
    var n = (t - e3) / Math.max(0, r), a = Math.floor(Math.log(n) / Math.LN10), i = n / Math.pow(10, a);
    return a >= 0 ? (i >= N0 ? 10 : i >= M0 ? 5 : i >= L0 ? 2 : 1) * Math.pow(10, a) : -Math.pow(10, -a) / (i >= N0 ? 10 : i >= M0 ? 5 : i >= L0 ? 2 : 1);
  }
  function y8(e3, t, r) {
    var n = Math.abs(t - e3) / Math.max(0, r), a = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)), i = n / a;
    return i >= N0 ? a *= 10 : i >= M0 ? a *= 5 : i >= L0 && (a *= 2), t < e3 ? -a : a;
  }
  function w8(e3, t, r) {
    e3 = +e3, t = +t, r = (a = arguments.length) < 2 ? (t = e3, e3 = 0, 1) : a < 3 ? 1 : +r;
    for (var n = -1, a = Math.max(0, Math.ceil((t - e3) / r)) | 0, i = new Array(a); ++n < a; ) i[n] = e3 + n * r;
    return i;
  }
  function Y0(e3, t) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(e3);
        break;
      default:
        this.range(t).domain(e3);
        break;
    }
    return this;
  }
  function ab() {
    var e3 = new rx(), t = [], r = [], n = ax;
    function a(i) {
      let o = e3.get(i);
      if (o === void 0) {
        if (n !== ax) return n;
        e3.set(i, o = t.push(i) - 1);
      }
      return r[o % r.length];
    }
    return a.domain = function(i) {
      if (!arguments.length) return t.slice();
      t = [], e3 = new rx();
      for (let o of i) e3.has(o) || e3.set(o, t.push(o) - 1);
      return a;
    }, a.range = function(i) {
      return arguments.length ? (r = Array.from(i), a) : r.slice();
    }, a.unknown = function(i) {
      return arguments.length ? (n = i, a) : n;
    }, a.copy = function() {
      return ab(t, r).unknown(n);
    }, Y0.apply(a, arguments), a;
  }
  function ib() {
    var e3 = ab().unknown(void 0), t = e3.domain, r = e3.range, n = 0, a = 1, i, o, l = false, s = 0, u = 0, c = 0.5;
    delete e3.unknown;
    function d() {
      var f = t().length, h = a < n, v = h ? a : n, y = h ? n : a;
      i = (y - v) / Math.max(1, f - s + u * 2), l && (i = Math.floor(i)), v += (y - v - i * (f - s)) * c, o = i * (1 - s), l && (v = Math.round(v), o = Math.round(o));
      var m = w8(f).map(function(g) {
        return v + i * g;
      });
      return r(h ? m.reverse() : m);
    }
    return e3.domain = function(f) {
      return arguments.length ? (t(f), d()) : t();
    }, e3.range = function(f) {
      return arguments.length ? ([n, a] = f, n = +n, a = +a, d()) : [n, a];
    }, e3.rangeRound = function(f) {
      return [n, a] = f, n = +n, a = +a, l = true, d();
    }, e3.bandwidth = function() {
      return o;
    }, e3.step = function() {
      return i;
    }, e3.round = function(f) {
      return arguments.length ? (l = !!f, d()) : l;
    }, e3.padding = function(f) {
      return arguments.length ? (s = Math.min(1, u = +f), d()) : s;
    }, e3.paddingInner = function(f) {
      return arguments.length ? (s = Math.min(1, f), d()) : s;
    }, e3.paddingOuter = function(f) {
      return arguments.length ? (u = +f, d()) : u;
    }, e3.align = function(f) {
      return arguments.length ? (c = Math.max(0, Math.min(1, f)), d()) : c;
    }, e3.copy = function() {
      return ib(t(), [n, a]).round(l).paddingInner(s).paddingOuter(u).align(c);
    }, Y0.apply(d(), arguments);
  }
  function so(e3, t, r) {
    e3.prototype = t.prototype = r, r.constructor = e3;
  }
  function Kl(e3, t) {
    var r = Object.create(e3.prototype);
    for (var n in t) r[n] = t[n];
    return r;
  }
  function fa() {
  }
  function ox() {
    return this.rgb().formatHex();
  }
  function D8() {
    return this.rgb().formatHex8();
  }
  function N8() {
    return ob(this).formatHsl();
  }
  function lx() {
    return this.rgb().formatRgb();
  }
  function Bl(e3) {
    var t, r;
    return e3 = (e3 + "").trim().toLowerCase(), (t = x8.exec(e3)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? sx(t) : r === 3 ? new st(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Lc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Lc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = b8.exec(e3)) ? new st(t[1], t[2], t[3], 1) : (t = k8.exec(e3)) ? new st(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = E8.exec(e3)) ? Lc(t[1], t[2], t[3], t[4]) : (t = R8.exec(e3)) ? Lc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = S8.exec(e3)) ? dx(t[1], t[2] / 100, t[3] / 100, 1) : (t = C8.exec(e3)) ? dx(t[1], t[2] / 100, t[3] / 100, t[4]) : ix.hasOwnProperty(e3) ? sx(ix[e3]) : e3 === "transparent" ? new st(NaN, NaN, NaN, 0) : null;
  }
  function sx(e3) {
    return new st(e3 >> 16 & 255, e3 >> 8 & 255, e3 & 255, 1);
  }
  function Lc(e3, t, r, n) {
    return n <= 0 && (e3 = t = r = NaN), new st(e3, t, r, n);
  }
  function q0(e3) {
    return e3 instanceof fa || (e3 = Bl(e3)), e3 ? (e3 = e3.rgb(), new st(e3.r, e3.g, e3.b, e3.opacity)) : new st();
  }
  function Oc(e3, t, r, n) {
    return arguments.length === 1 ? q0(e3) : new st(e3, t, r, n ?? 1);
  }
  function st(e3, t, r, n) {
    this.r = +e3, this.g = +t, this.b = +r, this.opacity = +n;
  }
  function ux() {
    return `#${Ya(this.r)}${Ya(this.g)}${Ya(this.b)}`;
  }
  function M8() {
    return `#${Ya(this.r)}${Ya(this.g)}${Ya(this.b)}${Ya((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function cx() {
    let e3 = zc(this.opacity);
    return `${e3 === 1 ? "rgb(" : "rgba("}${qa(this.r)}, ${qa(this.g)}, ${qa(this.b)}${e3 === 1 ? ")" : `, ${e3})`}`;
  }
  function zc(e3) {
    return isNaN(e3) ? 1 : Math.max(0, Math.min(1, e3));
  }
  function qa(e3) {
    return Math.max(0, Math.min(255, Math.round(e3) || 0));
  }
  function Ya(e3) {
    return e3 = qa(e3), (e3 < 16 ? "0" : "") + e3.toString(16);
  }
  function dx(e3, t, r, n) {
    return n <= 0 ? e3 = t = r = NaN : r <= 0 || r >= 1 ? e3 = t = NaN : t <= 0 && (e3 = NaN), new _r(e3, t, r, n);
  }
  function ob(e3) {
    if (e3 instanceof _r) return new _r(e3.h, e3.s, e3.l, e3.opacity);
    if (e3 instanceof fa || (e3 = Bl(e3)), !e3) return new _r();
    if (e3 instanceof _r) return e3;
    e3 = e3.rgb();
    var t = e3.r / 255, r = e3.g / 255, n = e3.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, l = i - a, s = (i + a) / 2;
    return l ? (t === i ? o = (r - n) / l + (r < n) * 6 : r === i ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= s < 0.5 ? i + a : 2 - i - a, o *= 60) : l = s > 0 && s < 1 ? 0 : o, new _r(o, l, s, e3.opacity);
  }
  function P0(e3, t, r, n) {
    return arguments.length === 1 ? ob(e3) : new _r(e3, t, r, n ?? 1);
  }
  function _r(e3, t, r, n) {
    this.h = +e3, this.s = +t, this.l = +r, this.opacity = +n;
  }
  function fx(e3) {
    return e3 = (e3 || 0) % 360, e3 < 0 ? e3 + 360 : e3;
  }
  function Pc(e3) {
    return Math.max(0, Math.min(1, e3 || 0));
  }
  function y0(e3, t, r) {
    return (e3 < 60 ? t + (r - t) * e3 / 60 : e3 < 180 ? r : e3 < 240 ? t + (r - t) * (240 - e3) / 60 : t) * 255;
  }
  function pb(e3) {
    if (e3 instanceof Qr) return new Qr(e3.l, e3.a, e3.b, e3.opacity);
    if (e3 instanceof Sn) return mb(e3);
    e3 instanceof st || (e3 = q0(e3));
    var t = k0(e3.r), r = k0(e3.g), n = k0(e3.b), a = w0((0.2225045 * t + 0.7168786 * r + 0.0606169 * n) / cb), i, o;
    return t === r && r === n ? i = o = a : (i = w0((0.4360747 * t + 0.3850649 * r + 0.1430804 * n) / ub), o = w0((0.0139322 * t + 0.0971045 * r + 0.7141733 * n) / db)), new Qr(116 * a - 16, 500 * (i - a), 200 * (a - o), e3.opacity);
  }
  function _0(e3, t, r, n) {
    return arguments.length === 1 ? pb(e3) : new Qr(e3, t, r, n ?? 1);
  }
  function Qr(e3, t, r, n) {
    this.l = +e3, this.a = +t, this.b = +r, this.opacity = +n;
  }
  function w0(e3) {
    return e3 > L8 ? Math.pow(e3, 1 / 3) : e3 / hb + fb;
  }
  function x0(e3) {
    return e3 > io ? e3 * e3 * e3 : hb * (e3 - fb);
  }
  function b0(e3) {
    return 255 * (e3 <= 31308e-7 ? 12.92 * e3 : 1.055 * Math.pow(e3, 1 / 2.4) - 0.055);
  }
  function k0(e3) {
    return (e3 /= 255) <= 0.04045 ? e3 / 12.92 : Math.pow((e3 + 0.055) / 1.055, 2.4);
  }
  function P8(e3) {
    if (e3 instanceof Sn) return new Sn(e3.h, e3.c, e3.l, e3.opacity);
    if (e3 instanceof Qr || (e3 = pb(e3)), e3.a === 0 && e3.b === 0) return new Sn(NaN, 0 < e3.l && e3.l < 100 ? 0 : NaN, e3.l, e3.opacity);
    var t = Math.atan2(e3.b, e3.a) * sb;
    return new Sn(t < 0 ? t + 360 : t, Math.sqrt(e3.a * e3.a + e3.b * e3.b), e3.l, e3.opacity);
  }
  function T0(e3, t, r, n) {
    return arguments.length === 1 ? P8(e3) : new Sn(e3, t, r, n ?? 1);
  }
  function Sn(e3, t, r, n) {
    this.h = +e3, this.c = +t, this.l = +r, this.opacity = +n;
  }
  function mb(e3) {
    if (isNaN(e3.h)) return new Qr(e3.l, 0, 0, e3.opacity);
    var t = e3.h * lb;
    return new Qr(e3.l, Math.cos(t) * e3.c, Math.sin(t) * e3.c, e3.opacity);
  }
  function _8(e3) {
    if (e3 instanceof Ga) return new Ga(e3.h, e3.s, e3.l, e3.opacity);
    e3 instanceof st || (e3 = q0(e3));
    var t = e3.r / 255, r = e3.g / 255, n = e3.b / 255, a = (mx * n + hx * t - px * r) / (mx + hx - px), i = n - a, o = (Vl * (r - a) - K0 * i) / Qc, l = Math.sqrt(o * o + i * i) / (Vl * a * (1 - a)), s = l ? Math.atan2(o, i) * sb - 120 : NaN;
    return new Ga(s < 0 ? s + 360 : s, l, a, e3.opacity);
  }
  function A0(e3, t, r, n) {
    return arguments.length === 1 ? _8(e3) : new Ga(e3, t, r, n ?? 1);
  }
  function Ga(e3, t, r, n) {
    this.h = +e3, this.s = +t, this.l = +r, this.opacity = +n;
  }
  function vb(e3, t, r, n, a) {
    var i = e3 * e3, o = i * e3;
    return ((1 - 3 * e3 + 3 * i - o) * t + (4 - 6 * i + 3 * o) * r + (1 + 3 * e3 + 3 * i - 3 * o) * n + o * a) / 6;
  }
  function T8(e3) {
    var t = e3.length - 1;
    return function(r) {
      var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t), a = e3[n], i = e3[n + 1], o = n > 0 ? e3[n - 1] : 2 * a - i, l = n < t - 1 ? e3[n + 2] : 2 * i - a;
      return vb((r - n / t) * t, o, a, i, l);
    };
  }
  function A8(e3) {
    var t = e3.length;
    return function(r) {
      var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t), a = e3[(n + t - 1) % t], i = e3[n % t], o = e3[(n + 1) % t], l = e3[(n + 2) % t];
      return vb((r - n / t) * t, a, i, o, l);
    };
  }
  function yb(e3, t) {
    return function(r) {
      return e3 + r * t;
    };
  }
  function F8(e3, t, r) {
    return e3 = Math.pow(e3, r), t = Math.pow(t, r) - e3, r = 1 / r, function(n) {
      return Math.pow(e3 + n * t, r);
    };
  }
  function Q0(e3, t) {
    var r = t - e3;
    return r ? yb(e3, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : Xc(isNaN(e3) ? t : e3);
  }
  function $8(e3) {
    return (e3 = +e3) == 1 ? ut : function(t, r) {
      return r - t ? F8(t, r, e3) : Xc(isNaN(t) ? r : t);
    };
  }
  function ut(e3, t) {
    var r = t - e3;
    return r ? yb(e3, r) : Xc(isNaN(e3) ? t : e3);
  }
  function wb(e3) {
    return function(t) {
      var r = t.length, n = new Array(r), a = new Array(r), i = new Array(r), o, l;
      for (o = 0; o < r; ++o) l = Oc(t[o]), n[o] = l.r || 0, a[o] = l.g || 0, i[o] = l.b || 0;
      return n = e3(n), a = e3(a), i = e3(i), l.opacity = 1, function(s) {
        return l.r = n(s), l.g = a(s), l.b = i(s), l + "";
      };
    };
  }
  function O8(e3, t) {
    t || (t = []);
    var r = e3 ? Math.min(t.length, e3.length) : 0, n = t.slice(), a;
    return function(i) {
      for (a = 0; a < r; ++a) n[a] = e3[a] * (1 - i) + t[a] * i;
      return n;
    };
  }
  function z8(e3) {
    return ArrayBuffer.isView(e3) && !(e3 instanceof DataView);
  }
  function I8(e3, t) {
    var r = t ? t.length : 0, n = e3 ? Math.min(r, e3.length) : 0, a = new Array(n), i = new Array(r), o;
    for (o = 0; o < n; ++o) a[o] = X0(e3[o], t[o]);
    for (; o < r; ++o) i[o] = t[o];
    return function(l) {
      for (o = 0; o < n; ++o) i[o] = a[o](l);
      return i;
    };
  }
  function j8(e3, t) {
    var r = /* @__PURE__ */ new Date();
    return e3 = +e3, t = +t, function(n) {
      return r.setTime(e3 * (1 - n) + t * n), r;
    };
  }
  function jc(e3, t) {
    return e3 = +e3, t = +t, function(r) {
      return e3 * (1 - r) + t * r;
    };
  }
  function U8(e3, t) {
    var r = {}, n = {}, a;
    (e3 === null || typeof e3 != "object") && (e3 = {}), (t === null || typeof t != "object") && (t = {});
    for (a in t) a in e3 ? r[a] = X0(e3[a], t[a]) : n[a] = t[a];
    return function(i) {
      for (a in r) n[a] = r[a](i);
      return n;
    };
  }
  function H8(e3) {
    return function() {
      return e3;
    };
  }
  function B8(e3) {
    return function(t) {
      return e3(t) + "";
    };
  }
  function V8(e3, t) {
    var r = $0.lastIndex = E0.lastIndex = 0, n, a, i, o = -1, l = [], s = [];
    for (e3 = e3 + "", t = t + ""; (n = $0.exec(e3)) && (a = E0.exec(t)); ) (i = a.index) > r && (i = t.slice(r, i), l[o] ? l[o] += i : l[++o] = i), (n = n[0]) === (a = a[0]) ? l[o] ? l[o] += a : l[++o] = a : (l[++o] = null, s.push({ i: o, x: jc(n, a) })), r = E0.lastIndex;
    return r < t.length && (i = t.slice(r), l[o] ? l[o] += i : l[++o] = i), l.length < 2 ? s[0] ? B8(s[0].x) : H8(t) : (t = s.length, function(u) {
      for (var c = 0, d; c < t; ++c) l[(d = s[c]).i] = d.x(u);
      return l.join("");
    });
  }
  function X0(e3, t) {
    var r = typeof t, n;
    return t == null || r === "boolean" ? Xc(t) : (r === "number" ? jc : r === "string" ? (n = Bl(t)) ? (t = n, F0) : V8 : t instanceof Bl ? F0 : t instanceof Date ? j8 : z8(t) ? O8 : Array.isArray(t) ? I8 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? U8 : jc)(e3, t);
  }
  function xb(e3, t) {
    return e3 = +e3, t = +t, function(r) {
      return Math.round(e3 * (1 - r) + t * r);
    };
  }
  function bb(e3) {
    return function(t, r) {
      var n = e3((t = P0(t)).h, (r = P0(r)).h), a = ut(t.s, r.s), i = ut(t.l, r.l), o = ut(t.opacity, r.opacity);
      return function(l) {
        return t.h = n(l), t.s = a(l), t.l = i(l), t.opacity = o(l), t + "";
      };
    };
  }
  function q8(e3, t) {
    var r = ut((e3 = _0(e3)).l, (t = _0(t)).l), n = ut(e3.a, t.a), a = ut(e3.b, t.b), i = ut(e3.opacity, t.opacity);
    return function(o) {
      return e3.l = r(o), e3.a = n(o), e3.b = a(o), e3.opacity = i(o), e3 + "";
    };
  }
  function kb(e3) {
    return function(t, r) {
      var n = e3((t = T0(t)).h, (r = T0(r)).h), a = ut(t.c, r.c), i = ut(t.l, r.l), o = ut(t.opacity, r.opacity);
      return function(l) {
        return t.h = n(l), t.c = a(l), t.l = i(l), t.opacity = o(l), t + "";
      };
    };
  }
  function Eb(e3) {
    return (function t(r) {
      r = +r;
      function n(a, i) {
        var o = e3((a = A0(a)).h, (i = A0(i)).h), l = ut(a.s, i.s), s = ut(a.l, i.l), u = ut(a.opacity, i.opacity);
        return function(c) {
          return a.h = o(c), a.s = l(c), a.l = s(Math.pow(c, r)), a.opacity = u(c), a + "";
        };
      }
      return n.gamma = t, n;
    })(1);
  }
  function Z8(e3) {
    return function() {
      return e3;
    };
  }
  function J8(e3) {
    return +e3;
  }
  function no(e3) {
    return e3;
  }
  function O0(e3, t) {
    return (t -= e3 = +e3) ? function(r) {
      return (r - e3) / t;
    } : Z8(isNaN(t) ? NaN : 0.5);
  }
  function e7(e3, t) {
    var r;
    return e3 > t && (r = e3, e3 = t, t = r), function(n) {
      return Math.max(e3, Math.min(t, n));
    };
  }
  function t7(e3, t, r) {
    var n = e3[0], a = e3[1], i = t[0], o = t[1];
    return a < n ? (n = O0(a, n), i = r(o, i)) : (n = O0(n, a), i = r(i, o)), function(l) {
      return i(n(l));
    };
  }
  function r7(e3, t, r) {
    var n = Math.min(e3.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
    for (e3[n] < e3[0] && (e3 = e3.slice().reverse(), t = t.slice().reverse()); ++o < n; ) a[o] = O0(e3[o], e3[o + 1]), i[o] = r(t[o], t[o + 1]);
    return function(l) {
      var s = h8(e3, l, 1, n) - 1;
      return i[s](a[s](l));
    };
  }
  function n7(e3, t) {
    return t.domain(e3.domain()).range(e3.range()).interpolate(e3.interpolate()).clamp(e3.clamp()).unknown(e3.unknown());
  }
  function a7() {
    var e3 = gx, t = gx, r = X0, n, a, i, o = no, l, s, u;
    function c() {
      var f = Math.min(e3.length, t.length);
      return o !== no && (o = e7(e3[0], e3[f - 1])), l = f > 2 ? r7 : t7, s = u = null, d;
    }
    function d(f) {
      return f == null || isNaN(f = +f) ? i : (s || (s = l(e3.map(n), t, r)))(n(o(f)));
    }
    return d.invert = function(f) {
      return o(a((u || (u = l(t, e3.map(n), jc)))(f)));
    }, d.domain = function(f) {
      return arguments.length ? (e3 = Array.from(f, J8), c()) : e3.slice();
    }, d.range = function(f) {
      return arguments.length ? (t = Array.from(f), c()) : t.slice();
    }, d.rangeRound = function(f) {
      return t = Array.from(f), r = xb, c();
    }, d.clamp = function(f) {
      return arguments.length ? (o = f ? true : no, c()) : o !== no;
    }, d.interpolate = function(f) {
      return arguments.length ? (r = f, c()) : r;
    }, d.unknown = function(f) {
      return arguments.length ? (i = f, d) : i;
    }, function(f, h) {
      return n = f, a = h, c();
    };
  }
  function i7() {
    return a7()(no, no);
  }
  function o7(e3) {
    return Math.abs(e3 = Math.round(e3)) >= 1e21 ? e3.toLocaleString("en").replace(/,/g, "") : e3.toString(10);
  }
  function Uc(e3, t) {
    if ((r = (e3 = t ? e3.toExponential(t - 1) : e3.toExponential()).indexOf("e")) < 0) return null;
    var r, n = e3.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e3.slice(r + 1)];
  }
  function lo(e3) {
    return e3 = Uc(Math.abs(e3)), e3 ? e3[1] : NaN;
  }
  function l7(e3, t) {
    return function(r, n) {
      for (var a = r.length, i = [], o = 0, l = e3[0], s = 0; a > 0 && l > 0 && (s + l + 1 > n && (l = Math.max(1, n - s)), i.push(r.substring(a -= l, a + l)), !((s += l + 1) > n)); ) l = e3[o = (o + 1) % e3.length];
      return i.reverse().join(t);
    };
  }
  function s7(e3) {
    return function(t) {
      return t.replace(/[0-9]/g, function(r) {
        return e3[+r];
      });
    };
  }
  function Hc(e3) {
    if (!(t = u7.exec(e3))) throw new Error("invalid format: " + e3);
    var t;
    return new Z0({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
  }
  function Z0(e3) {
    this.fill = e3.fill === void 0 ? " " : e3.fill + "", this.align = e3.align === void 0 ? ">" : e3.align + "", this.sign = e3.sign === void 0 ? "-" : e3.sign + "", this.symbol = e3.symbol === void 0 ? "" : e3.symbol + "", this.zero = !!e3.zero, this.width = e3.width === void 0 ? void 0 : +e3.width, this.comma = !!e3.comma, this.precision = e3.precision === void 0 ? void 0 : +e3.precision, this.trim = !!e3.trim, this.type = e3.type === void 0 ? "" : e3.type + "";
  }
  function c7(e3) {
    e: for (var t = e3.length, r = 1, n = -1, a; r < t; ++r) switch (e3[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e3[r]) break e;
        n > 0 && (n = 0);
        break;
    }
    return n > 0 ? e3.slice(0, n) + e3.slice(a + 1) : e3;
  }
  function d7(e3, t) {
    var r = Uc(e3, t);
    if (!r) return e3 + "";
    var n = r[0], a = r[1], i = a - (Rb = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
    return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Uc(e3, Math.max(0, t + i - 1))[0];
  }
  function vx(e3, t) {
    var r = Uc(e3, t);
    if (!r) return e3 + "";
    var n = r[0], a = r[1];
    return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
  }
  function wx(e3) {
    return e3;
  }
  function f7(e3) {
    var t = e3.grouping === void 0 || e3.thousands === void 0 ? wx : l7(xx.call(e3.grouping, Number), e3.thousands + ""), r = e3.currency === void 0 ? "" : e3.currency[0] + "", n = e3.currency === void 0 ? "" : e3.currency[1] + "", a = e3.decimal === void 0 ? "." : e3.decimal + "", i = e3.numerals === void 0 ? wx : s7(xx.call(e3.numerals, String)), o = e3.percent === void 0 ? "%" : e3.percent + "", l = e3.minus === void 0 ? "\u2212" : e3.minus + "", s = e3.nan === void 0 ? "NaN" : e3.nan + "";
    function u(d) {
      d = Hc(d);
      var f = d.fill, h = d.align, v = d.sign, y = d.symbol, m = d.zero, g = d.width, p = d.comma, w = d.precision, b = d.trim, E = d.type;
      E === "n" ? (p = true, E = "g") : yx[E] || (w === void 0 && (w = 12), b = true, E = "g"), (m || f === "0" && h === "=") && (m = true, f = "0", h = "=");
      var S = y === "$" ? r : y === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "", R = y === "$" ? n : /[%p]/.test(E) ? o : "", x = yx[E], M = /[defgprs%]/.test(E);
      w = w === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
      function P(A) {
        var L = S, B = R, j, ne, Z;
        if (E === "c") B = x(A) + B, A = "";
        else {
          A = +A;
          var oe = A < 0 || 1 / A < 0;
          if (A = isNaN(A) ? s : x(Math.abs(A), w), b && (A = c7(A)), oe && +A == 0 && v !== "+" && (oe = false), L = (oe ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + L, B = (E === "s" ? bx[8 + Rb / 3] : "") + B + (oe && v === "(" ? ")" : ""), M) {
            for (j = -1, ne = A.length; ++j < ne; ) if (Z = A.charCodeAt(j), 48 > Z || Z > 57) {
              B = (Z === 46 ? a + A.slice(j + 1) : A.slice(j)) + B, A = A.slice(0, j);
              break;
            }
          }
        }
        p && !m && (A = t(A, 1 / 0));
        var Le = L.length + A.length + B.length, ie = Le < g ? new Array(g - Le + 1).join(f) : "";
        switch (p && m && (A = t(ie + A, ie.length ? g - B.length : 1 / 0), ie = ""), h) {
          case "<":
            A = L + A + B + ie;
            break;
          case "=":
            A = L + ie + A + B;
            break;
          case "^":
            A = ie.slice(0, Le = ie.length >> 1) + L + A + B + ie.slice(Le);
            break;
          default:
            A = ie + L + A + B;
            break;
        }
        return i(A);
      }
      return P.toString = function() {
        return d + "";
      }, P;
    }
    function c(d, f) {
      var h = u((d = Hc(d), d.type = "f", d)), v = Math.max(-8, Math.min(8, Math.floor(lo(f) / 3))) * 3, y = Math.pow(10, -v), m = bx[8 + v / 3];
      return function(g) {
        return h(y * g) + m;
      };
    }
    return { format: u, formatPrefix: c };
  }
  function h7(e3) {
    return _c = f7(e3), Sb = _c.format, Cb = _c.formatPrefix, _c;
  }
  function p7(e3) {
    return Math.max(0, -lo(Math.abs(e3)));
  }
  function m7(e3, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(lo(t) / 3))) * 3 - lo(Math.abs(e3)));
  }
  function g7(e3, t) {
    return e3 = Math.abs(e3), t = Math.abs(t) - e3, Math.max(0, lo(t) - lo(e3)) + 1;
  }
  function v7(e3, t, r, n) {
    var a = y8(e3, t, r), i;
    switch (n = Hc(n ?? ",f"), n.type) {
      case "s": {
        var o = Math.max(Math.abs(e3), Math.abs(t));
        return n.precision == null && !isNaN(i = m7(a, o)) && (n.precision = i), Cb(n, o);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        n.precision == null && !isNaN(i = g7(a, Math.max(Math.abs(e3), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
        break;
      }
      case "f":
      case "%": {
        n.precision == null && !isNaN(i = p7(a)) && (n.precision = i - (n.type === "%") * 2);
        break;
      }
    }
    return Sb(n);
  }
  function y7(e3) {
    var t = e3.domain;
    return e3.ticks = function(r) {
      var n = t();
      return v8(n[0], n[n.length - 1], r ?? 10);
    }, e3.tickFormat = function(r, n) {
      var a = t();
      return v7(a[0], a[a.length - 1], r ?? 10, n);
    }, e3.nice = function(r) {
      r == null && (r = 10);
      var n = t(), a = 0, i = n.length - 1, o = n[a], l = n[i], s, u, c = 10;
      for (l < o && (u = o, o = l, l = u, u = a, a = i, i = u); c-- > 0; ) {
        if (u = nb(o, l, r), u === s) return n[a] = o, n[i] = l, t(n);
        if (u > 0) o = Math.floor(o / u) * u, l = Math.ceil(l / u) * u;
        else if (u < 0) o = Math.ceil(o * u) / u, l = Math.floor(l * u) / u;
        else break;
        s = u;
      }
      return e3;
    }, e3;
  }
  function Db() {
    var e3 = i7();
    return e3.copy = function() {
      return n7(e3, Db());
    }, Y0.apply(e3, arguments), y7(e3);
  }
  function mt(e3, t, r, n) {
    function a(i) {
      return e3(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
    }
    return a.floor = (i) => (e3(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e3(i = new Date(i - 1)), t(i, 1), e3(i), i), a.round = (i) => {
      let o = a(i), l = a.ceil(i);
      return i - o < l - i ? o : l;
    }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, l) => {
      let s = [];
      if (i = a.ceil(i), l = l == null ? 1 : Math.floor(l), !(i < o) || !(l > 0)) return s;
      let u;
      do
        s.push(u = /* @__PURE__ */ new Date(+i)), t(i, l), e3(i);
      while (u < i && i < o);
      return s;
    }, a.filter = (i) => mt((o) => {
      if (o >= o) for (; e3(o), !i(o); ) o.setTime(o - 1);
    }, (o, l) => {
      if (o >= o) if (l < 0) for (; ++l <= 0; ) for (; t(o, -1), !i(o); ) ;
      else for (; --l >= 0; ) for (; t(o, 1), !i(o); ) ;
    }), r && (a.count = (i, o) => (R0.setTime(+i), S0.setTime(+o), e3(R0), e3(S0), Math.floor(r(R0, S0))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
  }
  function Xa(e3) {
    return mt((t) => {
      t.setDate(t.getDate() - (t.getDay() + 7 - e3) % 7), t.setHours(0, 0, 0, 0);
    }, (t, r) => {
      t.setDate(t.getDate() + r * 7);
    }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  function Za(e3) {
    return mt((t) => {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e3) % 7), t.setUTCHours(0, 0, 0, 0);
    }, (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    }, (t, r) => (r - t) / 6048e5);
  }
  function _7(e3, t) {
    t.domain && ("nice" in e3 || "quantiles" in e3 || "padding" in e3, e3.domain(t.domain));
  }
  function T7(e3, t) {
    t.range && ("padding" in e3, e3.range(t.range));
  }
  function A7(e3, t) {
    "align" in e3 && "align" in t && typeof t.align < "u" && e3.align(t.align);
  }
  function F7(e3, t) {
    "base" in e3 && "base" in t && typeof t.base < "u" && e3.base(t.base);
  }
  function $7(e3, t) {
    "clamp" in e3 && "clamp" in t && typeof t.clamp < "u" && e3.clamp(t.clamp);
  }
  function O7(e3, t) {
    "constant" in e3 && "constant" in t && typeof t.constant < "u" && e3.constant(t.constant);
  }
  function z7(e3, t) {
    "exponent" in e3 && "exponent" in t && typeof t.exponent < "u" && e3.exponent(t.exponent);
  }
  function I7(e3) {
    switch (e3) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return kx[e3];
      default:
    }
    var t = e3.type, r = e3.gamma, n = kx[t];
    return typeof r > "u" ? n : n.gamma(r);
  }
  function j7(e3, t) {
    if ("interpolate" in t && "interpolate" in e3 && typeof t.interpolate < "u") {
      var r = I7(t.interpolate);
      e3.interpolate(r);
    }
  }
  function B7(e3) {
    var t = e3.tickFormat(1, H7)(U7);
    return t === "2020-02-02 03:04";
  }
  function V7(e3, t) {
    if ("nice" in t && typeof t.nice < "u" && "nice" in e3) {
      var r = t.nice;
      if (typeof r == "boolean") r && e3.nice();
      else if (typeof r == "number") e3.nice(r);
      else {
        var n = e3, a = B7(n);
        if (typeof r == "string") n.nice(a ? Rx[r] : Ex[r]);
        else {
          var i = r.interval, o = r.step, l = (a ? Rx[i] : Ex[i]).every(o);
          l != null && n.nice(l);
        }
      }
    }
  }
  function W7(e3, t) {
    "padding" in e3 && "padding" in t && typeof t.padding < "u" && e3.padding(t.padding), "paddingInner" in e3 && "paddingInner" in t && typeof t.paddingInner < "u" && e3.paddingInner(t.paddingInner), "paddingOuter" in e3 && "paddingOuter" in t && typeof t.paddingOuter < "u" && e3.paddingOuter(t.paddingOuter);
  }
  function Y7(e3, t) {
    if (t.reverse) {
      var r = e3.range().slice().reverse();
      "padding" in e3, e3.range(r);
    }
  }
  function q7(e3, t) {
    "round" in t && typeof t.round < "u" && (t.round && "interpolate" in t && typeof t.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", t) : "round" in e3 ? e3.round(t.round) : "interpolate" in e3 && t.round && e3.interpolate(xb));
  }
  function G7(e3, t) {
    "unknown" in e3 && "unknown" in t && typeof t.unknown < "u" && e3.unknown(t.unknown);
  }
  function K7(e3, t) {
    if ("zero" in t && t.zero === true) {
      var r = e3.domain(), n = r[0], a = r[1], i = a < n, o = i ? [a, n] : [n, a], l = o[0], s = o[1], u = [Math.min(0, l), Math.max(0, s)];
      e3.domain(i ? u.reverse() : u);
    }
  }
  function zb() {
    for (var e3 = arguments.length, t = new Array(e3), r = 0; r < e3; r++) t[r] = arguments[r];
    var n = new Set(t), a = Q7.filter(function(i) {
      return n.has(i);
    });
    return function(i, o) {
      return typeof o < "u" && a.forEach(function(l) {
        X7[l](i, o);
      }), i;
    };
  }
  function J7(e3) {
    return Z7(ib(), e3);
  }
  function Bc(e3) {
    return eD(Db(), e3);
  }
  function j0() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function Ib() {
    return new j0();
  }
  function Tc(e3) {
    return function() {
      return e3;
    };
  }
  function jb(e3) {
    this._context = e3;
  }
  function nD(e3) {
    return new jb(e3);
  }
  function aD(e3) {
    return e3[0];
  }
  function iD(e3) {
    return e3[1];
  }
  function oD() {
    var e3 = aD, t = iD, r = Tc(true), n = null, a = nD, i = null;
    function o(l) {
      var s, u = l.length, c, d = false, f;
      for (n == null && (i = a(f = rD())), s = 0; s <= u; ++s) !(s < u && r(c = l[s], s, l)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e3(c, s, l), +t(c, s, l));
      if (f) return i = null, f + "" || null;
    }
    return o.x = function(l) {
      return arguments.length ? (e3 = typeof l == "function" ? l : Tc(+l), o) : e3;
    }, o.y = function(l) {
      return arguments.length ? (t = typeof l == "function" ? l : Tc(+l), o) : t;
    }, o.defined = function(l) {
      return arguments.length ? (r = typeof l == "function" ? l : Tc(!!l), o) : r;
    }, o.curve = function(l) {
      return arguments.length ? (a = l, n != null && (i = a(n)), o) : a;
    }, o.context = function(l) {
      return arguments.length ? (l == null ? n = i = null : i = a(n = l), o) : n;
    }, o;
  }
  function Sx(e3, t) {
    e3(t);
  }
  function lD(e3) {
    var t = e3 === void 0 ? {} : e3, r = t.x, n = t.y, a = t.defined, i = t.curve, o = oD();
    return r && Sx(o.x, r), n && Sx(o.y, n), a && o.defined(a), i && o.curve(i), o;
  }
  function U0() {
    return U0 = Object.assign ? Object.assign.bind() : function(e3) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e3[n] = r[n]);
      }
      return e3;
    }, U0.apply(this, arguments);
  }
  function cD(e3, t) {
    if (e3 == null) return {};
    var r = {}, n = Object.keys(e3), a, i;
    for (i = 0; i < n.length; i++) a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e3[a]);
    return r;
  }
  function dD(e3) {
    var t = e3.children, r = e3.data, n = r === void 0 ? [] : r, a = e3.x, i = e3.y, o = e3.fill, l = o === void 0 ? "transparent" : o, s = e3.className, u = e3.curve, c = e3.innerRef, d = e3.defined, f = d === void 0 ? function() {
      return true;
    } : d, h = cD(e3, uD), v = lD({ x: a, y: i, defined: f, curve: u });
    return t ? Fc.default.createElement(Fc.default.Fragment, null, t({ path: v })) : Fc.default.createElement("path", U0({ ref: c, className: (0, sD.default)("visx-linepath", s), d: v(n) || "", fill: l, strokeLinecap: "round" }, h));
  }
  function H0() {
    return H0 = Object.assign ? Object.assign.bind() : function(e3) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e3[n] = r[n]);
      }
      return e3;
    }, H0.apply(this, arguments);
  }
  function pD(e3, t) {
    if (e3 == null) return {};
    var r = {}, n = Object.keys(e3), a, i;
    for (i = 0; i < n.length; i++) a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e3[a]);
    return r;
  }
  function Cx(e3) {
    var t = e3.className, r = e3.innerRef, n = pD(e3, hD);
    return Ub.default.createElement("rect", H0({ ref: r, className: (0, fD.default)("visx-bar", t) }, n));
  }
  function Be(e3) {
    let t = (0, Ql.useContext)(Zc);
    return t === null ? {} : Bb(t, { mark: e3 });
  }
  function Hb() {
    return (0, Ql.useContext)(Zc) === null ? {} : { "data-live-mark-text": "" };
  }
  function Bb(e3, t = {}) {
    return t.mark ? { "data-live-id": e3, "data-live-mark": t.mark } : { "data-live-id": e3 };
  }
  function vD(e3 = "photo") {
    return (0, C.jsx)("svg", { className: "file-placeholder-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: Yb[gD.includes(e3) ? e3 : "photo"] });
  }
  function Dn({ variant: e3 = "secondary", compact: t = false, pill: r = false, selected: n, unavailable: a = false, states: i, state: o, className: l, children: s, ...u }) {
    let c = ["file-button", t && "is-compact", r && "is-pill", a && "is-unavailable", l].filter(Boolean).join(" "), d = i && o !== void 0 ? { states: i, state: o } : null, f = d?.states[d.state];
    return (0, he.jsx)("button", { type: "button", ...u, className: c, "data-variant": e3, "data-state": d?.state, "aria-pressed": n, disabled: a || u.disabled || f?.variant === "disabled", children: d ? (0, he.jsx)(FD, { ...d }) : s });
  }
  function td({ label: e3, className: t, ...r }) {
    let n = xe();
    return (0, he.jsx)(Dn, { variant: "ghost", ...r, className: ["file-close", t].filter(Boolean).join(" "), "aria-label": e3 ?? n.close, children: mD });
  }
  function PD(e3, t) {
    let r = document.createElement("textarea");
    r.value = e3, r.setAttribute("readonly", ""), r.style.cssText = "position:fixed;inset-block-start:0;opacity:0;pointer-events:none;font-size:16px";
    let n = document.activeElement;
    (t.closest("dialog") ?? document.body).append(r), r.focus({ preventScroll: true }), r.select(), r.setSelectionRange(0, r.value.length);
    let a = document.activeElement === r && r.selectionStart === 0 && r.selectionEnd === r.value.length, i;
    try {
      i = a && document.execCommand("copy");
    } catch {
      i = false;
    }
    return r.remove(), n?.focus({ preventScroll: true }), i ? Promise.resolve() : Promise.race([Promise.resolve().then(() => navigator.clipboard.writeText(e3)), new Promise((o, l) => setTimeout(l, LD))]);
  }
  function _D({ text: e3, label: t, variant: r = "secondary", compact: n = true }) {
    let a = xe(), [i, o] = (0, Lt.useState)("idle");
    (0, Lt.useEffect)(() => {
      if (i === "idle") return;
      let s = setTimeout(() => o("idle"), MD);
      return () => clearTimeout(s);
    }, [i]);
    let l = { idle: { icon: (0, he.jsx)(CD, { size: 16, strokeWidth: 2, "aria-hidden": "true" }), label: t ?? a.copy }, copied: { icon: (0, he.jsx)(Kb, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: a.copied }, failed: { label: a.copyFailed } };
    return (0, he.jsxs)(he.Fragment, { children: [(0, he.jsx)(Dn, { variant: r, compact: n, states: l, state: i, onClick: (s) => {
      PD(e3, s.currentTarget).then(() => o("copied"), () => o("failed"));
    } }), (0, he.jsx)("span", { className: "file-visually-hidden", role: "status", children: i === "idle" ? "" : l[i].label })] });
  }
  function Nx({ state: e3, className: t, hidden: r = false, faceRef: n }) {
    return (0, he.jsxs)("span", { ref: n, className: t, "aria-hidden": r || void 0, children: [e3.icon, (0, he.jsx)("span", { className: "file-button-label", children: e3.label }), e3.shortLabel && (0, he.jsx)("span", { className: "file-button-label is-short", children: e3.shortLabel })] });
  }
  function FD({ states: e3, state: t }) {
    let r = (0, Lt.useRef)(null), n = (0, Lt.useRef)(null), a = (0, Lt.useRef)(null), [i, o] = (0, Lt.useState)(null);
    return AD(() => {
      let l = n.current.offsetWidth, s = a.current;
      if (a.current = { state: t, width: l }, !s || s.state === t) return;
      let u = r.current;
      u.style.width = `${s.width}px`, u.offsetWidth, u.style.width = `${l}px`, o(s.state);
      let c = setTimeout(() => {
        u.style.width = "", o(null);
      }, TD);
      return () => clearTimeout(c);
    }, [t]), (0, he.jsxs)("span", { ref: r, className: "file-button-slot", children: [i !== null && (0, he.jsx)(Nx, { state: e3[i], className: "file-button-face is-leaving", hidden: true }, `leaving-${i}`), (0, he.jsx)(Nx, { state: e3[t], className: i !== null ? "file-button-face is-entering" : "file-button-face", faceRef: n }, t)] });
  }
  function Qb({ href: e3, variant: t = "secondary", compact: r = false, pill: n = false, children: a }) {
    let i = r5(e3), o = Be(), l = ["file-button", r && "is-compact", n && "is-pill"].filter(Boolean).join(" ");
    if (!i) return (0, he.jsx)("span", { ...o, className: l, "data-variant": t, children: a });
    let s = /^(?:https?:|mailto:|tel:|\/\/)/i.test(i);
    return (0, he.jsxs)("a", { ...o, className: l, "data-variant": t, href: i, target: s ? "_blank" : void 0, rel: "noopener noreferrer", children: [(0, he.jsx)("span", { children: a }), s && (0, he.jsx)(Gb, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" })] });
  }
  function $D({ label: e3, options: t, value: r, onChange: n }) {
    let a = Lt.default.useId();
    return (0, he.jsxs)("div", { className: "file-control", role: "group", "aria-labelledby": a, children: [(0, he.jsx)("span", { id: a, className: "file-control-label", children: e3 }), (0, he.jsx)("div", { className: "file-choice-row", children: t.map((i) => (0, he.jsx)(Dn, { compact: true, selected: i.value === r, unavailable: i.unavailable, onClick: () => n(i.value), children: i.label }, i.value)) })] });
  }
  function OD({ label: e3, value: t, onChange: r, ...n }) {
    let a = Lt.default.useId();
    return (0, he.jsxs)("div", { className: "file-control", children: [(0, he.jsx)("label", { htmlFor: a, className: "file-control-label", children: e3 }), (0, he.jsx)("input", { id: a, className: "file-field", type: "text", value: t, onChange: (i) => r(i.target.value), ...n })] });
  }
  function zD({ label: e3, min: t, max: r, step: n = 1, value: a, onChange: i, describe: o }) {
    let l = Lt.default.useId(), s = `${((a - t) / (r - t || 1) * 100).toFixed(1)}%`;
    return (0, he.jsxs)("div", { className: "file-control", children: [(0, he.jsxs)("div", { className: "file-control-head", children: [(0, he.jsx)("label", { htmlFor: l, className: "file-control-label", children: e3 }), (0, he.jsx)("span", { children: o(a) })] }), (0, he.jsx)("input", { id: l, className: "file-slider", type: "range", min: t, max: r, step: n, value: a, onChange: (u) => i(Number(u.target.value)), style: { "--file-slider-fill": s } })] });
  }
  function nm(e3, t) {
    (0, Xb.useEffect)(() => {
      if (!t) return;
      let r = e3.current, n = r.ownerDocument.activeElement, a = !n.matches(":focus-visible"), i = [];
      for (let o = r.parentElement; o; o = o.parentElement) {
        let l = r.ownerDocument.defaultView.getComputedStyle(o);
        o !== r.ownerDocument.scrollingElement && !["auto", "scroll"].includes(l.overflowY) || (i.push({ element: o, overflow: o.style.getPropertyValue("overflow-y"), priority: o.style.getPropertyPriority("overflow-y"), gutter: o.style.getPropertyValue("scrollbar-gutter"), gutterPriority: o.style.getPropertyPriority("scrollbar-gutter") }), (o === r.ownerDocument.documentElement ? r.ownerDocument.defaultView.innerWidth - o.clientWidth : o.offsetWidth - o.clientWidth - parseFloat(l.borderLeftWidth) - parseFloat(l.borderRightWidth)) > 0 && !l.scrollbarGutter.includes("stable") && o.style.setProperty("scrollbar-gutter", "stable", "important"), o.style.setProperty("overflow-y", "hidden", "important"));
      }
      return r.showModal(), r.focus({ preventScroll: true }), () => {
        r.close();
        for (let { element: o, overflow: l, priority: s, gutter: u, gutterPriority: c } of i) o.style.setProperty("overflow-y", l, s), o.style.setProperty("scrollbar-gutter", u, c);
        n.isConnected && (a && (n.setAttribute("data-quiet-focus", ""), n.addEventListener("blur", () => n.removeAttribute("data-quiet-focus"), { once: true })), n.focus({ preventScroll: true }));
      };
    }, [e3, t]);
  }
  function ID(e3, t, r) {
    let n = Zb(t.scale), a = n === 1 ? jl : { scale: n, x: Mx(t.x, e3.offsetWidth * (n - 1) / 2), y: Mx(t.y, e3.offsetHeight * (n - 1) / 2) };
    return e3.style.transition = r ? "transform 200ms ease-out" : "none", e3.style.transform = `translate(${a.x}px, ${a.y}px) scale(${a.scale})`, a;
  }
  function C0(e3, t, r, n) {
    let a = e3.parentElement.getBoundingClientRect(), i = { x: a.left + e3.offsetLeft + e3.offsetWidth / 2, y: a.top + e3.offsetTop + e3.offsetHeight / 2 }, o = Zb(t), l = o / n.scale;
    return { scale: o, x: n.x + (r.x - i.x - n.x) * (1 - l), y: n.y + (r.y - i.y - n.y) * (1 - l) };
  }
  function rd({ photos: e3, start: t, title: r, detail: n, onClose: a }) {
    let i = xe(), o = (0, Nt.useRef)(null), l = (0, Nt.useRef)(null), s = (0, Nt.useRef)(jl), u = (0, Nt.useRef)(/* @__PURE__ */ new Map()), c = (0, Nt.useRef)(null), d = (0, Nt.useRef)(null), [f, h] = (0, Nt.useState)(t), [v, y] = (0, Nt.useState)(false);
    nm(o, true);
    let m = (0, Nt.useCallback)((R, x) => {
      s.current = ID(l.current, R, x), y(s.current.scale > 1);
    }, []);
    (0, Nt.useEffect)(() => {
      let R = o.current, x = (M) => {
        M.preventDefault(), M.ctrlKey ? m(C0(l.current, s.current.scale * Math.exp(-M.deltaY * 0.01), { x: M.clientX, y: M.clientY }, s.current), false) : s.current.scale > 1 && m({ ...s.current, x: s.current.x - M.deltaX, y: s.current.y - M.deltaY }, false);
      };
      return R.addEventListener("wheel", x, { passive: false }), () => R.removeEventListener("wheel", x);
    }, [m]), (0, Nt.useEffect)(() => {
      let R = o.current, x = R.ownerDocument.activeElement;
      v && x !== R && R.contains(x) && R.focus({ preventScroll: true });
    }, [v]), (0, Nt.useEffect)(() => {
      let R = o.current, x = R.ownerDocument.activeElement;
      (!x || !R.contains(x) || x.matches(":disabled")) && R.focus({ preventScroll: true });
    }, [f]);
    let g = (R) => {
      let x = Math.min(e3.length - 1, Math.max(0, f + R));
      x !== f && (s.current = jl, y(false), h(x));
    }, p = (R) => {
      let x = R.target;
      if (x.closest("button")) return;
      let M = x.closest(".file-viewer-stage") ? d.current : "outside";
      d.current = null, !(M === null || M === "handled") && (s.current.scale > 1 ? m(jl, true) : M === "outside" && a());
    }, w = (R) => {
      if (R.target.closest("button")) return;
      R.preventDefault(), d.current = null;
      try {
        R.currentTarget.setPointerCapture(R.pointerId);
      } catch {
      }
      u.current.set(R.pointerId, { x: R.clientX, y: R.clientY });
      let [x, M] = [...u.current.values()];
      u.current.size === 1 ? c.current = { type: s.current.scale > 1 ? "pan" : "swipe", start: x, origin: s.current, time: Date.now(), onPhoto: R.target === l.current } : u.current.size === 2 && (c.current = { type: "pinch", distance: Lx(x, M), middle: Px(x, M), origin: s.current });
    }, b = (R) => {
      let x = c.current;
      if (!x || !u.current.has(R.pointerId)) return;
      u.current.set(R.pointerId, { x: R.clientX, y: R.clientY });
      let [M, P] = [...u.current.values()];
      if (x.type === "pinch" && P) {
        let A = Px(M, P);
        m(C0(l.current, x.origin.scale * Lx(M, P) / x.distance, A, { scale: x.origin.scale, x: x.origin.x + A.x - x.middle.x, y: x.origin.y + A.y - x.middle.y }), false);
      } else x.type === "pan" && m({ scale: s.current.scale, x: x.origin.x + R.clientX - x.start.x, y: x.origin.y + R.clientY - x.start.y }, false);
    }, E = (R) => {
      if (!u.current.delete(R.pointerId)) return;
      let x = c.current, [M] = [...u.current.values()];
      if (M) {
        x?.type === "pinch" && (c.current = { type: "pan", start: M, origin: s.current, time: Date.now(), onPhoto: true, afterPinch: true });
        return;
      }
      if (c.current = null, !x) return;
      if (x.type === "pinch" || x.afterPinch) {
        s.current.scale < 1.05 && m(jl, true);
        return;
      }
      let P = { x: R.clientX - x.start.x, y: R.clientY - x.start.y }, A = Date.now();
      if (Math.hypot(P.x, P.y) < 10 && A - x.time < 300) {
        x.onPhoto && s.current.scale === 1 ? (d.current = "handled", m(C0(l.current, 4, { x: R.clientX, y: R.clientY }, s.current), true)) : d.current = x.onPhoto ? "photo" : "outside";
        return;
      }
      x.type === "swipe" && Math.abs(P.x) > 40 && Math.abs(P.x) > Math.abs(P.y) && g(P.x < 0 ? 1 : -1);
    }, S = e3[f];
    return (0, tr.jsxs)("dialog", { ref: o, className: "file-viewer", "data-zoomed": v || void 0, "aria-label": i.photosOf(r), tabIndex: -1, onClick: p, onCancel: (R) => {
      R.preventDefault(), R.stopPropagation(), a();
    }, onKeyDown: (R) => {
      R.key === "Escape" ? (R.preventDefault(), R.stopPropagation(), a()) : (R.key === "ArrowRight" || R.key === "ArrowLeft") && (R.preventDefault(), g(R.key === "ArrowRight" ? 1 : -1));
    }, children: [(0, tr.jsx)("div", { className: "file-viewer-bar", children: (0, tr.jsx)(td, { className: "file-viewer-button", onClick: a }) }), (0, tr.jsx)("div", { className: "file-viewer-stage", onPointerDown: w, onPointerMove: b, onPointerUp: E, onPointerCancel: E, onDragStart: (R) => R.preventDefault(), children: (0, tr.jsx)("img", { ref: l, src: S.src, alt: S.alt, draggable: false }, S.src) }), (0, tr.jsxs)("div", { className: "file-viewer-footer", children: [e3.length > 1 && (0, tr.jsxs)("div", { className: "file-viewer-steps", children: [(0, tr.jsx)(Dn, { variant: "ghost", className: "file-viewer-button", "aria-label": i.previousPhoto, disabled: f === 0, onClick: () => g(-1), children: Vb }), (0, tr.jsx)("span", { className: "file-viewer-count", "aria-live": "polite", children: i.photoCount(f + 1, e3.length) }), (0, tr.jsx)(Dn, { variant: "ghost", className: "file-viewer-button", "aria-label": i.nextPhoto, disabled: f === e3.length - 1, onClick: () => g(1), children: Wb })] }), (0, tr.jsxs)("span", { className: "file-viewer-title", children: [r, n && ` \xB7 ${n}`] })] })] });
  }
  function Jb({ atStart: e3, atEnd: t, onPrevious: r, onNext: n }) {
    let a = xe();
    return (0, ca.jsxs)("div", { className: "file-strip-arrows", children: [(0, ca.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": a.previousPhoto, disabled: e3, onClick: r, children: Vb }), (0, ca.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": a.nextPhoto, disabled: t, onClick: n, children: Wb })] });
  }
  function jD(e3) {
    let [t, r] = (0, Ja.useState)(null), n = (0, Ja.useRef)(null);
    (0, Ja.useEffect)(() => {
      let i = e3.current, o = i.ownerDocument.defaultView, l = () => {
        n.current = null;
      }, s = () => {
        n.current !== null && Math.abs(i.scrollLeft - n.current) < 2 && l();
        let u = i.scrollWidth - i.clientWidth;
        r(u < 2 ? null : { atStart: i.scrollLeft < 2, atEnd: i.scrollLeft > u - 2 });
      };
      s(), i.addEventListener("scroll", s, { passive: true });
      for (let u of B0) i.addEventListener(u, l, { passive: true });
      return i.addEventListener("load", s, true), o.addEventListener("resize", s), () => {
        i.removeEventListener("scroll", s);
        for (let u of B0) i.removeEventListener(u, l);
        i.removeEventListener("load", s, true), o.removeEventListener("resize", s);
      };
    }, [e3]);
    let a = (i) => {
      let o = e3.current, l = [...o.children], s = l.map((f) => f.offsetLeft - l[0].offsetLeft), u = n.current ?? o.scrollLeft, c = i > 0 ? s.find((f) => f > u + 2) : [...s].reverse().find((f) => f < u - 2), d = Math.min(o.scrollWidth - o.clientWidth, Math.max(0, c ?? (i > 0 ? o.scrollWidth : 0)));
      n.current = d, o.scrollTo({ left: d, behavior: "smooth" });
    };
    return t && { ...t, onPrevious: () => a(-1), onNext: () => a(1) };
  }
  function e5({ bleed: e3, className: t, children: r, ...n }) {
    let a = (0, Ja.useRef)(null), i = jD(a);
    return (0, ca.jsxs)("div", { className: "file-strip", "data-bleed": e3 || void 0, children: [(0, ca.jsx)("div", { ref: a, ...n, className: [t, e3 && "file-bleed"].filter(Boolean).join(" "), children: r }), i && (0, ca.jsx)(Jb, { ...i })] });
  }
  function nd() {
    let e3 = (0, V0.useRef)(null), t = (0, V0.useRef)(false), r = (n) => {
      e3.current?.pointerId === n.pointerId && (e3.current = null, delete n.currentTarget.dataset.dragging, n.currentTarget.hasPointerCapture(n.pointerId) && n.currentTarget.releasePointerCapture(n.pointerId));
    };
    return { "data-drag-scroll": "", onPointerEnter: (n) => {
      n.currentTarget.toggleAttribute("data-can-drag", n.pointerType === "mouse" && n.currentTarget.scrollWidth > n.currentTarget.clientWidth);
    }, onPointerDown: (n) => {
      t.current = false, !(n.pointerType !== "mouse" || n.button !== 0 || n.currentTarget.scrollWidth <= n.currentTarget.clientWidth) && n.target.closest("[data-drag-scroll], dialog") === n.currentTarget && (e3.current = { pointerId: n.pointerId, startX: n.clientX, scrollLeft: n.currentTarget.scrollLeft, active: false });
    }, onPointerMove: (n) => {
      let a = e3.current;
      if (!a || a.pointerId !== n.pointerId) return;
      let i = n.clientX - a.startX;
      !a.active && Math.abs(i) < 5 || (a.active || (a.active = true, t.current = true, n.currentTarget.dataset.dragging = "", n.currentTarget.setPointerCapture(n.pointerId)), n.preventDefault(), n.currentTarget.scrollLeft = a.scrollLeft - i);
    }, onPointerUp: r, onPointerCancel: r, onLostPointerCapture: r, onPointerLeave: () => {
      e3.current?.active || (e3.current = null);
    }, onDragStart: (n) => n.preventDefault(), onClickCapture: (n) => {
      !t.current || n.detail === 0 || (t.current = false, n.preventDefault(), n.stopPropagation());
    } };
  }
  function Zr(e3) {
    return { objectFit: e3.fit, objectPosition: e3.position, backgroundColor: e3.background };
  }
  function t5({ icon: e3 }) {
    return (0, I.jsx)("span", { className: "file-placeholder", "aria-hidden": "true", children: vD(e3) });
  }
  function UD({ children: e3, className: t }) {
    return (0, I.jsx)("div", { className: t ? `file-ground ${t}` : "file-ground", children: e3 });
  }
  function HD({ children: e3, width: t = "fluid", className: r, ...n }) {
    return (0, I.jsx)(Gc.Provider, { value: W0(n.lang), children: (0, I.jsx)("main", { dir: qx(n.lang), ...n, className: r ? `file-card ${r}` : "file-card", "data-width": t, children: e3 }) });
  }
  function r5(e3) {
    if (/^[#./]/.test(e3)) return e3;
    try {
      return BD.includes(new URL(e3).protocol) ? e3 : void 0;
    } catch {
      return;
    }
  }
  function n5({ title: e3, fact: t, factKnown: r = false, intro: n }) {
    return (0, I.jsxs)("header", { ...Be(), className: "file-header", children: [(0, I.jsx)("h1", { className: "file-title", children: e3 }), t && (0, I.jsx)("p", { className: r ? "file-fact is-known" : "file-fact", children: t }), n && (0, I.jsx)("p", { className: "file-intro", children: n })] });
  }
  function a5({ label: e3, heading: t = false, children: r }) {
    let n = ha.default.useId();
    return (0, I.jsxs)("section", { ...Be("loop"), className: "file-group", "aria-labelledby": n, children: [typeof t == "string" ? (0, I.jsxs)("hgroup", { className: "file-group-head", children: [(0, I.jsx)("p", { className: "file-group-label", children: e3 }), (0, I.jsx)("h2", { id: n, className: "file-group-heading", children: t })] }) : (0, I.jsx)("h2", { id: n, className: t ? "file-group-heading" : "file-group-label", children: e3 }), r] });
  }
  function o5({ numbered: e3 = false, children: t }) {
    let r = Be();
    return e3 ? (0, I.jsx)(i5.Provider, { value: true, children: (0, I.jsx)("ol", { ...r, className: "file-rows is-numbered", children: t }) }) : (0, I.jsx)("div", { ...r, className: "file-rows", children: t });
  }
  function l5({ number: e3, thumbnail: t, name: r, detail: n, value: a, valueKnown: i = false, checked: o }) {
    let l = (0, ha.useContext)(i5);
    return (0, I.jsxs)(l ? "li" : "div", { ...Be("stroke"), className: "file-row", style: l && e3 !== void 0 ? { counterSet: `file-row ${e3}` } : void 0, children: [e3 !== void 0 ? (0, I.jsx)("span", { className: "file-row-slot is-number", children: e3 }) : l && (0, I.jsx)("span", { className: "file-row-slot is-number is-counted" }), o !== void 0 && (0, I.jsx)("span", { className: "file-row-check", role: "checkbox", "aria-checked": o, "aria-readonly": "true", "aria-label": r }), t && (0, I.jsxs)("span", { className: "file-row-slot", children: [(0, I.jsx)(t5, { icon: t.icon }), t.src && (0, I.jsx)("img", { src: t.src, alt: t.alt, style: Zr(t), loading: "lazy" })] }), (0, I.jsxs)("div", { className: "file-row-body", children: [(0, I.jsxs)("div", { className: "file-row-main", children: [(0, I.jsx)("span", { ...Hb(), className: "file-strong", children: r }), n && (0, I.jsx)("span", { className: "file-row-detail", children: n })] }), a && (0, I.jsx)("bdi", { className: i ? "file-row-value file-known" : "file-row-value", children: a })] })] });
  }
  function ad({ items: e3 }) {
    return (0, I.jsx)("dl", { ...Be(), className: "file-facts", children: e3.map((t) => (0, I.jsxs)("div", { children: [(0, I.jsx)("dt", { children: t.label }), (0, I.jsx)("dd", { children: (0, I.jsx)("bdi", { children: t.value }) })] }, t.label)) });
  }
  function s5({ children: e3 }) {
    return (0, I.jsx)("div", { ...Be(), className: "file-text", children: e3 });
  }
  function u5({ children: e3, sub: t }) {
    return (0, I.jsxs)("div", { ...Be("stroke"), className: "file-heading", children: [(0, I.jsx)("span", { ...Hb(), className: "file-strong", children: e3 }), t && (0, I.jsx)("span", { className: "file-secondary", children: t })] });
  }
  function c5({ children: e3 }) {
    return (0, I.jsx)("p", { ...Be("stroke"), className: "file-p", children: e3 });
  }
  function d5({ items: e3 }) {
    return (0, I.jsx)("ul", { ...Be(), className: "file-bullets", children: e3.map((t, r) => (0, I.jsx)("li", { children: t }, r)) });
  }
  function f5({ children: e3 }) {
    return (0, I.jsx)("p", { ...Be("stroke"), className: "file-key file-bar", children: e3 });
  }
  function h5({ src: e3, alt: t, caption: r, fit: n = "contain", width: a, height: i }) {
    let o = n === "contain" && a && i ? { width: `min(${a}px, 100%, var(--file-photo-max-height) * ${a / i})` } : void 0;
    return (0, I.jsxs)("figure", { ...Be("loop"), className: "file-figure", "data-fit": n, children: [(0, I.jsx)("img", { src: e3, alt: t, width: a, height: i, style: o, loading: "lazy" }), (0, I.jsx)("figcaption", { children: r })] });
  }
  function p5({ children: e3 }) {
    return (0, I.jsx)("p", { ...Be("stroke"), className: "file-caption", children: e3 });
  }
  function m5() {
    return (0, I.jsx)("hr", { ...Be(), className: "file-rule" });
  }
  function am({ href: e3, children: t }) {
    let r = r5(e3);
    return r ? (0, I.jsx)("a", { className: "file-link", href: r, target: /^(?:https?:|mailto:|tel:|\/\/)/i.test(r) ? "_blank" : void 0, rel: "noopener noreferrer", children: t }) : (0, I.jsx)("span", { className: "file-link", children: t });
  }
  function g5({ title: e3, children: t, tone: r = "note" }) {
    return (0, I.jsxs)("aside", { ...Be(), className: "file-callout file-bar", "data-tone": r, children: [(0, I.jsx)("span", { className: "file-strong", children: e3 }), (0, I.jsx)("span", { children: t })] });
  }
  function v5({ items: e3 }) {
    return (0, I.jsx)("ol", { ...Be(), className: "file-steps", children: e3.map((t, r) => (0, I.jsxs)("li", { children: [(0, I.jsx)("span", { className: "file-step-n", children: r + 1 }), (0, I.jsx)("span", { children: t })] }, r)) });
  }
  function y5({ caption: e3, options: t, rows: r }) {
    let n = xe(), a = Be("loop"), i = (o, l) => ({ order: o * (r.length + 1) + l });
    return (0, I.jsx)("div", { ...a, className: "file-table-scroll", role: "region", "aria-label": e3, tabIndex: 0, children: (0, I.jsxs)("table", { className: "file-table is-options is-stacking", style: { "--file-table-columns": t.length + 1 }, children: [(0, I.jsx)("caption", { className: "file-visually-hidden", children: e3 }), (0, I.jsx)("thead", { children: (0, I.jsxs)("tr", { children: [(0, I.jsx)("th", { scope: "col", className: "file-table-corner", children: (0, I.jsx)("span", { className: "file-visually-hidden", children: n.attribute }) }), t.map((o, l) => (0, I.jsxs)("th", { scope: "col", style: i(l, 0), children: [(0, I.jsx)("span", { className: "file-strong", children: o.name }), (0, I.jsx)("span", { className: "file-secondary", children: o.number })] }, o.number))] }) }), (0, I.jsx)("tbody", { children: r.map((o, l) => (0, I.jsxs)("tr", { children: [(0, I.jsx)("th", { scope: "row", children: o.label }), o.values.map((s, u) => (0, I.jsxs)("td", { className: o.best === u ? "is-best" : void 0, style: i(u, l + 1), children: [(0, I.jsx)("span", { className: "file-cell-label", children: o.label }), (0, I.jsx)("bdi", { children: s })] }, u))] }, o.label)) })] }) });
  }
  function im({ items: e3, label: t, title: r = t, layout: n = "grid", bleed: a = n === "strip" && e3.length > 1 }) {
    let i = xe(), o = nd(), l = Be(), [s, u] = (0, ha.useState)(null), c = e3.map((f, h) => (0, I.jsx)("button", { type: "button", className: "file-photo-zoom", "aria-label": i.fullScreen(f.alt), onClick: () => u(h), children: (0, I.jsx)("img", { src: f.src, alt: f.alt, style: Zr(f), loading: "lazy" }) }, f.src)), d = e3.length === 1 ? " is-single" : "";
    return (0, I.jsxs)(I.Fragment, { children: [n === "strip" && e3.length > 1 ? (0, I.jsx)(e5, { ...o, ...l, bleed: a, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": t, tabIndex: 0, children: c }) : (0, I.jsx)("div", { ...n === "strip" ? o : {}, ...l, className: `file-photos${d}${n === "strip" && a ? " file-bleed" : ""}`, "data-layout": n, role: "region", "aria-label": t, children: c }), s !== null && (0, I.jsx)(rd, { photos: e3, start: s, title: r, onClose: () => u(null) })] });
  }
  function w5({ children: e3 }) {
    return (0, I.jsx)("footer", { ...Be(), className: "file-closing", children: e3 });
  }
  function x5({ caption: e3, columns: t, rows: r, sort: n, onSort: a, empty: i }) {
    let o = xe();
    return (0, ue.jsx)("div", { className: "file-table-scroll", role: "region", "aria-label": e3, tabIndex: 0, children: (0, ue.jsxs)("table", { className: "file-table file-data-table", children: [(0, ue.jsx)("caption", { children: e3 }), (0, ue.jsx)("thead", { children: (0, ue.jsx)("tr", { children: t.map((l) => (0, ue.jsx)("th", { scope: "col", "data-numeric": l.numeric || void 0, "aria-sort": l.sortable ? n?.key === l.key ? n.direction : "none" : void 0, children: l.sortable && a ? (0, ue.jsxs)("button", { type: "button", onClick: () => a(l.key), children: [l.label, n?.key === l.key && (0, ue.jsxs)("span", { "aria-hidden": "true", children: [" ", n.direction === "ascending" ? "\u2191" : "\u2193"] })] }) : l.label }, l.key)) }) }), (0, ue.jsxs)("tbody", { children: [r.map((l) => (0, ue.jsx)("tr", { children: t.map((s, u) => u === 0 ? (0, ue.jsx)("th", { scope: "row", children: l.cells[s.key] }, s.key) : (0, ue.jsx)("td", { "data-numeric": s.numeric || void 0, children: l.cells[s.key] }, s.key)) }, l.id)), r.length === 0 && (0, ue.jsx)("tr", { children: (0, ue.jsx)("td", { colSpan: t.length, children: i ?? o.noMatches }) })] })] }) });
  }
  function WD({ caption: e3, items: t, rows: r, selected: n, onSelect: a, onOpen: i, openLabel: o }) {
    let l = xe(), s = (0, Cn.useRef)(null), u = (0, Cn.useRef)(/* @__PURE__ */ new Map()), c = (0, Cn.useRef)(), d = (0, Cn.useRef)(), f = nd();
    function h(m) {
      window.clearTimeout(d.current.timer), d.current.timer = window.setTimeout(v, m);
    }
    function v() {
      let m = d.current?.id;
      d.current = void 0, m !== void 0 && y();
    }
    (0, Cn.useLayoutEffect)(() => {
      if (n === void 0) {
        d.current && (d.current.id = void 0);
        return;
      }
      if (n === c.current) return;
      c.current = void 0;
      let m = u.current.get(n).offsetLeft - u.current.get(t[0].id).offsetLeft, g = s.current.scrollLeft !== m && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.clearTimeout(d.current?.timer), d.current = void 0, g && (d.current = { id: n, timer: 0 }, h(900)), s.current.scrollTo({ left: m, behavior: g ? "smooth" : "instant" });
    }, [n]), (0, Cn.useEffect)(() => () => window.clearTimeout(d.current?.timer), []);
    function y() {
      if (!a || t.length < 2) return;
      let m = s.current, g = u.current.get(t[0].id), p = u.current.get(t[1].id), w = m.scrollWidth > m.clientWidth && m.scrollLeft >= m.scrollWidth - m.clientWidth - 1 ? t[t.length - 1] : t[Math.min(t.length - 1, Math.max(0, Math.round(m.scrollLeft / (p.offsetLeft - g.offsetLeft))))];
      if (d.current) {
        d.current.id !== void 0 && w.id === d.current.id ? (window.clearTimeout(d.current.timer), d.current = void 0) : h(150);
        return;
      }
      w.id !== n && (c.current = w.id, a(w.id));
    }
    return (0, ue.jsx)("div", { ...f, ref: s, className: "file-compare", role: "region", "aria-label": e3, tabIndex: 0, style: { gridTemplateRows: `auto repeat(${r.length}, auto)` }, onScroll: y, children: t.map((m, g) => {
      let p = (0, ue.jsxs)(ue.Fragment, { children: [(0, ue.jsxs)("span", { className: "file-compare-photo", children: [m.photo ? (0, ue.jsx)("img", { src: m.photo.src, alt: m.photo.alt, style: Zr(m.photo), draggable: false }) : (0, ue.jsx)("span", { className: "file-compare-photo-name", "aria-hidden": "true", children: m.title }), (0, ue.jsxs)("span", { className: "file-compare-tags", children: [(0, ue.jsx)("b", { className: "file-pill", children: m.number }), (m.tag || m.starred) && (0, ue.jsxs)("span", { className: "file-badge", children: [m.starred && VD, m.starred && !m.tag && (0, ue.jsx)("span", { className: "file-visually-hidden", children: l.recommended }), m.tag] })] })] }), (0, ue.jsx)("strong", { className: "file-hover-underline", children: m.title }), i && o && (0, ue.jsxs)("span", { className: "file-compare-open", children: [(0, ue.jsx)("span", { className: "file-hover-underline", children: o }), (0, ue.jsx)("svg", { "aria-hidden": "true", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.25", strokeLinecap: "round", strokeLinejoin: "round", children: (0, ue.jsx)("path", { d: "M10 16L13.6464 12.3536C13.8417 12.1583 13.8417 11.8417 13.6464 11.6464L10 8" }) })] })] });
      return (0, ue.jsxs)("article", { ref: (w) => {
        w ? u.current.set(m.id, w) : u.current.delete(m.id);
      }, className: `file-compare-column${m.id === n ? " is-selected" : ""}`, "aria-label": m.title, children: [i ? (0, ue.jsx)("button", { type: "button", className: "file-compare-head", "aria-label": l.view(m.title), onClick: () => i(m.id), children: p }) : (0, ue.jsx)("div", { className: "file-compare-head", children: p }), (0, ue.jsx)("dl", { children: r.map((w) => (0, ue.jsxs)("div", { className: `file-compare-cell${w.best === g ? " is-best" : ""}`, children: [(0, ue.jsx)("dt", { className: w.quiet ? "file-visually-hidden" : "file-cell-label", children: w.label }), (0, ue.jsx)("dd", { children: w.values[g] })] }, w.label)) })] }, m.id);
    }) });
  }
  function da({ label: e3, summary: t }) {
    return (0, F.jsxs)("div", { className: "file-chart-head", children: [(0, F.jsx)("span", { children: e3 }), t && (0, F.jsx)("span", { children: t })] });
  }
  function om(e3, t) {
    if (e3.some((i) => !Number.isFinite(i))) throw new RangeError("Chart values must be finite; use null for missing line observations.");
    let r = Math.min(...e3), n = Math.max(...e3);
    if (t) {
      if (!t.every(Number.isFinite) || t[0] >= t[1] || t[0] > r || t[1] < n) throw new RangeError("Chart bounds must be finite, ascending and contain every value.");
      return t;
    }
    let a = r === n ? Math.max(Math.abs(r) * 0.15, 1) : (n - r) * 0.15;
    return [r - a, n + a];
  }
  function GD(e3) {
    let t = Math.floor(30 / e3.length);
    return e3.length <= 5 && e3.every((r) => _x(r.label) <= t * 2 && r.label.split(/\s+/).every((n) => _x(n) <= t));
  }
  function k5({ label: e3, data: t, format: r = b5, max: n, orientation: a = GD(t) ? "columns" : "bars" }) {
    let i = xe(), o = Be();
    if (t.length === 0) return (0, F.jsxs)("div", { ...o, className: "file-chart", children: [(0, F.jsx)(da, { label: e3 }), (0, F.jsx)("p", { children: i.noData })] });
    let l = [0, ...t.map((y) => y.value)], s = Math.min(...l), u = Math.max(...l), c = s === u ? 1 : (u - s) * 0.15, d = [s < 0 ? s - c : 0, u > 0 ? u + c : s < 0 ? 0 : 1], f = om(l, n === void 0 ? d : [s, n]), h = Bc({ domain: f, range: a === "bars" ? [0, 250] : [120, 0] }), v = J7({ domain: t.map((y, m) => m), range: [0, 350], paddingInner: 0.35, paddingOuter: 0.35 / 2 });
    return (0, F.jsxs)("div", { ...o, className: "file-chart file-scaled-chart", children: [(0, F.jsx)(da, { label: e3 }), a === "bars" ? (0, F.jsx)("div", { className: "file-signed-bars", children: t.map((y, m) => (0, F.jsxs)("div", { children: [(0, F.jsx)("span", { children: y.label }), (0, F.jsxs)("svg", { viewBox: "0 -2 250 24", "aria-hidden": "true", children: [(0, F.jsx)("line", { x1: h(0), x2: h(0), y1: -2, y2: 22, stroke: "var(--ds-ink-2)" }), (0, F.jsx)(Cx, { x: Math.min(h(0), h(y.value)), y: 2, width: Math.abs(h(y.value) - h(0)), height: 16, fill: y.highlight ? Yl : ql(m), stroke: "var(--ds-ink-2)" })] }), (0, F.jsx)("strong", { children: (0, F.jsx)("bdi", { children: y.valueLabel ?? r(y.value) }) })] }, m)) }) : (0, F.jsxs)(F.Fragment, { children: [(0, F.jsxs)("svg", { viewBox: "0 -20 350 160", role: "img", "aria-label": `${e3}: ${t.map((y) => `${y.label} ${y.valueLabel ?? r(y.value)}`).join(", ")}`, children: [h.ticks(3).map((y) => (0, F.jsx)("line", { x1: 0, x2: 350, y1: h(y), y2: h(y), stroke: y === 0 ? "var(--ds-ink-2)" : "var(--ds-hairline)" }, y)), t.map((y, m) => (0, F.jsxs)("g", { children: [(0, F.jsx)(Cx, { x: v(m), y: Math.min(h(0), h(y.value)), width: v.bandwidth(), height: Math.abs(h(y.value) - h(0)), fill: y.highlight ? Yl : ql(m), stroke: "var(--ds-ink-2)" }), (0, F.jsx)("text", { x: v(m) + v.bandwidth() / 2, y: h(y.value) + (y.value < 0 ? 16 : -6), textAnchor: "middle", fill: "var(--ds-ink-2)", fontSize: 13, children: y.valueLabel ?? r(y.value) })] }, m))] }), (0, F.jsx)("div", { className: "file-bar-labels", children: t.map((y, m) => (0, F.jsx)("span", { children: y.label }, m)) })] })] });
  }
  function KD({ label: e3, summary: t, data: r, points: n, range: a, target: i, xLabels: o = [], format: l = b5 }) {
    let s = xe(), [u, c] = (0, eb.useState)(null), d = r ?? n.map((S, R) => ({ x: R, value: S, label: s.observationNumber(R + 1) }));
    if (d.some((S, R) => !Number.isFinite(S.x) || R > 0 && S.x <= d[R - 1].x)) throw new RangeError("Line coordinates must be finite and strictly increasing.");
    let f = d.filter((S) => S.value !== null), h = f.map((S) => S.value);
    if (i && h.push(i.value), h.some((S) => !Number.isFinite(S))) throw new RangeError("Line values must be finite; use null for missing observations.");
    if (f.length === 0) return (0, F.jsxs)("div", { className: "file-chart", children: [(0, F.jsx)(da, { label: e3, summary: t }), (0, F.jsx)("p", { children: s.noData })] });
    let v = om(h, a), y = r === void 0 && a ? (a[1] - a[0]) * 0.15 : 0, m = Bc({ domain: [v[0] - y, v[1] + y], range: [120, 0] }), g = d[0].x, p = d[d.length - 1].x, w = Bc({ domain: g === p ? [g - 1, p + 1] : [g, p], range: [8, 342] }), b = f.find((S) => S.x === u) ?? f[f.length - 1], E = (S) => `${S.label}: ${S.value === null ? s.noObservation : S.valueLabel ?? l(S.value)}`;
    return (0, F.jsxs)("div", { className: "file-chart file-scaled-chart", children: [(0, F.jsx)(da, { label: e3, summary: t }), (0, F.jsxs)("svg", { viewBox: "0 -15 350 150", "aria-label": e3, role: "group", children: [m.ticks(3).map((S) => (0, F.jsx)("line", { x1: 0, x2: 350, y1: m(S), y2: m(S), stroke: "var(--ds-hairline)" }, S)), i && (0, F.jsxs)(F.Fragment, { children: [(0, F.jsx)("line", { x1: 0, x2: 350, y1: m(i.value), y2: m(i.value), stroke: "var(--ds-ink-2)", strokeDasharray: "4 3" }), (0, F.jsx)("text", { x: 4, y: m(i.value) - 7, fill: "var(--ds-ink-2)", stroke: "var(--ds-white)", strokeWidth: 3, paintOrder: "stroke", fontSize: 13, children: i.label })] }), (0, F.jsx)(dD, { data: d, defined: (S) => S.value !== null, x: (S) => w(S.x), y: (S) => m(S.value), stroke: "var(--ds-ink-2)", strokeWidth: 1.5 }), f.map((S) => (0, F.jsxs)("g", { tabIndex: 0, role: "img", "aria-label": E(S), onFocus: () => c(S.x), onMouseEnter: () => c(S.x), onClick: () => c(S.x), children: [(0, F.jsx)("circle", { cx: w(S.x), cy: m(S.value), r: 12, fill: "transparent" }), (0, F.jsx)("circle", { cx: w(S.x), cy: m(S.value), r: b.x === S.x ? 4 : 2.5, fill: b.x === S.x ? Yl : "var(--ds-white)", stroke: "var(--ds-ink-2)", strokeWidth: 1.5 })] }, S.x))] }), (0, F.jsx)("div", { className: "file-chart-axis", children: (o.length ? o : [d[0].label, ...d.length > 1 ? [d[d.length - 1].label] : []]).map((S, R) => (0, F.jsx)("span", { children: S }, R)) }), (0, F.jsxs)("p", { className: "file-chart-readout", "aria-live": "polite", children: [E(b), i && (0, F.jsxs)("span", { children: [" \xB7 ", i.label, ": ", l(i.value), " (dashed)"] })] }), (0, F.jsxs)("details", { children: [(0, F.jsx)("summary", { children: s.chartData }), (0, F.jsx)(x5, { caption: e3, columns: [{ key: "label", label: s.observation }, { key: "value", label: s.value, numeric: true }], rows: d.map((S) => ({ id: String(S.x), cells: { label: S.label, value: S.value === null ? s.noObservation : S.valueLabel ?? l(S.value) } })) })] })] });
  }
  function QD(e3, t, r, n, a) {
    let i = (l) => e3.length === 1 ? t / 2 : l / (e3.length - 1) * t, o = Bc({ domain: om(e3, n < a ? [n, a] : void 0), range: [r, 0] });
    return { x: i, y: o, d: e3.map((l, s) => `${s ? "L" : "M"}${i(s).toFixed(1)} ${o(l).toFixed(1)}`).join(" ") };
  }
  function XD({ label: e3, series: t }) {
    let r = xe(), n = 110, a = 28;
    return (0, F.jsxs)("div", { className: "file-chart", children: [(0, F.jsx)(da, { label: e3 }), (0, F.jsx)("div", { className: "file-sparklines", children: t.map((i, o) => {
      if (i.values.length === 0) return (0, F.jsxs)("div", { className: "file-sparkline", children: [(0, F.jsx)("span", { children: i.name }), (0, F.jsx)("span", { children: r.noData }), (0, F.jsx)("bdi", { className: "file-sparkline-delta", children: i.delta })] }, i.name);
      let { d: l, x: s, y: u } = QD(i.values, n, a, Math.min(...i.values), Math.max(...i.values)), c = i.highlight ? Yl : ql(o);
      return (0, F.jsxs)("div", { className: i.highlight ? "file-sparkline is-highlight" : "file-sparkline", children: [(0, F.jsx)("span", { className: "file-sparkline-name", children: i.name }), (0, F.jsxs)("svg", { viewBox: `0 -2 ${n} ${a + 4}`, "aria-hidden": "true", children: [(0, F.jsx)("path", { d: l, fill: "none", stroke: c, strokeWidth: 1.5, strokeLinejoin: "round", strokeLinecap: "round" }), (0, F.jsx)("circle", { cx: s(i.values.length - 1), cy: u(i.values[i.values.length - 1]), r: 3, fill: c })] }), (0, F.jsx)("bdi", { className: "file-sparkline-delta", children: i.delta })] }, i.name);
    }) })] });
  }
  function ZD({ label: e3, legend: t, rows: r, range: n, scaleLabels: a }) {
    let i = xe(), [o, l] = n, s = (u) => `${((u - o) / (l - o || 1) * 100).toFixed(1)}%`;
    return (0, F.jsxs)("div", { className: "file-chart", children: [(0, F.jsx)(da, { label: e3, summary: t ?? i.rangeLegend }), (0, F.jsx)("div", { className: "file-ranges", children: r.map((u, c) => (0, F.jsxs)("div", { className: u.highlight ? "file-range is-highlight" : "file-range", style: qD(c), children: [(0, F.jsx)("span", { className: "file-range-label", title: u.label, children: u.label }), (0, F.jsxs)("div", { className: "file-range-track", children: [(0, F.jsx)("div", { className: "file-range-line" }), (0, F.jsx)("div", { className: "file-range-band", style: { left: s(u.low), width: `calc(${s(u.high)} - ${s(u.low)})` } }), (0, F.jsx)("div", { className: "file-range-now", style: { left: s(u.now) } })] })] }, u.label)) }), (0, F.jsxs)("div", { className: "file-range-scale", children: [(0, F.jsx)("span", {}), (0, F.jsx)("div", { className: "file-chart-axis", children: a.map((u, c) => (0, F.jsx)("span", { children: u }, c)) })] })] });
  }
  function JD({ label: e3, legend: t = "share", parts: r }) {
    let n = (a) => Vc[a % Vc.length];
    return (0, F.jsxs)("div", { className: "file-chart", children: [(0, F.jsx)(da, { label: e3, summary: t }), (0, F.jsx)("div", { className: "file-stack-bar", role: "img", "aria-label": r.map((a) => `${a.label} ${a.share}%`).join(", "), children: r.map((a, i) => (0, F.jsx)("div", { style: { width: `${a.share}%`, background: n(i) } }, a.label)) }), (0, F.jsx)("div", { className: "file-stack-parts", children: r.map((a, i) => (0, F.jsxs)("div", { className: "file-stack-part", children: [(0, F.jsx)("span", { className: "file-stack-swatch", style: { background: n(i) } }), (0, F.jsx)("span", { children: a.label }), (0, F.jsxs)("bdi", { className: "file-stack-share", children: [a.share, "%"] })] }, a.label)) })] });
  }
  function e9({ label: e3, summary: t, points: r, xRange: n, yRange: a, axisLabels: i }) {
    let o = (s) => (s - n[0]) / (n[1] - n[0] || 1) * 350, l = (s) => 140 - (s - a[0]) / (a[1] - a[0] || 1) * 140;
    return (0, F.jsxs)("div", { className: "file-chart is-drawn", children: [(0, F.jsx)(da, { label: e3, summary: t }), (0, F.jsxs)("svg", { viewBox: "-4 -8 358 152", role: "img", "aria-label": e3, children: [YD.map((s) => (0, F.jsx)("line", { x1: 0, x2: 350, y1: s * 140, y2: s * 140, stroke: "var(--ds-hairline)", strokeWidth: 1 }, s)), r.map((s, u) => (0, F.jsxs)("g", { children: [(0, F.jsx)("circle", { cx: o(s.x), cy: l(s.y), r: s.highlight ? 6 : 5, fill: s.highlight ? Yl : ql(u), stroke: "var(--ds-white)", strokeWidth: 1.5 }), s.label && (0, F.jsx)("text", { x: o(s.x) + 10, y: l(s.y) + 4, fontSize: 13, fontFamily: "var(--file-font-text)", fontWeight: s.highlight ? 600 : 350, style: { letterSpacing: "calc(-0.01em * var(--file-tracking))" }, fill: s.highlight ? "var(--ds-teal)" : "var(--ds-ink-2)", children: s.label })] }, u))] }), (0, F.jsx)("div", { className: "file-chart-axis", children: i.map((s, u) => (0, F.jsx)("span", { children: s }, u)) })] });
  }
  function E5({ children: e3 }) {
    return (0, Fe.jsx)("div", { ...Be(), className: "file-photo-cards", children: e3 });
  }
  function R5({ name: e3, detail: t, icon: r, photo: n, checked: a = false, open: i, onOpenChange: o, children: l }) {
    let [s, u] = (0, uo.useState)(false), c = uo.Children.count(l) > 0, d = (h) => {
      u(h), o?.(h);
    }, f = (0, Fe.jsxs)(Fe.Fragment, { children: [(0, Fe.jsxs)("span", { className: "file-photo-card-photo", children: [(0, Fe.jsx)(t5, { icon: r }), n?.src && (0, Fe.jsx)("img", { src: n.src, alt: n.alt, style: Zr(n), loading: "lazy" }), a && (0, Fe.jsx)("span", { className: "file-row-check file-photo-card-check", role: "checkbox", "aria-checked": true, "aria-readonly": "true", "aria-label": e3 })] }), (0, Fe.jsxs)("span", { className: "file-photo-card-text", children: [(0, Fe.jsx)("span", { className: "file-strong", children: e3 }), t && (0, Fe.jsx)("span", { className: "file-row-detail", children: t })] })] });
    return (0, Fe.jsxs)("div", { ...Be("loop"), className: "file-photo-card", children: [c ? (0, Fe.jsx)("button", { type: "button", className: "file-photo-card-open", "aria-haspopup": "dialog", onClick: () => d(true), children: f }) : f, c && (i ?? s) && (0, Fe.jsx)(t9, { name: e3, detail: t, photo: n, onClose: () => d(false), children: l })] });
  }
  function t9({ name: e3, detail: t, photo: r, onClose: n, children: a }) {
    let i = (0, uo.useRef)(null);
    return nm(i, true), (0, Fe.jsxs)("dialog", { ref: i, className: "file-drawer", "aria-label": e3, tabIndex: -1, onCancel: (o) => {
      o.preventDefault(), n();
    }, onClick: (o) => {
      if (o.target !== o.currentTarget) return;
      let l = o.currentTarget.getBoundingClientRect();
      (o.clientX < l.left || o.clientX > l.right || o.clientY < l.top || o.clientY > l.bottom) && n();
    }, children: [(0, Fe.jsx)("div", { className: "file-drawer-header", children: (0, Fe.jsx)(td, { onClick: n }) }), r?.src && (0, Fe.jsx)("img", { className: "file-drawer-photo", src: r.src, alt: r.alt, style: Zr(r) }), (0, Fe.jsxs)("hgroup", { className: "file-drawer-title", children: [(0, Fe.jsx)("h2", { className: "file-group-heading", children: e3 }), t && (0, Fe.jsx)("p", { className: "file-secondary", children: t })] }), (0, Fe.jsx)("div", { className: "file-drawer-body", children: a })] });
  }
  function a9(e3) {
    let t = [];
    for (let r of e3.filter((n) => n.width > 0 && n.height > 0).sort((n, a) => n.top - a.top || n.left - a.left)) {
      let n = r.top + r.height / 2, a = t.find((l) => n > l.top && n < l.top + l.height);
      if (!a) {
        t.push({ ...r });
        continue;
      }
      let i = Math.max(a.left + a.width, r.left + r.width), o = Math.max(a.top + a.height, r.top + r.height);
      a.left = Math.min(a.left, r.left), a.top = Math.min(a.top, r.top), a.width = i - a.left, a.height = o - a.top, a.size = Math.max(a.size, r.size);
    }
    return t;
  }
  function i9(e3, t, r) {
    if (r.length === 0) return "loop";
    if (e3 === "stroke" || e3 === "loop") return e3;
    let n = r[r.length - 1];
    return r.length <= 3 && t.height <= n.top + n.height - r[0].top + 48 ? "stroke" : "loop";
  }
  function o9(e3) {
    let t = Math.round(Math.max(160, Math.min(550, 1400 / e3)));
    return Array.from({ length: e3 }, (r, n) => ({ ms: t, wait: Math.round(n * t * 0.9) }));
  }
  function l9(e3, t, r, n, a, i) {
    let o = r - e3 - 2 * a, l = n - t - 2 * a, s = Math.PI / 2 * a, u = (d, f, h, v) => {
      let y = h + v / s * (Math.PI / 2);
      return [d + a * Math.cos(y), f + a * Math.sin(y), Math.cos(y), Math.sin(y)];
    }, c = i;
    return c < o ? [e3 + a + c, t, 0, -1] : (c -= o, c < s ? u(r - a, t + a, -Math.PI / 2, c) : (c -= s, c < l ? [r, t + a + c, 1, 0] : (c -= l, c < s ? u(r - a, n - a, 0, c) : (c -= s, c < o ? [r - a - c, n, 0, 1] : (c -= o, c < s ? u(e3 + a, n - a, Math.PI / 2, c) : (c -= s, c < l ? [e3, n - a - c, -1, 0] : u(e3 + a, t + a, Math.PI, c - l)))))));
  }
  function s9(e3, t) {
    let r = 7 + e3 + 3, n = 7 + t + 3, a = Math.min(18, (r - 4) / 4, (n - 4) / 4), i = r - 4 - 2 * a, o = 2 * (i + n - 4 - 2 * a) + 2 * Math.PI * a, l = i * 0.22, s = i * 0.42, u = Math.round(Math.max(24, Math.min(160, (o + s) / 8))), c = [];
    for (let f = 0; f <= u; f++) {
      let h = (o + s) * f / u, [v, y, m, g] = l9(4, 4, r, n, a, (l + h) % o), p = (h < o ? -1 + 4.7 * (h / o) : 3.7 + 3.2 * ((h - o) / s)) + 0.7 * Math.sin(h / 23 + e3) + 0.4 * Math.sin(h / 9 + t);
      c.push([v + m * p, y + g * p]);
    }
    let d = `M${Yt(c[0][0])} ${Yt(c[0][1])}`;
    for (let f = 0; f < c.length - 1; f++) {
      let h = c[Math.max(0, f - 1)], v = c[f], y = c[f + 1], m = c[Math.min(c.length - 1, f + 2)];
      d += `C${Yt(v[0] + (y[0] - h[0]) / 6)} ${Yt(v[1] + (y[1] - h[1]) / 6)} ${Yt(y[0] - (m[0] - v[0]) / 6)} ${Yt(y[1] - (m[1] - v[1]) / 6)} ${Yt(y[0])} ${Yt(y[1])}`;
    }
    return d;
  }
  function u9(e3, t) {
    return Math.round(Math.max(600, Math.min(1100, 400 + (e3 + t) * 0.96)));
  }
  function c9(e3) {
    for (let t of e3.querySelectorAll("[data-live-mark-text]")) if (t.closest("[data-live-id]") === e3) return t;
    return e3;
  }
  function d9(e3) {
    let t = [], r = e3.closest("dialog"), n = document.createTreeWalker(e3, NodeFilter.SHOW_TEXT), a = document.createRange();
    for (let i = n.nextNode(); i; i = n.nextNode()) {
      let o = i.parentElement;
      if (o.closest(".file-visually-hidden") || o.closest("dialog") !== r) continue;
      let l = parseFloat(getComputedStyle(o).fontSize);
      a.selectNodeContents(i);
      for (let s of a.getClientRects()) t.push({ left: s.left, top: s.top, width: s.width, height: s.height, size: l });
    }
    return t;
  }
  function Fx(e3) {
    for (let r of e3.children) if (r.hasAttribute("data-live-marks")) return r;
    let t = document.createElement("div");
    return t.setAttribute("data-live-marks", ""), t.setAttribute("aria-hidden", "true"), e3.appendChild(t);
  }
  function $x(e3, t, r, n, a, i, o) {
    let l = document.createElementNS(Tx, "svg");
    l.setAttribute("data-live-drawn", e3), l.setAttribute("data-live-for", t), l.setAttribute("viewBox", n), l.setAttribute("preserveAspectRatio", "none"), l.style.cssText = `left:${Yt(r.left)}px;top:${Yt(r.top)}px;width:${Yt(r.width)}px;height:${Yt(r.height)}px;--file-live-mark-ms:${i}ms;--file-live-mark-wait:${o}ms`;
    let s = document.createElementNS(Tx, "path");
    return s.setAttribute("d", a), e3 === "loop" && s.setAttribute("pathLength", "1"), l.appendChild(s), l;
  }
  function f9(e3, t) {
    let r = () => {
      a.disconnect(), clearTimeout(i);
    }, n = () => {
      r(), t();
    }, a = new IntersectionObserver((o) => o.some((l) => l.intersectionRatio >= 0.5) && n(), { threshold: 0.5 }), i = setTimeout(n, 700);
    return a.observe(e3), r;
  }
  function b9(e3, t) {
    let r = e3.getBoundingClientRect(), n = e3.querySelector(".file-drawer-header")?.getBoundingClientRect().bottom ?? r.top, a = r.bottom - (parseFloat(getComputedStyle(e3).scrollPaddingBottom) || 0), i = t.getBoundingClientRect(), o = a - n - i.height, l = o > 2 * zx ? o / 2 : zx, s = matchMedia("(prefers-reduced-motion: reduce)").matches;
    e3.scrollTo({ top: e3.scrollTop + i.top - n - l, behavior: s ? "auto" : "smooth" });
  }
  function Xl(e3, t) {
    return Xr.start(), (0, S5.useSyncExternalStore)(Xr.subscribe, e3, () => t);
  }
  function D5() {
    return Xl(Xr.getOpen, null);
  }
  function N5(e3) {
    return Xl(() => Xr.getData().nodes[e3], void 0);
  }
  function E9(e3, t) {
    let r = Xl(() => Xr.getData().values[e3], void 0);
    return r === void 0 ? t : r;
  }
  function R9(e3) {
    return Xl(() => Xr.items(e3), C5);
  }
  function S9(e3) {
    return Xl(() => Xr.item(e3), void 0);
  }
  function sa(e3) {
    return typeof e3 == "string" ? e3 : "";
  }
  function C9({ props: e3, children: t }) {
    let r = (0, Jx.useContext)(Zc), n = D5() === r;
    return (0, Ee.jsx)(R5, { ...e3, open: n, onOpenChange: (a) => Xr.setOpen(a ? r : null), children: t });
  }
  function M5(e3, t) {
    let r = `${e3}:${t}`;
    Ix.has(r) || (Ix.add(r), console.warn(`Live node "${e3}" ${t}`));
  }
  function P5({ id: e3 }) {
    return (0, Ul.jsx)(L5, { id: e3 });
  }
  function M9(e3) {
    let t = N5(e3)?.children ?? [], r = D5() === e3;
    return (0, _5.useEffect)(() => Xr.holdDetail(e3), [e3]), { open: r, onOpenChange: (n) => Xr.setOpen(n ? e3 : null), children: t.map((n) => (0, T5.jsx)(P5, { id: n }, n)) };
  }
  function L9(e3) {
    return (0, A5.jsx)("div", { ...e3, "data-live-reveal": "" });
  }
  function F5({ height: e3 = 16, title: t = "Instinct" }) {
    return (0, Pr.jsxs)("svg", { className: "file-wordmark", width: e3 / 57 * 243, height: e3, viewBox: "0 0 243 57", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", role: "img", "aria-label": t, children: [(0, Pr.jsx)("path", { d: "M135.548 55.2V55.28H122.828V55.2C123.468 54.1867 123.948 53.2533 124.268 52.4C124.588 51.5467 124.801 50.5067 124.908 49.28C125.015 48.0533 125.068 46.4267 125.068 44.4V28.88C125.068 26.3733 124.828 24.3733 124.348 22.88C123.921 21.3867 123.308 20.2667 122.508 19.52V19.36L133.148 15.92H133.308V44.4C133.308 46.4267 133.361 48.0533 133.468 49.28C133.575 50.5067 133.788 51.5467 134.108 52.4C134.428 53.2533 134.908 54.1867 135.548 55.2ZM129.228 10C127.895 10 126.721 9.52 125.708 8.56C124.695 7.54667 124.188 6.34667 124.188 4.96C124.188 3.62667 124.695 2.48 125.708 1.52C126.721 0.506667 127.895 0 129.228 0C130.508 0 131.655 0.506667 132.668 1.52C133.681 2.48 134.188 3.62667 134.188 4.96C134.188 6.34667 133.681 7.54667 132.668 8.56C131.655 9.52 130.508 10 129.228 10Z" }), (0, Pr.jsx)("path", { d: "M154.07 55.2V55.28H141.35V55.2C142.043 54.1867 142.523 53.2533 142.79 52.4C143.11 51.5467 143.323 50.5067 143.43 49.28C143.537 48.0533 143.59 46.4267 143.59 44.4V28.88C143.59 26.3733 143.35 24.3733 142.87 22.88C142.443 21.3867 141.83 20.2667 141.03 19.52V19.36L151.67 15.92H151.83V22.56C153.803 20.8533 155.91 19.3333 158.15 18C160.39 16.6133 162.95 15.92 165.83 15.92C169.243 15.92 171.883 17.0133 173.75 19.2C175.617 21.3333 176.55 24.56 176.55 28.88V44.4C176.55 46.4267 176.603 48.0533 176.71 49.28C176.817 50.5067 177.03 51.5467 177.35 52.4C177.67 53.2533 178.15 54.1867 178.79 55.2V55.28H166.15V55.2C166.79 54.1867 167.27 53.2533 167.59 52.4C167.91 51.5467 168.123 50.5067 168.23 49.28C168.337 48.0533 168.39 46.4267 168.39 44.4V29.68C168.39 27.12 167.777 25.12 166.55 23.68C165.377 22.24 163.377 21.52 160.55 21.52C158.79 21.52 157.19 21.7867 155.75 22.32C154.363 22.8 153.057 23.3867 151.83 24.08V44.4C151.83 46.4267 151.883 48.0533 151.99 49.28C152.097 50.5067 152.31 51.5467 152.63 52.4C152.95 53.2533 153.43 54.1867 154.07 55.2Z" }), (0, Pr.jsx)("path", { d: "M200.799 56.24C197.119 56.1867 193.919 55.36 191.199 53.76C188.532 52.1067 186.505 49.8667 185.119 47.04C183.732 44.2133 183.039 41.0133 183.039 37.44C183.039 33.6533 183.812 30.1333 185.359 26.88C186.959 23.6267 189.199 21.0133 192.079 19.04C195.012 17.0133 198.479 16 202.479 16C205.945 16 208.772 16.7467 210.959 18.24C211.898 18.8813 212.678 19.7019 213.171 20.3999C211.194 24.405 208.033 26.336 208.033 26.336C208.033 26.336 207.718 25.1566 207.519 24.56C207.039 23.0667 206.265 21.8133 205.199 20.8C204.132 19.7867 202.639 19.28 200.719 19.28C198.479 19.28 196.559 19.9733 194.959 21.36C193.359 22.6933 192.132 24.4533 191.279 26.64C190.479 28.8267 190.079 31.2 190.079 33.76C190.079 36.9067 190.665 39.6533 191.839 42C193.012 44.2933 194.639 46.08 196.719 47.36C198.799 48.64 201.172 49.28 203.839 49.28C206.239 49.28 208.372 48.7733 210.239 47.76C212.159 46.7467 213.785 45.3867 215.119 43.68C214.532 47.68 212.932 50.7733 210.319 52.96C207.705 55.1467 204.532 56.24 200.799 56.24Z" }), (0, Pr.jsx)("path", { d: "M240.864 20.4H231.264V46.16C231.264 46.8 231.371 47.4933 231.584 48.24C231.798 48.9333 232.331 49.5467 233.184 50.08C234.038 50.56 235.371 50.8 237.184 50.8C238.358 50.8 239.398 50.6933 240.304 50.48C241.211 50.2133 242.038 49.8667 242.784 49.44C242.144 51.6267 240.918 53.3067 239.104 54.48C237.291 55.6533 235.104 56.24 232.544 56.24C229.611 56.24 227.291 55.44 225.584 53.84C223.878 52.24 223.024 50 223.024 47.12V20.4H218.464V19.68L231.104 8.56H231.264V16.88H242.864L240.864 20.4Z" }), (0, Pr.jsx)("path", { d: "M33.4355 55.2V55.28H20.7155V55.2C21.4088 54.1867 21.8888 53.2533 22.1555 52.4C22.4755 51.5467 22.6888 50.5067 22.7955 49.28C22.9022 48.0533 22.9555 46.4267 22.9555 44.4V28.88C22.9555 26.3733 22.7155 24.3733 22.2355 22.88C21.8088 21.3867 21.1955 20.2667 20.3955 19.52V19.36L31.0355 15.92H31.1955V22.56C33.1688 20.8533 35.2755 19.3333 37.5155 18C39.7555 16.6133 42.3155 15.92 45.1955 15.92C48.6088 15.92 51.2488 17.0133 53.1155 19.2C54.9822 21.3333 55.9155 24.56 55.9155 28.88V44.4C55.9155 46.4267 55.9688 48.0533 56.0755 49.28C56.1822 50.5067 56.3955 51.5467 56.7155 52.4C57.0355 53.2533 57.5155 54.1867 58.1555 55.2V55.28H45.5155V55.2C46.1555 54.1867 46.6355 53.2533 46.9555 52.4C47.2755 51.5467 47.4888 50.5067 47.5955 49.28C47.7022 48.0533 47.7555 46.4267 47.7555 44.4V29.68C47.7555 27.12 47.1422 25.12 45.9155 23.68C44.7422 22.24 42.7422 21.52 39.9155 21.52C38.1555 21.52 36.5555 21.7867 35.1155 22.32C33.7288 22.8 32.4222 23.3867 31.1955 24.08V44.4C31.1955 46.4267 31.2488 48.0533 31.3555 49.28C31.4622 50.5067 31.6755 51.5467 31.9955 52.4C32.3155 53.2533 32.7955 54.1867 33.4355 55.2Z" }), (0, Pr.jsx)("path", { d: "M74.2943 56.16C72.0543 56.16 70.0543 55.8667 68.2943 55.28C66.5343 54.7467 65.1476 54.16 64.1343 53.52L63.7343 45.92L63.8943 45.84C65.5476 47.9733 67.3609 49.6533 69.3343 50.88C71.3076 52.1067 73.3876 52.72 75.5743 52.72C77.5476 52.72 79.0409 52.2133 80.0543 51.2C81.0676 50.1333 81.5743 48.72 81.5743 46.96C81.5743 45.0933 81.0143 43.7067 79.8943 42.8C78.8276 41.84 77.0409 40.64 74.5343 39.2C72.5609 38.0267 70.8543 36.9333 69.4143 35.92C67.9743 34.8533 66.8809 33.68 66.1343 32.4C65.3876 31.12 65.0143 29.52 65.0143 27.6C65.0143 24.0267 66.2676 21.2 68.7743 19.12C71.2809 16.9867 74.7743 15.92 79.2543 15.92C80.8543 15.92 82.3209 16.08 83.6543 16.4C85.0409 16.72 86.3209 17.0667 87.4943 17.44L87.5743 24.8H87.4143C85.9209 23.04 84.3743 21.6533 82.7743 20.64C81.1743 19.6267 79.4409 19.12 77.5743 19.12C75.9209 19.12 74.5876 19.5733 73.5743 20.48C72.5609 21.3333 72.0543 22.56 72.0543 24.16C72.0543 25.76 72.6143 27.04 73.7343 28C74.8543 28.9067 76.6143 30 79.0143 31.28C81.4143 32.6133 83.3343 33.84 84.7743 34.96C86.2143 36.08 87.2809 37.3067 87.9743 38.64C88.6676 39.92 89.0143 41.4667 89.0143 43.28C89.0143 47.3867 87.6276 50.56 84.8543 52.8C82.0809 55.04 78.5609 56.16 74.2943 56.16Z" }), (0, Pr.jsx)("path", { d: "M115.464 20.4H105.864V46.16C105.864 46.8 105.971 47.4933 106.184 48.24C106.398 48.9333 106.931 49.5467 107.784 50.08C108.638 50.56 109.971 50.8 111.784 50.8C112.958 50.8 113.998 50.6933 114.904 50.48C115.811 50.2133 116.638 49.8667 117.384 49.44C116.744 51.6267 115.518 53.3067 113.704 54.48C111.891 55.6533 109.704 56.24 107.144 56.24C104.211 56.24 101.891 55.44 100.184 53.84C98.4776 52.24 97.6243 50 97.6243 47.12V20.4H93.0643V19.68L105.704 8.56H105.864V16.88H117.464L115.464 20.4Z" }), (0, Pr.jsx)("path", { d: "M13.5 55.205V55.28H0V55.205C0.85 53.905 1.475 52.705 1.875 51.605C2.275 50.505 2.55 49.205 2.7 47.705C2.85 46.155 2.925 44.08 2.925 41.48V16.58C2.925 13.98 2.85 11.93 2.7 10.43C2.55 8.88 2.275 7.555 1.875 6.455C1.475 5.305 0.85 4.105 0 2.855V2.78H13.5V2.855C12.7 4.105 12.1 5.305 11.7 6.455C11.3 7.555 11.025 8.88 10.875 10.43C10.725 11.93 10.65 13.98 10.65 16.58V41.48C10.65 44.03 10.725 46.08 10.875 47.63C11.025 49.18 11.3 50.505 11.7 51.605C12.1 52.705 12.7 53.905 13.5 55.205Z" })] });
  }
  function $5({ ratio: e3 = "portrait", footer: t, lang: r, dir: n = qx(r), children: a, className: i }) {
    return (0, ua.jsx)(Gc.Provider, { value: W0(r), children: (0, ua.jsxs)("div", { className: ["file-image", i].filter(Boolean).join(" "), "data-ratio": e3, lang: r, dir: n, children: [(0, ua.jsx)("div", { className: "file-image-body", children: a }), (0, ua.jsxs)("div", { className: "file-image-footer", children: [(0, ua.jsx)("span", { children: t }), (0, ua.jsx)(F5, { height: 14 })] })] }) });
  }
  function lm(e3, t) {
    let r = xe(), n = Gx(), a = Kx(), i = (0, Qa.useRef)(false), [o, l] = (0, Qa.useState)(null), [s, u] = (0, Qa.useState)([]), c = t.photos[0], d = { type: "shopping.action", action: P9, product: { number: e3.number, title: e3.title, brand: e3.brand ?? null, meta: e3.meta ?? null, price: t.price ?? null, merchant: t.merchant ?? null, selection: t.selection ?? null, variant: t.variant ? { title: t.options.map((p) => t.chosen[p.name]).join(" / "), price: t.variant.price ?? null, listPrice: t.variant.listPrice ?? null, available: t.variant.available ?? null } : null, photo: c ? { src: c.src.startsWith("data:") ? null : c.src, alt: c.alt } : null } }, f = JSON.stringify(d), h = o === f, v = s.includes(f), y = h && ["forbidden", "invalid", "conflict", "unavailable"].includes(a.status), m = async () => {
      if (!(i.current || a.canRetry || v || y)) {
        i.current = true, l(f);
        try {
          (await a.wakeAgent({ content: d })).status === "accepted" && u((p) => [...p, f]);
        } finally {
          i.current = false;
        }
      }
    }, g = async () => {
      (await a.retry()).status === "accepted" && o && u((p) => [...p, o]);
    };
    return { available: n.isOwnerUser && e3.merchant !== void 0, soldOut: t.variant?.available === false, sent: v, sending: h && a.busy, disabled: a.busy || a.canRetry || a.retryAfterMs > 0 || v || y, send: m, canRetry: a.canRetry, retryDisabled: a.busy || a.retryAfterMs > 0, retry: g, message: o && !["sending", "accepted"].includes(a.status) ? `${r.buy}: ${a.message}` : "" };
  }
  function _9() {
    return (0, Mt.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, Mt.jsx)("path", { d: "M20.5 12C20.5 9.76676 19.686 8.06004 18.2871 6.89355C16.8661 5.70886 14.7409 5 12 5C9.25912 5 7.13392 5.70886 5.71288 6.89355C4.31396 8.06004 3.49999 9.76677 3.49999 12C3.49999 12.4778 3.67754 13.2204 3.91698 13.9678C4.14619 14.6832 4.39417 15.2886 4.45995 15.4463C4.47153 15.474 4.45918 15.4447 4.47753 15.4883L4.51269 15.5781L4.55273 15.6973C4.71413 16.2258 4.88032 17.3955 4.10253 18.9609C4.45806 18.9447 4.80995 18.8667 5.14062 18.752C5.48117 18.6338 5.77064 18.4882 5.9746 18.3721C6.07544 18.3146 6.15337 18.2661 6.20312 18.2334C6.22792 18.2171 6.2459 18.2042 6.25585 18.1973C6.25889 18.1952 6.26114 18.1935 6.26269 18.1924C6.57078 17.9671 6.98047 17.9376 7.31835 18.1152C8.64944 18.8149 10.295 19 12 19C14.7409 19 16.8661 18.2911 18.2871 17.1064C19.686 15.94 20.5 14.2332 20.5 12ZM22.5 12C22.5 14.7665 21.4668 17.06 19.5674 18.6436C17.6898 20.2087 15.0646 21 12 21C10.3808 21 8.55858 20.8483 6.91699 20.1357C6.63773 20.2919 6.25326 20.4829 5.79589 20.6416C4.84476 20.9715 3.45924 21.2047 2.07226 20.5479C1.80018 20.419 1.59992 20.1742 1.52831 19.8818C1.45679 19.5894 1.52128 19.28 1.70312 19.04C2.39144 18.1322 2.60883 17.4279 2.66894 16.9775C2.72939 16.5244 2.63731 16.2736 2.63476 16.2666L2.63378 16.2646C2.63187 16.2601 2.63059 16.2546 2.62695 16.2461C2.62373 16.2386 2.61901 16.2282 2.61425 16.2168L2.61327 16.2158C2.53665 16.0321 2.2661 15.369 2.01269 14.5781C1.76944 13.8189 1.49999 12.8165 1.49999 12C1.49999 9.23347 2.5332 6.93995 4.43261 5.35645C6.31017 3.79128 8.93544 3 12 3C15.0646 3 17.6898 3.79129 19.5674 5.35645C21.4668 6.93996 22.5 9.23348 22.5 12Z" }) });
  }
  function T9(e3) {
    return { idle: { icon: (0, Mt.jsx)(_9, {}), label: e3.buy, shortLabel: e3.buyShort, variant: "active" }, sending: { icon: (0, Mt.jsx)(ND, { className: "file-spin", size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: e3.sending, variant: "disabled" }, sent: { icon: (0, Mt.jsx)(Kb, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: e3.sentToInstinct, shortLabel: e3.sent, variant: "disabled" } };
  }
  function Wc({ state: e3 }) {
    let t = xe(), r = (0, Qa.useMemo)(() => T9(t), [t]);
    return e3.available ? (0, Mt.jsxs)("div", { className: "file-product-actions", children: [e3.soldOut ? (0, Mt.jsx)(Dn, { className: "file-product-action", pill: true, "data-kind": "checkout", disabled: true, children: t.soldOut }) : (0, Mt.jsx)(Dn, { className: "file-product-action", variant: "primary", pill: true, "data-kind": "checkout", "data-sent": e3.sent, disabled: e3.disabled, onClick: () => {
      e3.send();
    }, states: r, state: e3.sending ? "sending" : e3.sent ? "sent" : "idle" }), e3.message && (0, Mt.jsxs)("p", { className: "file-caption", role: "status", children: [e3.message, e3.canRetry && (0, Mt.jsxs)(Mt.Fragment, { children: [" ", (0, Mt.jsx)("button", { type: "button", disabled: e3.retryDisabled, onClick: () => {
      e3.retry();
    }, children: t.retry })] })] }), (0, Mt.jsx)("p", { className: "file-visually-hidden", role: "status", children: e3.sent ? t.sentToInstinct : "" })] }) : null;
  }
  function O5(e3, t = Yx(void 0)) {
    return e3.badge ?? (e3.pick ? t.myPick : void 0);
  }
  function z5({ selection: e3 }) {
    let t = xe();
    return e3.options.length === 0 ? null : (0, lt.jsxs)("div", { className: "file-variants", children: [e3.options.map((r) => {
      let n = e3.chosen[r.name], a = Object.entries(e3.chosen).filter(([i]) => i !== r.name).map(([, i]) => i).join(", ");
      return (0, lt.jsxs)("fieldset", { className: "file-variant", children: [(0, lt.jsx)("legend", { className: "file-visually-hidden", children: r.name }), (0, lt.jsxs)("span", { className: "file-variant-label", "aria-hidden": "true", children: [r.name, n ? (0, lt.jsx)("b", { children: n }) : (0, lt.jsx)("em", { children: t.choose(r.name) })] }), r === e3.swatches ? (0, lt.jsx)("div", { className: "file-swatches", children: r.values.map(({ value: i, swatch: o }) => {
        let l = e3.soldOut(r.name, i);
        return (0, lt.jsx)("button", { type: "button", className: l ? "file-swatch is-out" : "file-swatch", style: { background: o }, "aria-pressed": i === n, "aria-label": l ? t.valueSoldOut(i, a) : i, title: i, onClick: () => e3.choose(r.name, i) }, i);
      }) }) : (0, lt.jsx)("div", { className: "file-sizes", children: r.values.map(({ value: i }) => {
        let o = e3.soldOut(r.name, i);
        return (0, lt.jsx)(Dn, { className: "file-size", selected: i === n, unavailable: o, "aria-label": o ? t.valueSoldOut(i, "") : void 0, onClick: () => e3.choose(r.name, i), children: i }, i);
      }) })] }, r.name);
    }), e3.stock && (0, lt.jsx)("p", { className: e3.stock.tone ? `file-stock ${e3.stock.tone}` : "file-stock", "aria-live": "polite", children: e3.stock.text })] });
  }
  function sm({ view: e3, limit: t, label: r = false, choose: n }) {
    let a = e3.swatches;
    if (!a || a.values.length < 2) return null;
    let i = a.values.slice(0, t), o = a.values.length - i.length;
    return (0, lt.jsxs)("div", { className: "file-dots", role: n ? "group" : "img", "aria-label": n ? a.name : `${a.name}: ${a.values.map(({ value: l }) => l).join(", ")}`, children: [i.map(({ value: l, swatch: s }) => {
      let u = l === e3.swatch ? "file-dot is-current" : "file-dot";
      return n ? (0, lt.jsx)("button", { type: "button", className: u, style: { background: s }, "aria-pressed": l === e3.swatch, "aria-label": l, title: l, onClick: () => n(a.name, l) }, l) : (0, lt.jsx)("span", { className: u, style: { background: s } }, l);
    }), o > 0 && (0, lt.jsxs)("span", { className: "file-dots-more", children: ["+", o] }), r && e3.swatch && (0, lt.jsx)("span", { className: "file-dots-label", children: e3.swatch })] });
  }
  function j5(e3, t = String) {
    let r = e3.filter((n) => n !== void 0);
    return r.length > 0 && r.every((n) => t(n) === t(r[0])) ? r[0] : void 0;
  }
  function F9({ options: e3, swatches: t, chosen: r, unresolved: n, variants: a, variant: i }, o) {
    if (!a.some((c) => c.available !== void 0 || c.low !== void 0)) return;
    if (n.length > 0) return { text: o.chooseToCheckStock(n[0]) };
    if (!i) return;
    let l = e3.map((c) => r[c.name]), s = e3.filter((c) => c !== t).map((c) => r[c.name]), u = (s.length > 0 ? s : l).join(", ");
    if (i.available === false) return { tone: "is-out", text: o.soldOutIn(l.join(", ")) };
    if (i.low !== void 0) return { tone: "is-low", text: o.onlyLeftIn(i.low, u) };
    if (i.available) return { tone: "is-in", text: o.inStockIn(u) };
  }
  function U5(e3, t, r) {
    let n = e3.options ?? [], a = n.length > 0 ? e3.variants ?? [] : [], i = e3.selection, o = n.find((b) => b.values.length > 0 && b.values.every((E) => E.swatch)), l = n.length === 0 ? i?.options ?? {} : Object.fromEntries(n.flatMap((b) => {
      let E = t[b.name] ?? i?.options[b.name] ?? (b.values.length === 1 ? b.values[0].value : void 0);
      return E !== void 0 && b.values.some((S) => S.value === E) ? [[b.name, E]] : [];
    })), s = n.length === 0 ? i?.unresolvedOptions ?? [] : n.filter((b) => l[b.name] === void 0).map((b) => b.name), u = a.filter((b) => jx(b, l)), c = n.length > 0 && s.length === 0 ? u[0] : void 0, d = o ? l[o.name] : void 0, f = Ux(u) ?? (o && d !== void 0 ? Ux(a.filter((b) => b.options[o.name] === d)) : void 0) ?? e3.photos, h = u.filter((b) => b.price !== void 0), v = h.length > 0 && h.every((b) => b.price === h[0].price) ? h[0].price : void 0, y = v !== void 0 && h.every((b) => b.listPrice === h[0].listPrice) ? h[0].listPrice : void 0, m = (b, E) => a.filter((S) => jx(S, { ...l, [b]: E })), g = Object.entries(t).every(([b, E]) => i?.options[b] === E), p = c?.id ?? (g ? i?.variantId : void 0), w = Object.fromEntries(Object.entries(i?.options ?? {}).filter(([b]) => !n.some((E) => E.name === b)));
    return { options: n, swatches: o, swatch: d, chosen: l, unresolved: s, variant: c, photos: f, price: v ?? e3.price, listPrice: y, merchant: e3.merchant && { name: e3.merchant.name, url: j5(u.map((b) => b.url)) ?? e3.merchant.url }, stock: F9({ options: n, swatches: o, chosen: l, unresolved: s, variants: a, variant: c }, r), soldOut: (b, E) => {
      let S = m(b, E);
      return S.length > 0 && S.every((R) => R.available === false);
    }, offered: (b, E) => a.length === 0 || m(b, E).length > 0, selection: n.length === 0 ? i : { ...i?.productId !== void 0 && { productId: i.productId }, ...p !== void 0 && { variantId: p }, options: { ...w, ...l }, unresolvedOptions: s, ...i?.quantity !== void 0 && { quantity: i.quantity } } };
  }
  function H5(e3) {
    let t = xe(), [r, n] = (0, I5.useState)({});
    return e3.map((a) => ({ ...U5(a, r[a.number] ?? {}, t), choose: (i, o) => n((l) => ({ ...l, [a.number]: { ...l[a.number], [i]: o } })) }));
  }
  function od(e3) {
    return H5([e3])[0];
  }
  function Yc(e3) {
    return e3.options.find((t) => t !== e3.swatches);
  }
  function B5(e3, t) {
    let r = Yc(e3);
    if (!r) return;
    let n = r.values.map((o) => o.value).filter((o) => e3.offered(r.name, o)), a = n.filter((o) => !e3.soldOut(r.name, o)), i = n.filter((o) => e3.soldOut(r.name, o));
    if (n.length !== 0) return a.length === 0 ? t.soldOut : i.length === 0 ? Hx(a) : a.length === 1 ? t.inStock(a[0]) : `${Hx(a)} \xB7 ${t.valuesSoldOut(i)}`;
  }
  function ld({ product: e3 }) {
    let t = O5(e3, xe());
    return (0, re.jsxs)("span", { className: "file-tags", children: [(0, re.jsx)("span", { className: e3.pick ? "file-pill is-pick" : "file-pill", children: e3.number }), t && (0, re.jsx)("span", { className: "file-badge", children: t })] });
  }
  function $9({ product: e3, photo: t }) {
    let r = xe();
    return (0, re.jsxs)("span", { className: "file-product-photo", children: [t ? (0, re.jsx)("img", { src: t.src, alt: t.alt, style: Zr(t), loading: "lazy" }) : (0, re.jsx)("span", { className: "file-product-empty", children: r.noPhoto }), (0, re.jsx)(ld, { product: e3 })] });
  }
  function um({ price: e3, listPrice: t }) {
    let r = xe();
    return (0, re.jsxs)(re.Fragment, { children: [(0, re.jsx)("bdi", { children: e3 }), t && (0, re.jsxs)("s", { className: "file-price-was", children: [(0, re.jsx)("span", { className: "file-visually-hidden", children: r.was }), (0, re.jsx)("bdi", { children: t })] })] });
  }
  function V5({ photos: e3, label: t, onOpen: r }) {
    let n = xe(), a = nd(), i = e3.map((o, l) => (0, re.jsx)("button", { type: "button", className: "file-product-zoom", "aria-label": n.fullScreen(o.alt), onClick: () => r(l), children: (0, re.jsx)("img", { src: o.src, alt: o.alt, style: Zr(o), loading: "lazy" }) }, o.src));
    return e3.length > 1 ? (0, re.jsx)(e5, { ...a, bleed: true, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": t, tabIndex: 0, children: i }) : (0, re.jsx)("div", { ...a, className: "file-photos is-single", "data-layout": "strip", role: "region", "aria-label": t, children: i });
  }
  function cm({ product: e3, view: t, source: r = false }) {
    let n = xe(), a = r && t.merchant ? (0, re.jsx)("span", { className: "file-product-source", children: (0, re.jsxs)(am, { href: t.merchant.url, children: [n.viewAt(t.merchant.name), (0, re.jsx)(Gb, { size: 14, strokeWidth: 1.7, "aria-hidden": "true" })] }) }) : null;
    return (0, re.jsxs)("div", { className: "file-product-copy", children: [(0, re.jsxs)("div", { className: "file-product-line", children: [(0, re.jsx)("span", { className: "file-product-name file-hover-underline", children: e3.title }), t.price && (0, re.jsx)("span", { className: "file-product-price", children: (0, re.jsx)(um, { price: t.price, listPrice: t.listPrice }) })] }), (e3.brand || e3.meta) && (0, re.jsx)("span", { className: "file-product-brand", children: [e3.brand, e3.meta].filter(Boolean).join(" \xB7 ") }), e3.note ? (0, re.jsxs)("p", { className: "file-product-note", children: [e3.note, a] }) : a && (0, re.jsx)("p", { className: "file-product-note", children: a })] });
  }
  function W5({ product: e3, selection: t, action: r }) {
    let n = xe(), [a, i] = (0, Zl.useState)(null), o = t.photos;
    return (0, re.jsxs)("div", { className: "file-product-detail", children: [(0, re.jsxs)("div", { className: "file-product-gallery", children: [o.length > 0 ? (0, re.jsx)(V5, { photos: o, label: n.photosOf(e3.title), onOpen: i }, o[0].src) : (0, re.jsx)("span", { className: "file-product-empty", children: n.noPhoto }), (0, re.jsx)(ld, { product: e3 })] }), (0, re.jsxs)("div", { className: "file-product-info", children: [(0, re.jsx)(cm, { product: e3, view: t, source: true }), (0, re.jsx)(z5, { selection: t }), e3.details && e3.details.length > 0 && (0, re.jsx)(ad, { items: e3.details }), e3.merchant && (r === void 0 ? (0, re.jsx)(O9, { product: e3, selection: t }) : r)] }), a !== null && (0, re.jsx)(rd, { photos: o, start: a, title: e3.title, detail: t.swatch, onClose: () => i(null) })] });
  }
  function O9({ product: e3, selection: t }) {
    let r = lm(e3, t);
    return (0, re.jsx)(Wc, { state: r });
  }
  function z9({ product: e3, action: t }) {
    let r = od(e3);
    return (0, re.jsx)(W5, { product: e3, selection: r, action: t });
  }
  function dm({ product: e3, selection: t, onClose: r, action: n }) {
    let [a, i] = (0, Zl.useState)(true), o = () => {
      i(false), r?.();
    }, l = (0, Zl.useRef)(null);
    return nm(l, a), a ? (0, re.jsxs)("dialog", { ref: l, className: "file-product-modal", "aria-label": e3.title, onCancel: (s) => {
      s.preventDefault(), o();
    }, onClick: (s) => {
      if (s.target !== s.currentTarget) return;
      let u = s.currentTarget.getBoundingClientRect();
      (s.clientX < u.left || s.clientX > u.right || s.clientY < u.top || s.clientY > u.bottom) && o();
    }, children: [(0, re.jsx)("div", { className: "file-product-modal-header", children: (0, re.jsx)(td, { onClick: o }) }), (0, re.jsx)(W5, { product: e3, selection: t, action: n })] }) : null;
  }
  function I9({ product: e3, onClose: t, action: r }) {
    let n = od(e3);
    return (0, re.jsx)(dm, { product: e3, selection: n, onClose: t, action: r });
  }
  function j9({ product: e3, expandable: t = true, defaultOpen: r = false, kind: n }) {
    let a = xe(), [i, o] = (0, id.useState)(r), l = od(e3), s = lm(e3, l), u = (0, fe.jsxs)(fe.Fragment, { children: [(0, fe.jsx)($9, { product: e3, photo: l.photos[0] }), (0, fe.jsx)(cm, { product: { ...e3, note: void 0 }, view: l })] });
    return (0, fe.jsxs)("article", { className: `file-product is-${n}`, children: [t ? (0, fe.jsx)("button", { type: "button", className: "file-product-toggle", "aria-haspopup": "dialog", "aria-label": a.view(e3.title), onClick: () => o(true), children: u }) : (0, fe.jsx)("div", { className: "file-product-preview", children: u }), (0, fe.jsx)(sm, { view: l, limit: 5, choose: t ? l.choose : void 0 }), t && (0, fe.jsx)(Wc, { state: s }), t && i && (0, fe.jsx)(dm, { product: e3, selection: l, action: (0, fe.jsx)(Wc, { state: s }), onClose: () => o(false) })] });
  }
  function U9({ product: e3 }) {
    let t = od(e3), r = lm(e3, t), [n, a] = (0, id.useState)(null), i = t.photos;
    return (0, fe.jsxs)("article", { className: "file-product is-card", children: [(0, fe.jsx)(H9, { product: e3, photos: i, onOpen: a }, i[0]?.src), (0, fe.jsxs)("div", { className: "file-product-info", children: [(0, fe.jsx)(cm, { product: e3, view: t, source: true }), (0, fe.jsx)(z5, { selection: t }), e3.details && e3.details.length > 0 && (0, fe.jsx)(ad, { items: e3.details }), (0, fe.jsx)(Wc, { state: r })] }), n !== null && (0, fe.jsx)(rd, { photos: i, start: n, title: e3.title, detail: t.swatch, onClose: () => a(null) })] });
  }
  function H9({ product: e3, photos: t, onOpen: r }) {
    let n = xe(), [a, i] = (0, id.useState)(0), o = a === 0 ? t : [t[a], ...t.filter((l, s) => s !== a)];
    return (0, fe.jsxs)("div", { className: "file-product-media", children: [t.length > 0 ? (0, fe.jsx)(V5, { photos: o, label: n.photosOf(e3.title), onOpen: (l) => r(t.indexOf(o[l])) }) : (0, fe.jsx)("span", { className: "file-product-empty", children: n.noPhoto }), (0, fe.jsx)(ld, { product: e3 }), t.length > 1 && (0, fe.jsx)("div", { className: "file-product-thumbs", children: t.map((l, s) => (0, fe.jsx)("button", { type: "button", className: "file-product-thumb", "aria-label": l.alt, "aria-pressed": s === a, onClick: () => i(s), children: (0, fe.jsx)("img", { src: l.src, alt: "", style: Zr(l), loading: "lazy" }) }, l.src)) })] });
  }
  function fm(e3) {
    return (0, fe.jsx)(j9, { ...e3, kind: "tile" });
  }
  function B9({ products: e3, expandable: t = true, children: r }) {
    if (e3 === void 0 && r === void 0) throw new Error("ProductGrid needs products={[...]}, an array of products, or ProductTile children.");
    return (0, fe.jsxs)("div", { className: "file-product-grid", children: [e3?.map((n) => (0, fe.jsx)(fm, { product: n, expandable: t }, n.number)), r || null] });
  }
  function V9({ products: e3, label: t, bleed: r = true }) {
    let n = nd();
    return (0, fe.jsx)("div", { ...n, className: r ? "file-product-carousel file-bleed" : "file-product-carousel", role: "region", "aria-label": t, tabIndex: 0, children: e3.map((a) => (0, fe.jsx)(fm, { product: a }, a.number)) });
  }
  function W9(e3, t) {
    let r = Yc(e3), n = r ? e3.chosen[r.name] : void 0;
    return !r || !n ? B5(e3, t) : e3.soldOut(r.name, n) ? t.valuesSoldOut([n]) : e3.variant?.available ? t.inStock(n) : n;
  }
  function Y9({ ratio: e3 = "portrait", number: t, pick: r = false, title: n, brand: a, price: i, photo: o, options: l, variants: s, selection: u, footer: c, lang: d, dir: f }) {
    let h = W0(d), v = U5({ price: i, photos: o ? [o] : [], options: l, variants: s, selection: u }, {}, h), y = o ?? v.photos[0], m = W9(v, h);
    return (0, Ct.jsxs)($5, { ratio: e3, footer: c, lang: d, dir: f, className: "file-product-image", children: [(0, Ct.jsxs)("div", { className: "file-product-image-photo", children: [y ? (0, Ct.jsx)("img", { src: y.src, alt: y.alt, style: { ...Zr(y), objectFit: "cover" } }) : (0, Ct.jsx)("span", { className: "file-product-empty", children: h.noPhoto }), t !== void 0 && (0, Ct.jsx)("span", { className: r ? "file-product-image-tag is-pick" : "file-product-image-tag", children: t })] }), (0, Ct.jsxs)("div", { className: "file-product-image-copy", children: [a && (0, Ct.jsx)("span", { className: "file-product-brand", children: a }), (0, Ct.jsxs)("div", { className: "file-product-line", children: [(0, Ct.jsx)("span", { className: "file-product-name file-hover-underline", children: n }), v.price && (0, Ct.jsx)("span", { className: "file-product-price", children: (0, Ct.jsx)(um, { price: v.price, listPrice: v.listPrice }) })] }), (v.swatches || m) && (0, Ct.jsxs)("div", { className: "file-product-image-variant", children: [(0, Ct.jsx)(sm, { view: v, limit: 6, label: true }), m && (0, Ct.jsx)("span", { className: "file-product-image-size", children: m })] })] })] });
  }
  function q9(e3, t) {
    let r = e3.values.map(({ value: n }) => n);
    return `${r.length} \xB7 ${r.slice(0, 3).join(", ")}${r.length > 3 ? t.andMore(r.length - 3) : ""}`;
  }
  function G9({ caption: e3, products: t, rows: r }) {
    let n = xe(), [a, i] = (0, Y5.useState)(null), o = H5(t), l = t.findIndex((h) => h.number === a), s = o.some((h) => h.price), u = o.find((h) => h.swatches)?.swatches, c = o.map(Yc).find((h) => h !== void 0), d = [...s ? [{ key: "price", cells: o.map((h) => ({ label: n.price, value: h.price ? (0, Re.jsx)(um, { price: h.price, listPrice: h.listPrice }) : "\u2014", className: "file-product-price", quiet: true })) }] : [], ...u ? [{ key: "colors", cells: o.map((h) => ({ label: n.plural((h.swatches ?? u).name), value: h.swatches ? q9(h.swatches, n) : "\u2014" })) }] : [], ...c ? [{ key: "sizes", cells: o.map((h) => {
      let v = Yc(h), y = n.plural((v ?? c).name);
      return { label: v && h.swatch ? n.optionIn(y, h.swatch) : y, value: (v && B5(h, n)) ?? "\u2014" };
    }) }] : [], ...r.map((h) => ({ key: `row:${h.label}`, cells: h.values.map((v, y) => ({ label: h.label, value: (0, Re.jsx)("bdi", { children: v }), className: h.best === y ? "is-best" : void 0 })) }))], f = (h, v) => ({ order: h * (d.length + 1) + v });
    return (0, Re.jsxs)(Re.Fragment, { children: [(0, Re.jsx)("div", { className: "file-table-scroll", role: "region", "aria-label": e3, tabIndex: 0, children: (0, Re.jsxs)("table", { className: "file-table is-products is-stacking", style: { "--file-table-columns": t.length }, children: [(0, Re.jsx)("caption", { className: "file-visually-hidden", children: e3 }), (0, Re.jsx)("thead", { children: (0, Re.jsx)("tr", { children: t.map((h, v) => {
      let y = o[v].photos[0];
      return (0, Re.jsxs)("th", { scope: "col", style: f(v, 0), children: [(0, Re.jsx)("button", { type: "button", className: "file-product-toggle", "aria-haspopup": "dialog", "aria-label": n.view(h.title), onClick: () => i(h.number), children: (0, Re.jsxs)("span", { className: "file-product-head", children: [(0, Re.jsxs)("span", { className: "file-product-head-photo", children: [y ? (0, Re.jsx)("img", { src: y.src, alt: y.alt, style: Zr(y), loading: "lazy" }) : (0, Re.jsx)("span", { className: "file-product-empty", children: n.noPhoto }), (0, Re.jsx)(ld, { product: h })] }), (0, Re.jsx)("span", { className: "file-product-name file-hover-underline", children: h.title }), (h.brand || h.meta) && (0, Re.jsx)("span", { className: "file-product-brand", children: [h.brand, h.meta].filter(Boolean).join(" \xB7 ") })] }) }), (0, Re.jsx)(sm, { view: o[v], limit: 6, label: true, choose: o[v].choose })] }, h.number);
    }) }) }), (0, Re.jsx)("tbody", { children: d.map((h, v) => (0, Re.jsx)("tr", { children: h.cells.map((y, m) => (0, Re.jsxs)("td", { className: y.className, style: f(m, v + 1), children: [(0, Re.jsx)("span", { className: y.quiet ? "file-visually-hidden" : "file-cell-label", children: y.label }), y.value] }, m)) }, h.key)) })] }) }), l >= 0 && (0, Re.jsx)(dm, { product: t[l], selection: o[l], onClose: () => i(null) })] });
  }
  function K9({ children: e3 }) {
    return (0, Dt.jsx)("div", { className: "file-recommendations", children: e3 });
  }
  function Q9({ number: e3, title: t, eyebrow: r, recommended: n = false, photos: a = [], photoCredit: i, links: o, children: l }) {
    let s = xe(), u = q5.default.useId();
    return (0, Dt.jsxs)("section", { className: "file-recommendation", "data-recommended": n, "aria-labelledby": u, children: [(0, Dt.jsxs)("header", { className: "file-recommendation-header", children: [(0, Dt.jsxs)("div", { className: "file-recommendation-meta", children: [(0, Dt.jsx)("span", { className: "file-recommendation-number", children: e3 }), r && (0, Dt.jsx)("p", { className: "file-recommendation-eyebrow", children: r }), n && (0, Dt.jsx)("span", { className: "file-recommendation-badge", children: s.recommended })] }), (0, Dt.jsx)("h2", { id: u, className: "file-recommendation-title", children: t })] }), a.length > 0 && (0, Dt.jsxs)("figure", { className: "file-recommendation-photos", children: [(0, Dt.jsx)(im, { items: a, label: s.photosOf(t), layout: "strip", bleed: false }), i && (0, Dt.jsx)("figcaption", { className: "file-caption", children: i })] }), (0, Dt.jsx)("div", { className: "file-recommendation-content", children: l }), o && o.length > 0 && (0, Dt.jsx)("footer", { className: "file-recommendation-links", children: o.map((c) => (0, Dt.jsx)(am, { href: c.href, children: c.label }, c.href)) })] });
  }
  function X9() {
    let e3 = qe(), t = bn();
    return (0, hm.useEffect)(() => {
      window.instinctFile.route(e3.pathname + e3.search + e3.hash);
    }, [e3]), (0, hm.useEffect)(() => {
      let r = (n) => t(n.detail, { replace: true });
      return window.addEventListener("instinct-route", r), () => window.removeEventListener("instinct-route", r);
    }, [t]), null;
  }
  function Z9({ children: e3 }) {
    return (0, sd.jsxs)(ec, { initialEntries: [window.instinctFile.initialRoute], children: [(0, sd.jsx)(X9, {}), e3] });
  }
  var import_meta, p3, pd, m3, g3, v3, y3, wr, Dm, w3, O, Im, ee, Hm, we, Jm, tg, iy, ol, uy, Q2, Z2, _M, TM, AM, FM, z4, $t, U, H, hr, nt, G, b2, Jn, Zh, z, fr, Vy, Wy, dr, ul, Hr, gl, vl, rp, cy, cl, mr, Vk, Yk, Qk, Xk, Zk, Jk, eE, tE, hy, ap, ip, er, oE, lE, sE, uE, Oa, Ku, Qu, lp, it, rw, ea, dE, vy, uw, pE, mE, gE, cw, vE, $i, wl, pn, dw, fw, hw, Ta, _i, Zn, Ti, yE, Ey, fp, Ry, CE, Mr, Wr, bl, qi, Gi, Hi, Mw, ht, na, Ot, mp, Vr, Lw, TE, AE, Tw, Fw, OE, zw, zh, HE, Ay, $y, VE, Oy, WE, Ua, qE, GE, KE, Kw, Fu, $u, Lu, aR, n2, Rp, Sp, Cp, Uu, Dp, Np, a2, i2, zi, Gh, o2, Ii, l2, Kh, s2, u2, Qh, c2, lR, jh, sR, cR, Pu, mR, gR, Nr, h2, lc, Mp, _u, zu, TR, Hu, dc, Hh, vr, By, Bu, Qi, BR, Xi, Nl, vc, WR, YR, ep, Au, Lr, Ji, Rc, x4, Zi, pt, n0, iS, oS, h4, Sc, Cc, a0, g4, k4, E4, Dc, R4, r0, i4, M4, FS, s4, $S, u4, F4, $4, ot, eo, HS, K, Fl, MN, G5, hm, Xe, jN, d0, J4, ex, m0, Il, BS, G4, I4, VS, WS, c0, j4, YS, qS, GS, KS, QS, XS, ZS, JS, K4, Me, Q4, tC, rC, nC, aC, iC, oC, lC, Rn, oa, to, u0, $l, sC, se, la, uC, cC, dC, fC, hC, pC, Ol, ro, mC, X4, gC, vC, H4, yC, zl, wC, xC, bC, kC, EC, RC, CC, Mc, h0, LC, V4, W4, AC, FC, p0, $C, g0, v0, He, Gl, Kc, Jx, eb, Fc, Ub, Ql, Cn, ha, C, Nt, Jc, Wl, Lt, he, Xb, tr, Ja, ca, V0, I, ue, F, uo, Fe, S5, Ee, Ul, _5, T5, A5, Pr, ua, id, Qa, Mt, Zl, lt, I5, re, fe, Ct, Y5, Re, q5, Dt, zC, Bx, IC, jC, UC, HC, BC, VC, Vx, Wx, Tr, Pt, qc, WC, YC, qC, GC, KC, QC, XC, ZC, JC, tx, e8, t8, r8, Gc, $c, a8, i8, Qx, Xx, rb, f8, BN, VN, h8, rx, N0, M0, L0, ax, Ka, oo, ao, Hl, Kr, x8, b8, k8, E8, R8, S8, C8, ix, lb, sb, Ic, ub, cb, db, fb, io, hb, L8, gb, G0, K0, Qc, Vl, hx, px, mx, Xc, F0, WN, YN, $0, E0, W8, Y8, G8, K8, Q8, X8, gx, u7, Rb, yx, xx, bx, _c, Sb, Cb, R0, S0, J0, qN, Nb, GN, Mb, KN, Lb, QN, Pb, XN, _b, ZN, Tb, JN, w7, eM, Ab, x7, b7, k7, E7, R7, S7, tM, rM, nM, aM, iM, oM, lM, Fb, C7, D7, N7, M7, L7, P7, sM, uM, cM, dM, fM, hM, pM, $b, mM, Ob, gM, em, vM, tm, yM, kx, U7, H7, Ex, Rx, Q7, X7, Z7, eD, z0, I0, Wa, tD, rD, sD, uD, fD, hD, Zc, rm, mD, Vb, Wb, Yb, gD, qb, yD, wD, Dx, xD, bD, kD, ed, ED, Gb, RD, Kb, SD, CD, DD, ND, MD, LD, TD, AD, jl, Zb, Mx, Lx, Px, B0, BD, i5, VD, YD, b5, Yl, Vc, ql, qD, _x, r9, n9, Tx, Ax, Yt, h9, p9, m9, g9, v9, y9, w9, D0, Ox, C5, x9, zx, k9, Xr, D9, Ix, N9, L5, P9, jx, A9, Ux, Hx, sd;
  var init_kit = __esm({
    "../../skills/platform/files/render/page-kit/kit.js"() {
      import_meta = {};
      p3 = Object.create;
      pd = Object.defineProperty;
      m3 = Object.getOwnPropertyDescriptor;
      g3 = Object.getOwnPropertyNames;
      v3 = Object.getPrototypeOf;
      y3 = Object.prototype.hasOwnProperty;
      wr = (e3, t) => () => (t || e3((t = { exports: {} }).exports, t), t.exports);
      Dm = (e3, t) => {
        for (var r in t) pd(e3, r, { get: t[r], enumerable: true });
      };
      w3 = (e3, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function") for (let a of g3(t)) !y3.call(e3, a) && a !== r && pd(e3, a, { get: () => t[a], enumerable: !(n = m3(t, a)) || n.enumerable });
        return e3;
      };
      O = (e3, t, r) => (r = e3 != null ? p3(v3(e3)) : {}, w3(t || !e3 || !e3.__esModule ? pd(r, "default", { value: e3, enumerable: true }) : r, e3));
      Im = wr((ce) => {
        "use strict";
        var po = /* @__PURE__ */ Symbol.for("react.element"), x3 = /* @__PURE__ */ Symbol.for("react.portal"), b3 = /* @__PURE__ */ Symbol.for("react.fragment"), k3 = /* @__PURE__ */ Symbol.for("react.strict_mode"), E3 = /* @__PURE__ */ Symbol.for("react.profiler"), R3 = /* @__PURE__ */ Symbol.for("react.provider"), S3 = /* @__PURE__ */ Symbol.for("react.context"), C3 = /* @__PURE__ */ Symbol.for("react.forward_ref"), D3 = /* @__PURE__ */ Symbol.for("react.suspense"), N3 = /* @__PURE__ */ Symbol.for("react.memo"), M3 = /* @__PURE__ */ Symbol.for("react.lazy"), Nm = Symbol.iterator;
        function L3(e3) {
          return e3 === null || typeof e3 != "object" ? null : (e3 = Nm && e3[Nm] || e3["@@iterator"], typeof e3 == "function" ? e3 : null);
        }
        var Pm = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, _m = Object.assign, Tm = {};
        function ri(e3, t, r) {
          this.props = e3, this.context = t, this.refs = Tm, this.updater = r || Pm;
        }
        ri.prototype.isReactComponent = {};
        ri.prototype.setState = function(e3, t) {
          if (typeof e3 != "object" && typeof e3 != "function" && e3 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, e3, t, "setState");
        };
        ri.prototype.forceUpdate = function(e3) {
          this.updater.enqueueForceUpdate(this, e3, "forceUpdate");
        };
        function Am() {
        }
        Am.prototype = ri.prototype;
        function gd(e3, t, r) {
          this.props = e3, this.context = t, this.refs = Tm, this.updater = r || Pm;
        }
        var vd = gd.prototype = new Am();
        vd.constructor = gd;
        _m(vd, ri.prototype);
        vd.isPureReactComponent = true;
        var Mm = Array.isArray, Fm = Object.prototype.hasOwnProperty, yd = { current: null }, $m = { key: true, ref: true, __self: true, __source: true };
        function Om(e3, t, r) {
          var n, a = {}, i = null, o = null;
          if (t != null) for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Fm.call(t, n) && !$m.hasOwnProperty(n) && (a[n] = t[n]);
          var l = arguments.length - 2;
          if (l === 1) a.children = r;
          else if (1 < l) {
            for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
            a.children = s;
          }
          if (e3 && e3.defaultProps) for (n in l = e3.defaultProps, l) a[n] === void 0 && (a[n] = l[n]);
          return { $$typeof: po, type: e3, key: i, ref: o, props: a, _owner: yd.current };
        }
        function P3(e3, t) {
          return { $$typeof: po, type: e3.type, key: t, ref: e3.ref, props: e3.props, _owner: e3._owner };
        }
        function wd(e3) {
          return typeof e3 == "object" && e3 !== null && e3.$$typeof === po;
        }
        function _3(e3) {
          var t = { "=": "=0", ":": "=2" };
          return "$" + e3.replace(/[=:]/g, function(r) {
            return t[r];
          });
        }
        var Lm = /\/+/g;
        function md(e3, t) {
          return typeof e3 == "object" && e3 !== null && e3.key != null ? _3("" + e3.key) : t.toString(36);
        }
        function ls(e3, t, r, n, a) {
          var i = typeof e3;
          (i === "undefined" || i === "boolean") && (e3 = null);
          var o = false;
          if (e3 === null) o = true;
          else switch (i) {
            case "string":
            case "number":
              o = true;
              break;
            case "object":
              switch (e3.$$typeof) {
                case po:
                case x3:
                  o = true;
              }
          }
          if (o) return o = e3, a = a(o), e3 = n === "" ? "." + md(o, 0) : n, Mm(a) ? (r = "", e3 != null && (r = e3.replace(Lm, "$&/") + "/"), ls(a, t, r, "", function(u) {
            return u;
          })) : a != null && (wd(a) && (a = P3(a, r + (!a.key || o && o.key === a.key ? "" : ("" + a.key).replace(Lm, "$&/") + "/") + e3)), t.push(a)), 1;
          if (o = 0, n = n === "" ? "." : n + ":", Mm(e3)) for (var l = 0; l < e3.length; l++) {
            i = e3[l];
            var s = n + md(i, l);
            o += ls(i, t, r, s, a);
          }
          else if (s = L3(e3), typeof s == "function") for (e3 = s.call(e3), l = 0; !(i = e3.next()).done; ) i = i.value, s = n + md(i, l++), o += ls(i, t, r, s, a);
          else if (i === "object") throw t = String(e3), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e3).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
          return o;
        }
        function os(e3, t, r) {
          if (e3 == null) return e3;
          var n = [], a = 0;
          return ls(e3, n, "", "", function(i) {
            return t.call(r, i, a++);
          }), n;
        }
        function T3(e3) {
          if (e3._status === -1) {
            var t = e3._result;
            t = t(), t.then(function(r) {
              (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = r);
            }, function(r) {
              (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = r);
            }), e3._status === -1 && (e3._status = 0, e3._result = t);
          }
          if (e3._status === 1) return e3._result.default;
          throw e3._result;
        }
        var _t = { current: null }, ss = { transition: null }, A3 = { ReactCurrentDispatcher: _t, ReactCurrentBatchConfig: ss, ReactCurrentOwner: yd };
        function zm() {
          throw Error("act(...) is not supported in production builds of React.");
        }
        ce.Children = { map: os, forEach: function(e3, t, r) {
          os(e3, function() {
            t.apply(this, arguments);
          }, r);
        }, count: function(e3) {
          var t = 0;
          return os(e3, function() {
            t++;
          }), t;
        }, toArray: function(e3) {
          return os(e3, function(t) {
            return t;
          }) || [];
        }, only: function(e3) {
          if (!wd(e3)) throw Error("React.Children.only expected to receive a single React element child.");
          return e3;
        } };
        ce.Component = ri;
        ce.Fragment = b3;
        ce.Profiler = E3;
        ce.PureComponent = gd;
        ce.StrictMode = k3;
        ce.Suspense = D3;
        ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A3;
        ce.act = zm;
        ce.cloneElement = function(e3, t, r) {
          if (e3 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e3 + ".");
          var n = _m({}, e3.props), a = e3.key, i = e3.ref, o = e3._owner;
          if (t != null) {
            if (t.ref !== void 0 && (i = t.ref, o = yd.current), t.key !== void 0 && (a = "" + t.key), e3.type && e3.type.defaultProps) var l = e3.type.defaultProps;
            for (s in t) Fm.call(t, s) && !$m.hasOwnProperty(s) && (n[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (s === 1) n.children = r;
          else if (1 < s) {
            l = Array(s);
            for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
            n.children = l;
          }
          return { $$typeof: po, type: e3.type, key: a, ref: i, props: n, _owner: o };
        };
        ce.createContext = function(e3) {
          return e3 = { $$typeof: S3, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e3.Provider = { $$typeof: R3, _context: e3 }, e3.Consumer = e3;
        };
        ce.createElement = Om;
        ce.createFactory = function(e3) {
          var t = Om.bind(null, e3);
          return t.type = e3, t;
        };
        ce.createRef = function() {
          return { current: null };
        };
        ce.forwardRef = function(e3) {
          return { $$typeof: C3, render: e3 };
        };
        ce.isValidElement = wd;
        ce.lazy = function(e3) {
          return { $$typeof: M3, _payload: { _status: -1, _result: e3 }, _init: T3 };
        };
        ce.memo = function(e3, t) {
          return { $$typeof: N3, type: e3, compare: t === void 0 ? null : t };
        };
        ce.startTransition = function(e3) {
          var t = ss.transition;
          ss.transition = {};
          try {
            e3();
          } finally {
            ss.transition = t;
          }
        };
        ce.unstable_act = zm;
        ce.useCallback = function(e3, t) {
          return _t.current.useCallback(e3, t);
        };
        ce.useContext = function(e3) {
          return _t.current.useContext(e3);
        };
        ce.useDebugValue = function() {
        };
        ce.useDeferredValue = function(e3) {
          return _t.current.useDeferredValue(e3);
        };
        ce.useEffect = function(e3, t) {
          return _t.current.useEffect(e3, t);
        };
        ce.useId = function() {
          return _t.current.useId();
        };
        ce.useImperativeHandle = function(e3, t, r) {
          return _t.current.useImperativeHandle(e3, t, r);
        };
        ce.useInsertionEffect = function(e3, t) {
          return _t.current.useInsertionEffect(e3, t);
        };
        ce.useLayoutEffect = function(e3, t) {
          return _t.current.useLayoutEffect(e3, t);
        };
        ce.useMemo = function(e3, t) {
          return _t.current.useMemo(e3, t);
        };
        ce.useReducer = function(e3, t, r) {
          return _t.current.useReducer(e3, t, r);
        };
        ce.useRef = function(e3) {
          return _t.current.useRef(e3);
        };
        ce.useState = function(e3) {
          return _t.current.useState(e3);
        };
        ce.useSyncExternalStore = function(e3, t, r) {
          return _t.current.useSyncExternalStore(e3, t, r);
        };
        ce.useTransition = function() {
          return _t.current.useTransition();
        };
        ce.version = "18.3.1";
      });
      ee = wr((tN, jm) => {
        "use strict";
        jm.exports = Im();
      });
      Hm = wr((us) => {
        "use strict";
        var F3 = ee(), $3 = /* @__PURE__ */ Symbol.for("react.element"), O3 = /* @__PURE__ */ Symbol.for("react.fragment"), z3 = Object.prototype.hasOwnProperty, I3 = F3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j3 = { key: true, ref: true, __self: true, __source: true };
        function Um(e3, t, r) {
          var n, a = {}, i = null, o = null;
          r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
          for (n in t) z3.call(t, n) && !j3.hasOwnProperty(n) && (a[n] = t[n]);
          if (e3 && e3.defaultProps) for (n in t = e3.defaultProps, t) a[n] === void 0 && (a[n] = t[n]);
          return { $$typeof: $3, type: e3, key: i, ref: o, props: a, _owner: I3.current };
        }
        us.Fragment = O3;
        us.jsx = Um;
        us.jsxs = Um;
      });
      we = wr((nN, Bm) => {
        "use strict";
        Bm.exports = Hm();
      });
      Jm = wr((Se) => {
        "use strict";
        function Ed(e3, t) {
          var r = e3.length;
          e3.push(t);
          e: for (; 0 < r; ) {
            var n = r - 1 >>> 1, a = e3[n];
            if (0 < cs(a, t)) e3[n] = t, e3[r] = a, r = n;
            else break e;
          }
        }
        function xr(e3) {
          return e3.length === 0 ? null : e3[0];
        }
        function fs(e3) {
          if (e3.length === 0) return null;
          var t = e3[0], r = e3.pop();
          if (r !== t) {
            e3[0] = r;
            e: for (var n = 0, a = e3.length, i = a >>> 1; n < i; ) {
              var o = 2 * (n + 1) - 1, l = e3[o], s = o + 1, u = e3[s];
              if (0 > cs(l, r)) s < a && 0 > cs(u, l) ? (e3[n] = u, e3[s] = r, n = s) : (e3[n] = l, e3[o] = r, n = o);
              else if (s < a && 0 > cs(u, r)) e3[n] = u, e3[s] = r, n = s;
              else break e;
            }
          }
          return t;
        }
        function cs(e3, t) {
          var r = e3.sortIndex - t.sortIndex;
          return r !== 0 ? r : e3.id - t.id;
        }
        typeof performance == "object" && typeof performance.now == "function" ? (Vm = performance, Se.unstable_now = function() {
          return Vm.now();
        }) : (xd = Date, Wm = xd.now(), Se.unstable_now = function() {
          return xd.now() - Wm;
        });
        var Vm, xd, Wm, $r = [], Pn = [], U3 = 1, ar = null, yt = 3, hs = false, ya = false, go = false, Gm = typeof setTimeout == "function" ? setTimeout : null, Km = typeof clearTimeout == "function" ? clearTimeout : null, Ym = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Rd(e3) {
          for (var t = xr(Pn); t !== null; ) {
            if (t.callback === null) fs(Pn);
            else if (t.startTime <= e3) fs(Pn), t.sortIndex = t.expirationTime, Ed($r, t);
            else break;
            t = xr(Pn);
          }
        }
        function Sd(e3) {
          if (go = false, Rd(e3), !ya) if (xr($r) !== null) ya = true, Dd(Cd);
          else {
            var t = xr(Pn);
            t !== null && Nd(Sd, t.startTime - e3);
          }
        }
        function Cd(e3, t) {
          ya = false, go && (go = false, Km(vo), vo = -1), hs = true;
          var r = yt;
          try {
            for (Rd(t), ar = xr($r); ar !== null && (!(ar.expirationTime > t) || e3 && !Zm()); ) {
              var n = ar.callback;
              if (typeof n == "function") {
                ar.callback = null, yt = ar.priorityLevel;
                var a = n(ar.expirationTime <= t);
                t = Se.unstable_now(), typeof a == "function" ? ar.callback = a : ar === xr($r) && fs($r), Rd(t);
              } else fs($r);
              ar = xr($r);
            }
            if (ar !== null) var i = true;
            else {
              var o = xr(Pn);
              o !== null && Nd(Sd, o.startTime - t), i = false;
            }
            return i;
          } finally {
            ar = null, yt = r, hs = false;
          }
        }
        var ps = false, ds = null, vo = -1, Qm = 5, Xm = -1;
        function Zm() {
          return !(Se.unstable_now() - Xm < Qm);
        }
        function bd() {
          if (ds !== null) {
            var e3 = Se.unstable_now();
            Xm = e3;
            var t = true;
            try {
              t = ds(true, e3);
            } finally {
              t ? mo() : (ps = false, ds = null);
            }
          } else ps = false;
        }
        var mo;
        typeof Ym == "function" ? mo = function() {
          Ym(bd);
        } : typeof MessageChannel < "u" ? (kd = new MessageChannel(), qm = kd.port2, kd.port1.onmessage = bd, mo = function() {
          qm.postMessage(null);
        }) : mo = function() {
          Gm(bd, 0);
        };
        var kd, qm;
        function Dd(e3) {
          ds = e3, ps || (ps = true, mo());
        }
        function Nd(e3, t) {
          vo = Gm(function() {
            e3(Se.unstable_now());
          }, t);
        }
        Se.unstable_IdlePriority = 5;
        Se.unstable_ImmediatePriority = 1;
        Se.unstable_LowPriority = 4;
        Se.unstable_NormalPriority = 3;
        Se.unstable_Profiling = null;
        Se.unstable_UserBlockingPriority = 2;
        Se.unstable_cancelCallback = function(e3) {
          e3.callback = null;
        };
        Se.unstable_continueExecution = function() {
          ya || hs || (ya = true, Dd(Cd));
        };
        Se.unstable_forceFrameRate = function(e3) {
          0 > e3 || 125 < e3 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Qm = 0 < e3 ? Math.floor(1e3 / e3) : 5;
        };
        Se.unstable_getCurrentPriorityLevel = function() {
          return yt;
        };
        Se.unstable_getFirstCallbackNode = function() {
          return xr($r);
        };
        Se.unstable_next = function(e3) {
          switch (yt) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = yt;
          }
          var r = yt;
          yt = t;
          try {
            return e3();
          } finally {
            yt = r;
          }
        };
        Se.unstable_pauseExecution = function() {
        };
        Se.unstable_requestPaint = function() {
        };
        Se.unstable_runWithPriority = function(e3, t) {
          switch (e3) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e3 = 3;
          }
          var r = yt;
          yt = e3;
          try {
            return t();
          } finally {
            yt = r;
          }
        };
        Se.unstable_scheduleCallback = function(e3, t, r) {
          var n = Se.unstable_now();
          switch (typeof r == "object" && r !== null ? (r = r.delay, r = typeof r == "number" && 0 < r ? n + r : n) : r = n, e3) {
            case 1:
              var a = -1;
              break;
            case 2:
              a = 250;
              break;
            case 5:
              a = 1073741823;
              break;
            case 4:
              a = 1e4;
              break;
            default:
              a = 5e3;
          }
          return a = r + a, e3 = { id: U3++, callback: t, priorityLevel: e3, startTime: r, expirationTime: a, sortIndex: -1 }, r > n ? (e3.sortIndex = r, Ed(Pn, e3), xr($r) === null && e3 === xr(Pn) && (go ? (Km(vo), vo = -1) : go = true, Nd(Sd, r - n))) : (e3.sortIndex = a, Ed($r, e3), ya || hs || (ya = true, Dd(Cd))), e3;
        };
        Se.unstable_shouldYield = Zm;
        Se.unstable_wrapCallback = function(e3) {
          var t = yt;
          return function() {
            var r = yt;
            yt = t;
            try {
              return e3.apply(this, arguments);
            } finally {
              yt = r;
            }
          };
        };
      });
      tg = wr((iN, eg) => {
        "use strict";
        eg.exports = Jm();
      });
      iy = wr((Jt) => {
        "use strict";
        var H3 = ee(), Xt = tg();
        function $(e3) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e3, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
          return "Minified React error #" + e3 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var sv = /* @__PURE__ */ new Set(), Io = {};
        function Pa(e3, t) {
          Ei(e3, t), Ei(e3 + "Capture", t);
        }
        function Ei(e3, t) {
          for (Io[e3] = t, e3 = 0; e3 < t.length; e3++) sv.add(t[e3]);
        }
        var un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xd = Object.prototype.hasOwnProperty, B3 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, rg = {}, ng = {};
        function V3(e3) {
          return Xd.call(ng, e3) ? true : Xd.call(rg, e3) ? false : B3.test(e3) ? ng[e3] = true : (rg[e3] = true, false);
        }
        function W3(e3, t, r, n) {
          if (r !== null && r.type === 0) return false;
          switch (typeof t) {
            case "function":
            case "symbol":
              return true;
            case "boolean":
              return n ? false : r !== null ? !r.acceptsBooleans : (e3 = e3.toLowerCase().slice(0, 5), e3 !== "data-" && e3 !== "aria-");
            default:
              return false;
          }
        }
        function Y3(e3, t, r, n) {
          if (t === null || typeof t > "u" || W3(e3, t, r, n)) return true;
          if (n) return false;
          if (r !== null) switch (r.type) {
            case 3:
              return !t;
            case 4:
              return t === false;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
          return false;
        }
        function Ft(e3, t, r, n, a, i, o) {
          this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e3, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
        }
        var ft = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e3) {
          ft[e3] = new Ft(e3, 0, false, e3, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e3) {
          var t = e3[0];
          ft[t] = new Ft(t, 1, false, e3[1], null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 2, false, e3.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 2, false, e3, null, false, false);
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e3) {
          ft[e3] = new Ft(e3, 3, false, e3.toLowerCase(), null, false, false);
        });
        ["checked", "multiple", "muted", "selected"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 3, true, e3, null, false, false);
        });
        ["capture", "download"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 4, false, e3, null, false, false);
        });
        ["cols", "rows", "size", "span"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 6, false, e3, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 5, false, e3.toLowerCase(), null, false, false);
        });
        var Vf = /[\-:]([a-z])/g;
        function Wf(e3) {
          return e3[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e3) {
          var t = e3.replace(Vf, Wf);
          ft[t] = new Ft(t, 1, false, e3, null, false, false);
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e3) {
          var t = e3.replace(Vf, Wf);
          ft[t] = new Ft(t, 1, false, e3, "http://www.w3.org/1999/xlink", false, false);
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function(e3) {
          var t = e3.replace(Vf, Wf);
          ft[t] = new Ft(t, 1, false, e3, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 1, false, e3.toLowerCase(), null, false, false);
        });
        ft.xlinkHref = new Ft("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 1, false, e3.toLowerCase(), null, true, true);
        });
        function Yf(e3, t, r, n) {
          var a = ft.hasOwnProperty(t) ? ft[t] : null;
          (a !== null ? a.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Y3(t, r, a, n) && (r = null), n || a === null ? V3(t) && (r === null ? e3.removeAttribute(t) : e3.setAttribute(t, "" + r)) : a.mustUseProperty ? e3[a.propertyName] = r === null ? a.type === 3 ? false : "" : r : (t = a.attributeName, n = a.attributeNamespace, r === null ? e3.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === true ? "" : "" + r, n ? e3.setAttributeNS(n, t, r) : e3.setAttribute(t, r))));
        }
        var hn = H3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ms = /* @__PURE__ */ Symbol.for("react.element"), ii = /* @__PURE__ */ Symbol.for("react.portal"), oi = /* @__PURE__ */ Symbol.for("react.fragment"), qf = /* @__PURE__ */ Symbol.for("react.strict_mode"), Zd = /* @__PURE__ */ Symbol.for("react.profiler"), uv = /* @__PURE__ */ Symbol.for("react.provider"), cv = /* @__PURE__ */ Symbol.for("react.context"), Gf = /* @__PURE__ */ Symbol.for("react.forward_ref"), Jd = /* @__PURE__ */ Symbol.for("react.suspense"), ef = /* @__PURE__ */ Symbol.for("react.suspense_list"), Kf = /* @__PURE__ */ Symbol.for("react.memo"), Tn = /* @__PURE__ */ Symbol.for("react.lazy"), dv = /* @__PURE__ */ Symbol.for("react.offscreen"), ag = Symbol.iterator;
        function yo(e3) {
          return e3 === null || typeof e3 != "object" ? null : (e3 = ag && e3[ag] || e3["@@iterator"], typeof e3 == "function" ? e3 : null);
        }
        var ze = Object.assign, Md;
        function Co(e3) {
          if (Md === void 0) try {
            throw Error();
          } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            Md = t && t[1] || "";
          }
          return `
` + Md + e3;
        }
        var Ld = false;
        function Pd(e3, t) {
          if (!e3 || Ld) return "";
          Ld = true;
          var r = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t) if (t = function() {
              throw Error();
            }, Object.defineProperty(t.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(t, []);
              } catch (u) {
                var n = u;
              }
              Reflect.construct(e3, [], t);
            } else {
              try {
                t.call();
              } catch (u) {
                n = u;
              }
              e3.call(t.prototype);
            }
            else {
              try {
                throw Error();
              } catch (u) {
                n = u;
              }
              e3();
            }
          } catch (u) {
            if (u && n && typeof u.stack == "string") {
              for (var a = u.stack.split(`
`), i = n.stack.split(`
`), o = a.length - 1, l = i.length - 1; 1 <= o && 0 <= l && a[o] !== i[l]; ) l--;
              for (; 1 <= o && 0 <= l; o--, l--) if (a[o] !== i[l]) {
                if (o !== 1 || l !== 1) do
                  if (o--, l--, 0 > l || a[o] !== i[l]) {
                    var s = `
` + a[o].replace(" at new ", " at ");
                    return e3.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e3.displayName)), s;
                  }
                while (1 <= o && 0 <= l);
                break;
              }
            }
          } finally {
            Ld = false, Error.prepareStackTrace = r;
          }
          return (e3 = e3 ? e3.displayName || e3.name : "") ? Co(e3) : "";
        }
        function q3(e3) {
          switch (e3.tag) {
            case 5:
              return Co(e3.type);
            case 16:
              return Co("Lazy");
            case 13:
              return Co("Suspense");
            case 19:
              return Co("SuspenseList");
            case 0:
            case 2:
            case 15:
              return e3 = Pd(e3.type, false), e3;
            case 11:
              return e3 = Pd(e3.type.render, false), e3;
            case 1:
              return e3 = Pd(e3.type, true), e3;
            default:
              return "";
          }
        }
        function tf(e3) {
          if (e3 == null) return null;
          if (typeof e3 == "function") return e3.displayName || e3.name || null;
          if (typeof e3 == "string") return e3;
          switch (e3) {
            case oi:
              return "Fragment";
            case ii:
              return "Portal";
            case Zd:
              return "Profiler";
            case qf:
              return "StrictMode";
            case Jd:
              return "Suspense";
            case ef:
              return "SuspenseList";
          }
          if (typeof e3 == "object") switch (e3.$$typeof) {
            case cv:
              return (e3.displayName || "Context") + ".Consumer";
            case uv:
              return (e3._context.displayName || "Context") + ".Provider";
            case Gf:
              var t = e3.render;
              return e3 = e3.displayName, e3 || (e3 = t.displayName || t.name || "", e3 = e3 !== "" ? "ForwardRef(" + e3 + ")" : "ForwardRef"), e3;
            case Kf:
              return t = e3.displayName || null, t !== null ? t : tf(e3.type) || "Memo";
            case Tn:
              t = e3._payload, e3 = e3._init;
              try {
                return tf(e3(t));
              } catch {
              }
          }
          return null;
        }
        function G3(e3) {
          var t = e3.type;
          switch (e3.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return e3 = t.render, e3 = e3.displayName || e3.name || "", t.displayName || (e3 !== "" ? "ForwardRef(" + e3 + ")" : "ForwardRef");
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return tf(t);
            case 8:
              return t === qf ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if (typeof t == "function") return t.displayName || t.name || null;
              if (typeof t == "string") return t;
          }
          return null;
        }
        function qn(e3) {
          switch (typeof e3) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return e3;
            case "object":
              return e3;
            default:
              return "";
          }
        }
        function fv(e3) {
          var t = e3.type;
          return (e3 = e3.nodeName) && e3.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function K3(e3) {
          var t = fv(e3) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t), n = "" + e3[t];
          if (!e3.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
            var a = r.get, i = r.set;
            return Object.defineProperty(e3, t, { configurable: true, get: function() {
              return a.call(this);
            }, set: function(o) {
              n = "" + o, i.call(this, o);
            } }), Object.defineProperty(e3, t, { enumerable: r.enumerable }), { getValue: function() {
              return n;
            }, setValue: function(o) {
              n = "" + o;
            }, stopTracking: function() {
              e3._valueTracker = null, delete e3[t];
            } };
          }
        }
        function gs(e3) {
          e3._valueTracker || (e3._valueTracker = K3(e3));
        }
        function hv(e3) {
          if (!e3) return false;
          var t = e3._valueTracker;
          if (!t) return true;
          var r = t.getValue(), n = "";
          return e3 && (n = fv(e3) ? e3.checked ? "true" : "false" : e3.value), e3 = n, e3 !== r ? (t.setValue(e3), true) : false;
        }
        function Vs(e3) {
          if (e3 = e3 || (typeof document < "u" ? document : void 0), typeof e3 > "u") return null;
          try {
            return e3.activeElement || e3.body;
          } catch {
            return e3.body;
          }
        }
        function rf(e3, t) {
          var r = t.checked;
          return ze({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e3._wrapperState.initialChecked });
        }
        function ig(e3, t) {
          var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
          r = qn(t.value != null ? t.value : r), e3._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
        }
        function pv(e3, t) {
          t = t.checked, t != null && Yf(e3, "checked", t, false);
        }
        function nf(e3, t) {
          pv(e3, t);
          var r = qn(t.value), n = t.type;
          if (r != null) n === "number" ? (r === 0 && e3.value === "" || e3.value != r) && (e3.value = "" + r) : e3.value !== "" + r && (e3.value = "" + r);
          else if (n === "submit" || n === "reset") {
            e3.removeAttribute("value");
            return;
          }
          t.hasOwnProperty("value") ? af(e3, t.type, r) : t.hasOwnProperty("defaultValue") && af(e3, t.type, qn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e3.defaultChecked = !!t.defaultChecked);
        }
        function og(e3, t, r) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e3._wrapperState.initialValue, r || t === e3.value || (e3.value = t), e3.defaultValue = t;
          }
          r = e3.name, r !== "" && (e3.name = ""), e3.defaultChecked = !!e3._wrapperState.initialChecked, r !== "" && (e3.name = r);
        }
        function af(e3, t, r) {
          (t !== "number" || Vs(e3.ownerDocument) !== e3) && (r == null ? e3.defaultValue = "" + e3._wrapperState.initialValue : e3.defaultValue !== "" + r && (e3.defaultValue = "" + r));
        }
        var Do = Array.isArray;
        function vi(e3, t, r, n) {
          if (e3 = e3.options, t) {
            t = {};
            for (var a = 0; a < r.length; a++) t["$" + r[a]] = true;
            for (r = 0; r < e3.length; r++) a = t.hasOwnProperty("$" + e3[r].value), e3[r].selected !== a && (e3[r].selected = a), a && n && (e3[r].defaultSelected = true);
          } else {
            for (r = "" + qn(r), t = null, a = 0; a < e3.length; a++) {
              if (e3[a].value === r) {
                e3[a].selected = true, n && (e3[a].defaultSelected = true);
                return;
              }
              t !== null || e3[a].disabled || (t = e3[a]);
            }
            t !== null && (t.selected = true);
          }
        }
        function of(e3, t) {
          if (t.dangerouslySetInnerHTML != null) throw Error($(91));
          return ze({}, t, { value: void 0, defaultValue: void 0, children: "" + e3._wrapperState.initialValue });
        }
        function lg(e3, t) {
          var r = t.value;
          if (r == null) {
            if (r = t.children, t = t.defaultValue, r != null) {
              if (t != null) throw Error($(92));
              if (Do(r)) {
                if (1 < r.length) throw Error($(93));
                r = r[0];
              }
              t = r;
            }
            t == null && (t = ""), r = t;
          }
          e3._wrapperState = { initialValue: qn(r) };
        }
        function mv(e3, t) {
          var r = qn(t.value), n = qn(t.defaultValue);
          r != null && (r = "" + r, r !== e3.value && (e3.value = r), t.defaultValue == null && e3.defaultValue !== r && (e3.defaultValue = r)), n != null && (e3.defaultValue = "" + n);
        }
        function sg(e3) {
          var t = e3.textContent;
          t === e3._wrapperState.initialValue && t !== "" && t !== null && (e3.value = t);
        }
        function gv(e3) {
          switch (e3) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function lf(e3, t) {
          return e3 == null || e3 === "http://www.w3.org/1999/xhtml" ? gv(t) : e3 === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e3;
        }
        var vs, vv = (function(e3) {
          return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, a) {
            MSApp.execUnsafeLocalFunction(function() {
              return e3(t, r, n, a);
            });
          } : e3;
        })(function(e3, t) {
          if (e3.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e3) e3.innerHTML = t;
          else {
            for (vs = vs || document.createElement("div"), vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vs.firstChild; e3.firstChild; ) e3.removeChild(e3.firstChild);
            for (; t.firstChild; ) e3.appendChild(t.firstChild);
          }
        });
        function jo(e3, t) {
          if (t) {
            var r = e3.firstChild;
            if (r && r === e3.lastChild && r.nodeType === 3) {
              r.nodeValue = t;
              return;
            }
          }
          e3.textContent = t;
        }
        var Lo = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Q3 = ["Webkit", "ms", "Moz", "O"];
        Object.keys(Lo).forEach(function(e3) {
          Q3.forEach(function(t) {
            t = t + e3.charAt(0).toUpperCase() + e3.substring(1), Lo[t] = Lo[e3];
          });
        });
        function yv(e3, t, r) {
          return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Lo.hasOwnProperty(e3) && Lo[e3] ? ("" + t).trim() : t + "px";
        }
        function wv(e3, t) {
          e3 = e3.style;
          for (var r in t) if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0, a = yv(r, t[r], n);
            r === "float" && (r = "cssFloat"), n ? e3.setProperty(r, a) : e3[r] = a;
          }
        }
        var X3 = ze({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
        function sf(e3, t) {
          if (t) {
            if (X3[e3] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e3));
            if (t.dangerouslySetInnerHTML != null) {
              if (t.children != null) throw Error($(60));
              if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error($(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error($(62));
          }
        }
        function uf(e3, t) {
          if (e3.indexOf("-") === -1) return typeof t.is == "string";
          switch (e3) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var cf = null;
        function Qf(e3) {
          return e3 = e3.target || e3.srcElement || window, e3.correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
        }
        var df = null, yi = null, wi = null;
        function ug(e3) {
          if (e3 = al(e3)) {
            if (typeof df != "function") throw Error($(280));
            var t = e3.stateNode;
            t && (t = yu(t), df(e3.stateNode, e3.type, t));
          }
        }
        function xv(e3) {
          yi ? wi ? wi.push(e3) : wi = [e3] : yi = e3;
        }
        function bv() {
          if (yi) {
            var e3 = yi, t = wi;
            if (wi = yi = null, ug(e3), t) for (e3 = 0; e3 < t.length; e3++) ug(t[e3]);
          }
        }
        function kv(e3, t) {
          return e3(t);
        }
        function Ev() {
        }
        var _d = false;
        function Rv(e3, t, r) {
          if (_d) return e3(t, r);
          _d = true;
          try {
            return kv(e3, t, r);
          } finally {
            _d = false, (yi !== null || wi !== null) && (Ev(), bv());
          }
        }
        function Uo(e3, t) {
          var r = e3.stateNode;
          if (r === null) return null;
          var n = yu(r);
          if (n === null) return null;
          r = n[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (n = !n.disabled) || (e3 = e3.type, n = !(e3 === "button" || e3 === "input" || e3 === "select" || e3 === "textarea")), e3 = !n;
              break e;
            default:
              e3 = false;
          }
          if (e3) return null;
          if (r && typeof r != "function") throw Error($(231, t, typeof r));
          return r;
        }
        var ff = false;
        if (un) try {
          ni = {}, Object.defineProperty(ni, "passive", { get: function() {
            ff = true;
          } }), window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni);
        } catch {
          ff = false;
        }
        var ni;
        function Z3(e3, t, r, n, a, i, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Po = false, Ws = null, Ys = false, hf = null, J3 = { onError: function(e3) {
          Po = true, Ws = e3;
        } };
        function e6(e3, t, r, n, a, i, o, l, s) {
          Po = false, Ws = null, Z3.apply(J3, arguments);
        }
        function t6(e3, t, r, n, a, i, o, l, s) {
          if (e6.apply(this, arguments), Po) {
            if (Po) {
              var u = Ws;
              Po = false, Ws = null;
            } else throw Error($(198));
            Ys || (Ys = true, hf = u);
          }
        }
        function _a(e3) {
          var t = e3, r = e3;
          if (e3.alternate) for (; t.return; ) t = t.return;
          else {
            e3 = t;
            do
              t = e3, (t.flags & 4098) !== 0 && (r = t.return), e3 = t.return;
            while (e3);
          }
          return t.tag === 3 ? r : null;
        }
        function Sv(e3) {
          if (e3.tag === 13) {
            var t = e3.memoizedState;
            if (t === null && (e3 = e3.alternate, e3 !== null && (t = e3.memoizedState)), t !== null) return t.dehydrated;
          }
          return null;
        }
        function cg(e3) {
          if (_a(e3) !== e3) throw Error($(188));
        }
        function r6(e3) {
          var t = e3.alternate;
          if (!t) {
            if (t = _a(e3), t === null) throw Error($(188));
            return t !== e3 ? null : e3;
          }
          for (var r = e3, n = t; ; ) {
            var a = r.return;
            if (a === null) break;
            var i = a.alternate;
            if (i === null) {
              if (n = a.return, n !== null) {
                r = n;
                continue;
              }
              break;
            }
            if (a.child === i.child) {
              for (i = a.child; i; ) {
                if (i === r) return cg(a), e3;
                if (i === n) return cg(a), t;
                i = i.sibling;
              }
              throw Error($(188));
            }
            if (r.return !== n.return) r = a, n = i;
            else {
              for (var o = false, l = a.child; l; ) {
                if (l === r) {
                  o = true, r = a, n = i;
                  break;
                }
                if (l === n) {
                  o = true, n = a, r = i;
                  break;
                }
                l = l.sibling;
              }
              if (!o) {
                for (l = i.child; l; ) {
                  if (l === r) {
                    o = true, r = i, n = a;
                    break;
                  }
                  if (l === n) {
                    o = true, n = i, r = a;
                    break;
                  }
                  l = l.sibling;
                }
                if (!o) throw Error($(189));
              }
            }
            if (r.alternate !== n) throw Error($(190));
          }
          if (r.tag !== 3) throw Error($(188));
          return r.stateNode.current === r ? e3 : t;
        }
        function Cv(e3) {
          return e3 = r6(e3), e3 !== null ? Dv(e3) : null;
        }
        function Dv(e3) {
          if (e3.tag === 5 || e3.tag === 6) return e3;
          for (e3 = e3.child; e3 !== null; ) {
            var t = Dv(e3);
            if (t !== null) return t;
            e3 = e3.sibling;
          }
          return null;
        }
        var Nv = Xt.unstable_scheduleCallback, dg = Xt.unstable_cancelCallback, n6 = Xt.unstable_shouldYield, a6 = Xt.unstable_requestPaint, We = Xt.unstable_now, i6 = Xt.unstable_getCurrentPriorityLevel, Xf = Xt.unstable_ImmediatePriority, Mv = Xt.unstable_UserBlockingPriority, qs = Xt.unstable_NormalPriority, o6 = Xt.unstable_LowPriority, Lv = Xt.unstable_IdlePriority, pu = null, jr = null;
        function l6(e3) {
          if (jr && typeof jr.onCommitFiberRoot == "function") try {
            jr.onCommitFiberRoot(pu, e3, void 0, (e3.current.flags & 128) === 128);
          } catch {
          }
        }
        var Sr = Math.clz32 ? Math.clz32 : c6, s6 = Math.log, u6 = Math.LN2;
        function c6(e3) {
          return e3 >>>= 0, e3 === 0 ? 32 : 31 - (s6(e3) / u6 | 0) | 0;
        }
        var ys = 64, ws = 4194304;
        function No(e3) {
          switch (e3 & -e3) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return e3 & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return e3 & 130023424;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e3;
          }
        }
        function Gs(e3, t) {
          var r = e3.pendingLanes;
          if (r === 0) return 0;
          var n = 0, a = e3.suspendedLanes, i = e3.pingedLanes, o = r & 268435455;
          if (o !== 0) {
            var l = o & ~a;
            l !== 0 ? n = No(l) : (i &= o, i !== 0 && (n = No(i)));
          } else o = r & ~a, o !== 0 ? n = No(o) : i !== 0 && (n = No(i));
          if (n === 0) return 0;
          if (t !== 0 && t !== n && (t & a) === 0 && (a = n & -n, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
          if ((n & 4) !== 0 && (n |= r & 16), t = e3.entangledLanes, t !== 0) for (e3 = e3.entanglements, t &= n; 0 < t; ) r = 31 - Sr(t), a = 1 << r, n |= e3[r], t &= ~a;
          return n;
        }
        function d6(e3, t) {
          switch (e3) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
              return -1;
            default:
              return -1;
          }
        }
        function f6(e3, t) {
          for (var r = e3.suspendedLanes, n = e3.pingedLanes, a = e3.expirationTimes, i = e3.pendingLanes; 0 < i; ) {
            var o = 31 - Sr(i), l = 1 << o, s = a[o];
            s === -1 ? ((l & r) === 0 || (l & n) !== 0) && (a[o] = d6(l, t)) : s <= t && (e3.expiredLanes |= l), i &= ~l;
          }
        }
        function pf(e3) {
          return e3 = e3.pendingLanes & -1073741825, e3 !== 0 ? e3 : e3 & 1073741824 ? 1073741824 : 0;
        }
        function Pv() {
          var e3 = ys;
          return ys <<= 1, (ys & 4194240) === 0 && (ys = 64), e3;
        }
        function Td(e3) {
          for (var t = [], r = 0; 31 > r; r++) t.push(e3);
          return t;
        }
        function rl(e3, t, r) {
          e3.pendingLanes |= t, t !== 536870912 && (e3.suspendedLanes = 0, e3.pingedLanes = 0), e3 = e3.eventTimes, t = 31 - Sr(t), e3[t] = r;
        }
        function h6(e3, t) {
          var r = e3.pendingLanes & ~t;
          e3.pendingLanes = t, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.expiredLanes &= t, e3.mutableReadLanes &= t, e3.entangledLanes &= t, t = e3.entanglements;
          var n = e3.eventTimes;
          for (e3 = e3.expirationTimes; 0 < r; ) {
            var a = 31 - Sr(r), i = 1 << a;
            t[a] = 0, n[a] = -1, e3[a] = -1, r &= ~i;
          }
        }
        function Zf(e3, t) {
          var r = e3.entangledLanes |= t;
          for (e3 = e3.entanglements; r; ) {
            var n = 31 - Sr(r), a = 1 << n;
            a & t | e3[n] & t && (e3[n] |= t), r &= ~a;
          }
        }
        var ye = 0;
        function _v(e3) {
          return e3 &= -e3, 1 < e3 ? 4 < e3 ? (e3 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
        }
        var Tv, Jf, Av, Fv, $v, mf = false, xs = [], In = null, jn = null, Un = null, Ho = /* @__PURE__ */ new Map(), Bo = /* @__PURE__ */ new Map(), Fn = [], p6 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function fg(e3, t) {
          switch (e3) {
            case "focusin":
            case "focusout":
              In = null;
              break;
            case "dragenter":
            case "dragleave":
              jn = null;
              break;
            case "mouseover":
            case "mouseout":
              Un = null;
              break;
            case "pointerover":
            case "pointerout":
              Ho.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Bo.delete(t.pointerId);
          }
        }
        function wo(e3, t, r, n, a, i) {
          return e3 === null || e3.nativeEvent !== i ? (e3 = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [a] }, t !== null && (t = al(t), t !== null && Jf(t)), e3) : (e3.eventSystemFlags |= n, t = e3.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e3);
        }
        function m6(e3, t, r, n, a) {
          switch (t) {
            case "focusin":
              return In = wo(In, e3, t, r, n, a), true;
            case "dragenter":
              return jn = wo(jn, e3, t, r, n, a), true;
            case "mouseover":
              return Un = wo(Un, e3, t, r, n, a), true;
            case "pointerover":
              var i = a.pointerId;
              return Ho.set(i, wo(Ho.get(i) || null, e3, t, r, n, a)), true;
            case "gotpointercapture":
              return i = a.pointerId, Bo.set(i, wo(Bo.get(i) || null, e3, t, r, n, a)), true;
          }
          return false;
        }
        function Ov(e3) {
          var t = ba(e3.target);
          if (t !== null) {
            var r = _a(t);
            if (r !== null) {
              if (t = r.tag, t === 13) {
                if (t = Sv(r), t !== null) {
                  e3.blockedOn = t, $v(e3.priority, function() {
                    Av(r);
                  });
                  return;
                }
              } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e3.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return;
              }
            }
          }
          e3.blockedOn = null;
        }
        function As(e3) {
          if (e3.blockedOn !== null) return false;
          for (var t = e3.targetContainers; 0 < t.length; ) {
            var r = gf(e3.domEventName, e3.eventSystemFlags, t[0], e3.nativeEvent);
            if (r === null) {
              r = e3.nativeEvent;
              var n = new r.constructor(r.type, r);
              cf = n, r.target.dispatchEvent(n), cf = null;
            } else return t = al(r), t !== null && Jf(t), e3.blockedOn = r, false;
            t.shift();
          }
          return true;
        }
        function hg(e3, t, r) {
          As(e3) && r.delete(t);
        }
        function g6() {
          mf = false, In !== null && As(In) && (In = null), jn !== null && As(jn) && (jn = null), Un !== null && As(Un) && (Un = null), Ho.forEach(hg), Bo.forEach(hg);
        }
        function xo(e3, t) {
          e3.blockedOn === t && (e3.blockedOn = null, mf || (mf = true, Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority, g6)));
        }
        function Vo(e3) {
          function t(a) {
            return xo(a, e3);
          }
          if (0 < xs.length) {
            xo(xs[0], e3);
            for (var r = 1; r < xs.length; r++) {
              var n = xs[r];
              n.blockedOn === e3 && (n.blockedOn = null);
            }
          }
          for (In !== null && xo(In, e3), jn !== null && xo(jn, e3), Un !== null && xo(Un, e3), Ho.forEach(t), Bo.forEach(t), r = 0; r < Fn.length; r++) n = Fn[r], n.blockedOn === e3 && (n.blockedOn = null);
          for (; 0 < Fn.length && (r = Fn[0], r.blockedOn === null); ) Ov(r), r.blockedOn === null && Fn.shift();
        }
        var xi = hn.ReactCurrentBatchConfig, Ks = true;
        function v6(e3, t, r, n) {
          var a = ye, i = xi.transition;
          xi.transition = null;
          try {
            ye = 1, eh(e3, t, r, n);
          } finally {
            ye = a, xi.transition = i;
          }
        }
        function y6(e3, t, r, n) {
          var a = ye, i = xi.transition;
          xi.transition = null;
          try {
            ye = 4, eh(e3, t, r, n);
          } finally {
            ye = a, xi.transition = i;
          }
        }
        function eh(e3, t, r, n) {
          if (Ks) {
            var a = gf(e3, t, r, n);
            if (a === null) jd(e3, t, n, Qs, r), fg(e3, n);
            else if (m6(a, e3, t, r, n)) n.stopPropagation();
            else if (fg(e3, n), t & 4 && -1 < p6.indexOf(e3)) {
              for (; a !== null; ) {
                var i = al(a);
                if (i !== null && Tv(i), i = gf(e3, t, r, n), i === null && jd(e3, t, n, Qs, r), i === a) break;
                a = i;
              }
              a !== null && n.stopPropagation();
            } else jd(e3, t, n, null, r);
          }
        }
        var Qs = null;
        function gf(e3, t, r, n) {
          if (Qs = null, e3 = Qf(n), e3 = ba(e3), e3 !== null) if (t = _a(e3), t === null) e3 = null;
          else if (r = t.tag, r === 13) {
            if (e3 = Sv(t), e3 !== null) return e3;
            e3 = null;
          } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e3 = null;
          } else t !== e3 && (e3 = null);
          return Qs = e3, null;
        }
        function zv(e3) {
          switch (e3) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (i6()) {
                case Xf:
                  return 1;
                case Mv:
                  return 4;
                case qs:
                case o6:
                  return 16;
                case Lv:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var On = null, th = null, Fs = null;
        function Iv() {
          if (Fs) return Fs;
          var e3, t = th, r = t.length, n, a = "value" in On ? On.value : On.textContent, i = a.length;
          for (e3 = 0; e3 < r && t[e3] === a[e3]; e3++) ;
          var o = r - e3;
          for (n = 1; n <= o && t[r - n] === a[i - n]; n++) ;
          return Fs = a.slice(e3, 1 < n ? 1 - n : void 0);
        }
        function $s(e3) {
          var t = e3.keyCode;
          return "charCode" in e3 ? (e3 = e3.charCode, e3 === 0 && t === 13 && (e3 = 13)) : e3 = t, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
        }
        function bs() {
          return true;
        }
        function pg() {
          return false;
        }
        function Zt(e3) {
          function t(r, n, a, i, o) {
            this._reactName = r, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null;
            for (var l in e3) e3.hasOwnProperty(l) && (r = e3[l], this[l] = r ? r(i) : i[l]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? bs : pg, this.isPropagationStopped = pg, this;
          }
          return ze(t.prototype, { preventDefault: function() {
            this.defaultPrevented = true;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = false), this.isDefaultPrevented = bs);
          }, stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = true), this.isPropagationStopped = bs);
          }, persist: function() {
          }, isPersistent: bs }), t;
        }
        var Li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e3) {
          return e3.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0 }, rh = Zt(Li), nl = ze({}, Li, { view: 0, detail: 0 }), w6 = Zt(nl), Ad, Fd, bo, mu = ze({}, nl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nh, button: 0, buttons: 0, relatedTarget: function(e3) {
          return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
        }, movementX: function(e3) {
          return "movementX" in e3 ? e3.movementX : (e3 !== bo && (bo && e3.type === "mousemove" ? (Ad = e3.screenX - bo.screenX, Fd = e3.screenY - bo.screenY) : Fd = Ad = 0, bo = e3), Ad);
        }, movementY: function(e3) {
          return "movementY" in e3 ? e3.movementY : Fd;
        } }), mg = Zt(mu), x6 = ze({}, mu, { dataTransfer: 0 }), b6 = Zt(x6), k6 = ze({}, nl, { relatedTarget: 0 }), $d = Zt(k6), E6 = ze({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), R6 = Zt(E6), S6 = ze({}, Li, { clipboardData: function(e3) {
          return "clipboardData" in e3 ? e3.clipboardData : window.clipboardData;
        } }), C6 = Zt(S6), D6 = ze({}, Li, { data: 0 }), gg = Zt(D6), N6 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, M6 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, L6 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function P6(e3) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e3) : (e3 = L6[e3]) ? !!t[e3] : false;
        }
        function nh() {
          return P6;
        }
        var _6 = ze({}, nl, { key: function(e3) {
          if (e3.key) {
            var t = N6[e3.key] || e3.key;
            if (t !== "Unidentified") return t;
          }
          return e3.type === "keypress" ? (e3 = $s(e3), e3 === 13 ? "Enter" : String.fromCharCode(e3)) : e3.type === "keydown" || e3.type === "keyup" ? M6[e3.keyCode] || "Unidentified" : "";
        }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nh, charCode: function(e3) {
          return e3.type === "keypress" ? $s(e3) : 0;
        }, keyCode: function(e3) {
          return e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
        }, which: function(e3) {
          return e3.type === "keypress" ? $s(e3) : e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
        } }), T6 = Zt(_6), A6 = ze({}, mu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vg = Zt(A6), F6 = ze({}, nl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nh }), $6 = Zt(F6), O6 = ze({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), z6 = Zt(O6), I6 = ze({}, mu, { deltaX: function(e3) {
          return "deltaX" in e3 ? e3.deltaX : "wheelDeltaX" in e3 ? -e3.wheelDeltaX : 0;
        }, deltaY: function(e3) {
          return "deltaY" in e3 ? e3.deltaY : "wheelDeltaY" in e3 ? -e3.wheelDeltaY : "wheelDelta" in e3 ? -e3.wheelDelta : 0;
        }, deltaZ: 0, deltaMode: 0 }), j6 = Zt(I6), U6 = [9, 13, 27, 32], ah = un && "CompositionEvent" in window, _o = null;
        un && "documentMode" in document && (_o = document.documentMode);
        var H6 = un && "TextEvent" in window && !_o, jv = un && (!ah || _o && 8 < _o && 11 >= _o), yg = " ", wg = false;
        function Uv(e3, t) {
          switch (e3) {
            case "keyup":
              return U6.indexOf(t.keyCode) !== -1;
            case "keydown":
              return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
              return true;
            default:
              return false;
          }
        }
        function Hv(e3) {
          return e3 = e3.detail, typeof e3 == "object" && "data" in e3 ? e3.data : null;
        }
        var li = false;
        function B6(e3, t) {
          switch (e3) {
            case "compositionend":
              return Hv(t);
            case "keypress":
              return t.which !== 32 ? null : (wg = true, yg);
            case "textInput":
              return e3 = t.data, e3 === yg && wg ? null : e3;
            default:
              return null;
          }
        }
        function V6(e3, t) {
          if (li) return e3 === "compositionend" || !ah && Uv(e3, t) ? (e3 = Iv(), Fs = th = On = null, li = false, e3) : null;
          switch (e3) {
            case "paste":
              return null;
            case "keypress":
              if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
              }
              return null;
            case "compositionend":
              return jv && t.locale !== "ko" ? null : t.data;
            default:
              return null;
          }
        }
        var W6 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
        function xg(e3) {
          var t = e3 && e3.nodeName && e3.nodeName.toLowerCase();
          return t === "input" ? !!W6[e3.type] : t === "textarea";
        }
        function Bv(e3, t, r, n) {
          xv(n), t = Xs(t, "onChange"), 0 < t.length && (r = new rh("onChange", "change", null, r, n), e3.push({ event: r, listeners: t }));
        }
        var To = null, Wo = null;
        function Y6(e3) {
          e1(e3, 0);
        }
        function gu(e3) {
          var t = ci(e3);
          if (hv(t)) return e3;
        }
        function q6(e3, t) {
          if (e3 === "change") return t;
        }
        var Vv = false;
        un && (un ? (Es = "oninput" in document, Es || (Od = document.createElement("div"), Od.setAttribute("oninput", "return;"), Es = typeof Od.oninput == "function"), ks = Es) : ks = false, Vv = ks && (!document.documentMode || 9 < document.documentMode));
        var ks, Es, Od;
        function bg() {
          To && (To.detachEvent("onpropertychange", Wv), Wo = To = null);
        }
        function Wv(e3) {
          if (e3.propertyName === "value" && gu(Wo)) {
            var t = [];
            Bv(t, Wo, e3, Qf(e3)), Rv(Y6, t);
          }
        }
        function G6(e3, t, r) {
          e3 === "focusin" ? (bg(), To = t, Wo = r, To.attachEvent("onpropertychange", Wv)) : e3 === "focusout" && bg();
        }
        function K6(e3) {
          if (e3 === "selectionchange" || e3 === "keyup" || e3 === "keydown") return gu(Wo);
        }
        function Q6(e3, t) {
          if (e3 === "click") return gu(t);
        }
        function X6(e3, t) {
          if (e3 === "input" || e3 === "change") return gu(t);
        }
        function Z6(e3, t) {
          return e3 === t && (e3 !== 0 || 1 / e3 === 1 / t) || e3 !== e3 && t !== t;
        }
        var Dr = typeof Object.is == "function" ? Object.is : Z6;
        function Yo(e3, t) {
          if (Dr(e3, t)) return true;
          if (typeof e3 != "object" || e3 === null || typeof t != "object" || t === null) return false;
          var r = Object.keys(e3), n = Object.keys(t);
          if (r.length !== n.length) return false;
          for (n = 0; n < r.length; n++) {
            var a = r[n];
            if (!Xd.call(t, a) || !Dr(e3[a], t[a])) return false;
          }
          return true;
        }
        function kg(e3) {
          for (; e3 && e3.firstChild; ) e3 = e3.firstChild;
          return e3;
        }
        function Eg(e3, t) {
          var r = kg(e3);
          e3 = 0;
          for (var n; r; ) {
            if (r.nodeType === 3) {
              if (n = e3 + r.textContent.length, e3 <= t && n >= t) return { node: r, offset: t - e3 };
              e3 = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = kg(r);
          }
        }
        function Yv(e3, t) {
          return e3 && t ? e3 === t ? true : e3 && e3.nodeType === 3 ? false : t && t.nodeType === 3 ? Yv(e3, t.parentNode) : "contains" in e3 ? e3.contains(t) : e3.compareDocumentPosition ? !!(e3.compareDocumentPosition(t) & 16) : false : false;
        }
        function qv() {
          for (var e3 = window, t = Vs(); t instanceof e3.HTMLIFrameElement; ) {
            try {
              var r = typeof t.contentWindow.location.href == "string";
            } catch {
              r = false;
            }
            if (r) e3 = t.contentWindow;
            else break;
            t = Vs(e3.document);
          }
          return t;
        }
        function ih(e3) {
          var t = e3 && e3.nodeName && e3.nodeName.toLowerCase();
          return t && (t === "input" && (e3.type === "text" || e3.type === "search" || e3.type === "tel" || e3.type === "url" || e3.type === "password") || t === "textarea" || e3.contentEditable === "true");
        }
        function J6(e3) {
          var t = qv(), r = e3.focusedElem, n = e3.selectionRange;
          if (t !== r && r && r.ownerDocument && Yv(r.ownerDocument.documentElement, r)) {
            if (n !== null && ih(r)) {
              if (t = n.start, e3 = n.end, e3 === void 0 && (e3 = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e3, r.value.length);
              else if (e3 = (t = r.ownerDocument || document) && t.defaultView || window, e3.getSelection) {
                e3 = e3.getSelection();
                var a = r.textContent.length, i = Math.min(n.start, a);
                n = n.end === void 0 ? i : Math.min(n.end, a), !e3.extend && i > n && (a = n, n = i, i = a), a = Eg(r, i);
                var o = Eg(r, n);
                a && o && (e3.rangeCount !== 1 || e3.anchorNode !== a.node || e3.anchorOffset !== a.offset || e3.focusNode !== o.node || e3.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e3.removeAllRanges(), i > n ? (e3.addRange(t), e3.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e3.addRange(t)));
              }
            }
            for (t = [], e3 = r; e3 = e3.parentNode; ) e3.nodeType === 1 && t.push({ element: e3, left: e3.scrollLeft, top: e3.scrollTop });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e3 = t[r], e3.element.scrollLeft = e3.left, e3.element.scrollTop = e3.top;
          }
        }
        var ek = un && "documentMode" in document && 11 >= document.documentMode, si = null, vf = null, Ao = null, yf = false;
        function Rg(e3, t, r) {
          var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
          yf || si == null || si !== Vs(n) || (n = si, "selectionStart" in n && ih(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Ao && Yo(Ao, n) || (Ao = n, n = Xs(vf, "onSelect"), 0 < n.length && (t = new rh("onSelect", "select", null, t, r), e3.push({ event: t, listeners: n }), t.target = si)));
        }
        function Rs(e3, t) {
          var r = {};
          return r[e3.toLowerCase()] = t.toLowerCase(), r["Webkit" + e3] = "webkit" + t, r["Moz" + e3] = "moz" + t, r;
        }
        var ui = { animationend: Rs("Animation", "AnimationEnd"), animationiteration: Rs("Animation", "AnimationIteration"), animationstart: Rs("Animation", "AnimationStart"), transitionend: Rs("Transition", "TransitionEnd") }, zd = {}, Gv = {};
        un && (Gv = document.createElement("div").style, "AnimationEvent" in window || (delete ui.animationend.animation, delete ui.animationiteration.animation, delete ui.animationstart.animation), "TransitionEvent" in window || delete ui.transitionend.transition);
        function vu(e3) {
          if (zd[e3]) return zd[e3];
          if (!ui[e3]) return e3;
          var t = ui[e3], r;
          for (r in t) if (t.hasOwnProperty(r) && r in Gv) return zd[e3] = t[r];
          return e3;
        }
        var Kv = vu("animationend"), Qv = vu("animationiteration"), Xv = vu("animationstart"), Zv = vu("transitionend"), Jv = /* @__PURE__ */ new Map(), Sg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        function Kn(e3, t) {
          Jv.set(e3, t), Pa(t, [e3]);
        }
        for (Ss = 0; Ss < Sg.length; Ss++) Cs = Sg[Ss], Cg = Cs.toLowerCase(), Dg = Cs[0].toUpperCase() + Cs.slice(1), Kn(Cg, "on" + Dg);
        var Cs, Cg, Dg, Ss;
        Kn(Kv, "onAnimationEnd");
        Kn(Qv, "onAnimationIteration");
        Kn(Xv, "onAnimationStart");
        Kn("dblclick", "onDoubleClick");
        Kn("focusin", "onFocus");
        Kn("focusout", "onBlur");
        Kn(Zv, "onTransitionEnd");
        Ei("onMouseEnter", ["mouseout", "mouseover"]);
        Ei("onMouseLeave", ["mouseout", "mouseover"]);
        Ei("onPointerEnter", ["pointerout", "pointerover"]);
        Ei("onPointerLeave", ["pointerout", "pointerover"]);
        Pa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        Pa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        Pa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        Pa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        Pa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        Pa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tk = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
        function Ng(e3, t, r) {
          var n = e3.type || "unknown-event";
          e3.currentTarget = r, t6(n, t, void 0, e3), e3.currentTarget = null;
        }
        function e1(e3, t) {
          t = (t & 4) !== 0;
          for (var r = 0; r < e3.length; r++) {
            var n = e3[r], a = n.event;
            n = n.listeners;
            e: {
              var i = void 0;
              if (t) for (var o = n.length - 1; 0 <= o; o--) {
                var l = n[o], s = l.instance, u = l.currentTarget;
                if (l = l.listener, s !== i && a.isPropagationStopped()) break e;
                Ng(a, l, u), i = s;
              }
              else for (o = 0; o < n.length; o++) {
                if (l = n[o], s = l.instance, u = l.currentTarget, l = l.listener, s !== i && a.isPropagationStopped()) break e;
                Ng(a, l, u), i = s;
              }
            }
          }
          if (Ys) throw e3 = hf, Ys = false, hf = null, e3;
        }
        function De(e3, t) {
          var r = t[Ef];
          r === void 0 && (r = t[Ef] = /* @__PURE__ */ new Set());
          var n = e3 + "__bubble";
          r.has(n) || (t1(t, e3, 2, false), r.add(n));
        }
        function Id(e3, t, r) {
          var n = 0;
          t && (n |= 4), t1(r, e3, n, t);
        }
        var Ds = "_reactListening" + Math.random().toString(36).slice(2);
        function qo(e3) {
          if (!e3[Ds]) {
            e3[Ds] = true, sv.forEach(function(r) {
              r !== "selectionchange" && (tk.has(r) || Id(r, false, e3), Id(r, true, e3));
            });
            var t = e3.nodeType === 9 ? e3 : e3.ownerDocument;
            t === null || t[Ds] || (t[Ds] = true, Id("selectionchange", false, t));
          }
        }
        function t1(e3, t, r, n) {
          switch (zv(t)) {
            case 1:
              var a = v6;
              break;
            case 4:
              a = y6;
              break;
            default:
              a = eh;
          }
          r = a.bind(null, t, r, e3), a = void 0, !ff || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = true), n ? a !== void 0 ? e3.addEventListener(t, r, { capture: true, passive: a }) : e3.addEventListener(t, r, true) : a !== void 0 ? e3.addEventListener(t, r, { passive: a }) : e3.addEventListener(t, r, false);
        }
        function jd(e3, t, r, n, a) {
          var i = n;
          if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (; ; ) {
            if (n === null) return;
            var o = n.tag;
            if (o === 3 || o === 4) {
              var l = n.stateNode.containerInfo;
              if (l === a || l.nodeType === 8 && l.parentNode === a) break;
              if (o === 4) for (o = n.return; o !== null; ) {
                var s = o.tag;
                if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === a || s.nodeType === 8 && s.parentNode === a)) return;
                o = o.return;
              }
              for (; l !== null; ) {
                if (o = ba(l), o === null) return;
                if (s = o.tag, s === 5 || s === 6) {
                  n = i = o;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            n = n.return;
          }
          Rv(function() {
            var u = i, c = Qf(r), d = [];
            e: {
              var f = Jv.get(e3);
              if (f !== void 0) {
                var h = rh, v = e3;
                switch (e3) {
                  case "keypress":
                    if ($s(r) === 0) break e;
                  case "keydown":
                  case "keyup":
                    h = T6;
                    break;
                  case "focusin":
                    v = "focus", h = $d;
                    break;
                  case "focusout":
                    v = "blur", h = $d;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    h = $d;
                    break;
                  case "click":
                    if (r.button === 2) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    h = mg;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    h = b6;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    h = $6;
                    break;
                  case Kv:
                  case Qv:
                  case Xv:
                    h = R6;
                    break;
                  case Zv:
                    h = z6;
                    break;
                  case "scroll":
                    h = w6;
                    break;
                  case "wheel":
                    h = j6;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    h = C6;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    h = vg;
                }
                var y = (t & 4) !== 0, m = !y && e3 === "scroll", g = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var p = u, w; p !== null; ) {
                  w = p;
                  var b = w.stateNode;
                  if (w.tag === 5 && b !== null && (w = b, g !== null && (b = Uo(p, g), b != null && y.push(Go(p, b, w)))), m) break;
                  p = p.return;
                }
                0 < y.length && (f = new h(f, v, null, r, c), d.push({ event: f, listeners: y }));
              }
            }
            if ((t & 7) === 0) {
              e: {
                if (f = e3 === "mouseover" || e3 === "pointerover", h = e3 === "mouseout" || e3 === "pointerout", f && r !== cf && (v = r.relatedTarget || r.fromElement) && (ba(v) || v[cn])) break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (v = r.relatedTarget || r.toElement, h = u, v = v ? ba(v) : null, v !== null && (m = _a(v), v !== m || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null, v = u), h !== v)) {
                  if (y = mg, b = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e3 === "pointerout" || e3 === "pointerover") && (y = vg, b = "onPointerLeave", g = "onPointerEnter", p = "pointer"), m = h == null ? f : ci(h), w = v == null ? f : ci(v), f = new y(b, p + "leave", h, r, c), f.target = m, f.relatedTarget = w, b = null, ba(c) === u && (y = new y(g, p + "enter", v, r, c), y.target = w, y.relatedTarget = m, b = y), m = b, h && v) t: {
                    for (y = h, g = v, p = 0, w = y; w; w = ai(w)) p++;
                    for (w = 0, b = g; b; b = ai(b)) w++;
                    for (; 0 < p - w; ) y = ai(y), p--;
                    for (; 0 < w - p; ) g = ai(g), w--;
                    for (; p--; ) {
                      if (y === g || g !== null && y === g.alternate) break t;
                      y = ai(y), g = ai(g);
                    }
                    y = null;
                  }
                  else y = null;
                  h !== null && Mg(d, f, h, y, false), v !== null && m !== null && Mg(d, m, v, y, true);
                }
              }
              e: {
                if (f = u ? ci(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var E = q6;
                else if (xg(f)) if (Vv) E = X6;
                else {
                  E = K6;
                  var S = G6;
                }
                else (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = Q6);
                if (E && (E = E(e3, u))) {
                  Bv(d, E, r, c);
                  break e;
                }
                S && S(e3, f, u), e3 === "focusout" && (S = f._wrapperState) && S.controlled && f.type === "number" && af(f, "number", f.value);
              }
              switch (S = u ? ci(u) : window, e3) {
                case "focusin":
                  (xg(S) || S.contentEditable === "true") && (si = S, vf = u, Ao = null);
                  break;
                case "focusout":
                  Ao = vf = si = null;
                  break;
                case "mousedown":
                  yf = true;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  yf = false, Rg(d, r, c);
                  break;
                case "selectionchange":
                  if (ek) break;
                case "keydown":
                case "keyup":
                  Rg(d, r, c);
              }
              var R;
              if (ah) e: {
                switch (e3) {
                  case "compositionstart":
                    var x = "onCompositionStart";
                    break e;
                  case "compositionend":
                    x = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    x = "onCompositionUpdate";
                    break e;
                }
                x = void 0;
              }
              else li ? Uv(e3, r) && (x = "onCompositionEnd") : e3 === "keydown" && r.keyCode === 229 && (x = "onCompositionStart");
              x && (jv && r.locale !== "ko" && (li || x !== "onCompositionStart" ? x === "onCompositionEnd" && li && (R = Iv()) : (On = c, th = "value" in On ? On.value : On.textContent, li = true)), S = Xs(u, x), 0 < S.length && (x = new gg(x, e3, null, r, c), d.push({ event: x, listeners: S }), R ? x.data = R : (R = Hv(r), R !== null && (x.data = R)))), (R = H6 ? B6(e3, r) : V6(e3, r)) && (u = Xs(u, "onBeforeInput"), 0 < u.length && (c = new gg("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = R));
            }
            e1(d, t);
          });
        }
        function Go(e3, t, r) {
          return { instance: e3, listener: t, currentTarget: r };
        }
        function Xs(e3, t) {
          for (var r = t + "Capture", n = []; e3 !== null; ) {
            var a = e3, i = a.stateNode;
            a.tag === 5 && i !== null && (a = i, i = Uo(e3, r), i != null && n.unshift(Go(e3, i, a)), i = Uo(e3, t), i != null && n.push(Go(e3, i, a))), e3 = e3.return;
          }
          return n;
        }
        function ai(e3) {
          if (e3 === null) return null;
          do
            e3 = e3.return;
          while (e3 && e3.tag !== 5);
          return e3 || null;
        }
        function Mg(e3, t, r, n, a) {
          for (var i = t._reactName, o = []; r !== null && r !== n; ) {
            var l = r, s = l.alternate, u = l.stateNode;
            if (s !== null && s === n) break;
            l.tag === 5 && u !== null && (l = u, a ? (s = Uo(r, i), s != null && o.unshift(Go(r, s, l))) : a || (s = Uo(r, i), s != null && o.push(Go(r, s, l)))), r = r.return;
          }
          o.length !== 0 && e3.push({ event: t, listeners: o });
        }
        var rk = /\r\n?/g, nk = /\u0000|\uFFFD/g;
        function Lg(e3) {
          return (typeof e3 == "string" ? e3 : "" + e3).replace(rk, `
`).replace(nk, "");
        }
        function Ns(e3, t, r) {
          if (t = Lg(t), Lg(e3) !== t && r) throw Error($(425));
        }
        function Zs() {
        }
        var wf = null, xf = null;
        function bf(e3, t) {
          return e3 === "textarea" || e3 === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var kf = typeof setTimeout == "function" ? setTimeout : void 0, ak = typeof clearTimeout == "function" ? clearTimeout : void 0, Pg = typeof Promise == "function" ? Promise : void 0, ik = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pg < "u" ? function(e3) {
          return Pg.resolve(null).then(e3).catch(ok);
        } : kf;
        function ok(e3) {
          setTimeout(function() {
            throw e3;
          });
        }
        function Ud(e3, t) {
          var r = t, n = 0;
          do {
            var a = r.nextSibling;
            if (e3.removeChild(r), a && a.nodeType === 8) if (r = a.data, r === "/$") {
              if (n === 0) {
                e3.removeChild(a), Vo(t);
                return;
              }
              n--;
            } else r !== "$" && r !== "$?" && r !== "$!" || n++;
            r = a;
          } while (r);
          Vo(t);
        }
        function Hn(e3) {
          for (; e3 != null; e3 = e3.nextSibling) {
            var t = e3.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
              if (t = e3.data, t === "$" || t === "$!" || t === "$?") break;
              if (t === "/$") return null;
            }
          }
          return e3;
        }
        function _g(e3) {
          e3 = e3.previousSibling;
          for (var t = 0; e3; ) {
            if (e3.nodeType === 8) {
              var r = e3.data;
              if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0) return e3;
                t--;
              } else r === "/$" && t++;
            }
            e3 = e3.previousSibling;
          }
          return null;
        }
        var Pi = Math.random().toString(36).slice(2), Ir = "__reactFiber$" + Pi, Ko = "__reactProps$" + Pi, cn = "__reactContainer$" + Pi, Ef = "__reactEvents$" + Pi, lk = "__reactListeners$" + Pi, sk = "__reactHandles$" + Pi;
        function ba(e3) {
          var t = e3[Ir];
          if (t) return t;
          for (var r = e3.parentNode; r; ) {
            if (t = r[cn] || r[Ir]) {
              if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e3 = _g(e3); e3 !== null; ) {
                if (r = e3[Ir]) return r;
                e3 = _g(e3);
              }
              return t;
            }
            e3 = r, r = e3.parentNode;
          }
          return null;
        }
        function al(e3) {
          return e3 = e3[Ir] || e3[cn], !e3 || e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 13 && e3.tag !== 3 ? null : e3;
        }
        function ci(e3) {
          if (e3.tag === 5 || e3.tag === 6) return e3.stateNode;
          throw Error($(33));
        }
        function yu(e3) {
          return e3[Ko] || null;
        }
        var Rf = [], di = -1;
        function Qn(e3) {
          return { current: e3 };
        }
        function Ne(e3) {
          0 > di || (e3.current = Rf[di], Rf[di] = null, di--);
        }
        function Ce(e3, t) {
          di++, Rf[di] = e3.current, e3.current = t;
        }
        var Gn = {}, kt = Qn(Gn), Bt = Qn(false), Ca = Gn;
        function Ri(e3, t) {
          var r = e3.type.contextTypes;
          if (!r) return Gn;
          var n = e3.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
          var a = {}, i;
          for (i in r) a[i] = t[i];
          return n && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = t, e3.__reactInternalMemoizedMaskedChildContext = a), a;
        }
        function Vt(e3) {
          return e3 = e3.childContextTypes, e3 != null;
        }
        function Js() {
          Ne(Bt), Ne(kt);
        }
        function Tg(e3, t, r) {
          if (kt.current !== Gn) throw Error($(168));
          Ce(kt, t), Ce(Bt, r);
        }
        function r1(e3, t, r) {
          var n = e3.stateNode;
          if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
          n = n.getChildContext();
          for (var a in n) if (!(a in t)) throw Error($(108, G3(e3) || "Unknown", a));
          return ze({}, r, n);
        }
        function eu(e3) {
          return e3 = (e3 = e3.stateNode) && e3.__reactInternalMemoizedMergedChildContext || Gn, Ca = kt.current, Ce(kt, e3), Ce(Bt, Bt.current), true;
        }
        function Ag(e3, t, r) {
          var n = e3.stateNode;
          if (!n) throw Error($(169));
          r ? (e3 = r1(e3, t, Ca), n.__reactInternalMemoizedMergedChildContext = e3, Ne(Bt), Ne(kt), Ce(kt, e3)) : Ne(Bt), Ce(Bt, r);
        }
        var an = null, wu = false, Hd = false;
        function n1(e3) {
          an === null ? an = [e3] : an.push(e3);
        }
        function uk(e3) {
          wu = true, n1(e3);
        }
        function Xn() {
          if (!Hd && an !== null) {
            Hd = true;
            var e3 = 0, t = ye;
            try {
              var r = an;
              for (ye = 1; e3 < r.length; e3++) {
                var n = r[e3];
                do
                  n = n(true);
                while (n !== null);
              }
              an = null, wu = false;
            } catch (a) {
              throw an !== null && (an = an.slice(e3 + 1)), Nv(Xf, Xn), a;
            } finally {
              ye = t, Hd = false;
            }
          }
          return null;
        }
        var fi = [], hi = 0, tu = null, ru = 0, ir = [], or = 0, Da = null, on = 1, ln = "";
        function wa(e3, t) {
          fi[hi++] = ru, fi[hi++] = tu, tu = e3, ru = t;
        }
        function a1(e3, t, r) {
          ir[or++] = on, ir[or++] = ln, ir[or++] = Da, Da = e3;
          var n = on;
          e3 = ln;
          var a = 32 - Sr(n) - 1;
          n &= ~(1 << a), r += 1;
          var i = 32 - Sr(t) + a;
          if (30 < i) {
            var o = a - a % 5;
            i = (n & (1 << o) - 1).toString(32), n >>= o, a -= o, on = 1 << 32 - Sr(t) + a | r << a | n, ln = i + e3;
          } else on = 1 << i | r << a | n, ln = e3;
        }
        function oh(e3) {
          e3.return !== null && (wa(e3, 1), a1(e3, 1, 0));
        }
        function lh(e3) {
          for (; e3 === tu; ) tu = fi[--hi], fi[hi] = null, ru = fi[--hi], fi[hi] = null;
          for (; e3 === Da; ) Da = ir[--or], ir[or] = null, ln = ir[--or], ir[or] = null, on = ir[--or], ir[or] = null;
        }
        var Qt = null, Kt = null, Te = false, Rr = null;
        function i1(e3, t) {
          var r = lr(5, null, null, 0);
          r.elementType = "DELETED", r.stateNode = t, r.return = e3, t = e3.deletions, t === null ? (e3.deletions = [r], e3.flags |= 16) : t.push(r);
        }
        function Fg(e3, t) {
          switch (e3.tag) {
            case 5:
              var r = e3.type;
              return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e3.stateNode = t, Qt = e3, Kt = Hn(t.firstChild), true) : false;
            case 6:
              return t = e3.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e3.stateNode = t, Qt = e3, Kt = null, true) : false;
            case 13:
              return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Da !== null ? { id: on, overflow: ln } : null, e3.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = lr(18, null, null, 0), r.stateNode = t, r.return = e3, e3.child = r, Qt = e3, Kt = null, true) : false;
            default:
              return false;
          }
        }
        function Sf(e3) {
          return (e3.mode & 1) !== 0 && (e3.flags & 128) === 0;
        }
        function Cf(e3) {
          if (Te) {
            var t = Kt;
            if (t) {
              var r = t;
              if (!Fg(e3, t)) {
                if (Sf(e3)) throw Error($(418));
                t = Hn(r.nextSibling);
                var n = Qt;
                t && Fg(e3, t) ? i1(n, r) : (e3.flags = e3.flags & -4097 | 2, Te = false, Qt = e3);
              }
            } else {
              if (Sf(e3)) throw Error($(418));
              e3.flags = e3.flags & -4097 | 2, Te = false, Qt = e3;
            }
          }
        }
        function $g(e3) {
          for (e3 = e3.return; e3 !== null && e3.tag !== 5 && e3.tag !== 3 && e3.tag !== 13; ) e3 = e3.return;
          Qt = e3;
        }
        function Ms(e3) {
          if (e3 !== Qt) return false;
          if (!Te) return $g(e3), Te = true, false;
          var t;
          if ((t = e3.tag !== 3) && !(t = e3.tag !== 5) && (t = e3.type, t = t !== "head" && t !== "body" && !bf(e3.type, e3.memoizedProps)), t && (t = Kt)) {
            if (Sf(e3)) throw o1(), Error($(418));
            for (; t; ) i1(e3, t), t = Hn(t.nextSibling);
          }
          if ($g(e3), e3.tag === 13) {
            if (e3 = e3.memoizedState, e3 = e3 !== null ? e3.dehydrated : null, !e3) throw Error($(317));
            e: {
              for (e3 = e3.nextSibling, t = 0; e3; ) {
                if (e3.nodeType === 8) {
                  var r = e3.data;
                  if (r === "/$") {
                    if (t === 0) {
                      Kt = Hn(e3.nextSibling);
                      break e;
                    }
                    t--;
                  } else r !== "$" && r !== "$!" && r !== "$?" || t++;
                }
                e3 = e3.nextSibling;
              }
              Kt = null;
            }
          } else Kt = Qt ? Hn(e3.stateNode.nextSibling) : null;
          return true;
        }
        function o1() {
          for (var e3 = Kt; e3; ) e3 = Hn(e3.nextSibling);
        }
        function Si() {
          Kt = Qt = null, Te = false;
        }
        function sh(e3) {
          Rr === null ? Rr = [e3] : Rr.push(e3);
        }
        var ck = hn.ReactCurrentBatchConfig;
        function ko(e3, t, r) {
          if (e3 = r.ref, e3 !== null && typeof e3 != "function" && typeof e3 != "object") {
            if (r._owner) {
              if (r = r._owner, r) {
                if (r.tag !== 1) throw Error($(309));
                var n = r.stateNode;
              }
              if (!n) throw Error($(147, e3));
              var a = n, i = "" + e3;
              return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var l = a.refs;
                o === null ? delete l[i] : l[i] = o;
              }, t._stringRef = i, t);
            }
            if (typeof e3 != "string") throw Error($(284));
            if (!r._owner) throw Error($(290, e3));
          }
          return e3;
        }
        function Ls(e3, t) {
          throw e3 = Object.prototype.toString.call(t), Error($(31, e3 === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e3));
        }
        function Og(e3) {
          var t = e3._init;
          return t(e3._payload);
        }
        function l1(e3) {
          function t(g, p) {
            if (e3) {
              var w = g.deletions;
              w === null ? (g.deletions = [p], g.flags |= 16) : w.push(p);
            }
          }
          function r(g, p) {
            if (!e3) return null;
            for (; p !== null; ) t(g, p), p = p.sibling;
            return null;
          }
          function n(g, p) {
            for (g = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
            return g;
          }
          function a(g, p) {
            return g = Yn(g, p), g.index = 0, g.sibling = null, g;
          }
          function i(g, p, w) {
            return g.index = w, e3 ? (w = g.alternate, w !== null ? (w = w.index, w < p ? (g.flags |= 2, p) : w) : (g.flags |= 2, p)) : (g.flags |= 1048576, p);
          }
          function o(g) {
            return e3 && g.alternate === null && (g.flags |= 2), g;
          }
          function l(g, p, w, b) {
            return p === null || p.tag !== 6 ? (p = Kd(w, g.mode, b), p.return = g, p) : (p = a(p, w), p.return = g, p);
          }
          function s(g, p, w, b) {
            var E = w.type;
            return E === oi ? c(g, p, w.props.children, b, w.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tn && Og(E) === p.type) ? (b = a(p, w.props), b.ref = ko(g, p, w), b.return = g, b) : (b = Bs(w.type, w.key, w.props, null, g.mode, b), b.ref = ko(g, p, w), b.return = g, b);
          }
          function u(g, p, w, b) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== w.containerInfo || p.stateNode.implementation !== w.implementation ? (p = Qd(w, g.mode, b), p.return = g, p) : (p = a(p, w.children || []), p.return = g, p);
          }
          function c(g, p, w, b, E) {
            return p === null || p.tag !== 7 ? (p = Sa(w, g.mode, b, E), p.return = g, p) : (p = a(p, w), p.return = g, p);
          }
          function d(g, p, w) {
            if (typeof p == "string" && p !== "" || typeof p == "number") return p = Kd("" + p, g.mode, w), p.return = g, p;
            if (typeof p == "object" && p !== null) {
              switch (p.$$typeof) {
                case ms:
                  return w = Bs(p.type, p.key, p.props, null, g.mode, w), w.ref = ko(g, null, p), w.return = g, w;
                case ii:
                  return p = Qd(p, g.mode, w), p.return = g, p;
                case Tn:
                  var b = p._init;
                  return d(g, b(p._payload), w);
              }
              if (Do(p) || yo(p)) return p = Sa(p, g.mode, w, null), p.return = g, p;
              Ls(g, p);
            }
            return null;
          }
          function f(g, p, w, b) {
            var E = p !== null ? p.key : null;
            if (typeof w == "string" && w !== "" || typeof w == "number") return E !== null ? null : l(g, p, "" + w, b);
            if (typeof w == "object" && w !== null) {
              switch (w.$$typeof) {
                case ms:
                  return w.key === E ? s(g, p, w, b) : null;
                case ii:
                  return w.key === E ? u(g, p, w, b) : null;
                case Tn:
                  return E = w._init, f(g, p, E(w._payload), b);
              }
              if (Do(w) || yo(w)) return E !== null ? null : c(g, p, w, b, null);
              Ls(g, w);
            }
            return null;
          }
          function h(g, p, w, b, E) {
            if (typeof b == "string" && b !== "" || typeof b == "number") return g = g.get(w) || null, l(p, g, "" + b, E);
            if (typeof b == "object" && b !== null) {
              switch (b.$$typeof) {
                case ms:
                  return g = g.get(b.key === null ? w : b.key) || null, s(p, g, b, E);
                case ii:
                  return g = g.get(b.key === null ? w : b.key) || null, u(p, g, b, E);
                case Tn:
                  var S = b._init;
                  return h(g, p, w, S(b._payload), E);
              }
              if (Do(b) || yo(b)) return g = g.get(w) || null, c(p, g, b, E, null);
              Ls(p, b);
            }
            return null;
          }
          function v(g, p, w, b) {
            for (var E = null, S = null, R = p, x = p = 0, M = null; R !== null && x < w.length; x++) {
              R.index > x ? (M = R, R = null) : M = R.sibling;
              var P = f(g, R, w[x], b);
              if (P === null) {
                R === null && (R = M);
                break;
              }
              e3 && R && P.alternate === null && t(g, R), p = i(P, p, x), S === null ? E = P : S.sibling = P, S = P, R = M;
            }
            if (x === w.length) return r(g, R), Te && wa(g, x), E;
            if (R === null) {
              for (; x < w.length; x++) R = d(g, w[x], b), R !== null && (p = i(R, p, x), S === null ? E = R : S.sibling = R, S = R);
              return Te && wa(g, x), E;
            }
            for (R = n(g, R); x < w.length; x++) M = h(R, g, x, w[x], b), M !== null && (e3 && M.alternate !== null && R.delete(M.key === null ? x : M.key), p = i(M, p, x), S === null ? E = M : S.sibling = M, S = M);
            return e3 && R.forEach(function(A) {
              return t(g, A);
            }), Te && wa(g, x), E;
          }
          function y(g, p, w, b) {
            var E = yo(w);
            if (typeof E != "function") throw Error($(150));
            if (w = E.call(w), w == null) throw Error($(151));
            for (var S = E = null, R = p, x = p = 0, M = null, P = w.next(); R !== null && !P.done; x++, P = w.next()) {
              R.index > x ? (M = R, R = null) : M = R.sibling;
              var A = f(g, R, P.value, b);
              if (A === null) {
                R === null && (R = M);
                break;
              }
              e3 && R && A.alternate === null && t(g, R), p = i(A, p, x), S === null ? E = A : S.sibling = A, S = A, R = M;
            }
            if (P.done) return r(g, R), Te && wa(g, x), E;
            if (R === null) {
              for (; !P.done; x++, P = w.next()) P = d(g, P.value, b), P !== null && (p = i(P, p, x), S === null ? E = P : S.sibling = P, S = P);
              return Te && wa(g, x), E;
            }
            for (R = n(g, R); !P.done; x++, P = w.next()) P = h(R, g, x, P.value, b), P !== null && (e3 && P.alternate !== null && R.delete(P.key === null ? x : P.key), p = i(P, p, x), S === null ? E = P : S.sibling = P, S = P);
            return e3 && R.forEach(function(L) {
              return t(g, L);
            }), Te && wa(g, x), E;
          }
          function m(g, p, w, b) {
            if (typeof w == "object" && w !== null && w.type === oi && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
              switch (w.$$typeof) {
                case ms:
                  e: {
                    for (var E = w.key, S = p; S !== null; ) {
                      if (S.key === E) {
                        if (E = w.type, E === oi) {
                          if (S.tag === 7) {
                            r(g, S.sibling), p = a(S, w.props.children), p.return = g, g = p;
                            break e;
                          }
                        } else if (S.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tn && Og(E) === S.type) {
                          r(g, S.sibling), p = a(S, w.props), p.ref = ko(g, S, w), p.return = g, g = p;
                          break e;
                        }
                        r(g, S);
                        break;
                      } else t(g, S);
                      S = S.sibling;
                    }
                    w.type === oi ? (p = Sa(w.props.children, g.mode, b, w.key), p.return = g, g = p) : (b = Bs(w.type, w.key, w.props, null, g.mode, b), b.ref = ko(g, p, w), b.return = g, g = b);
                  }
                  return o(g);
                case ii:
                  e: {
                    for (S = w.key; p !== null; ) {
                      if (p.key === S) if (p.tag === 4 && p.stateNode.containerInfo === w.containerInfo && p.stateNode.implementation === w.implementation) {
                        r(g, p.sibling), p = a(p, w.children || []), p.return = g, g = p;
                        break e;
                      } else {
                        r(g, p);
                        break;
                      }
                      else t(g, p);
                      p = p.sibling;
                    }
                    p = Qd(w, g.mode, b), p.return = g, g = p;
                  }
                  return o(g);
                case Tn:
                  return S = w._init, m(g, p, S(w._payload), b);
              }
              if (Do(w)) return v(g, p, w, b);
              if (yo(w)) return y(g, p, w, b);
              Ls(g, w);
            }
            return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, p !== null && p.tag === 6 ? (r(g, p.sibling), p = a(p, w), p.return = g, g = p) : (r(g, p), p = Kd(w, g.mode, b), p.return = g, g = p), o(g)) : r(g, p);
          }
          return m;
        }
        var Ci = l1(true), s1 = l1(false), nu = Qn(null), au = null, pi = null, uh = null;
        function ch() {
          uh = pi = au = null;
        }
        function dh(e3) {
          var t = nu.current;
          Ne(nu), e3._currentValue = t;
        }
        function Df(e3, t, r) {
          for (; e3 !== null; ) {
            var n = e3.alternate;
            if ((e3.childLanes & t) !== t ? (e3.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e3 === r) break;
            e3 = e3.return;
          }
        }
        function bi(e3, t) {
          au = e3, uh = pi = null, e3 = e3.dependencies, e3 !== null && e3.firstContext !== null && ((e3.lanes & t) !== 0 && (Ht = true), e3.firstContext = null);
        }
        function ur(e3) {
          var t = e3._currentValue;
          if (uh !== e3) if (e3 = { context: e3, memoizedValue: t, next: null }, pi === null) {
            if (au === null) throw Error($(308));
            pi = e3, au.dependencies = { lanes: 0, firstContext: e3 };
          } else pi = pi.next = e3;
          return t;
        }
        var ka = null;
        function fh(e3) {
          ka === null ? ka = [e3] : ka.push(e3);
        }
        function u1(e3, t, r, n) {
          var a = t.interleaved;
          return a === null ? (r.next = r, fh(t)) : (r.next = a.next, a.next = r), t.interleaved = r, dn(e3, n);
        }
        function dn(e3, t) {
          e3.lanes |= t;
          var r = e3.alternate;
          for (r !== null && (r.lanes |= t), r = e3, e3 = e3.return; e3 !== null; ) e3.childLanes |= t, r = e3.alternate, r !== null && (r.childLanes |= t), r = e3, e3 = e3.return;
          return r.tag === 3 ? r.stateNode : null;
        }
        var An = false;
        function hh(e3) {
          e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
        }
        function c1(e3, t) {
          e3 = e3.updateQueue, t.updateQueue === e3 && (t.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, effects: e3.effects });
        }
        function sn(e3, t) {
          return { eventTime: e3, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Bn(e3, t, r) {
          var n = e3.updateQueue;
          if (n === null) return null;
          if (n = n.shared, (pe & 2) !== 0) {
            var a = n.pending;
            return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, dn(e3, r);
          }
          return a = n.interleaved, a === null ? (t.next = t, fh(n)) : (t.next = a.next, a.next = t), n.interleaved = t, dn(e3, r);
        }
        function Os(e3, t, r) {
          if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
            var n = t.lanes;
            n &= e3.pendingLanes, r |= n, t.lanes = r, Zf(e3, r);
          }
        }
        function zg(e3, t) {
          var r = e3.updateQueue, n = e3.alternate;
          if (n !== null && (n = n.updateQueue, r === n)) {
            var a = null, i = null;
            if (r = r.firstBaseUpdate, r !== null) {
              do {
                var o = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
                i === null ? a = i = o : i = i.next = o, r = r.next;
              } while (r !== null);
              i === null ? a = i = t : i = i.next = t;
            } else a = i = t;
            r = { baseState: n.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: n.shared, effects: n.effects }, e3.updateQueue = r;
            return;
          }
          e3 = r.lastBaseUpdate, e3 === null ? r.firstBaseUpdate = t : e3.next = t, r.lastBaseUpdate = t;
        }
        function iu(e3, t, r, n) {
          var a = e3.updateQueue;
          An = false;
          var i = a.firstBaseUpdate, o = a.lastBaseUpdate, l = a.shared.pending;
          if (l !== null) {
            a.shared.pending = null;
            var s = l, u = s.next;
            s.next = null, o === null ? i = u : o.next = u, o = s;
            var c = e3.alternate;
            c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s));
          }
          if (i !== null) {
            var d = a.baseState;
            o = 0, c = u = s = null, l = i;
            do {
              var f = l.lane, h = l.eventTime;
              if ((n & f) === f) {
                c !== null && (c = c.next = { eventTime: h, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                  var v = e3, y = l;
                  switch (f = t, h = r, y.tag) {
                    case 1:
                      if (v = y.payload, typeof v == "function") {
                        d = v.call(h, d, f);
                        break e;
                      }
                      d = v;
                      break e;
                    case 3:
                      v.flags = v.flags & -65537 | 128;
                    case 0:
                      if (v = y.payload, f = typeof v == "function" ? v.call(h, d, f) : v, f == null) break e;
                      d = ze({}, d, f);
                      break e;
                    case 2:
                      An = true;
                  }
                }
                l.callback !== null && l.lane !== 0 && (e3.flags |= 64, f = a.effects, f === null ? a.effects = [l] : f.push(l));
              } else h = { eventTime: h, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = h, s = d) : c = c.next = h, o |= f;
              if (l = l.next, l === null) {
                if (l = a.shared.pending, l === null) break;
                f = l, l = f.next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null;
              }
            } while (true);
            if (c === null && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, t = a.shared.interleaved, t !== null) {
              a = t;
              do
                o |= a.lane, a = a.next;
              while (a !== t);
            } else i === null && (a.shared.lanes = 0);
            Ma |= o, e3.lanes = o, e3.memoizedState = d;
          }
        }
        function Ig(e3, t, r) {
          if (e3 = t.effects, t.effects = null, e3 !== null) for (t = 0; t < e3.length; t++) {
            var n = e3[t], a = n.callback;
            if (a !== null) {
              if (n.callback = null, n = r, typeof a != "function") throw Error($(191, a));
              a.call(n);
            }
          }
        }
        var il = {}, Ur = Qn(il), Qo = Qn(il), Xo = Qn(il);
        function Ea(e3) {
          if (e3 === il) throw Error($(174));
          return e3;
        }
        function ph(e3, t) {
          switch (Ce(Xo, t), Ce(Qo, e3), Ce(Ur, il), e3 = t.nodeType, e3) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : lf(null, "");
              break;
            default:
              e3 = e3 === 8 ? t.parentNode : t, t = e3.namespaceURI || null, e3 = e3.tagName, t = lf(t, e3);
          }
          Ne(Ur), Ce(Ur, t);
        }
        function Di() {
          Ne(Ur), Ne(Qo), Ne(Xo);
        }
        function d1(e3) {
          Ea(Xo.current);
          var t = Ea(Ur.current), r = lf(t, e3.type);
          t !== r && (Ce(Qo, e3), Ce(Ur, r));
        }
        function mh(e3) {
          Qo.current === e3 && (Ne(Ur), Ne(Qo));
        }
        var $e = Qn(0);
        function ou(e3) {
          for (var t = e3; t !== null; ) {
            if (t.tag === 13) {
              var r = t.memoizedState;
              if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
              if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e3) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e3) return null;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
          return null;
        }
        var Bd = [];
        function gh() {
          for (var e3 = 0; e3 < Bd.length; e3++) Bd[e3]._workInProgressVersionPrimary = null;
          Bd.length = 0;
        }
        var zs = hn.ReactCurrentDispatcher, Vd = hn.ReactCurrentBatchConfig, Na = 0, Oe = null, Je = null, tt = null, lu = false, Fo = false, Zo = 0, dk = 0;
        function wt() {
          throw Error($(321));
        }
        function vh(e3, t) {
          if (t === null) return false;
          for (var r = 0; r < t.length && r < e3.length; r++) if (!Dr(e3[r], t[r])) return false;
          return true;
        }
        function yh(e3, t, r, n, a, i) {
          if (Na = i, Oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zs.current = e3 === null || e3.memoizedState === null ? mk : gk, e3 = r(n, a), Fo) {
            i = 0;
            do {
              if (Fo = false, Zo = 0, 25 <= i) throw Error($(301));
              i += 1, tt = Je = null, t.updateQueue = null, zs.current = vk, e3 = r(n, a);
            } while (Fo);
          }
          if (zs.current = su, t = Je !== null && Je.next !== null, Na = 0, tt = Je = Oe = null, lu = false, t) throw Error($(300));
          return e3;
        }
        function wh() {
          var e3 = Zo !== 0;
          return Zo = 0, e3;
        }
        function zr() {
          var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return tt === null ? Oe.memoizedState = tt = e3 : tt = tt.next = e3, tt;
        }
        function cr() {
          if (Je === null) {
            var e3 = Oe.alternate;
            e3 = e3 !== null ? e3.memoizedState : null;
          } else e3 = Je.next;
          var t = tt === null ? Oe.memoizedState : tt.next;
          if (t !== null) tt = t, Je = e3;
          else {
            if (e3 === null) throw Error($(310));
            Je = e3, e3 = { memoizedState: Je.memoizedState, baseState: Je.baseState, baseQueue: Je.baseQueue, queue: Je.queue, next: null }, tt === null ? Oe.memoizedState = tt = e3 : tt = tt.next = e3;
          }
          return tt;
        }
        function Jo(e3, t) {
          return typeof t == "function" ? t(e3) : t;
        }
        function Wd(e3) {
          var t = cr(), r = t.queue;
          if (r === null) throw Error($(311));
          r.lastRenderedReducer = e3;
          var n = Je, a = n.baseQueue, i = r.pending;
          if (i !== null) {
            if (a !== null) {
              var o = a.next;
              a.next = i.next, i.next = o;
            }
            n.baseQueue = a = i, r.pending = null;
          }
          if (a !== null) {
            i = a.next, n = n.baseState;
            var l = o = null, s = null, u = i;
            do {
              var c = u.lane;
              if ((Na & c) === c) s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e3(n, u.action);
              else {
                var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                s === null ? (l = s = d, o = n) : s = s.next = d, Oe.lanes |= c, Ma |= c;
              }
              u = u.next;
            } while (u !== null && u !== i);
            s === null ? o = n : s.next = l, Dr(n, t.memoizedState) || (Ht = true), t.memoizedState = n, t.baseState = o, t.baseQueue = s, r.lastRenderedState = n;
          }
          if (e3 = r.interleaved, e3 !== null) {
            a = e3;
            do
              i = a.lane, Oe.lanes |= i, Ma |= i, a = a.next;
            while (a !== e3);
          } else a === null && (r.lanes = 0);
          return [t.memoizedState, r.dispatch];
        }
        function Yd(e3) {
          var t = cr(), r = t.queue;
          if (r === null) throw Error($(311));
          r.lastRenderedReducer = e3;
          var n = r.dispatch, a = r.pending, i = t.memoizedState;
          if (a !== null) {
            r.pending = null;
            var o = a = a.next;
            do
              i = e3(i, o.action), o = o.next;
            while (o !== a);
            Dr(i, t.memoizedState) || (Ht = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
          }
          return [i, n];
        }
        function f1() {
        }
        function h1(e3, t) {
          var r = Oe, n = cr(), a = t(), i = !Dr(n.memoizedState, a);
          if (i && (n.memoizedState = a, Ht = true), n = n.queue, xh(g1.bind(null, r, n, e3), [e3]), n.getSnapshot !== t || i || tt !== null && tt.memoizedState.tag & 1) {
            if (r.flags |= 2048, el(9, m1.bind(null, r, n, a, t), void 0, null), rt === null) throw Error($(349));
            (Na & 30) !== 0 || p1(r, t, a);
          }
          return a;
        }
        function p1(e3, t, r) {
          e3.flags |= 16384, e3 = { getSnapshot: t, value: r }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.stores = [e3]) : (r = t.stores, r === null ? t.stores = [e3] : r.push(e3));
        }
        function m1(e3, t, r, n) {
          t.value = r, t.getSnapshot = n, v1(t) && y1(e3);
        }
        function g1(e3, t, r) {
          return r(function() {
            v1(t) && y1(e3);
          });
        }
        function v1(e3) {
          var t = e3.getSnapshot;
          e3 = e3.value;
          try {
            var r = t();
            return !Dr(e3, r);
          } catch {
            return true;
          }
        }
        function y1(e3) {
          var t = dn(e3, 1);
          t !== null && Cr(t, e3, 1, -1);
        }
        function jg(e3) {
          var t = zr();
          return typeof e3 == "function" && (e3 = e3()), t.memoizedState = t.baseState = e3, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jo, lastRenderedState: e3 }, t.queue = e3, e3 = e3.dispatch = pk.bind(null, Oe, e3), [t.memoizedState, e3];
        }
        function el(e3, t, r, n) {
          return e3 = { tag: e3, create: t, destroy: r, deps: n, next: null }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.lastEffect = e3.next = e3) : (r = t.lastEffect, r === null ? t.lastEffect = e3.next = e3 : (n = r.next, r.next = e3, e3.next = n, t.lastEffect = e3)), e3;
        }
        function w1() {
          return cr().memoizedState;
        }
        function Is(e3, t, r, n) {
          var a = zr();
          Oe.flags |= e3, a.memoizedState = el(1 | t, r, void 0, n === void 0 ? null : n);
        }
        function xu(e3, t, r, n) {
          var a = cr();
          n = n === void 0 ? null : n;
          var i = void 0;
          if (Je !== null) {
            var o = Je.memoizedState;
            if (i = o.destroy, n !== null && vh(n, o.deps)) {
              a.memoizedState = el(t, r, i, n);
              return;
            }
          }
          Oe.flags |= e3, a.memoizedState = el(1 | t, r, i, n);
        }
        function Ug(e3, t) {
          return Is(8390656, 8, e3, t);
        }
        function xh(e3, t) {
          return xu(2048, 8, e3, t);
        }
        function x1(e3, t) {
          return xu(4, 2, e3, t);
        }
        function b1(e3, t) {
          return xu(4, 4, e3, t);
        }
        function k1(e3, t) {
          if (typeof t == "function") return e3 = e3(), t(e3), function() {
            t(null);
          };
          if (t != null) return e3 = e3(), t.current = e3, function() {
            t.current = null;
          };
        }
        function E1(e3, t, r) {
          return r = r != null ? r.concat([e3]) : null, xu(4, 4, k1.bind(null, t, e3), r);
        }
        function bh() {
        }
        function R1(e3, t) {
          var r = cr();
          t = t === void 0 ? null : t;
          var n = r.memoizedState;
          return n !== null && t !== null && vh(t, n[1]) ? n[0] : (r.memoizedState = [e3, t], e3);
        }
        function S1(e3, t) {
          var r = cr();
          t = t === void 0 ? null : t;
          var n = r.memoizedState;
          return n !== null && t !== null && vh(t, n[1]) ? n[0] : (e3 = e3(), r.memoizedState = [e3, t], e3);
        }
        function C1(e3, t, r) {
          return (Na & 21) === 0 ? (e3.baseState && (e3.baseState = false, Ht = true), e3.memoizedState = r) : (Dr(r, t) || (r = Pv(), Oe.lanes |= r, Ma |= r, e3.baseState = true), t);
        }
        function fk(e3, t) {
          var r = ye;
          ye = r !== 0 && 4 > r ? r : 4, e3(true);
          var n = Vd.transition;
          Vd.transition = {};
          try {
            e3(false), t();
          } finally {
            ye = r, Vd.transition = n;
          }
        }
        function D1() {
          return cr().memoizedState;
        }
        function hk(e3, t, r) {
          var n = Wn(e3);
          if (r = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null }, N1(e3)) M1(t, r);
          else if (r = u1(e3, t, r, n), r !== null) {
            var a = At();
            Cr(r, e3, n, a), L1(r, t, n);
          }
        }
        function pk(e3, t, r) {
          var n = Wn(e3), a = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null };
          if (N1(e3)) M1(t, a);
          else {
            var i = e3.alternate;
            if (e3.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
              var o = t.lastRenderedState, l = i(o, r);
              if (a.hasEagerState = true, a.eagerState = l, Dr(l, o)) {
                var s = t.interleaved;
                s === null ? (a.next = a, fh(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
                return;
              }
            } catch {
            }
            r = u1(e3, t, a, n), r !== null && (a = At(), Cr(r, e3, n, a), L1(r, t, n));
          }
        }
        function N1(e3) {
          var t = e3.alternate;
          return e3 === Oe || t !== null && t === Oe;
        }
        function M1(e3, t) {
          Fo = lu = true;
          var r = e3.pending;
          r === null ? t.next = t : (t.next = r.next, r.next = t), e3.pending = t;
        }
        function L1(e3, t, r) {
          if ((r & 4194240) !== 0) {
            var n = t.lanes;
            n &= e3.pendingLanes, r |= n, t.lanes = r, Zf(e3, r);
          }
        }
        var su = { readContext: ur, useCallback: wt, useContext: wt, useEffect: wt, useImperativeHandle: wt, useInsertionEffect: wt, useLayoutEffect: wt, useMemo: wt, useReducer: wt, useRef: wt, useState: wt, useDebugValue: wt, useDeferredValue: wt, useTransition: wt, useMutableSource: wt, useSyncExternalStore: wt, useId: wt, unstable_isNewReconciler: false }, mk = { readContext: ur, useCallback: function(e3, t) {
          return zr().memoizedState = [e3, t === void 0 ? null : t], e3;
        }, useContext: ur, useEffect: Ug, useImperativeHandle: function(e3, t, r) {
          return r = r != null ? r.concat([e3]) : null, Is(4194308, 4, k1.bind(null, t, e3), r);
        }, useLayoutEffect: function(e3, t) {
          return Is(4194308, 4, e3, t);
        }, useInsertionEffect: function(e3, t) {
          return Is(4, 2, e3, t);
        }, useMemo: function(e3, t) {
          var r = zr();
          return t = t === void 0 ? null : t, e3 = e3(), r.memoizedState = [e3, t], e3;
        }, useReducer: function(e3, t, r) {
          var n = zr();
          return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e3, lastRenderedState: t }, n.queue = e3, e3 = e3.dispatch = hk.bind(null, Oe, e3), [n.memoizedState, e3];
        }, useRef: function(e3) {
          var t = zr();
          return e3 = { current: e3 }, t.memoizedState = e3;
        }, useState: jg, useDebugValue: bh, useDeferredValue: function(e3) {
          return zr().memoizedState = e3;
        }, useTransition: function() {
          var e3 = jg(false), t = e3[0];
          return e3 = fk.bind(null, e3[1]), zr().memoizedState = e3, [t, e3];
        }, useMutableSource: function() {
        }, useSyncExternalStore: function(e3, t, r) {
          var n = Oe, a = zr();
          if (Te) {
            if (r === void 0) throw Error($(407));
            r = r();
          } else {
            if (r = t(), rt === null) throw Error($(349));
            (Na & 30) !== 0 || p1(n, t, r);
          }
          a.memoizedState = r;
          var i = { value: r, getSnapshot: t };
          return a.queue = i, Ug(g1.bind(null, n, i, e3), [e3]), n.flags |= 2048, el(9, m1.bind(null, n, i, r, t), void 0, null), r;
        }, useId: function() {
          var e3 = zr(), t = rt.identifierPrefix;
          if (Te) {
            var r = ln, n = on;
            r = (n & ~(1 << 32 - Sr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Zo++, 0 < r && (t += "H" + r.toString(32)), t += ":";
          } else r = dk++, t = ":" + t + "r" + r.toString(32) + ":";
          return e3.memoizedState = t;
        }, unstable_isNewReconciler: false }, gk = { readContext: ur, useCallback: R1, useContext: ur, useEffect: xh, useImperativeHandle: E1, useInsertionEffect: x1, useLayoutEffect: b1, useMemo: S1, useReducer: Wd, useRef: w1, useState: function() {
          return Wd(Jo);
        }, useDebugValue: bh, useDeferredValue: function(e3) {
          var t = cr();
          return C1(t, Je.memoizedState, e3);
        }, useTransition: function() {
          var e3 = Wd(Jo)[0], t = cr().memoizedState;
          return [e3, t];
        }, useMutableSource: f1, useSyncExternalStore: h1, useId: D1, unstable_isNewReconciler: false }, vk = { readContext: ur, useCallback: R1, useContext: ur, useEffect: xh, useImperativeHandle: E1, useInsertionEffect: x1, useLayoutEffect: b1, useMemo: S1, useReducer: Yd, useRef: w1, useState: function() {
          return Yd(Jo);
        }, useDebugValue: bh, useDeferredValue: function(e3) {
          var t = cr();
          return Je === null ? t.memoizedState = e3 : C1(t, Je.memoizedState, e3);
        }, useTransition: function() {
          var e3 = Yd(Jo)[0], t = cr().memoizedState;
          return [e3, t];
        }, useMutableSource: f1, useSyncExternalStore: h1, useId: D1, unstable_isNewReconciler: false };
        function kr(e3, t) {
          if (e3 && e3.defaultProps) {
            t = ze({}, t), e3 = e3.defaultProps;
            for (var r in e3) t[r] === void 0 && (t[r] = e3[r]);
            return t;
          }
          return t;
        }
        function Nf(e3, t, r, n) {
          t = e3.memoizedState, r = r(n, t), r = r == null ? t : ze({}, t, r), e3.memoizedState = r, e3.lanes === 0 && (e3.updateQueue.baseState = r);
        }
        var bu = { isMounted: function(e3) {
          return (e3 = e3._reactInternals) ? _a(e3) === e3 : false;
        }, enqueueSetState: function(e3, t, r) {
          e3 = e3._reactInternals;
          var n = At(), a = Wn(e3), i = sn(n, a);
          i.payload = t, r != null && (i.callback = r), t = Bn(e3, i, a), t !== null && (Cr(t, e3, a, n), Os(t, e3, a));
        }, enqueueReplaceState: function(e3, t, r) {
          e3 = e3._reactInternals;
          var n = At(), a = Wn(e3), i = sn(n, a);
          i.tag = 1, i.payload = t, r != null && (i.callback = r), t = Bn(e3, i, a), t !== null && (Cr(t, e3, a, n), Os(t, e3, a));
        }, enqueueForceUpdate: function(e3, t) {
          e3 = e3._reactInternals;
          var r = At(), n = Wn(e3), a = sn(r, n);
          a.tag = 2, t != null && (a.callback = t), t = Bn(e3, a, n), t !== null && (Cr(t, e3, n, r), Os(t, e3, n));
        } };
        function Hg(e3, t, r, n, a, i, o) {
          return e3 = e3.stateNode, typeof e3.shouldComponentUpdate == "function" ? e3.shouldComponentUpdate(n, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Yo(r, n) || !Yo(a, i) : true;
        }
        function P1(e3, t, r) {
          var n = false, a = Gn, i = t.contextType;
          return typeof i == "object" && i !== null ? i = ur(i) : (a = Vt(t) ? Ca : kt.current, n = t.contextTypes, i = (n = n != null) ? Ri(e3, a) : Gn), t = new t(r, i), e3.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bu, e3.stateNode = t, t._reactInternals = e3, n && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = a, e3.__reactInternalMemoizedMaskedChildContext = i), t;
        }
        function Bg(e3, t, r, n) {
          e3 = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e3 && bu.enqueueReplaceState(t, t.state, null);
        }
        function Mf(e3, t, r, n) {
          var a = e3.stateNode;
          a.props = r, a.state = e3.memoizedState, a.refs = {}, hh(e3);
          var i = t.contextType;
          typeof i == "object" && i !== null ? a.context = ur(i) : (i = Vt(t) ? Ca : kt.current, a.context = Ri(e3, i)), a.state = e3.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Nf(e3, t, i, r), a.state = e3.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && bu.enqueueReplaceState(a, a.state, null), iu(e3, r, a, n), a.state = e3.memoizedState), typeof a.componentDidMount == "function" && (e3.flags |= 4194308);
        }
        function Ni(e3, t) {
          try {
            var r = "", n = t;
            do
              r += q3(n), n = n.return;
            while (n);
            var a = r;
          } catch (i) {
            a = `
Error generating stack: ` + i.message + `
` + i.stack;
          }
          return { value: e3, source: t, stack: a, digest: null };
        }
        function qd(e3, t, r) {
          return { value: e3, source: null, stack: r ?? null, digest: t ?? null };
        }
        function Lf(e3, t) {
          try {
            console.error(t.value);
          } catch (r) {
            setTimeout(function() {
              throw r;
            });
          }
        }
        var yk = typeof WeakMap == "function" ? WeakMap : Map;
        function _1(e3, t, r) {
          r = sn(-1, r), r.tag = 3, r.payload = { element: null };
          var n = t.value;
          return r.callback = function() {
            cu || (cu = true, jf = n), Lf(e3, t);
          }, r;
        }
        function T1(e3, t, r) {
          r = sn(-1, r), r.tag = 3;
          var n = e3.type.getDerivedStateFromError;
          if (typeof n == "function") {
            var a = t.value;
            r.payload = function() {
              return n(a);
            }, r.callback = function() {
              Lf(e3, t);
            };
          }
          var i = e3.stateNode;
          return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
            Lf(e3, t), typeof n != "function" && (Vn === null ? Vn = /* @__PURE__ */ new Set([this]) : Vn.add(this));
            var o = t.stack;
            this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
          }), r;
        }
        function Vg(e3, t, r) {
          var n = e3.pingCache;
          if (n === null) {
            n = e3.pingCache = new yk();
            var a = /* @__PURE__ */ new Set();
            n.set(t, a);
          } else a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
          a.has(r) || (a.add(r), e3 = _k.bind(null, e3, t, r), t.then(e3, e3));
        }
        function Wg(e3) {
          do {
            var t;
            if ((t = e3.tag === 13) && (t = e3.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e3;
            e3 = e3.return;
          } while (e3 !== null);
          return null;
        }
        function Yg(e3, t, r, n, a) {
          return (e3.mode & 1) === 0 ? (e3 === t ? e3.flags |= 65536 : (e3.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = sn(-1, 1), t.tag = 2, Bn(r, t, 1))), r.lanes |= 1), e3) : (e3.flags |= 65536, e3.lanes = a, e3);
        }
        var wk = hn.ReactCurrentOwner, Ht = false;
        function Tt(e3, t, r, n) {
          t.child = e3 === null ? s1(t, null, r, n) : Ci(t, e3.child, r, n);
        }
        function qg(e3, t, r, n, a) {
          r = r.render;
          var i = t.ref;
          return bi(t, a), n = yh(e3, t, r, n, i, a), r = wh(), e3 !== null && !Ht ? (t.updateQueue = e3.updateQueue, t.flags &= -2053, e3.lanes &= ~a, fn(e3, t, a)) : (Te && r && oh(t), t.flags |= 1, Tt(e3, t, n, a), t.child);
        }
        function Gg(e3, t, r, n, a) {
          if (e3 === null) {
            var i = r.type;
            return typeof i == "function" && !Mh(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, A1(e3, t, i, n, a)) : (e3 = Bs(r.type, null, n, t, t.mode, a), e3.ref = t.ref, e3.return = t, t.child = e3);
          }
          if (i = e3.child, (e3.lanes & a) === 0) {
            var o = i.memoizedProps;
            if (r = r.compare, r = r !== null ? r : Yo, r(o, n) && e3.ref === t.ref) return fn(e3, t, a);
          }
          return t.flags |= 1, e3 = Yn(i, n), e3.ref = t.ref, e3.return = t, t.child = e3;
        }
        function A1(e3, t, r, n, a) {
          if (e3 !== null) {
            var i = e3.memoizedProps;
            if (Yo(i, n) && e3.ref === t.ref) if (Ht = false, t.pendingProps = n = i, (e3.lanes & a) !== 0) (e3.flags & 131072) !== 0 && (Ht = true);
            else return t.lanes = e3.lanes, fn(e3, t, a);
          }
          return Pf(e3, t, r, n, a);
        }
        function F1(e3, t, r) {
          var n = t.pendingProps, a = n.children, i = e3 !== null ? e3.memoizedState : null;
          if (n.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(gi, Gt), Gt |= r;
          else {
            if ((r & 1073741824) === 0) return e3 = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e3, cachePool: null, transitions: null }, t.updateQueue = null, Ce(gi, Gt), Gt |= e3, null;
            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, Ce(gi, Gt), Gt |= n;
          }
          else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, Ce(gi, Gt), Gt |= n;
          return Tt(e3, t, a, r), t.child;
        }
        function $1(e3, t) {
          var r = t.ref;
          (e3 === null && r !== null || e3 !== null && e3.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
        }
        function Pf(e3, t, r, n, a) {
          var i = Vt(r) ? Ca : kt.current;
          return i = Ri(t, i), bi(t, a), r = yh(e3, t, r, n, i, a), n = wh(), e3 !== null && !Ht ? (t.updateQueue = e3.updateQueue, t.flags &= -2053, e3.lanes &= ~a, fn(e3, t, a)) : (Te && n && oh(t), t.flags |= 1, Tt(e3, t, r, a), t.child);
        }
        function Kg(e3, t, r, n, a) {
          if (Vt(r)) {
            var i = true;
            eu(t);
          } else i = false;
          if (bi(t, a), t.stateNode === null) js(e3, t), P1(t, r, n), Mf(t, r, n, a), n = true;
          else if (e3 === null) {
            var o = t.stateNode, l = t.memoizedProps;
            o.props = l;
            var s = o.context, u = r.contextType;
            typeof u == "object" && u !== null ? u = ur(u) : (u = Vt(r) ? Ca : kt.current, u = Ri(t, u));
            var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
            d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== n || s !== u) && Bg(t, o, n, u), An = false;
            var f = t.memoizedState;
            o.state = f, iu(t, n, o, a), s = t.memoizedState, l !== n || f !== s || Bt.current || An ? (typeof c == "function" && (Nf(t, r, c, n), s = t.memoizedState), (l = An || Hg(t, r, l, n, f, s, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = s), o.props = n, o.state = s, o.context = u, n = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = false);
          } else {
            o = t.stateNode, c1(e3, t), l = t.memoizedProps, u = t.type === t.elementType ? l : kr(t.type, l), o.props = u, d = t.pendingProps, f = o.context, s = r.contextType, typeof s == "object" && s !== null ? s = ur(s) : (s = Vt(r) ? Ca : kt.current, s = Ri(t, s));
            var h = r.getDerivedStateFromProps;
            (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== d || f !== s) && Bg(t, o, n, s), An = false, f = t.memoizedState, o.state = f, iu(t, n, o, a);
            var v = t.memoizedState;
            l !== d || f !== v || Bt.current || An ? (typeof h == "function" && (Nf(t, r, h, n), v = t.memoizedState), (u = An || Hg(t, r, u, n, f, v, s) || false) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, v, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, v, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), o.props = n, o.state = v, o.context = s, n = u) : (typeof o.componentDidUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 1024), n = false);
          }
          return _f(e3, t, r, n, i, a);
        }
        function _f(e3, t, r, n, a, i) {
          $1(e3, t);
          var o = (t.flags & 128) !== 0;
          if (!n && !o) return a && Ag(t, r, false), fn(e3, t, i);
          n = t.stateNode, wk.current = t;
          var l = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
          return t.flags |= 1, e3 !== null && o ? (t.child = Ci(t, e3.child, null, i), t.child = Ci(t, null, l, i)) : Tt(e3, t, l, i), t.memoizedState = n.state, a && Ag(t, r, true), t.child;
        }
        function O1(e3) {
          var t = e3.stateNode;
          t.pendingContext ? Tg(e3, t.pendingContext, t.pendingContext !== t.context) : t.context && Tg(e3, t.context, false), ph(e3, t.containerInfo);
        }
        function Qg(e3, t, r, n, a) {
          return Si(), sh(a), t.flags |= 256, Tt(e3, t, r, n), t.child;
        }
        var Tf = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Af(e3) {
          return { baseLanes: e3, cachePool: null, transitions: null };
        }
        function z1(e3, t, r) {
          var n = t.pendingProps, a = $e.current, i = false, o = (t.flags & 128) !== 0, l;
          if ((l = o) || (l = e3 !== null && e3.memoizedState === null ? false : (a & 2) !== 0), l ? (i = true, t.flags &= -129) : (e3 === null || e3.memoizedState !== null) && (a |= 1), Ce($e, a & 1), e3 === null) return Cf(t), e3 = t.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e3.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = n.children, e3 = n.fallback, i ? (n = t.mode, i = t.child, o = { mode: "hidden", children: o }, (n & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Ru(o, n, 0, null), e3 = Sa(e3, n, r, null), i.return = t, e3.return = t, i.sibling = e3, t.child = i, t.child.memoizedState = Af(r), t.memoizedState = Tf, e3) : kh(t, o));
          if (a = e3.memoizedState, a !== null && (l = a.dehydrated, l !== null)) return xk(e3, t, o, n, l, a, r);
          if (i) {
            i = n.fallback, o = t.mode, a = e3.child, l = a.sibling;
            var s = { mode: "hidden", children: n.children };
            return (o & 1) === 0 && t.child !== a ? (n = t.child, n.childLanes = 0, n.pendingProps = s, t.deletions = null) : (n = Yn(a, s), n.subtreeFlags = a.subtreeFlags & 14680064), l !== null ? i = Yn(l, i) : (i = Sa(i, o, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, o = e3.child.memoizedState, o = o === null ? Af(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e3.childLanes & ~r, t.memoizedState = Tf, n;
          }
          return i = e3.child, e3 = i.sibling, n = Yn(i, { mode: "visible", children: n.children }), (t.mode & 1) === 0 && (n.lanes = r), n.return = t, n.sibling = null, e3 !== null && (r = t.deletions, r === null ? (t.deletions = [e3], t.flags |= 16) : r.push(e3)), t.child = n, t.memoizedState = null, n;
        }
        function kh(e3, t) {
          return t = Ru({ mode: "visible", children: t }, e3.mode, 0, null), t.return = e3, e3.child = t;
        }
        function Ps(e3, t, r, n) {
          return n !== null && sh(n), Ci(t, e3.child, null, r), e3 = kh(t, t.pendingProps.children), e3.flags |= 2, t.memoizedState = null, e3;
        }
        function xk(e3, t, r, n, a, i, o) {
          if (r) return t.flags & 256 ? (t.flags &= -257, n = qd(Error($(422))), Ps(e3, t, o, n)) : t.memoizedState !== null ? (t.child = e3.child, t.flags |= 128, null) : (i = n.fallback, a = t.mode, n = Ru({ mode: "visible", children: n.children }, a, 0, null), i = Sa(i, a, o, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, (t.mode & 1) !== 0 && Ci(t, e3.child, null, o), t.child.memoizedState = Af(o), t.memoizedState = Tf, i);
          if ((t.mode & 1) === 0) return Ps(e3, t, o, null);
          if (a.data === "$!") {
            if (n = a.nextSibling && a.nextSibling.dataset, n) var l = n.dgst;
            return n = l, i = Error($(419)), n = qd(i, n, void 0), Ps(e3, t, o, n);
          }
          if (l = (o & e3.childLanes) !== 0, Ht || l) {
            if (n = rt, n !== null) {
              switch (o & -o) {
                case 4:
                  a = 2;
                  break;
                case 16:
                  a = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  a = 32;
                  break;
                case 536870912:
                  a = 268435456;
                  break;
                default:
                  a = 0;
              }
              a = (a & (n.suspendedLanes | o)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, dn(e3, a), Cr(n, e3, a, -1));
            }
            return Nh(), n = qd(Error($(421))), Ps(e3, t, o, n);
          }
          return a.data === "$?" ? (t.flags |= 128, t.child = e3.child, t = Tk.bind(null, e3), a._reactRetry = t, null) : (e3 = i.treeContext, Kt = Hn(a.nextSibling), Qt = t, Te = true, Rr = null, e3 !== null && (ir[or++] = on, ir[or++] = ln, ir[or++] = Da, on = e3.id, ln = e3.overflow, Da = t), t = kh(t, n.children), t.flags |= 4096, t);
        }
        function Xg(e3, t, r) {
          e3.lanes |= t;
          var n = e3.alternate;
          n !== null && (n.lanes |= t), Df(e3.return, t, r);
        }
        function Gd(e3, t, r, n, a) {
          var i = e3.memoizedState;
          i === null ? e3.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = a);
        }
        function I1(e3, t, r) {
          var n = t.pendingProps, a = n.revealOrder, i = n.tail;
          if (Tt(e3, t, n.children, r), n = $e.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
          else {
            if (e3 !== null && (e3.flags & 128) !== 0) e: for (e3 = t.child; e3 !== null; ) {
              if (e3.tag === 13) e3.memoizedState !== null && Xg(e3, r, t);
              else if (e3.tag === 19) Xg(e3, r, t);
              else if (e3.child !== null) {
                e3.child.return = e3, e3 = e3.child;
                continue;
              }
              if (e3 === t) break e;
              for (; e3.sibling === null; ) {
                if (e3.return === null || e3.return === t) break e;
                e3 = e3.return;
              }
              e3.sibling.return = e3.return, e3 = e3.sibling;
            }
            n &= 1;
          }
          if (Ce($e, n), (t.mode & 1) === 0) t.memoizedState = null;
          else switch (a) {
            case "forwards":
              for (r = t.child, a = null; r !== null; ) e3 = r.alternate, e3 !== null && ou(e3) === null && (a = r), r = r.sibling;
              r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), Gd(t, false, a, r, i);
              break;
            case "backwards":
              for (r = null, a = t.child, t.child = null; a !== null; ) {
                if (e3 = a.alternate, e3 !== null && ou(e3) === null) {
                  t.child = a;
                  break;
                }
                e3 = a.sibling, a.sibling = r, r = a, a = e3;
              }
              Gd(t, true, r, null, i);
              break;
            case "together":
              Gd(t, false, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function js(e3, t) {
          (t.mode & 1) === 0 && e3 !== null && (e3.alternate = null, t.alternate = null, t.flags |= 2);
        }
        function fn(e3, t, r) {
          if (e3 !== null && (t.dependencies = e3.dependencies), Ma |= t.lanes, (r & t.childLanes) === 0) return null;
          if (e3 !== null && t.child !== e3.child) throw Error($(153));
          if (t.child !== null) {
            for (e3 = t.child, r = Yn(e3, e3.pendingProps), t.child = r, r.return = t; e3.sibling !== null; ) e3 = e3.sibling, r = r.sibling = Yn(e3, e3.pendingProps), r.return = t;
            r.sibling = null;
          }
          return t.child;
        }
        function bk(e3, t, r) {
          switch (t.tag) {
            case 3:
              O1(t), Si();
              break;
            case 5:
              d1(t);
              break;
            case 1:
              Vt(t.type) && eu(t);
              break;
            case 4:
              ph(t, t.stateNode.containerInfo);
              break;
            case 10:
              var n = t.type._context, a = t.memoizedProps.value;
              Ce(nu, n._currentValue), n._currentValue = a;
              break;
            case 13:
              if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (Ce($e, $e.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? z1(e3, t, r) : (Ce($e, $e.current & 1), e3 = fn(e3, t, r), e3 !== null ? e3.sibling : null);
              Ce($e, $e.current & 1);
              break;
            case 19:
              if (n = (r & t.childLanes) !== 0, (e3.flags & 128) !== 0) {
                if (n) return I1(e3, t, r);
                t.flags |= 128;
              }
              if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ce($e, $e.current), n) break;
              return null;
            case 22:
            case 23:
              return t.lanes = 0, F1(e3, t, r);
          }
          return fn(e3, t, r);
        }
        var j1, Ff, U1, H1;
        j1 = function(e3, t) {
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5 || r.tag === 6) e3.appendChild(r.stateNode);
            else if (r.tag !== 4 && r.child !== null) {
              r.child.return = r, r = r.child;
              continue;
            }
            if (r === t) break;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === t) return;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
        };
        Ff = function() {
        };
        U1 = function(e3, t, r, n) {
          var a = e3.memoizedProps;
          if (a !== n) {
            e3 = t.stateNode, Ea(Ur.current);
            var i = null;
            switch (r) {
              case "input":
                a = rf(e3, a), n = rf(e3, n), i = [];
                break;
              case "select":
                a = ze({}, a, { value: void 0 }), n = ze({}, n, { value: void 0 }), i = [];
                break;
              case "textarea":
                a = of(e3, a), n = of(e3, n), i = [];
                break;
              default:
                typeof a.onClick != "function" && typeof n.onClick == "function" && (e3.onclick = Zs);
            }
            sf(r, n);
            var o;
            r = null;
            for (u in a) if (!n.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null) if (u === "style") {
              var l = a[u];
              for (o in l) l.hasOwnProperty(o) && (r || (r = {}), r[o] = "");
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Io.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
            for (u in n) {
              var s = n[u];
              if (l = a?.[u], n.hasOwnProperty(u) && s !== l && (s != null || l != null)) if (u === "style") if (l) {
                for (o in l) !l.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
                for (o in s) s.hasOwnProperty(o) && l[o] !== s[o] && (r || (r = {}), r[o] = s[o]);
              } else r || (i || (i = []), i.push(u, r)), r = s;
              else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Io.hasOwnProperty(u) ? (s != null && u === "onScroll" && De("scroll", e3), i || l === s || (i = [])) : (i = i || []).push(u, s));
            }
            r && (i = i || []).push("style", r);
            var u = i;
            (t.updateQueue = u) && (t.flags |= 4);
          }
        };
        H1 = function(e3, t, r, n) {
          r !== n && (t.flags |= 4);
        };
        function Eo(e3, t) {
          if (!Te) switch (e3.tailMode) {
            case "hidden":
              t = e3.tail;
              for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
              r === null ? e3.tail = null : r.sibling = null;
              break;
            case "collapsed":
              r = e3.tail;
              for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
              n === null ? t || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : n.sibling = null;
          }
        }
        function xt(e3) {
          var t = e3.alternate !== null && e3.alternate.child === e3.child, r = 0, n = 0;
          if (t) for (var a = e3.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags & 14680064, n |= a.flags & 14680064, a.return = e3, a = a.sibling;
          else for (a = e3.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e3, a = a.sibling;
          return e3.subtreeFlags |= n, e3.childLanes = r, t;
        }
        function kk(e3, t, r) {
          var n = t.pendingProps;
          switch (lh(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return xt(t), null;
            case 1:
              return Vt(t.type) && Js(), xt(t), null;
            case 3:
              return n = t.stateNode, Di(), Ne(Bt), Ne(kt), gh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e3 === null || e3.child === null) && (Ms(t) ? t.flags |= 4 : e3 === null || e3.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Rr !== null && (Bf(Rr), Rr = null))), Ff(e3, t), xt(t), null;
            case 5:
              mh(t);
              var a = Ea(Xo.current);
              if (r = t.type, e3 !== null && t.stateNode != null) U1(e3, t, r, n, a), e3.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
              else {
                if (!n) {
                  if (t.stateNode === null) throw Error($(166));
                  return xt(t), null;
                }
                if (e3 = Ea(Ur.current), Ms(t)) {
                  n = t.stateNode, r = t.type;
                  var i = t.memoizedProps;
                  switch (n[Ir] = t, n[Ko] = i, e3 = (t.mode & 1) !== 0, r) {
                    case "dialog":
                      De("cancel", n), De("close", n);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      De("load", n);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Mo.length; a++) De(Mo[a], n);
                      break;
                    case "source":
                      De("error", n);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      De("error", n), De("load", n);
                      break;
                    case "details":
                      De("toggle", n);
                      break;
                    case "input":
                      ig(n, i), De("invalid", n);
                      break;
                    case "select":
                      n._wrapperState = { wasMultiple: !!i.multiple }, De("invalid", n);
                      break;
                    case "textarea":
                      lg(n, i), De("invalid", n);
                  }
                  sf(r, i), a = null;
                  for (var o in i) if (i.hasOwnProperty(o)) {
                    var l = i[o];
                    o === "children" ? typeof l == "string" ? n.textContent !== l && (i.suppressHydrationWarning !== true && Ns(n.textContent, l, e3), a = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (i.suppressHydrationWarning !== true && Ns(n.textContent, l, e3), a = ["children", "" + l]) : Io.hasOwnProperty(o) && l != null && o === "onScroll" && De("scroll", n);
                  }
                  switch (r) {
                    case "input":
                      gs(n), og(n, i, true);
                      break;
                    case "textarea":
                      gs(n), sg(n);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      typeof i.onClick == "function" && (n.onclick = Zs);
                  }
                  n = a, t.updateQueue = n, n !== null && (t.flags |= 4);
                } else {
                  o = a.nodeType === 9 ? a : a.ownerDocument, e3 === "http://www.w3.org/1999/xhtml" && (e3 = gv(r)), e3 === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e3 = o.createElement("div"), e3.innerHTML = "<script><\/script>", e3 = e3.removeChild(e3.firstChild)) : typeof n.is == "string" ? e3 = o.createElement(r, { is: n.is }) : (e3 = o.createElement(r), r === "select" && (o = e3, n.multiple ? o.multiple = true : n.size && (o.size = n.size))) : e3 = o.createElementNS(e3, r), e3[Ir] = t, e3[Ko] = n, j1(e3, t, false, false), t.stateNode = e3;
                  e: {
                    switch (o = uf(r, n), r) {
                      case "dialog":
                        De("cancel", e3), De("close", e3), a = n;
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        De("load", e3), a = n;
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Mo.length; a++) De(Mo[a], e3);
                        a = n;
                        break;
                      case "source":
                        De("error", e3), a = n;
                        break;
                      case "img":
                      case "image":
                      case "link":
                        De("error", e3), De("load", e3), a = n;
                        break;
                      case "details":
                        De("toggle", e3), a = n;
                        break;
                      case "input":
                        ig(e3, n), a = rf(e3, n), De("invalid", e3);
                        break;
                      case "option":
                        a = n;
                        break;
                      case "select":
                        e3._wrapperState = { wasMultiple: !!n.multiple }, a = ze({}, n, { value: void 0 }), De("invalid", e3);
                        break;
                      case "textarea":
                        lg(e3, n), a = of(e3, n), De("invalid", e3);
                        break;
                      default:
                        a = n;
                    }
                    sf(r, a), l = a;
                    for (i in l) if (l.hasOwnProperty(i)) {
                      var s = l[i];
                      i === "style" ? wv(e3, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && vv(e3, s)) : i === "children" ? typeof s == "string" ? (r !== "textarea" || s !== "") && jo(e3, s) : typeof s == "number" && jo(e3, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Io.hasOwnProperty(i) ? s != null && i === "onScroll" && De("scroll", e3) : s != null && Yf(e3, i, s, o));
                    }
                    switch (r) {
                      case "input":
                        gs(e3), og(e3, n, false);
                        break;
                      case "textarea":
                        gs(e3), sg(e3);
                        break;
                      case "option":
                        n.value != null && e3.setAttribute("value", "" + qn(n.value));
                        break;
                      case "select":
                        e3.multiple = !!n.multiple, i = n.value, i != null ? vi(e3, !!n.multiple, i, false) : n.defaultValue != null && vi(e3, !!n.multiple, n.defaultValue, true);
                        break;
                      default:
                        typeof a.onClick == "function" && (e3.onclick = Zs);
                    }
                    switch (r) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        n = !!n.autoFocus;
                        break e;
                      case "img":
                        n = true;
                        break e;
                      default:
                        n = false;
                    }
                  }
                  n && (t.flags |= 4);
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
              }
              return xt(t), null;
            case 6:
              if (e3 && t.stateNode != null) H1(e3, t, e3.memoizedProps, n);
              else {
                if (typeof n != "string" && t.stateNode === null) throw Error($(166));
                if (r = Ea(Xo.current), Ea(Ur.current), Ms(t)) {
                  if (n = t.stateNode, r = t.memoizedProps, n[Ir] = t, (i = n.nodeValue !== r) && (e3 = Qt, e3 !== null)) switch (e3.tag) {
                    case 3:
                      Ns(n.nodeValue, r, (e3.mode & 1) !== 0);
                      break;
                    case 5:
                      e3.memoizedProps.suppressHydrationWarning !== true && Ns(n.nodeValue, r, (e3.mode & 1) !== 0);
                  }
                  i && (t.flags |= 4);
                } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Ir] = t, t.stateNode = n;
              }
              return xt(t), null;
            case 13:
              if (Ne($e), n = t.memoizedState, e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
                if (Te && Kt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) o1(), Si(), t.flags |= 98560, i = false;
                else if (i = Ms(t), n !== null && n.dehydrated !== null) {
                  if (e3 === null) {
                    if (!i) throw Error($(318));
                    if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error($(317));
                    i[Ir] = t;
                  } else Si(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  xt(t), i = false;
                } else Rr !== null && (Bf(Rr), Rr = null), i = true;
                if (!i) return t.flags & 65536 ? t : null;
              }
              return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (n = n !== null, n !== (e3 !== null && e3.memoizedState !== null) && n && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e3 === null || ($e.current & 1) !== 0 ? et === 0 && (et = 3) : Nh())), t.updateQueue !== null && (t.flags |= 4), xt(t), null);
            case 4:
              return Di(), Ff(e3, t), e3 === null && qo(t.stateNode.containerInfo), xt(t), null;
            case 10:
              return dh(t.type._context), xt(t), null;
            case 17:
              return Vt(t.type) && Js(), xt(t), null;
            case 19:
              if (Ne($e), i = t.memoizedState, i === null) return xt(t), null;
              if (n = (t.flags & 128) !== 0, o = i.rendering, o === null) if (n) Eo(i, false);
              else {
                if (et !== 0 || e3 !== null && (e3.flags & 128) !== 0) for (e3 = t.child; e3 !== null; ) {
                  if (o = ou(e3), o !== null) {
                    for (t.flags |= 128, Eo(i, false), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) i = r, e3 = n, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e3, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e3 = o.dependencies, i.dependencies = e3 === null ? null : { lanes: e3.lanes, firstContext: e3.firstContext }), r = r.sibling;
                    return Ce($e, $e.current & 1 | 2), t.child;
                  }
                  e3 = e3.sibling;
                }
                i.tail !== null && We() > Mi && (t.flags |= 128, n = true, Eo(i, false), t.lanes = 4194304);
              }
              else {
                if (!n) if (e3 = ou(o), e3 !== null) {
                  if (t.flags |= 128, n = true, r = e3.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Eo(i, true), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Te) return xt(t), null;
                } else 2 * We() - i.renderingStartTime > Mi && r !== 1073741824 && (t.flags |= 128, n = true, Eo(i, false), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (r = i.last, r !== null ? r.sibling = o : t.child = o, i.last = o);
              }
              return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = We(), t.sibling = null, r = $e.current, Ce($e, n ? r & 1 | 2 : r & 1), t) : (xt(t), null);
            case 22:
            case 23:
              return Dh(), n = t.memoizedState !== null, e3 !== null && e3.memoizedState !== null !== n && (t.flags |= 8192), n && (t.mode & 1) !== 0 ? (Gt & 1073741824) !== 0 && (xt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xt(t), null;
            case 24:
              return null;
            case 25:
              return null;
          }
          throw Error($(156, t.tag));
        }
        function Ek(e3, t) {
          switch (lh(t), t.tag) {
            case 1:
              return Vt(t.type) && Js(), e3 = t.flags, e3 & 65536 ? (t.flags = e3 & -65537 | 128, t) : null;
            case 3:
              return Di(), Ne(Bt), Ne(kt), gh(), e3 = t.flags, (e3 & 65536) !== 0 && (e3 & 128) === 0 ? (t.flags = e3 & -65537 | 128, t) : null;
            case 5:
              return mh(t), null;
            case 13:
              if (Ne($e), e3 = t.memoizedState, e3 !== null && e3.dehydrated !== null) {
                if (t.alternate === null) throw Error($(340));
                Si();
              }
              return e3 = t.flags, e3 & 65536 ? (t.flags = e3 & -65537 | 128, t) : null;
            case 19:
              return Ne($e), null;
            case 4:
              return Di(), null;
            case 10:
              return dh(t.type._context), null;
            case 22:
            case 23:
              return Dh(), null;
            case 24:
              return null;
            default:
              return null;
          }
        }
        var _s = false, bt = false, Rk = typeof WeakSet == "function" ? WeakSet : Set, V = null;
        function mi(e3, t) {
          var r = e3.ref;
          if (r !== null) if (typeof r == "function") try {
            r(null);
          } catch (n) {
            Ie(e3, t, n);
          }
          else r.current = null;
        }
        function $f(e3, t, r) {
          try {
            r();
          } catch (n) {
            Ie(e3, t, n);
          }
        }
        var Zg = false;
        function Sk(e3, t) {
          if (wf = Ks, e3 = qv(), ih(e3)) {
            if ("selectionStart" in e3) var r = { start: e3.selectionStart, end: e3.selectionEnd };
            else e: {
              r = (r = e3.ownerDocument) && r.defaultView || window;
              var n = r.getSelection && r.getSelection();
              if (n && n.rangeCount !== 0) {
                r = n.anchorNode;
                var a = n.anchorOffset, i = n.focusNode;
                n = n.focusOffset;
                try {
                  r.nodeType, i.nodeType;
                } catch {
                  r = null;
                  break e;
                }
                var o = 0, l = -1, s = -1, u = 0, c = 0, d = e3, f = null;
                t: for (; ; ) {
                  for (var h; d !== r || a !== 0 && d.nodeType !== 3 || (l = o + a), d !== i || n !== 0 && d.nodeType !== 3 || (s = o + n), d.nodeType === 3 && (o += d.nodeValue.length), (h = d.firstChild) !== null; ) f = d, d = h;
                  for (; ; ) {
                    if (d === e3) break t;
                    if (f === r && ++u === a && (l = o), f === i && ++c === n && (s = o), (h = d.nextSibling) !== null) break;
                    d = f, f = d.parentNode;
                  }
                  d = h;
                }
                r = l === -1 || s === -1 ? null : { start: l, end: s };
              } else r = null;
            }
            r = r || { start: 0, end: 0 };
          } else r = null;
          for (xf = { focusedElem: e3, selectionRange: r }, Ks = false, V = t; V !== null; ) if (t = V, e3 = t.child, (t.subtreeFlags & 1028) !== 0 && e3 !== null) e3.return = t, V = e3;
          else for (; V !== null; ) {
            t = V;
            try {
              var v = t.alternate;
              if ((t.flags & 1024) !== 0) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (v !== null) {
                    var y = v.memoizedProps, m = v.memoizedState, g = t.stateNode, p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : kr(t.type, y), m);
                    g.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var w = t.stateNode.containerInfo;
                  w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error($(163));
              }
            } catch (b) {
              Ie(t, t.return, b);
            }
            if (e3 = t.sibling, e3 !== null) {
              e3.return = t.return, V = e3;
              break;
            }
            V = t.return;
          }
          return v = Zg, Zg = false, v;
        }
        function $o(e3, t, r) {
          var n = t.updateQueue;
          if (n = n !== null ? n.lastEffect : null, n !== null) {
            var a = n = n.next;
            do {
              if ((a.tag & e3) === e3) {
                var i = a.destroy;
                a.destroy = void 0, i !== void 0 && $f(t, r, i);
              }
              a = a.next;
            } while (a !== n);
          }
        }
        function ku(e3, t) {
          if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var r = t = t.next;
            do {
              if ((r.tag & e3) === e3) {
                var n = r.create;
                r.destroy = n();
              }
              r = r.next;
            } while (r !== t);
          }
        }
        function Of(e3) {
          var t = e3.ref;
          if (t !== null) {
            var r = e3.stateNode;
            switch (e3.tag) {
              case 5:
                e3 = r;
                break;
              default:
                e3 = r;
            }
            typeof t == "function" ? t(e3) : t.current = e3;
          }
        }
        function B1(e3) {
          var t = e3.alternate;
          t !== null && (e3.alternate = null, B1(t)), e3.child = null, e3.deletions = null, e3.sibling = null, e3.tag === 5 && (t = e3.stateNode, t !== null && (delete t[Ir], delete t[Ko], delete t[Ef], delete t[lk], delete t[sk])), e3.stateNode = null, e3.return = null, e3.dependencies = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.stateNode = null, e3.updateQueue = null;
        }
        function V1(e3) {
          return e3.tag === 5 || e3.tag === 3 || e3.tag === 4;
        }
        function Jg(e3) {
          e: for (; ; ) {
            for (; e3.sibling === null; ) {
              if (e3.return === null || V1(e3.return)) return null;
              e3 = e3.return;
            }
            for (e3.sibling.return = e3.return, e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
              if (e3.flags & 2 || e3.child === null || e3.tag === 4) continue e;
              e3.child.return = e3, e3 = e3.child;
            }
            if (!(e3.flags & 2)) return e3.stateNode;
          }
        }
        function zf(e3, t, r) {
          var n = e3.tag;
          if (n === 5 || n === 6) e3 = e3.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e3, t) : r.insertBefore(e3, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e3, r)) : (t = r, t.appendChild(e3)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Zs));
          else if (n !== 4 && (e3 = e3.child, e3 !== null)) for (zf(e3, t, r), e3 = e3.sibling; e3 !== null; ) zf(e3, t, r), e3 = e3.sibling;
        }
        function If(e3, t, r) {
          var n = e3.tag;
          if (n === 5 || n === 6) e3 = e3.stateNode, t ? r.insertBefore(e3, t) : r.appendChild(e3);
          else if (n !== 4 && (e3 = e3.child, e3 !== null)) for (If(e3, t, r), e3 = e3.sibling; e3 !== null; ) If(e3, t, r), e3 = e3.sibling;
        }
        var ct = null, Er = false;
        function _n(e3, t, r) {
          for (r = r.child; r !== null; ) W1(e3, t, r), r = r.sibling;
        }
        function W1(e3, t, r) {
          if (jr && typeof jr.onCommitFiberUnmount == "function") try {
            jr.onCommitFiberUnmount(pu, r);
          } catch {
          }
          switch (r.tag) {
            case 5:
              bt || mi(r, t);
            case 6:
              var n = ct, a = Er;
              ct = null, _n(e3, t, r), ct = n, Er = a, ct !== null && (Er ? (e3 = ct, r = r.stateNode, e3.nodeType === 8 ? e3.parentNode.removeChild(r) : e3.removeChild(r)) : ct.removeChild(r.stateNode));
              break;
            case 18:
              ct !== null && (Er ? (e3 = ct, r = r.stateNode, e3.nodeType === 8 ? Ud(e3.parentNode, r) : e3.nodeType === 1 && Ud(e3, r), Vo(e3)) : Ud(ct, r.stateNode));
              break;
            case 4:
              n = ct, a = Er, ct = r.stateNode.containerInfo, Er = true, _n(e3, t, r), ct = n, Er = a;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!bt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                a = n = n.next;
                do {
                  var i = a, o = i.destroy;
                  i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && $f(r, t, o), a = a.next;
                } while (a !== n);
              }
              _n(e3, t, r);
              break;
            case 1:
              if (!bt && (mi(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
              } catch (l) {
                Ie(r, t, l);
              }
              _n(e3, t, r);
              break;
            case 21:
              _n(e3, t, r);
              break;
            case 22:
              r.mode & 1 ? (bt = (n = bt) || r.memoizedState !== null, _n(e3, t, r), bt = n) : _n(e3, t, r);
              break;
            default:
              _n(e3, t, r);
          }
        }
        function ev(e3) {
          var t = e3.updateQueue;
          if (t !== null) {
            e3.updateQueue = null;
            var r = e3.stateNode;
            r === null && (r = e3.stateNode = new Rk()), t.forEach(function(n) {
              var a = Ak.bind(null, e3, n);
              r.has(n) || (r.add(n), n.then(a, a));
            });
          }
        }
        function br(e3, t) {
          var r = t.deletions;
          if (r !== null) for (var n = 0; n < r.length; n++) {
            var a = r[n];
            try {
              var i = e3, o = t, l = o;
              e: for (; l !== null; ) {
                switch (l.tag) {
                  case 5:
                    ct = l.stateNode, Er = false;
                    break e;
                  case 3:
                    ct = l.stateNode.containerInfo, Er = true;
                    break e;
                  case 4:
                    ct = l.stateNode.containerInfo, Er = true;
                    break e;
                }
                l = l.return;
              }
              if (ct === null) throw Error($(160));
              W1(i, o, a), ct = null, Er = false;
              var s = a.alternate;
              s !== null && (s.return = null), a.return = null;
            } catch (u) {
              Ie(a, t, u);
            }
          }
          if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Y1(t, e3), t = t.sibling;
        }
        function Y1(e3, t) {
          var r = e3.alternate, n = e3.flags;
          switch (e3.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (br(t, e3), Or(e3), n & 4) {
                try {
                  $o(3, e3, e3.return), ku(3, e3);
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
                try {
                  $o(5, e3, e3.return);
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
              }
              break;
            case 1:
              br(t, e3), Or(e3), n & 512 && r !== null && mi(r, r.return);
              break;
            case 5:
              if (br(t, e3), Or(e3), n & 512 && r !== null && mi(r, r.return), e3.flags & 32) {
                var a = e3.stateNode;
                try {
                  jo(a, "");
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
              }
              if (n & 4 && (a = e3.stateNode, a != null)) {
                var i = e3.memoizedProps, o = r !== null ? r.memoizedProps : i, l = e3.type, s = e3.updateQueue;
                if (e3.updateQueue = null, s !== null) try {
                  l === "input" && i.type === "radio" && i.name != null && pv(a, i), uf(l, o);
                  var u = uf(l, i);
                  for (o = 0; o < s.length; o += 2) {
                    var c = s[o], d = s[o + 1];
                    c === "style" ? wv(a, d) : c === "dangerouslySetInnerHTML" ? vv(a, d) : c === "children" ? jo(a, d) : Yf(a, c, d, u);
                  }
                  switch (l) {
                    case "input":
                      nf(a, i);
                      break;
                    case "textarea":
                      mv(a, i);
                      break;
                    case "select":
                      var f = a._wrapperState.wasMultiple;
                      a._wrapperState.wasMultiple = !!i.multiple;
                      var h = i.value;
                      h != null ? vi(a, !!i.multiple, h, false) : f !== !!i.multiple && (i.defaultValue != null ? vi(a, !!i.multiple, i.defaultValue, true) : vi(a, !!i.multiple, i.multiple ? [] : "", false));
                  }
                  a[Ko] = i;
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
              }
              break;
            case 6:
              if (br(t, e3), Or(e3), n & 4) {
                if (e3.stateNode === null) throw Error($(162));
                a = e3.stateNode, i = e3.memoizedProps;
                try {
                  a.nodeValue = i;
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
              }
              break;
            case 3:
              if (br(t, e3), Or(e3), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                Vo(t.containerInfo);
              } catch (y) {
                Ie(e3, e3.return, y);
              }
              break;
            case 4:
              br(t, e3), Or(e3);
              break;
            case 13:
              br(t, e3), Or(e3), a = e3.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (Sh = We())), n & 4 && ev(e3);
              break;
            case 22:
              if (c = r !== null && r.memoizedState !== null, e3.mode & 1 ? (bt = (u = bt) || c, br(t, e3), bt = u) : br(t, e3), Or(e3), n & 8192) {
                if (u = e3.memoizedState !== null, (e3.stateNode.isHidden = u) && !c && (e3.mode & 1) !== 0) for (V = e3, c = e3.child; c !== null; ) {
                  for (d = V = c; V !== null; ) {
                    switch (f = V, h = f.child, f.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        $o(4, f, f.return);
                        break;
                      case 1:
                        mi(f, f.return);
                        var v = f.stateNode;
                        if (typeof v.componentWillUnmount == "function") {
                          n = f, r = f.return;
                          try {
                            t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                          } catch (y) {
                            Ie(n, r, y);
                          }
                        }
                        break;
                      case 5:
                        mi(f, f.return);
                        break;
                      case 22:
                        if (f.memoizedState !== null) {
                          rv(d);
                          continue;
                        }
                    }
                    h !== null ? (h.return = f, V = h) : rv(d);
                  }
                  c = c.sibling;
                }
                e: for (c = null, d = e3; ; ) {
                  if (d.tag === 5) {
                    if (c === null) {
                      c = d;
                      try {
                        a = d.stateNode, u ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode, s = d.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = yv("display", o));
                      } catch (y) {
                        Ie(e3, e3.return, y);
                      }
                    }
                  } else if (d.tag === 6) {
                    if (c === null) try {
                      d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                    } catch (y) {
                      Ie(e3, e3.return, y);
                    }
                  } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e3) && d.child !== null) {
                    d.child.return = d, d = d.child;
                    continue;
                  }
                  if (d === e3) break e;
                  for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e3) break e;
                    c === d && (c = null), d = d.return;
                  }
                  c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
                }
              }
              break;
            case 19:
              br(t, e3), Or(e3), n & 4 && ev(e3);
              break;
            case 21:
              break;
            default:
              br(t, e3), Or(e3);
          }
        }
        function Or(e3) {
          var t = e3.flags;
          if (t & 2) {
            try {
              e: {
                for (var r = e3.return; r !== null; ) {
                  if (V1(r)) {
                    var n = r;
                    break e;
                  }
                  r = r.return;
                }
                throw Error($(160));
              }
              switch (n.tag) {
                case 5:
                  var a = n.stateNode;
                  n.flags & 32 && (jo(a, ""), n.flags &= -33);
                  var i = Jg(e3);
                  If(e3, i, a);
                  break;
                case 3:
                case 4:
                  var o = n.stateNode.containerInfo, l = Jg(e3);
                  zf(e3, l, o);
                  break;
                default:
                  throw Error($(161));
              }
            } catch (s) {
              Ie(e3, e3.return, s);
            }
            e3.flags &= -3;
          }
          t & 4096 && (e3.flags &= -4097);
        }
        function Ck(e3, t, r) {
          V = e3, q1(e3, t, r);
        }
        function q1(e3, t, r) {
          for (var n = (e3.mode & 1) !== 0; V !== null; ) {
            var a = V, i = a.child;
            if (a.tag === 22 && n) {
              var o = a.memoizedState !== null || _s;
              if (!o) {
                var l = a.alternate, s = l !== null && l.memoizedState !== null || bt;
                l = _s;
                var u = bt;
                if (_s = o, (bt = s) && !u) for (V = a; V !== null; ) o = V, s = o.child, o.tag === 22 && o.memoizedState !== null ? nv(a) : s !== null ? (s.return = o, V = s) : nv(a);
                for (; i !== null; ) V = i, q1(i, t, r), i = i.sibling;
                V = a, _s = l, bt = u;
              }
              tv(e3, t, r);
            } else (a.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = a, V = i) : tv(e3, t, r);
          }
        }
        function tv(e3) {
          for (; V !== null; ) {
            var t = V;
            if ((t.flags & 8772) !== 0) {
              var r = t.alternate;
              try {
                if ((t.flags & 8772) !== 0) switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bt || ku(5, t);
                    break;
                  case 1:
                    var n = t.stateNode;
                    if (t.flags & 4 && !bt) if (r === null) n.componentDidMount();
                    else {
                      var a = t.elementType === t.type ? r.memoizedProps : kr(t.type, r.memoizedProps);
                      n.componentDidUpdate(a, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                    }
                    var i = t.updateQueue;
                    i !== null && Ig(t, i, n);
                    break;
                  case 3:
                    var o = t.updateQueue;
                    if (o !== null) {
                      if (r = null, t.child !== null) switch (t.child.tag) {
                        case 5:
                          r = t.child.stateNode;
                          break;
                        case 1:
                          r = t.child.stateNode;
                      }
                      Ig(t, o, r);
                    }
                    break;
                  case 5:
                    var l = t.stateNode;
                    if (r === null && t.flags & 4) {
                      r = l;
                      var s = t.memoizedProps;
                      switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          s.autoFocus && r.focus();
                          break;
                        case "img":
                          s.src && (r.src = s.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (t.memoizedState === null) {
                      var u = t.alternate;
                      if (u !== null) {
                        var c = u.memoizedState;
                        if (c !== null) {
                          var d = c.dehydrated;
                          d !== null && Vo(d);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  default:
                    throw Error($(163));
                }
                bt || t.flags & 512 && Of(t);
              } catch (f) {
                Ie(t, t.return, f);
              }
            }
            if (t === e3) {
              V = null;
              break;
            }
            if (r = t.sibling, r !== null) {
              r.return = t.return, V = r;
              break;
            }
            V = t.return;
          }
        }
        function rv(e3) {
          for (; V !== null; ) {
            var t = V;
            if (t === e3) {
              V = null;
              break;
            }
            var r = t.sibling;
            if (r !== null) {
              r.return = t.return, V = r;
              break;
            }
            V = t.return;
          }
        }
        function nv(e3) {
          for (; V !== null; ) {
            var t = V;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var r = t.return;
                  try {
                    ku(4, t);
                  } catch (s) {
                    Ie(t, r, s);
                  }
                  break;
                case 1:
                  var n = t.stateNode;
                  if (typeof n.componentDidMount == "function") {
                    var a = t.return;
                    try {
                      n.componentDidMount();
                    } catch (s) {
                      Ie(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    Of(t);
                  } catch (s) {
                    Ie(t, i, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    Of(t);
                  } catch (s) {
                    Ie(t, o, s);
                  }
              }
            } catch (s) {
              Ie(t, t.return, s);
            }
            if (t === e3) {
              V = null;
              break;
            }
            var l = t.sibling;
            if (l !== null) {
              l.return = t.return, V = l;
              break;
            }
            V = t.return;
          }
        }
        var Dk = Math.ceil, uu = hn.ReactCurrentDispatcher, Eh = hn.ReactCurrentOwner, sr = hn.ReactCurrentBatchConfig, pe = 0, rt = null, Ge = null, dt = 0, Gt = 0, gi = Qn(0), et = 0, tl = null, Ma = 0, Eu = 0, Rh = 0, Oo = null, Ut = null, Sh = 0, Mi = 1 / 0, nn = null, cu = false, jf = null, Vn = null, Ts = false, zn = null, du = 0, zo = 0, Uf = null, Us = -1, Hs = 0;
        function At() {
          return (pe & 6) !== 0 ? We() : Us !== -1 ? Us : Us = We();
        }
        function Wn(e3) {
          return (e3.mode & 1) === 0 ? 1 : (pe & 2) !== 0 && dt !== 0 ? dt & -dt : ck.transition !== null ? (Hs === 0 && (Hs = Pv()), Hs) : (e3 = ye, e3 !== 0 || (e3 = window.event, e3 = e3 === void 0 ? 16 : zv(e3.type)), e3);
        }
        function Cr(e3, t, r, n) {
          if (50 < zo) throw zo = 0, Uf = null, Error($(185));
          rl(e3, r, n), ((pe & 2) === 0 || e3 !== rt) && (e3 === rt && ((pe & 2) === 0 && (Eu |= r), et === 4 && $n(e3, dt)), Wt(e3, n), r === 1 && pe === 0 && (t.mode & 1) === 0 && (Mi = We() + 500, wu && Xn()));
        }
        function Wt(e3, t) {
          var r = e3.callbackNode;
          f6(e3, t);
          var n = Gs(e3, e3 === rt ? dt : 0);
          if (n === 0) r !== null && dg(r), e3.callbackNode = null, e3.callbackPriority = 0;
          else if (t = n & -n, e3.callbackPriority !== t) {
            if (r != null && dg(r), t === 1) e3.tag === 0 ? uk(av.bind(null, e3)) : n1(av.bind(null, e3)), ik(function() {
              (pe & 6) === 0 && Xn();
            }), r = null;
            else {
              switch (_v(n)) {
                case 1:
                  r = Xf;
                  break;
                case 4:
                  r = Mv;
                  break;
                case 16:
                  r = qs;
                  break;
                case 536870912:
                  r = Lv;
                  break;
                default:
                  r = qs;
              }
              r = ty(r, G1.bind(null, e3));
            }
            e3.callbackPriority = t, e3.callbackNode = r;
          }
        }
        function G1(e3, t) {
          if (Us = -1, Hs = 0, (pe & 6) !== 0) throw Error($(327));
          var r = e3.callbackNode;
          if (ki() && e3.callbackNode !== r) return null;
          var n = Gs(e3, e3 === rt ? dt : 0);
          if (n === 0) return null;
          if ((n & 30) !== 0 || (n & e3.expiredLanes) !== 0 || t) t = fu(e3, n);
          else {
            t = n;
            var a = pe;
            pe |= 2;
            var i = Q1();
            (rt !== e3 || dt !== t) && (nn = null, Mi = We() + 500, Ra(e3, t));
            do
              try {
                Lk();
                break;
              } catch (l) {
                K1(e3, l);
              }
            while (true);
            ch(), uu.current = i, pe = a, Ge !== null ? t = 0 : (rt = null, dt = 0, t = et);
          }
          if (t !== 0) {
            if (t === 2 && (a = pf(e3), a !== 0 && (n = a, t = Hf(e3, a))), t === 1) throw r = tl, Ra(e3, 0), $n(e3, n), Wt(e3, We()), r;
            if (t === 6) $n(e3, n);
            else {
              if (a = e3.current.alternate, (n & 30) === 0 && !Nk(a) && (t = fu(e3, n), t === 2 && (i = pf(e3), i !== 0 && (n = i, t = Hf(e3, i))), t === 1)) throw r = tl, Ra(e3, 0), $n(e3, n), Wt(e3, We()), r;
              switch (e3.finishedWork = a, e3.finishedLanes = n, t) {
                case 0:
                case 1:
                  throw Error($(345));
                case 2:
                  xa(e3, Ut, nn);
                  break;
                case 3:
                  if ($n(e3, n), (n & 130023424) === n && (t = Sh + 500 - We(), 10 < t)) {
                    if (Gs(e3, 0) !== 0) break;
                    if (a = e3.suspendedLanes, (a & n) !== n) {
                      At(), e3.pingedLanes |= e3.suspendedLanes & a;
                      break;
                    }
                    e3.timeoutHandle = kf(xa.bind(null, e3, Ut, nn), t);
                    break;
                  }
                  xa(e3, Ut, nn);
                  break;
                case 4:
                  if ($n(e3, n), (n & 4194240) === n) break;
                  for (t = e3.eventTimes, a = -1; 0 < n; ) {
                    var o = 31 - Sr(n);
                    i = 1 << o, o = t[o], o > a && (a = o), n &= ~i;
                  }
                  if (n = a, n = We() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Dk(n / 1960)) - n, 10 < n) {
                    e3.timeoutHandle = kf(xa.bind(null, e3, Ut, nn), n);
                    break;
                  }
                  xa(e3, Ut, nn);
                  break;
                case 5:
                  xa(e3, Ut, nn);
                  break;
                default:
                  throw Error($(329));
              }
            }
          }
          return Wt(e3, We()), e3.callbackNode === r ? G1.bind(null, e3) : null;
        }
        function Hf(e3, t) {
          var r = Oo;
          return e3.current.memoizedState.isDehydrated && (Ra(e3, t).flags |= 256), e3 = fu(e3, t), e3 !== 2 && (t = Ut, Ut = r, t !== null && Bf(t)), e3;
        }
        function Bf(e3) {
          Ut === null ? Ut = e3 : Ut.push.apply(Ut, e3);
        }
        function Nk(e3) {
          for (var t = e3; ; ) {
            if (t.flags & 16384) {
              var r = t.updateQueue;
              if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
                var a = r[n], i = a.getSnapshot;
                a = a.value;
                try {
                  if (!Dr(i(), a)) return false;
                } catch {
                  return false;
                }
              }
            }
            if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
            else {
              if (t === e3) break;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e3) return true;
                t = t.return;
              }
              t.sibling.return = t.return, t = t.sibling;
            }
          }
          return true;
        }
        function $n(e3, t) {
          for (t &= ~Rh, t &= ~Eu, e3.suspendedLanes |= t, e3.pingedLanes &= ~t, e3 = e3.expirationTimes; 0 < t; ) {
            var r = 31 - Sr(t), n = 1 << r;
            e3[r] = -1, t &= ~n;
          }
        }
        function av(e3) {
          if ((pe & 6) !== 0) throw Error($(327));
          ki();
          var t = Gs(e3, 0);
          if ((t & 1) === 0) return Wt(e3, We()), null;
          var r = fu(e3, t);
          if (e3.tag !== 0 && r === 2) {
            var n = pf(e3);
            n !== 0 && (t = n, r = Hf(e3, n));
          }
          if (r === 1) throw r = tl, Ra(e3, 0), $n(e3, t), Wt(e3, We()), r;
          if (r === 6) throw Error($(345));
          return e3.finishedWork = e3.current.alternate, e3.finishedLanes = t, xa(e3, Ut, nn), Wt(e3, We()), null;
        }
        function Ch(e3, t) {
          var r = pe;
          pe |= 1;
          try {
            return e3(t);
          } finally {
            pe = r, pe === 0 && (Mi = We() + 500, wu && Xn());
          }
        }
        function La(e3) {
          zn !== null && zn.tag === 0 && (pe & 6) === 0 && ki();
          var t = pe;
          pe |= 1;
          var r = sr.transition, n = ye;
          try {
            if (sr.transition = null, ye = 1, e3) return e3();
          } finally {
            ye = n, sr.transition = r, pe = t, (pe & 6) === 0 && Xn();
          }
        }
        function Dh() {
          Gt = gi.current, Ne(gi);
        }
        function Ra(e3, t) {
          e3.finishedWork = null, e3.finishedLanes = 0;
          var r = e3.timeoutHandle;
          if (r !== -1 && (e3.timeoutHandle = -1, ak(r)), Ge !== null) for (r = Ge.return; r !== null; ) {
            var n = r;
            switch (lh(n), n.tag) {
              case 1:
                n = n.type.childContextTypes, n != null && Js();
                break;
              case 3:
                Di(), Ne(Bt), Ne(kt), gh();
                break;
              case 5:
                mh(n);
                break;
              case 4:
                Di();
                break;
              case 13:
                Ne($e);
                break;
              case 19:
                Ne($e);
                break;
              case 10:
                dh(n.type._context);
                break;
              case 22:
              case 23:
                Dh();
            }
            r = r.return;
          }
          if (rt = e3, Ge = e3 = Yn(e3.current, null), dt = Gt = t, et = 0, tl = null, Rh = Eu = Ma = 0, Ut = Oo = null, ka !== null) {
            for (t = 0; t < ka.length; t++) if (r = ka[t], n = r.interleaved, n !== null) {
              r.interleaved = null;
              var a = n.next, i = r.pending;
              if (i !== null) {
                var o = i.next;
                i.next = a, n.next = o;
              }
              r.pending = n;
            }
            ka = null;
          }
          return e3;
        }
        function K1(e3, t) {
          do {
            var r = Ge;
            try {
              if (ch(), zs.current = su, lu) {
                for (var n = Oe.memoizedState; n !== null; ) {
                  var a = n.queue;
                  a !== null && (a.pending = null), n = n.next;
                }
                lu = false;
              }
              if (Na = 0, tt = Je = Oe = null, Fo = false, Zo = 0, Eh.current = null, r === null || r.return === null) {
                et = 1, tl = t, Ge = null;
                break;
              }
              e: {
                var i = e3, o = r.return, l = r, s = t;
                if (t = dt, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                  var u = s, c = l, d = c.tag;
                  if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
                    var f = c.alternate;
                    f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
                  }
                  var h = Wg(o);
                  if (h !== null) {
                    h.flags &= -257, Yg(h, o, l, i, t), h.mode & 1 && Vg(i, u, t), t = h, s = u;
                    var v = t.updateQueue;
                    if (v === null) {
                      var y = /* @__PURE__ */ new Set();
                      y.add(s), t.updateQueue = y;
                    } else v.add(s);
                    break e;
                  } else {
                    if ((t & 1) === 0) {
                      Vg(i, u, t), Nh();
                      break e;
                    }
                    s = Error($(426));
                  }
                } else if (Te && l.mode & 1) {
                  var m = Wg(o);
                  if (m !== null) {
                    (m.flags & 65536) === 0 && (m.flags |= 256), Yg(m, o, l, i, t), sh(Ni(s, l));
                    break e;
                  }
                }
                i = s = Ni(s, l), et !== 4 && (et = 2), Oo === null ? Oo = [i] : Oo.push(i), i = o;
                do {
                  switch (i.tag) {
                    case 3:
                      i.flags |= 65536, t &= -t, i.lanes |= t;
                      var g = _1(i, s, t);
                      zg(i, g);
                      break e;
                    case 1:
                      l = s;
                      var p = i.type, w = i.stateNode;
                      if ((i.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Vn === null || !Vn.has(w)))) {
                        i.flags |= 65536, t &= -t, i.lanes |= t;
                        var b = T1(i, l, t);
                        zg(i, b);
                        break e;
                      }
                  }
                  i = i.return;
                } while (i !== null);
              }
              Z1(r);
            } catch (E) {
              t = E, Ge === r && r !== null && (Ge = r = r.return);
              continue;
            }
            break;
          } while (true);
        }
        function Q1() {
          var e3 = uu.current;
          return uu.current = su, e3 === null ? su : e3;
        }
        function Nh() {
          (et === 0 || et === 3 || et === 2) && (et = 4), rt === null || (Ma & 268435455) === 0 && (Eu & 268435455) === 0 || $n(rt, dt);
        }
        function fu(e3, t) {
          var r = pe;
          pe |= 2;
          var n = Q1();
          (rt !== e3 || dt !== t) && (nn = null, Ra(e3, t));
          do
            try {
              Mk();
              break;
            } catch (a) {
              K1(e3, a);
            }
          while (true);
          if (ch(), pe = r, uu.current = n, Ge !== null) throw Error($(261));
          return rt = null, dt = 0, et;
        }
        function Mk() {
          for (; Ge !== null; ) X1(Ge);
        }
        function Lk() {
          for (; Ge !== null && !n6(); ) X1(Ge);
        }
        function X1(e3) {
          var t = ey(e3.alternate, e3, Gt);
          e3.memoizedProps = e3.pendingProps, t === null ? Z1(e3) : Ge = t, Eh.current = null;
        }
        function Z1(e3) {
          var t = e3;
          do {
            var r = t.alternate;
            if (e3 = t.return, (t.flags & 32768) === 0) {
              if (r = kk(r, t, Gt), r !== null) {
                Ge = r;
                return;
              }
            } else {
              if (r = Ek(r, t), r !== null) {
                r.flags &= 32767, Ge = r;
                return;
              }
              if (e3 !== null) e3.flags |= 32768, e3.subtreeFlags = 0, e3.deletions = null;
              else {
                et = 6, Ge = null;
                return;
              }
            }
            if (t = t.sibling, t !== null) {
              Ge = t;
              return;
            }
            Ge = t = e3;
          } while (t !== null);
          et === 0 && (et = 5);
        }
        function xa(e3, t, r) {
          var n = ye, a = sr.transition;
          try {
            sr.transition = null, ye = 1, Pk(e3, t, r, n);
          } finally {
            sr.transition = a, ye = n;
          }
          return null;
        }
        function Pk(e3, t, r, n) {
          do
            ki();
          while (zn !== null);
          if ((pe & 6) !== 0) throw Error($(327));
          r = e3.finishedWork;
          var a = e3.finishedLanes;
          if (r === null) return null;
          if (e3.finishedWork = null, e3.finishedLanes = 0, r === e3.current) throw Error($(177));
          e3.callbackNode = null, e3.callbackPriority = 0;
          var i = r.lanes | r.childLanes;
          if (h6(e3, i), e3 === rt && (Ge = rt = null, dt = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || Ts || (Ts = true, ty(qs, function() {
            return ki(), null;
          })), i = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || i) {
            i = sr.transition, sr.transition = null;
            var o = ye;
            ye = 1;
            var l = pe;
            pe |= 4, Eh.current = null, Sk(e3, r), Y1(r, e3), J6(xf), Ks = !!wf, xf = wf = null, e3.current = r, Ck(r, e3, a), a6(), pe = l, ye = o, sr.transition = i;
          } else e3.current = r;
          if (Ts && (Ts = false, zn = e3, du = a), i = e3.pendingLanes, i === 0 && (Vn = null), l6(r.stateNode, n), Wt(e3, We()), t !== null) for (n = e3.onRecoverableError, r = 0; r < t.length; r++) a = t[r], n(a.value, { componentStack: a.stack, digest: a.digest });
          if (cu) throw cu = false, e3 = jf, jf = null, e3;
          return (du & 1) !== 0 && e3.tag !== 0 && ki(), i = e3.pendingLanes, (i & 1) !== 0 ? e3 === Uf ? zo++ : (zo = 0, Uf = e3) : zo = 0, Xn(), null;
        }
        function ki() {
          if (zn !== null) {
            var e3 = _v(du), t = sr.transition, r = ye;
            try {
              if (sr.transition = null, ye = 16 > e3 ? 16 : e3, zn === null) var n = false;
              else {
                if (e3 = zn, zn = null, du = 0, (pe & 6) !== 0) throw Error($(331));
                var a = pe;
                for (pe |= 4, V = e3.current; V !== null; ) {
                  var i = V, o = i.child;
                  if ((V.flags & 16) !== 0) {
                    var l = i.deletions;
                    if (l !== null) {
                      for (var s = 0; s < l.length; s++) {
                        var u = l[s];
                        for (V = u; V !== null; ) {
                          var c = V;
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              $o(8, c, i);
                          }
                          var d = c.child;
                          if (d !== null) d.return = c, V = d;
                          else for (; V !== null; ) {
                            c = V;
                            var f = c.sibling, h = c.return;
                            if (B1(c), c === u) {
                              V = null;
                              break;
                            }
                            if (f !== null) {
                              f.return = h, V = f;
                              break;
                            }
                            V = h;
                          }
                        }
                      }
                      var v = i.alternate;
                      if (v !== null) {
                        var y = v.child;
                        if (y !== null) {
                          v.child = null;
                          do {
                            var m = y.sibling;
                            y.sibling = null, y = m;
                          } while (y !== null);
                        }
                      }
                      V = i;
                    }
                  }
                  if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, V = o;
                  else e: for (; V !== null; ) {
                    if (i = V, (i.flags & 2048) !== 0) switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $o(9, i, i.return);
                    }
                    var g = i.sibling;
                    if (g !== null) {
                      g.return = i.return, V = g;
                      break e;
                    }
                    V = i.return;
                  }
                }
                var p = e3.current;
                for (V = p; V !== null; ) {
                  o = V;
                  var w = o.child;
                  if ((o.subtreeFlags & 2064) !== 0 && w !== null) w.return = o, V = w;
                  else e: for (o = p; V !== null; ) {
                    if (l = V, (l.flags & 2048) !== 0) try {
                      switch (l.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ku(9, l);
                      }
                    } catch (E) {
                      Ie(l, l.return, E);
                    }
                    if (l === o) {
                      V = null;
                      break e;
                    }
                    var b = l.sibling;
                    if (b !== null) {
                      b.return = l.return, V = b;
                      break e;
                    }
                    V = l.return;
                  }
                }
                if (pe = a, Xn(), jr && typeof jr.onPostCommitFiberRoot == "function") try {
                  jr.onPostCommitFiberRoot(pu, e3);
                } catch {
                }
                n = true;
              }
              return n;
            } finally {
              ye = r, sr.transition = t;
            }
          }
          return false;
        }
        function iv(e3, t, r) {
          t = Ni(r, t), t = _1(e3, t, 1), e3 = Bn(e3, t, 1), t = At(), e3 !== null && (rl(e3, 1, t), Wt(e3, t));
        }
        function Ie(e3, t, r) {
          if (e3.tag === 3) iv(e3, e3, r);
          else for (; t !== null; ) {
            if (t.tag === 3) {
              iv(t, e3, r);
              break;
            } else if (t.tag === 1) {
              var n = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Vn === null || !Vn.has(n))) {
                e3 = Ni(r, e3), e3 = T1(t, e3, 1), t = Bn(t, e3, 1), e3 = At(), t !== null && (rl(t, 1, e3), Wt(t, e3));
                break;
              }
            }
            t = t.return;
          }
        }
        function _k(e3, t, r) {
          var n = e3.pingCache;
          n !== null && n.delete(t), t = At(), e3.pingedLanes |= e3.suspendedLanes & r, rt === e3 && (dt & r) === r && (et === 4 || et === 3 && (dt & 130023424) === dt && 500 > We() - Sh ? Ra(e3, 0) : Rh |= r), Wt(e3, t);
        }
        function J1(e3, t) {
          t === 0 && ((e3.mode & 1) === 0 ? t = 1 : (t = ws, ws <<= 1, (ws & 130023424) === 0 && (ws = 4194304)));
          var r = At();
          e3 = dn(e3, t), e3 !== null && (rl(e3, t, r), Wt(e3, r));
        }
        function Tk(e3) {
          var t = e3.memoizedState, r = 0;
          t !== null && (r = t.retryLane), J1(e3, r);
        }
        function Ak(e3, t) {
          var r = 0;
          switch (e3.tag) {
            case 13:
              var n = e3.stateNode, a = e3.memoizedState;
              a !== null && (r = a.retryLane);
              break;
            case 19:
              n = e3.stateNode;
              break;
            default:
              throw Error($(314));
          }
          n !== null && n.delete(t), J1(e3, r);
        }
        var ey;
        ey = function(e3, t, r) {
          if (e3 !== null) if (e3.memoizedProps !== t.pendingProps || Bt.current) Ht = true;
          else {
            if ((e3.lanes & r) === 0 && (t.flags & 128) === 0) return Ht = false, bk(e3, t, r);
            Ht = (e3.flags & 131072) !== 0;
          }
          else Ht = false, Te && (t.flags & 1048576) !== 0 && a1(t, ru, t.index);
          switch (t.lanes = 0, t.tag) {
            case 2:
              var n = t.type;
              js(e3, t), e3 = t.pendingProps;
              var a = Ri(t, kt.current);
              bi(t, r), a = yh(null, t, n, e3, a, r);
              var i = wh();
              return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Vt(n) ? (i = true, eu(t)) : i = false, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, hh(t), a.updater = bu, t.stateNode = a, a._reactInternals = t, Mf(t, n, e3, r), t = _f(null, t, n, true, i, r)) : (t.tag = 0, Te && i && oh(t), Tt(null, t, a, r), t = t.child), t;
            case 16:
              n = t.elementType;
              e: {
                switch (js(e3, t), e3 = t.pendingProps, a = n._init, n = a(n._payload), t.type = n, a = t.tag = $k(n), e3 = kr(n, e3), a) {
                  case 0:
                    t = Pf(null, t, n, e3, r);
                    break e;
                  case 1:
                    t = Kg(null, t, n, e3, r);
                    break e;
                  case 11:
                    t = qg(null, t, n, e3, r);
                    break e;
                  case 14:
                    t = Gg(null, t, n, kr(n.type, e3), r);
                    break e;
                }
                throw Error($(306, n, ""));
              }
              return t;
            case 0:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : kr(n, a), Pf(e3, t, n, a, r);
            case 1:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : kr(n, a), Kg(e3, t, n, a, r);
            case 3:
              e: {
                if (O1(t), e3 === null) throw Error($(387));
                n = t.pendingProps, i = t.memoizedState, a = i.element, c1(e3, t), iu(t, n, null, r);
                var o = t.memoizedState;
                if (n = o.element, i.isDehydrated) if (i = { element: n, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                  a = Ni(Error($(423)), t), t = Qg(e3, t, n, r, a);
                  break e;
                } else if (n !== a) {
                  a = Ni(Error($(424)), t), t = Qg(e3, t, n, r, a);
                  break e;
                } else for (Kt = Hn(t.stateNode.containerInfo.firstChild), Qt = t, Te = true, Rr = null, r = s1(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
                else {
                  if (Si(), n === a) {
                    t = fn(e3, t, r);
                    break e;
                  }
                  Tt(e3, t, n, r);
                }
                t = t.child;
              }
              return t;
            case 5:
              return d1(t), e3 === null && Cf(t), n = t.type, a = t.pendingProps, i = e3 !== null ? e3.memoizedProps : null, o = a.children, bf(n, a) ? o = null : i !== null && bf(n, i) && (t.flags |= 32), $1(e3, t), Tt(e3, t, o, r), t.child;
            case 6:
              return e3 === null && Cf(t), null;
            case 13:
              return z1(e3, t, r);
            case 4:
              return ph(t, t.stateNode.containerInfo), n = t.pendingProps, e3 === null ? t.child = Ci(t, null, n, r) : Tt(e3, t, n, r), t.child;
            case 11:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : kr(n, a), qg(e3, t, n, a, r);
            case 7:
              return Tt(e3, t, t.pendingProps, r), t.child;
            case 8:
              return Tt(e3, t, t.pendingProps.children, r), t.child;
            case 12:
              return Tt(e3, t, t.pendingProps.children, r), t.child;
            case 10:
              e: {
                if (n = t.type._context, a = t.pendingProps, i = t.memoizedProps, o = a.value, Ce(nu, n._currentValue), n._currentValue = o, i !== null) if (Dr(i.value, o)) {
                  if (i.children === a.children && !Bt.current) {
                    t = fn(e3, t, r);
                    break e;
                  }
                } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                  var l = i.dependencies;
                  if (l !== null) {
                    o = i.child;
                    for (var s = l.firstContext; s !== null; ) {
                      if (s.context === n) {
                        if (i.tag === 1) {
                          s = sn(-1, r & -r), s.tag = 2;
                          var u = i.updateQueue;
                          if (u !== null) {
                            u = u.shared;
                            var c = u.pending;
                            c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s;
                          }
                        }
                        i.lanes |= r, s = i.alternate, s !== null && (s.lanes |= r), Df(i.return, r, t), l.lanes |= r;
                        break;
                      }
                      s = s.next;
                    }
                  } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                  else if (i.tag === 18) {
                    if (o = i.return, o === null) throw Error($(341));
                    o.lanes |= r, l = o.alternate, l !== null && (l.lanes |= r), Df(o, r, t), o = i.sibling;
                  } else o = i.child;
                  if (o !== null) o.return = i;
                  else for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (i = o.sibling, i !== null) {
                      i.return = o.return, o = i;
                      break;
                    }
                    o = o.return;
                  }
                  i = o;
                }
                Tt(e3, t, a.children, r), t = t.child;
              }
              return t;
            case 9:
              return a = t.type, n = t.pendingProps.children, bi(t, r), a = ur(a), n = n(a), t.flags |= 1, Tt(e3, t, n, r), t.child;
            case 14:
              return n = t.type, a = kr(n, t.pendingProps), a = kr(n.type, a), Gg(e3, t, n, a, r);
            case 15:
              return A1(e3, t, t.type, t.pendingProps, r);
            case 17:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : kr(n, a), js(e3, t), t.tag = 1, Vt(n) ? (e3 = true, eu(t)) : e3 = false, bi(t, r), P1(t, n, a), Mf(t, n, a, r), _f(null, t, n, true, e3, r);
            case 19:
              return I1(e3, t, r);
            case 22:
              return F1(e3, t, r);
          }
          throw Error($(156, t.tag));
        };
        function ty(e3, t) {
          return Nv(e3, t);
        }
        function Fk(e3, t, r, n) {
          this.tag = e3, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function lr(e3, t, r, n) {
          return new Fk(e3, t, r, n);
        }
        function Mh(e3) {
          return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
        }
        function $k(e3) {
          if (typeof e3 == "function") return Mh(e3) ? 1 : 0;
          if (e3 != null) {
            if (e3 = e3.$$typeof, e3 === Gf) return 11;
            if (e3 === Kf) return 14;
          }
          return 2;
        }
        function Yn(e3, t) {
          var r = e3.alternate;
          return r === null ? (r = lr(e3.tag, t, e3.key, e3.mode), r.elementType = e3.elementType, r.type = e3.type, r.stateNode = e3.stateNode, r.alternate = e3, e3.alternate = r) : (r.pendingProps = t, r.type = e3.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e3.flags & 14680064, r.childLanes = e3.childLanes, r.lanes = e3.lanes, r.child = e3.child, r.memoizedProps = e3.memoizedProps, r.memoizedState = e3.memoizedState, r.updateQueue = e3.updateQueue, t = e3.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e3.sibling, r.index = e3.index, r.ref = e3.ref, r;
        }
        function Bs(e3, t, r, n, a, i) {
          var o = 2;
          if (n = e3, typeof e3 == "function") Mh(e3) && (o = 1);
          else if (typeof e3 == "string") o = 5;
          else e: switch (e3) {
            case oi:
              return Sa(r.children, a, i, t);
            case qf:
              o = 8, a |= 8;
              break;
            case Zd:
              return e3 = lr(12, r, t, a | 2), e3.elementType = Zd, e3.lanes = i, e3;
            case Jd:
              return e3 = lr(13, r, t, a), e3.elementType = Jd, e3.lanes = i, e3;
            case ef:
              return e3 = lr(19, r, t, a), e3.elementType = ef, e3.lanes = i, e3;
            case dv:
              return Ru(r, a, i, t);
            default:
              if (typeof e3 == "object" && e3 !== null) switch (e3.$$typeof) {
                case uv:
                  o = 10;
                  break e;
                case cv:
                  o = 9;
                  break e;
                case Gf:
                  o = 11;
                  break e;
                case Kf:
                  o = 14;
                  break e;
                case Tn:
                  o = 16, n = null;
                  break e;
              }
              throw Error($(130, e3 == null ? e3 : typeof e3, ""));
          }
          return t = lr(o, r, t, a), t.elementType = e3, t.type = n, t.lanes = i, t;
        }
        function Sa(e3, t, r, n) {
          return e3 = lr(7, e3, n, t), e3.lanes = r, e3;
        }
        function Ru(e3, t, r, n) {
          return e3 = lr(22, e3, n, t), e3.elementType = dv, e3.lanes = r, e3.stateNode = { isHidden: false }, e3;
        }
        function Kd(e3, t, r) {
          return e3 = lr(6, e3, null, t), e3.lanes = r, e3;
        }
        function Qd(e3, t, r) {
          return t = lr(4, e3.children !== null ? e3.children : [], e3.key, t), t.lanes = r, t.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, t;
        }
        function Ok(e3, t, r, n, a) {
          this.tag = t, this.containerInfo = e3, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Td(0), this.expirationTimes = Td(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Td(0), this.identifierPrefix = n, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
        }
        function Lh(e3, t, r, n, a, i, o, l, s) {
          return e3 = new Ok(e3, t, r, l, s), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = lr(3, null, null, t), e3.current = i, i.stateNode = e3, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, hh(i), e3;
        }
        function zk(e3, t, r) {
          var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return { $$typeof: ii, key: n == null ? null : "" + n, children: e3, containerInfo: t, implementation: r };
        }
        function ry(e3) {
          if (!e3) return Gn;
          e3 = e3._reactInternals;
          e: {
            if (_a(e3) !== e3 || e3.tag !== 1) throw Error($(170));
            var t = e3;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Vt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (t !== null);
            throw Error($(171));
          }
          if (e3.tag === 1) {
            var r = e3.type;
            if (Vt(r)) return r1(e3, r, t);
          }
          return t;
        }
        function ny(e3, t, r, n, a, i, o, l, s) {
          return e3 = Lh(r, n, true, e3, a, i, o, l, s), e3.context = ry(null), r = e3.current, n = At(), a = Wn(r), i = sn(n, a), i.callback = t ?? null, Bn(r, i, a), e3.current.lanes = a, rl(e3, a, n), Wt(e3, n), e3;
        }
        function Su(e3, t, r, n) {
          var a = t.current, i = At(), o = Wn(a);
          return r = ry(r), t.context === null ? t.context = r : t.pendingContext = r, t = sn(i, o), t.payload = { element: e3 }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e3 = Bn(a, t, o), e3 !== null && (Cr(e3, a, o, i), Os(e3, a, o)), o;
        }
        function hu(e3) {
          if (e3 = e3.current, !e3.child) return null;
          switch (e3.child.tag) {
            case 5:
              return e3.child.stateNode;
            default:
              return e3.child.stateNode;
          }
        }
        function ov(e3, t) {
          if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
            var r = e3.retryLane;
            e3.retryLane = r !== 0 && r < t ? r : t;
          }
        }
        function Ph(e3, t) {
          ov(e3, t), (e3 = e3.alternate) && ov(e3, t);
        }
        function Ik() {
          return null;
        }
        var ay = typeof reportError == "function" ? reportError : function(e3) {
          console.error(e3);
        };
        function _h(e3) {
          this._internalRoot = e3;
        }
        Cu.prototype.render = _h.prototype.render = function(e3) {
          var t = this._internalRoot;
          if (t === null) throw Error($(409));
          Su(e3, t, null, null);
        };
        Cu.prototype.unmount = _h.prototype.unmount = function() {
          var e3 = this._internalRoot;
          if (e3 !== null) {
            this._internalRoot = null;
            var t = e3.containerInfo;
            La(function() {
              Su(null, e3, null, null);
            }), t[cn] = null;
          }
        };
        function Cu(e3) {
          this._internalRoot = e3;
        }
        Cu.prototype.unstable_scheduleHydration = function(e3) {
          if (e3) {
            var t = Fv();
            e3 = { blockedOn: null, target: e3, priority: t };
            for (var r = 0; r < Fn.length && t !== 0 && t < Fn[r].priority; r++) ;
            Fn.splice(r, 0, e3), r === 0 && Ov(e3);
          }
        };
        function Th(e3) {
          return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
        }
        function Du(e3) {
          return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11 && (e3.nodeType !== 8 || e3.nodeValue !== " react-mount-point-unstable "));
        }
        function lv() {
        }
        function jk(e3, t, r, n, a) {
          if (a) {
            if (typeof n == "function") {
              var i = n;
              n = function() {
                var u = hu(o);
                i.call(u);
              };
            }
            var o = ny(t, n, e3, 0, null, false, false, "", lv);
            return e3._reactRootContainer = o, e3[cn] = o.current, qo(e3.nodeType === 8 ? e3.parentNode : e3), La(), o;
          }
          for (; a = e3.lastChild; ) e3.removeChild(a);
          if (typeof n == "function") {
            var l = n;
            n = function() {
              var u = hu(s);
              l.call(u);
            };
          }
          var s = Lh(e3, 0, false, null, null, false, false, "", lv);
          return e3._reactRootContainer = s, e3[cn] = s.current, qo(e3.nodeType === 8 ? e3.parentNode : e3), La(function() {
            Su(t, s, r, n);
          }), s;
        }
        function Nu(e3, t, r, n, a) {
          var i = r._reactRootContainer;
          if (i) {
            var o = i;
            if (typeof a == "function") {
              var l = a;
              a = function() {
                var s = hu(o);
                l.call(s);
              };
            }
            Su(t, o, e3, a);
          } else o = jk(r, t, e3, a, n);
          return hu(o);
        }
        Tv = function(e3) {
          switch (e3.tag) {
            case 3:
              var t = e3.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                var r = No(t.pendingLanes);
                r !== 0 && (Zf(t, r | 1), Wt(t, We()), (pe & 6) === 0 && (Mi = We() + 500, Xn()));
              }
              break;
            case 13:
              La(function() {
                var n = dn(e3, 1);
                if (n !== null) {
                  var a = At();
                  Cr(n, e3, 1, a);
                }
              }), Ph(e3, 1);
          }
        };
        Jf = function(e3) {
          if (e3.tag === 13) {
            var t = dn(e3, 134217728);
            if (t !== null) {
              var r = At();
              Cr(t, e3, 134217728, r);
            }
            Ph(e3, 134217728);
          }
        };
        Av = function(e3) {
          if (e3.tag === 13) {
            var t = Wn(e3), r = dn(e3, t);
            if (r !== null) {
              var n = At();
              Cr(r, e3, t, n);
            }
            Ph(e3, t);
          }
        };
        Fv = function() {
          return ye;
        };
        $v = function(e3, t) {
          var r = ye;
          try {
            return ye = e3, t();
          } finally {
            ye = r;
          }
        };
        df = function(e3, t, r) {
          switch (t) {
            case "input":
              if (nf(e3, r), t = r.name, r.type === "radio" && t != null) {
                for (r = e3; r.parentNode; ) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                  var n = r[t];
                  if (n !== e3 && n.form === e3.form) {
                    var a = yu(n);
                    if (!a) throw Error($(90));
                    hv(n), nf(n, a);
                  }
                }
              }
              break;
            case "textarea":
              mv(e3, r);
              break;
            case "select":
              t = r.value, t != null && vi(e3, !!r.multiple, t, false);
          }
        };
        kv = Ch;
        Ev = La;
        var Uk = { usingClientEntryPoint: false, Events: [al, ci, yu, xv, bv, Ch] }, Ro = { findFiberByHostInstance: ba, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hk = { bundleType: Ro.bundleType, version: Ro.version, rendererPackageName: Ro.rendererPackageName, rendererConfig: Ro.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: hn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e3) {
          return e3 = Cv(e3), e3 === null ? null : e3.stateNode;
        }, findFiberByHostInstance: Ro.findFiberByHostInstance || Ik, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (So = __REACT_DEVTOOLS_GLOBAL_HOOK__, !So.isDisabled && So.supportsFiber)) try {
          pu = So.inject(Hk), jr = So;
        } catch {
        }
        var So;
        Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uk;
        Jt.createPortal = function(e3, t) {
          var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!Th(t)) throw Error($(200));
          return zk(e3, t, null, r);
        };
        Jt.createRoot = function(e3, t) {
          if (!Th(e3)) throw Error($(299));
          var r = false, n = "", a = ay;
          return t != null && (t.unstable_strictMode === true && (r = true), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Lh(e3, 1, false, null, null, r, false, n, a), e3[cn] = t.current, qo(e3.nodeType === 8 ? e3.parentNode : e3), new _h(t);
        };
        Jt.findDOMNode = function(e3) {
          if (e3 == null) return null;
          if (e3.nodeType === 1) return e3;
          var t = e3._reactInternals;
          if (t === void 0) throw typeof e3.render == "function" ? Error($(188)) : (e3 = Object.keys(e3).join(","), Error($(268, e3)));
          return e3 = Cv(t), e3 = e3 === null ? null : e3.stateNode, e3;
        };
        Jt.flushSync = function(e3) {
          return La(e3);
        };
        Jt.hydrate = function(e3, t, r) {
          if (!Du(t)) throw Error($(200));
          return Nu(null, e3, t, true, r);
        };
        Jt.hydrateRoot = function(e3, t, r) {
          if (!Th(e3)) throw Error($(405));
          var n = r != null && r.hydratedSources || null, a = false, i = "", o = ay;
          if (r != null && (r.unstable_strictMode === true && (a = true), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = ny(t, null, e3, 1, r ?? null, a, false, i, o), e3[cn] = t.current, qo(e3), n) for (e3 = 0; e3 < n.length; e3++) r = n[e3], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(r, a);
          return new Cu(t);
        };
        Jt.render = function(e3, t, r) {
          if (!Du(t)) throw Error($(200));
          return Nu(null, e3, t, false, r);
        };
        Jt.unmountComponentAtNode = function(e3) {
          if (!Du(e3)) throw Error($(40));
          return e3._reactRootContainer ? (La(function() {
            Nu(null, null, e3, false, function() {
              e3._reactRootContainer = null, e3[cn] = null;
            });
          }), true) : false;
        };
        Jt.unstable_batchedUpdates = Ch;
        Jt.unstable_renderSubtreeIntoContainer = function(e3, t, r, n) {
          if (!Du(r)) throw Error($(200));
          if (e3 == null || e3._reactInternals === void 0) throw Error($(38));
          return Nu(e3, t, r, false, n);
        };
        Jt.version = "18.3.1-next-f1338f8080-20240426";
      });
      ol = wr((lN, ly) => {
        "use strict";
        function oy() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy);
          } catch (e3) {
            console.error(e3);
          }
        }
        oy(), ly.exports = iy();
      });
      uy = wr((Ah) => {
        "use strict";
        var sy = ol();
        Ah.createRoot = sy.createRoot, Ah.hydrateRoot = sy.hydrateRoot;
        var sN;
      });
      Q2 = wr((Gr) => {
        "use strict";
        Object.defineProperty(Gr, "__esModule", { value: true });
        Gr.parseCookie = G2;
        Gr.parse = G2;
        Gr.stringifyCookie = eS;
        Gr.stringifySetCookie = xc;
        Gr.serialize = xc;
        Gr.parseSetCookie = tS;
        Gr.stringifySetCookie = xc;
        Gr.serialize = xc;
        var Y2 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, q2 = /^[\u0021-\u003A\u003C-\u007E]*$/, KR = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, QR = /^[\u0020-\u003A\u003D-\u007E]*$/, XR = /^-?\d+$/, ZR = Object.prototype.toString, JR = (() => {
          let e3 = function() {
          };
          return e3.prototype = /* @__PURE__ */ Object.create(null), e3;
        })();
        function G2(e3, t) {
          let r = new JR(), n = e3.length;
          if (n < 2) return r;
          let a = t?.decode || K2, i = 0;
          do {
            let o = qp(e3, i, n);
            if (o === -1) break;
            let l = Yp(e3, i, n);
            if (o > l) {
              i = e3.lastIndexOf(";", o - 1) + 1;
              continue;
            }
            let s = ia(e3, i, o);
            r[s] === void 0 && (r[s] = a(ia(e3, o + 1, l))), i = l + 1;
          } while (i < n);
          return r;
        }
        function eS(e3, t) {
          let r = t?.encode || encodeURIComponent, n = [];
          for (let a of Object.keys(e3)) {
            let i = e3[a];
            if (i === void 0) continue;
            if (!Y2.test(a)) throw new TypeError(`cookie name is invalid: ${a}`);
            let o = r(i);
            if (!q2.test(o)) throw new TypeError(`cookie val is invalid: ${i}`);
            n.push(`${a}=${o}`);
          }
          return n.join("; ");
        }
        function xc(e3, t, r) {
          let n = typeof e3 == "object" ? e3 : { ...r, name: e3, value: String(t) }, i = (typeof t == "object" ? t : r)?.encode || encodeURIComponent;
          if (!Y2.test(n.name)) throw new TypeError(`argument name is invalid: ${n.name}`);
          let o = n.value ? i(n.value) : "";
          if (!q2.test(o)) throw new TypeError(`argument val is invalid: ${n.value}`);
          let l = n.name + "=" + o;
          if (n.maxAge !== void 0) {
            if (!Number.isInteger(n.maxAge)) throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
            l += "; Max-Age=" + n.maxAge;
          }
          if (n.domain) {
            if (!KR.test(n.domain)) throw new TypeError(`option domain is invalid: ${n.domain}`);
            l += "; Domain=" + n.domain;
          }
          if (n.path) {
            if (!QR.test(n.path)) throw new TypeError(`option path is invalid: ${n.path}`);
            l += "; Path=" + n.path;
          }
          if (n.expires) {
            if (!rS(n.expires) || !Number.isFinite(n.expires.valueOf())) throw new TypeError(`option expires is invalid: ${n.expires}`);
            l += "; Expires=" + n.expires.toUTCString();
          }
          if (n.httpOnly && (l += "; HttpOnly"), n.secure && (l += "; Secure"), n.partitioned && (l += "; Partitioned"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
            case "low":
              l += "; Priority=Low";
              break;
            case "medium":
              l += "; Priority=Medium";
              break;
            case "high":
              l += "; Priority=High";
              break;
            default:
              throw new TypeError(`option priority is invalid: ${n.priority}`);
          }
          if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
            case true:
            case "strict":
              l += "; SameSite=Strict";
              break;
            case "lax":
              l += "; SameSite=Lax";
              break;
            case "none":
              l += "; SameSite=None";
              break;
            default:
              throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
          }
          return l;
        }
        function tS(e3, t) {
          let r = t?.decode || K2, n = e3.length, a = Yp(e3, 0, n), i = qp(e3, 0, a), o = i === -1 ? { name: "", value: r(ia(e3, 0, a)) } : { name: ia(e3, 0, i), value: r(ia(e3, i + 1, a)) }, l = a + 1;
          for (; l < n; ) {
            let s = Yp(e3, l, n), u = qp(e3, l, s), c = u === -1 ? ia(e3, l, s) : ia(e3, l, u), d = u === -1 ? void 0 : ia(e3, u + 1, s);
            switch (c.toLowerCase()) {
              case "httponly":
                o.httpOnly = true;
                break;
              case "secure":
                o.secure = true;
                break;
              case "partitioned":
                o.partitioned = true;
                break;
              case "domain":
                o.domain = d;
                break;
              case "path":
                o.path = d;
                break;
              case "max-age":
                d && XR.test(d) && (o.maxAge = Number(d));
                break;
              case "expires":
                if (!d) break;
                let f = new Date(d);
                Number.isFinite(f.valueOf()) && (o.expires = f);
                break;
              case "priority":
                if (!d) break;
                let h = d.toLowerCase();
                (h === "low" || h === "medium" || h === "high") && (o.priority = h);
                break;
              case "samesite":
                if (!d) break;
                let v = d.toLowerCase();
                (v === "lax" || v === "strict" || v === "none") && (o.sameSite = v);
                break;
            }
            l = s + 1;
          }
          return o;
        }
        function Yp(e3, t, r) {
          let n = e3.indexOf(";", t);
          return n === -1 ? r : n;
        }
        function qp(e3, t, r) {
          let n = e3.indexOf("=", t);
          return n < r ? n : -1;
        }
        function ia(e3, t, r) {
          let n = t, a = r;
          do {
            let i = e3.charCodeAt(n);
            if (i !== 32 && i !== 9) break;
          } while (++n < a);
          for (; a > n; ) {
            let i = e3.charCodeAt(a - 1);
            if (i !== 32 && i !== 9) break;
            a--;
          }
          return e3.slice(n, a);
        }
        function K2(e3) {
          if (e3.indexOf("%") === -1) return e3;
          try {
            return decodeURIComponent(e3);
          } catch {
            return e3;
          }
        }
        function rS(e3) {
          return ZR.call(e3) === "[object Date]";
        }
      });
      Z2 = wr((kN, Pl) => {
        "use strict";
        var bc = { decodeValues: true, map: false, silent: false };
        function Gp(e3) {
          return typeof e3 != "string" || e3 in {};
        }
        function Kp() {
          return /* @__PURE__ */ Object.create(null);
        }
        function Qp(e3) {
          return typeof e3 == "string" && !!e3.trim();
        }
        function Xp(e3, t) {
          var r = e3.split(";").filter(Qp), n = r.shift(), a = nS(n), i = a.name, o = a.value;
          if (t = t ? Object.assign({}, bc, t) : bc, Gp(i)) return null;
          try {
            o = t.decodeValues ? decodeURIComponent(o) : o;
          } catch (s) {
            console.error("set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.", s);
          }
          var l = Kp();
          return l.name = i, l.value = o, r.forEach(function(s) {
            var u = s.split("="), c = u.shift().trimLeft().toLowerCase();
            if (!Gp(c)) {
              var d = u.join("=");
              if (c === "expires") l.expires = new Date(d);
              else if (c === "max-age") {
                var f = parseInt(d, 10);
                Number.isNaN(f) || (l.maxAge = f);
              } else c === "secure" ? l.secure = true : c === "httponly" ? l.httpOnly = true : c === "samesite" ? l.sameSite = d : c === "partitioned" ? l.partitioned = true : c && (l[c] = d);
            }
          }), l;
        }
        function nS(e3) {
          var t = "", r = "", n = e3.split("=");
          return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e3, { name: t, value: r };
        }
        function X2(e3, t) {
          if (t = t ? Object.assign({}, bc, t) : bc, !e3) return t.map ? Kp() : [];
          if (e3.headers) if (typeof e3.headers.getSetCookie == "function") e3 = e3.headers.getSetCookie();
          else if (e3.headers["set-cookie"]) e3 = e3.headers["set-cookie"];
          else {
            var r = e3.headers[Object.keys(e3.headers).find(function(a) {
              return a.toLowerCase() === "set-cookie";
            })];
            !r && e3.headers.cookie && !t.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e3 = r;
          }
          if (Array.isArray(e3) || (e3 = [e3]), t.map) {
            var n = Kp();
            return e3.filter(Qp).reduce(function(a, i) {
              var o = Xp(i, t);
              return o && !Gp(o.name) && (a[o.name] = o), a;
            }, n);
          } else return e3.filter(Qp).map(function(a) {
            return Xp(a, t);
          }).filter(Boolean);
        }
        function aS(e3) {
          if (Array.isArray(e3)) return e3;
          if (typeof e3 != "string") return [];
          var t = [], r = 0, n, a, i, o, l;
          function s() {
            for (; r < e3.length && /\s/.test(e3.charAt(r)); ) r += 1;
            return r < e3.length;
          }
          function u() {
            return a = e3.charAt(r), a !== "=" && a !== ";" && a !== ",";
          }
          for (; r < e3.length; ) {
            for (n = r, l = false; s(); ) if (a = e3.charAt(r), a === ",") {
              for (i = r, r += 1, s(), o = r; r < e3.length && u(); ) r += 1;
              r < e3.length && e3.charAt(r) === "=" ? (l = true, r = o, t.push(e3.substring(n, i)), n = r) : r = i + 1;
            } else r += 1;
            (!l || r >= e3.length) && t.push(e3.substring(n, e3.length));
          }
          return t;
        }
        Pl.exports = X2;
        Pl.exports.parse = X2;
        Pl.exports.parseString = Xp;
        Pl.exports.splitCookiesString = aS;
      });
      _M = O(ee());
      TM = O(we());
      AM = O(ol());
      FM = O(uy());
      z4 = {};
      Dm(z4, { Await: () => Gw, BrowserRouter: () => T2, Form: () => vc, HashRouter: () => A2, HydratedRouter: () => O4, IDLE_BLOCKER: () => pn, IDLE_FETCHER: () => wl, IDLE_NAVIGATION: () => $i, Link: () => Xi, Links: () => C2, MemoryRouter: () => ec, Meta: () => D2, NavLink: () => Nl, Navigate: () => qw, NavigationType: () => rp, Outlet: () => tc, PrefetchPageLinks: () => gc, Route: () => Dl, Router: () => En, RouterContextProvider: () => mr, RouterProvider: () => s0, Routes: () => rc, Scripts: () => zp, ScrollRestoration: () => jp, ServerRouter: () => c4, StaticRouter: () => U2, StaticRouterProvider: () => Ml, UNSAFE_AwaitContextProvider: () => Mw, UNSAFE_DataRouterContext: () => Mr, UNSAFE_DataRouterStateContext: () => Wr, UNSAFE_ErrorResponseImpl: () => it, UNSAFE_FetchersContext: () => Gi, UNSAFE_FrameworkContext: () => vr, UNSAFE_LocationContext: () => na, UNSAFE_NavigationContext: () => ht, UNSAFE_RSCDefaultRootErrorBoundary: () => P4, UNSAFE_RemixErrorBoundary: () => Qi, UNSAFE_RouteContext: () => Ot, UNSAFE_ServerMode: () => a0, UNSAFE_SingleFetchRedirectSymbol: () => Nr, UNSAFE_ViewTransitionContext: () => qi, UNSAFE_WithComponentProps: () => Zw, UNSAFE_WithErrorBoundaryProps: () => r2, UNSAFE_WithHydrateFallbackProps: () => e2, UNSAFE_createBrowserHistory: () => Wi, UNSAFE_createClientRoutes: () => Ba, UNSAFE_createClientRoutesWithHMRRevalidationOptOut: () => cc, UNSAFE_createHashHistory: () => Wu, UNSAFE_createMemoryHistory: () => Vu, UNSAFE_createRouter: () => za, UNSAFE_decodeViaTurboStream: () => Ha, UNSAFE_getHydrationData: () => Nc, UNSAFE_getPatchRoutesOnNavigationFunction: () => fc, UNSAFE_getTurboStreamSingleFetchDataStrategy: () => sc, UNSAFE_hydrationRouteProperties: () => Ua, UNSAFE_invariant: () => q, UNSAFE_mapRouteProperties: () => kn, UNSAFE_shouldHydrateRouteLoader: () => aa, UNSAFE_useFogOFWarDiscovery: () => hc, UNSAFE_useScrollRestoration: () => Vp, UNSAFE_withComponentProps: () => nc, UNSAFE_withErrorBoundaryProps: () => ic, UNSAFE_withHydrateFallbackProps: () => ac, createBrowserRouter: () => L2, createContext: () => Yu, createCookie: () => Sc, createCookieSessionStorage: () => C4, createHashRouter: () => P2, createMemoryRouter: () => Ju, createMemorySessionStorage: () => D4, createPath: () => je, createRequestHandler: () => E4, createRoutesFromChildren: () => Vi, createRoutesFromElements: () => Kw, createRoutesStub: () => d4, createSearchParams: () => pl, createSession: () => Dc, createSessionStorage: () => l0, createStaticHandler: () => B2, createStaticRouter: () => Ll, data: () => op, generatePath: () => Zy, href: () => N4, isCookie: () => Cc, isRouteErrorResponse: () => Ue, isSession: () => R4, matchPath: () => $a, matchRoutes: () => Yi, parsePath: () => St, redirect: () => Oa, redirectDocument: () => Ku, renderMatches: () => Qw, replace: () => Qu, resolvePath: () => qu, unstable_HistoryRouter: () => Ip, unstable_RSCStaticRouter: () => A4, unstable_routeRSCServerRequest: () => T4, unstable_setDevServerHooks: () => v4, unstable_usePrompt: () => j2, unstable_useRoute: () => Vw, unstable_useRouterState: () => Ww, useActionData: () => Sl, useAsyncError: () => Hw, useAsyncValue: () => kp, useBeforeUnload: () => I2, useBlocker: () => Ep, useFetcher: () => O2, useFetchers: () => z2, useFormAction: () => Bp, useHref: () => gp, useInRouterContext: () => xn, useLinkClickHandler: () => Hp, useLoaderData: () => Rl, useLocation: () => qe, useMatch: () => _w, useMatches: () => El, useNavigate: () => bn, useNavigation: () => bp, useNavigationType: () => Pw, useOutlet: () => vp, useOutletContext: () => $w, useParams: () => kl, useResolvedPath: () => Ia, useRevalidator: () => jw, useRouteError: () => ja, useRouteLoaderData: () => Uw, useRoutes: () => yp, useSearchParams: () => $2, useSubmit: () => wc, useViewTransitionState: () => Wp });
      $t = O(ee(), 1);
      U = O(ee(), 1);
      H = O(ee(), 1);
      hr = O(ee(), 1);
      nt = O(ee(), 1);
      G = O(ee(), 1);
      b2 = O(ee(), 1);
      Jn = O(ee(), 1);
      Zh = O(ee(), 1);
      z = O(ee(), 1);
      fr = O(ee(), 1);
      Vy = (e3) => {
        throw TypeError(e3);
      };
      Wy = (e3, t, r) => t.has(e3) || Vy("Cannot " + r);
      dr = (e3, t, r) => (Wy(e3, t, "read from private field"), r ? r.call(e3) : t.get(e3));
      ul = (e3, t, r) => t.has(e3) ? Vy("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e3) : t.set(e3, r);
      Hr = (e3, t, r, n) => (Wy(e3, t, "write to private field"), n ? n.call(e3, r) : t.set(e3, r), r);
      gl = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
      vl = /^[\\/]{2}/;
      rp = ((e3) => (e3.Pop = "POP", e3.Push = "PUSH", e3.Replace = "REPLACE", e3))(rp || {});
      cy = "popstate";
      mr = class {
        constructor(e3) {
          if (ul(this, cl, /* @__PURE__ */ new Map()), e3) for (let [t, r] of e3) this.set(t, r);
        }
        get(e3) {
          if (dr(this, cl).has(e3)) return dr(this, cl).get(e3);
          if (e3.defaultValue !== void 0) return e3.defaultValue;
          throw new Error("No value found for context");
        }
        set(e3, t) {
          dr(this, cl).set(e3, t);
        }
      };
      cl = /* @__PURE__ */ new WeakMap();
      Vk = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      Yk = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "middleware", "children"]);
      Qk = /^:[\w-]+$/;
      Xk = 3;
      Zk = 2;
      Jk = 1;
      eE = 10;
      tE = -2;
      hy = (e3) => e3 === "*";
      ap = (e3) => gl.test(e3);
      ip = (e3) => e3.replace(/[\\/]{2,}/g, "/");
      er = (e3) => ip(e3.join("/"));
      oE = (e3) => ji(e3).replace(/^\/*/, "/");
      lE = (e3) => !e3 || e3 === "?" ? "" : e3.startsWith("?") ? e3 : "?" + e3;
      sE = (e3) => !e3 || e3 === "#" ? "" : e3.startsWith("#") ? e3 : "#" + e3;
      uE = class {
        constructor(e3, t) {
          this.type = "DataWithResponseInit", this.data = e3, this.init = t || null;
        }
      };
      Oa = (e3, t = 302) => {
        let r = t;
        typeof r == "number" ? r = { status: r } : typeof r.status > "u" && (r.status = 302);
        let n = new Headers(r.headers);
        return n.set("Location", e3), new Response(null, { ...r, headers: n });
      };
      Ku = (e3, t) => {
        let r = Oa(e3, t);
        return r.headers.set("X-Remix-Reload-Document", "true"), r;
      };
      Qu = (e3, t) => {
        let r = Oa(e3, t);
        return r.headers.set("X-Remix-Replace", "true"), r;
      };
      lp = ["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"];
      it = class {
        constructor(e3, t, r, n = false) {
          this.status = e3, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
        }
      };
      rw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
      ea = /* @__PURE__ */ Symbol("Uninstrumented");
      dE = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
      vy = new URL("http://localhost");
      uw = ["POST", "PUT", "PATCH", "DELETE"];
      pE = new Set(uw);
      mE = ["GET", ...uw];
      gE = new Set(mE);
      cw = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      vE = /* @__PURE__ */ new Set([307, 308]);
      $i = { state: "idle", location: void 0, matches: void 0, historyAction: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
      wl = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
      pn = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 };
      dw = (e3) => ({ hasErrorBoundary: !!e3.hasErrorBoundary });
      fw = "remix-router-transitions";
      hw = /* @__PURE__ */ Symbol("ResetLoaderData");
      yE = class {
        constructor(e3) {
          ul(this, Ta), ul(this, _i), ul(this, Zn), ul(this, Ti), Hr(this, Ta, e3), Hr(this, _i, dl(e3));
        }
        get stableRoutes() {
          return dr(this, Ta);
        }
        get activeRoutes() {
          return dr(this, Zn) ?? dr(this, Ta);
        }
        get branches() {
          return dr(this, Ti) ?? dr(this, _i);
        }
        get hasHMRRoutes() {
          return dr(this, Zn) != null;
        }
        setRoutes(e3) {
          Hr(this, Ta, e3), Hr(this, _i, dl(e3));
        }
        setHmrRoutes(e3) {
          Hr(this, Zn, e3), Hr(this, Ti, dl(e3));
        }
        commitHmrRoutes() {
          dr(this, Zn) && (Hr(this, Ta, dr(this, Zn)), Hr(this, _i, dr(this, Ti)), Hr(this, Zn, void 0), Hr(this, Ti, void 0));
        }
      };
      Ta = /* @__PURE__ */ new WeakMap();
      _i = /* @__PURE__ */ new WeakMap();
      Zn = /* @__PURE__ */ new WeakMap();
      Ti = /* @__PURE__ */ new WeakMap();
      Ey = /* @__PURE__ */ new WeakMap();
      fp = ({ key: e3, route: t, manifest: r, mapRouteProperties: n }) => {
        let a = r[t.id];
        if (q(a, "No route found in manifest"), !a.lazy || typeof a.lazy != "object") return;
        let i = a.lazy[e3];
        if (!i) return;
        let o = Ey.get(a);
        o || (o = {}, Ey.set(a, o));
        let l = o[e3];
        if (l) return l;
        let s = (async () => {
          let u = Wk(e3), d = a[e3] !== void 0 && e3 !== "hasErrorBoundary";
          if (u) ke(!u, "Route property " + e3 + " is not a supported lazy route property. This property will be ignored."), o[e3] = Promise.resolve();
          else if (d) ke(false, `Route "${a.id}" has a static property "${e3}" defined. The lazy property will be ignored.`);
          else {
            let f = await i();
            f != null && (Object.assign(a, { [e3]: f }), Object.assign(a, n(a)));
          }
          typeof a.lazy == "object" && (a.lazy[e3] = void 0, Object.values(a.lazy).every((f) => f === void 0) && (a.lazy = void 0));
        })();
        return o[e3] = s, s;
      };
      Ry = /* @__PURE__ */ new WeakMap();
      CE = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"];
      Mr = $t.createContext(null);
      Mr.displayName = "DataRouter";
      Wr = $t.createContext(null);
      Wr.displayName = "DataRouterState";
      bl = $t.createContext(false);
      qi = $t.createContext({ isTransitioning: false });
      qi.displayName = "ViewTransition";
      Gi = $t.createContext(/* @__PURE__ */ new Map());
      Gi.displayName = "Fetchers";
      Hi = $t.createContext(null);
      Hi.displayName = "Await";
      Mw = (e3) => $t.createElement(Hi.Provider, e3);
      ht = $t.createContext(null);
      ht.displayName = "Navigation";
      na = $t.createContext(null);
      na.displayName = "Location";
      Ot = $t.createContext({ outlet: null, matches: [], isDataRoute: false });
      Ot.displayName = "Route";
      mp = $t.createContext(null);
      mp.displayName = "RouteError";
      Vr = true;
      Lw = "REACT_ROUTER_ERROR";
      TE = "REDIRECT";
      AE = "ROUTE_ERROR_RESPONSE";
      Tw = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
      Fw = U.createContext(null);
      OE = U.createElement($E, null);
      zw = class extends U.Component {
        constructor(e3) {
          super(e3), this.state = { location: e3.location, revalidation: e3.revalidation, error: e3.error };
        }
        static getDerivedStateFromError(e3) {
          return { error: e3 };
        }
        static getDerivedStateFromProps(e3, t) {
          return t.location !== e3.location || t.revalidation !== "idle" && e3.revalidation === "idle" ? { error: e3.error, location: e3.location, revalidation: e3.revalidation } : { error: e3.error !== void 0 ? e3.error : t.error, location: t.location, revalidation: e3.revalidation || t.revalidation };
        }
        componentDidCatch(e3, t) {
          this.props.onError ? this.props.onError(e3, t) : console.error("React Router caught the following error during render", e3);
        }
        render() {
          let e3 = this.state.error;
          if (this.context && typeof e3 == "object" && e3 && "digest" in e3 && typeof e3.digest == "string") {
            let r = Zu(e3.digest);
            r && (e3 = r);
          }
          let t = e3 !== void 0 ? U.createElement(Ot.Provider, { value: this.props.routeContext }, U.createElement(mp.Provider, { value: e3, children: this.props.component })) : this.props.children;
          return this.context ? U.createElement(zE, { error: e3 }, t) : t;
        }
      };
      zw.contextType = bl;
      zh = /* @__PURE__ */ new WeakMap();
      HE = 0;
      Ay = {};
      $y = {};
      VE = "useOptimistic";
      Oy = H[VE];
      WE = () => {
      };
      Ua = ["HydrateFallback", "hydrateFallbackElement"];
      qE = class {
        constructor() {
          this.status = "pending", this.promise = new Promise((e3, t) => {
            this.resolve = (r) => {
              this.status === "pending" && (this.status = "resolved", e3(r));
            }, this.reject = (r) => {
              this.status === "pending" && (this.status = "rejected", t(r));
            };
          });
        }
      };
      GE = H.memo(Yw);
      KE = class extends H.Component {
        constructor(e3) {
          super(e3), this.state = { error: null };
        }
        static getDerivedStateFromError(e3) {
          return { error: e3 };
        }
        componentDidCatch(e3, t) {
          this.props.onError ? this.props.onError(e3, t) : console.error("<Await> caught the following error during render", e3, t);
        }
        render() {
          let { children: e3, errorElement: t, resolve: r } = this.props, n = null, a = 0;
          if (!(r instanceof Promise)) a = 1, n = Promise.resolve(), Object.defineProperty(n, "_tracked", { get: () => true }), Object.defineProperty(n, "_data", { get: () => r });
          else if (this.state.error) {
            a = 2;
            let i = this.state.error;
            n = Promise.reject().catch(() => {
            }), Object.defineProperty(n, "_tracked", { get: () => true }), Object.defineProperty(n, "_error", { get: () => i });
          } else r._tracked ? (n = r, a = "_error" in n ? 2 : "_data" in n ? 1 : 0) : (a = 0, Object.defineProperty(r, "_tracked", { get: () => true }), n = r.then((i) => Object.defineProperty(r, "_data", { get: () => i }), (i) => {
            this.props.onError?.(i), Object.defineProperty(r, "_error", { get: () => i });
          }));
          if (a === 2 && !t) throw n._error;
          if (a === 2) return H.createElement(Hi.Provider, { value: n, children: t });
          if (a === 1) return H.createElement(Hi.Provider, { value: n, children: e3 });
          throw n;
        }
      };
      Kw = Vi;
      Fu = "get";
      $u = "application/x-www-form-urlencoded";
      Lu = null;
      aR = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
      n2 = -1;
      Rp = -2;
      Sp = -3;
      Cp = -4;
      Uu = -5;
      Dp = -6;
      Np = -7;
      a2 = "B";
      i2 = "D";
      zi = "E";
      Gh = "M";
      o2 = "N";
      Ii = "P";
      l2 = "R";
      Kh = "S";
      s2 = "Y";
      u2 = "U";
      Qh = "Z";
      c2 = class {
        constructor() {
          this.promise = new Promise((e3, t) => {
            this.resolve = e3, this.reject = t;
          });
        }
      };
      lR = 1;
      jh = () => Date.now();
      sR = () => new Promise((e3) => setTimeout(e3, 0));
      cR = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
      Pu = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
      mR = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" };
      gR = /[&><\u2028\u2029]/g;
      Nr = /* @__PURE__ */ Symbol("SingleFetchRedirect");
      h2 = class extends Error {
      };
      lc = 202;
      Mp = /* @__PURE__ */ new Set([100, 101, 204, 205]);
      zu = /* @__PURE__ */ new Set();
      TR = 1e3;
      Hu = /* @__PURE__ */ new Set();
      dc = 7680;
      Hh = "react-router-manifest-version";
      vr = G.createContext(void 0);
      vr.displayName = "FrameworkContext";
      By = "data-react-router-critical-css";
      Bu = false;
      Qi = class extends nt.Component {
        constructor(e3) {
          super(e3), this.state = { error: e3.error || null, location: e3.location };
        }
        static getDerivedStateFromError(e3) {
          return { error: e3 };
        }
        static getDerivedStateFromProps(e3, t) {
          return t.location !== e3.location ? { error: e3.error || null, location: e3.location } : { error: e3.error || t.error, location: t.location };
        }
        render() {
          return this.state.error ? nt.createElement(M2, { error: this.state.error, isOutsideRemixApp: true }) : this.props.children;
        }
      };
      BR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
      try {
        BR && (window.__reactRouterVersion = "7.18.3");
      } catch {
      }
      Ip.displayName = "unstable_HistoryRouter";
      Xi = z.forwardRef(function({ onClick: t, discover: r = "render", prefetch: n = "none", relative: a, reloadDocument: i, replace: o, mask: l, state: s, target: u, to: c, preventScrollReset: d, viewTransition: f, defaultShouldRevalidate: h, ...v }, y) {
        let { basename: m, navigator: g, useTransitions: p } = z.useContext(ht), w = typeof c == "string" && gl.test(c), b = nw(c, m);
        c = b.to;
        let E = gp(c, { relative: a }), S = qe(), R = null;
        if (l) {
          let ne = yl(l, [], S.mask ? S.mask.pathname : "/", true);
          m !== "/" && (ne.pathname = ne.pathname === "/" ? m : er([m, ne.pathname])), R = g.createHref(ne);
        }
        let [x, M, P] = OR(n, v), A = Hp(c, { replace: o, mask: l, state: s, target: u, preventScrollReset: d, relative: a, viewTransition: f, defaultShouldRevalidate: h, useTransitions: p });
        function L(ne) {
          t && t(ne), ne.defaultPrevented || A(ne);
        }
        let B = !(b.isExternal || i), j = z.createElement("a", { ...v, ...P, href: (B ? R : void 0) || b.absoluteURL || E, onClick: B ? L : t, ref: HR(y, M), target: u, "data-discover": !w && r === "render" ? "true" : void 0 });
        return x && !w ? z.createElement(z.Fragment, null, j, z.createElement(gc, { page: E })) : j;
      });
      Xi.displayName = "Link";
      Nl = z.forwardRef(function({ "aria-current": t = "page", caseSensitive: r = false, className: n = "", end: a = false, style: i, to: o, viewTransition: l, children: s, ...u }, c) {
        let d = Ia(o, { relative: u.relative }), f = qe(), h = z.useContext(Wr), { navigator: v, basename: y } = z.useContext(ht), m = h != null && Wp(d) && l === true, g = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname, p = f.pathname, w = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
        r || (p = p.toLowerCase(), w = w ? w.toLowerCase() : null, g = g.toLowerCase()), w && y && (w = Qe(w, y) || w);
        let b = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length, E = p === g || !a && p.startsWith(g) && p.charAt(b) === "/", S = w != null && (w === g || !a && w.startsWith(g) && w.charAt(g.length) === "/"), R = { isActive: E, isPending: S, isTransitioning: m }, x = E ? t : void 0, M;
        typeof n == "function" ? M = n(R) : M = [n, E ? "active" : null, S ? "pending" : null, m ? "transitioning" : null].filter(Boolean).join(" ");
        let P = typeof i == "function" ? i(R) : i;
        return z.createElement(Xi, { ...u, "aria-current": x, className: M, ref: c, style: P, to: o, viewTransition: l }, typeof s == "function" ? s(R) : s);
      });
      Nl.displayName = "NavLink";
      vc = z.forwardRef(({ discover: e3 = "render", fetcherKey: t, navigate: r, reloadDocument: n, replace: a, state: i, method: o = Fu, action: l, onSubmit: s, relative: u, preventScrollReset: c, viewTransition: d, defaultShouldRevalidate: f, ...h }, v) => {
        let { useTransitions: y } = z.useContext(ht), m = wc(), g = Bp(l, { relative: u }), p = o.toLowerCase() === "get" ? "get" : "post", w = typeof l == "string" && gl.test(l);
        return z.createElement("form", { ref: v, method: p, action: g, onSubmit: n ? s : (E) => {
          if (s && s(E), E.defaultPrevented) return;
          E.preventDefault();
          let S = E.nativeEvent.submitter, R = S?.getAttribute("formmethod") || o, x = () => m(S || E.currentTarget, { fetcherKey: t, method: R, navigate: r, replace: a, state: i, relative: u, preventScrollReset: c, viewTransition: d, defaultShouldRevalidate: f });
          y && r !== false ? z.startTransition(() => x()) : x();
        }, ...h, "data-discover": !w && e3 === "render" ? "true" : void 0 });
      });
      vc.displayName = "Form";
      jp.displayName = "ScrollRestoration";
      WR = 0;
      YR = () => `__${String(++WR)}__`;
      ep = "react-router-scroll-positions";
      Au = {};
      Lr = O(ee(), 1);
      Ji = O(ee(), 1);
      Rc = O(Q2(), 1);
      x4 = O(Z2(), 1);
      Zi = O(ee(), 1);
      pt = O(ee(), 1);
      n0 = new TextEncoder();
      iS = async (e3, t) => {
        let r = n0.encode(e3), n = await h4(t, ["sign"]), a = await crypto.subtle.sign("HMAC", n, r), i = btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/, "");
        return e3 + "." + i;
      };
      oS = async (e3, t) => {
        let r = e3.lastIndexOf("."), n = e3.slice(0, r), a = e3.slice(r + 1), i = n0.encode(n), o = await h4(t, ["verify"]);
        try {
          let l = lS(atob(a));
          return await crypto.subtle.verify("HMAC", o, l, i) ? n : false;
        } catch {
          return false;
        }
      };
      h4 = async (e3, t) => crypto.subtle.importKey("raw", n0.encode(e3), { name: "HMAC", hash: "SHA-256" }, false, t);
      Sc = (e3, t = {}) => {
        let { secrets: r = [], ...n } = { path: "/", sameSite: "lax", ...t };
        return hS(e3, n.expires), { get name() {
          return e3;
        }, get isSigned() {
          return r.length > 0;
        }, get expires() {
          return typeof n.maxAge < "u" ? new Date(Date.now() + n.maxAge * 1e3) : n.expires;
        }, async parse(a, i) {
          if (!a) return null;
          let o = (0, Rc.parse)(a, { ...n, ...i });
          if (e3 in o) {
            let l = o[e3];
            return typeof l == "string" && l !== "" ? await uS(l, r) : "";
          } else return null;
        }, async serialize(a, i) {
          return (0, Rc.serialize)(e3, a === "" ? "" : await sS(a, r), { ...n, ...i });
        } };
      };
      Cc = (e3) => e3 != null && typeof e3.name == "string" && typeof e3.isSigned == "boolean" && typeof e3.parse == "function" && typeof e3.serialize == "function";
      a0 = ((e3) => (e3.Development = "development", e3.Production = "production", e3.Test = "test", e3))(a0 || {});
      g4 = "__reactRouterDevServerHooks";
      k4 = /* @__PURE__ */ new Set([...Mp, 304]);
      E4 = (e3, t) => {
        let r, n, a, i, o;
        return async function(s, u) {
          if (r = typeof e3 == "function" ? await e3() : e3, typeof e3 == "function") {
            let c = a4(r, t);
            n = c.serverMode, a = c.staticHandler, i = c.errorHandler, o = c.requestHandler;
          } else if (!n || !a || !i || !o) {
            let c = a4(r, t);
            n = c.serverMode, a = c.staticHandler, i = c.errorHandler, o = c.requestHandler;
          }
          return o(s, u);
        };
      };
      Dc = (e3 = {}, t = "") => {
        let r = new Map(Object.entries(e3));
        return { get id() {
          return t;
        }, get data() {
          return Object.fromEntries(r);
        }, has(n) {
          return r.has(n) || r.has(Jp(n));
        }, get(n) {
          if (r.has(n)) return r.get(n);
          let a = Jp(n);
          if (r.has(a)) {
            let i = r.get(a);
            return r.delete(a), i;
          }
        }, set(n, a) {
          r.set(n, a);
        }, flash(n, a) {
          r.set(Jp(n), a);
        }, unset(n) {
          r.delete(n);
        } };
      };
      R4 = (e3) => e3 != null && typeof e3.id == "string" && typeof e3.data < "u" && typeof e3.has == "function" && typeof e3.get == "function" && typeof e3.set == "function" && typeof e3.flash == "function" && typeof e3.unset == "function";
      r0 = new TextEncoder();
      i4 = "</body></html>";
      M4 = class extends pt.default.Component {
        constructor(e3) {
          super(e3), this.state = { error: null, location: e3.location };
        }
        static getDerivedStateFromError(e3) {
          return { error: e3 };
        }
        static getDerivedStateFromProps(e3, t) {
          return t.location !== e3.location ? { error: null, location: e3.location } : { error: t.error, location: t.location };
        }
        render() {
          return this.state.error ? pt.default.createElement(L4, { error: this.state.error, renderAppShell: true }) : this.props.children;
        }
      };
      FS = () => null;
      s4 = "/__manifest";
      $S = "use";
      u4 = Zi[$S];
      F4 = O(ee(), 1);
      $4 = O(ol(), 1);
      ot = O(ee(), 1);
      eo = O(ee(), 1);
      HS = O(ol(), 1);
      K = null;
      Fl = null;
      MN = Yu();
      G5 = {};
      Dm(G5, { BarChart: () => k5, Bullets: () => d5, Button: () => p0, ButtonLink: () => Qb, Callout: () => g5, Caption: () => p5, ChoiceRow: () => $D, CloseButton: () => td, Closing: () => w5, CompareColumns: () => WD, CopyButton: () => _D, DataTable: () => x5, DotChart: () => e9, DsButton: () => g0, DsIconButton: () => v0, Facts: () => ad, Figure: () => h5, FileButton: () => Dn, FileCard: () => HD, FileGround: () => UD, FileRouter: () => Z9, Group: () => a5, Header: () => n5, Heading: () => u5, ImageFrame: () => $5, KeySentence: () => f5, LineChart: () => KD, Link: () => Xi, LiveRegion: () => P5, NavLink: () => Nl, NumberedList: () => v5, Paragraph: () => c5, PhotoCard: () => R5, PhotoCards: () => E5, PhotoViewer: () => rd, Photos: () => im, ProductCard: () => U9, ProductCarousel: () => V9, ProductDetail: () => z9, ProductGrid: () => B9, ProductImage: () => Y9, ProductModal: () => I9, ProductTable: () => G9, ProductTile: () => fm, RangeChart: () => ZD, RecommendationCard: () => Q9, RecommendationGrid: () => K9, Reveal: () => L9, Route: () => Dl, Routes: () => rc, Row: () => l5, Rows: () => o5, Rule: () => m5, Slider: () => zD, Sparklines: () => XD, StackedBar: () => JD, StripArrows: () => Jb, Table: () => y5, Text: () => s5, TextField: () => OD, TextLink: () => am, Wordmark: () => F5, liveTarget: () => Bb, productBadge: () => O5, stripTakeoverEvents: () => B0, useFileContext: () => Gx, useLiveDetail: () => M9, useLiveItem: () => S9, useLiveItems: () => R9, useLiveValue: () => E9, useLocalState: () => n8, useLocation: () => qe, useNavigate: () => bn, useWakeAgent: () => Kx });
      hm = O(ee(), 1);
      Xe = O(ee(), 1);
      jN = O(ee(), 1);
      d0 = O(we(), 1);
      J4 = O(ee(), 1);
      ex = O(we(), 1);
      m0 = O(ee(), 1);
      Il = O(we(), 1);
      BS = (e3) => {
        let t = WS(e3), { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e3;
        return { getClassGroupId: (a) => {
          let i = a.split("-");
          return i[0] === "" && i.length !== 1 && i.shift(), G4(i, t) || VS(a);
        }, getConflictingClassGroupIds: (a, i) => {
          let o = r[a] || [];
          return i && n[a] ? [...o, ...n[a]] : o;
        } };
      };
      G4 = (e3, t) => {
        if (e3.length === 0) return t.classGroupId;
        let r = e3[0], n = t.nextPart.get(r), a = n ? G4(e3.slice(1), n) : void 0;
        if (a) return a;
        if (t.validators.length === 0) return;
        let i = e3.join("-");
        return t.validators.find(({ validator: o }) => o(i))?.classGroupId;
      };
      I4 = /^\[(.+)\]$/;
      VS = (e3) => {
        if (I4.test(e3)) {
          let t = I4.exec(e3)[1], r = t?.substring(0, t.indexOf(":"));
          if (r) return "arbitrary.." + r;
        }
      };
      WS = (e3) => {
        let { theme: t, prefix: r } = e3, n = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
        return qS(Object.entries(e3.classGroups), r).forEach(([a, i]) => {
          c0(i, n, a, t);
        }), n;
      };
      c0 = (e3, t, r, n) => {
        e3.forEach((a) => {
          if (typeof a == "string") {
            let i = a === "" ? t : j4(t, a);
            i.classGroupId = r;
            return;
          }
          if (typeof a == "function") {
            if (YS(a)) {
              c0(a(n), t, r, n);
              return;
            }
            t.validators.push({ validator: a, classGroupId: r });
            return;
          }
          Object.entries(a).forEach(([i, o]) => {
            c0(o, j4(t, i), r, n);
          });
        });
      };
      j4 = (e3, t) => {
        let r = e3;
        return t.split("-").forEach((n) => {
          r.nextPart.has(n) || r.nextPart.set(n, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), r = r.nextPart.get(n);
        }), r;
      };
      YS = (e3) => e3.isThemeGetter;
      qS = (e3, t) => t ? e3.map(([r, n]) => {
        let a = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, l]) => [t + o, l])) : i);
        return [r, a];
      }) : e3;
      GS = (e3) => {
        if (e3 < 1) return { get: () => {
        }, set: () => {
        } };
        let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = (i, o) => {
          r.set(i, o), t++, t > e3 && (t = 0, n = r, r = /* @__PURE__ */ new Map());
        };
        return { get(i) {
          let o = r.get(i);
          if (o !== void 0) return o;
          if ((o = n.get(i)) !== void 0) return a(i, o), o;
        }, set(i, o) {
          r.has(i) ? r.set(i, o) : a(i, o);
        } };
      };
      KS = (e3) => {
        let { separator: t, experimentalParseClassName: r } = e3, n = t.length === 1, a = t[0], i = t.length, o = (l) => {
          let s = [], u = 0, c = 0, d;
          for (let m = 0; m < l.length; m++) {
            let g = l[m];
            if (u === 0) {
              if (g === a && (n || l.slice(m, m + i) === t)) {
                s.push(l.slice(c, m)), c = m + i;
                continue;
              }
              if (g === "/") {
                d = m;
                continue;
              }
            }
            g === "[" ? u++ : g === "]" && u--;
          }
          let f = s.length === 0 ? l : l.substring(c), h = f.startsWith("!"), v = h ? f.substring(1) : f, y = d && d > c ? d - c : void 0;
          return { modifiers: s, hasImportantModifier: h, baseClassName: v, maybePostfixModifierPosition: y };
        };
        return r ? (l) => r({ className: l, parseClassName: o }) : o;
      };
      QS = (e3) => {
        if (e3.length <= 1) return e3;
        let t = [], r = [];
        return e3.forEach((n) => {
          n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
        }), t.push(...r.sort()), t;
      };
      XS = (e3) => ({ cache: GS(e3.cacheSize), parseClassName: KS(e3), ...BS(e3) });
      ZS = /\s+/;
      JS = (e3, t) => {
        let { parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: a } = t, i = [], o = e3.trim().split(ZS), l = "";
        for (let s = o.length - 1; s >= 0; s -= 1) {
          let u = o[s], { modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h } = r(u), v = !!h, y = n(v ? f.substring(0, h) : f);
          if (!y) {
            if (!v) {
              l = u + (l.length > 0 ? " " + l : l);
              continue;
            }
            if (y = n(f), !y) {
              l = u + (l.length > 0 ? " " + l : l);
              continue;
            }
            v = false;
          }
          let m = QS(c).join(":"), g = d ? m + "!" : m, p = g + y;
          if (i.includes(p)) continue;
          i.push(p);
          let w = a(y, v);
          for (let b = 0; b < w.length; ++b) {
            let E = w[b];
            i.push(g + E);
          }
          l = u + (l.length > 0 ? " " + l : l);
        }
        return l;
      };
      K4 = (e3) => {
        if (typeof e3 == "string") return e3;
        let t, r = "";
        for (let n = 0; n < e3.length; n++) e3[n] && (t = K4(e3[n])) && (r && (r += " "), r += t);
        return r;
      };
      Me = (e3) => {
        let t = (r) => r[e3] || [];
        return t.isThemeGetter = true, t;
      };
      Q4 = /^\[(?:([a-z-]+):)?(.+)\]$/i;
      tC = /^\d+\/\d+$/;
      rC = /* @__PURE__ */ new Set(["px", "full", "screen"]);
      nC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
      aC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
      iC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
      oC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      lC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      Rn = (e3) => to(e3) || rC.has(e3) || tC.test(e3);
      oa = (e3) => ro(e3, "length", mC);
      to = (e3) => !!e3 && !Number.isNaN(Number(e3));
      u0 = (e3) => ro(e3, "number", to);
      $l = (e3) => !!e3 && Number.isInteger(Number(e3));
      sC = (e3) => e3.endsWith("%") && to(e3.slice(0, -1));
      se = (e3) => Q4.test(e3);
      la = (e3) => nC.test(e3);
      uC = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
      cC = (e3) => ro(e3, uC, X4);
      dC = (e3) => ro(e3, "position", X4);
      fC = /* @__PURE__ */ new Set(["image", "url"]);
      hC = (e3) => ro(e3, fC, vC);
      pC = (e3) => ro(e3, "", gC);
      Ol = () => true;
      ro = (e3, t, r) => {
        let n = Q4.exec(e3);
        return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : false;
      };
      mC = (e3) => aC.test(e3) && !iC.test(e3);
      X4 = () => false;
      gC = (e3) => oC.test(e3);
      vC = (e3) => lC.test(e3);
      H4 = () => {
        let e3 = Me("colors"), t = Me("spacing"), r = Me("blur"), n = Me("brightness"), a = Me("borderColor"), i = Me("borderRadius"), o = Me("borderSpacing"), l = Me("borderWidth"), s = Me("contrast"), u = Me("grayscale"), c = Me("hueRotate"), d = Me("invert"), f = Me("gap"), h = Me("gradientColorStops"), v = Me("gradientColorStopPositions"), y = Me("inset"), m = Me("margin"), g = Me("opacity"), p = Me("padding"), w = Me("saturate"), b = Me("scale"), E = Me("sepia"), S = Me("skew"), R = Me("space"), x = Me("translate"), M = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", se, t], L = () => [se, t], B = () => ["", Rn, oa], j = () => ["auto", to, se], ne = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Z = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Le = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ie = () => ["", "0", se], Ve = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Pe = () => [to, se];
        return { cacheSize: 500, separator: ":", theme: { colors: [Ol], spacing: [Rn, oa], blur: ["none", "", la, se], brightness: Pe(), borderColor: [e3], borderRadius: ["none", "", "full", la, se], borderSpacing: L(), borderWidth: B(), contrast: Pe(), grayscale: ie(), hueRotate: Pe(), invert: ie(), gap: L(), gradientColorStops: [e3], gradientColorStopPositions: [sC, oa], inset: A(), margin: A(), opacity: Pe(), padding: L(), saturate: Pe(), scale: Pe(), sepia: ie(), skew: Pe(), space: L(), translate: L() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", se] }], container: ["container"], columns: [{ columns: [la] }], "break-after": [{ "break-after": Ve() }], "break-before": [{ "break-before": Ve() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...ne(), se] }], overflow: [{ overflow: P() }], "overflow-x": [{ "overflow-x": P() }], "overflow-y": [{ "overflow-y": P() }], overscroll: [{ overscroll: M() }], "overscroll-x": [{ "overscroll-x": M() }], "overscroll-y": [{ "overscroll-y": M() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [y] }], "inset-x": [{ "inset-x": [y] }], "inset-y": [{ "inset-y": [y] }], start: [{ start: [y] }], end: [{ end: [y] }], top: [{ top: [y] }], right: [{ right: [y] }], bottom: [{ bottom: [y] }], left: [{ left: [y] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", $l, se] }], basis: [{ basis: A() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", se] }], grow: [{ grow: ie() }], shrink: [{ shrink: ie() }], order: [{ order: ["first", "last", "none", $l, se] }], "grid-cols": [{ "grid-cols": [Ol] }], "col-start-end": [{ col: ["auto", { span: ["full", $l, se] }, se] }], "col-start": [{ "col-start": j() }], "col-end": [{ "col-end": j() }], "grid-rows": [{ "grid-rows": [Ol] }], "row-start-end": [{ row: ["auto", { span: [$l, se] }, se] }], "row-start": [{ "row-start": j() }], "row-end": [{ "row-end": j() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", se] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", se] }], gap: [{ gap: [f] }], "gap-x": [{ "gap-x": [f] }], "gap-y": [{ "gap-y": [f] }], "justify-content": [{ justify: ["normal", ...Le()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...Le(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...Le(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [p] }], px: [{ px: [p] }], py: [{ py: [p] }], ps: [{ ps: [p] }], pe: [{ pe: [p] }], pt: [{ pt: [p] }], pr: [{ pr: [p] }], pb: [{ pb: [p] }], pl: [{ pl: [p] }], m: [{ m: [m] }], mx: [{ mx: [m] }], my: [{ my: [m] }], ms: [{ ms: [m] }], me: [{ me: [m] }], mt: [{ mt: [m] }], mr: [{ mr: [m] }], mb: [{ mb: [m] }], ml: [{ ml: [m] }], "space-x": [{ "space-x": [R] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [R] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", se, t] }], "min-w": [{ "min-w": [se, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [se, t, "none", "full", "min", "max", "fit", "prose", { screen: [la] }, la] }], h: [{ h: [se, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [se, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", la, oa] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", u0] }], "font-family": [{ font: [Ol] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", se] }], "line-clamp": [{ "line-clamp": ["none", to, u0] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Rn, se] }], "list-image": [{ "list-image": ["none", se] }], "list-style-type": [{ list: ["none", "disc", "decimal", se] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e3] }], "placeholder-opacity": [{ "placeholder-opacity": [g] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e3] }], "text-opacity": [{ "text-opacity": [g] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...Z(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", Rn, oa] }], "underline-offset": [{ "underline-offset": ["auto", Rn, se] }], "text-decoration-color": [{ decoration: [e3] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: L() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", se] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [g] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...ne(), dC] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", cC] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, hC] }], "bg-color": [{ bg: [e3] }], "gradient-from-pos": [{ from: [v] }], "gradient-via-pos": [{ via: [v] }], "gradient-to-pos": [{ to: [v] }], "gradient-from": [{ from: [h] }], "gradient-via": [{ via: [h] }], "gradient-to": [{ to: [h] }], rounded: [{ rounded: [i] }], "rounded-s": [{ "rounded-s": [i] }], "rounded-e": [{ "rounded-e": [i] }], "rounded-t": [{ "rounded-t": [i] }], "rounded-r": [{ "rounded-r": [i] }], "rounded-b": [{ "rounded-b": [i] }], "rounded-l": [{ "rounded-l": [i] }], "rounded-ss": [{ "rounded-ss": [i] }], "rounded-se": [{ "rounded-se": [i] }], "rounded-ee": [{ "rounded-ee": [i] }], "rounded-es": [{ "rounded-es": [i] }], "rounded-tl": [{ "rounded-tl": [i] }], "rounded-tr": [{ "rounded-tr": [i] }], "rounded-br": [{ "rounded-br": [i] }], "rounded-bl": [{ "rounded-bl": [i] }], "border-w": [{ border: [l] }], "border-w-x": [{ "border-x": [l] }], "border-w-y": [{ "border-y": [l] }], "border-w-s": [{ "border-s": [l] }], "border-w-e": [{ "border-e": [l] }], "border-w-t": [{ "border-t": [l] }], "border-w-r": [{ "border-r": [l] }], "border-w-b": [{ "border-b": [l] }], "border-w-l": [{ "border-l": [l] }], "border-opacity": [{ "border-opacity": [g] }], "border-style": [{ border: [...Z(), "hidden"] }], "divide-x": [{ "divide-x": [l] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [l] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [g] }], "divide-style": [{ divide: Z() }], "border-color": [{ border: [a] }], "border-color-x": [{ "border-x": [a] }], "border-color-y": [{ "border-y": [a] }], "border-color-s": [{ "border-s": [a] }], "border-color-e": [{ "border-e": [a] }], "border-color-t": [{ "border-t": [a] }], "border-color-r": [{ "border-r": [a] }], "border-color-b": [{ "border-b": [a] }], "border-color-l": [{ "border-l": [a] }], "divide-color": [{ divide: [a] }], "outline-style": [{ outline: ["", ...Z()] }], "outline-offset": [{ "outline-offset": [Rn, se] }], "outline-w": [{ outline: [Rn, oa] }], "outline-color": [{ outline: [e3] }], "ring-w": [{ ring: B() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e3] }], "ring-opacity": [{ "ring-opacity": [g] }], "ring-offset-w": [{ "ring-offset": [Rn, oa] }], "ring-offset-color": [{ "ring-offset": [e3] }], shadow: [{ shadow: ["", "inner", "none", la, pC] }], "shadow-color": [{ shadow: [Ol] }], opacity: [{ opacity: [g] }], "mix-blend": [{ "mix-blend": [...oe(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": oe() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [r] }], brightness: [{ brightness: [n] }], contrast: [{ contrast: [s] }], "drop-shadow": [{ "drop-shadow": ["", "none", la, se] }], grayscale: [{ grayscale: [u] }], "hue-rotate": [{ "hue-rotate": [c] }], invert: [{ invert: [d] }], saturate: [{ saturate: [w] }], sepia: [{ sepia: [E] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [r] }], "backdrop-brightness": [{ "backdrop-brightness": [n] }], "backdrop-contrast": [{ "backdrop-contrast": [s] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }], "backdrop-invert": [{ "backdrop-invert": [d] }], "backdrop-opacity": [{ "backdrop-opacity": [g] }], "backdrop-saturate": [{ "backdrop-saturate": [w] }], "backdrop-sepia": [{ "backdrop-sepia": [E] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [o] }], "border-spacing-x": [{ "border-spacing-x": [o] }], "border-spacing-y": [{ "border-spacing-y": [o] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", se] }], duration: [{ duration: Pe() }], ease: [{ ease: ["linear", "in", "out", "in-out", se] }], delay: [{ delay: Pe() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", se] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [b] }], "scale-x": [{ "scale-x": [b] }], "scale-y": [{ "scale-y": [b] }], rotate: [{ rotate: [$l, se] }], "translate-x": [{ "translate-x": [x] }], "translate-y": [{ "translate-y": [x] }], "skew-x": [{ "skew-x": [S] }], "skew-y": [{ "skew-y": [S] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", se] }], accent: [{ accent: ["auto", e3] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se] }], "caret-color": [{ caret: [e3] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": L() }], "scroll-mx": [{ "scroll-mx": L() }], "scroll-my": [{ "scroll-my": L() }], "scroll-ms": [{ "scroll-ms": L() }], "scroll-me": [{ "scroll-me": L() }], "scroll-mt": [{ "scroll-mt": L() }], "scroll-mr": [{ "scroll-mr": L() }], "scroll-mb": [{ "scroll-mb": L() }], "scroll-ml": [{ "scroll-ml": L() }], "scroll-p": [{ "scroll-p": L() }], "scroll-px": [{ "scroll-px": L() }], "scroll-py": [{ "scroll-py": L() }], "scroll-ps": [{ "scroll-ps": L() }], "scroll-pe": [{ "scroll-pe": L() }], "scroll-pt": [{ "scroll-pt": L() }], "scroll-pr": [{ "scroll-pr": L() }], "scroll-pb": [{ "scroll-pb": L() }], "scroll-pl": [{ "scroll-pl": L() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", se] }], fill: [{ fill: [e3, "none"] }], "stroke-w": [{ stroke: [Rn, oa, u0] }], stroke: [{ stroke: [e3, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
      };
      yC = (e3, { cacheSize: t, prefix: r, separator: n, experimentalParseClassName: a, extend: i = {}, override: o = {} }) => {
        zl(e3, "cacheSize", t), zl(e3, "prefix", r), zl(e3, "separator", n), zl(e3, "experimentalParseClassName", a);
        for (let l in o) wC(e3[l], o[l]);
        for (let l in i) xC(e3[l], i[l]);
        return e3;
      };
      zl = (e3, t, r) => {
        r !== void 0 && (e3[t] = r);
      };
      wC = (e3, t) => {
        if (t) for (let r in t) zl(e3, r, t[r]);
      };
      xC = (e3, t) => {
        if (t) for (let r in t) {
          let n = t[r];
          n !== void 0 && (e3[r] = (e3[r] || []).concat(n));
        }
      };
      bC = (e3, ...t) => typeof e3 == "function" ? U4(H4, e3, ...t) : U4(() => yC(H4(), e3), ...t);
      kC = { size4xl: "2.1125rem", size3xl: "1.75625rem", size2xl: "1.40625rem", sizeXl: "1.175rem", sizeLg: "1.0625rem", sizeBody: "0.875rem", sizeSm: "0.75rem", sizeXs: "0.6875rem", sizeMono: "0.875rem" };
      EC = { leading4xl: "2.625rem", leading3xl: "2.5rem", leading2xl: "2.25rem", leadingXl: "2rem", leadingLg: "1.75rem", leadingBody: "1.5rem", leadingSm: "1.125rem", leadingXs: "1rem", leadingMono: "1.5rem" };
      RC = bC({ extend: { classGroups: { "font-size": [{ text: Object.keys(kC) }], leading: [{ leading: Object.keys(EC) }] } } });
      CC = /* @__PURE__ */ Symbol.for("react.lazy");
      Mc = Xe[" use ".trim().toString()];
      h0 = NC("Slot");
      LC = /* @__PURE__ */ Symbol("radix.slottable");
      V4 = (e3) => typeof e3 == "boolean" ? `${e3}` : e3 === 0 ? "0" : e3;
      W4 = q4;
      AC = (e3, t) => (r) => {
        var n;
        if (t?.variants == null) return W4(e3, r?.class, r?.className);
        let { variants: a, defaultVariants: i } = t, o = Object.keys(a).map((u) => {
          let c = r?.[u], d = i?.[u];
          if (c === null) return null;
          let f = V4(c) || V4(d);
          return a[u][f];
        }), l = r && Object.entries(r).reduce((u, c) => {
          let [d, f] = c;
          return f === void 0 || (u[d] = f), u;
        }, {}), s = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
          let { class: d, className: f, ...h } = c;
          return Object.entries(h).every((v) => {
            let [y, m] = v;
            return Array.isArray(m) ? m.includes({ ...i, ...l }[y]) : { ...i, ...l }[y] === m;
          }) ? [...u, d, f] : u;
        }, []);
        return W4(e3, o, s, r?.class, r?.className);
      };
      FC = AC("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
      p0 = (0, J4.forwardRef)(({ className: e3, variant: t, size: r, asChild: n = false, ...a }, i) => (0, ex.jsx)(n ? h0 : "button", { className: f0(FC({ variant: t, size: r, className: e3 })), ref: i, ...a }));
      p0.displayName = "Button";
      $C = { primary: "border-ds-foreground1 bg-ds-foreground1 text-ds-onPrimary", secondary: "border-transparent bg-ds-background1 text-ds-foreground1 shadow-[0_0_0_1px_var(--ds-hairline)] disabled:bg-ds-background2 disabled:shadow-[0_0_0_1px_var(--ds-hairline)]", ghost: "border-transparent bg-transparent font-semibold text-ds-foreground1 underline [text-underline-position:from-font] disabled:bg-transparent disabled:font-medium", destructive: "border-transparent bg-ds-dangerWash text-ds-danger", success: "border-transparent bg-ds-successWash text-ds-success" };
      g0 = (0, m0.forwardRef)(({ variant: e3, fullWidth: t, large: r, className: n, asChild: a = false, iconBefore: i, iconAfter: o, type: l = "button", children: s, ...u }, c) => {
        let d = OC({ variant: e3, fullWidth: t, large: r, className: n });
        return a ? (0, Il.jsx)(h0, { ref: c, className: d, ...u, children: s }) : (0, Il.jsxs)("button", { ref: c, type: l, className: d, ...u, children: [i, s, o] });
      });
      g0.displayName = "DsButton";
      v0 = (0, m0.forwardRef)(({ label: e3, className: t, asChild: r = false, type: n = "button", ...a }, i) => (0, Il.jsx)(r ? h0 : "button", { ref: i, type: r ? void 0 : n, "aria-label": e3, title: e3, className: f0("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-[var(--ds-radius-compact)] border-0 bg-transparent p-2 leading-none text-ds-ink transition-[background-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.94] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", t), ...a }));
      v0.displayName = "DsIconButton";
      He = O(ee(), 1);
      Gl = O(ee(), 1);
      Kc = O(ee(), 1);
      Jx = O(ee(), 1);
      eb = O(ee(), 1);
      Fc = O(ee(), 1);
      Ub = O(ee(), 1);
      Ql = O(ee(), 1);
      Cn = O(ee(), 1);
      ha = O(ee(), 1);
      C = O(we(), 1);
      Nt = O(ee(), 1);
      Jc = O(ee(), 1);
      Wl = O(ee(), 1);
      Lt = O(ee(), 1);
      he = O(we(), 1);
      Xb = O(ee(), 1);
      tr = O(we(), 1);
      Ja = O(ee(), 1);
      ca = O(we(), 1);
      V0 = O(ee(), 1);
      I = O(we(), 1);
      ue = O(we(), 1);
      F = O(we(), 1);
      uo = O(ee(), 1);
      Fe = O(we(), 1);
      S5 = O(ee(), 1);
      Ee = O(we(), 1);
      Ul = O(we(), 1);
      _5 = O(ee(), 1);
      T5 = O(we(), 1);
      A5 = O(we(), 1);
      Pr = O(we(), 1);
      ua = O(we(), 1);
      id = O(ee(), 1);
      Qa = O(ee(), 1);
      Mt = O(we(), 1);
      Zl = O(ee(), 1);
      lt = O(we(), 1);
      I5 = O(ee(), 1);
      re = O(we(), 1);
      fe = O(we(), 1);
      Ct = O(we(), 1);
      Y5 = O(ee(), 1);
      Re = O(we(), 1);
      q5 = O(ee(), 1);
      Dt = O(we(), 1);
      zC = Object.create;
      Bx = Object.defineProperty;
      IC = Object.getOwnPropertyDescriptor;
      jC = Object.getOwnPropertyNames;
      UC = Object.getPrototypeOf;
      HC = Object.prototype.hasOwnProperty;
      BC = (e3, t) => () => (t || e3((t = { exports: {} }).exports, t), t.exports);
      VC = (e3, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function") for (let a of jC(t)) !HC.call(e3, a) && a !== r && Bx(e3, a, { get: () => t[a], enumerable: !(n = IC(t, a)) || n.enumerable });
        return e3;
      };
      Vx = (e3, t, r) => (r = e3 != null ? zC(UC(e3)) : {}, VC(t || !e3 || !e3.__esModule ? Bx(r, "default", { value: e3, enumerable: true }) : r, e3));
      Wx = BC((e3, t) => {
        (function() {
          "use strict";
          var r = {}.hasOwnProperty;
          function n() {
            for (var o = "", l = 0; l < arguments.length; l++) {
              var s = arguments[l];
              s && (o = i(o, a(s)));
            }
            return o;
          }
          function a(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return n.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var l = "";
            for (var s in o) r.call(o, s) && o[s] && (l = i(l, s));
            return l;
          }
          function i(o, l) {
            return l ? o ? o + " " + l : o + l : o;
          }
          typeof t < "u" && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
            return n;
          }) : window.classNames = n;
        })();
      });
      Tr = (e3) => e3;
      Pt = (e3) => e3.toLocaleLowerCase();
      qc = { myPick: "My pick", recommended: "Recommended", rangeLegend: "low \xB7 now \xB7 high", noPhoto: "No photo supplied", noData: "No data to display.", noMatches: "No matching items.", chartData: "View chart data", observation: "Observation", observationNumber: (e3) => `Observation ${e3}`, value: "Value", noObservation: "No observation", attribute: "Attribute", price: "Price", was: ", was ", close: "Close", previousPhoto: "Previous photo", nextPhoto: "Next photo", photoCount: (e3, t) => `${e3} of ${t}`, photosOf: (e3) => `Photos of ${e3}`, fullScreen: (e3) => `${e3}, full screen`, view: (e3) => `View ${e3}`, viewAt: (e3) => `View at ${e3}`, buy: "Let\u2019s buy this", buyShort: "Buy this", sending: "Sending\u2026", sentToInstinct: "Sent to Instinct", sent: "Sent", soldOut: "Sold out", retry: "Retry", copy: "Copy", copied: "Copied", copyFailed: "Copy blocked", choose: (e3) => `Choose ${/^[aeiou]/i.test(e3) ? "an" : "a"} ${Pt(e3)}`, chooseToCheckStock: (e3) => `${qc.choose(e3)} to check stock`, soldOutIn: (e3) => `Sold out in ${e3}`, onlyLeftIn: (e3, t) => `Only ${e3} left in ${t}`, inStockIn: (e3) => `In stock in ${e3}`, inStock: (e3) => `${e3} in stock`, valuesSoldOut: (e3) => `${e3.join(", ")} sold out`, valueSoldOut: (e3, t) => `${e3}, sold out${t ? ` in ${t}` : ""}`, plural: (e3) => /(s|sh|ch|x|z)$/i.test(e3) ? `${e3}es` : /[^aeiou]y$/i.test(e3) ? `${e3.slice(0, -1)}ies` : `${e3}s`, optionIn: (e3, t) => `${e3} in ${t}`, andMore: (e3) => ` and ${e3} more`, loadingState: "Loading saved state\u2026", savingState: "Saving\u2026", savedState: "Saved on this device", unsavedState: "Not saved. Changes last only while this File is open.", wakeAccepted: "Sent to your agent", wakeWait: (e3) => `Please wait ${e3} seconds, then retry.`, wakeRetryNow: "You can retry now.", wakeUnconfirmed: "Delivery not confirmed. Retry to check without sending twice.", wakeForbidden: "Sign in as the File owner to send this to your agent.", wakeCanceled: "This request was canceled. You can send a new request.", wakeFailed: "This request could not be sent.", wakeUnavailable: "Agent actions are unavailable here." };
      WC = { myPick: "Mi elecci\xF3n", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE1x.", noPhoto: "Sin foto", noData: "No hay datos que mostrar.", noMatches: "No hay resultados.", chartData: "Ver los datos del gr\xE1fico", observation: "Observaci\xF3n", observationNumber: (e3) => `Observaci\xF3n ${e3}`, value: "Valor", noObservation: "Sin observaci\xF3n", attribute: "Atributo", price: "Precio", was: ", antes ", close: "Cerrar", previousPhoto: "Foto anterior", nextPhoto: "Foto siguiente", photoCount: (e3, t) => `${e3} de ${t}`, photosOf: (e3) => `Fotos de ${e3}`, fullScreen: (e3) => `${e3}, pantalla completa`, view: (e3) => `Ver ${e3}`, viewAt: (e3) => `Ver en ${e3}`, buy: "Vamos a comprarlo", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado a Instinct", sent: "Enviado", soldOut: "Agotado", retry: "Reintentar", copy: "Copiar", copied: "Copiado", copyFailed: "No se pudo copiar", choose: (e3) => `Elige ${Pt(e3)}`, chooseToCheckStock: (e3) => `Elige ${Pt(e3)} para ver la disponibilidad`, soldOutIn: (e3) => `Agotado en ${e3}`, onlyLeftIn: (e3, t) => `Solo quedan ${e3} en ${t}`, inStockIn: (e3) => `Disponible en ${e3}`, inStock: (e3) => `${e3} disponible`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "agotados" : "agotado"}`, valueSoldOut: (e3, t) => `${e3}, agotado${t ? ` en ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} en ${t}`, andMore: (e3) => ` y ${e3} m\xE1s`, loadingState: "Cargando lo guardado\u2026", savingState: "Guardando\u2026", savedState: "Guardado en este dispositivo", unsavedState: "Sin guardar. Los cambios duran solo mientras este File est\xE9 abierto.", wakeAccepted: "Enviado a tu agente", wakeWait: (e3) => `Espera ${e3} segundos y vuelve a intentarlo.`, wakeRetryNow: "Ya puedes reintentarlo.", wakeUnconfirmed: "Entrega sin confirmar. Reintenta para comprobarlo sin enviarlo dos veces.", wakeForbidden: "Inicia sesi\xF3n como due\xF1o del File para envi\xE1rselo a tu agente.", wakeCanceled: "Se cancel\xF3 esta solicitud. Puedes enviar una nueva.", wakeFailed: "No se pudo enviar esta solicitud.", wakeUnavailable: "Las acciones del agente no est\xE1n disponibles aqu\xED." };
      YC = { myPick: "Mon choix", recommended: "Recommand\xE9", rangeLegend: "min \xB7 actuel \xB7 max", noPhoto: "Pas de photo", noData: "Aucune donn\xE9e \xE0 afficher.", noMatches: "Aucun r\xE9sultat.", chartData: "Voir les donn\xE9es du graphique", observation: "Observation", observationNumber: (e3) => `Observation ${e3}`, value: "Valeur", noObservation: "Aucune observation", attribute: "Attribut", price: "Prix", was: ", au lieu de ", close: "Fermer", previousPhoto: "Photo pr\xE9c\xE9dente", nextPhoto: "Photo suivante", photoCount: (e3, t) => `${e3} sur ${t}`, photosOf: (e3) => `Photos de ${e3}`, fullScreen: (e3) => `${e3}, plein \xE9cran`, view: (e3) => `Voir ${e3}`, viewAt: (e3) => `Voir chez ${e3}`, buy: "On l\u2019ach\xE8te", buyShort: "Acheter", sending: "Envoi\u2026", sentToInstinct: "Envoy\xE9 \xE0 Instinct", sent: "Envoy\xE9", soldOut: "\xC9puis\xE9", retry: "R\xE9essayer", copy: "Copier", copied: "Copi\xE9", copyFailed: "Copie impossible", choose: (e3) => `${e3} \xE0 choisir`, chooseToCheckStock: (e3) => `Choisissez ${Pt(e3)} pour voir le stock`, soldOutIn: (e3) => `\xC9puis\xE9 en ${e3}`, onlyLeftIn: (e3, t) => `Plus que ${e3} en ${t}`, inStockIn: (e3) => `En stock en ${e3}`, inStock: (e3) => `${e3} en stock`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "\xE9puis\xE9s" : "\xE9puis\xE9"}`, valueSoldOut: (e3, t) => `${e3}, \xE9puis\xE9${t ? ` en ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} en ${t}`, andMore: (e3) => ` et ${e3} de plus`, loadingState: "Chargement de l\u2019\xE9tat enregistr\xE9\u2026", savingState: "Enregistrement\u2026", savedState: "Enregistr\xE9 sur cet appareil", unsavedState: "Non enregistr\xE9. Les modifications durent tant que ce File reste ouvert.", wakeAccepted: "Envoy\xE9 \xE0 votre agent", wakeWait: (e3) => `Attendez ${e3} secondes, puis r\xE9essayez.`, wakeRetryNow: "Vous pouvez r\xE9essayer.", wakeUnconfirmed: "Envoi non confirm\xE9. R\xE9essayez pour v\xE9rifier sans envoyer deux fois.", wakeForbidden: "Connectez-vous en tant que propri\xE9taire du File pour l\u2019envoyer \xE0 votre agent.", wakeCanceled: "Cette demande a \xE9t\xE9 annul\xE9e. Vous pouvez en envoyer une nouvelle.", wakeFailed: "Cette demande n\u2019a pas pu \xEAtre envoy\xE9e.", wakeUnavailable: "Les actions de l\u2019agent ne sont pas disponibles ici." };
      qC = { myPick: "Meine Wahl", recommended: "Empfohlen", rangeLegend: "min. \xB7 aktuell \xB7 max.", noPhoto: "Kein Foto", noData: "Keine Daten vorhanden.", noMatches: "Keine Treffer.", chartData: "Diagrammdaten anzeigen", observation: "Messpunkt", observationNumber: (e3) => `Messpunkt ${e3}`, value: "Wert", noObservation: "Kein Messwert", attribute: "Merkmal", price: "Preis", was: ", vorher ", close: "Schlie\xDFen", previousPhoto: "Vorheriges Foto", nextPhoto: "N\xE4chstes Foto", photoCount: (e3, t) => `${e3} von ${t}`, photosOf: (e3) => `Fotos von ${e3}`, fullScreen: (e3) => `${e3}, Vollbild`, view: (e3) => `${e3} ansehen`, viewAt: (e3) => `Bei ${e3} ansehen`, buy: "Lass es uns kaufen", buyShort: "Kaufen", sending: "Wird gesendet\u2026", sentToInstinct: "An Instinct gesendet", sent: "Gesendet", soldOut: "Ausverkauft", retry: "Erneut versuchen", copy: "Kopieren", copied: "Kopiert", copyFailed: "Kopieren blockiert", choose: (e3) => `${e3} w\xE4hlen`, chooseToCheckStock: (e3) => `${e3} w\xE4hlen, um den Bestand zu sehen`, soldOutIn: (e3) => `Ausverkauft in ${e3}`, onlyLeftIn: (e3, t) => `Nur noch ${e3} in ${t}`, inStockIn: (e3) => `Verf\xFCgbar in ${e3}`, inStock: (e3) => `${e3} verf\xFCgbar`, valuesSoldOut: (e3) => `${e3.join(", ")} ausverkauft`, valueSoldOut: (e3, t) => `${e3}, ausverkauft${t ? ` in ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} in ${t}`, andMore: (e3) => ` und ${e3} weitere`, loadingState: "Gespeicherter Stand wird geladen\u2026", savingState: "Wird gespeichert\u2026", savedState: "Auf diesem Ger\xE4t gespeichert", unsavedState: "Nicht gespeichert. \xC4nderungen bleiben nur, solange dieses File offen ist.", wakeAccepted: "An deinen Agenten gesendet", wakeWait: (e3) => `Bitte warte ${e3} Sekunden und versuche es dann erneut.`, wakeRetryNow: "Du kannst es jetzt erneut versuchen.", wakeUnconfirmed: "Zustellung nicht best\xE4tigt. Versuche es erneut, um ohne doppeltes Senden nachzusehen.", wakeForbidden: "Melde dich als Besitzer dieses Files an, um es an deinen Agenten zu senden.", wakeCanceled: "Diese Anfrage wurde abgebrochen. Du kannst eine neue senden.", wakeFailed: "Diese Anfrage konnte nicht gesendet werden.", wakeUnavailable: "Agentenaktionen sind hier nicht verf\xFCgbar." };
      GC = { myPick: "La mia scelta", recommended: "Consigliato", rangeLegend: "min \xB7 attuale \xB7 max", noPhoto: "Nessuna foto", noData: "Nessun dato da mostrare.", noMatches: "Nessun risultato.", chartData: "Vedi i dati del grafico", observation: "Osservazione", observationNumber: (e3) => `Osservazione ${e3}`, value: "Valore", noObservation: "Nessuna osservazione", attribute: "Attributo", price: "Prezzo", was: ", prima ", close: "Chiudi", previousPhoto: "Foto precedente", nextPhoto: "Foto successiva", photoCount: (e3, t) => `${e3} di ${t}`, photosOf: (e3) => `Foto di ${e3}`, fullScreen: (e3) => `${e3}, schermo intero`, view: (e3) => `Vedi ${e3}`, viewAt: (e3) => `Vedi su ${e3}`, buy: "Compriamolo", buyShort: "Compra", sending: "Invio\u2026", sentToInstinct: "Inviato a Instinct", sent: "Inviato", soldOut: "Esaurito", retry: "Riprova", copy: "Copia", copied: "Copiato", copyFailed: "Copia bloccata", choose: (e3) => `Scegli ${Pt(e3)}`, chooseToCheckStock: (e3) => `Scegli ${Pt(e3)} per vedere la disponibilit\xE0`, soldOutIn: (e3) => `Esaurito in ${e3}`, onlyLeftIn: (e3, t) => `Solo ${e3} rimasti in ${t}`, inStockIn: (e3) => `Disponibile in ${e3}`, inStock: (e3) => `${e3} disponibile`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "esauriti" : "esaurito"}`, valueSoldOut: (e3, t) => `${e3}, esaurito${t ? ` in ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} in ${t}`, andMore: (e3) => ` e altri ${e3}`, loadingState: "Caricamento dello stato salvato\u2026", savingState: "Salvataggio\u2026", savedState: "Salvato su questo dispositivo", unsavedState: "Non salvato. Le modifiche durano solo finch\xE9 questo File resta aperto.", wakeAccepted: "Inviato al tuo agente", wakeWait: (e3) => `Aspetta ${e3} secondi, poi riprova.`, wakeRetryNow: "Ora puoi riprovare.", wakeUnconfirmed: "Consegna non confermata. Riprova per controllare senza inviare due volte.", wakeForbidden: "Accedi come proprietario del File per inviarlo al tuo agente.", wakeCanceled: "Questa richiesta \xE8 stata annullata. Puoi inviarne una nuova.", wakeFailed: "Non \xE8 stato possibile inviare questa richiesta.", wakeUnavailable: "Le azioni dell\u2019agente non sono disponibili qui." };
      KC = { myPick: "Minha escolha", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 atual \xB7 m\xE1x.", noPhoto: "Sem foto", noData: "N\xE3o h\xE1 dados para mostrar.", noMatches: "Nenhum resultado.", chartData: "Ver os dados do gr\xE1fico", observation: "Observa\xE7\xE3o", observationNumber: (e3) => `Observa\xE7\xE3o ${e3}`, value: "Valor", noObservation: "Sem observa\xE7\xE3o", attribute: "Atributo", price: "Pre\xE7o", was: ", antes ", close: "Fechar", previousPhoto: "Foto anterior", nextPhoto: "Pr\xF3xima foto", photoCount: (e3, t) => `${e3} de ${t}`, photosOf: (e3) => `Fotos de ${e3}`, fullScreen: (e3) => `${e3}, tela cheia`, view: (e3) => `Ver ${e3}`, viewAt: (e3) => `Ver em ${e3}`, buy: "Vamos comprar", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado ao Instinct", sent: "Enviado", soldOut: "Esgotado", retry: "Tentar de novo", copy: "Copiar", copied: "Copiado", copyFailed: "C\xF3pia bloqueada", choose: (e3) => `Selecione ${Pt(e3)}`, chooseToCheckStock: (e3) => `Selecione ${Pt(e3)} para ver o estoque`, soldOutIn: (e3) => `Esgotado em ${e3}`, onlyLeftIn: (e3, t) => `S\xF3 restam ${e3} em ${t}`, inStockIn: (e3) => `Dispon\xEDvel em ${e3}`, inStock: (e3) => `${e3} dispon\xEDvel`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "esgotados" : "esgotado"}`, valueSoldOut: (e3, t) => `${e3}, esgotado${t ? ` em ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} em ${t}`, andMore: (e3) => ` e mais ${e3}`, loadingState: "Carregando o que foi salvo\u2026", savingState: "Salvando\u2026", savedState: "Salvo neste dispositivo", unsavedState: "N\xE3o salvo. As altera\xE7\xF5es duram s\xF3 enquanto este File estiver aberto.", wakeAccepted: "Enviado ao seu agente", wakeWait: (e3) => `Aguarde ${e3} segundos e tente de novo.`, wakeRetryNow: "Voc\xEA j\xE1 pode tentar de novo.", wakeUnconfirmed: "Entrega n\xE3o confirmada. Tente de novo para verificar sem enviar duas vezes.", wakeForbidden: "Entre como dono do File para enviar isto ao seu agente.", wakeCanceled: "Esta solicita\xE7\xE3o foi cancelada. Voc\xEA pode enviar uma nova.", wakeFailed: "N\xE3o foi poss\xEDvel enviar esta solicita\xE7\xE3o.", wakeUnavailable: "As a\xE7\xF5es do agente n\xE3o est\xE3o dispon\xEDveis aqui." };
      QC = { myPick: "La meva tria", recommended: "Recomanat", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE0x.", noPhoto: "Sense foto", noData: "No hi ha dades per mostrar.", noMatches: "Cap resultat.", chartData: "Mostra les dades del gr\xE0fic", observation: "Observaci\xF3", observationNumber: (e3) => `Observaci\xF3 ${e3}`, value: "Valor", noObservation: "Sense observaci\xF3", attribute: "Atribut", price: "Preu", was: ", abans ", close: "Tanca", previousPhoto: "Foto anterior", nextPhoto: "Foto seg\xFCent", photoCount: (e3, t) => `${e3} de ${t}`, photosOf: (e3) => `Fotos de ${e3}`, fullScreen: (e3) => `${e3}, pantalla completa`, view: (e3) => `Mostra ${e3}`, viewAt: (e3) => `Mostra a ${e3}`, buy: "Comprem-ho", buyShort: "Compra", sending: "S\u2019est\xE0 enviant\u2026", sentToInstinct: "Enviat a Instinct", sent: "Enviat", soldOut: "Esgotat", retry: "Torna-ho a provar", copy: "Copia", copied: "Copiat", copyFailed: "No s\u2019ha pogut copiar", choose: (e3) => `Tria ${Pt(e3)}`, chooseToCheckStock: (e3) => `Tria ${Pt(e3)} per veure la disponibilitat`, soldOutIn: (e3) => `Esgotat en ${e3}`, onlyLeftIn: (e3, t) => `Nom\xE9s en queden ${e3} en ${t}`, inStockIn: (e3) => `Disponible en ${e3}`, inStock: (e3) => `${e3} disponible`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "esgotats" : "esgotat"}`, valueSoldOut: (e3, t) => `${e3}, esgotat${t ? ` en ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} en ${t}`, andMore: (e3) => ` i ${e3} m\xE9s`, loadingState: "S\u2019est\xE0 carregant l\u2019estat desat\u2026", savingState: "S\u2019est\xE0 desant\u2026", savedState: "Desat en aquest dispositiu", unsavedState: "No desat. Els canvis nom\xE9s duren mentre aquest File estigui obert.", wakeAccepted: "Enviat al teu agent", wakeWait: (e3) => `Espera ${e3} segons i torna-ho a provar.`, wakeRetryNow: "Ja ho pots tornar a provar.", wakeUnconfirmed: "Lliurament no confirmat. Torna-ho a provar per comprovar-ho sense enviar-ho dues vegades.", wakeForbidden: "Inicia la sessi\xF3 com a propietari del File per enviar-ho al teu agent.", wakeCanceled: "S\u2019ha cancel\xB7lat aquesta sol\xB7licitud. Pots enviar-ne una de nova.", wakeFailed: "No s\u2019ha pogut enviar aquesta sol\xB7licitud.", wakeUnavailable: "Les accions de l\u2019agent no estan disponibles aqu\xED." };
      XC = { myPick: "Mijn keuze", recommended: "Aanbevolen", rangeLegend: "laag \xB7 nu \xB7 hoog", noPhoto: "Geen foto", noData: "Geen gegevens om te tonen.", noMatches: "Geen resultaten.", chartData: "Grafiekgegevens bekijken", observation: "Meting", observationNumber: (e3) => `Meting ${e3}`, value: "Waarde", noObservation: "Geen meting", attribute: "Kenmerk", price: "Prijs", was: ", was ", close: "Sluiten", previousPhoto: "Vorige foto", nextPhoto: "Volgende foto", photoCount: (e3, t) => `${e3} van ${t}`, photosOf: (e3) => `Foto\u2019s van ${e3}`, fullScreen: (e3) => `${e3}, volledig scherm`, view: (e3) => `${e3} bekijken`, viewAt: (e3) => `Bekijken bij ${e3}`, buy: "Laten we dit kopen", buyShort: "Kopen", sending: "Versturen\u2026", sentToInstinct: "Naar Instinct gestuurd", sent: "Verstuurd", soldOut: "Uitverkocht", retry: "Opnieuw", copy: "Kopi\xEBren", copied: "Gekopieerd", copyFailed: "Kopi\xEBren geblokkeerd", choose: (e3) => `Kies ${Pt(e3)}`, chooseToCheckStock: (e3) => `Kies ${Pt(e3)} om de voorraad te zien`, soldOutIn: (e3) => `Uitverkocht in ${e3}`, onlyLeftIn: (e3, t) => `Nog maar ${e3} in ${t}`, inStockIn: (e3) => `Op voorraad in ${e3}`, inStock: (e3) => `${e3} op voorraad`, valuesSoldOut: (e3) => `${e3.join(", ")} uitverkocht`, valueSoldOut: (e3, t) => `${e3}, uitverkocht${t ? ` in ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} in ${t}`, andMore: (e3) => ` en nog ${e3}`, loadingState: "Opgeslagen stand laden\u2026", savingState: "Opslaan\u2026", savedState: "Opgeslagen op dit apparaat", unsavedState: "Niet opgeslagen. Wijzigingen blijven alleen zolang dit File open is.", wakeAccepted: "Naar je agent gestuurd", wakeWait: (e3) => `Wacht ${e3} seconden en probeer het dan opnieuw.`, wakeRetryNow: "Je kunt het nu opnieuw proberen.", wakeUnconfirmed: "Bezorging niet bevestigd. Probeer opnieuw om te controleren zonder dubbel te versturen.", wakeForbidden: "Log in als eigenaar van dit File om dit naar je agent te sturen.", wakeCanceled: "Dit verzoek is geannuleerd. Je kunt een nieuw verzoek sturen.", wakeFailed: "Dit verzoek kon niet worden verstuurd.", wakeUnavailable: "Agentacties zijn hier niet beschikbaar." };
      ZC = { myPick: "Alegerea mea", recommended: "Recomandat", rangeLegend: "min. \xB7 acum \xB7 max.", noPhoto: "F\u0103r\u0103 fotografie", noData: "Nu exist\u0103 date de afi\u0219at.", noMatches: "Niciun rezultat.", chartData: "Vezi datele graficului", observation: "Observa\u021Bie", observationNumber: (e3) => `Observa\u021Bia ${e3}`, value: "Valoare", noObservation: "F\u0103r\u0103 observa\u021Bie", attribute: "Atribut", price: "Pre\u021B", was: ", \xEEnainte ", close: "\xCEnchide", previousPhoto: "Fotografia anterioar\u0103", nextPhoto: "Fotografia urm\u0103toare", photoCount: (e3, t) => `${e3} din ${t}`, photosOf: (e3) => `Fotografii cu ${e3}`, fullScreen: (e3) => `${e3}, ecran complet`, view: (e3) => `Vezi ${e3}`, viewAt: (e3) => `Vezi la ${e3}`, buy: "Hai s\u0103-l cump\u0103r\u0103m", buyShort: "Cump\u0103r\u0103", sending: "Se trimite\u2026", sentToInstinct: "Trimis la Instinct", sent: "Trimis", soldOut: "Epuizat", retry: "Re\xEEncearc\u0103", copy: "Copiaz\u0103", copied: "Copiat", copyFailed: "Copiere blocat\u0103", choose: (e3) => `Alege ${Pt(e3)}`, chooseToCheckStock: (e3) => `Alege ${Pt(e3)} ca s\u0103 vezi stocul`, soldOutIn: (e3) => `Epuizat \xEEn ${e3}`, onlyLeftIn: (e3, t) => `Doar ${e3} r\u0103mase \xEEn ${t}`, inStockIn: (e3) => `\xCEn stoc \xEEn ${e3}`, inStock: (e3) => `${e3} \xEEn stoc`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "epuizate" : "epuizat"}`, valueSoldOut: (e3, t) => `${e3}, epuizat${t ? ` \xEEn ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} \xEEn ${t}`, andMore: (e3) => ` \u0219i \xEEnc\u0103 ${e3}`, loadingState: "Se \xEEncarc\u0103 starea salvat\u0103\u2026", savingState: "Se salveaz\u0103\u2026", savedState: "Salvat pe acest dispozitiv", unsavedState: "Nesalvat. Modific\u0103rile r\u0103m\xE2n doar c\xE2t timp acest File e deschis.", wakeAccepted: "Trimis agentului t\u0103u", wakeWait: (e3) => `A\u0219teapt\u0103 ${e3} secunde, apoi re\xEEncearc\u0103.`, wakeRetryNow: "Po\u021Bi re\xEEncerca acum.", wakeUnconfirmed: "Livrare neconfirmat\u0103. Re\xEEncearc\u0103 pentru a verifica f\u0103r\u0103 a trimite de dou\u0103 ori.", wakeForbidden: "Conecteaz\u0103-te ca proprietar al File-ului ca s\u0103-l trimi\u021Bi agentului t\u0103u.", wakeCanceled: "Cererea a fost anulat\u0103. Po\u021Bi trimite una nou\u0103.", wakeFailed: "Cererea nu a putut fi trimis\u0103.", wakeUnavailable: "Ac\u021Biunile agentului nu sunt disponibile aici." };
      JC = { myPick: "\u041C\u043E\u0439 \u0432\u044B\u0431\u043E\u0440", recommended: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E", rangeLegend: "\u043C\u0438\u043D. \xB7 \u0441\u0435\u0439\u0447\u0430\u0441 \xB7 \u043C\u0430\u043A\u0441.", noPhoto: "\u041D\u0435\u0442 \u0444\u043E\u0442\u043E", noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445.", noMatches: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.", chartData: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0430", observation: "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435", observationNumber: (e3) => `\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 ${e3}`, value: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", noObservation: "\u041D\u0435\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F", attribute: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440", price: "\u0426\u0435\u043D\u0430", was: ", \u0431\u044B\u043B\u043E ", close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", previousPhoto: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", nextPhoto: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", photoCount: (e3, t) => `${e3} \u0438\u0437 ${t}`, photosOf: (e3) => `\u0424\u043E\u0442\u043E: ${e3}`, fullScreen: (e3) => `${e3}, \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D`, view: (e3) => `\u041E\u0442\u043A\u0440\u044B\u0442\u044C ${e3}`, viewAt: (e3) => `\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 ${e3}`, buy: "\u0414\u0430\u0432\u0430\u0439 \u043A\u0443\u043F\u0438\u043C", buyShort: "\u041A\u0443\u043F\u0438\u0442\u044C", sending: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026", sentToInstinct: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432 Instinct", sent: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E", soldOut: "\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438", retry: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C", copy: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C", copied: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E", copyFailed: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E", choose: (e3) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${Pt(e3)}`, chooseToCheckStock: (e3) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${Pt(e3)}, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430\u043B\u0438\u0447\u0438\u0435`, soldOutIn: (e3) => `\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e3}`, onlyLeftIn: (e3, t) => `\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${e3}: ${t}`, inStockIn: (e3) => `\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e3}`, inStock: (e3) => `${e3} \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valuesSoldOut: (e3) => `${e3.join(", ")} \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valueSoldOut: (e3, t) => `${e3}, \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438${t ? ` (${t})` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3}: ${t}`, andMore: (e3) => ` \u0438 \u0435\u0449\u0451 ${e3}`, loadingState: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u0433\u043E\u2026", savingState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u2026", savedState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435", unsavedState: "\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0442, \u043F\u043E\u043A\u0430 \u044D\u0442\u043E\u0442 File \u043E\u0442\u043A\u0440\u044B\u0442.", wakeAccepted: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0433\u0435\u043D\u0442\u0443", wakeWait: (e3) => `\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 ${e3} \u0441 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435.`, wakeRetryNow: "\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C.", wakeUnconfirmed: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438.", wakeForbidden: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043A\u0430\u043A \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 File, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u043E \u0430\u0433\u0435\u043D\u0442\u0443.", wakeCanceled: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043C\u0435\u043D\u0451\u043D. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439.", wakeFailed: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441.", wakeUnavailable: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0430\u0433\u0435\u043D\u0442\u0430 \u0437\u0434\u0435\u0441\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B." };
      tx = { myPick: "\u05D4\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E9\u05DC\u05D9", recommended: "\u05DE\u05D5\u05DE\u05DC\u05E5", rangeLegend: "\u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \xB7 \u05E2\u05DB\u05E9\u05D9\u05D5 \xB7 \u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD", noPhoto: "\u05D0\u05D9\u05DF \u05EA\u05DE\u05D5\u05E0\u05D4", noData: "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4.", noMatches: "\u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA.", chartData: "\u05D4\u05E6\u05D2\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05D4\u05EA\u05E8\u05E9\u05D9\u05DD", observation: "\u05DE\u05D3\u05D9\u05D3\u05D4", observationNumber: (e3) => `\u05DE\u05D3\u05D9\u05D3\u05D4 ${e3}`, value: "\u05E2\u05E8\u05DA", noObservation: "\u05D0\u05D9\u05DF \u05DE\u05D3\u05D9\u05D3\u05D4", attribute: "\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF", price: "\u05DE\u05D7\u05D9\u05E8", was: ", \u05D1\u05DE\u05E7\u05D5\u05DD ", close: "\u05E1\u05D2\u05D9\u05E8\u05D4", previousPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E7\u05D5\u05D3\u05DE\u05EA", nextPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05D1\u05D0\u05D4", photoCount: (e3, t) => `${e3} \u05DE\u05EA\u05D5\u05DA ${t}`, photosOf: (e3) => `\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC ${e3}`, fullScreen: (e3) => `${e3}, \u05DE\u05E1\u05DA \u05DE\u05DC\u05D0`, view: (e3) => `\u05D4\u05E6\u05D2\u05EA ${e3}`, viewAt: (e3) => `\u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1-${e3}`, buy: "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05E7\u05E0\u05D4 \u05D0\u05EA \u05D6\u05D4", buyShort: "\u05DC\u05E7\u05E0\u05D5\u05EA", sending: "\u05E9\u05D5\u05DC\u05D7\u2026", sentToInstinct: "\u05E0\u05E9\u05DC\u05D7 \u05DC-Instinct", sent: "\u05E0\u05E9\u05DC\u05D7", soldOut: "\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9", retry: "\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1", copy: "\u05D4\u05E2\u05EA\u05E7\u05D4", copied: "\u05D4\u05D5\u05E2\u05EA\u05E7", copyFailed: "\u05D4\u05D4\u05E2\u05EA\u05E7\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4", choose: (e3) => `\u05D1\u05D7\u05E8\u05D5 ${e3}`, chooseToCheckStock: (e3) => `\u05D1\u05D7\u05E8\u05D5 ${e3} \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05DE\u05DC\u05D0\u05D9`, soldOutIn: (e3) => `\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9 \u05D1-${e3}`, onlyLeftIn: (e3, t) => `\u05E0\u05E9\u05D0\u05E8\u05D5 \u05E8\u05E7 ${e3} \u05D1-${t}`, inStockIn: (e3) => `\u05D1\u05DE\u05DC\u05D0\u05D9 \u05D1-${e3}`, inStock: (e3) => `${e3} \u05D1\u05DE\u05DC\u05D0\u05D9`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "\u05D0\u05D6\u05DC\u05D5" : "\u05D0\u05D6\u05DC"}`, valueSoldOut: (e3, t) => `${e3}, \u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9${t ? ` \u05D1-${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} \u05D1-${t}`, andMore: (e3) => ` \u05D5\u05E2\u05D5\u05D3 ${e3}`, loadingState: "\u05D8\u05D5\u05E2\u05DF \u05D0\u05EA \u05DE\u05D4 \u05E9\u05E0\u05E9\u05DE\u05E8\u2026", savingState: "\u05E9\u05D5\u05DE\u05E8\u2026", savedState: "\u05E0\u05E9\u05DE\u05E8 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4", unsavedState: "\u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8. \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E0\u05E9\u05D0\u05E8\u05D9\u05DD \u05E8\u05E7 \u05DB\u05DC \u05E2\u05D5\u05D3 \u05D4-File \u05E4\u05EA\u05D5\u05D7.", wakeAccepted: "\u05E0\u05E9\u05DC\u05D7 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA", wakeWait: (e3) => `\u05D9\u05E9 \u05DC\u05D4\u05DE\u05EA\u05D9\u05DF ${e3} \u05E9\u05E0\u05D9\u05D5\u05EA \u05D5\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1.`, wakeRetryNow: "\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05E2\u05DB\u05E9\u05D9\u05D5.", wakeUnconfirmed: "\u05D4\u05DE\u05E1\u05D9\u05E8\u05D4 \u05DC\u05D0 \u05D0\u05D5\u05E9\u05E8\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D1\u05DC\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD.", wakeForbidden: "\u05D9\u05E9 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DB\u05D1\u05E2\u05DC\u05D9\u05DD \u05E9\u05DC \u05D4-File \u05DB\u05D3\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D6\u05D4 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA.", wakeCanceled: "\u05D4\u05D1\u05E7\u05E9\u05D4 \u05D1\u05D5\u05D8\u05DC\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E9\u05D4 \u05D7\u05D3\u05E9\u05D4.", wakeFailed: "\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05E0\u05D5 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D1\u05E7\u05E9\u05D4.", wakeUnavailable: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05E1\u05D5\u05DB\u05DF \u05DC\u05D0 \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05DB\u05D0\u05DF." };
      e8 = { myPick: "\u0627\u062E\u062A\u064A\u0627\u0631\u064A", recommended: "\u0645\u0648\u0635\u0649 \u0628\u0647", rangeLegend: "\u0627\u0644\u0623\u062F\u0646\u0649 \xB7 \u0627\u0644\u062D\u0627\u0644\u064A \xB7 \u0627\u0644\u0623\u0639\u0644\u0649", noPhoto: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0648\u0631\u0629", noData: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0639\u0631\u0636\u0647\u0627.", noMatches: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C.", chartData: "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u0633\u0645", observation: "\u0642\u064A\u0627\u0633", observationNumber: (e3) => `\u0627\u0644\u0642\u064A\u0627\u0633 ${e3}`, value: "\u0627\u0644\u0642\u064A\u0645\u0629", noObservation: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0642\u064A\u0627\u0633", attribute: "\u0627\u0644\u062E\u0627\u0635\u064A\u0629", price: "\u0627\u0644\u0633\u0639\u0631", was: "\u060C \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 ", close: "\u0625\u063A\u0644\u0627\u0642", previousPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629", nextPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629", photoCount: (e3, t) => `${e3} \u0645\u0646 ${t}`, photosOf: (e3) => `\u0635\u0648\u0631 ${e3}`, fullScreen: (e3) => `${e3}\u060C \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629`, view: (e3) => `\u0639\u0631\u0636 ${e3}`, viewAt: (e3) => `\u0639\u0631\u0636 \u0644\u062F\u0649 ${e3}`, buy: "\u0644\u0646\u0634\u062A\u0631\u0650 \u0647\u0630\u0627", buyShort: "\u0634\u0631\u0627\u0621", sending: "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026", sentToInstinct: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 Instinct", sent: "\u0623\u064F\u0631\u0633\u0644", soldOut: "\u0646\u0641\u062F", retry: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629", copy: "\u0646\u0633\u062E", copied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E", copyFailed: "\u062A\u0639\u0630\u0651\u0631 \u0627\u0644\u0646\u0633\u062E", choose: (e3) => `\u0627\u062E\u062A\u0631 ${e3}`, chooseToCheckStock: (e3) => `\u0627\u062E\u062A\u0631 ${e3} \u0644\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062A\u0648\u0641\u0631`, soldOutIn: (e3) => `\u0646\u0641\u062F \u0641\u064A ${e3}`, onlyLeftIn: (e3, t) => `\u0628\u0642\u064A ${e3} \u0641\u0642\u0637 \u0641\u064A ${t}`, inStockIn: (e3) => `\u0645\u062A\u0648\u0641\u0631 \u0641\u064A ${e3}`, inStock: (e3) => `${e3} \u0645\u062A\u0648\u0641\u0631`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "\u0646\u0641\u062F\u062A" : "\u0646\u0641\u062F"}`, valueSoldOut: (e3, t) => `${e3}\u060C \u0646\u0641\u062F${t ? ` \u0641\u064A ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} \u0641\u064A ${t}`, andMore: (e3) => ` \u0648${e3} \u0623\u062E\u0631\u0649`, loadingState: "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629\u2026", savingState: "\u062C\u0627\u0631\u064D \u0627\u0644\u062D\u0641\u0638\u2026", savedState: "\u0645\u062D\u0641\u0648\u0638 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632", unsavedState: "\u063A\u064A\u0631 \u0645\u062D\u0641\u0648\u0638. \u062A\u0628\u0642\u0649 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0645\u0627 \u062F\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0640 File \u0645\u0641\u062A\u0648\u062D\u064B\u0627 \u0641\u0642\u0637.", wakeAccepted: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643", wakeWait: (e3) => `\u0627\u0646\u062A\u0638\u0631 ${e3} \u062B\u0627\u0646\u064A\u0629\u060C \u062B\u0645 \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629.`, wakeRetryNow: "\u064A\u0645\u0643\u0646\u0643 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u0622\u0646.", wakeUnconfirmed: "\u0644\u0645 \u064A\u062A\u0623\u0643\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645. \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0644\u062A\u062D\u0642\u0642 \u062F\u0648\u0646 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u0631\u062A\u064A\u0646.", wakeForbidden: "\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0635\u0641\u062A\u0643 \u0645\u0627\u0644\u0643 \u0627\u0644\u0640 File \u0644\u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643.", wakeCanceled: "\u0623\u064F\u0644\u063A\u064A \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628. \u064A\u0645\u0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F.", wakeFailed: "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628.", wakeUnavailable: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0648\u0643\u064A\u0644 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0647\u0646\u0627." };
      t8 = new Map(Object.entries({ en: qc, es: WC, fr: YC, de: qC, it: GC, pt: KC, ca: QC, nl: XC, ro: ZC, ru: JC, he: tx, iw: tx, ar: e8 }));
      r8 = /* @__PURE__ */ new Set(["he", "iw", "ar", "fa", "ur"]);
      Gc = (0, Gl.createContext)(qc);
      $c = () => window.instinctFile;
      a8 = "root";
      i8 = "Region";
      Qx = "Collection";
      Xx = "Item";
      rb = tb(Ac);
      f8 = rb.right;
      BN = rb.left;
      VN = tb(d8).center;
      h8 = f8;
      rx = class extends Map {
        constructor(e3, t = g8) {
          if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: t } }), e3 != null) for (let [r, n] of e3) this.set(r, n);
        }
        get(e3) {
          return super.get(nx(this, e3));
        }
        has(e3) {
          return super.has(nx(this, e3));
        }
        set(e3, t) {
          return super.set(p8(this, e3), t);
        }
        delete(e3) {
          return super.delete(m8(this, e3));
        }
      };
      N0 = Math.sqrt(50);
      M0 = Math.sqrt(10);
      L0 = Math.sqrt(2);
      ax = /* @__PURE__ */ Symbol("implicit");
      Ka = 0.7;
      oo = 1 / Ka;
      ao = "\\s*([+-]?\\d+)\\s*";
      Hl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
      Kr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
      x8 = /^#([0-9a-f]{3,8})$/;
      b8 = new RegExp(`^rgb\\(${ao},${ao},${ao}\\)$`);
      k8 = new RegExp(`^rgb\\(${Kr},${Kr},${Kr}\\)$`);
      E8 = new RegExp(`^rgba\\(${ao},${ao},${ao},${Hl}\\)$`);
      R8 = new RegExp(`^rgba\\(${Kr},${Kr},${Kr},${Hl}\\)$`);
      S8 = new RegExp(`^hsl\\(${Hl},${Kr},${Kr}\\)$`);
      C8 = new RegExp(`^hsla\\(${Hl},${Kr},${Kr},${Hl}\\)$`);
      ix = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
      so(fa, Bl, { copy(e3) {
        return Object.assign(new this.constructor(), this, e3);
      }, displayable() {
        return this.rgb().displayable();
      }, hex: ox, formatHex: ox, formatHex8: D8, formatHsl: N8, formatRgb: lx, toString: lx });
      so(st, Oc, Kl(fa, { brighter(e3) {
        return e3 = e3 == null ? oo : Math.pow(oo, e3), new st(this.r * e3, this.g * e3, this.b * e3, this.opacity);
      }, darker(e3) {
        return e3 = e3 == null ? Ka : Math.pow(Ka, e3), new st(this.r * e3, this.g * e3, this.b * e3, this.opacity);
      }, rgb() {
        return this;
      }, clamp() {
        return new st(qa(this.r), qa(this.g), qa(this.b), zc(this.opacity));
      }, displayable() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      }, hex: ux, formatHex: ux, formatHex8: M8, formatRgb: cx, toString: cx }));
      so(_r, P0, Kl(fa, { brighter(e3) {
        return e3 = e3 == null ? oo : Math.pow(oo, e3), new _r(this.h, this.s, this.l * e3, this.opacity);
      }, darker(e3) {
        return e3 = e3 == null ? Ka : Math.pow(Ka, e3), new _r(this.h, this.s, this.l * e3, this.opacity);
      }, rgb() {
        var e3 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e3) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
        return new st(y0(e3 >= 240 ? e3 - 240 : e3 + 120, a, n), y0(e3, a, n), y0(e3 < 120 ? e3 + 240 : e3 - 120, a, n), this.opacity);
      }, clamp() {
        return new _r(fx(this.h), Pc(this.s), Pc(this.l), zc(this.opacity));
      }, displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }, formatHsl() {
        let e3 = zc(this.opacity);
        return `${e3 === 1 ? "hsl(" : "hsla("}${fx(this.h)}, ${Pc(this.s) * 100}%, ${Pc(this.l) * 100}%${e3 === 1 ? ")" : `, ${e3})`}`;
      } }));
      lb = Math.PI / 180;
      sb = 180 / Math.PI;
      Ic = 18;
      ub = 0.96422;
      cb = 1;
      db = 0.82521;
      fb = 4 / 29;
      io = 6 / 29;
      hb = 3 * io * io;
      L8 = io * io * io;
      so(Qr, _0, Kl(fa, { brighter(e3) {
        return new Qr(this.l + Ic * (e3 ?? 1), this.a, this.b, this.opacity);
      }, darker(e3) {
        return new Qr(this.l - Ic * (e3 ?? 1), this.a, this.b, this.opacity);
      }, rgb() {
        var e3 = (this.l + 16) / 116, t = isNaN(this.a) ? e3 : e3 + this.a / 500, r = isNaN(this.b) ? e3 : e3 - this.b / 200;
        return t = ub * x0(t), e3 = cb * x0(e3), r = db * x0(r), new st(b0(3.1338561 * t - 1.6168667 * e3 - 0.4906146 * r), b0(-0.9787684 * t + 1.9161415 * e3 + 0.033454 * r), b0(0.0719453 * t - 0.2289914 * e3 + 1.4052427 * r), this.opacity);
      } }));
      so(Sn, T0, Kl(fa, { brighter(e3) {
        return new Sn(this.h, this.c, this.l + Ic * (e3 ?? 1), this.opacity);
      }, darker(e3) {
        return new Sn(this.h, this.c, this.l - Ic * (e3 ?? 1), this.opacity);
      }, rgb() {
        return mb(this).rgb();
      } }));
      gb = -0.14861;
      G0 = 1.78277;
      K0 = -0.29227;
      Qc = -0.90649;
      Vl = 1.97294;
      hx = Vl * Qc;
      px = Vl * G0;
      mx = G0 * K0 - Qc * gb;
      so(Ga, A0, Kl(fa, { brighter(e3) {
        return e3 = e3 == null ? oo : Math.pow(oo, e3), new Ga(this.h, this.s, this.l * e3, this.opacity);
      }, darker(e3) {
        return e3 = e3 == null ? Ka : Math.pow(Ka, e3), new Ga(this.h, this.s, this.l * e3, this.opacity);
      }, rgb() {
        var e3 = isNaN(this.h) ? 0 : (this.h + 120) * lb, t = +this.l, r = isNaN(this.s) ? 0 : this.s * t * (1 - t), n = Math.cos(e3), a = Math.sin(e3);
        return new st(255 * (t + r * (gb * n + G0 * a)), 255 * (t + r * (K0 * n + Qc * a)), 255 * (t + r * (Vl * n)), this.opacity);
      } }));
      Xc = (e3) => () => e3;
      F0 = (function e(t) {
        var r = $8(t);
        function n(a, i) {
          var o = r((a = Oc(a)).r, (i = Oc(i)).r), l = r(a.g, i.g), s = r(a.b, i.b), u = ut(a.opacity, i.opacity);
          return function(c) {
            return a.r = o(c), a.g = l(c), a.b = s(c), a.opacity = u(c), a + "";
          };
        }
        return n.gamma = e, n;
      })(1);
      WN = wb(T8);
      YN = wb(A8);
      $0 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
      E0 = new RegExp($0.source, "g");
      W8 = bb(Q0);
      Y8 = bb(ut);
      G8 = kb(Q0);
      K8 = kb(ut);
      Q8 = Eb(Q0);
      X8 = Eb(ut);
      gx = [0, 1];
      u7 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      Hc.prototype = Z0.prototype;
      Z0.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
      };
      yx = { "%": (e3, t) => (e3 * 100).toFixed(t), b: (e3) => Math.round(e3).toString(2), c: (e3) => e3 + "", d: o7, e: (e3, t) => e3.toExponential(t), f: (e3, t) => e3.toFixed(t), g: (e3, t) => e3.toPrecision(t), o: (e3) => Math.round(e3).toString(8), p: (e3, t) => vx(e3 * 100, t), r: vx, s: d7, X: (e3) => Math.round(e3).toString(16).toUpperCase(), x: (e3) => Math.round(e3).toString(16) };
      xx = Array.prototype.map;
      bx = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
      h7({ thousands: ",", grouping: [3], currency: ["$", ""] });
      R0 = /* @__PURE__ */ new Date();
      S0 = /* @__PURE__ */ new Date();
      J0 = mt((e3) => {
        e3.setTime(e3 - e3.getMilliseconds());
      }, (e3, t) => {
        e3.setTime(+e3 + t * 1e3);
      }, (e3, t) => (t - e3) / 1e3, (e3) => e3.getUTCSeconds());
      qN = J0.range;
      Nb = mt((e3) => {
        e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * 1e3);
      }, (e3, t) => {
        e3.setTime(+e3 + t * 6e4);
      }, (e3, t) => (t - e3) / 6e4, (e3) => e3.getMinutes());
      GN = Nb.range;
      Mb = mt((e3) => {
        e3.setUTCSeconds(0, 0);
      }, (e3, t) => {
        e3.setTime(+e3 + t * 6e4);
      }, (e3, t) => (t - e3) / 6e4, (e3) => e3.getUTCMinutes());
      KN = Mb.range;
      Lb = mt((e3) => {
        e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * 1e3 - e3.getMinutes() * 6e4);
      }, (e3, t) => {
        e3.setTime(+e3 + t * 36e5);
      }, (e3, t) => (t - e3) / 36e5, (e3) => e3.getHours());
      QN = Lb.range;
      Pb = mt((e3) => {
        e3.setUTCMinutes(0, 0, 0);
      }, (e3, t) => {
        e3.setTime(+e3 + t * 36e5);
      }, (e3, t) => (t - e3) / 36e5, (e3) => e3.getUTCHours());
      XN = Pb.range;
      _b = mt((e3) => e3.setHours(0, 0, 0, 0), (e3, t) => e3.setDate(e3.getDate() + t), (e3, t) => (t - e3 - (t.getTimezoneOffset() - e3.getTimezoneOffset()) * 6e4) / 864e5, (e3) => e3.getDate() - 1);
      ZN = _b.range;
      Tb = mt((e3) => {
        e3.setUTCHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setUTCDate(e3.getUTCDate() + t);
      }, (e3, t) => (t - e3) / 864e5, (e3) => e3.getUTCDate() - 1);
      JN = Tb.range;
      w7 = mt((e3) => {
        e3.setUTCHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setUTCDate(e3.getUTCDate() + t);
      }, (e3, t) => (t - e3) / 864e5, (e3) => Math.floor(e3 / 864e5));
      eM = w7.range;
      Ab = Xa(0);
      x7 = Xa(1);
      b7 = Xa(2);
      k7 = Xa(3);
      E7 = Xa(4);
      R7 = Xa(5);
      S7 = Xa(6);
      tM = Ab.range;
      rM = x7.range;
      nM = b7.range;
      aM = k7.range;
      iM = E7.range;
      oM = R7.range;
      lM = S7.range;
      Fb = Za(0);
      C7 = Za(1);
      D7 = Za(2);
      N7 = Za(3);
      M7 = Za(4);
      L7 = Za(5);
      P7 = Za(6);
      sM = Fb.range;
      uM = C7.range;
      cM = D7.range;
      dM = N7.range;
      fM = M7.range;
      hM = L7.range;
      pM = P7.range;
      $b = mt((e3) => {
        e3.setDate(1), e3.setHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setMonth(e3.getMonth() + t);
      }, (e3, t) => t.getMonth() - e3.getMonth() + (t.getFullYear() - e3.getFullYear()) * 12, (e3) => e3.getMonth());
      mM = $b.range;
      Ob = mt((e3) => {
        e3.setUTCDate(1), e3.setUTCHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setUTCMonth(e3.getUTCMonth() + t);
      }, (e3, t) => t.getUTCMonth() - e3.getUTCMonth() + (t.getUTCFullYear() - e3.getUTCFullYear()) * 12, (e3) => e3.getUTCMonth());
      gM = Ob.range;
      em = mt((e3) => {
        e3.setMonth(0, 1), e3.setHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setFullYear(e3.getFullYear() + t);
      }, (e3, t) => t.getFullYear() - e3.getFullYear(), (e3) => e3.getFullYear());
      em.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : mt((t) => {
        t.setFullYear(Math.floor(t.getFullYear() / e3) * e3), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      }, (t, r) => {
        t.setFullYear(t.getFullYear() + r * e3);
      });
      vM = em.range;
      tm = mt((e3) => {
        e3.setUTCMonth(0, 1), e3.setUTCHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setUTCFullYear(e3.getUTCFullYear() + t);
      }, (e3, t) => t.getUTCFullYear() - e3.getUTCFullYear(), (e3) => e3.getUTCFullYear());
      tm.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : mt((t) => {
        t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e3) * e3), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      }, (t, r) => {
        t.setUTCFullYear(t.getUTCFullYear() + r * e3);
      });
      yM = tm.range;
      kx = { lab: q8, hcl: G8, "hcl-long": K8, hsl: W8, "hsl-long": Y8, cubehelix: Q8, "cubehelix-long": X8, rgb: F0 };
      U7 = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
      H7 = "%Y-%m-%d %H:%M";
      Ex = { day: _b, hour: Lb, minute: Nb, month: $b, second: J0, week: Ab, year: em };
      Rx = { day: Tb, hour: Pb, minute: Mb, month: Ob, second: J0, week: Fb, year: tm };
      Q7 = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
      X7 = { domain: _7, nice: V7, zero: K7, interpolate: j7, round: q7, align: A7, base: F7, clamp: $7, constant: O7, exponent: z7, padding: W7, range: T7, reverse: Y7, unknown: G7 };
      Z7 = zb("domain", "range", "reverse", "align", "padding", "round");
      eD = zb("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
      z0 = Math.PI;
      I0 = 2 * z0;
      Wa = 1e-6;
      tD = I0 - Wa;
      j0.prototype = Ib.prototype = { constructor: j0, moveTo: function(e3, t) {
        this._ += "M" + (this._x0 = this._x1 = +e3) + "," + (this._y0 = this._y1 = +t);
      }, closePath: function() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      }, lineTo: function(e3, t) {
        this._ += "L" + (this._x1 = +e3) + "," + (this._y1 = +t);
      }, quadraticCurveTo: function(e3, t, r, n) {
        this._ += "Q" + +e3 + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n);
      }, bezierCurveTo: function(e3, t, r, n, a, i) {
        this._ += "C" + +e3 + "," + +t + "," + +r + "," + +n + "," + (this._x1 = +a) + "," + (this._y1 = +i);
      }, arcTo: function(e3, t, r, n, a) {
        e3 = +e3, t = +t, r = +r, n = +n, a = +a;
        var i = this._x1, o = this._y1, l = r - e3, s = n - t, u = i - e3, c = o - t, d = u * u + c * c;
        if (a < 0) throw new Error("negative radius: " + a);
        if (this._x1 === null) this._ += "M" + (this._x1 = e3) + "," + (this._y1 = t);
        else if (d > Wa) if (!(Math.abs(c * l - s * u) > Wa) || !a) this._ += "L" + (this._x1 = e3) + "," + (this._y1 = t);
        else {
          var f = r - i, h = n - o, v = l * l + s * s, y = f * f + h * h, m = Math.sqrt(v), g = Math.sqrt(d), p = a * Math.tan((z0 - Math.acos((v + d - y) / (2 * m * g))) / 2), w = p / g, b = p / m;
          Math.abs(w - 1) > Wa && (this._ += "L" + (e3 + w * u) + "," + (t + w * c)), this._ += "A" + a + "," + a + ",0,0," + +(c * f > u * h) + "," + (this._x1 = e3 + b * l) + "," + (this._y1 = t + b * s);
        }
      }, arc: function(e3, t, r, n, a, i) {
        e3 = +e3, t = +t, r = +r, i = !!i;
        var o = r * Math.cos(n), l = r * Math.sin(n), s = e3 + o, u = t + l, c = 1 ^ i, d = i ? n - a : a - n;
        if (r < 0) throw new Error("negative radius: " + r);
        this._x1 === null ? this._ += "M" + s + "," + u : (Math.abs(this._x1 - s) > Wa || Math.abs(this._y1 - u) > Wa) && (this._ += "L" + s + "," + u), r && (d < 0 && (d = d % I0 + I0), d > tD ? this._ += "A" + r + "," + r + ",0,1," + c + "," + (e3 - o) + "," + (t - l) + "A" + r + "," + r + ",0,1," + c + "," + (this._x1 = s) + "," + (this._y1 = u) : d > Wa && (this._ += "A" + r + "," + r + ",0," + +(d >= z0) + "," + c + "," + (this._x1 = e3 + r * Math.cos(a)) + "," + (this._y1 = t + r * Math.sin(a))));
      }, rect: function(e3, t, r, n) {
        this._ += "M" + (this._x0 = this._x1 = +e3) + "," + (this._y0 = this._y1 = +t) + "h" + +r + "v" + +n + "h" + -r + "Z";
      }, toString: function() {
        return this._;
      } };
      rD = Ib;
      jb.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(e3, t) {
        switch (e3 = +e3, t = +t, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(e3, t);
            break;
        }
      } };
      sD = Vx(Wx());
      uD = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
      fD = Vx(Wx());
      hD = ["className", "innerRef"];
      Zc = (0, Ql.createContext)(null);
      rm = (e3) => (0, C.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: e3 });
      mD = rm((0, C.jsx)("path", { d: "M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75" }));
      Vb = rm((0, C.jsx)("path", { d: "M14.9998 20L7.70696 12.7071C7.31643 12.3166 7.31643 11.6834 7.70695 11.2929L14.9998 4" }));
      Wb = rm((0, C.jsx)("path", { d: "M9 4L16.2929 11.2929C16.6834 11.6834 16.6834 12.3166 16.2929 12.7071L9 20" }));
      Yb = { photo: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), (0, C.jsx)("circle", { cx: "9", cy: "9", r: "2" }), (0, C.jsx)("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] }), food: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }), (0, C.jsx)("path", { d: "M7 2v20" }), (0, C.jsx)("path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })] }), poultry: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }), (0, C.jsx)("path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" })] }), meat: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" }), (0, C.jsx)("path", { d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }), (0, C.jsx)("circle", { cx: "12.5", cy: "8.5", r: "2.5" })] }), fish: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }), (0, C.jsx)("path", { d: "M18 12v.5" }), (0, C.jsx)("path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }), (0, C.jsx)("path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }), (0, C.jsx)("path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }), (0, C.jsx)("path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" })] }), salad: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M7 21h10" }), (0, C.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, C.jsx)("path", { d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }), (0, C.jsx)("path", { d: "m13 12 4-4" }), (0, C.jsx)("path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" })] }), bowl: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, C.jsx)("path", { d: "M7 21h10" }), (0, C.jsx)("path", { d: "M19.5 12 22 6" }), (0, C.jsx)("path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }), (0, C.jsx)("path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }), (0, C.jsx)("path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" })] }), bread: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" }), (0, C.jsx)("path", { d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" }), (0, C.jsx)("path", { d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" }), (0, C.jsx)("path", { d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" }), (0, C.jsx)("path", { d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" })] }), pizza: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "m12 14-1 1" }), (0, C.jsx)("path", { d: "m13.75 18.25-1.25 1.42" }), (0, C.jsx)("path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }), (0, C.jsx)("path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7" }), (0, C.jsx)("path", { d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" })] }), sandwich: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }), (0, C.jsx)("path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }), (0, C.jsx)("path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }), (0, C.jsx)("path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }), (0, C.jsx)("rect", { width: "20", height: "4", x: "2", y: "11", rx: "1" })] }), dessert: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M16 13H3" }), (0, C.jsx)("path", { d: "M16 17H3" }), (0, C.jsx)("path", { d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" }), (0, C.jsx)("circle", { cx: "9", cy: "7", r: "2" })] }), fruit: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0" }), (0, C.jsx)("path", { d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" })] }), vegetable: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }), (0, C.jsx)("path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }), (0, C.jsx)("path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" })] }), drink: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }), (0, C.jsx)("path", { d: "M5 8h14" }), (0, C.jsx)("path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }), (0, C.jsx)("path", { d: "m12 8 1-6h2" })] }), coffee: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M10 2v2" }), (0, C.jsx)("path", { d: "M14 2v2" }), (0, C.jsx)("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }), (0, C.jsx)("path", { d: "M6 2v2" })] }), wine: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M8 22h8" }), (0, C.jsx)("path", { d: "M7 10h10" }), (0, C.jsx)("path", { d: "M12 15v7" }), (0, C.jsx)("path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" })] }), cocktail: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M8 22h8" }), (0, C.jsx)("path", { d: "M12 11v11" }), (0, C.jsx)("path", { d: "m19 3-7 8-7-8Z" })] }), place: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), (0, C.jsx)("circle", { cx: "12", cy: "10", r: "3" })] }), hotel: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }), (0, C.jsx)("path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }), (0, C.jsx)("path", { d: "M12 4v6" }), (0, C.jsx)("path", { d: "M2 18h20" })] }), home: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }), (0, C.jsx)("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })] }), building: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M10 12h4" }), (0, C.jsx)("path", { d: "M10 8h4" }), (0, C.jsx)("path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }), (0, C.jsx)("path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }), (0, C.jsx)("path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" })] }), flight: (0, C.jsx)(C.Fragment, { children: (0, C.jsx)("path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }) }), car: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }), (0, C.jsx)("circle", { cx: "7", cy: "17", r: "2" }), (0, C.jsx)("path", { d: "M9 17h6" }), (0, C.jsx)("circle", { cx: "17", cy: "17", r: "2" })] }), nature: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }), (0, C.jsx)("path", { d: "M7 16v6" }), (0, C.jsx)("path", { d: "M13 19v3" }), (0, C.jsx)("path", { d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" })] }), product: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M16 10a4 4 0 0 1-8 0" }), (0, C.jsx)("path", { d: "M3.103 6.034h17.794" }), (0, C.jsx)("path", { d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" })] }), clothing: (0, C.jsx)(C.Fragment, { children: (0, C.jsx)("path", { d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }) }), device: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }), (0, C.jsx)("path", { d: "M12 18h.01" })] }), furniture: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }), (0, C.jsx)("path", { d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }), (0, C.jsx)("path", { d: "M4 18v2" }), (0, C.jsx)("path", { d: "M20 18v2" }), (0, C.jsx)("path", { d: "M12 4v9" })] }), gift: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M12 7v14" }), (0, C.jsx)("path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }), (0, C.jsx)("path", { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" }), (0, C.jsx)("rect", { x: "3", y: "7", width: "18", height: "4", rx: "1" })] }), book: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M12 7v14" }), (0, C.jsx)("path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" })] }), person: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("circle", { cx: "12", cy: "8", r: "5" }), (0, C.jsx)("path", { d: "M20 21a8 8 0 0 0-16 0" })] }), pet: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("circle", { cx: "11", cy: "4", r: "2" }), (0, C.jsx)("circle", { cx: "18", cy: "8", r: "2" }), (0, C.jsx)("circle", { cx: "20", cy: "16", r: "2" }), (0, C.jsx)("path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" })] }), music: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M9 18V5l12-2v13" }), (0, C.jsx)("circle", { cx: "6", cy: "18", r: "3" }), (0, C.jsx)("circle", { cx: "18", cy: "16", r: "3" })] }), event: (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), (0, C.jsx)("path", { d: "M13 5v2" }), (0, C.jsx)("path", { d: "M13 17v2" }), (0, C.jsx)("path", { d: "M13 11v2" })] }) };
      gD = Object.keys(Yb);
      qb = (...e3) => e3.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
      yD = (e3) => e3.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      wD = (e3) => e3.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, r, n) => n ? n.toUpperCase() : r.toLowerCase());
      Dx = (e3) => {
        let t = wD(e3);
        return t.charAt(0).toUpperCase() + t.slice(1);
      };
      xD = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
      bD = (e3) => {
        for (let t in e3) if (t.startsWith("aria-") || t === "role" || t === "title") return true;
        return false;
      };
      kD = (0, Wl.forwardRef)(({ color: e3 = "currentColor", size: t = 24, strokeWidth: r = 2, absoluteStrokeWidth: n, className: a = "", children: i, iconNode: o, ...l }, s) => (0, Wl.createElement)("svg", { ref: s, ...xD, width: t, height: t, stroke: e3, strokeWidth: n ? Number(r) * 24 / Number(t) : r, className: qb("lucide", a), ...!i && !bD(l) && { "aria-hidden": "true" }, ...l }, [...o.map(([u, c]) => (0, Wl.createElement)(u, c)), ...Array.isArray(i) ? i : [i]]));
      ed = (e3, t) => {
        let r = (0, Jc.forwardRef)(({ className: n, ...a }, i) => (0, Jc.createElement)(kD, { ref: i, iconNode: t, className: qb(`lucide-${yD(Dx(e3))}`, `lucide-${e3}`, n), ...a }));
        return r.displayName = Dx(e3), r;
      };
      ED = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]];
      Gb = ed("arrow-up-right", ED);
      RD = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
      Kb = ed("check", RD);
      SD = [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]];
      CD = ed("copy", SD);
      DD = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
      ND = ed("loader-circle", DD);
      MD = 2e3;
      LD = 1500;
      TD = 320;
      AD = typeof window > "u" ? Lt.useEffect : Lt.useLayoutEffect;
      jl = { scale: 1, x: 0, y: 0 };
      Zb = (e3) => Math.min(4, Math.max(1, e3));
      Mx = (e3, t) => Math.min(t, Math.max(-t, e3));
      Lx = (e3, t) => Math.hypot(e3.x - t.x, e3.y - t.y);
      Px = (e3, t) => ({ x: (e3.x + t.x) / 2, y: (e3.y + t.y) / 2 });
      B0 = ["pointerdown", "wheel", "touchstart"];
      BD = ["https:", "http:", "mailto:", "tel:"];
      i5 = (0, ha.createContext)(false);
      VD = (0, ue.jsx)("svg", { "aria-hidden": "true", width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: (0, ue.jsx)("path", { d: "M11.5497 2.03292C11.7307 1.65569 12.2693 1.65569 12.4503 2.03292L15.0189 7.38732C15.0918 7.53919 15.2367 7.64404 15.4041 7.66599L21.3154 8.44106C21.732 8.49569 21.8986 9.0078 21.5935 9.29588L17.2708 13.3775C17.1479 13.4935 17.0924 13.6637 17.1232 13.8297L18.2087 19.6603C18.2853 20.0717 17.8494 20.388 17.4803 20.1888L12.2376 17.3585C12.0894 17.2785 11.9106 17.2785 11.7624 17.3585L6.51969 20.1888C6.15063 20.388 5.71473 20.0717 5.79132 19.6603L6.87675 13.8297C6.90764 13.6637 6.8521 13.4935 6.7292 13.3775L2.40651 9.29588C2.10142 9.0078 2.26803 8.49569 2.68463 8.44106L8.5959 7.66599C8.7633 7.64404 8.90823 7.53919 8.98108 7.38732L11.5497 2.03292Z" }) });
      YD = [0, 0.5, 1];
      b5 = (e3) => String(e3);
      Yl = "var(--ds-teal)";
      Vc = ["var(--ds-ink-2)", "var(--ds-ink-3)", "var(--ds-ink-4)"];
      ql = (e3) => Vc[e3 % Vc.length];
      qD = (e3) => ({ "--file-series": ql(e3) });
      _x = (e3) => [...e3].reduce((t, r) => t + (r >= "\u2E80" ? 2 : 1), 0);
      r9 = "M0.42 3.09L1.61 2.89L0.48 2.69L1.62 2.43L0.99 2.17L1.97 2.13L1.43 1.9L2.46 1.86L2.15 1.73L2.75 1.64L2.37 1.39L3.35 0.96L2.98 0.79L8.51 0.11L26.87 0.15L26.4 0.56L27.63 0.18L31.8 0.62L38.9 0.13L45.68 0.81L47.76 0.4L55.48 0.77L56.29 1.18L55.58 1.23L58.14 1.65L59.81 1.57L60.9 0.86L60.75 1.02L60.99 1.16L60.77 1.29L60.96 1.36L60.12 1.53L61 1.98L60.66 2.11L60.78 2.4L60.62 2.54L60.91 2.62L60.59 2.74L60.77 2.86L60.64 3.13L60.21 3.27L60.83 4.03L60.31 4.49L60.77 4.95L60.3 5.23L60.56 5.37L60.37 5.65L60.88 5.7L60.33 5.9L60.73 6.04L60.24 6.22L60.41 6.56L53.72 6.69L51.56 7.12L53.3 7.17L53.68 7.37L52.95 7.49L43.88 7.49L43.34 7.17L44.31 7.17L44.04 6.91L36.19 6.62L21.85 7.21L21.55 6.53L20.27 6.65L21.36 6.91L19.71 7.23L16.12 7.16L16.75 7.45L16.16 7.64L16.78 7.65L15.91 7.79L6.54 7.78L2.19 7.22L2.59 6.92L1.52 6.51L1.67 6.34L1.46 6.11L1.89 6.11L1.25 5.8L1.75 5.46L1.07 5.17L1.42 5.03L1.18 4.66L1.6 4.6L0.78 4.06L1.65 3.81L0.57 3.8L1.45 3.75L1.26 3.62L1.67 3.27L1.31 3.25L1.96 3.02L0.68 3.51ZM4.51 7.91L5.27 7.67ZM11.88 7.73L12.5 7.71ZM18.52 7.52L19.25 7.58ZM48.59 7.44L49.2 7.51ZM56.71 7.35L57.69 7.39ZM46.44 7.35L47.22 7.29ZM42.12 7.21L42.92 7.23ZM40.43 7.11L41.23 7.11ZM44.47 7.25L44.94 7.28ZM19.76 7.21L20.66 7.19ZM54.52 7.24L55.14 7.2ZM46.78 7.12L49.14 7.11ZM25.38 7L25.99 7.05ZM40.06 7.06L40.64 6.92ZM17.92 6.98L18.45 6.98ZM31.56 6.87L32.37 6.87ZM51.56 6.74L53.26 6.67ZM59.1 6.78L59.62 6.72ZM21.76 6.42L22.95 6.75ZM16.15 6.52L16.67 6.42ZM17.54 6.49L18.05 6.51ZM0.81 3.97L1.43 3.86ZM58.65 2.16L59.99 2.16ZM0 2.15L0.9 2.03ZM57.21 1.79L57.78 2.15L58.45 1.72ZM0.39 1.96L0.96 1.94ZM59.2 1.89L60.35 1.77ZM55.93 1.38L57.07 1.33ZM59.1 1.38L59.57 1.39ZM57.17 1.29L58.35 1.28ZM59.18 1.23L59.86 1.17ZM55.19 1.1L55.75 1.02ZM53.92 1.05L54.38 1.08ZM2.03 0.84L2.99 0.9ZM59.36 1.02L59.87 1.09ZM56.26 0.83L56.73 0.76ZM46.89 0.54L47.4 0.59ZM48.54 0.56L51.82 0.61ZM28.76 0.57L29.23 0.53ZM30.84 0.35L32.27 0.45ZM32.23 0.33L33.89 0.31ZM39.33 0.17L40.33 0.19Z";
      n9 = "0 0 61 8";
      Tx = "http://www.w3.org/2000/svg";
      Ax = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
      Yt = (e3) => Math.round(e3 * 10) / 10;
      h9 = class {
        drawn = /* @__PURE__ */ new Map();
        point(e3, t, r) {
          let n = this.drawn.get(e3);
          if (n?.id === t && n.element === r) {
            n.nodes.length > 0 && this.stay(e3, n);
            return;
          }
          n && this.release(n, 200);
          let a = { id: t, element: r, nodes: [], drawMs: 0, stop: () => {
          } };
          this.drawn.set(e3, a), a.stop = f9(r, () => this.draw(e3, a));
        }
        check() {
          for (let [e3, t] of this.drawn) {
            if (!t.place) continue;
            let r = t.element.isConnected ? this.place(t.element) : void 0;
            r && Math.abs(r.left - t.place.left) < 1 && Math.abs(r.top - t.place.top) < 1 && Math.abs(r.width - t.place.width) < 1 && Math.abs(r.height - t.place.height) < 1 || (this.drawn.delete(e3), this.release(t, 200));
          }
        }
        area(e3) {
          return e3.closest("dialog") ?? document.body;
        }
        within(e3, t) {
          let r = Fx(this.area(e3)).getBoundingClientRect();
          return { left: t.left - r.left, top: t.top - r.top, width: t.width, height: t.height };
        }
        place(e3) {
          return this.within(e3, e3.getBoundingClientRect());
        }
        draw(e3, t) {
          if (!t.element.isConnected) {
            this.drawn.delete(e3);
            return;
          }
          let r = Fx(this.area(t.element)), n = this.place(t.element), a = a9(d9(c9(t.element)));
          if (i9(t.element.getAttribute("data-live-mark"), n, a) === "stroke") {
            let i = o9(a.length);
            if (a.forEach((o, l) => {
              let s = this.within(t.element, o), u = { left: s.left - 0.18 * o.size, top: s.top + s.height - (0.13 + 0.42) * o.size, width: s.width + 2 * 0.18 * o.size, height: 0.42 * o.size };
              t.nodes.push($x("stroke", t.id, u, n9, r9, i[l].ms, i[l].wait));
            }), t.drawMs = i[i.length - 1].wait + i[i.length - 1].ms, getComputedStyle(t.element).direction === "rtl") for (let o of t.nodes) o.setAttribute("data-rtl", "");
          } else {
            let i = Math.max(n.left, 10), o = Math.min(n.left + n.width, this.area(t.element).clientWidth - 10) - i, l = { left: i - 7, top: n.top - 7, width: o + 14, height: n.height + 14 };
            t.drawMs = u9(o, n.height), t.nodes.push($x("loop", t.id, l, `0 0 ${Yt(l.width)} ${Yt(l.height)}`, s9(o, n.height), t.drawMs, 0));
          }
          Ax() && (t.drawMs = 0), t.place = n;
          for (let i of t.nodes) r.appendChild(i);
          r.getBoundingClientRect();
          for (let i of t.nodes) i.setAttribute("data-phase", "shown");
          this.stay(e3, t);
        }
        stay(e3, t) {
          clearTimeout(t.hold), t.hold = setTimeout(() => {
            this.drawn.get(e3) === t && this.drawn.delete(e3), this.release(t, 400);
          }, t.drawMs + 1100);
        }
        release(e3, t) {
          e3.stop(), clearTimeout(e3.hold);
          for (let r of e3.nodes) {
            if (Ax()) {
              r.remove();
              continue;
            }
            r.style.setProperty("--file-live-mark-fade", `${t}ms`), r.setAttribute("data-phase", "leaving"), setTimeout(() => r.remove(), t);
          }
        }
      };
      p9 = 30;
      m9 = 360;
      g9 = 200;
      v9 = 2e3;
      y9 = 280;
      w9 = "cubic-bezier(0.2, 0.7, 0.2, 1)";
      D0 = () => [...document.querySelectorAll("[data-live-id]")];
      Ox = () => [...document.querySelectorAll("[data-live-reveal]")];
      C5 = [];
      x9 = /* @__PURE__ */ new Set(["PhotoCard"]);
      zx = 16;
      k9 = class {
        constructor(e3) {
          this.runtime = e3;
        }
        data = o8();
        seq = null;
        reading = false;
        pending = [];
        started = false;
        listeners = /* @__PURE__ */ new Set();
        marks = new h9();
        open = null;
        details = /* @__PURE__ */ new Set();
        entering = /* @__PURE__ */ new Map();
        gliding = /* @__PURE__ */ new WeakMap();
        enterSlot = 0;
        itemOf = /* @__PURE__ */ new WeakMap();
        lists = /* @__PURE__ */ new Map();
        subscribe = (e3) => (this.listeners.add(e3), () => {
          this.listeners.delete(e3);
        });
        getData = () => this.data;
        getOpen = () => this.open;
        setOpen(e3) {
          this.open !== e3 && (this.open = e3, this.emit());
        }
        holdDetail(e3) {
          return this.details.add(e3), () => {
            this.details.delete(e3);
          };
        }
        drawerOf(e3) {
          let t = this.data.nodes;
          for (let r = e3; r !== void 0; r = Object.keys(t).find((n) => t[n].children.includes(r))) {
            let n = t[r];
            if (n && n.children.length > 0 && (x9.has(n.type) || this.details.has(r))) return r;
          }
          return null;
        }
        start() {
          if (this.started || typeof window > "u") return;
          this.started = true;
          let e3 = this.runtime()?.live;
          e3?.subscribe((r) => this.receive(r));
          let t = this.read();
          t && e3?.hold?.(t);
        }
        item(e3) {
          let t = this.data.nodes[e3];
          if (t?.type !== Xx) return;
          let r = this.itemOf.get(t);
          return r || (r = { ...t.props, id: e3 }, this.itemOf.set(t, r)), r;
        }
        items(e3) {
          let t = this.data.nodes[e3];
          if (t?.type !== Qx) return C5;
          let r = t.children.map((i) => this.data.nodes[i]), n = this.lists.get(e3);
          if (n?.collection === t && r.every((i, o) => i === n.nodes[o])) return n.items;
          let a = t.children.map((i) => this.item(i));
          return this.lists.set(e3, { collection: t, nodes: r, items: a }), a;
        }
        emit() {
          for (let e3 of [...this.listeners]) e3();
        }
        read() {
          let e3 = this.runtime();
          if (!(this.reading || !e3?.request)) return this.reading = true, e3.request("live.read", null).then((t) => {
            this.reading = false, t.status === "ok" && typeof t.seq == "number" && typeof t.data == "string" && (this.seq === null || t.seq > this.seq) ? this.load(t.seq, JSON.parse(t.data)) : this.drain();
          }, () => {
            this.reading = false, this.drain();
          });
        }
        load(e3, t) {
          this.data = t, this.seq = e3, this.drain();
        }
        drain() {
          let e3 = this.pending;
          this.pending = [];
          for (let t of e3) this.apply(t);
          this.emit();
        }
        inStep(e3) {
          return this.seq !== null && e3.seq === this.seq + 1;
        }
        apply(e3) {
          this.inStep(e3) && (this.data = s8(this.data, e3.op), this.seq = e3.seq);
        }
        receive(e3) {
          if (e3.kind === "resync") this.read();
          else if (e3.kind === "op") {
            if (this.seq !== null && e3.seq <= this.seq) return;
            if (this.reading || !this.inStep(e3)) {
              this.pending.push(e3), this.read();
              return;
            }
            let t = this.data.nodes, r = new Map(D0().map((a) => [a, a.getBoundingClientRect()])), n = new Set(Ox());
            this.apply(e3), e3.op.op === "add" && !(e3.op.id in t) && this.entering.set(e3.op.id, this.nextEnter()), this.emit(), requestAnimationFrame(() => this.settle(r, n));
          } else this.setOpen(this.drawerOf(e3.id)), this.focus(e3, p9);
        }
        nextEnter() {
          let e3 = performance.now();
          return this.enterSlot = Math.min(Math.max(e3, this.enterSlot + g9), e3 + v9), this.enterSlot - e3;
        }
        settle(e3, t) {
          let r = D0();
          for (let o of r) this.gliding.get(o)?.cancel();
          let n = Ox().filter((o) => !t.has(o));
          for (let o of n) {
            let l = r.find((s) => o.contains(s) && this.entering.has(s.getAttribute("data-live-id")));
            this.enter(o, l ? this.entering.get(l.getAttribute("data-live-id")) : this.nextEnter());
          }
          let a = new Map(r.map((o) => [o, o.getBoundingClientRect()])), i = /* @__PURE__ */ new Map();
          for (let o of r) {
            let l = e3.get(o), s = this.entering.get(o.getAttribute("data-live-id"));
            if (!l) {
              s !== void 0 && !n.some((v) => v.contains(o)) && this.enter(o, s);
              continue;
            }
            let u = a.get(o), c = { x: l.left - u.left, y: l.top - u.top };
            i.set(o, c);
            let d = o.parentElement?.closest("[data-live-id]"), f = (d && i.get(d)) ?? { x: 0, y: 0 }, h = { x: c.x - f.x, y: c.y - f.y };
            Math.abs(h.x) < 1 && Math.abs(h.y) < 1 || matchMedia("(prefers-reduced-motion: reduce)").matches || this.gliding.set(o, o.animate([{ transform: `translate(${h.x}px, ${h.y}px)` }, { transform: "none" }], { duration: y9, easing: w9 }));
          }
          this.entering.clear(), this.marks.check();
        }
        enter(e3, t) {
          e3.style.setProperty("--file-live-enter-delay", `${Math.round(t)}ms`), e3.setAttribute("data-live-enter", ""), setTimeout(() => this.endEnter(e3), t + m9);
        }
        endEnter(e3) {
          e3.removeAttribute("data-live-enter"), e3.style.removeProperty("--file-live-enter-delay");
        }
        focus(e3, t) {
          let r = D0().find((a) => a.getAttribute("data-live-id") === e3.id);
          if (!r) {
            t > 0 && requestAnimationFrame(() => this.focus(e3, t - 1));
            return;
          }
          if (this.open === e3.id) return;
          let n = r.closest("dialog");
          n ? b9(n, r) : this.runtime()?.live?.reveal(e3.request, r);
          for (let a = r; a; a = a.parentElement?.closest("[data-live-id]")) this.endEnter(a), this.gliding.get(a)?.cancel();
          this.marks.point(e3.actor, e3.id, r);
        }
      };
      Xr = new k9(() => window.instinctFile);
      D9 = { Region: (e3, t) => (0, Ee.jsx)(Ee.Fragment, { children: t }), Group: (e3, t) => (0, Ee.jsx)(a5, { ...e3, children: t }), Rows: (e3, t) => (0, Ee.jsx)(o5, { ...e3, children: t }), PhotoCards: (e3, t) => (0, Ee.jsx)(E5, { children: t }), Text: (e3, t) => (0, Ee.jsx)(s5, { children: t }), Header: (e3) => (0, Ee.jsx)(n5, { ...e3 }), Row: (e3) => (0, Ee.jsx)(l5, { ...e3 }), PhotoCard: (e3, t) => (0, Ee.jsx)(C9, { props: e3, children: t }), Facts: (e3) => (0, Ee.jsx)(ad, { ...e3 }), Heading: (e3) => (0, Ee.jsx)(u5, { sub: typeof e3.sub == "string" ? e3.sub : void 0, children: sa(e3.text) }), Paragraph: (e3) => (0, Ee.jsx)(c5, { children: sa(e3.text) }), Bullets: (e3) => (0, Ee.jsx)(d5, { ...e3 }), KeySentence: (e3) => (0, Ee.jsx)(f5, { children: sa(e3.text) }), Callout: (e3) => (0, Ee.jsx)(g5, { title: sa(e3.title), tone: e3.tone, children: sa(e3.text) }), NumberedList: (e3) => (0, Ee.jsx)(v5, { ...e3 }), Table: (e3) => (0, Ee.jsx)(y5, { ...e3 }), Caption: (e3) => (0, Ee.jsx)(p5, { children: sa(e3.text) }), Rule: () => (0, Ee.jsx)(m5, {}), Closing: (e3) => (0, Ee.jsx)(w5, { children: sa(e3.text) }), Figure: (e3) => (0, Ee.jsx)(h5, { ...e3 }), Photos: (e3) => (0, Ee.jsx)(im, { ...e3 }), BarChart: (e3) => (0, Ee.jsx)(k5, { ...e3 }), ButtonLink: (e3) => (0, Ee.jsx)(Qb, { ...e3, children: sa(e3.label) }) };
      Ix = /* @__PURE__ */ new Set();
      N9 = class extends Kc.Component {
        state = { failed: false };
        static getDerivedStateFromError() {
          return { failed: true };
        }
        componentDidCatch(e3) {
          M5(this.props.id, `could not render as ${this.props.node.type}: ${e3.message}`);
        }
        componentDidUpdate(e3) {
          this.state.failed && e3.node !== this.props.node && this.setState({ failed: false });
        }
        render() {
          return this.state.failed ? null : this.props.children;
        }
      };
      L5 = (0, Kc.memo)(function({ id: e3 }) {
        let t = N5(e3);
        if (!t || t.type === Qx || t.type === Xx) return null;
        let r = D9[t.type];
        if (!r) return M5(e3, `has unknown type "${t.type}"; this File's kit cannot render it`), null;
        let n = t.children.map((a) => (0, Ul.jsx)(L5, { id: a }, a));
        return (0, Ul.jsx)(N9, { id: e3, node: t, children: (0, Ul.jsx)(Zc.Provider, { value: e3, children: r(t.props, n) }) });
      });
      P9 = { label: "Let\u2019s buy this", request: "I want this product. Check the current offer and prepare checkout for the selected variant. Resolve only essential missing choices in our conversation.", kind: "checkout" };
      jx = (e3, t) => Object.entries(t).every(([r, n]) => e3.options[r] === n);
      A9 = (e3) => e3.map((t) => t.src).join(" ");
      Ux = (e3) => j5(e3.map((t) => t.photos?.length ? t.photos : void 0), A9);
      Hx = (e3) => e3.length > 1 ? `${e3[0]}\u2013${e3[e3.length - 1]}` : e3[0];
      sd = O(we(), 1);
    }
  });

  // page-kit:react-dom/client
  var require_client = __commonJS({
    "page-kit:react-dom/client"(exports, module) {
      module.exports = (init_kit(), __toCommonJS(kit_exports)).ReactDomClient;
    }
  });

  // page-kit:react
  var require_react = __commonJS({
    "page-kit:react"(exports, module) {
      module.exports = (init_kit(), __toCommonJS(kit_exports)).React;
    }
  });

  // page-kit:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "page-kit:react/jsx-runtime"(exports, module) {
      module.exports = (init_kit(), __toCommonJS(kit_exports)).ReactJsxRuntime;
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // page-kit:@instinct/files
  var { BarChart, Bullets, Button, ButtonLink, Callout, Caption, ChoiceRow, CloseButton, Closing, CompareColumns, CopyButton, DataTable, DotChart, DsButton, DsIconButton, Facts, Figure, FileButton, FileCard, FileGround, FileRouter, Group, Header, Heading, ImageFrame, KeySentence, LineChart, Link, LiveRegion, NavLink, NumberedList, Paragraph, PhotoCard, PhotoCards, PhotoViewer, Photos, ProductCard, ProductCarousel, ProductDetail, ProductGrid, ProductImage, ProductModal, ProductTable, ProductTile, RangeChart, RecommendationCard, RecommendationGrid, Reveal, Route, Routes, Row, Rows, Rule, Slider, Sparklines, StackedBar, StripArrows, Table, Text, TextField, TextLink, Wordmark, liveTarget, productBadge, stripTakeoverEvents, useFileContext, useLiveDetail, useLiveItem, useLiveItems, useLiveValue, useLocalState, useLocation, useNavigate, useWakeAgent } = (init_kit(), __toCommonJS(kit_exports)).Files;

  // src/App.tsx
  var import_react = __toESM(require_react());

  // src/photos/infra.jpg
  var infra_default = "./assets/IOWJLGIR.jpg";

  // src/photos/logo-icon.png
  var logo_icon_default = "./assets/DI6NIXCB.png";

  // src/photos/logo-lockup.png
  var logo_lockup_default = "./assets/KFAO2PWO.png";

  // src/App.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var icons = {
    bolt: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 2 3 14h7l-1 8 10-12h-7l1-8z" }),
    headset: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 18v-6a9 9 0 0 1 18 0v6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" })
    ] }),
    globe: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12h20" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" })
    ] }),
    cloud: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" }),
    shield: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
    database: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
    ] })
  };
  function Icon({ name }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, children: icons[name] });
  }
  var services = [
    { icon: "bolt", name: "Managed IT", sub: "Your whole stack, watched 24/7.", hue: "#22b8cf", includes: ["24/7 monitoring and alerting", "Patching and device management", "Vendor and license management"] },
    { icon: "headset", name: "Help Desk", sub: "Real answers, in minutes.", hue: "#4dabf7", includes: ["Remote support in minutes", "On-site visits when hands are needed", "New-hire setup and offboarding"] },
    { icon: "globe", name: "Networks", sub: "Built clean. Documented.", hue: "#748ffc", includes: ["Network design and cabling", "Wi-Fi surveys and coverage", "Firewalls and secure remote access"] },
    { icon: "cloud", name: "Cloud", sub: "Migrations without the downtime.", hue: "#15aabf", includes: ["Email and file migrations", "Microsoft 365 and Google Workspace admin", "Cloud servers and storage"] },
    { icon: "shield", name: "Cybersecurity", sub: "Layered. Tested. Hardened.", hue: "#9775fa", includes: ["Endpoint and email protection", "MFA and access control", "Staff security training"] },
    { icon: "database", name: "Backup & Recovery", sub: "Back in hours, not weeks.", hue: "#20c997", includes: ["Automated cloud and local backups", "Regular recovery testing", "Ransomware rollback"] }
  ];
  var rhythm = ["Networks.", "Cloud.", "Security.", "Support."];
  var points = [
    { title: "One partner for everything", detail: "First cable to last migration. One team owns the whole stack." },
    { title: "Security built in", detail: "Hardened from day one, not patched after something breaks." },
    { title: "Predictable pricing", detail: "Flat monthly plans. You know the cost before the month starts." }
  ];
  var steps = [
    { title: "Assess", detail: "We audit everything. You get a plain-English plan and one flat price." },
    { title: "Build", detail: "We fix what is broken, standardize the stack, document it all." },
    { title: "Manage & Support", detail: "We monitor, patch, back up and answer the phone." }
  ];
  var stack = ["Microsoft 365", "Google Workspace", "Azure", "AWS", "Cloudflare", "Cisco", "Ubiquiti", "Dell", "HP", "Lenovo", "Synology", "MikroTik", "Fortinet", "Veeam", "Huntress", "Duo"];
  var industries = [
    { name: "Small Business", detail: "A full IT department, without the headcount." },
    { name: "Property Management", detail: "Office, on-site and smart-building systems kept online." },
    { name: "Healthcare", detail: "Secure, reliable systems that respect patient privacy." },
    { name: "Legal", detail: "Document and email systems that hold up under pressure." },
    { name: "Retail", detail: "Point-of-sale, Wi-Fi and back office that just work." }
  ];
  var faqs = [
    { q: "What does a managed service provider actually do?", a: "We take over day-to-day IT: monitoring, maintenance, support, security and planning, for one flat monthly fee. Think of it as an IT department you rent instead of hire." },
    { q: "How is this different from calling someone when something breaks?", a: "Break-fix waits for failure, then bills you by the hour while you are down. Managed services watch your systems around the clock and fix most issues before you ever notice them." },
    { q: "What does it cost?", a: "Flat monthly plans sized to your team and setup. After the assessment you get one number that covers everything - no surprise invoices when something breaks." },
    { q: "Can you work with the systems we already have?", a: "Yes. We start with what you have, document it, stabilize it, and upgrade in stages so nothing disrupts the business." },
    { q: "What happens if something goes down?", a: "You call one number and reach someone who knows your environment. Backups and recovery plans are tested in advance, so outages are measured in hours, not weeks." },
    { q: "Do you handle security and compliance needs?", a: "Layered security is built into every plan. For regulated fields like healthcare and legal, we map controls to your industry's requirements and keep the paperwork to prove it." }
  ];
  var termLines = [
    { p: "$", t: "et status --all" },
    { p: ">", t: "network .......... online", ok: true },
    { p: ">", t: "security ......... active", ok: true },
    { p: ">", t: "backups .......... verified", ok: true },
    { p: ">", t: "monitoring ....... 24/7", ok: true }
  ];
  function useReveal() {
    const rootRef = (0, import_react.useRef)(null);
    (0, import_react.useEffect)(() => {
      const root = rootRef.current;
      if (!root) return;
      root.classList.add("et-armed");
      const els = Array.from(root.querySelectorAll(".et-reveal"));
      const show = (el) => el.setAttribute("data-et-in", "");
      if (!("IntersectionObserver" in window)) {
        els.forEach(show);
        return;
      }
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach((e3) => {
          if (e3.isIntersecting) {
            show(e3.target);
            io2.unobserve(e3.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -24px 0px" });
      els.forEach((el) => io2.observe(el));
      const fallback = window.setTimeout(() => els.forEach(show), 1400);
      return () => {
        io2.disconnect();
        window.clearTimeout(fallback);
      };
    }, []);
    return rootRef;
  }
  function goTo(id2) {
    return (e3) => {
      e3.preventDefault();
      const el = document.getElementById(id2);
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    };
  }
  function BrandBar() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-brand", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "et-brand-name", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "et-brand-logo", src: logo_icon_default, alt: "Exclusive Tech logo" }),
        "EXCLUSIVE\xA0TECH"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "et-brand-nav", "aria-label": "Sections", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#services", onClick: goTo("services"), children: "services" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#process", onClick: goTo("process"), children: "process" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#about", onClick: goTo("about"), children: "about" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#faq", onClick: goTo("faq"), children: "faq" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#contact", onClick: goTo("contact"), children: "contact" })
      ] })
    ] });
  }
  function Terminal() {
    const [shown, setShown] = (0, import_react.useState)(termLines.length);
    (0, import_react.useEffect)(() => {
      setShown(0);
      let i = 0;
      const t = window.setInterval(() => {
        i += 1;
        setShown(i);
        if (i >= termLines.length) window.clearInterval(t);
      }, 320);
      return () => window.clearInterval(t);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-term", role: "img", "aria-label": "Terminal showing all systems online", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-term-bar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "exclusive-tech - zsh" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-term-body", children: [
        termLines.slice(0, shown).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-term-line", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { className: l.ok ? "et-term-p ok" : "et-term-p", children: l.p }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.t }),
          l.ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "et-term-check", children: "ok" })
        ] }, i)),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-term-line", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { className: "et-term-p", children: "$" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-cursor" })
        ] })
      ] })
    ] });
  }
  function Hero() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: "et-hero", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-hero-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-hero-inner", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "et-hero-logo", src: logo_lockup_default, alt: "Exclusive Tech - Exclusive solutions. Reliable tech." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-eyebrow", children: "~/managed-service-provider" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { className: "et-hero-title", children: [
          "We build",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-grad", children: "everything." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-hero-sub", children: "Networks, cloud, security, support - your entire IT stack, designed, built and run by one team." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-hero-cta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "et-btn et-btn-primary", href: "#contact", onClick: goTo("contact"), children: "Talk to us" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "et-btn et-btn-ghost", href: "#services", onClick: goTo("services"), children: "See what we do" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {})
    ] }) });
  }
  function Rhythm() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "et-rhythm", "aria-label": "What we build", children: [
      rhythm.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "et-rhythm-line et-reveal", style: { transitionDelay: `${i * 60}ms` }, tabIndex: 0, children: [
        "We build ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-rhythm-word", children: word })
      ] }, word)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-rhythm-tag et-reveal", style: { transitionDelay: "260ms" }, children: "Built for you. Run by us." })
    ] });
  }
  function Services() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { id: "services", className: "et-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-kicker et-reveal", children: "WHAT WE DO" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "et-h2 et-reveal", children: "Six ways we carry your IT" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "et-grid", children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-card et-reveal", style: { transitionDelay: `${i % 3 * 70}ms` }, tabIndex: 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-card-top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-num", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-chip", style: { background: `linear-gradient(135deg, ${s.hue}, ${s.hue}88)` }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: s.icon }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "et-card-name", children: s.name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-card-sub", children: s.sub }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "et-includes", children: s.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) })
      ] }, s.name)) })
    ] });
  }
  function Why() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: "et-why", children: points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-why-item et-reveal", style: { transitionDelay: `${i * 70}ms` }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "et-why-title", children: p.title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-why-detail", children: p.detail })
    ] }, p.title)) });
  }
  function Process() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { id: "process", className: "et-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-kicker et-reveal", children: "HOW IT WORKS" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "et-h2 et-reveal", children: "Three steps. You own the result." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "et-steps", children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-step et-reveal", style: { transitionDelay: `${i * 90}ms` }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-step-num", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "et-step-title", children: s.title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-step-detail", children: s.detail })
      ] }, s.title)) })
    ] });
  }
  function Stack() {
    const row = [...stack, ...stack];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "et-stack", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-kicker et-reveal", children: "WORKS WITH WHAT YOU ALREADY RUN" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "et-marquee", "aria-label": stack.join(", "), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "et-marquee-track", "aria-hidden": true, children: row.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-marquee-item", children: name }, i)) }) })
    ] });
  }
  function Industries() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "et-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-kicker et-reveal", children: "WHO WE SERVE" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "et-h2 et-reveal", children: "Built for businesses like yours" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "et-industries", children: industries.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-industry et-reveal", style: { transitionDelay: `${i % 3 * 70}ms` }, tabIndex: 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "et-industry-name", children: ind.name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-industry-detail", children: ind.detail })
      ] }, ind.name)) })
    ] });
  }
  function About() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { id: "about", className: "et-about", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-about-inner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-about-text", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-kicker et-reveal", children: "ABOUT" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "et-h2 et-reveal", children: "One team. Every layer." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-key et-reveal", children: '"I build everything." That is the whole idea.' }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-p et-reveal", children: "Exclusive Tech is a managed service provider: we design, build and run the technology your business depends on, from the wiring in the walls to the cloud your files live in. The same hands that plan your network are the ones who answer when you call." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-p et-reveal", children: "No ticket black holes. No being passed between vendors. Just systems that work, and someone accountable when they do not." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { className: "et-about-figure et-reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: infra_default, alt: "Illustration of cloud, servers, devices and a security shield connected by glowing lines" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-caption", children: "fig. 1 - illustration" })
      ] })
    ] }) });
  }
  function Faq() {
    const [open, setOpen] = (0, import_react.useState)(0);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { id: "faq", className: "et-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-kicker et-reveal", children: "QUESTIONS" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "et-h2 et-reveal", children: "Asked before every first call" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "et-faq", children: faqs.map((f, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `et-faq-item et-reveal${isOpen ? " is-open" : ""}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "et-faq-q", "aria-expanded": isOpen, onClick: () => setOpen(isOpen ? -1 : i), children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.q }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-faq-sign", "aria-hidden": true, children: isOpen ? "-" : "+" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "et-faq-a", role: "region", "aria-hidden": !isOpen, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: f.a }) })
        ] }, f.q);
      }) })
    ] });
  }
  function Contact() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { id: "contact", className: "et-cta", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-kicker et-reveal", children: "CONTACT" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "et-cta-title et-reveal", children: "Ready when you are." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "et-cta-sub et-reveal", children: "Tell us what is slowing you down and we will map the fix. First conversation is free, and there is no obligation past it." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-hero-cta et-reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "et-btn et-btn-primary", href: "tel:+19298131181", children: "Call 929-813-1181" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "et-btn et-btn-ghost", href: "mailto:admin@exclusivetech.us", children: "admin@exclusivetech.us" })
      ] })
    ] });
  }
  function Footer() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { className: "et-footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "et-footer-brand", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: logo_icon_default, alt: "" }),
        "EXCLUSIVE\xA0TECH"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "et-footer-meta", children: "\xA9 2026 Exclusive Tech \xB7 exclusivetech.us" })
    ] });
  }
  function App() {
    const rootRef = useReveal();
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: rootRef, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FileCard, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "et-top", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandBar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rhythm, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
    ] }) });
  }

  // src/main.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/chunk-HT4INDD5.mjs:
react-router/dist/development/dom-export.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.mjs:
  (**
   * react-router-dom v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
